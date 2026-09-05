import { ImageResponse } from "next/og";
import { GOAL_EUR, getCountdownStats, TARGET_DATE } from "@/lib/countdown";

export const runtime = "edge";
export const alt = "Countdown — Steffen Giebler";
export const size = {
  width: 1200,
  height: 630,
};

function daysLeft() {
  const diff = Math.max(0, new Date(TARGET_DATE).getTime() - Date.now());
  return Math.floor(diff / 86_400_000);
}

export default function Image() {
  const days = daysLeft();
  const { monthlyRevenue } = getCountdownStats();
  const mrr = `€${monthlyRevenue.toLocaleString("en-US")} of €${GOAL_EUR.toLocaleString("en-US")} MRR · 52n34s.app/countdown`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0E1620",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 180,
            lineHeight: 0.86,
            color: "#F5F0E8",
          }}
        >
          {String(days)}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 20,
            fontSize: 28,
            letterSpacing: "0.28em",
            color: "#7B5CF0",
          }}
        >
          DAYS LEFT
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 22,
            color: "#8A9BA8",
          }}
        >
          {mrr}
        </div>
      </div>
    ),
    { ...size },
  );
}
