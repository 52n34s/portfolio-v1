import type { Metadata } from "next";
import Link from "next/link";
import ShowcaseAppCard from "@/components/apps/ShowcaseAppCard";
import { APP_SECTIONS } from "@/data/apps";
import { CHALLENGE_APPS, type ChallengeApp } from "@/lib/countdown";

export const metadata: Metadata = {
  title:
    "Apps by Steffen Giebler — Orivela, Kolibi, Peeranimo, Carpincho, GetaBite",
  description:
    "Six apps built solo in Berlin: a document vault, an AI calorie tracker, a peer-matching platform, a Spanish course, a dev metrics timeline, and a vegan food finder. Live on iOS, Android and web.",
  alternates: {
    canonical: "/apps",
  },
  openGraph: {
    title:
      "Apps by Steffen Giebler — Orivela, Kolibi, Peeranimo, Carpincho, GetaBite",
    description:
      "Six apps built solo in Berlin: a document vault, an AI calorie tracker, a peer-matching platform, a Spanish course, a dev metrics timeline, and a vegan food finder. Live on iOS, Android and web.",
    url: "https://steffendoesthings.com/apps",
    type: "website",
  },
};

const APP_STORE_CAMPAIGN = "apps-page";

/** Map /apps section slugs onto countdown showcase apps (copy, colour, links). */
function bySlug(slug: string): ChallengeApp {
  const app = CHALLENGE_APPS.find((a) => a.id === slug);
  if (!app) throw new Error(`Unknown app slug: ${slug}`);
  return app;
}

export default function AppsPage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Apps by Steffen Giebler",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: { "@id": "https://steffendoesthings.com/#orivela" },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: { "@id": "https://steffendoesthings.com/#kolibi" },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: { "@id": "https://steffendoesthings.com/#peeranimo" },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: { "@id": "https://steffendoesthings.com/#carpincho" },
      },
    ],
  };

  return (
    <main className="countdown-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />

      <div className="countdown-bg-blooms" aria-hidden="true" />

      <div className="countdown-content">
        <div className="apps-page-inner">
          {APP_SECTIONS.map((section, sectionIndex) => (
            <section
              key={section.eyebrow}
              className={`apps-page-section${sectionIndex === 0 ? " is-first" : ""}`}
            >
              <p className="apps-page-eyebrow">{section.eyebrow}</p>
              <h2 className="apps-page-headline">{section.headline}</h2>
              <p className="apps-page-subline">{section.subline}</p>

              <div className="countdown-pair-grid">
                {section.apps.map((entry, index) => (
                  <ShowcaseAppCard
                    key={entry.slug}
                    app={bySlug(entry.slug)}
                    campaign={APP_STORE_CAMPAIGN}
                    priority={sectionIndex === 0 && index === 0}
                  />
                ))}
              </div>
            </section>
          ))}

          <footer className="apps-page-footer">
            <div className="apps-page-footer-links">
              <Link href="/" className="countdown-quiet-link">
                Curious who&apos;s behind these? → About Steffen
              </Link>
              <Link href="/#room-05" className="countdown-quiet-link">
                Have your own idea? → Work with Steffen
              </Link>
            </div>
            <Link href="/" className="apps-page-home-btn">
              ← Home
            </Link>
          </footer>
        </div>
      </div>

      <div className="countdown-bg-skyline" aria-hidden="true" />
    </main>
  );
}
