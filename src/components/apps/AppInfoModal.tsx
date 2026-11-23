"use client";

import { useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
import type { AppEntry } from "@/data/apps";
import { ctaLabel, isClosed } from "@/data/apps";

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
        className="modal-card relative w-full max-w-[480px] p-8"
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
          className="modal-close-btn absolute right-4 top-4 flex h-9 w-9 items-center justify-center !p-0"
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

        <div className="flex items-center gap-3.5 pr-10">
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
                color: "var(--text)",
              }}
            >
              {app.name}
            </h2>
            <p
              className="truncate text-[12px] uppercase tracking-wide"
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                color: "var(--muted)",
              }}
            >
              {app.platform}
            </p>
          </div>
        </div>

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
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="mt-7 inline-block w-fit rounded-full bg-[var(--purple-button)] px-5 py-2.5 text-[13px] font-medium text-[#F5F0E8] transition-colors hover:bg-[var(--purple-button-hover)]"
          >
            {app.cta ?? ctaLabel(app.href)} →
          </a>
        )}
      </div>
    </div>,
    document.body,
  );
}
