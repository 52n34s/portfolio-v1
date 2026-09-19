"use client";

import { useEffect, useState } from "react";
import { TARGET_DATE } from "@/lib/countdown";

type Remaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const MS_DAY = 86_400_000;
const MS_HOUR = 3_600_000;
const MS_MINUTE = 60_000;

const TARGET_LABEL = new Date(TARGET_DATE).toLocaleDateString("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

function remainingFromTarget(): Remaining {
  const diff = Math.max(0, new Date(TARGET_DATE).getTime() - Date.now());
  return {
    days: Math.floor(diff / MS_DAY),
    hours: Math.floor((diff % MS_DAY) / MS_HOUR),
    minutes: Math.floor((diff % MS_HOUR) / MS_MINUTE),
    seconds: Math.floor((diff % MS_MINUTE) / 1000),
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

/** Context, not the headline: a single quiet line, no card, no accent. */
export default function CountdownClock() {
  const [remaining, setRemaining] = useState(remainingFromTarget);

  useEffect(() => {
    const id = window.setInterval(() => {
      setRemaining(remainingFromTarget());
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div
      suppressHydrationWarning
      className="countdown-mono"
      style={{
        marginTop: 14,
        fontSize: 12,
        letterSpacing: "0.02em",
        color: "var(--ink-muted)",
      }}
    >
      {remaining.days}d {pad(remaining.hours)}h {pad(remaining.minutes)}m{" "}
      {pad(remaining.seconds)}s left · {TARGET_LABEL}
    </div>
  );
}
