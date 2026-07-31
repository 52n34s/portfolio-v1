import type { Metadata } from "next";
import Link from "next/link";
import { legal } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy — 52N34S",
  description:
    "How 52n34s.app handles personal data. No analytics, no tracking, no cookie banner.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://52n34s.app/privacy" },
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-12">
      <h2 className="font-display text-xl text-[#1A1A1A] mb-3">{title}</h2>
      <div className="text-[#1A1A1A]/80 leading-relaxed space-y-3">
        {children}
      </div>
    </section>
  );
}

function Sub({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-6">
      <h3 className="font-display text-base text-[#1A1A1A] mb-2">{title}</h3>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

const cell = "py-3 pr-4 align-top border-b border-[#1A1A1A]/10";
const head = "py-3 pr-4 text-left font-medium border-b border-[#1A1A1A]/20";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#F5F0E8] px-6 py-20 md:px-10">
      <div className="mx-auto w-full max-w-[680px]">
        <Link
          href="/"
          className="font-mono text-sm text-[#7B5CF0] hover:underline"
        >
          ← 52n34s.app
        </Link>

        <h1 className="font-display text-4xl md:text-5xl text-[#1A1A1A] mt-8">
          Privacy Policy
        </h1>
        <p className="mt-3 font-mono text-sm text-[#1A1A1A]/50">
          Last updated: {legal.lastUpdatedEn}
        </p>

        <p className="mt-6 text-[#1A1A1A]/80 leading-relaxed">
          This policy covers the website 52n34s.app. The apps published under
          52N34S each have their own privacy policy on their own domain.
        </p>

        <Section title="1. Controller">
          <p>
            {legal.name} — {legal.company}
            <br />
            {legal.street}, {legal.postalCode} {legal.city}, Germany
            <br />
            Email:{" "}
            <a
              href={`mailto:${legal.emailPrivacy}`}
              className="text-[#7B5CF0] hover:underline"
            >
              {legal.emailPrivacy}
            </a>
          </p>
          <p>
            We are not required to appoint a Data Protection Officer under Art.
            37 GDPR.
          </p>
        </Section>

        <Section title="2. In short">
          <p>
            This site has no analytics. No Google Analytics, no Vercel
            Analytics, no PostHog, no advertising SDK, no tracking across sites,
            and no sale of data.
          </p>
          <p>
            It sets no cookies for advertising, analytics or cross-site
            tracking, and stores nothing on your device beyond what is
            technically required to serve the page. There is therefore no
            consent banner: § 25 TDDDG is not triggered, because there is
            nothing to consent to.
          </p>
          <p>
            Personal data reaches us in exactly one situation: when you fill in
            the contact form. Everything else described below is standard
            server operation.
          </p>
        </Section>

        <Section title="3. Contact form">
          <p>
            When you send the contact form, we store the name and email address
            you enter, the project type you select, and your message. The data
            is stored in a database hosted by Supabase in the EU region.
          </p>
          <p>
            A notification email is delivered through Resend so that we see your
            enquiry. Your message content is part of that email.
          </p>
          <p>
            <strong className="font-medium">Legal basis:</strong> Art. 6(1)(b)
            GDPR where your enquiry concerns a possible working relationship,
            and Art. 6(1)(f) GDPR — our legitimate interest in answering
            enquiries addressed to us.
          </p>
          <p>
            <strong className="font-medium">Retention:</strong> 12 months after
            the matter is closed, unless a working relationship comes out of it,
            in which case statutory retention periods apply. You can ask us to
            delete your enquiry earlier at any time.
          </p>
          <p>
            We do not use your address for newsletters or marketing. There is no
            mailing list on this site.
          </p>
        </Section>

        <Section title="4. Operating the site">
          <Sub title="4.1 Hosting">
            <p>
              The site is hosted by Vercel. Standard server logs — IP address,
              timestamp, requested URL, referrer, browser and operating system —
              are processed as part of hosting operations, for security,
              troubleshooting and abuse prevention. These logs are not merged
              with other data and are not used to identify you.
            </p>
            <p>
              <strong className="font-medium">Legal basis:</strong> Art. 6(1)(f)
              GDPR.
            </p>
          </Sub>

          <Sub title="4.2 DNS and content delivery">
            <p>
              Domain resolution and traffic routing run through Cloudflare. In
              this role Cloudflare processes connection data including your IP
              address in order to route the request and to filter malicious
              traffic.
            </p>
            <p>
              <strong className="font-medium">Legal basis:</strong> Art. 6(1)(f)
              GDPR — secure and reliable delivery of the site.
            </p>
          </Sub>

          <Sub title="4.3 Fonts">
            <p>
              Web fonts are bundled when the site is built and served from our
              own domain. Your browser makes no request to Google Fonts or any
              other font provider, and no IP address is transmitted to a font
              provider.
            </p>
          </Sub>

          <Sub title="4.4 Outbound links">
            <p>
              This site links to external destinations including the Apple App
              Store, Google Play, Instagram, Upwork and the websites of the apps
              published under 52N34S. Once you follow such a link, the privacy
              policy of that destination applies. We have no influence over what
              happens there and receive no data back.
            </p>
          </Sub>
        </Section>

        <Section title="5. Legal bases at a glance">
          <table className="w-full text-sm mt-2">
            <thead>
              <tr>
                <th className={head}>Processing</th>
                <th className={head}>Legal basis</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={cell}>Contact form</td>
                <td className={cell}>Art. 6(1)(b), (f)</td>
              </tr>
              <tr>
                <td className={cell}>Notification email</td>
                <td className={cell}>Art. 6(1)(f)</td>
              </tr>
              <tr>
                <td className={cell}>Server logs</td>
                <td className={cell}>Art. 6(1)(f)</td>
              </tr>
              <tr>
                <td className={cell}>DNS and routing</td>
                <td className={cell}>Art. 6(1)(f)</td>
              </tr>
            </tbody>
          </table>
        </Section>

        <Section title="6. Processors and recipients">
          <table className="w-full text-sm mt-2">
            <thead>
              <tr>
                <th className={head}>Service</th>
                <th className={head}>Purpose</th>
                <th className={head}>Location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={cell}>Supabase Inc. (US)</td>
                <td className={cell}>Contact form database</td>
                <td className={cell}>EU region; DPA in place</td>
              </tr>
              <tr>
                <td className={cell}>Resend Inc. (US)</td>
                <td className={cell}>Notification email</td>
                <td className={cell}>US; DPA in place</td>
              </tr>
              <tr>
                <td className={cell}>Vercel Inc. (US)</td>
                <td className={cell}>Hosting</td>
                <td className={cell}>US / EU edge; DPA in place</td>
              </tr>
              <tr>
                <td className={cell}>Cloudflare Inc. (US)</td>
                <td className={cell}>DNS, content delivery</td>
                <td className={cell}>Global edge; DPA in place</td>
              </tr>
            </tbody>
          </table>
        </Section>

        <Section title="7. International data transfers">
          <p>
            Some of the providers above are based outside the EEA or have a US
            parent company. Where personal data is transferred to the United
            States, we rely on the EU-U.S. Data Privacy Framework where the
            recipient is certified under it, and otherwise on the European
            Commission&rsquo;s Standard Contractual Clauses. You can request a
            copy of the relevant safeguards at {legal.emailPrivacy}.
          </p>
        </Section>

        <Section title="8. Retention">
          <table className="w-full text-sm mt-2">
            <thead>
              <tr>
                <th className={head}>Data</th>
                <th className={head}>Retention</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={cell}>Contact form enquiry</td>
                <td className={cell}>12 months after the matter is closed</td>
              </tr>
              <tr>
                <td className={cell}>Notification email</td>
                <td className={cell}>Until deleted from the mailbox</td>
              </tr>
              <tr>
                <td className={cell}>Server logs (Vercel)</td>
                <td className={cell}>Approximately 30 days</td>
              </tr>
            </tbody>
          </table>
        </Section>

        <Section title="9. Your rights">
          <p>Under the GDPR you have the right to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>access your data (Art. 15)</li>
            <li>have inaccurate data corrected (Art. 16)</li>
            <li>have your data erased (Art. 17)</li>
            <li>restrict processing (Art. 18)</li>
            <li>receive your data in a portable format (Art. 20)</li>
            <li>
              object to processing based on legitimate interest (Art. 21)
            </li>
            <li>
              lodge a complaint with a supervisory authority (Art. 77), in
              particular in the Member State of your habitual residence, your
              place of work, or the place of the alleged infringement
            </li>
          </ul>
          <p>
            To exercise any of these, write to{" "}
            <a
              href={`mailto:${legal.emailPrivacy}`}
              className="text-[#7B5CF0] hover:underline"
            >
              {legal.emailPrivacy}
            </a>
            .
          </p>
          <p>
            Competent supervisory authority for us:
            <br />
            {legal.dpaName} ({legal.dpaShort})
            <br />
            {legal.dpaAddress}
          </p>
        </Section>

        <Section title="10. Children">
          <p>
            This site is not directed at children under 16, and we do not
            knowingly collect data from children under 16. If you believe a
            child has provided us with data, write to {legal.emailPrivacy} and
            we will delete it promptly.
          </p>
        </Section>

        <Section title="11. Changes to this policy">
          <p>
            We update this policy when the site or the services behind it
            change. The current version is always available at
            52n34s.app/privacy.
          </p>
        </Section>

        <nav className="mt-16 pt-8 border-t border-[#1A1A1A]/10 font-mono text-sm">
          <Link href="/privacy" className="text-[#1A1A1A]/50">
            Privacy
          </Link>
          <span className="mx-2 text-[#1A1A1A]/30">·</span>
          <Link href="/imprint" className="text-[#7B5CF0] hover:underline">
            Impressum
          </Link>
        </nav>
      </div>
    </main>
  );
}
