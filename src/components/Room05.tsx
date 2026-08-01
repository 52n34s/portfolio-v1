import Link from "next/link";
import SkylineSeam from "@/components/SkylineSeam";

const CASES = [
  { command: "./i-have-an-idea", href: "/work/idea-to-mvp" },
  { command: "./i-need-a-blueprint", href: "/work/technical-blueprint" },
  { command: "./my-build-is-broken", href: "/work/rescue-broken-build" },
  { command: "./i-need-a-partner", href: "/work/technical-partner" },
  { command: "./i-need-a-feature", href: "/work/feature-development" },
  { command: "./i-dont-know-the-stack", href: "/work/choose-tech-stack" },
] as const;

/** Fixed per-note tilt — max ±1.5deg, matches app-card paper feel */
const CASE_ROTATIONS = [
  "-1.2deg",
  "0.8deg",
  "-0.5deg",
  "1.4deg",
  "-1.5deg",
  "0.3deg",
] as const;

export default function Room05() {
  return (
    <section id="room-05" className="room-05" aria-labelledby="room-05-heading">
      <SkylineSeam />
      <div className="room-05-ghost" aria-hidden="true">
        WORK
      </div>

      <div className="room-05-inner">
        <header className="room-05-header">
          <p className="room-05-label">./work-with-me</p>
          <h2 id="room-05-heading" className="room-05-title">
            What&apos;s your
            <br />
            situation?
          </h2>
          <p className="room-05-sub">
            Pick your case — I&apos;ll take you through how I work.
          </p>
          <Link href="/work" className="room-05-all-link">
            See all six →
          </Link>
        </header>

        <div className="room-05-cases">
          {CASES.map((caseItem, index) => (
            <Link
              key={caseItem.href}
              href={caseItem.href}
              className="room-05-case-btn"
              style={{
                ["--case-rotate" as string]:
                  CASE_ROTATIONS[index % CASE_ROTATIONS.length],
              }}
            >
              <h3 className="room-05-case-heading">
                <span className="room-05-case-prompt">&gt; </span>
                {caseItem.command}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
