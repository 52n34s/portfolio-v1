"use client";

import { useCallback, useEffect, useState } from "react";
import NavBubbles from "@/components/NavBubbles";
import Room02 from "@/components/Room02";
import Room03 from "@/components/Room03";
import Room04 from "@/components/Room04";
import Room05 from "@/components/Room05";
import Room06 from "@/components/Room06";

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
  | { kind: "loading"; content: string; filledBlocks: number; showBlocks?: boolean }
  | { kind: "ready"; content: string };

export default function Home() {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [showCursor, setShowCursor] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [cardVisible, setCardVisible] = useState(false);
  const [activeRoom, setActiveRoom] = useState("room-01");
  const [room02Visible, setRoom02Visible] = useState(false);
  const [room03Visible, setRoom03Visible] = useState(false);
  const [room04Visible, setRoom04Visible] = useState(false);

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

      addLine({ kind: "loading", content: "", filledBlocks: 0, showBlocks: false });
      const loadingPrefix = "> loading identity... ";
      await typeText(loadingPrefix, (content) => {
        if (!cancelled)
          updateLastLine({
            kind: "loading",
            content,
            filledBlocks: 0,
            showBlocks: false,
          });
      });
      if (cancelled) return;
      await sleep(200);

      for (let b = 1; b <= FILLED_BLOCKS; b++) {
        if (cancelled) return;
        updateLastLine({
          kind: "loading",
          content: loadingPrefix,
          filledBlocks: b,
          showBlocks: true,
        });
        await sleep(150);
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
            if (entry.target.id === "room-03") {
              setRoom03Visible(true);
            }
            if (entry.target.id === "room-04") {
              setRoom04Visible(true);
            }
          }
        });
      },
      { threshold: 0.5 },
    );

    const roomIds = [
      "room-01",
      "room-02",
      "room-03",
      "room-04",
      "room-05",
      "room-06",
    ];

    roomIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

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
      <NavBubbles activeRoom={activeRoom} />

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
                    {line.showBlocks && (
                      <span className="inline-flex gap-[2px] ml-1">
                        {Array.from({ length: TOTAL_BLOCKS }).map((_, i) => (
                          <span
                            key={i}
                            className={`progress-block ${i < line.filledBlocks ? "filled" : "empty"}`}
                          />
                        ))}
                      </span>
                    )}
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

      <Room02 visible={room02Visible} />
      <Room03 visible={room03Visible} />
      <Room04 visible={room04Visible} />
      <Room05 />
      <Room06 />
    </>
  );
}
