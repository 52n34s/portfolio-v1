"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import HomeCollage from "@/components/HomeCollage";
import Room02 from "@/components/Room02";
import Room03 from "@/components/Room03";
import KolibiBuild from "@/components/KolibiBuild";
import OrivelaBuild from "@/components/OrivelaBuild";
import Room04 from "@/components/Room04";
import Room05 from "@/components/Room05";
import Room06 from "@/components/Room06";

const CHAR_DELAY = 22;
const TOTAL_BLOCKS = 6;
const FILLED_BLOCKS = 4;
const PAUSE_AFTER_PROMPT = 192;
const PAUSE_SHORT = 128;
const PAUSE_PROGRESS = 96;

type BootAppIcon =
  | {
      name: string;
      sectionId: string;
      kind: "image";
      src: string;
    }
  | {
      name: string;
      sectionId: string;
      kind: "builds";
    }
  | {
      name: string;
      sectionId: string;
      kind: "start";
    };

const BOOT_APPS: BootAppIcon[] = [
  {
    name: "Orivela",
    sectionId: "room-03b",
    kind: "image",
    src: "/app-logo-orivela.png",
  },
  {
    name: "Peeranimo",
    sectionId: "room-04",
    kind: "image",
    src: "/app-logo-peeranimo.webp",
  },
  {
    name: "Kolibi",
    sectionId: "room-03c",
    kind: "image",
    src: "/app-logo-kolibi.jpg",
  },
  {
    name: "Builds",
    sectionId: "room-03",
    kind: "builds",
  },
  {
    name: "Start",
    sectionId: "room-02",
    kind: "start",
  },
];

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
  const [showAppIcons, setShowAppIcons] = useState(false);
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
      await sleep(PAUSE_AFTER_PROMPT);

      addLine({ kind: "text", content: "" });
      await typeText("> initializing Steffen...", (content) => {
        if (!cancelled) updateLastLine({ kind: "text", content });
      });
      if (cancelled) return;
      await sleep(PAUSE_SHORT);

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
      await sleep(PAUSE_SHORT);

      for (let b = 1; b <= FILLED_BLOCKS; b++) {
        if (cancelled) return;
        updateLastLine({
          kind: "loading",
          content: loadingPrefix,
          filledBlocks: b,
          showBlocks: true,
        });
        await sleep(PAUSE_PROGRESS);
      }
      if (cancelled) return;
      await sleep(PAUSE_SHORT);

      const doneLines = [
        "> mounting Berlin studio... done ",
        "> brewing next big idea... done ",
        "> questioning everything... done ",
      ];

      for (const doneText of doneLines) {
        addLine({ kind: "text", content: "", checkmark: false });
        await typeText(doneText, (content) => {
          if (!cancelled)
            updateLastLine({ kind: "text", content, checkmark: false });
        });
        if (cancelled) return;
        updateLastLine({ kind: "text", content: doneText, checkmark: true });
        await sleep(PAUSE_SHORT);
      }

      addLine({ kind: "ready", content: "" });
      await typeText("> ready.", (content) => {
        if (!cancelled) updateLastLine({ kind: "ready", content });
      });
      if (cancelled) return;
      setShowCursor(true);
      setShowAppIcons(true);
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
      "room-03b",
      "room-03c",
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

  const monoStyle = {
    fontFamily: "var(--font-jetbrains-mono), monospace",
    fontSize: "14px",
    lineHeight: "1.8",
  };

  return (
    <>
      <div className="sr-only">
        Steffen is a Founder and Developer based in Berlin Mitte, Germany. He
        builds software products and businesses. He is the founder of Peeranimo,
        a peer-to-peer community platform for people with unfulfilled dreams,
        and Orivela, a personal records vault for iOS. His work spans 10+
        platforms, self-built and shipped to production. He thinks in systems
        and ships products end to end.
      </div>

      <HomeCollage />

      {/* Boot-Screen — wird später als Einstieg zu den Rooms weiter unten platziert */}
      {false && (
      <section
        id="room-01-boot"
        className="grid-bg relative flex min-h-screen w-full max-w-[100vw] flex-col items-center justify-center overflow-x-hidden"
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
        </div>

        {showAppIcons && (
          <div className="boot-app-icons boot-app-icons-fade-in flex w-full min-w-0 max-w-[360px] flex-wrap justify-center gap-x-6 gap-y-6 px-4 md:max-w-none md:flex-nowrap md:justify-center md:px-0 md:gap-6">
            {BOOT_APPS.map((app) => (
              <button
                key={app.name}
                type="button"
                onClick={() => navigateToRoom(app.sectionId)}
                className="boot-app-icon-link basis-[28%] min-w-0 md:basis-auto"
              >
                {app.kind === "image" ? (
                  <Image
                    src={app.src}
                    alt={app.name}
                    width={72}
                    height={72}
                    className="boot-app-icon-img"
                  />
                ) : app.kind === "builds" ? (
                  <span className="boot-app-icon-solid boot-app-icon-builds">
                    <span className="boot-app-icon-builds-line1">&gt;_</span>
                    <span className="boot-app-icon-builds-line2">builds</span>
                  </span>
                ) : (
                  <span className="boot-app-icon-solid boot-app-icon-start" aria-hidden="true">
                    <span className="boot-app-icon-start-arrow">→</span>
                  </span>
                )}
                <span className="boot-app-icon-label">{app.name}</span>
              </button>
            ))}
          </div>
        )}
      </section>
      )}

      <Room02 visible={room02Visible} />
      <Room03 visible={room03Visible} />

      <section id="room-03b" className="room-03b">
        <OrivelaBuild />
      </section>

      <section id="room-03c" className="room-03c">
        <KolibiBuild />
      </section>

      <Room04 visible={room04Visible} />
      <Room05 />
      <Room06 />
    </>
  );
}
