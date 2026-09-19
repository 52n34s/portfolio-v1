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

/** The reason the page exists — big days number, small mono clock beside it. Never a grey line. */
export default function CountdownClock() {
  const [remaining, setRemaining] = useState(remainingFromTarget);

  useEffect(() => {
    const id = window.setInterval(() => {
      setRemaining(remainingFromTarget());
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="countdown-hero-clock">
      <span suppressHydrationWarning className="countdown-days-number">
        {remaining.days}
      </span>
      <div className="countdown-hero-clock-meta">
        <span suppressHydrationWarning className="countdown-mono">
          {pad(remaining.hours)}h {pad(remaining.minutes)}m{" "}
          {pad(remaining.seconds)}s
        </span>
        <span className="countdown-mono">{TARGET_LABEL}</span>
      </div>
    </div>
  );
}
