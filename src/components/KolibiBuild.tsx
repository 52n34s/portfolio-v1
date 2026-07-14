import Link from "next/link";

const FEATURES = [
  {
    icon: "📸",
    title: "Snap. Done.",
    body: "Point your camera at your plate. Kolibi reads every ingredient separately in seconds.",
  },
  {
    icon: "⚡",
    title: "No typing. No searching.",
    body: "No database, no manual logging. Just the answer: am I on track today?",
  },
  {
    icon: "🎯",
    title: "Built for real life",
    body: "Fast food, home cooking, restaurant meals — Kolibi handles all of it.",
  },
];

const FOOD_ITEMS = [
  { name: "Chicken breast", detail: "140g · 231 kcal" },
  { name: "Brown rice", detail: "120g · 174 kcal" },
  { name: "Broccoli", detail: "80g · 28 kcal" },
];

const UPWORK_URL =
  "https://www.upwork.com/freelancers/~01984538d26b3fcb98?viewMode=1";

export default function KolibiBuild() {
  return (
    <main className="kolibi-room">
      <section className="kolibi-room-hero">
        <div className="kolibi-room-inner">
          <div className="kolibi-room-content">
            <span className="kolibi-room-badge">AI Photo Calorie Tracker</span>

            <h1 className="kolibi-room-headline">Snap a photo.</h1>
            <h2 className="kolibi-room-headline-sub">Know instantly.</h2>

            <p className="kolibi-room-intro">
              Kolibi reads every ingredient on your plate — separately. No database
              searching, no typing. Just the one answer you actually want: am I still
              on track today?
            </p>

            <div className="kolibi-room-divider" />

            <dl className="kolibi-room-meta">
              <div className="kolibi-room-meta-item">
                <dt>Platform</dt>
                <dd>iOS &amp; Android</dd>
              </div>
              <div className="kolibi-room-meta-item">
                <dt>Role</dt>
                <dd>Solo Developer</dd>
              </div>
              <div className="kolibi-room-meta-item">
                <dt>Live</dt>
                <dd>
                  <a
                    href="https://kolibi.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    kolibi.app
                  </a>
                </dd>
              </div>
              <div className="kolibi-room-meta-item">
                <dt>Timeline</dt>
                <dd>Idea → Launch</dd>
              </div>
            </dl>

            <div className="kolibi-room-actions">
              <a
                href="https://kolibi.app"
                className="kolibi-room-btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit kolibi.app →
              </a>
              <a
                href={UPWORK_URL}
                className="kolibi-room-btn-ghost"
                target="_blank"
                rel="noopener noreferrer"
              >
                Work with me
              </a>
            </div>
          </div>

          <div className="kolibi-room-visual">
            <div className="orivela-phone">
              <div className="orivela-phone-island" aria-hidden="true" />
              <div className="kolibi-phone-screen">
                <div className="kolibi-app-header">
                  <p className="kolibi-app-brand">🦅 Kolibi</p>
                  <p className="kolibi-app-greeting">Good afternoon</p>
                </div>

                <p className="kolibi-app-kcal">496 kcal</p>
                <p className="kolibi-app-meal">Lunch · high confidence</p>

                <ul className="kolibi-food-list">
                  {FOOD_ITEMS.map((item) => (
                    <li key={item.name} className="kolibi-food-card">
                      <p className="kolibi-food-name">{item.name}</p>
                      <p className="kolibi-food-detail">{item.detail}</p>
                    </li>
                  ))}
                </ul>

                <div className="kolibi-progress">
                  <div className="kolibi-progress-bar" aria-hidden="true">
                    <span className="kolibi-progress-fill" />
                  </div>
                  <p className="kolibi-progress-label">
                    Daily goal: 1,840 kcal — 27% tracked
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="kolibi-room-section">
        <div className="kolibi-room-features">
          {FEATURES.map((feature) => (
            <article key={feature.title} className="kolibi-room-feature">
              <span className="kolibi-room-feature-icon">{feature.icon}</span>
              <div>
                <h3 className="kolibi-room-feature-title">{feature.title}</h3>
                <p className="kolibi-room-feature-body">{feature.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="kolibi-room-section kolibi-room-footer">
        <Link href="/builds" className="kolibi-room-back">
          ← All builds
        </Link>
      </section>
    </main>
  );
}
