"use client";

import Link from "next/link";

export default function AppScraps() {
  return (
    <section
      id="app-scraps"
      className="app-scraps relative overflow-hidden px-6 py-20 md:px-10 md:py-28"
      style={{ background: "#F5F0E8" }}
    >
      <div className="app-scraps-stage relative mx-auto max-w-5xl md:min-h-[640px]">
        {/* 1) ORIVELA — scrap note */}
        <article className="app-scrap app-scrap-orivela absolute left-[4%] top-0 z-10 w-[min(100%,320px)] -rotate-[3deg] md:left-[2%] md:top-[4%] md:w-[300px]">
          <div className="app-scrap-note relative overflow-hidden rounded-sm bg-[#FFFDF5] px-6 pb-8 pt-7 shadow-[0_12px_40px_rgba(26,26,46,0.12)]">
            <div
              className="app-scrap-note-lines pointer-events-none absolute inset-0"
              aria-hidden="true"
            />
            <p
              className="relative text-[1.35rem] leading-snug text-[#1A1A1A] md:text-[1.5rem]"
              style={{ fontFamily: "var(--font-hand), cursive" }}
            >
              Every contract, every subscription. The answer in seconds.
            </p>
            <Link
              href="/builds/orivela"
              className="relative mt-6 inline-block transition-transform hover:scale-105"
            >
              <img
                src="/app-logo-orivela.png"
                alt="Orivela"
                className="h-14 w-14 rounded-[22%] object-cover shadow-md"
              />
            </Link>
            <svg
              className="absolute bottom-0 left-0 w-full"
              viewBox="0 0 320 18"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                fill="#F5F0E8"
                d="M0 18 L0 8 L18 14 L36 6 L54 15 L72 5 L90 14 L108 7 L126 15 L144 4 L162 13 L180 6 L198 15 L216 5 L234 14 L252 7 L270 15 L288 6 L306 13 L320 8 L320 18 Z"
              />
            </svg>
          </div>
        </article>

        {/* 2) KOLIBI — receipt */}
        <article className="app-scrap app-scrap-kolibi absolute right-[2%] top-[28%] z-20 w-[min(100%,260px)] rotate-[2deg] md:right-[6%] md:top-[8%] md:w-[240px]">
          <div className="app-scrap-receipt relative bg-white px-5 pb-6 pt-6 shadow-[0_14px_36px_rgba(26,26,46,0.14)]">
            <div className="mb-3 border-b border-dashed border-[#1A1A1A]/25 pb-2 text-center">
              <p
                className="text-[10px] uppercase tracking-[0.18em] text-[#1A1A1A]/55"
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                }}
              >
                KOLIBI
              </p>
            </div>
            <p
              className="text-[12px] leading-relaxed text-[#1A1A1A]"
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
              }}
            >
              One photo. You know what&apos;s left for today.
            </p>
            <div className="mt-5 flex justify-center">
              <Link
                href="/builds/kolibi"
                className="inline-block transition-transform hover:scale-105"
              >
                <img
                  src="/app-logo-kolibi.jpg"
                  alt="Kolibi"
                  className="h-14 w-14 rounded-[22%] object-cover shadow-md"
                />
              </Link>
            </div>
            <svg
              className="absolute bottom-0 left-0 w-full translate-y-[99%]"
              viewBox="0 0 240 14"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                fill="white"
                d="M0 0 L12 12 L24 0 L36 12 L48 0 L60 12 L72 0 L84 12 L96 0 L108 12 L120 0 L132 12 L144 0 L156 12 L168 0 L180 12 L192 0 L204 12 L216 0 L228 12 L240 0 Z"
              />
            </svg>
          </div>
        </article>

        {/* 3) PEERANIMO — polaroid */}
        <article className="app-scrap app-scrap-peeranimo absolute bottom-0 left-[18%] z-10 w-[min(100%,280px)] -rotate-[5deg] md:bottom-auto md:left-[32%] md:top-[42%] md:w-[260px]">
          <div className="app-scrap-polaroid bg-white px-3 pb-4 pt-3 shadow-[0_16px_44px_rgba(26,26,46,0.16)]">
            <div className="relative aspect-square w-full overflow-hidden bg-[#00C2A8]">
              <Link
                href="/builds/peeranimo"
                className="absolute bottom-3 right-3 z-10 inline-block transition-transform hover:scale-105"
              >
                <img
                  src="/app-logo-peeranimo.webp"
                  alt="Peeranimo"
                  className="h-12 w-12 rounded-[22%] object-cover shadow-md"
                />
              </Link>
            </div>
            <p
              className="mt-3 px-1 text-center text-[1.15rem] leading-snug text-[#1A1A1A]"
              style={{ fontFamily: "var(--font-hand), cursive" }}
            >
              People who get it. Without searching for years.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
