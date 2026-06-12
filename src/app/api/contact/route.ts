import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

const resend = new Resend(process.env.RESEND_API_KEY!)

export async function POST(req: NextRequest) {
  const { name, email, projectTypes, message } = await req.json()

  // Save to Supabase
  const { error } = await supabase
    .from('portfolio_contacts')
    .insert([{ name, email, project_types: projectTypes, message }])

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  // Send email via Resend
  await resend.emails.send({
    from: 'portfolio@52n34s.com',
    to: 'steffen@52n34s.com',
    subject: `🔔 New project inquiry from ${name}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Inter', Arial, sans-serif; background: #F5F0E8; margin: 0; padding: 0; }
            .container { max-width: 560px; margin: 40px auto; background: #1A1A1A; border-radius: 16px; overflow: hidden; }
            .header { background: #FF6B35; padding: 32px; text-align: center; }
            .header h1 { color: #0D0D0D; font-size: 24px; font-weight: 800; margin: 0; letter-spacing: -0.02em; }
            .header p { color: #0D0D0D; font-size: 13px; margin: 8px 0 0; opacity: 0.7; }
            .body { padding: 32px; }
            .field { margin-bottom: 24px; }
            .label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; color: #555; font-weight: 600; margin-bottom: 6px; }
            .value { font-size: 15px; color: #F5F0E8; font-weight: 400; line-height: 1.6; }
            .tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 4px; }
            .tag { background: #FF6B3520; border: 1px solid #FF6B3540; color: #FF6B35; font-size: 11px; padding: 4px 10px; border-radius: 100px; }
            .message-box { background: #111; border: 0.5px solid #2a2a2a; border-radius: 8px; padding: 16px; margin-top: 4px; }
            .footer { padding: 24px 32px; border-top: 0.5px solid #222; text-align: center; }
            .footer a { color: #FF6B35; font-size: 13px; text-decoration: none; font-weight: 600; }
            .footer p { color: #444; font-size: 11px; margin: 8px 0 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Project Inquiry</h1>
              <p>Someone wants to build something real.</p>
            </div>
            <div class="body">
              <div class="field">
                <div class="label">From</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${email}" style="color:#FF6B35">${email}</a></div>
              </div>
              <div class="field">
                <div class="label">Project Type</div>
                <div class="tags">
                  ${projectTypes?.map((type: string) => `<span class="tag">${type}</span>`).join('') || '<span style="color:#555">Not specified</span>'}
                </div>
              </div>
              <div class="field">
                <div class="label">Message</div>
                <div class="message-box">
                  <div class="value">${message}</div>
                </div>
              </div>
            </div>
            <div class="footer">
              <a href="mailto:${email}">Reply to ${name} →</a>
              <p>Received via 52n34s.app · portfolio contact form</p>
            </div>
          </div>
        </body>
      </html>
    `
  })

  return NextResponse.json({ success: true })
}
