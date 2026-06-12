"use client";

import { useEffect, useState } from "react";
import NavBubbles from "@/components/NavBubbles";

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

      // Prompt line
      addLine({ kind: "prompt", content: "" });
      await typeText("steffen@berlin:~$", (content) => {
        if (!cancelled) updateLastLine({ kind: "prompt", content });
      });
      if (cancelled) return;
      await sleep(300);

      // > initializing...
      addLine({ kind: "text", content: "" });
      await typeText("> initializing...", (content) => {
        if (!cancelled) updateLastLine({ kind: "text", content });
      });
      if (cancelled) return;
      await sleep(200);

      // > loading identity... with progress bar
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
      // Fill remaining blocks
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

      // > mounting projects... done ✓
      addLine({ kind: "text", content: "", checkmark: false });
      const mountingText = "> mounting projects... done ";
      await typeText(mountingText, (content) => {
        if (!cancelled)
          updateLastLine({ kind: "text", content, checkmark: false });
      });
      if (cancelled) return;
      updateLastLine({ kind: "text", content: mountingText, checkmark: true });
      await sleep(200);

      // > starting peeranimo... done ✓
      addLine({ kind: "text", content: "", checkmark: false });
      const peeranimoText = "> starting peeranimo... done ";
      await typeText(peeranimoText, (content) => {
        if (!cancelled)
          updateLastLine({ kind: "text", content, checkmark: false });
      });
      if (cancelled) return;
      updateLastLine({ kind: "text", content: peeranimoText, checkmark: true });
      await sleep(200);

      // > ready.
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

  const handleEnter = () => {
    const target = document.getElementById("room-02");
    target?.scrollIntoView({ behavior: "smooth" });
  };

  const monoStyle = {
    fontFamily: "var(--font-jetbrains-mono), monospace",
    fontSize: "14px",
    lineHeight: "1.8",
  };

  return (
    <div className="grid-bg relative flex min-h-screen items-center justify-center">
      <NavBubbles />

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
            {"> ./enter-my-world"}
          </button>
        )}
      </div>

      {/* Placeholder for Room 02 */}
      <div id="room-02" className="absolute bottom-0 h-screen w-full" />
    </div>
  );
}
