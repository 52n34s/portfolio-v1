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

const lora = { fontFamily: "var(--font-lora), Georgia, serif" } as const;
const mono = { fontFamily: "var(--font-jetbrains-mono), monospace" } as const;

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
      style={{
        marginTop: 38,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div
        suppressHydrationWarning
        style={{
          ...lora,
          fontSize: "clamp(72px, 22vw, 108px)",
          lineHeight: 0.86,
          color: "#F5F0E8",
          fontWeight: 400,
        }}
      >
        {remaining.days}
      </div>
      <div
        style={{
          ...mono,
          marginTop: 8,
          fontSize: 11,
          letterSpacing: "0.2em",
          color: "#7B5CF0",
        }}
      >
        DAYS
      </div>
      <div
        suppressHydrationWarning
        style={{
          ...mono,
          marginTop: 10,
          fontSize: 13,
          letterSpacing: "0.1em",
          color: "#8A9BA8",
        }}
      >
        {pad(remaining.hours)}h {pad(remaining.minutes)}m{" "}
        {pad(remaining.seconds)}s
      </div>
      <div
        style={{
          ...mono,
          marginTop: 8,
          fontSize: 10,
          letterSpacing: "0.2em",
          color: "#55636F",
        }}
      >
        LEFT
      </div>
    </div>
  );
}
