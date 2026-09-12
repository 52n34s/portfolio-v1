"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

const PAPER_SHADOW = "shadow-[2px_5px_14px_rgba(26,26,26,0.13)]";

function Tape({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute h-[22px] w-[64px] border-y border-white/60 bg-white/45 shadow-[0_1px_2px_rgba(0,0,0,0.08)] backdrop-blur-[1px] ${className}`}
      style={{ clipPath: "polygon(3% 0%, 97% 4%, 100% 96%, 2% 100%)" }}
      aria-hidden="true"
    />
  );
}

function TornEdge({ fill = "#F5F0E8" }: { fill?: string }) {
  return (
    <svg
      className="absolute bottom-0 left-0 w-full"
      viewBox="0 0 320 14"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        fill={fill}
        d="M0 14 L0 6 L20 12 L40 4 L60 11 L80 3 L100 12 L120 5 L140 11 L160 2 L180 10 L200 4 L220 12 L240 3 L260 11 L280 5 L300 12 L320 6 L320 14 Z"
      />
    </svg>
  );
}

function scrollToRoom(selector: string) {
  document.querySelector(selector)?.scrollIntoView({ behavior: "smooth" });
}

function Clickable({
  label,
  href,
  scrollTo,
  children,
  className = "",
  style,
  external = false,
  positioned = true,
}: {
  label: string;
  href?: string;
  scrollTo?: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  external?: boolean;
  positioned?: boolean;
}) {
  const handle = () => {
    if (scrollTo) scrollToRoom(scrollTo);
  };

  const content = (
    <div className="group relative h-full w-full cursor-pointer transition-transform duration-200 hover:scale-[1.04] hover:-rotate-1">
      {children}
      <span className="pointer-events-none absolute -bottom-6 left-1/2 z-50 hidden -translate-x-1/2 whitespace-nowrap rounded-full bg-[#1A1A1A] px-3 py-1 text-xs text-[#F5F0E8] opacity-0 transition-opacity duration-200 group-hover:opacity-100 lg:block">
        {label}
      </span>
    </div>
  );

  const posClass = positioned
    ? "absolute overflow-visible"
    : "relative block w-full min-w-0 overflow-visible";

  if (href) {
    return (
      <a
        href={href}
        className={`${posClass} ${className}`}
        style={style}
        {...(external ? { target: "_blank", rel: "noopener" } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={handle}
      className={`${posClass} ${className}`}
      style={style}
    >
      {content}
    </button>
  );
}

function ServiceCard({ className = "" }: { className?: string }) {
  return (
    <div
      id="pitch"
      className={`relative w-full min-w-0 bg-white px-4 pb-5 pt-4 ${PAPER_SHADOW} ${className}`}
    >
      <Tape className="-left-2 -top-2 -rotate-[14deg]" />
      <div
        className="pointer-events-none absolute inset-x-0 top-[46%] h-[3px] bg-gradient-to-b from-black/10 via-transparent to-white/50"
        aria-hidden="true"
      />
      <p
        className="text-[18px] leading-snug text-[#1A1A1A]"
        style={{ fontFamily: "var(--font-hand), cursive" }}
      >
        Pitch me your idea. We&apos;ll take it apart together.
      </p>
      <button
        type="button"
        onClick={() =>
          document
            .getElementById("room-05")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="mt-3 rounded-full bg-[var(--orange)] px-4 py-2 text-[13px] font-medium text-[#F5F0E8] transition-colors hover:bg-[var(--orange-hover)]"
      >
        Let&apos;s think it through →
      </button>
      <TornEdge />
    </div>
  );
}

export default function HomeCollage() {
  const scrolledToPitch = useRef(false);

  useEffect(() => {
    if (scrolledToPitch.current) return;
    if (window.location.hash !== "#pitch") return;
    const t = window.setTimeout(() => {
      const el = document.getElementById("pitch");
      if (!el) return;
      scrolledToPitch.current = true;
      el.scrollIntoView({ behavior: "smooth" });
    }, 0);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <div id="room-01" className="bg-[#F5F0E8] pb-10 md:pb-14">
      <h1 className="sr-only">
        Steffen Giebler — Product Developer and Indie Founder in Berlin
      </h1>
      <h2 className="sr-only">Apps</h2>

      <div className="mx-auto w-full max-w-[1100px] px-5 pt-16 md:px-12 md:pt-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,440px)] lg:items-center lg:gap-16">
          <div className="min-w-0">
            <p
              className="max-w-[18ch] text-[2rem] leading-[1.15] text-[#1A1A1A] md:text-5xl lg:max-w-[16ch] lg:text-6xl"
              style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
            >
              I build apps of my own, and platforms for people who came with
              an idea and no map.
            </p>
            <p className="mt-8 max-w-[520px] text-[15px] leading-[1.6] text-[#1A1A1A]/75 md:text-[17px]">
              Hi, I&apos;m Steffen. Berlin, working solo. Happiest when
              nothing exists yet, and rarely convinced that the obvious way
              is the right one.
            </p>
          </div>

          <div className="min-w-0">
            <div className="relative mx-auto w-full max-w-[320px] lg:mx-0 lg:max-w-[260px]">
              <svg
                className="pointer-events-none absolute -left-3 -top-3 -z-10 -rotate-[4deg]"
                style={{ width: "112%", height: "106%" }}
                viewBox="0 0 280 340"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  fill="#7B5CF0"
                  d="M36 62 L62 54 L88 65 L116 55 L146 66 L176 56 L204 67 L232 57 L238 300 L210 310 L182 300 L154 311 L124 301 L96 312 L66 302 L40 312 Z"
                />
              </svg>

              <img
                src="/me-steffen.png"
                alt="Steffen Giebler, product developer and indie founder, Berlin"
                className="pointer-events-none relative z-10 block h-auto w-full object-contain drop-shadow-[3px_5px_9px_rgba(26,26,26,0.22)]"
              />

              <Clickable
                label="Why I wear colors"
                scrollTo="#room-05"
                className="left-0 top-[45%] h-[55%] w-full"
              >
                <span className="block h-full w-full" aria-hidden="true" />
              </Clickable>
            </div>

            <div className="relative z-20 mx-auto mt-8 w-full max-w-[285px] lg:mx-0 lg:ml-[140px] lg:mt-[-64px]">
              <ServiceCard className="-rotate-[1deg]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
