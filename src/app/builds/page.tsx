import type { Metadata } from "next";
import Link from "next/link";
import { builds } from "@/lib/builds";

export const metadata: Metadata = {
  title: "Builds — Steffen",
  description: "Selected projects and shipped products.",
};

export default function BuildsIndexPage() {
  return (
    <main className="builds-index">
      <p className="builds-index-label">./builds</p>
      <h1 className="builds-index-title">What I&apos;ve built.</h1>
      <p className="builds-index-sub">
        Deep dives on selected projects — from idea to production.
      </p>

      <ul className="builds-index-list">
        {builds.map((build) => (
          <li key={build.slug}>
            <Link href={`/builds/${build.slug}`} className="builds-index-card">
              <div className="builds-index-card-top">
                <span
                  className="builds-index-dot"
                  style={{ background: build.accentColor }}
                  aria-hidden="true"
                />
                <span className="builds-index-name">{build.name}</span>
                <span className="builds-index-year">{build.year}</span>
              </div>
              <p className="builds-index-desc">{build.description}</p>
              <span className="builds-index-arrow" style={{ color: build.accentColor }}>
                View case study →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
