"use client";

import { useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
import type { AppEntry } from "@/data/apps";
import { ctaLabel, isClosed } from "@/data/apps";
import {
  THEMED_CTA_CLASS,
  themeVars,
  withAlpha,
} from "@/components/apps/cardTheme";

/** Long description of an app card. Same backdrop / card classes as
 *  AboutModal. Rendered into <body>: the cards are rotated, and a transformed
 *  ancestor would otherwise trap position: fixed inside the card. */
export default function AppInfoModal({
  app,
  onClose,
}: {
  app: AppEntry;
  onClose: () => void;
}) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const closed = isClosed(app);
  const external = app.href.startsWith("http");
  const { theme } = app;

  useEffect(() => {
    closeRef.current?.focus();
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return createPortal(
    <div
      className="modal-backdrop fixed inset-0 z-[100] flex items-center justify-center p-6"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="modal-card relative w-full max-w-[480px] overflow-hidden"
        style={themeVars(theme)}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-labelledby={titleId}
        aria-modal="true"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="modal-close-btn absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center !p-0"
          style={{
            color: theme.muted,
            borderColor: withAlpha(theme.muted, 0.3),
          }}
        >
          <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden="true">
            <path
              d="M3.5 3.5l9 9M12.5 3.5l-9 9"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Header in the app's own colours; the body stays on the neutral modal. */}
        <div
          className="flex items-center gap-3.5 px-8 pb-6 pr-[4.5rem] pt-8"
          style={{ background: theme.surface }}
        >
          <img
            src={app.logo}
            alt=""
            className="h-12 w-12 shrink-0 rounded-[12px] object-cover"
          />
          <div className="min-w-0">
            <h2
              id={titleId}
              className="truncate text-[24px] font-semibold leading-tight"
              style={{
                fontFamily: "var(--font-lora), Georgia, serif",
                color: theme.ink,
              }}
            >
              {app.name}
            </h2>
            <p
              className="truncate text-[12px] uppercase tracking-wide"
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                color: theme.muted,
              }}
            >
              {app.platform}
            </p>
          </div>
        </div>

        <div className="px-8 pb-8">
          {closed && (
            <p
              className="mt-4 inline-block -rotate-3 text-[26px] leading-none"
              style={{
                fontFamily: "var(--font-hand), cursive",
                color: "var(--muted)",
              }}
            >
              Closed
            </p>
          )}

          <p
            className="mt-5"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 300,
              color: "var(--text)",
              fontSize: "15px",
              lineHeight: "1.7",
            }}
          >
            {app.body}
          </p>

          {!closed && app.href && (
            <a
              href={app.href}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className={`mt-7 ${THEMED_CTA_CLASS}`}
            >
              {app.cta ?? ctaLabel(app.href)} →
            </a>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
}
