"use client";

import { useState } from "react";

const rooms = [
  { id: "room-01", label: ">_ boot" },
  { id: "room-02", label: "~/home" },
  { id: "room-03", label: "./builds" },
  { id: "room-04", label: "~/peeranimo" },
  { id: "room-05", label: "./beliefs" },
  { id: "room-06", label: ">_ contact" },
];

const labelStyle = {
  fontFamily: "var(--font-jetbrains-mono), monospace",
  fontSize: "11px",
};

interface NavBubblesProps {
  activeRoom: string;
}

export default function NavBubbles({ activeRoom }: NavBubblesProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNav = (id: string) => {
    handleClick(id);
    setMenuOpen(false);
  };

  return (
    <>
      {/* Desktop navigation */}
      <nav
        className="nav-bubbles-desktop fixed right-6 top-1/2 z-50 -translate-y-1/2"
        aria-label="Room navigation"
      >
        <div className="relative flex flex-col">
          <div
            className="absolute top-4 bottom-4 left-4 w-px -translate-x-1/2"
            style={{ background: "#CCC" }}
          />

          {rooms.map((room) => {
            const isActive = activeRoom === room.id;

            return (
              <div key={room.id} className="flex items-center gap-3 py-3">
                <button
                  type="button"
                  onClick={() => handleClick(room.id)}
                  className="relative z-10 h-8 w-8 shrink-0 rounded-full transition-transform hover:scale-110"
                  style={{
                    background: isActive ? "var(--orange)" : "transparent",
                    border: isActive ? "none" : "1px solid #CCC",
                  }}
                  aria-label={room.label}
                  aria-current={isActive ? "page" : undefined}
                />

                <span
                  className="whitespace-nowrap"
                  style={{
                    ...labelStyle,
                    color: isActive ? "var(--orange)" : "#888",
                  }}
                >
                  {isActive ? `${room.label} ← aktiv` : room.label}
                </span>
              </div>
            );
          })}
        </div>
      </nav>

      {/* Mobile menu trigger */}
      {!menuOpen && (
        <button
          type="button"
          className="nav-mobile-trigger"
          onClick={() => setMenuOpen(true)}
          aria-label="Open navigation menu"
        >
          {">_"}
        </button>
      )}

      {/* Mobile fullscreen overlay */}
      {menuOpen && (
        <div className="nav-mobile-overlay" role="presentation">
          <button
            type="button"
            className="nav-mobile-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
          >
            ×
          </button>

          <nav className="nav-mobile-menu" aria-label="Mobile room navigation">
            {rooms.map((room) => {
              const isActive = activeRoom === room.id;

              return (
                <button
                  key={room.id}
                  type="button"
                  className={`nav-mobile-item ${isActive ? "nav-mobile-item-active" : ""}`}
                  onClick={() => handleNav(room.id)}
                >
                  {room.label}
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
}
