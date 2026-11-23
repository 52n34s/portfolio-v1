"use client";

import { useState } from "react";

type Phase = "idle" | "fall" | "gone";

const CARD_BUTTON =
  "inline-block w-fit rounded-full bg-[var(--purple-button)] px-5 py-2.5 text-[13px] font-medium text-[#F5F0E8] transition-colors hover:bg-[var(--purple-button-hover)]";

/** Stand-in for the CTA of a closed project: looks like the live button, but
 *  a click drops it out of the card (cta-fall) and a handwritten "Closed."
 *  takes its place. It stays gone until the page reloads. */
export default function ClosedButton({
  name,
  variant = "card",
}: {
  name: string;
  variant?: "card" | "row";
}) {
  const [phase, setPhase] = useState<Phase>("idle");
  const row = variant === "row";

  return (
    // The button stays in flow (only hidden), so the wrapper keeps its height.
    <span
      className={`relative inline-block w-fit ${row ? "" : "mt-auto"}`}
      style={row ? { marginTop: 14 } : undefined}
    >
      <button
        type="button"
        aria-label={`Visit ${name}`}
        data-state={phase === "idle" ? undefined : phase}
        className={`closed-cta ${row ? "app-index-cta" : CARD_BUTTON}`}
        style={row ? { marginTop: 0 } : undefined}
        onClick={(event) => {
          // Inside an index row: never let this click reach the row.
          event.stopPropagation();
          if (phase === "idle") setPhase("fall");
        }}
        onAnimationEnd={() => {
          if (phase === "fall") setPhase("gone");
        }}
      >
        Visit →
      </button>

      <span
        aria-live="polite"
        className="pointer-events-none absolute inset-0 flex items-center whitespace-nowrap"
      >
        {phase !== "idle" && (
          <span
            className="closed-note"
            style={{
              fontFamily: "var(--font-hand), cursive",
              fontSize: 28,
              lineHeight: 1,
              color: row ? "var(--app-ink)" : "rgba(26, 26, 26, 0.7)",
            }}
          >
            Closed.
          </span>
        )}
      </span>
    </span>
  );
}
