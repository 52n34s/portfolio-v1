import Link from "next/link";

const OUTCOMES = [
  {
    icon: "⌕",
    title: "Find anything in seconds",
    body: "Ask in plain language — no folders, no scrolling.",
  },
  {
    icon: "📄",
    title: "Scan any document",
    body: "Point your camera at a PDF or receipt. AI extracts and files it.",
  },
  {
    icon: "🔐",
    title: "Only you can read it",
    body: "Encrypted on-device with WebCrypto before it ever leaves your phone.",
  },
  {
    icon: "✦",
    title: "AI that knows your life",
    body: "Contextual search across your vault — not just keyword matching.",
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
    subtitle:
      "Passport number: C3X8821K. Issued: June 2021. Expires: June 2031.",
    date: "Jun 27, 2026",
  },
  {
    title: "Adobe Creative Cloud",
    category: "Finance",
    categoryColor: "#FAC775",
    categoryBg: "rgba(239,159,39,0.18)",
    subtitle:
      "Plan: Complete. Price: €89/month. Renewal: automatically every 15th.",
    date: "Jun 27, 2026",
  },
  {
    title: "Apartment — Emergency Contacts",
    category: "Home",
    categoryColor: "#85B7EB",
    categoryBg: "rgba(55,138,221,0.18)",
    subtitle:
      "Landlord: Thomas Müller, 0172 443 8821. Building manager: Hausverwaltung Bergmann.",
    date: "Jun 27, 2026",
  },
];

const UPWORK_URL =
  "https://www.upwork.com/freelancers/~01984538d26b3fcb98?viewMode=1";

export default function OrivelaBuild() {
  return (
    <main className="orivela-room">
      <div className="orivela-room-blob orivela-room-blob-purple" aria-hidden="true" />
      <div className="orivela-room-blob orivela-room-blob-pink" aria-hidden="true" />

      {/* Hero — mirrors Room 04 two-column layout */}
      <section className="orivela-room-hero">
        <div className="orivela-room-inner">
          <div className="orivela-room-content">
            <span className="orivela-room-badge">
              <span className="orivela-room-badge-dot" aria-hidden="true" />
              Shipped to App Store
            </span>

            <h1 className="orivela-room-headline">
              Your records,
              <br />
              <span className="orivela-room-headline-accent">always at hand</span>
              <span className="orivela-room-dot">.</span>
            </h1>

            <p className="orivela-room-intro">
              A personal records vault for iOS. Store insurance PDFs, subscription
              logins, lease agreements, and emergency contacts in one encrypted
              place — then ask for anything in plain language.
            </p>

            <div className="orivela-room-divider" />

            <dl className="orivela-room-meta">
              <div className="orivela-room-meta-item">
                <dt>Platform</dt>
                <dd>iOS</dd>
              </div>
              <div className="orivela-room-meta-item">
                <dt>Role</dt>
                <dd>Solo Developer</dd>
              </div>
              <div className="orivela-room-meta-item">
                <dt>Live</dt>
                <dd>
                  <a
                    href="https://orivela.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    orivela.app
                  </a>
                </dd>
              </div>
              <div className="orivela-room-meta-item">
                <dt>Timeline</dt>
                <dd>Idea → App Store</dd>
              </div>
            </dl>

            <div className="orivela-room-actions">
              <a
                href="https://orivela.app"
                className="orivela-room-btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit orivela.app →
              </a>
              <a
                href={UPWORK_URL}
                className="orivela-room-btn-ghost"
                target="_blank"
                rel="noopener noreferrer"
              >
                Work with me
              </a>
            </div>
          </div>

          <div className="orivela-room-visual">
            <div className="orivela-phone">
              <div className="orivela-phone-island" aria-hidden="true" />
              <div className="orivela-phone-screen">
                <div className="orivela-app-header">
                  <p className="orivela-app-brand">🦜 Orivela</p>
                  <p className="orivela-app-greeting">Good evening</p>
                  <p className="orivela-app-count">5 records saved</p>
                </div>

                <div className="orivela-search">
                  <span className="orivela-search-icon" aria-hidden="true">
                    ⌕
                  </span>
                  <span className="orivela-search-placeholder">
                    Ask a question or search your records...
                  </span>
                </div>

                <p className="orivela-recent-label">Recent</p>

                <ul className="orivela-records">
                  {RECORDS.map((record) => (
                    <li key={record.title} className="orivela-record">
                      <div className="orivela-record-top">
                        <p className="orivela-record-title">{record.title}</p>
                        <span className="orivela-record-date">{record.date}</span>
                      </div>
                      <span
                        className="orivela-record-tag"
                        style={{
                          color: record.categoryColor,
                          background: record.categoryBg,
                        }}
                      >
                        {record.category}
                      </span>
                      <p className="orivela-record-subtitle">{record.subtitle}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dream outcomes — 2×2 grid */}
      <section className="orivela-room-section">
        <h2 className="orivela-room-section-title">Dream outcomes</h2>
        <div className="orivela-room-outcomes">
          {OUTCOMES.map((outcome) => (
            <article key={outcome.title} className="orivela-room-outcome">
              <span className="orivela-room-outcome-icon">{outcome.icon}</span>
              <div>
                <h3 className="orivela-room-outcome-title">{outcome.title}</h3>
                <p className="orivela-room-outcome-body">{outcome.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Architecture + stack */}
      <section className="orivela-room-section">
        <h2 className="orivela-room-section-title">Architecture</h2>
        <p className="orivela-room-section-lead">
          AI requests never touch the client with secrets — the app calls a
          Supabase Edge Function, which holds the Anthropic API key server-side.
        </p>

        <pre className="orivela-room-code">
          <code>
            User → Expo App → Supabase Edge Function → Anthropic API → App
          </code>
        </pre>

        <p className="orivela-room-code-note">
          The Anthropic API key is never bundled in the app. All AI calls route
          through authenticated edge functions with rate limiting.
        </p>

        <div className="orivela-room-stack">
          {STACK.map((tag) => (
            <span key={tag} className="orivela-room-stack-tag">
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section className="orivela-room-section orivela-room-footer">
        <Link href="/builds" className="orivela-room-back">
          ← All builds
        </Link>
      </section>
    </main>
  );
}
