import Image from "next/image";
import {
  APP_SCREENSHOTS,
  OUTCOME_HEADLINES,
  hexToRgba,
  showcaseGlass,
  withCampaignToken,
} from "@/lib/app-showcase";
import type { ChallengeApp } from "@/lib/countdown";

function AppLogo({ app, size = 60 }: { app: ChallengeApp; size?: number }) {
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

function AppAction({
  app,
  campaign,
}: {
  app: ChallengeApp;
  campaign: string;
}) {
  if (!app.href) return null;

  const isIOS = app.platform.includes("IOS");
  const external = app.href.startsWith("http");

  if (isIOS) {
    return (
      <a
        href={withCampaignToken(app.href, campaign)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Download ${app.name} on the App Store`}
        className="countdown-badge-link"
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
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="countdown-btn"
      style={{
        background: app.color,
        padding: "9px 18px",
        fontSize: 12.5,
        fontWeight: 600,
      }}
    >
      Open
    </a>
  );
}

/** Shared glass app card — used by /countdown and /apps.
 *  Flow: header → screenshot → footer. No absolute bleed. */
export default function ShowcaseAppCard({
  app,
  campaign,
  priority = false,
}: {
  app: ChallengeApp;
  campaign: string;
  priority?: boolean;
}) {
  const shot = APP_SCREENSHOTS[app.id];
  const headline = OUTCOME_HEADLINES[app.id];

  return (
    <div
      className="countdown-card"
      style={{
        ...showcaseGlass,
        background: hexToRgba(app.color, 0.1),
      }}
    >
      <div className="countdown-card-header">
        <AppLogo app={app} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <p className="countdown-card-headline">{headline}</p>
          <p className="countdown-card-desc">{app.description}</p>
        </div>
      </div>

      <div className="countdown-app-shot">
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
          <div className="countdown-app-shot-placeholder">
            <span
              className="countdown-mono"
              style={{
                fontSize: 10,
                letterSpacing: "0.12em",
                color: "var(--ink-muted)",
              }}
            >
              TODO — SCREENSHOT
            </span>
          </div>
        )}
      </div>

      <div className="countdown-card-footer">
        <div
          style={{
            fontSize: 12,
            fontWeight: 500,
            lineHeight: 1.2,
            color: "var(--ink)",
            opacity: 0.75,
          }}
        >
          {app.name}
        </div>
        <div className="countdown-eyebrow" style={{ marginTop: 2, opacity: 0.85 }}>
          {app.platform}
        </div>
        <div style={{ marginTop: 8 }}>
          <AppAction app={app} campaign={campaign} />
        </div>
      </div>
    </div>
  );
}
