"use client";

import { useCallback, useRef, useState } from "react";
import type { AppEntry, VisualSlug } from "@/data/apps";
import { ctaLabel, isClosed, stampNote } from "@/data/apps";
import KolibiVisual from "@/components/apps/visuals/KolibiVisual";
import GetaBiteVisual from "@/components/apps/visuals/GetaBiteVisual";
import CarpinchoVisual from "@/components/apps/visuals/CarpinchoVisual";
import PeeranimoVisual from "@/components/apps/visuals/PeeranimoVisual";
import OrivelaVisual from "@/components/apps/visuals/OrivelaVisual";
import ErdiVisual from "@/components/apps/visuals/ErdiVisual";
import ErdiBuildsVisual from "@/components/apps/visuals/ErdiBuildsVisual";
import FindMyStackVisual from "@/components/apps/visuals/FindMyStackVisual";
import ApplentoVisual from "@/components/apps/visuals/ApplentoVisual";
import GetaBiteOneVisual from "@/components/apps/visuals/GetaBiteOneVisual";
import TheVisual from "@/components/apps/visuals/TheVisual";
import ClosedButton from "@/components/apps/ClosedButton";
import {
  FOCUS_RING,
  THEMED_CTA_CLASS,
  hookClass,
  hookStyle,
  isDarkSurface,
  themeVars,
} from "@/components/apps/cardTheme";
import AppInfoModal from "@/components/apps/AppInfoModal";

const VISUALS: Record<VisualSlug, () => React.ReactElement> = {
  kolibi: KolibiVisual,
  getabite: GetaBiteVisual,
  carpincho: CarpinchoVisual,
  peeranimo: PeeranimoVisual,
  orivela: OrivelaVisual,
  erdi: ErdiVisual,
  erdibuilds: ErdiBuildsVisual,
  findmystack: FindMyStackVisual,
  applento: ApplentoVisual,
  getabite1: GetaBiteOneVisual,
  the: TheVisual,
};

export const CARD_ROTATIONS = [-1.1, 0.8, -0.6, 1.2, -0.9, 0.5];

/** Visuals are composed for a 300px-tall box; the compact card shows them at
 *  this scale (300 × 0.57 ≈ 170px). */
const VISUAL_SCALE = 0.57;

const LIVE_STAMP_COLOR = "#1D9E75";
const CLOSED_STAMP_COLOR = "#8A8580";

const YOUR_APP_SURFACE = "#FAF6EE";
const YOUR_APP_ACCENT = "#7B5CF0";

function LiveStamp({
  name,
  note,
  label = "LIVE",
  color = LIVE_STAMP_COLOR,
}: {
  name: string;
  note: string;
  label?: string;
  /** Rim and text colour. */
  color?: string;
}) {
  return (
    // ~70% of the old stamp (scale 0.9 / lg 1.0).
    <div
      data-reveal="stamp"
      className="absolute right-3 top-3 z-30 flex h-[68px] w-[68px] shrink-0 origin-top-right -rotate-12 scale-[0.63] flex-col items-center justify-center rounded-full border-2 bg-[#F5F0E8] opacity-90 lg:scale-[0.7]"
      style={{ borderColor: color, color }}
    >
      <span
        className="text-[7px] tracking-wider"
        style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
      >
        {name.toUpperCase()}
      </span>
      <span
        className={`${label.length > 4 ? "text-[8px]" : "text-[13px]"} font-medium leading-none`}
        style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
      >
        {label}
      </span>
      <span
        className="px-1.5 text-center text-[5.5px] leading-[1.15] tracking-wider"
        style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
      >
        {note}
      </span>
    </div>
  );
}

function InfoIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-[18px] w-[18px]" aria-hidden="true">
      <circle
        cx="10"
        cy="10"
        r="8.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="10" cy="6.25" r="1.1" fill="currentColor" />
      <path
        d="M10 9v5.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function AppCard({
  app,
  index,
}: {
  app: AppEntry;
  index: number;
}) {
  const [infoOpen, setInfoOpen] = useState(false);
  const infoRef = useRef<HTMLButtonElement>(null);

  const Visual = app.visual ? VISUALS[app.visual] : null;
  const screenshot = !Visual && app.screenshot ? app.screenshot : null;
  const hasMedia = Boolean(Visual || screenshot);
  const closed = isClosed(app);
  const rotate = CARD_ROTATIONS[index % CARD_ROTATIONS.length];
  const external = app.href.startsWith("http");
  const { theme } = app;

  const closeInfo = useCallback(() => {
    setInfoOpen(false);
    infoRef.current?.focus();
  }, []);

  return (
    <article
      id={app.slug}
      data-reveal="card"
      className="group relative flex min-w-0 scroll-mt-8 flex-col overflow-hidden rounded-[20px] border border-[var(--card-line)] bg-white shadow-[2px_5px_14px_rgba(26,26,26,0.13)] transition-transform duration-300 ease-out hover:-translate-y-1 hover:rotate-0"
      style={{ ...themeVars(theme), transform: `rotate(${rotate}deg)` }}
    >
      {closed ? (
        <LiveStamp
          name={app.name}
          note="NO LONGER RUNNING"
          label="CLOSED"
          color={CLOSED_STAMP_COLOR}
        />
      ) : (
        <LiveStamp
          name={app.name}
          note={stampNote(app.href)}
          label={app.stamp}
        />
      )}

      {hasMedia && (
        <div className="relative h-[170px] w-full shrink-0 overflow-hidden">
          {Visual ? (
            // Full 300px composition, scaled down; the width is widened by
            // 1 / scale so the scaled box fills the card exactly.
            <div
              className="absolute left-0 top-0 h-[300px] origin-top-left"
              style={{
                width: `${100 / VISUAL_SCALE}%`,
                transform: `scale(${VISUAL_SCALE})`,
              }}
            >
              <Visual />
            </div>
          ) : (
            <img
              src={screenshot!}
              alt={`${app.name} screenshot`}
              className="h-full w-full object-cover object-top"
            />
          )}
        </div>
      )}

      {/* Without media the stamp sits over the text; pt-16 clears it. */}
      <div
        className={`flex flex-1 flex-col gap-3 p-5 ${hasMedia ? "" : "pt-16"}`}
        style={{ background: theme.surface }}
      >
        <div className="flex items-center gap-3">
          {!app.wordmark && (
            <img
              src={app.logo}
              alt={`${app.name} app icon`}
              className="h-10 w-10 shrink-0 rounded-[10px] border border-black/5 object-cover shadow-[0_3px_8px_rgba(0,0,0,0.14)]"
            />
          )}
          <div className="min-w-0">
            {app.wordmark ? (
              <h3 className="leading-none">
                <img
                  src={app.wordmark.src}
                  alt={app.name}
                  style={{ height: Math.round(app.wordmark.height * 0.7) }}
                  className="block w-auto max-w-full"
                />
              </h3>
            ) : (
              <h3
                className="truncate text-[22px] font-semibold leading-tight text-[var(--card-ink)]"
                style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
              >
                {app.name}
              </h3>
            )}
            <p
              className="truncate text-[11px] uppercase tracking-wide text-[var(--card-muted)]"
              style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
            >
              {app.platform}
            </p>
          </div>
        </div>

        <p
          className={`flex-1 text-[18px] ${hookClass(theme)}`}
          style={hookStyle(theme)}
        >
          {app.hook}
        </p>

        <div className="mt-auto flex items-center justify-between gap-3 pt-1">
          {closed ? (
            <ClosedButton
              name={app.name}
              variant="card"
              colors={{
                accent: theme.accent,
                onAccent: theme.onAccent,
                ink: theme.ink,
                ring: isDarkSurface(theme) ? theme.ink : theme.accent,
              }}
            />
          ) : (
            <a
              href={app.href}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className={`${THEMED_CTA_CLASS} whitespace-nowrap`}
            >
              {/* Short label on the card; the full `cta` text is in the popup. */}
              {ctaLabel(app.href)} →
            </a>
          )}

          <button
            ref={infoRef}
            type="button"
            aria-label={`More about ${app.name}`}
            aria-haspopup="dialog"
            onClick={() => setInfoOpen(true)}
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--card-line)] text-[var(--card-muted)] transition-colors hover:border-[var(--card-muted)] hover:text-[var(--card-ink)] ${FOCUS_RING}`}
          >
            <InfoIcon />
          </button>
        </div>
      </div>

      {infoOpen && <AppInfoModal app={app} onClose={closeInfo} />}
    </article>
  );
}

/** Last tile of the home grid: no app, no stamp, an invitation instead. */
export function YourAppCard({ index }: { index: number }) {
  const rotate = CARD_ROTATIONS[index % CARD_ROTATIONS.length];
  return (
    <article
      data-reveal="card"
      className="relative flex min-w-0 flex-col gap-3 rounded-[20px] border-2 border-dashed border-[#1A1A1A]/25 p-5 transition-transform duration-300 ease-out hover:-translate-y-1 hover:rotate-0"
      style={
        {
          background: YOUR_APP_SURFACE,
          "--card-accent": YOUR_APP_ACCENT,
          "--card-on-accent": "#FFFFFF",
          "--card-ring": YOUR_APP_ACCENT,
          transform: `rotate(${rotate}deg)`,
        } as React.CSSProperties
      }
    >
      <h3
        className="text-[30px] leading-tight text-[#1A1A1A]"
        style={{ fontFamily: "var(--font-hand), cursive" }}
      >
        Your app next.
      </h3>
      <p className="flex-1 text-[15px] leading-relaxed text-[#1A1A1A]/80">
        Bring me your idea. I build it the same way.
      </p>
      <a href="/#room-05" className={`${THEMED_CTA_CLASS} mt-auto`}>
        Work with me →
      </a>
    </article>
  );
}
