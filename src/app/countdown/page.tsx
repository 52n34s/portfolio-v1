import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ShowcaseAppCard from "@/components/apps/ShowcaseAppCard";
import {
  CHALLENGE_APPS,
  daysUntilTarget,
  INSTAGRAM_URL,
  PITCH_URL,
  type ChallengeApp,
} from "@/lib/countdown";
import CountdownClock from "./CountdownClock";
import {
  InstagramIcon,
  TikTokIcon,
  XIcon,
  YouTubeIcon,
} from "@/components/icons/SocialIcons";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Steffen",
  description:
    "Getting my own apps to €3,000 MRR before the money runs out. Public, from day one.",
};

/** Campaign token appended to every App Store link on this page — change this
 * one constant to attribute a different page/placement in App Store Connect. */
const APP_STORE_CAMPAIGN = "countdown-page";

/** Order: Carpincho, Kolibi, Orivela, ErdiKnows, GetaBite, Peeranimo —
 * hardcoded, not derived. Peeranimo is always last. Shown as three unlabeled
 * pairs so the grid reads as one continuous set of six. */
const APP_PAIRS: { ids: readonly [string, string] }[] = [
  { ids: ["carpincho", "kolibi"] },
  { ids: ["orivela", "erdiknows"] },
  { ids: ["getabite", "peeranimo"] },
];

function byId(id: string): ChallengeApp {
  const app = CHALLENGE_APPS.find((a) => a.id === id);
  if (!app) throw new Error(`Unknown app id: ${id}`);
  return app;
}

const mono = { fontFamily: "var(--font-jetbrains-mono), monospace" } as const;

const SOCIALS = [
  {
    name: "YouTube",
    handle: "@steffendoesthings",
    href: "https://www.youtube.com/@steffendoesthings",
    Icon: YouTubeIcon,
  },
  {
    name: "Instagram",
    handle: "@steffendoesthings",
    href: INSTAGRAM_URL,
    Icon: InstagramIcon,
  },
  {
    name: "X",
    handle: "@steffdoesthings",
    href: "https://x.com/steffdoesthings",
    Icon: XIcon,
  },
  {
    name: "TikTok",
    handle: "@steffendoesthings",
    href: "https://www.tiktok.com/@steffendoesthings",
    Icon: TikTokIcon,
  },
] as const;

function SocialRow() {
  return (
    <div className="mt-6 grid grid-cols-1 gap-x-3 gap-y-3 min-[360px]:grid-cols-2 min-[360px]:gap-y-4">
      {SOCIALS.map(({ name, handle, href, Icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name}, ${handle}`}
          className="flex min-h-[44px] min-w-0 items-center gap-1.5 text-[var(--ink-muted)] transition-colors duration-200 hover:text-[var(--ink)]"
        >
          <Icon className="h-5 w-5 shrink-0 md:h-[22px] md:w-[22px]" />
          <span
            style={mono}
            className="min-w-0 whitespace-nowrap text-[11px]"
          >
            {handle}
          </span>
        </a>
      ))}
    </div>
  );
}

function PairGroup({
  apps,
  isFirstGroup = false,
}: {
  apps: [ChallengeApp, ChallengeApp];
  isFirstGroup?: boolean;
}) {
  return (
    <div className="countdown-pair-grid">
      {apps.map((app, index) => (
        <ShowcaseAppCard
          key={app.id}
          app={app}
          campaign={APP_STORE_CAMPAIGN}
          priority={isFirstGroup && index === 0}
        />
      ))}
    </div>
  );
}

export default function CountdownPage() {
  const days = daysUntilTarget();
  const pairs = APP_PAIRS.map((pair) => ({
    apps: pair.ids.map(byId) as [ChallengeApp, ChallengeApp],
  }));

  return (
    <main className="countdown-page">
      <div className="countdown-bg-blooms" aria-hidden="true" />

      {/* Hero background: the giant day count is clipped to this wrapper's own
          height (see .countdown-hero-bg), so it can never reach the app grid. */}
      <div className="countdown-hero-bg">
        <div className="countdown-bg-number" aria-hidden="true">
          {days}
        </div>

        <div
          className="countdown-content-hero"
          style={{ maxWidth: 1040, margin: "0 auto", padding: "20px 20px 0" }}
        >
          <header style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Image
              src="/me-steffen.png"
              alt="Steffen"
              width={26}
              height={26}
              style={{
                width: 26,
                height: 26,
                borderRadius: "50%",
                objectFit: "cover",
                objectPosition: "top",
                flexShrink: 0,
              }}
            />
            <span style={{ ...mono, fontSize: 11, color: "var(--ink-muted)" }}>
              Steffen · Berlin
            </span>
          </header>

          {/* Hero — headline left, cut-out right, overlapping from lg (1024px) up. */}
          <div className="countdown-hero" style={{ marginTop: 28 }}>
            <div
              className="countdown-hero-text"
              style={{ maxWidth: 600, position: "relative", zIndex: 2 }}
            >
              <h1
                style={{
                  margin: 0,
                  fontSize: "clamp(38px, 6vw, 58px)",
                  fontWeight: 700,
                  lineHeight: 0.98,
                  letterSpacing: "-0.02em",
                  color: "var(--ink)",
                }}
              >
                To make my own apps pay my rent before the money runs out.
              </h1>

              <p
                style={{
                  margin: "20px 0 0",
                  maxWidth: 520,
                  fontSize: 14,
                  lineHeight: 1.65,
                  color: "var(--ink)",
                }}
              >
                I built no-code apps and platforms for other founders. That
                work is drying up. AI builds faster than no-code ever did, and
                the requests stopped coming.
              </p>

              <CountdownClock />
            </div>

            {/* Desktop cut-out: absolute, overlapping the headline, breaking past
                the container edge. Only from lg up — at md/tablet widths the
                headline column is too narrow for this not to crowd it. */}
            <div
              className="hidden lg:block"
              style={{
                position: "absolute",
                top: -20,
                right: -60,
                width: "26vw",
                maxWidth: 320,
                zIndex: 3,
                pointerEvents: "none",
              }}
            >
              <Image
                src="/me-steffen.png"
                alt="Steffen"
                width={819}
                height={948}
                className="countdown-cutout"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>

          {/* Mobile/tablet cut-out: in flow, full-bleed, stacked below the
              headline. Stays in place through tablet widths (< lg) so nothing
              crowds the headline at intermediate sizes. Sits above whitespace
              only — the strong line below it starts with its own margin, no
              negative-margin overlap into body copy. */}
          <div
            className="lg:hidden"
            style={{
              position: "relative",
              zIndex: 2,
              marginLeft: -20,
              marginRight: -20,
              marginTop: 20,
              pointerEvents: "none",
            }}
          >
            <Image
              src="/me-steffen.png"
              alt="Steffen"
              width={819}
              height={948}
              className="countdown-cutout"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>

      <div className="countdown-content">
        <div
          style={{
            maxWidth: 1040,
            margin: "0 auto",
            padding: "24px 20px 48px",
            position: "relative",
            zIndex: 2,
          }}
        >
          <p className="countdown-strong-line">
            Five apps of my own are live. None of them earns money yet.
          </p>

          {/* Collage: studio.png sits just past the content column (left: 100%)
              so it never enters the card grid. Sized large; on narrower desktops
              most of it crops past the viewport rather than shrinking. Hidden
              below md (768px). */}
          <div
            className="countdown-collage hidden md:block"
            style={{ top: 40, left: "100%", marginLeft: 32, width: 560 }}
            aria-hidden="true"
          >
            <Image
              src="/studio.png"
              alt=""
              width={1236}
              height={1024}
              style={{ width: "100%", height: "auto", opacity: 0.9 }}
            />
          </div>

          <div className="countdown-app-grid">
            {pairs.map((pair, index) => (
              <PairGroup
                key={pair.apps.map((a) => a.id).join("-")}
                apps={pair.apps}
                isFirstGroup={index === 0}
              />
            ))}
          </div>

          <div style={{ marginTop: 40 }}>
            <SocialRow />
          </div>

          <div className="countdown-pitch" style={{ marginTop: 64 }}>
            <p className="countdown-pitch-heading">
              I also build native iOS, Android and web apps.
            </p>
            <p className="countdown-pitch-scope">
              Data model, build, payments, App Store submission — end to end.
            </p>
            <p style={{ marginTop: 12, fontSize: 13 }}>
              <Link href={PITCH_URL} className="countdown-quiet-link">
                Let&apos;s talk
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="countdown-bg-skyline" aria-hidden="true" />
    </main>
  );
}
