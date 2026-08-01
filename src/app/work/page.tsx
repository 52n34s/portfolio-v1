import type { Metadata } from "next";
import Link from "next/link";
import { WorkPageShell } from "@/components/WorkCasePage";
import { workCases } from "@/data/work-cases";

export const metadata: Metadata = {
  title: "Work With Me — Product Development, Berlin | Steffen Giebler",
  description:
    "Six ways I work with founders: from raw idea to shipped MVP, technical blueprints, rescuing broken builds, and long-term product partnerships. Berlin-based, remote worldwide.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Work With Me — Product Development, Berlin | Steffen Giebler",
    description:
      "Six ways I work with founders: from raw idea to shipped MVP, technical blueprints, rescuing broken builds, and long-term product partnerships. Berlin-based, remote worldwide.",
    url: "https://52n34s.app/work",
    type: "website",
  },
};

export default function WorkIndexPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://52n34s.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Work",
        item: "https://52n34s.app/work",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <WorkPageShell backHref="/" backLabel="← 52n34s.app" showHomeLink={false}>
        <nav className="work-breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li aria-current="page">Work</li>
          </ol>
        </nav>
        <header className="work-header">
          <p className="work-label">./work</p>
          <h1 className="work-h1">What&apos;s your situation?</h1>
          <p className="work-intro">
            Six starting points. Find yours.
          </p>
          <div className="work-prose work-intro-block">
            <p>
              I&apos;m Steffen, a Berlin-based founder and developer. Four
              products of my own are live today. A decade of shipped platforms
              sits behind everything I build for you.
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
    </>
  );
}
