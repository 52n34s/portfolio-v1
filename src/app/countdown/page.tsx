import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CHALLENGE_APPS,
  DAYS_COVER_GOAL,
  daysCoveredFromRevenue,
  firstSentence,
  getCountdownStats,
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

/** One-line change to swap which app fills the hero conversion block. */
const FEATURED_APP = "carpincho";

/** Placeholder — replace with the real margin note copy. */
const MARGIN_NOTE_PLACEHOLDER = "— your note here";

/** App Store campaign token (`ct`) for the featured block's badge link — change per page to attribute downloads separately in App Store Connect. */
const APP_STORE_CAMPAIGN_TOKEN = "countdown-page";

/** Adds Apple's campaign-link params to an App Store URL: `ct` (campaign token) + `mt=8` (iOS app), as required for App Analytics attribution. Falls back to the original URL if it isn't absolute (e.g. a featured app whose link isn't on the App Store). */
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

function formatNumber(n: number) {
  return n.toLocaleString("en-US");
}

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
          className="flex min-h-[44px] min-w-0 items-center gap-1.5 text-[var(--ink-muted)] transition-colors duration-200 hover:text-[var(--accent)]"
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

function AppLogo({ app, size = 34 }: { app: ChallengeApp; size?: number }) {
  if (!app.logo) {
    return (
      <div
        aria-hidden="true"
        style={{
          width: size,
          height: size,
          border: "1px solid var(--ink)",
          flexShrink: 0,
        }}
      />
    );
  }

  return (
    <Image
      src={app.logo}
      alt={app.name}
      width={size}
      height={size}
      style={{
        width: size,
        height: size,
        border: "1px solid var(--ink)",
        objectFit: "cover",
        flexShrink: 0,
      }}
    />
  );
}

/** Stat blocks act as negative social proof at zero — only render once earned. */
function StatBlock({
  value,
  goal,
  label,
}: {
  value: number;
  goal?: number;
  label: string;
}) {
  if (value <= 0) return null;

  return (
    <div
      className="countdown-card countdown-card--sm"
      style={{ padding: "14px 10px", textAlign: "center" }}
    >
      <div className="countdown-mono" style={{ fontSize: 22 }}>
        {formatNumber(value)}
        {goal ? (
          <span style={{ fontSize: 14, color: "var(--ink-muted)" }}>
            {" "}
            / {formatNumber(goal)}
          </span>
        ) : null}
      </div>
      <div
        className="countdown-mono"
        style={{
          marginTop: 8,
          fontSize: 9,
          letterSpacing: "0.1em",
          color: "var(--ink-muted)",
        }}
      >
        {label}
      </div>
    </div>
  );
}

function AppTile({ app }: { app: ChallengeApp }) {
  return (
    <div
      className="countdown-card countdown-card--sm"
      style={{
        padding: 16,
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <AppLogo app={app} size={40} />
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: 15, color: "var(--ink)" }}>{app.name}</div>
          <div
            className="countdown-mono"
            style={{
              marginTop: 2,
              fontSize: 9,
              letterSpacing: "0.1em",
              color: "var(--ink-muted)",
            }}
          >
            {app.platform}
          </div>
        </div>
      </div>
      <p
        style={{
          margin: 0,
          fontSize: 12.5,
          lineHeight: 1.5,
          color: "var(--ink-muted)",
        }}
      >
        {app.description}
      </p>
      {app.href ? (
        <a
          href={app.href}
          target="_blank"
          rel="noopener noreferrer"
          className="countdown-outline-btn"
          style={{
            marginTop: "auto",
            padding: "8px 12px",
            fontSize: 12,
            textAlign: "center",
          }}
        >
          Open ↗
        </a>
      ) : null}
    </div>
  );
}

function FeaturedApp({ app }: { app: ChallengeApp }) {
  const benefit = firstSentence(app.description);

  return (
    <section
      className="countdown-card countdown-featured countdown-card--tilt-l grid grid-cols-1 md:grid-cols-2"
      style={{ marginTop: 40, gap: 24, padding: 24 }}
    >
      <div className="order-2 md:order-1">
        <div className="countdown-phone-frame">
          <span className="countdown-phone-notch" aria-hidden="true" />
          <div className="countdown-phone-screen">
            <span
              className="countdown-mono"
              style={{ fontSize: 11, letterSpacing: "0.08em" }}
            >
              TODO
              <br />
              SCREENSHOT
            </span>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: 14 }}>
          <span className="countdown-hand countdown-margin-note">
            {MARGIN_NOTE_PLACEHOLDER}
          </span>
        </div>
      </div>
      <div
        className="order-1 md:order-2"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 14,
        }}
      >
        <span className="countdown-eyebrow" style={{ color: "var(--accent)" }}>
          Featured app
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <AppLogo app={app} size={56} />
          <span
            style={{
              fontSize: "clamp(28px, 6vw, 38px)",
              fontWeight: 600,
              lineHeight: 1.1,
              color: "var(--ink)",
            }}
          >
            {app.name}
          </span>
        </div>
        <p
          style={{
            margin: 0,
            fontSize: 18,
            lineHeight: 1.45,
            color: "var(--ink)",
          }}
        >
          {benefit}
        </p>
        {app.href ? (
          <a
            href={withCampaignToken(app.href, APP_STORE_CAMPAIGN_TOKEN)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Download ${app.name} on the App Store`}
            style={{ display: "inline-block" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- official Apple badge, must render pixel-exact and unoptimized */}
            <img
              src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83"
              alt="Download on the App Store"
              width={200}
              height={67}
              style={{ display: "block", height: 54, width: "auto" }}
            />
          </a>
        ) : null}
      </div>
    </section>
  );
}

export default function CountdownPage() {
  const { monthlyRevenue, subscriberCount } = getCountdownStats();
  const daysCovered = daysCoveredFromRevenue(monthlyRevenue);
  const hasStats = daysCovered > 0 || subscriberCount > 0;

  const featuredApp =
    CHALLENGE_APPS.find((app) => app.id === FEATURED_APP) ?? CHALLENGE_APPS[0];
  const remainingApps = CHALLENGE_APPS.filter(
    (app) => app.id !== featuredApp.id,
  );

  return (
    <main className="countdown-page">
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "20px 20px 40px",
        }}
      >
        {/* 1. Hero — who I am, what's at stake, the date */}
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
              border: "1px solid var(--ink)",
            }}
          />
          <span style={{ ...mono, fontSize: 11, color: "var(--ink-muted)" }}>
            Steffen · Berlin
          </span>
        </header>

        <h1
          style={{
            margin: "24px 0 0",
            maxWidth: 560,
            fontSize: "clamp(26px, 5vw, 32px)",
            fontWeight: 600,
            lineHeight: 1.15,
            letterSpacing: "-0.01em",
            color: "var(--ink)",
          }}
        >
          To make my own apps pay my rent before the money runs out.
        </h1>

        <p
          style={{
            margin: "16px 0 0",
            maxWidth: 560,
            fontSize: 14,
            lineHeight: 1.65,
            color: "var(--ink)",
          }}
        >
          I built no-code apps and platforms for other founders. That work is
          drying up. AI builds faster than no-code ever did, and the requests
          stopped coming.
        </p>

        <CountdownClock />

        {hasStats ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
              marginTop: 16,
              maxWidth: 320,
            }}
          >
            <StatBlock
              value={daysCovered}
              goal={DAYS_COVER_GOAL}
              label="DAYS MY APPS COVER"
            />
            <StatBlock value={subscriberCount} label="APP SUBSCRIBERS" />
          </div>
        ) : null}

        {/* 2. Primary app block — the conversion centrepiece */}
        <FeaturedApp app={featuredApp} />

        {/* 3. Connecting line */}
        <p
          style={{
            margin: "32px 0 0",
            textAlign: "center",
            fontSize: 13,
            color: "var(--ink-muted)",
          }}
        >
          That&apos;s one. Four more are part of the same challenge.
        </p>

        {/* 4. The rest of the apps, as compact tiles */}
        <div
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3"
          style={{ marginTop: 20 }}
        >
          {remainingApps.map((app) => (
            <AppTile key={app.id} app={app} />
          ))}
        </div>

        {/* 5. Socials */}
        <SocialRow />

        <div
          style={{
            marginTop: 24,
            fontSize: 13,
            lineHeight: 1.75,
            color: "var(--ink)",
          }}
        >
          <p style={{ margin: 0 }}>
            Five apps of my own are live. None of them earns money yet.
          </p>
          <p style={{ margin: "12px 0 0" }}>
            If you have an idea and need someone who takes a product all the way:
            data model, build, payments, App Store, that&apos;s what I do.
          </p>
        </div>

        {/* 6. Quiet text link for client enquiries */}
        <div style={{ marginTop: 20, textAlign: "center" }}>
          <Link
            href={PITCH_URL}
            className="countdown-quiet-link"
            style={{ fontSize: 13 }}
          >
            Have your own idea?
          </Link>
        </div>
      </div>
    </main>
  );
}
