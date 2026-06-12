"use client";

import { useState } from "react";

interface Room02Props {
  visible: boolean;
  onNavigate: (roomId: string) => void;
}

const LABELS = [
  {
    id: "about",
    text: "~/about →",
    left: "22%",
    top: "52%",
    action: "about" as const,
  },
  {
    id: "builds",
    text: "./builds →",
    left: "44%",
    top: "52%",
    action: "room-03" as const,
  },
  {
    id: "works",
    text: "./works →",
    left: "63%",
    top: "40%",
    action: "room-03" as const,
  },
  {
    id: "plant",
    text: "(hover me)",
    left: "26%",
    top: "68%",
    action: "plant" as const,
  },
];

const STATS = ["10+ Platforms", "4 SaaS Products", "100k Reach"];

function MouseIcon() {
  return (
    <svg
      width="20"
      height="28"
      viewBox="0 0 20 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="1"
        y="1"
        width="18"
        height="26"
        rx="9"
        stroke="#888"
        strokeWidth="1.5"
      />
      <line x1="10" y1="7" x2="10" y2="12" stroke="#888" strokeWidth="1.5" />
    </svg>
  );
}

export default function Room02({ visible, onNavigate }: Room02Props) {
  const [whoamiOpen, setWhoamiOpen] = useState(true);
  const [plantHover, setPlantHover] = useState(false);

  const handleLabelClick = (action: (typeof LABELS)[number]["action"]) => {
    if (action === "about") {
      setWhoamiOpen(true);
      return;
    }
    if (action === "room-03") {
      onNavigate("room-03");
      return;
    }
  };

  return (
    <section
      id="room-02"
      className={`room-02 grid-bg ${visible ? "room-02-visible" : ""}`}
    >
      {/* Studio background */}
      <div className="room-02-bg" aria-hidden="true">
        <img src="/studio.png" alt="Steffen's Studio Berlin" />
      </div>

      {/* Headline */}
      <div className="room-02-headline-block">
        <h1 className="room-02-headline">STEFFEN</h1>
        <p className="room-02-subtitle">Founder · Developer · Berlin Mitte</p>
      </div>

      {/* Floating labels */}
      {LABELS.map((label) => (
        <div
          key={label.id}
          className="room-02-label-wrap"
          style={{ left: label.left, top: label.top }}
          onMouseEnter={() => label.action === "plant" && setPlantHover(true)}
          onMouseLeave={() => label.action === "plant" && setPlantHover(false)}
        >
          {label.action === "plant" && plantHover && (
            <div className="room-02-tooltip">{"> fun fact: ich tränke sie nie."}</div>
          )}
          <button
            type="button"
            className="room-02-label"
            onClick={() => handleLabelClick(label.action)}
          >
            {label.text}
          </button>
        </div>
      ))}

      {/* whoami panel */}
      {whoamiOpen && (
        <div id="whoami-panel" className="room-02-whoami">
          <div className="room-02-whoami-header">
            <span className="room-02-whoami-title">{"> whoami"}</span>
            <button
              type="button"
              className="room-02-whoami-close"
              onClick={() => setWhoamiOpen(false)}
              aria-label="Schließen"
            >
              ×
            </button>
          </div>

          <div className="room-02-whoami-body">
            <p>Steffen. Berlin. Builder.</p>
            <p className="room-02-whoami-gap">
              I think in systems,
              <br />
              act in products,
              <br />
              and ask every evening: &ldquo;What if?&rdquo;
            </p>
            <p>Founder. Developer. Creative.</p>
            <p className="room-02-whoami-gap">
              I don&apos;t build websites.
              <br />
              <span className="room-02-highlight">
                I build companies that scale.
              </span>
            </p>
          </div>

          <div className="room-02-whoami-stats">
            {STATS.map((stat) => (
              <span key={stat} className="stat-pill">
                {`[ ${stat} ]`}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* click around */}
      <div className="room-02-click-around">
        <MouseIcon />
        <span>click around</span>
      </div>
    </section>
  );
}
