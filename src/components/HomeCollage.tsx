"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

const DESIGN_W = 1440;
const DESIGN_H = 900;

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
          className="h-[54px] w-[54px] rounded-[11px] border border-black/10"
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
        className="h-[62px] w-[62px] rounded-[13px] border border-black/10"
      />
      <div className="leading-tight">
        <p className="text-[15px] font-medium text-[#1A1A1A]">{name}</p>
        <p className="text-[12px] text-[#1A1A1A]/55">{platform}</p>
      </div>
      <span className="ml-auto rounded-full bg-[#1A1A1A] px-4 py-1.5 text-[12px] text-[#F5F0E8]">
        Open
      </span>
    </div>
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
    <div className="group relative cursor-pointer transition-transform duration-200 hover:scale-[1.04] hover:-rotate-1">
      {children}
      <span className="pointer-events-none absolute -bottom-6 left-1/2 z-50 hidden -translate-x-1/2 whitespace-nowrap rounded-full bg-[#1A1A1A] px-3 py-1 text-xs text-[#F5F0E8] opacity-0 transition-opacity duration-200 group-hover:opacity-100 lg:block">
        {label}
      </span>
    </div>
  );

  const posClass = positioned ? "absolute" : "relative block w-full";

  if (href) {
    return (
      <a
        href={href}
        className={`${posClass} ${className}`}
        style={style}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
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
      className={`flex items-center gap-3 bg-[#0B4EA2] px-4 py-2.5 ${PAPER_SHADOW}`}
    >
      <span className="text-[28px] font-bold leading-none text-white">U</span>
      <div className="h-[28px] w-[2px] bg-white/85" />
      <span className="whitespace-nowrap text-[20px] font-medium tracking-tight text-white">
        Rosenthaler Platz
      </span>
    </div>
  );
}

function MateCup({ className = "h-[80px] w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 110" className={className} aria-hidden="true">
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

function FootballSvg({
  className = "h-[85px] w-auto",
  idPrefix = "ball",
}: {
  className?: string;
  idPrefix?: string;
}) {
  const shadeId = `${idPrefix}Shade`;
  const clipId = `${idPrefix}Clip`;

  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <defs>
        <radialGradient id={shadeId} cx="34%" cy="27%" r="80%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="55%" stopColor="#F3F0EA" />
          <stop offset="100%" stopColor="#B9B3A6" />
        </radialGradient>
        <clipPath id={clipId}>
          <circle cx="100" cy="100" r="90" />
        </clipPath>
      </defs>
      <circle cx="100" cy="100" r="90" fill={`url(#${shadeId})`} />
      <g clipPath={`url(#${clipId})`}>
        <path d="M100 62 L136 88 L122 130 L78 130 L64 88 Z" fill="#1A1A1A" />
        <path d="M148 4 L184 30 L170 72 L126 72 L112 30 Z" fill="#1A1A1A" />
        <path d="M52 4 L88 30 L74 72 L30 72 L16 30 Z" fill="#1A1A1A" />
        <path d="M198 106 L214 150 L178 178 L144 152 L154 110 Z" fill="#1A1A1A" />
        <path d="M2 106 L46 110 L56 152 L22 178 L-14 150 Z" fill="#1A1A1A" />
        <path d="M100 170 L136 196 L122 238 L78 238 L64 196 Z" fill="#1A1A1A" />
        <g
          stroke="#1A1A1A"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
        >
          <path d="M100 62 L100 38" />
          <path d="M136 88 L158 80" />
          <path d="M122 130 L134 170" />
          <path d="M78 130 L66 170" />
          <path d="M64 88 L42 80" />
        </g>
        <path
          d="M100 190 A90 90 0 0 0 190 100 A122 122 0 0 1 100 190 Z"
          fill="#1A1A1A"
          opacity="0.13"
        />
      </g>
      <circle
        cx="100"
        cy="100"
        r="90"
        fill="none"
        stroke="#1A1A1A"
        strokeWidth="5"
      />
    </svg>
  );
}

function Football({
  className = "h-[85px] w-auto",
  idPrefix = "ball",
}: {
  className?: string;
  idPrefix?: string;
}) {
  if (!BALL_SRC) {
    return <FootballSvg className={className} idPrefix={idPrefix} />;
  }

  return (
    <>
      <img
        src={BALL_SRC}
        alt=""
        className={`${className} object-contain`}
        onError={(e) => {
          e.currentTarget.style.display = "none";
          const fallback = e.currentTarget.nextElementSibling;
          if (fallback instanceof HTMLElement) {
            fallback.style.display = "block";
          }
        }}
      />
      <span className="hidden">
        <FootballSvg className={className} idPrefix={idPrefix} />
      </span>
    </>
  );
}

function AppStoreStamp() {
  return (
    <svg
      viewBox="0 0 92 92"
      className="h-[95px] w-[95px] opacity-80"
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
      className="pointer-events-none absolute z-40 flex items-center gap-2"
      style={{ left: 900, top: 860 }}
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

function SubtitleLines({ className = "" }: { className?: string }) {
  return (
    <div className={`leading-[1.6] text-[#1A1A1A]/75 ${className}`}>
      <p>
        Hi, I&apos;m Steffen. Curious by default, happiest when nothing exists
        yet, and rarely convinced that the obvious way is the right one.
      </p>
      <p className="mt-3">
        Three apps of my own, plus platforms for people who came with an idea
        and no map.
      </p>
    </div>
  );
}

function HeadlineBlock({
  className = "",
  variant = "desktop",
}: {
  className?: string;
  variant?: "desktop" | "mobile" | "tablet";
}) {
  const headline = (
    <>
      Start before you can.
      <br />
      Find the way while walking.
      <br />
      Something always works.
    </>
  );

  if (variant === "mobile") {
    return (
      <div className={className}>
        <h1
          className="font-serif text-[32px] leading-[1.1] text-[#1A1A1A]"
          style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
        >
          {headline}
        </h1>
        <SubtitleLines className="mt-5 text-[15px]" />
      </div>
    );
  }

  if (variant === "tablet") {
    return (
      <div className={className}>
        <h1
          className="font-serif text-[42px] leading-[1.1] text-[#1A1A1A]"
          style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
        >
          {headline}
        </h1>
        <SubtitleLines className="mt-5 max-w-[520px] text-[16px]" />
      </div>
    );
  }

  return (
    <div className={className}>
      <h1
        className="text-[52px] leading-[1.1] tracking-tight text-[#1A1A1A]"
        style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
      >
        {headline}
      </h1>
      <SubtitleLines className="mt-5 max-w-[490px] text-[17px]" />
    </div>
  );
}

function PeeranimoPolaroids({
  variant = "desktop",
}: {
  variant?: "desktop" | "mobile" | "tablet";
}) {
  const cards =
    variant === "desktop"
      ? ([
          {
            src: "/peers/peeranimo_european_woman.jpg",
            color: "#7B5CF0",
            pos: "left-0 top-[10px] z-10 rotate-[-13deg]",
            showTape: false,
          },
          {
            src: "/peers/peeranimo_asia_woman.jpg",
            color: "#00C2A8",
            pos: "left-[51px] top-0 z-20 rotate-[-2deg]",
            showTape: true,
          },
          {
            src: "/peers/peeranimo_pepe_latino_woman.jpg",
            color: "#D85A30",
            pos: "left-[102px] top-[14px] z-30 rotate-[9deg]",
            showTape: false,
          },
        ] as const)
      : variant === "tablet"
        ? ([
            {
              src: "/peers/peeranimo_european_woman.jpg",
              color: "#7B5CF0",
              pos: "left-0 top-[8px] z-10 rotate-[-4deg]",
              showTape: false,
            },
            {
              src: "/peers/peeranimo_asia_woman.jpg",
              color: "#00C2A8",
              pos: "left-[40px] top-0 z-20 rotate-[-2deg]",
              showTape: true,
            },
            {
              src: "/peers/peeranimo_pepe_latino_woman.jpg",
              color: "#D85A30",
              pos: "left-[80px] top-[10px] z-30 rotate-[4deg]",
              showTape: false,
            },
          ] as const)
        : ([
            {
              src: "/peers/peeranimo_european_woman.jpg",
              color: "#7B5CF0",
              pos: "left-0 top-[8px] z-10 rotate-[-3deg]",
              showTape: false,
            },
            {
              src: "/peers/peeranimo_asia_woman.jpg",
              color: "#00C2A8",
              pos: "left-[40px] top-0 z-20 rotate-[-2deg]",
              showTape: true,
            },
            {
              src: "/peers/peeranimo_pepe_latino_woman.jpg",
              color: "#D85A30",
              pos: "left-[80px] top-[10px] z-30 rotate-[3deg]",
              showTape: false,
            },
          ] as const);

  const cardWidth = variant === "desktop" ? "w-[84px]" : "w-[78px]";

  return (
    <div className="relative h-[132px]">
      {cards.map((card) => (
        <div
          key={card.src}
          className={`absolute bg-white p-[6px] pb-[18px] ${cardWidth} ${PAPER_SHADOW} ${card.pos}`}
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
  );
}

function PeeranimoUnit({
  variant = "desktop",
}: {
  variant?: "desktop" | "mobile" | "tablet";
}) {
  return (
    <div className={variant === "desktop" ? "w-[235px]" : "w-[216px]"}>
      <PeeranimoPolaroids variant={variant} />
      <p
        className="mt-0.5 max-w-[210px] -rotate-[2deg] text-center text-[15px] leading-snug text-[#1A1A1A]"
        style={{ fontFamily: "var(--font-hand), cursive" }}
      >
        People who get it. Without searching for years.
      </p>
      <div className="mt-1.5">
        <AppRow
          icon={PEERANIMO_ICON}
          name="Peeranimo"
          platform="Social platform · iOS · Web"
        />
      </div>
    </div>
  );
}

function ServiceCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative bg-white px-5 pb-6 pt-5 ${PAPER_SHADOW} ${className}`}
    >
      <Tape className="-left-2 -top-2 -rotate-[14deg]" />
      <div
        className="pointer-events-none absolute inset-x-0 top-[46%] h-[3px] bg-gradient-to-b from-black/10 via-transparent to-white/50"
        aria-hidden="true"
      />
      <p
        className="text-[14px] leading-snug text-[#1A1A1A]"
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
        className="mt-4 rounded-full bg-[#1A1A1A] px-5 py-2.5 text-sm font-medium text-[#F5F0E8] transition-opacity hover:opacity-90"
      >
        Let&apos;s think it through →
      </button>
      <TornEdge />
    </div>
  );
}

function PostIt({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative w-[115px] bg-[#F4D35E] px-3 py-3 ${PAPER_SHADOW} ${className}`}
    >
      <Tape className="-left-1 -top-2 -rotate-[18deg]" />
      <p
        className="text-[15px] leading-snug text-[#1A1A1A]"
        style={{ fontFamily: "var(--font-hand), cursive" }}
      >
        new idea
        <br />
        started already
      </p>
    </div>
  );
}

function Fernsehturm({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 420"
      className={className}
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
          className="relative pl-2 text-[20px] leading-snug text-[#1A2E5A]"
          style={{ fontFamily: "var(--font-hand), cursive" }}
        >
          Every contract, every subscription. The answer in seconds.
        </p>
        <p
          className="relative mt-1 -rotate-[1.5deg] pl-2 text-[16px] leading-snug text-[#1A3A8F]"
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
          className="text-[13px] leading-relaxed text-[#333]"
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

export default function HomeCollage() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const update = () => {
      const r = el.getBoundingClientRect();
      setScale(Math.min(r.width / DESIGN_W, r.height / DESIGN_H));
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div id="room-01">
      {/* DESKTOP + TABLET LANDSCAPE */}
      <section
        ref={stageRef}
        className="relative hidden h-screen w-full overflow-hidden bg-[#F5F0E8] lg:block"
      >
        <div
          className="absolute left-1/2 top-1/2"
          style={{
            width: DESIGN_W,
            height: DESIGN_H,
            transform: `translate(-50%, -50%) scale(${scale})`,
          }}
        >
          {/* Lila Fläche */}
          <svg
            className="pointer-events-none absolute z-0 -rotate-[4deg]"
            style={{ left: 0, top: 150, width: 400, height: 430 }}
            viewBox="0 0 280 340"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              fill="#7B5CF0"
              d="M36 62 L62 54 L88 65 L116 55 L146 66 L176 56 L204 67 L232 57 L238 300 L210 310 L182 300 L154 311 L124 301 L96 312 L66 302 L40 312 Z"
            />
          </svg>

          {/* Türkise Fläche */}
          <svg
            className="pointer-events-none absolute z-0 rotate-[3deg]"
            style={{ left: 1120, top: 620, width: 230, height: 250 }}
            viewBox="0 0 260 280"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              fill="#00C2A8"
              d="M28 48 L54 40 L82 52 L110 42 L140 54 L168 44 L196 55 L224 46 L232 250 L204 262 L176 252 L148 263 L118 253 L90 264 L60 254 L34 265 Z"
            />
          </svg>

          <Clickable
            label="Why Berlin?"
            scrollTo="#room-02"
            className="z-10 rotate-[2deg]"
            style={{ left: 250, top: 10 }}
          >
            <Fernsehturm className="h-[280px] w-auto" />
          </Clickable>

          <div
            className="absolute z-10"
            style={{ left: 1265, top: 200, width: 56 }}
            aria-hidden="true"
          >
            <SolDeMayo />
          </div>

          <div
            className="absolute z-20"
            style={{ left: 30, top: 400, height: 500 }}
          >
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

          <div
            className="absolute z-30 w-[490px]"
            style={{ left: 430, top: 80 }}
          >
            <HeadlineBlock />
          </div>

          <Clickable
            label="Orivela"
            scrollTo="#room-03b"
            className="z-[35] w-[260px] -rotate-[5deg]"
            style={{ left: 900, top: 55 }}
          >
            <OrivelaNote />
          </Clickable>

          <Clickable
            label="See it live"
            href={APP_STORE_URL}
            external
            className="z-40 -rotate-[16deg]"
            style={{ left: 1130, top: 30, width: 95 }}
          >
            <AppStoreStamp />
          </Clickable>

          <Clickable
            label="Kolibi"
            scrollTo="#room-03c"
            className="z-30 w-[185px] rotate-[4deg]"
            style={{ left: 1130, top: 290 }}
          >
            <KolibiReceipt />
          </Clickable>

          <div
            className="pointer-events-none absolute z-[45] rotate-[8deg]"
            style={{ left: 780, top: 470 }}
            aria-hidden="true"
          >
            <Football idPrefix="ballDesk" />
          </div>

          <div
            className="absolute z-30 -rotate-[6deg]"
            style={{ left: 600, top: 480 }}
          >
            <PostIt />
          </div>

          <Clickable
            label="Peeranimo"
            scrollTo="#room-04"
            className="z-[35] w-[235px]"
            style={{ left: 870, top: 580 }}
          >
            <PeeranimoUnit />
          </Clickable>

          <div
            className="absolute z-30 w-[285px] -rotate-[2deg]"
            style={{ left: 450, top: 620 }}
          >
            <ServiceCard />
          </div>

          <div
            className="absolute z-[25] -rotate-[6deg]"
            style={{ left: 450, top: 830 }}
            aria-hidden="true"
          >
            <UBahnSign />
          </div>

          <div
            className="absolute z-20 rotate-[5deg]"
            style={{ left: 1180, top: 645 }}
            aria-hidden="true"
          >
            <MateCup />
          </div>

          <ClickHint />
        </div>
      </section>

      {/* TABLET PORTRAIT */}
      <section className="hidden bg-[#F5F0E8] px-8 py-14 md:block lg:hidden">
        <HeadlineBlock variant="tablet" />

        <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10">
          <div className="flex flex-col items-center gap-10">
            <img
              src="/me-steffen.png"
              alt=""
              className="h-[340px] w-auto object-contain drop-shadow-[3px_5px_9px_rgba(26,26,26,0.22)]"
            />
            <div className="relative w-full max-w-[280px]">
              <Clickable
                label="Orivela"
                scrollTo="#room-03b"
                positioned={false}
              >
                <OrivelaNote className="-rotate-[4deg]" />
              </Clickable>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -right-2 -top-3 z-10 -rotate-[12deg]"
                aria-label="See it live"
              >
                <AppStoreStamp />
              </a>
            </div>
            <Clickable
              label="Peeranimo"
              scrollTo="#room-04"
              positioned={false}
              className="max-w-[235px]"
            >
              <PeeranimoUnit variant="tablet" />
            </Clickable>
          </div>

          <div className="mt-16 flex flex-col items-center gap-10">
            <Clickable
              label="Kolibi"
              scrollTo="#room-03c"
              positioned={false}
              className="max-w-[200px]"
            >
              <KolibiReceipt className="rotate-[3deg]" />
            </Clickable>
            <PostIt className="-rotate-[4deg]" />
            <div className="w-full max-w-[285px]">
              <ServiceCard className="-rotate-[2deg]" />
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-center gap-8">
          <div className="scale-90 -rotate-[4deg]" aria-hidden="true">
            <UBahnSign />
          </div>
          <Football
            className="h-[70px] w-auto rotate-[4deg]"
            idPrefix="ballTab"
          />
          <div className="rotate-[3deg]" aria-hidden="true">
            <MateCup className="h-[64px] w-auto" />
          </div>
        </div>
      </section>

      {/* MOBILE */}
      <section className="bg-[#F5F0E8] px-6 py-12 md:hidden">
        <HeadlineBlock variant="mobile" />

        <img
          src="/me-steffen.png"
          alt=""
          className="mx-auto mt-8 h-[300px] w-auto object-contain drop-shadow-[3px_5px_9px_rgba(26,26,26,0.22)]"
        />

        <Clickable
          label="Orivela"
          scrollTo="#room-03b"
          positioned={false}
          className="mx-auto mt-10 max-w-[300px]"
        >
          <OrivelaNote className="-rotate-[3deg]" />
        </Clickable>

        <Clickable
          label="Kolibi"
          scrollTo="#room-03c"
          positioned={false}
          className="mx-auto mt-10 max-w-[300px]"
        >
          <KolibiReceipt className="rotate-[2deg]" />
        </Clickable>

        <Clickable
          label="Peeranimo"
          scrollTo="#room-04"
          positioned={false}
          className="mx-auto mt-10 max-w-[300px]"
        >
          <div className="flex justify-center">
            <PeeranimoUnit variant="mobile" />
          </div>
        </Clickable>

        <div className="mx-auto mt-10 max-w-[285px]">
          <ServiceCard className="-rotate-[2deg]" />
        </div>

        <div className="mt-10 flex items-center justify-center gap-6">
          <PostIt className="-rotate-[3deg]" />
          <Football className="h-[60px] w-auto" idPrefix="ballMob" />
          <div className="scale-90" aria-hidden="true">
            <UBahnSign />
          </div>
          <MateCup className="h-[56px] w-auto" />
        </div>
      </section>
    </div>
  );
}
