"use client";

import Link from "next/link";

function scrollToRoom05() {
  document.getElementById("room-05")?.scrollIntoView({ behavior: "smooth" });
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

function ReceiptZigzag({ position }: { position: "top" | "bottom" }) {
  const isTop = position === "top";
  return (
    <svg
      className={`absolute left-0 w-full ${isTop ? "top-0 -translate-y-[99%]" : "bottom-0 translate-y-[99%]"}`}
      viewBox="0 0 170 10"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        fill="white"
        d={
          isTop
            ? "M0 10 L8.5 0 L17 10 L25.5 0 L34 10 L42.5 0 L51 10 L59.5 0 L68 10 L76.5 0 L85 10 L93.5 0 L102 10 L110.5 0 L119 10 L127.5 0 L136 10 L144.5 0 L153 10 L161.5 0 L170 10 Z"
            : "M0 0 L8.5 10 L17 0 L25.5 10 L34 0 L42.5 10 L51 0 L59.5 10 L68 0 L76.5 10 L85 0 L93.5 10 L102 0 L110.5 10 L119 0 L127.5 10 L136 0 L144.5 10 L153 0 L161.5 10 L170 0 Z"
        }
      />
    </svg>
  );
}

function Fernsehturm() {
  return (
    <svg
      viewBox="0 0 40 90"
      className="h-[90px] w-auto"
      aria-hidden="true"
      fill="#1A1A1A"
    >
      <rect x="18" y="0" width="4" height="8" />
      <circle cx="20" cy="16" r="8" />
      <rect x="18.5" y="24" width="3" height="52" />
      <polygon points="12,76 28,76 32,90 8,90" />
      <rect x="14" y="48" width="12" height="2" opacity="0.5" />
    </svg>
  );
}

function UBahnSign() {
  return (
    <div
      className="flex h-11 w-11 items-center justify-center rounded-sm bg-[#0057A8] shadow-md"
      aria-hidden="true"
    >
      <span
        className="text-2xl font-bold leading-none text-white"
        style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
      >
        U
      </span>
    </div>
  );
}

function MateCup() {
  return (
    <svg
      viewBox="0 0 48 70"
      className="h-[70px] w-auto"
      aria-hidden="true"
    >
      <ellipse cx="24" cy="58" rx="16" ry="5" fill="#5C3A1E" />
      <path
        d="M10 28 C10 28 8 52 24 58 C40 52 38 28 38 28 Z"
        fill="#8B5A2B"
      />
      <ellipse cx="24" cy="28" rx="14" ry="5" fill="#6B4423" />
      <ellipse cx="24" cy="28" rx="10" ry="3.5" fill="#3D2914" />
      <path
        d="M28 28 L34 6"
        stroke="#C0C0C0"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="34" cy="5" r="3" fill="#A8A8A8" />
    </svg>
  );
}

function SolDeMayo() {
  return (
    <svg
      viewBox="0 0 56 56"
      className="h-14 w-14 opacity-80"
      aria-hidden="true"
    >
      <circle cx="28" cy="28" r="12" fill="#F4D35E" />
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (i * 22.5 * Math.PI) / 180;
        const x1 = 28 + Math.cos(angle) * 14;
        const y1 = 28 + Math.sin(angle) * 14;
        const x2 = 28 + Math.cos(angle) * 26;
        const y2 = 28 + Math.sin(angle) * 26;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#F4D35E"
            strokeWidth="2"
            strokeLinecap="round"
          />
        );
      })}
      <circle cx="28" cy="28" r="7" fill="#E8B923" />
    </svg>
  );
}

export default function HomeCollage() {
  return (
    <section
      id="room-01"
      className="home-collage relative min-h-screen w-full overflow-hidden bg-[#F5F0E8] md:h-screen md:min-h-0"
    >
      {/* a) Torn paper planes — z-0 */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <svg
          className="absolute left-0 top-[20%] h-[52%] w-[34%] -rotate-[4deg]"
          viewBox="0 0 280 340"
          preserveAspectRatio="none"
        >
          <path
            fill="#7B5CF0"
            d="M36 62 L62 54 L88 65 L116 55 L146 66 L176 56 L204 67 L232 57 L238 300 L210 310 L182 300 L154 311 L124 301 L96 312 L66 302 L40 312 Z"
          />
        </svg>
        <svg
          className="absolute right-[16%] top-[4%] h-[26%] w-[22%] -rotate-[7deg]"
          viewBox="0 0 200 180"
          preserveAspectRatio="none"
        >
          <path
            fill="#F4D35E"
            d="M22 34 L46 26 L72 38 L98 28 L124 39 L150 29 L172 40 L178 150 L152 160 L126 150 L100 161 L74 151 L48 162 L26 152 Z"
          />
        </svg>
        <svg
          className="absolute bottom-0 right-[8%] h-[32%] w-[28%] rotate-[3deg]"
          viewBox="0 0 260 280"
          preserveAspectRatio="none"
        >
          <path
            fill="#00C2A8"
            d="M28 48 L54 40 L82 52 L110 42 L140 54 L168 44 L196 55 L224 46 L232 250 L204 262 L176 252 L148 263 L118 253 L90 264 L60 254 L34 265 Z"
          />
        </svg>
      </div>

      {/* Berlin / BA scraps — z-20 */}
      <div
        className="absolute left-[26%] top-[6%] z-20 rotate-[2deg]"
        aria-hidden="true"
      >
        <Fernsehturm />
      </div>
      <div
        className="absolute bottom-[24%] left-[4%] z-20 hidden -rotate-[6deg] md:block"
        aria-hidden="true"
      >
        <UBahnSign />
      </div>
      <div
        className="absolute left-[30%] top-[62%] z-20 rotate-[5deg]"
        aria-hidden="true"
      >
        <MateCup />
      </div>
      <div
        className="absolute right-[4%] top-[30%] z-20 hidden md:block"
        aria-hidden="true"
      >
        <SolDeMayo />
      </div>

      {/* b) Steffen — desktop absolute */}
      <img
        src="/me-steffen.png"
        alt="Steffen"
        className="pointer-events-none absolute bottom-0 left-[7%] z-20 hidden h-[58vh] w-auto object-contain md:block"
      />

      {/* Mobile flow stack */}
      <div className="relative z-30 flex flex-col items-center px-6 pb-10 pt-16 md:hidden">
        <h1
          className="max-w-[320px] text-center text-4xl leading-[1.1] tracking-tight text-[#1A1A1A]"
          style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
        >
          I build apps
          <br />
          nobody asked for.
        </h1>
        <p className="mt-4 max-w-[300px] text-center text-base text-[#1A1A1A]/opacity-75">
          Three of them. No users yet.
        </p>

        <img
          src="/me-steffen.png"
          alt="Steffen"
          className="mt-6 h-[42vh] w-auto object-contain object-bottom"
        />

        <div className="relative mt-6 w-full max-w-[340px] -rotate-[2deg] bg-white px-5 pb-6 pt-5 shadow-[0_10px_30px_rgba(26,26,46,0.12)]">
          <p
            className="text-[1.15rem] leading-snug text-[#1A1A1A]"
            style={{ fontFamily: "var(--font-hand), cursive" }}
          >
            I build apps and platforms for other people too. That part pays.
          </p>
          <button
            type="button"
            onClick={scrollToRoom05}
            className="mt-4 rounded-full bg-[#1A1A1A] px-5 py-2.5 text-sm font-medium text-[#F5F0E8]"
          >
            Start a project →
          </button>
          <TornEdge />
        </div>

        <div className="mt-10 flex w-full max-w-[320px] flex-col items-center gap-8">
          <OrivelaNote className="-rotate-[3deg]" />
          <KolibiReceipt className="rotate-[2deg]" />
          <PeeranimoPolaroid className="-rotate-[3deg]" />
        </div>
      </div>

      {/* Desktop absolute layout */}
      <div className="pointer-events-none absolute inset-0 z-30 hidden md:block">
        {/* c) Headline */}
        <div className="pointer-events-auto absolute left-[34%] top-[13%] max-w-[460px] pr-[6%]">
          <h1
            className="text-5xl leading-[1.1] tracking-tight text-[#1A1A1A]"
            style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
          >
            I build apps
            <br />
            nobody asked for.
          </h1>
          <p className="mt-4 text-base text-[#1A1A1A]/opacity-75">
            Three of them. No users yet.
          </p>
        </div>

        {/* d) Service note */}
        <div className="pointer-events-auto absolute left-[34%] top-[40%] max-w-[380px] -rotate-[2deg] bg-white px-5 pb-6 pt-5 shadow-[0_10px_30px_rgba(26,26,46,0.12)]">
          <p
            className="text-[1.2rem] leading-snug text-[#1A1A1A]"
            style={{ fontFamily: "var(--font-hand), cursive" }}
          >
            I build apps and platforms for other people too. That part pays.
          </p>
          <button
            type="button"
            onClick={scrollToRoom05}
            className="mt-4 rounded-full bg-[#1A1A1A] px-5 py-2.5 text-sm font-medium text-[#F5F0E8] transition-opacity hover:opacity-90"
          >
            Start a project →
          </button>
          <TornEdge />
        </div>

        {/* App objects */}
        <div className="pointer-events-auto absolute right-[20%] top-[8%] w-[220px] -rotate-[5deg]">
          <OrivelaNote />
        </div>
        <div className="pointer-events-auto absolute right-[10%] top-[46%] w-[170px] rotate-[4deg]">
          <KolibiReceipt />
        </div>
        <div className="pointer-events-auto absolute bottom-[6%] left-[38%] w-[200px] -rotate-[7deg]">
          <PeeranimoPolaroid />
        </div>
      </div>
    </section>
  );
}

function OrivelaNote({ className = "" }: { className?: string }) {
  return (
    <article
      className={`relative overflow-hidden bg-[#FCF3C8] px-5 pb-7 pt-5 shadow-[0_12px_32px_rgba(26,26,46,0.14)] ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-[3px] bg-[#E85A4F]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(transparent, transparent 26px, rgba(55,138,221,0.22) 26px, rgba(55,138,221,0.22) 27px)",
          backgroundPosition: "0 10px",
        }}
        aria-hidden="true"
      />
      <p
        className="relative pl-2 text-[1.2rem] leading-snug text-[#1A2E5A]"
        style={{ fontFamily: "var(--font-hand), cursive" }}
      >
        Every contract, every subscription. The answer in seconds.
      </p>
      <Link
        href="/builds/orivela"
        className="relative mt-4 inline-block pl-2 transition-transform hover:scale-105"
      >
        <img
          src="/app-logo-orivela.png"
          alt="Orivela"
          className="h-12 w-12 rounded-[22%] object-cover shadow-md"
        />
      </Link>
      <TornEdge fill="#F5F0E8" />
    </article>
  );
}

function KolibiReceipt({ className = "" }: { className?: string }) {
  return (
    <article
      className={`relative bg-white px-4 pb-5 pt-5 shadow-[0_12px_28px_rgba(26,26,46,0.14)] ${className}`}
    >
      <ReceiptZigzag position="top" />
      <p
        className="text-center text-[10px] font-medium uppercase tracking-[0.2em] text-[#1A1A1A]"
        style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
      >
        KOLIBI
      </p>
      <div className="my-2 border-t border-dashed border-[#1A1A1A]/30" />
      <p
        className="text-xs leading-relaxed text-[#333]"
        style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
      >
        One photo. You know what&apos;s left for today.
      </p>
      <div className="my-2 border-t border-dashed border-[#1A1A1A]/30" />
      <p
        className="text-right text-[10px] text-[#1A1A1A]"
        style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
      >
        REMAINING&nbsp;&nbsp;&nbsp;&nbsp;412 kcal
      </p>
      <div className="mt-3 flex justify-center">
        <Link
          href="/builds/kolibi"
          className="inline-block transition-transform hover:scale-105"
        >
          <img
            src="/app-logo-kolibi.jpg"
            alt="Kolibi"
            className="h-11 w-11 rounded-[22%] object-cover shadow-md"
          />
        </Link>
      </div>
      <ReceiptZigzag position="bottom" />
    </article>
  );
}

function PeeranimoPolaroid({ className = "" }: { className?: string }) {
  return (
    <article
      className={`bg-white px-2.5 pb-3 pt-2.5 shadow-[0_14px_36px_rgba(26,26,46,0.16)] ${className}`}
    >
      <div className="relative aspect-square w-full overflow-hidden bg-[#00C2A8]">
        <img
          src="/peers/peeranimo_european_woman.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        <Link
          href="/builds/peeranimo"
          className="absolute bottom-2 right-2 z-10 inline-block transition-transform hover:scale-105"
        >
          <img
            src="/app-logo-peeranimo.webp"
            alt="Peeranimo"
            className="h-10 w-10 rounded-[22%] object-cover shadow-md"
          />
        </Link>
      </div>
      <p
        className="mt-2.5 px-1 text-center text-[1.05rem] leading-snug text-[#1A1A1A]"
        style={{ fontFamily: "var(--font-hand), cursive" }}
      >
        People who get it. Without searching for years.
      </p>
    </article>
  );
}
