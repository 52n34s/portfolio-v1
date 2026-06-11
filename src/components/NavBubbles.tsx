"use client";

import { useState } from "react";

const NAV_ITEMS = [
  { id: 1, label: ">_ boot", activeLabel: ">_ boot ← aktiv" },
  { id: 2, label: "~/home" },
  { id: 3, label: "./builds" },
  { id: 4, label: "~/peeranimo" },
  { id: 5, label: "./beliefs" },
  { id: 6, label: ">_ contact" },
];

export default function NavBubbles() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <nav
      className="fixed right-6 top-1/2 z-50 -translate-y-1/2"
      aria-label="Room navigation"
    >
      <div className="relative flex flex-col items-center">
        {/* Connecting line */}
        <div
          className="absolute top-4 bottom-4 left-1/2 w-px -translate-x-1/2"
          style={{ background: "#CCC" }}
        />

        {NAV_ITEMS.map((item) => {
          const isActive = item.id === 1;
          const isHovered = hoveredId === item.id;

          return (
            <div
              key={item.id}
              className="relative flex items-center py-3"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Hover label — left side (not for active bubble 01) */}
              {!isActive && isHovered && (
                <span
                  className="absolute right-[calc(100%+12px)] whitespace-nowrap"
                  style={{
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    fontSize: "11px",
                    background: "var(--dark)",
                    color: "var(--orange)",
                    padding: "4px 10px",
                    borderRadius: "4px",
                  }}
                >
                  {item.label}
                </span>
              )}

              {/* Bubble */}
              <button
                type="button"
                className="relative z-10 h-8 w-8 rounded-full transition-transform hover:scale-110"
                style={{
                  background: isActive ? "var(--orange)" : "transparent",
                  border: isActive ? "none" : "1px solid #CCC",
                }}
                aria-label={item.label}
                aria-current={isActive ? "page" : undefined}
              />

              {/* Active label — always visible, right side */}
              {isActive && (
                <span
                  className="absolute left-[calc(100%+12px)] whitespace-nowrap"
                  style={{
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    fontSize: "11px",
                    color: "var(--orange)",
                  }}
                >
                  {item.activeLabel}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}
