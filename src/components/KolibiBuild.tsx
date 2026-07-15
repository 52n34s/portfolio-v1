import Image from "next/image";
import Link from "next/link";

const FEATURES = [
  {
    eyebrow: "Step 1",
    title: "Open. Snap.",
    body: "3 seconds. That's all it takes to log a meal.",
  },
  {
    eyebrow: "Step 2",
    title: "Kolibi reads everything.",
    body: "Every ingredient. Every gram. Automatically — no database, no typing.",
  },
  {
    eyebrow: "Step 3",
    title: "Know your day.",
    body: "Remaining calories. Always visible. Always accurate.",
  },
];

const MEALS = [
  {
    name: "Seared Tuna, Avocado, Cured Ham...",
    detail: "295g · 706 kcal · 11:18 AM",
  },
  {
    name: "Vegan Protein Cookie (Half Baked...)",
    detail: "1 pcs · 189 kcal · 9:41 AM",
  },
  {
    name: "Cola",
    detail: "330 ml · 139 kcal · 9:15 AM",
  },
];

const INGREDIENTS = [
  { name: "Seared Tuna", amount: 120, kcal: 192 },
  { name: "Avocado", amount: 80, kcal: 128 },
  { name: "Cured Ham/Serrano Ham", amount: 60, kcal: 288 },
  { name: "Scallions/Green Onions", amount: 25, kcal: 9 },
];

const UPWORK_URL =
  "https://www.upwork.com/freelancers/~01984538d26b3fcb98?viewMode=1";

function KolibiStatusBar({ time }: { time: string }) {
  return <p className="kolibi-status-bar">{time}</p>;
}

function KolibiDashboardMockup() {
  return (
    <div className="kolibi-mockup kolibi-mockup-back" aria-hidden="true">
      <div className="kolibi-mockup-screen kolibi-mockup-screen-home">
        <KolibiStatusBar time="11:18  ·  5G  95" />

        <div className="kolibi-dash-header">
          <p className="kolibi-dash-greeting">Good morning, Steffen</p>
          <span className="kolibi-dash-icon">🦅</span>
        </div>
        <p className="kolibi-dash-trial">Trial: 2 days left</p>

        <div className="kolibi-dash-card">
          <p className="kolibi-dash-card-label">Remaining today</p>
          <p className="kolibi-dash-card-kcal">1132</p>
          <p className="kolibi-dash-card-sub">Daily goal 2166 · +0 burned</p>
        </div>

        <div className="kolibi-dash-weight">
          <div className="kolibi-dash-weight-col">
            <div className="kolibi-dash-weight-icons">
              <span>⚖️</span>
              <span className="kolibi-dash-edit">✏️</span>
            </div>
            <p className="kolibi-dash-weight-label">Current weight</p>
            <p className="kolibi-dash-weight-value">87 kg</p>
          </div>
          <div className="kolibi-dash-weight-col">
            <div className="kolibi-dash-weight-icons">
              <span>🚩</span>
              <span className="kolibi-dash-edit">✏️</span>
            </div>
            <p className="kolibi-dash-weight-label">Target weight</p>
            <p className="kolibi-dash-weight-value">84 kg</p>
            <p className="kolibi-dash-weight-diff">-3 kg</p>
          </div>
        </div>

        <p className="kolibi-dash-section">Today&apos;s meals</p>

        <ul className="kolibi-dash-meals">
          {MEALS.map((meal) => (
            <li key={meal.name} className="kolibi-dash-meal">
              <p className="kolibi-dash-meal-name">{meal.name}</p>
              <p className="kolibi-dash-meal-detail">{meal.detail}</p>
            </li>
          ))}
        </ul>

        <div className="kolibi-dash-tabbar">
          <span className="kolibi-dash-nav-item">
            <span className="kolibi-dash-nav-emoji">✏️</span>
            Manual
          </span>
          <span className="kolibi-dash-nav-item kolibi-dash-nav-scan">
            <span className="kolibi-dash-nav-scan-btn">📷</span>
            Scan meal
          </span>
          <span className="kolibi-dash-nav-item">
            <span className="kolibi-dash-nav-barcode">▦</span>
            Barcode
          </span>
        </div>
      </div>
    </div>
  );
}

function KolibiEditMealMockup() {
  return (
    <div className="kolibi-mockup kolibi-mockup-front" aria-hidden="true">
      <div className="kolibi-mockup-screen kolibi-mockup-screen-edit">
        <KolibiStatusBar time="11:19 · 5G · 95" />

        <p className="kolibi-edit-header">Edit meal</p>

        <div className="kolibi-edit-total">
          <p className="kolibi-edit-kcal">706</p>
          <p className="kolibi-edit-kcal-label">Total kcal</p>
        </div>

        <ul className="kolibi-edit-ingredients">
          {INGREDIENTS.map((item) => (
            <li key={item.name} className="kolibi-edit-ingredient">
              <p className="kolibi-edit-ingredient-name">{item.name}</p>
              <div className="kolibi-edit-ingredient-row">
                <span className="kolibi-edit-field">
                  <span className="kolibi-edit-field-label">Amount</span>
                  <span className="kolibi-edit-stepper">
                    <button type="button" className="kolibi-edit-step">
                      −
                    </button>
                    {item.amount}
                    <button type="button" className="kolibi-edit-step">
                      +
                    </button>
                  </span>
                </span>
                <span className="kolibi-edit-field">
                  <span className="kolibi-edit-field-label">kcal</span>
                  <span className="kolibi-edit-stepper">
                    <button type="button" className="kolibi-edit-step">
                      −
                    </button>
                    {item.kcal}
                    <button type="button" className="kolibi-edit-step">
                      +
                    </button>
                  </span>
                </span>
              </div>
            </li>
          ))}
        </ul>

        <p className="kolibi-edit-add">+ Add product</p>

        <button type="button" className="kolibi-edit-save">
          Save changes
        </button>
        <button type="button" className="kolibi-edit-delete">
          Delete meal
        </button>
      </div>
    </div>
  );
}

export default function KolibiBuild() {
  return (
    <main className="kolibi-room">
      <section className="kolibi-room-hero">
        <Image
          src="/koli-happy.png"
          alt=""
          width={180}
          height={180}
          className="kolibi-room-mascot"
          aria-hidden="true"
        />

        <div className="kolibi-room-inner">
          <div className="kolibi-room-content">
            <span className="kolibi-room-badge">AI PHOTO CALORIE TRACKER</span>

            <h1 className="kolibi-room-headline">Snap a photo.</h1>
            <h2 className="kolibi-room-headline-sub">Done in seconds.</h2>

            <p className="kolibi-room-intro">
              Point. Shoot. Done. Kolibi reads every ingredient on your plate in
              seconds — no typing, no searching, no effort. Just: am I still on
              track today?
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
            <div className="kolibi-mockups">
              <KolibiDashboardMockup />
              <KolibiEditMealMockup />
            </div>
          </div>
        </div>
      </section>

      <p className="kolibi-room-speed">The fastest calorie tracker you&apos;ve ever used.</p>

      <section className="kolibi-room-section">
        <div className="kolibi-room-features">
          {FEATURES.map((feature) => (
            <article key={feature.title} className="kolibi-room-feature">
              <p className="kolibi-room-feature-eyebrow">{feature.eyebrow}</p>
              <h3 className="kolibi-room-feature-title">{feature.title}</h3>
              <p className="kolibi-room-feature-body">{feature.body}</p>
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
