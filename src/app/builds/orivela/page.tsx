import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Orivela — Steffen",
  description:
    "AI-powered iOS vault for personal records — shipped to the App Store. End-to-end encrypted, plain-language search, document scanning.",
};

const OUTCOMES = [
  {
    title: "Find anything in seconds",
    body: "Ask in plain language — \"When does my car insurance renew?\" — and get the answer instantly. No folders, no scrolling.",
  },
  {
    title: "Scan any document",
    body: "Point your camera at a PDF, receipt, or warranty card. Claude Vision extracts the details and files it for you.",
  },
  {
    title: "Only you can read it",
    body: "Records are encrypted on-device with WebCrypto before they ever leave your phone. Not even the server can decrypt them.",
  },
  {
    title: "AI that knows your life",
    body: "The assistant searches your vault contextually — understanding relationships between entries, not just keywords.",
  },
];

const STACK = [
  "Expo / React Native",
  "Supabase",
  "Claude Haiku",
  "Claude Vision",
  "WebCrypto API",
  "EAS Build",
  "Next.js",
  "Vercel",
  "TypeScript",
];

const RECORDS = [
  {
    title: "Passport",
    category: "Documents",
    categoryColor: "#5DCAA5",
    categoryBg: "rgba(29,158,117,0.2)",
    date: "12 Jan 2026",
  },
  {
    title: "Adobe Creative Cloud",
    category: "Finance",
    categoryColor: "#FAC775",
    categoryBg: "rgba(239,159,39,0.18)",
    date: "03 Feb 2026",
  },
  {
    title: "Apartment Emergency Contacts",
    category: "Home",
    categoryColor: "#85B7EB",
    categoryBg: "rgba(55,138,221,0.18)",
    date: "18 Feb 2026",
  },
];

const UPWORK_URL =
  "https://www.upwork.com/freelancers/~01984538d26b3fcb98?viewMode=1";

export default function OrivelaBuildPage() {
  return (
    <main className="orivela-build">
      {/* Hero */}
      <section className="orivela-section orivela-hero">
        <div className="orivela-badge">
          <span className="orivela-badge-dot" aria-hidden="true" />
          Shipped to App Store
        </div>

        <h1 className="orivela-headline">
          Orivela — Your records, always at hand.
        </h1>

        <p className="orivela-subtitle">
          A personal records vault for iOS. Store insurance PDFs, subscription
          logins, lease agreements, and emergency contacts in one encrypted
          place — then ask for anything in plain language and get the answer
          instantly.
        </p>

        <dl className="orivela-meta">
          <div className="orivela-meta-item">
            <dt>Platform</dt>
            <dd>iOS</dd>
          </div>
          <div className="orivela-meta-item">
            <dt>Role</dt>
            <dd>Solo Developer</dd>
          </div>
          <div className="orivela-meta-item">
            <dt>Live</dt>
            <dd>
              <a href="https://orivela.app" target="_blank" rel="noopener noreferrer">
                orivela.app
              </a>
            </dd>
          </div>
          <div className="orivela-meta-item">
            <dt>Timeline</dt>
            <dd>Idea → App Store</dd>
          </div>
        </dl>
      </section>

      {/* App preview */}
      <section className="orivela-section">
        <h2 className="orivela-section-title">App preview</h2>
        <p className="orivela-section-lead">
          The home screen — search, scan, and browse your vault at a glance.
        </p>

        <div className="orivela-phone-wrap">
          <div className="orivela-phone">
            <div className="orivela-phone-island" aria-hidden="true" />
            <div className="orivela-phone-screen">
              <div className="orivela-app-header">
                <span className="orivela-app-logo">🦜</span>
                <div>
                  <p className="orivela-app-greeting">Good afternoon</p>
                  <p className="orivela-app-title">Orivela</p>
                </div>
              </div>

              <div className="orivela-search">
                <span className="orivela-search-icon" aria-hidden="true">
                  ⌕
                </span>
                <span className="orivela-search-placeholder">
                  Ask anything about your records…
                </span>
              </div>

              <ul className="orivela-records">
                {RECORDS.map((record) => (
                  <li key={record.title} className="orivela-record">
                    <div className="orivela-record-main">
                      <p className="orivela-record-title">{record.title}</p>
                      <span
                        className="orivela-record-tag"
                        style={{
                          color: record.categoryColor,
                          background: record.categoryBg,
                        }}
                      >
                        {record.category}
                      </span>
                    </div>
                    <span className="orivela-record-date">{record.date}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Dream outcomes */}
      <section className="orivela-section">
        <h2 className="orivela-section-title">Dream outcomes</h2>
        <div className="orivela-outcomes">
          {OUTCOMES.map((outcome) => (
            <article key={outcome.title} className="orivela-outcome-card">
              <h3 className="orivela-outcome-title">{outcome.title}</h3>
              <p className="orivela-outcome-body">{outcome.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Architecture */}
      <section className="orivela-section">
        <h2 className="orivela-section-title">Architecture</h2>
        <p className="orivela-section-lead">
          AI requests never touch the client with secrets — the app calls a
          Supabase Edge Function, which holds the Anthropic API key server-side.
        </p>

        <pre className="orivela-code">
          <code>
            User → Expo App → Supabase Edge Function → Anthropic API → App
          </code>
        </pre>

        <p className="orivela-code-note">
          The Anthropic API key is never bundled in the app. All AI calls route
          through authenticated edge functions with rate limiting.
        </p>

        <div className="orivela-stack">
          {STACK.map((tag) => (
            <span key={tag} className="orivela-stack-tag">
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="orivela-section orivela-cta">
        <h2 className="orivela-section-title">Try it or work together</h2>
        <div className="orivela-cta-actions">
          <a
            href="https://orivela.app"
            className="orivela-btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit orivela.app
          </a>
          <a
            href={UPWORK_URL}
            className="orivela-btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Work with me
          </a>
        </div>
        <p className="orivela-cta-back">
          <Link href="/builds">← All builds</Link>
        </p>
      </section>
    </main>
  );
}
