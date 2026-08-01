import type { Metadata } from "next";
import Link from "next/link";
import { WorkPageShell } from "@/components/WorkCasePage";
import { workCases } from "@/data/work-cases";

export const metadata: Metadata = {
  title: "Work With Me — Product Development, Berlin | Steffen Giebler",
  description:
    "Six ways I work with founders: from raw idea to shipped MVP, technical blueprints, rescuing broken builds, and long-term product partnerships. Berlin-based, remote worldwide.",
  alternates: {
    canonical: "https://52n34s.app/work",
  },
};

export default function WorkIndexPage() {
  return (
    <WorkPageShell backHref="/" backLabel="← 52n34s.app" showHomeLink={false}>
      <header className="work-header">
        <p className="work-label">./work</p>
        <h1 className="work-h1">What&apos;s your situation?</h1>
        <p className="work-intro">
          Most people who write to me are in one of six places. Find yours.
        </p>
        <div className="work-prose work-intro-block">
          <p>
            I&apos;m Steffen — solo founder and developer in Berlin Mitte.
            I&apos;ve shipped four apps of my own (Orivela, Kolibi, Peeranimo,
            Carpincho) and built more than ten platforms for other people. I
            don&apos;t take briefs and execute them. I take ideas apart, find
            the actual business underneath, and then build that.
          </p>
        </div>
      </header>

      <ul className="work-index-grid">
        {workCases.map((item) => (
          <li key={item.slug}>
            <Link href={`/work/${item.slug}`} className="work-index-card">
              <span className="work-index-command">{item.command}</span>
              <span className="work-index-h1">{item.h1}</span>
              <span className="work-index-summary">{item.summary}</span>
            </Link>
          </li>
        ))}
      </ul>
    </WorkPageShell>
  );
}
