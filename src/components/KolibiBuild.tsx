import Image from "next/image";
import Link from "next/link";

const FEATURES = [
  {
    title: "Snap it. Done.",
    body: "Kolibi recognizes every ingredient automatically. No database, no typing.",
  },
  {
    title: "Always know what's left.",
    body: "Your daily calorie budget at a glance. Remaining today, always visible.",
  },
  {
    title: "You stay in control.",
    body: "Every ingredient. Adjusted in seconds. Add, remove, tweak — your way.",
  },
];

const UPWORK_URL =
  "https://www.upwork.com/freelancers/~01984538d26b3fcb98?viewMode=1";

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
            <div className="kolibi-screenshots">
              <div className="kolibi-screenshot kolibi-screenshot-back">
                <Image
                  src="/2.png"
                  alt="Kolibi dashboard showing remaining calories and today's meals"
                  width={240}
                  height={520}
                  className="kolibi-screenshot-img"
                />
              </div>
              <div className="kolibi-screenshot kolibi-screenshot-front">
                <Image
                  src="/1.png"
                  alt="Kolibi meal editor with ingredient breakdown"
                  width={260}
                  height={560}
                  className="kolibi-screenshot-img"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="kolibi-room-section">
        <div className="kolibi-room-features">
          {FEATURES.map((feature) => (
            <article key={feature.title} className="kolibi-room-feature">
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
