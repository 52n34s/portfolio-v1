"use client";

import Image from "next/image";
import {
  useEffect,
  useId,
  useState,
  useSyncExternalStore,
  type CSSProperties,
} from "react";
import {
  OUTCOME_HEADLINES,
  rowColors,
  withCampaignToken,
} from "@/lib/app-showcase";
import type { ChallengeApp } from "@/lib/countdown";

/** Logo stays gone this long while its row is open, then drops back in. */
const LOGO_RETURN_MS = 10_000;

const HOVER_QUERY = "(hover: hover) and (pointer: fine)";

function subscribeHover(onChange: () => void) {
  const mq = window.matchMedia(HOVER_QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function canHoverSnapshot() {
  return window.matchMedia(HOVER_QUERY).matches;
}

export type AppIndexGroup = {
  /** Small category label above the group; omit for an unlabeled list. */
  label?: string;
  apps: ChallengeApp[];
};

function ctaFor(app: ChallengeApp, campaign: string) {
  if (!app.href) return null;
  const isIOS = app.platform.includes("IOS");
  return {
    href: isIOS ? withCampaignToken(app.href, campaign) : app.href,
    label: isIOS ? "Get the app" : (app.cta ?? "Open"),
    external: isIOS || app.href.startsWith("http"),
  };
}

type LogoPhase = "idle" | "fall" | "return";

function AppIndexRow({
  app,
  campaign,
  isOpen,
  session,
  everOpened,
  canHover,
  onOpen,
  onClose,
  onToggle,
}: {
  app: ChallengeApp;
  campaign: string;
  isOpen: boolean;
  /** Id of the current open session — changes every time a row opens. */
  session: number;
  everOpened: boolean;
  canHover: boolean;
  onOpen: (id: string) => void;
  onClose: (id: string) => void;
  onToggle: (id: string) => void;
}) {
  const panelId = useId();
  const [returnedSession, setReturnedSession] = useState<number | null>(null);

  // While open, bring the logo back after LOGO_RETURN_MS. Closing the row (or
  // unmounting) clears the timer; the closed phase below handles the return.
  useEffect(() => {
    if (!isOpen) return;
    const timer = window.setTimeout(
      () => setReturnedSession(session),
      LOGO_RETURN_MS,
    );
    return () => window.clearTimeout(timer);
  }, [isOpen, session]);

  // "return" only animates when the attribute changes, so a logo that already
  // came back while open does not replay on close.
  const logo: LogoPhase = isOpen
    ? returnedSession === session
      ? "return"
      : "fall"
    : everOpened
      ? "return"
      : "idle";

  const { tint, ink } = rowColors(app.color);
  const cta = ctaFor(app, campaign);

  return (
    <li
      id={app.id}
      data-reveal="row"
      data-open={isOpen || undefined}
      className="app-index-row"
      style={
        {
          "--app-color": app.color,
          "--app-tint": tint,
          "--app-ink": ink,
        } as CSSProperties
      }
      onMouseEnter={canHover ? () => onOpen(app.id) : undefined}
      onMouseLeave={canHover ? () => onClose(app.id) : undefined}
    >
      <button
        type="button"
        className="app-index-head"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={(event) => {
          // Hover already opened it; a mouse click must not close it again.
          // Keyboard (detail 0) and touch toggle.
          if (canHover && event.detail > 0) onOpen(app.id);
          else onToggle(app.id);
        }}
      >
        <span className="app-index-icon">
          <Image
            src={app.logo}
            alt=""
            width={112}
            height={112}
            data-logo={logo}
            className="app-index-logo"
          />
        </span>
        <span className="app-index-headline">{OUTCOME_HEADLINES[app.id]}</span>
        <span className="app-index-meta">
          {app.name} · {app.platform}
        </span>
      </button>

      <div id={panelId} className="app-index-panel" inert={!isOpen}>
        <div className="app-index-panel-inner">
          <div className="app-index-panel-content">
            <p className="app-index-desc">{app.description}</p>
            {cta && (
              <a
                href={cta.href}
                {...(cta.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="app-index-cta"
              >
                {cta.label}
              </a>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

/** Index list of apps (/apps, /countdown): one full-width row per app that
 *  expands on hover (fine pointer) or tap/Enter. At most one row is open; the
 *  open row's colour also tints the PageBackground glow. */
export default function AppIndexList({
  groups,
  campaign,
}: {
  groups: AppIndexGroup[];
  campaign: string;
}) {
  const canHover = useSyncExternalStore(
    subscribeHover,
    canHoverSnapshot,
    () => false,
  );
  const [openId, setOpenId] = useState<string | null>(null);
  const [session, setSession] = useState(0);
  const [opened, setOpened] = useState<ReadonlySet<string>>(() => new Set());

  function open(id: string) {
    if (openId === id) return;
    setOpenId(id);
    setSession((s) => s + 1);
    setOpened((prev) => (prev.has(id) ? prev : new Set(prev).add(id)));
  }

  function close(id: string) {
    setOpenId((current) => (current === id ? null : current));
  }

  function toggle(id: string) {
    if (openId === id) close(id);
    else open(id);
  }

  // Background glow (.page-bg::after) follows the open row's colour.
  const openColor = groups
    .flatMap((group) => group.apps)
    .find((app) => app.id === openId)?.color;

  useEffect(() => {
    const root = document.documentElement;
    if (openColor) {
      root.style.setProperty("--page-glow-color", openColor);
      root.dataset.pageGlow = "on";
    } else {
      // Keep the colour so the glow fades out in it.
      delete root.dataset.pageGlow;
    }
  }, [openColor]);

  useEffect(() => {
    const root = document.documentElement;
    return () => {
      delete root.dataset.pageGlow;
      root.style.removeProperty("--page-glow-color");
    };
  }, []);

  return (
    <div className="app-index">
      {groups.map((group, index) => (
        <section key={group.label ?? index} className="app-index-group">
          {group.label && (
            <p data-reveal="head" className="app-index-label">
              {group.label}
            </p>
          )}
          <ul className="app-index-rows" role="list">
            {group.apps.map((app) => (
              <AppIndexRow
                key={app.id}
                app={app}
                campaign={campaign}
                isOpen={openId === app.id}
                session={session}
                everOpened={opened.has(app.id)}
                canHover={canHover}
                onOpen={open}
                onClose={close}
                onToggle={toggle}
              />
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
