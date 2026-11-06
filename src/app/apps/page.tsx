import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBackground from "@/components/PageBackground";
import ScrollReveal from "@/components/ScrollReveal";
import AppIndexList from "@/components/apps/AppIndexList";
import { APP_SECTIONS } from "@/data/apps";
import { CHALLENGE_APPS, type ChallengeApp } from "@/lib/countdown";

export const metadata: Metadata = {
  title:
    "Apps by Steffen Giebler: Carpincho, Kolibi, Erdi, ErdiBuilds, Orivela and more",
  description:
    "Apps built solo in Berlin: a Spanish app you learn with while you scroll, a bodyweight training coach, an AI assistant for business owners, a marketplace for verified developers, a notes and records app, and free tools for founders. Live on iOS and web.",
  alternates: {
    canonical: "/apps",
  },
  openGraph: {
    title:
      "Apps by Steffen Giebler: Carpincho, Kolibi, Erdi, ErdiBuilds, Orivela and more",
    description:
      "Apps built solo in Berlin: a Spanish app you learn with while you scroll, a bodyweight training coach, an AI assistant for business owners, a marketplace for verified developers, a notes and records app, and free tools for founders. Live on iOS and web.",
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
        item: { "@id": "https://steffendoesthings.com/#carpincho" },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: { "@id": "https://steffendoesthings.com/#kolibi" },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: { "@id": "https://steffendoesthings.com/#erdi" },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: { "@id": "https://steffendoesthings.com/#erdibuilds" },
      },
      {
        "@type": "ListItem",
        position: 5,
        item: { "@id": "https://steffendoesthings.com/#orivela" },
      },
      {
        "@type": "ListItem",
        position: 6,
        item: { "@id": "https://steffendoesthings.com/#peeranimo" },
      },
    ],
  };

  return (
    <main className="countdown-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />

      <PageBackground />
      <ScrollReveal />

      <div className="countdown-content">
        <div className="apps-page-inner">
          {/* Quiet page intro — same left-text / right-cutout idea as /countdown,
              but smaller so the apps stay the main event. */}
          <header className="apps-page-hero">
            <div className="apps-page-hero-text">
              <h1 className="apps-page-hero-title">Apps I built.</h1>
              <p className="apps-page-hero-sub">
                Apps people pay for, and the tools I run my businesses with.
              </p>
            </div>

            <div className="apps-page-hero-cutout apps-page-hero-cutout--desktop">
              <Image
                src="/me-steffen.png"
                alt="Steffen"
                width={819}
                height={948}
                className="countdown-cutout"
                priority
              />
            </div>

            <div className="apps-page-hero-cutout apps-page-hero-cutout--mobile">
              <Image
                src="/me-steffen.png"
                alt="Steffen"
                width={819}
                height={948}
                className="countdown-cutout"
                priority
              />
            </div>
          </header>

          {/* Categories stay as small labels; section headlines and sublines
              live on the home page only. */}
          <AppIndexList
            groups={APP_SECTIONS.map((section) => ({
              label: section.eyebrow,
              apps: section.apps.map((entry) => bySlug(entry.slug)),
            }))}
            campaign={APP_STORE_CAMPAIGN}
          />

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
