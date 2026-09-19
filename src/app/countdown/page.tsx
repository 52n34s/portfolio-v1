import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
 * hardcoded, not derived. Peeranimo is always last. */
const APP_PAIRS: { label: string; ids: readonly [string, string] }[] = [
  { label: "the paid ones", ids: ["carpincho", "kolibi"] },
  { label: "notes and numbers", ids: ["orivela", "erdiknows"] },
  { label: "free, on the web", ids: ["getabite", "peeranimo"] },
];

/** Optimised WebP screenshots. Native sizes vary (tall phone vs. wider web
 * screens) — the card crops them to a fixed box via CSS, not the other way
 * around, so all six cards stay the same height regardless. */
const APP_SCREENSHOTS: Record<
  string,
  { src: string; width: number; height: number }
> = {
  carpincho: {
    src: "/app-screens/carpincho_screen_1.webp",
    width: 552,
    height: 1200,
  },
  kolibi: {
    src: "/app-screens/kolibi_screen_1.webp",
    width: 552,
    height: 1200,
  },
  orivela: {
    src: "/app-screens/orivela_screen_1.webp",
    width: 552,
    height: 1200,
  },
  erdiknows: {
    src: "/app-screens/erdiknows_screen_1.webp",
    width: 1041,
    height: 1200,
  },
  getabite: {
    src: "/app-screens/getabite_screen_1.webp",
    width: 921,
    height: 1200,
  },
  peeranimo: {
    src: "/app-screens/peeranimo_screen_1.webp",
    width: 555,
    height: 1200,
  },
};

function byId(id: string): ChallengeApp {
  const app = CHALLENGE_APPS.find((a) => a.id === id);
  if (!app) throw new Error(`Unknown app id: ${id}`);
  return app;
}

function hexToRgba(hex: string, alpha: number) {
  const value = hex.replace("#", "");
  const r = parseInt(value.slice(0, 2), 16);
  const g = parseInt(value.slice(2, 4), 16);
  const b = parseInt(value.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/** Adds Apple's campaign-link params to an App Store URL: `ct` (campaign token) + `mt=8` (iOS app), as required for App Analytics attribution. */
function withCampaignToken(url: string, token: string) {
  try {
    const withParams = new URL(url);
    withParams.searchParams.set("ct", token);
    withParams.searchParams.set("mt", "8");
    return withParams.toString();
  } catch {
    return url;
  }
}

const mono = { fontFamily: "var(--font-jetbrains-mono), monospace" } as const;

/** Applied inline: this build's CSS bundler silently drops `backdrop-filter`
 * from stylesheet rules, so the glass blur has to travel as an inline style. */
const glass = {
  backdropFilter: "blur(20px) saturate(160%)",
  WebkitBackdropFilter: "blur(20px) saturate(160%)",
} as const;

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

/** Every logo, whatever its source format or native size, renders at the same
 * size with the same rounded-square mask — plus a soft glow in the app's own colour. */
function AppLogo({ app, size = 64 }: { app: ChallengeApp; size?: number }) {
  return (
    <Image
      src={app.logo}
      alt={app.name}
      width={size}
      height={size}
      className="countdown-logo"
      style={{
        width: size,
        height: size,
        boxShadow: `0 10px 18px -8px ${hexToRgba(app.color, 0.5)}`,
      }}
    />
  );
}

function AppAction({ app }: { app: ChallengeApp }) {
  if (!app.href) return null;

  const isIOS = app.platform.includes("IOS");

  if (isIOS) {
    return (
      <a
        href={withCampaignToken(app.href, APP_STORE_CAMPAIGN)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Download ${app.name} on the App Store`}
        style={{ display: "inline-block" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- official Apple badge, must render pixel-exact and unoptimized */}
        <img
          src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83"
          alt="Download on the App Store"
          width={140}
          height={47}
          style={{ display: "block", height: 36, width: "auto" }}
        />
      </a>
    );
  }

  return (
    <a
      href={app.href}
      target="_blank"
      rel="noopener noreferrer"
      className="countdown-btn"
      style={{ background: app.color, padding: "9px 18px", fontSize: 12.5, fontWeight: 600 }}
    >
      Open
    </a>
  );
}

/** All six cards share size and structure — colour and screenshot are the only variation. */
function AppCard({
  app,
  priority = false,
}: {
  app: ChallengeApp;
  priority?: boolean;
}) {
  const shot = APP_SCREENSHOTS[app.id];

  return (
    <div
      className="countdown-card"
      style={{
        ...glass,
        background: hexToRgba(app.color, 0.1),
        height: 460,
        padding: "22px 18px 0",
      }}
    >
      <AppLogo app={app} size={64} />
      <div style={{ marginTop: 12 }}>
        <div style={{ fontSize: 18, fontWeight: 600, color: "var(--ink)" }}>
          {app.name}
        </div>
        <div className="countdown-eyebrow" style={{ marginTop: 4 }}>
          {app.platform}
        </div>
      </div>
      <p
        style={{
          margin: "8px 0 0",
          maxWidth: 210,
          fontSize: 13,
          lineHeight: 1.5,
          color: "var(--ink-muted)",
        }}
      >
        {app.description}
      </p>

      <div className="countdown-app-shot" style={{ top: 190 }}>
        {shot ? (
          <Image
            src={shot.src}
            alt={`${app.name} screenshot`}
            width={shot.width}
            height={shot.height}
            loading={priority ? undefined : "lazy"}
            priority={priority}
          />
        ) : (
          <div
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              className="countdown-mono"
              style={{ fontSize: 10, letterSpacing: "0.12em", color: "var(--ink-muted)" }}
            >
              TODO — SCREENSHOT
            </span>
          </div>
        )}
      </div>

      <div style={{ position: "absolute", left: 18, bottom: 16 }}>
        <AppAction app={app} />
      </div>
    </div>
  );
}

function PairGroup({
  label,
  apps,
  isFirstGroup = false,
}: {
  label: string;
  apps: [ChallengeApp, ChallengeApp];
  isFirstGroup?: boolean;
}) {
  return (
    <div style={{ marginTop: 32 }}>
      <p className="countdown-pair-label">{label}</p>
      <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {apps.map((app, index) => (
          <AppCard key={app.id} app={app} priority={isFirstGroup && index === 0} />
        ))}
      </div>
    </div>
  );
}

/** Three generated layers, bottom to top: soft colour blooms, the giant faint
 * day count (same value as the live countdown), a tinted skyline low on the page. */
function PageBackground({ days }: { days: number }) {
  return (
    <>
      <div className="countdown-bg-blooms" aria-hidden="true" />
      <div className="countdown-bg-number" aria-hidden="true">
        {days}
      </div>
      <div className="countdown-bg-skyline" aria-hidden="true" />
    </>
  );
}

export default function CountdownPage() {
  const days = daysUntilTarget();
  const pairs = APP_PAIRS.map((pair) => ({
    label: pair.label,
    apps: pair.ids.map(byId) as [ChallengeApp, ChallengeApp],
  }));

  return (
    <main className="countdown-page">
      <PageBackground days={days} />

      {/* Collage — real assets only, decorative, desktop-only (see .countdown-collage). */}
      <div
        className="countdown-collage hidden md:block"
        style={{ top: 520, right: -160, width: 620 }}
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
      <div
        className="countdown-collage hidden md:block"
        style={{ top: 1120, left: 40, width: 64, transform: "rotate(-9deg)" }}
        aria-hidden="true"
      >
        <Image
          src="/original-logo.svg"
          alt=""
          width={64}
          height={64}
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      <div className="countdown-content">
        <div
          style={{
            maxWidth: 1040,
            margin: "0 auto",
            padding: "20px 20px 0",
            position: "relative",
          }}
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

          {/* Hero — headline left, cut-out right, overlapping on desktop. */}
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

            {/* Desktop cut-out: absolute, overlapping the headline, breaking past the container edge. */}
            <div
              className="hidden md:block"
              style={{
                position: "absolute",
                top: -20,
                right: -60,
                width: "28vw",
                maxWidth: 340,
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

          {/* Mobile cut-out: in flow, full-bleed, overlapping the section below. */}
          <div
            className="md:hidden"
            style={{
              position: "relative",
              zIndex: 2,
              marginLeft: -20,
              marginRight: -20,
              marginTop: 20,
              marginBottom: -80,
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

        <div
          style={{
            maxWidth: 1040,
            margin: "0 auto",
            padding: "0 20px 48px",
            position: "relative",
            zIndex: 2,
          }}
        >
          <p className="countdown-strong-line" style={{ marginTop: 56 }}>
            Five apps of my own are live. None of them earns money yet.
          </p>

          {pairs.map((pair, index) => (
            <PairGroup
              key={pair.label}
              label={pair.label}
              apps={pair.apps}
              isFirstGroup={index === 0}
            />
          ))}

          <div style={{ marginTop: 40 }}>
            <SocialRow />
          </div>

          <p
            style={{
              marginTop: 28,
              textAlign: "center",
              fontSize: 13,
              color: "var(--ink-muted)",
            }}
          >
            I also build for other founders —{" "}
            <Link href={PITCH_URL} className="countdown-quiet-link">
              have your own idea?
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
