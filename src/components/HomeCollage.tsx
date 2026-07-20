"use client";

import type { ReactNode } from "react";

const APP_STORE_URL = "https://apps.apple.com/app/orivela";
const BALL_SRC: string | null = null;

const ORIVELA_ICON = "/app-logo-orivela.png";
const KOLIBI_ICON = "/app-logo-kolibi.jpg";
const PEERANIMO_ICON = "/app-logo-peeranimo.webp";

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

function AppRow({
  icon,
  name,
  platform,
  compact = false,
}: {
  icon: string;
  name: string;
  platform: string;
  compact?: boolean;
}) {
  if (compact) {
    return (
      <div className="flex flex-col items-center gap-1">
        <img
          src={icon}
          alt=""
          className="h-[46px] w-[46px] rounded-[11px] border border-black/10"
        />
        <p className="text-[12px] font-medium leading-none text-[#1A1A1A]">
          {name}
        </p>
        <span className="rounded-full bg-[#1A1A1A] px-2.5 py-[3px] text-[10px] text-[#F5F0E8]">
          Open
        </span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2.5">
      <img
        src={icon}
        alt=""
        className="h-[54px] w-[54px] rounded-[13px] border border-black/10"
      />
      <div className="leading-tight">
        <p className="text-[13px] font-medium text-[#1A1A1A]">{name}</p>
        <p className="text-[11px] text-[#1A1A1A]/55">{platform}</p>
      </div>
      <span className="ml-auto rounded-full bg-[#1A1A1A] px-3 py-1 text-[11px] text-[#F5F0E8]">
        Open
      </span>
    </div>
  );
}

function Clickable({
  label,
  href,
  scrollTo,
  children,
  className = "",
  external = false,
}: {
  label: string;
  href?: string;
  scrollTo?: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}) {
  const handle = () => {
    if (scrollTo) {
      document.querySelector(scrollTo)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const content = (
    <div className="group relative cursor-pointer transition-transform duration-200 hover:scale-[1.04] hover:-rotate-1">
      {children}
      <span className="pointer-events-none absolute -bottom-6 left-1/2 z-50 hidden -translate-x-1/2 whitespace-nowrap rounded-full bg-[#1A1A1A] px-3 py-1 text-xs text-[#F5F0E8] opacity-0 transition-opacity duration-200 group-hover:opacity-100 md:block">
        {label}
      </span>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`absolute ${className}`}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={handle} className={`absolute ${className}`}>
      {content}
    </button>
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

function UBahnSign() {
  return (
    <div
      className={`flex items-center gap-2 border-2 border-[#1A1A1A] bg-[#F5F0E8] px-3 py-2 ${PAPER_SHADOW}`}
    >
      <div className="flex h-[30px] w-[30px] items-center justify-center bg-[#0F4C9C]">
        <span className="text-[20px] font-bold leading-none text-white">U</span>
      </div>
      <span className="text-[15px] font-medium tracking-tight text-[#1A1A1A]">
        Rosenthaler Platz
      </span>
      <div className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#0F4C9C]">
        <span className="text-[12px] font-bold leading-none text-white">8</span>
      </div>
    </div>
  );
}

function MateCup() {
  return (
    <svg viewBox="0 0 100 110" className="h-[86px] w-auto" aria-hidden="true">
      <path
        d="M26 52 C 26 40, 36 33, 50 33 C 64 33, 74 40, 74 52
           C 83 67, 78 92, 61 100 C 54 104, 46 104, 39 100
           C 22 92, 17 67, 26 52 Z"
        fill="#8B5A2B"
      />
      <path
        d="M24 66 C 40 75, 60 75, 76 66 L 76 75 C 60 84, 40 84, 24 75 Z"
        fill="#5C3A1E"
      />
      <ellipse cx="50" cy="35" rx="24" ry="7.5" fill="#C9CDD2" />
      <ellipse cx="50" cy="36" rx="18" ry="5" fill="#5B7C3A" />
      <path
        d="M57 38 L88 9"
        stroke="#C9CDD2"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <circle cx="89" cy="8" r="3.5" fill="#C9CDD2" />
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

function FootballSvg() {
  return (
    <svg viewBox="0 0 100 100" className="h-[76px] w-auto" aria-hidden="true">
      <circle
        cx="50"
        cy="50"
        r="46"
        fill="#FFFFFF"
        stroke="#1A1A1A"
        strokeWidth="2.5"
      />
      <path d="M50 22 L68 35 L61 57 L39 57 L32 35 Z" fill="#1A1A1A" />
      <path
        d="M50 4 L50 22 M68 35 L86 29 M61 57 L72 74 M39 57 L28 74 M32 35 L14 29"
        stroke="#1A1A1A"
        strokeWidth="2.5"
      />
      <path
        d="M20 78 C 30 86, 45 90, 58 88"
        stroke="#1A1A1A"
        strokeWidth="2.5"
        fill="none"
      />
    </svg>
  );
}

function Football() {
  if (!BALL_SRC) return <FootballSvg />;

  return (
    <>
      <img
        src={BALL_SRC}
        alt=""
        className="h-[76px] w-auto object-contain"
        onError={(e) => {
          e.currentTarget.style.display = "none";
          const fallback = e.currentTarget.nextElementSibling;
          if (fallback instanceof HTMLElement) {
            fallback.style.display = "block";
          }
        }}
      />
      <span className="hidden">
        <FootballSvg />
      </span>
    </>
  );
}

function AppStoreStamp() {
  return (
    <svg
      viewBox="0 0 92 92"
      className="h-[92px] w-[92px] opacity-80"
      aria-hidden="true"
    >
      <circle
        cx="46"
        cy="46"
        r="43"
        fill="none"
        stroke="#1D9E75"
        strokeWidth="3"
      />
      <circle
        cx="46"
        cy="46"
        r="38"
        fill="none"
        stroke="#1D9E75"
        strokeWidth="0.75"
        opacity="0.5"
      />
      <defs>
        <path id="stamp-top" d="M16 46 A30 30 0 0 1 76 46" fill="none" />
        <path id="stamp-bottom" d="M18 50 A28 28 0 0 0 74 50" fill="none" />
      </defs>
      <text
        fill="#1D9E75"
        fontSize="9"
        fontFamily="var(--font-jetbrains-mono), monospace"
        letterSpacing="1.5"
      >
        <textPath href="#stamp-top" startOffset="50%" textAnchor="middle">
          ORIVELA
        </textPath>
      </text>
      <text
        x="46"
        y="50"
        textAnchor="middle"
        fill="#1D9E75"
        fontSize="13"
        fontWeight="700"
        fontFamily="var(--font-jetbrains-mono), monospace"
        letterSpacing="2"
      >
        LIVE
      </text>
      <text
        fill="#1D9E75"
        fontSize="6.5"
        fontFamily="var(--font-jetbrains-mono), monospace"
        letterSpacing="0.8"
      >
        <textPath href="#stamp-bottom" startOffset="50%" textAnchor="middle">
          ON THE APP STORE
        </textPath>
      </text>
    </svg>
  );
}

function ClickHint() {
  return (
    <div
      className="pointer-events-none absolute bottom-5 left-1/2 z-40 hidden -translate-x-1/2 items-center gap-2 md:flex"
      aria-hidden="true"
    >
      <svg viewBox="0 0 28 28" className="h-6 w-6 -rotate-[25deg] opacity-50">
        <path
          d="M6 22 C10 14, 14 10, 22 6"
          fill="none"
          stroke="#1A1A1A"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M16 5 L22 6 L20 12"
          fill="none"
          stroke="#1A1A1A"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span
        className="text-base text-[#1A1A1A]/50"
        style={{ fontFamily: "var(--font-hand), cursive" }}
      >
        click the things
      </span>
    </div>
  );
}

function HeadlineBlock({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <h1
        className="text-4xl leading-[1.1] tracking-tight text-[#1A1A1A] md:text-5xl"
        style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
      >
        Bring me something
        <br />
        you don&apos;t know how to build.
      </h1>
      <p className="mt-4 text-base text-[#1A1A1A]/opacity-75">
        Three apps of my own. I build platforms and apps for other people too —
        that part pays.
      </p>
    </div>
  );
}

export default function HomeCollage() {
  return (
    <section
      id="room-01"
      className="home-collage relative min-h-screen w-full overflow-hidden bg-[#F5F0E8] md:h-screen md:min-h-0"
    >
      {/* Torn paper planes — z-0 */}
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

      {/* Berlin / BA scraps */}
      <Clickable
        label="Why Berlin?"
        scrollTo="#room-02"
        className="left-[19%] top-[5%] z-10 rotate-[2deg]"
      >
        <svg
          viewBox="0 0 120 420"
          className="h-[130px] w-auto md:h-[230px]"
          aria-hidden="true"
        >
          <path
            d="M40 420 C46 372, 51 312, 53 240 L67 240 C69 312, 74 372, 80 420 Z"
            fill="#1A1A1A"
          />
          <circle cx="60" cy="215" r="28" fill="#1A1A1A" />
          <path d="M55 192 L65 192 L63 150 L57 150 Z" fill="#1A1A1A" />
          <path d="M57 150 L63 150 L62 96 L58 96 Z" fill="#1A1A1A" />
          <path d="M58 96 L62 96 L61 44 L59 44 Z" fill="#1A1A1A" />
          <path d="M59 44 L61 44 L60 6 Z" fill="#1A1A1A" />
        </svg>
      </Clickable>

      <div
        className="absolute bottom-[24%] left-[4%] z-20 hidden -rotate-[6deg] md:block"
        aria-hidden="true"
      >
        <UBahnSign />
      </div>
      <div
        className="absolute left-[30%] top-[62%] z-10 rotate-[5deg]"
        aria-hidden="true"
      >
        <MateCup />
      </div>
      <div
        className="absolute right-[13%] top-[24%] z-10 hidden md:block"
        aria-hidden="true"
      >
        <SolDeMayo />
      </div>

      {/* Football — desktop */}
      <div
        className="pointer-events-none absolute bottom-[22%] left-[58%] z-[45] hidden rotate-[8deg] md:block"
        aria-hidden="true"
      >
        <Football />
      </div>

      {/* TODO post-it */}
      <div
        className={`absolute bottom-[30%] left-[47%] z-30 hidden w-[110px] -rotate-[6deg] bg-[#F4D35E] px-3 py-3 md:block ${PAPER_SHADOW}`}
      >
        <Tape className="-left-1 -top-2 -rotate-[18deg]" />
        <p
          className="text-[15px] leading-snug text-[#1A1A1A]"
          style={{ fontFamily: "var(--font-hand), cursive" }}
        >
          TODO:
          <br />
          find users
        </p>
      </div>

      {/* Steffen — desktop */}
      <div className="absolute bottom-0 left-[7%] z-20 hidden h-[58vh] md:block">
        <img
          src="/me-steffen.png"
          alt="Steffen"
          className="pointer-events-none h-full w-auto object-contain drop-shadow-[3px_5px_9px_rgba(26,26,26,0.22)]"
        />
        <Clickable
          label="Why I wear colors"
          scrollTo="#room-02"
          className="left-0 top-[45%] h-[55%] w-full"
        >
          <span className="block h-full w-full" aria-hidden="true" />
        </Clickable>
      </div>

      {/* Mobile flow */}
      <div className="relative z-30 flex flex-col items-center px-6 pb-10 pt-16 md:hidden">
        <HeadlineBlock className="max-w-[340px] text-center" />

        <img
          src="/me-steffen.png"
          alt="Steffen"
          className="mt-6 h-[42vh] w-auto object-contain object-bottom drop-shadow-[3px_5px_9px_rgba(26,26,26,0.22)]"
        />

        <div
          className={`relative mt-4 w-[110px] -rotate-[6deg] bg-[#F4D35E] px-3 py-3 ${PAPER_SHADOW}`}
        >
          <Tape className="-left-1 -top-2 -rotate-[18deg]" />
          <p
            className="text-[15px] leading-snug text-[#1A1A1A]"
            style={{ fontFamily: "var(--font-hand), cursive" }}
          >
            TODO:
            <br />
            find users
          </p>
        </div>

        <div
          className={`relative mt-6 w-full max-w-[340px] -rotate-[2deg] bg-white px-5 pb-6 pt-5 ${PAPER_SHADOW}`}
        >
          <Tape className="-left-2 -top-2 -rotate-[14deg]" />
          <div
            className="pointer-events-none absolute inset-x-0 top-[46%] h-[3px] bg-gradient-to-b from-black/10 via-transparent to-white/50"
            aria-hidden="true"
          />
          <p
            className="text-[1.15rem] leading-snug text-[#1A1A1A]"
            style={{ fontFamily: "var(--font-hand), cursive" }}
          >
            I build apps and platforms for other people too. That part pays.
          </p>
          <a
            href="#room-05"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("room-05")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-4 inline-block rounded-full bg-[#1A1A1A] px-5 py-2.5 text-sm font-medium text-[#F5F0E8]"
          >
            Start a project →
          </a>
          <TornEdge />
        </div>

        <div className="mt-10 flex w-full max-w-[320px] flex-col items-center gap-8">
          <a href="/builds/orivela" className="relative block w-full max-w-[280px]">
            <OrivelaNote className="-rotate-[3deg]" />
          </a>
          <a href="/builds/kolibi" className="relative block w-full max-w-[200px]">
            <KolibiReceipt className="rotate-[2deg]" />
          </a>
          <button
            type="button"
            onClick={() =>
              document
                .getElementById("room-04")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="relative block w-full max-w-[210px] border-0 bg-transparent p-0 text-left"
          >
            <PeeranimoPolaroidStack />
          </button>
        </div>
      </div>

      {/* Desktop absolute layout */}
      <div className="pointer-events-none absolute inset-0 z-30 hidden md:block">
        <HeadlineBlock className="pointer-events-auto absolute left-[34%] top-[13%] max-w-[460px] pr-[6%]" />

        {/* Service note */}
        <div
          className={`pointer-events-auto absolute left-[34%] top-[40%] z-30 max-w-[380px] -rotate-[2deg] bg-white px-5 pb-6 pt-5 ${PAPER_SHADOW}`}
        >
          <Tape className="-left-2 -top-2 -rotate-[14deg]" />
          <div
            className="pointer-events-none absolute inset-x-0 top-[46%] h-[3px] bg-gradient-to-b from-black/10 via-transparent to-white/50"
            aria-hidden="true"
          />
          <p
            className="text-[1.2rem] leading-snug text-[#1A1A1A]"
            style={{ fontFamily: "var(--font-hand), cursive" }}
          >
            Ready when you are.
          </p>
          <button
            type="button"
            onClick={() =>
              document
                .getElementById("room-05")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="mt-4 rounded-full bg-[#1A1A1A] px-5 py-2.5 text-sm font-medium text-[#F5F0E8] transition-opacity hover:opacity-90"
          >
            Start a project →
          </button>
          <TornEdge />
        </div>

        <Clickable
          label="Orivela"
          href="/builds/orivela"
          className="pointer-events-auto right-[20%] top-[8%] z-[35] w-[220px] -rotate-[5deg]"
        >
          <OrivelaNote />
        </Clickable>

        <Clickable
          label="Kolibi"
          href="/builds/kolibi"
          className="pointer-events-auto right-[13%] top-[30%] z-30 w-[170px] rotate-[4deg]"
        >
          <KolibiReceipt />
        </Clickable>

        <Clickable
          label="Peeranimo"
          scrollTo="#room-04"
          className="pointer-events-auto bottom-[16%] left-[30%] z-[35] w-[210px]"
        >
          <PeeranimoPolaroidStack />
        </Clickable>

        <Clickable
          label="See it live"
          href={APP_STORE_URL}
          external
          className="pointer-events-auto right-[13%] top-[6%] z-40 -rotate-[16deg]"
        >
          <AppStoreStamp />
        </Clickable>
      </div>

      <ClickHint />
    </section>
  );
}

function OrivelaNote({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <Tape className="-left-2 -top-2 z-20 -rotate-[28deg]" />
      <div
        className="absolute bottom-0 right-0 z-10 h-9 w-9 bg-[#EDE2B0]"
        style={{ clipPath: "polygon(100% 0, 0 100%, 100% 100%)" }}
        aria-hidden="true"
      />
      <article
        className={`relative bg-[#FCF3C8] px-5 pb-7 pt-5 ${PAPER_SHADOW}`}
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 76%, 76% 100%, 0 100%)",
        }}
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
        <p
          className="relative mt-1 -rotate-[1.5deg] pl-2 text-[0.95rem] leading-snug text-[#1A3A8F]"
          style={{ fontFamily: "var(--font-hand), cursive" }}
        >
          even the ones you forgot about
        </p>
        <div className="relative mt-4 pl-2">
          <AppRow
            icon={ORIVELA_ICON}
            name="Orivela"
            platform="iOS · Android"
          />
        </div>
        <TornEdge fill="#F5F0E8" />
      </article>
    </div>
  );
}

function KolibiReceipt({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <Tape className="left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-2 rotate-[6deg]" />
      <article className={`relative bg-white px-4 pb-5 pt-5 ${PAPER_SHADOW}`}>
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
        <div className="mt-3">
          <AppRow
            icon={KOLIBI_ICON}
            name="Kolibi"
            platform="iOS"
            compact
          />
        </div>
        <ReceiptZigzag position="bottom" />
      </article>
    </div>
  );
}

function PeeranimoPolaroidStack() {
  const cards = [
    {
      src: "/peers/peeranimo_european_woman.jpg",
      color: "#7B5CF0",
      pos: "left-0 top-[8px] z-10 rotate-[-5deg] md:top-[10px] md:rotate-[-13deg]",
      showTape: false,
    },
    {
      src: "/peers/peeranimo_asia_woman.jpg",
      color: "#00C2A8",
      pos: "left-[42px] top-0 z-20 rotate-[-2deg] md:left-[56px]",
      showTape: true,
    },
    {
      src: "/peers/peeranimo_pepe_latino_woman.jpg",
      color: "#D85A30",
      pos: "left-[84px] top-[10px] z-30 rotate-[5deg] md:left-[112px] md:top-[14px] md:rotate-[9deg]",
      showTape: false,
    },
  ] as const;

  return (
    <div className="relative">
      <div className="relative h-[150px] w-[170px] md:h-[180px] md:w-[210px]">
        {cards.map((card) => (
          <div
            key={card.src}
            className={`absolute w-[78px] bg-white p-[6px] pb-[18px] md:w-[92px] ${PAPER_SHADOW} ${card.pos}`}
          >
            {card.showTape && (
              <Tape className="-right-1 -top-1 z-20 rotate-[28deg]" />
            )}
            <div className="relative aspect-square overflow-hidden">
              <img
                src={card.src}
                alt=""
                className="h-full w-full object-cover grayscale contrast-[1.7] brightness-[1.15]"
              />
              <div
                className="absolute inset-0 mix-blend-color"
                style={{ background: card.color }}
              />
              <div
                className="absolute inset-0 opacity-25 mix-blend-screen"
                style={{ background: "#F5F0E8" }}
              />
            </div>
          </div>
        ))}
      </div>
      <p
        className="mt-2 max-w-[210px] -rotate-[2deg] text-center text-[1.05rem] leading-snug text-[#1A1A1A]"
        style={{ fontFamily: "var(--font-hand), cursive" }}
      >
        People who get it. Without searching for years.
      </p>
      <div className="mt-3">
        <AppRow
          icon={PEERANIMO_ICON}
          name="Peeranimo"
          platform="iOS · Web"
        />
      </div>
    </div>
  );
}
