"use client";

import { useCallback, useEffect, useState } from "react";
import NavBubbles from "@/components/NavBubbles";
import AboutModal from "@/components/AboutModal";

const CHAR_DELAY = 35;
const TOTAL_BLOCKS = 6;
const FILLED_BLOCKS = 4;

function sleep(ms: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

async function typeText(
  text: string,
  onUpdate: (value: string) => void,
  delay = CHAR_DELAY,
) {
  for (let i = 1; i <= text.length; i++) {
    onUpdate(text.slice(0, i));
    await sleep(delay);
  }
}

type TerminalLine =
  | { kind: "prompt"; content: string }
  | { kind: "text"; content: string; checkmark?: boolean }
  | { kind: "loading"; content: string; filledBlocks: number }
  | { kind: "ready"; content: string };

export default function Home() {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [showCursor, setShowCursor] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [cardVisible, setCardVisible] = useState(false);
  const [activeRoom, setActiveRoom] = useState("room-01");
  const [room02Visible, setRoom02Visible] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const navigateToRoom = useCallback((roomId: string) => {
    document.getElementById(roomId)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    setCardVisible(true);

    let cancelled = false;

    async function runSequence() {
      const addLine = (line: TerminalLine) => {
        if (!cancelled) setLines((prev) => [...prev, line]);
      };

      const updateLastLine = (line: TerminalLine) => {
        if (!cancelled) {
          setLines((prev) => [...prev.slice(0, -1), line]);
        }
      };

      addLine({ kind: "prompt", content: "" });
      await typeText("steffen@berlin:~$", (content) => {
        if (!cancelled) updateLastLine({ kind: "prompt", content });
      });
      if (cancelled) return;
      await sleep(300);

      addLine({ kind: "text", content: "" });
      await typeText("> initializing...", (content) => {
        if (!cancelled) updateLastLine({ kind: "text", content });
      });
      if (cancelled) return;
      await sleep(200);

      addLine({ kind: "loading", content: "", filledBlocks: 0 });
      const loadingPrefix = "> loading identity... ";
      for (let i = 1; i <= loadingPrefix.length; i++) {
        if (cancelled) return;
        const partial = loadingPrefix.slice(0, i);
        const progress = Math.ceil(
          (i / loadingPrefix.length) * FILLED_BLOCKS,
        );
        updateLastLine({
          kind: "loading",
          content: partial,
          filledBlocks: progress,
        });
        await sleep(CHAR_DELAY);
      }
      for (let b = FILLED_BLOCKS + 1; b <= TOTAL_BLOCKS; b++) {
        if (cancelled) return;
        await sleep(80);
        updateLastLine({
          kind: "loading",
          content: loadingPrefix,
          filledBlocks: FILLED_BLOCKS,
        });
      }
      if (cancelled) return;
      await sleep(200);

      addLine({ kind: "text", content: "", checkmark: false });
      const mountingText = "> mounting projects... done ";
      await typeText(mountingText, (content) => {
        if (!cancelled)
          updateLastLine({ kind: "text", content, checkmark: false });
      });
      if (cancelled) return;
      updateLastLine({ kind: "text", content: mountingText, checkmark: true });
      await sleep(200);

      addLine({ kind: "text", content: "", checkmark: false });
      const peeranimoText = "> starting peeranimo... done ";
      await typeText(peeranimoText, (content) => {
        if (!cancelled)
          updateLastLine({ kind: "text", content, checkmark: false });
      });
      if (cancelled) return;
      updateLastLine({ kind: "text", content: peeranimoText, checkmark: true });
      await sleep(200);

      addLine({ kind: "ready", content: "" });
      await typeText("> ready.", (content) => {
        if (!cancelled) updateLastLine({ kind: "ready", content });
      });
      if (cancelled) return;
      setShowCursor(true);
      await sleep(600);
      if (!cancelled) setShowButton(true);
    }

    runSequence();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveRoom(entry.target.id);
            if (entry.target.id === "room-02") {
              setRoom02Visible(true);
            }
          }
        });
      },
      { threshold: 0.5 },
    );

    const room01 = document.getElementById("room-01");
    const room02 = document.getElementById("room-02");
    if (room01) observer.observe(room01);
    if (room02) observer.observe(room02);

    return () => observer.disconnect();
  }, []);

  const handleEnter = () => navigateToRoom("room-02");

  const monoStyle = {
    fontFamily: "var(--font-jetbrains-mono), monospace",
    fontSize: "14px",
    lineHeight: "1.8",
  };

  return (
    <>
      <NavBubbles activeRoom={activeRoom} onNavigate={navigateToRoom} />
      <AboutModal open={aboutOpen} onClose={() => setAboutOpen(false)} />

      {/* Room 01 — Boot Screen */}
      <section
        id="room-01"
        className="grid-bg relative flex min-h-screen items-center justify-center"
      >
        <div
          className={`terminal-card ${cardVisible ? "terminal-card-fade-in" : "opacity-0"}`}
          style={{ opacity: cardVisible ? undefined : 0 }}
        >
          <div style={monoStyle}>
            {lines.map((line, index) => {
              if (line.kind === "prompt") {
                return (
                  <div key={index} style={{ color: "var(--orange)" }}>
                    {line.content}
                  </div>
                );
              }

              if (line.kind === "loading") {
                return (
                  <div key={index} style={{ color: "var(--text)" }}>
                    {line.content}
                    <span className="inline-flex gap-[2px] ml-1">
                      {Array.from({ length: TOTAL_BLOCKS }).map((_, i) => (
                        <span
                          key={i}
                          className={`progress-block ${i < line.filledBlocks ? "filled" : "empty"}`}
                        />
                      ))}
                    </span>
                  </div>
                );
              }

              if (line.kind === "ready") {
                return (
                  <div key={index} style={{ color: "var(--text)" }}>
                    {line.content}
                    {showCursor && <span className="blink-cursor" />}
                  </div>
                );
              }

              return (
                <div key={index} style={{ color: "var(--text)" }}>
                  {line.content}
                  {line.checkmark && (
                    <span style={{ color: "var(--teal)" }}>✓</span>
                  )}
                </div>
              );
            })}
          </div>

          {showButton && (
            <button
              type="button"
              onClick={handleEnter}
              className="enter-button enter-button-fade-in mt-8"
            >
              {"> ssh steffen@berlin"}
            </button>
          )}
        </div>
      </section>

      {/* Room 02 — ~/home */}
      <section
        id="room-02"
        className="grid-bg relative flex min-h-screen items-center overflow-hidden px-6 py-16"
      >
        {/* Background — Studio */}
        <div
          className={`room-02-studio ${room02Visible ? "visible" : ""}`}
          aria-hidden="true"
        >
          <div className="studio-float">
            <img src="/studio.png" alt="Steffen's Studio Berlin" />
          </div>
        </div>

        {/* Foreground — Text */}
        <div className={`room-02-text room-fade-left ${room02Visible ? "visible" : ""}`}>
          <p
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: "12px",
              color: "var(--muted)",
            }}
          >
            ~/home
          </p>

          <h1
            className="mt-2"
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 800,
              fontSize: "clamp(80px, 14vw, 140px)",
              color: "var(--dark)",
              letterSpacing: "-0.03em",
              lineHeight: 1,
            }}
          >
            STEFFEN
          </h1>

          <p
            className="mt-3"
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: "13px",
              color: "var(--muted)",
            }}
          >
            Founder · Developer · Berlin Mitte
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {["10+ Platforms", "4 SaaS Products", "100k Reach"].map((stat) => (
              <button key={stat} type="button" className="stat-pill">
                {`[ ${stat} ]`}
              </button>
            ))}
          </div>

          <p
            className="mt-10"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 300,
              fontSize: "15px",
              color: "var(--muted)",
              maxWidth: "380px",
              lineHeight: 1.7,
            }}
          >
            Ich baue keine Websites.
            <br />
            Ich baue Unternehmen — von der Idee
            <br />
            bis zum fertigen Produkt.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => navigateToRoom("room-03")}
              className="btn-primary"
            >
              Explore my work →
            </button>
            <button
              type="button"
              onClick={() => setAboutOpen(true)}
              className="btn-ghost"
            >
              ./about me
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
