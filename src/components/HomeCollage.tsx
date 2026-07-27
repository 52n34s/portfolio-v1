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

const BALL_SRC: string | null = null;

const ORIVELA_ICON = "/app-logo-orivela.png";
const KOLIBI_ICON = "/app-logo-kolibi.jpg";
const PEERANIMO_ICON = "/app-logo-peeranimo.webp";
const CARPINCHO_ICON = "/app-logo-carpincho.png";

const PAPER_SHADOW = "shadow-[2px_5px_14px_rgba(26,26,26,0.13)]";

const APP_STATUS: Record<string, [string, string, string]> = {
  orivela: ["ORIVELA", "LIVE", "ON THE APP STORE"],
  kolibi: ["KOLIBI", "LIVE", "ON THE APP STORE"],
  peeranimo: ["PEERANIMO", "LIVE", "ON THE WEB"],
  carpincho: ["CARPINCHO", "COMING SOON", "JOIN WAITLIST"],
};

function StatusStamp({ lines }: { lines: [string, string, string] }) {
  return (
    <div className="flex h-[62px] w-[62px] shrink-0 -rotate-12 flex-col items-center justify-center rounded-full border-2 border-[#1D9E75] text-[#1D9E75] opacity-80">
      <span
        className="text-[6px] tracking-wider"
        style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
      >
        {lines[0]}
      </span>
      <span
        className="text-[12px] font-medium leading-none"
        style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
      >
        {lines[1]}
      </span>
      <span
        className="px-1 text-center text-[5px] leading-[1.15] tracking-wider"
        style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
      >
        {lines[2]}
      </span>
    </div>
  );
}

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
  cta = true,
}: {
  icon: string;
  name: string;
  platform: string;
  compact?: boolean;
  cta?: boolean;
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
        {cta ? (
          <span className="rounded-full bg-[#1A1A1A] px-2.5 py-[3px] text-[10px] text-[#F5F0E8]">
            Open
          </span>
        ) : (
          <p className="text-center text-[10px] text-[#1A1A1A]/55">{platform}</p>
        )}
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
      {cta ? (
        <span className="ml-auto rounded-full bg-[#1A1A1A] px-4 py-1.5 text-[12px] text-[#F5F0E8]">
          Open
        </span>
      ) : null}
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

function SolDeMayo({ className = "h-14 w-14 opacity-80" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 56 56"
      className={className}
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

function SubtitleLines({ className = "" }: { className?: string }) {
  return (
    <div className={`leading-[1.6] text-[#1A1A1A]/75 ${className}`}>
      <p>
        Hi, I&apos;m Steffen. Curious by default, happiest when nothing exists
        yet, and rarely convinced that the obvious way is the right one.
      </p>
      <p className="mt-3">
        Four apps of my own, plus platforms for people who came with an idea
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
        className="text-[48px] leading-[1.1] tracking-tight text-[#1A1A1A]"
        style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
      >
        {headline}
      </h1>
      <SubtitleLines className="mt-6 max-w-[700px] text-[17px]" />
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
    <div
      className={`relative ${variant === "desktop" ? "w-[225px]" : "w-[216px]"}`}
    >
      <div className="absolute -right-4 -top-4 z-40">
        <StatusStamp lines={APP_STATUS.peeranimo} />
      </div>
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
          platform="Social platform · Web"
        />
      </div>
    </div>
  );
}

function ServiceCard({
  className = "",
  variant = "desktop",
}: {
  className?: string;
  variant?: "desktop" | "mobile" | "tablet";
}) {
  const copySize =
    variant === "mobile"
      ? "text-[18px]"
      : variant === "tablet"
        ? "text-[19px]"
        : "text-[20px]";
  const buttonSize =
    variant === "mobile"
      ? "px-5 py-2.5 text-[14px]"
      : "px-5 py-2.5 text-[15px]";

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
        className={`${copySize} leading-snug text-[#1A1A1A]`}
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
        className={`mt-4 rounded-full bg-[#1A1A1A] font-medium text-[#F5F0E8] transition-opacity hover:opacity-90 ${buttonSize}`}
      >
        Let&apos;s think it through →
      </button>
      <TornEdge />
    </div>
  );
}

function PostIt({
  className = "",
  widthClass = "w-[110px]",
}: {
  className?: string;
  widthClass?: string;
}) {
  return (
    <div
      className={`relative bg-[#F4D35E] px-3 py-3 ${PAPER_SHADOW} ${widthClass} ${className}`}
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

function CarpinchoCard({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute -right-3 -top-3 z-40">
        <StatusStamp lines={APP_STATUS.carpincho} />
      </div>
      <Tape className="-left-2 -top-2 z-20 -rotate-[22deg]" />
      <article
        className={`relative bg-[#FFFDF5] px-3.5 pb-4 pt-4 ${PAPER_SHADOW}`}
      >
        <p
          className="text-[18px] leading-snug text-[#D6156F]"
          style={{ fontFamily: "var(--font-hand), cursive" }}
        >
          830 words.
        </p>
        <p
          className="mt-1 text-[15px] leading-snug text-[#D6156F]"
          style={{ fontFamily: "var(--font-hand), cursive" }}
        >
          Enough to never get switched to English.
        </p>
        <div className="mt-3">
          <AppRow
            icon={CARPINCHO_ICON}
            name="Carpincho"
            platform="Rioplatense Spanish"
            cta={false}
          />
        </div>
      </article>
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
      <div className="absolute -right-4 -top-4 z-40">
        <StatusStamp lines={APP_STATUS.orivela} />
      </div>
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
          <AppRow icon={ORIVELA_ICON} name="Orivela" platform="iOS" />
        </div>
        <TornEdge fill="#F5F0E8" />
      </article>
    </div>
  );
}

function KolibiReceipt({ className = "" }: { className?: string }) {
  const mono = { fontFamily: "var(--font-jetbrains-mono), monospace" };

  return (
    <div className={`relative ${className}`}>
      <div className="absolute -right-4 -top-4 z-40">
        <StatusStamp lines={APP_STATUS.kolibi} />
      </div>
      <Tape className="left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-2 rotate-[6deg]" />
      <article className={`relative bg-white px-4 pb-5 pt-5 ${PAPER_SHADOW}`}>
        <ReceiptZigzag position="top" />
        <p
          className="text-center text-[11px] font-medium uppercase tracking-wider text-[#1A1A1A]"
          style={mono}
        >
          KOLIBI
        </p>
        <div className="my-2 border-t border-dashed border-[#1A1A1A]/30" />
        <p className="text-[11px] leading-snug text-[#333]" style={mono}>
          One photo. You know what&apos;s left for today.
        </p>
        <div className="my-2 border-t border-dashed border-[#1A1A1A]/30" />
        <div className="space-y-0.5 text-[10px] text-[#1A1A1A]" style={mono}>
          <div className="flex justify-between gap-2">
            <span>BOWL &amp; EGGS</span>
            <span>438</span>
          </div>
          <div className="flex justify-between gap-2">
            <span>FLAT WHITE</span>
            <span>84</span>
          </div>
        </div>
        <div className="my-2 border-t border-dashed border-[#1A1A1A]/30" />
        <p
          className="text-[11px] font-medium text-[#1A1A1A]"
          style={mono}
        >
          <span className="flex justify-between gap-2">
            <span>REMAINING</span>
            <span>412 kcal</span>
          </span>
        </p>
        <div className="mt-3">
          <AppRow
            icon={KOLIBI_ICON}
            name="Kolibi"
            platform="iOS · Android"
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
            style={{ left: 0, top: 350, width: 360, height: 400 }}
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
            style={{ left: 1120, top: 730, width: 210, height: 150 }}
            viewBox="0 0 260 280"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              fill="#00C2A8"
              d="M28 48 L54 40 L82 52 L110 42 L140 54 L168 44 L196 55 L224 46 L232 250 L204 262 L176 252 L148 263 L118 253 L90 264 L60 254 L34 265 Z"
            />
          </svg>

          {/* Gelbe Fläche — Anker oben rechts */}
          <svg
            className="pointer-events-none absolute z-0 -rotate-[3deg]"
            style={{ left: 1020, top: 25, width: 300, height: 265 }}
            viewBox="0 0 200 180"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              fill="#F4D35E"
              d="M22 34 L46 26 L72 38 L98 28 L124 39 L150 29 L172 40 L178 150 L152 160 L126 150 L100 161 L74 151 L48 162 L26 152 Z"
            />
          </svg>

          {/* BAND 1: Text */}
          <div
            className="absolute z-30 w-[820px]"
            style={{ left: 70, top: 50 }}
          >
            <HeadlineBlock />
          </div>

          {/* BAND 1: Deko auf gelber Fläche */}
          <Clickable
            label="Why Berlin?"
            scrollTo="#room-02"
            className="z-10 rotate-[2deg]"
            style={{ left: 1150, top: 15 }}
          >
            <Fernsehturm className="h-[265px] w-auto" />
          </Clickable>

          <div
            className="absolute z-10"
            style={{ left: 1268, top: 95, width: 48 }}
            aria-hidden="true"
          >
            <SolDeMayo className="h-[48px] w-[48px] opacity-80" />
          </div>

          <div
            className="pointer-events-none absolute z-[15] rotate-[5deg]"
            style={{ left: 1045, top: 195 }}
            aria-hidden="true"
          >
            <Football className="h-[66px] w-auto" idPrefix="ballDesk" />
          </div>

          {/* BAND 2: Steffen + Apps — shared top edge y=380 */}
          <div
            className="absolute z-20"
            style={{ left: 50, top: 380, height: 440 }}
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

          <Clickable
            label="Orivela"
            scrollTo="#room-03b"
            className="z-[35] w-[240px] -rotate-[5deg]"
            style={{ left: 470, top: 380 }}
          >
            <OrivelaNote />
          </Clickable>

          <Clickable
            label="Kolibi"
            scrollTo="#room-03c"
            className="z-30 w-[190px] rotate-[4deg]"
            style={{ left: 760, top: 380 }}
          >
            <KolibiReceipt />
          </Clickable>

          <Clickable
            label="Peeranimo"
            scrollTo="#room-04"
            className="z-[35] w-[225px]"
            style={{ left: 990, top: 380 }}
          >
            <PeeranimoUnit />
          </Clickable>

          {/* BAND 3: unteres Band */}
          <div
            className="absolute z-30 w-[310px] -rotate-[2deg]"
            style={{ left: 470, top: 700 }}
          >
            <ServiceCard />
          </div>

          <Clickable
            label="Carpincho"
            href="https://carpincho.app/"
            external
            className="z-[32] w-[160px] rotate-[4deg]"
            style={{ left: 800, top: 560 }}
          >
            <CarpinchoCard />
          </Clickable>

          <div
            className="absolute z-30 -rotate-[5deg]"
            style={{ left: 790, top: 700 }}
          >
            <PostIt />
          </div>

          <div
            className="absolute z-20 rotate-[5deg]"
            style={{ left: 1150, top: 750 }}
            aria-hidden="true"
          >
            <MateCup className="h-[70px] w-auto" />
          </div>
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
            <div className="relative w-full max-w-[180px]">
              <Clickable
                label="Carpincho"
                href="https://carpincho.app/"
                external
                positioned={false}
              >
                <CarpinchoCard className="rotate-[3deg]" />
              </Clickable>
              <div className="absolute -bottom-3 left-2 z-10">
                <PostIt className="-rotate-[4deg]" />
              </div>
            </div>
            <div className="mt-8 w-full max-w-[285px]">
              <ServiceCard className="-rotate-[2deg]" variant="tablet" />
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-center gap-8">
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

        <div className="relative mx-auto mt-10 max-w-[180px]">
          <Clickable
            label="Carpincho"
            href="https://carpincho.app/"
            external
            positioned={false}
          >
            <CarpinchoCard className="rotate-[3deg]" />
          </Clickable>
          <div className="mt-2 flex justify-center">
            <PostIt className="-rotate-[3deg]" />
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-[285px]">
          <ServiceCard className="-rotate-[2deg]" variant="mobile" />
        </div>

        <div className="mt-10 flex items-center justify-center gap-6">
          <Football className="h-[60px] w-auto" idPrefix="ballMob" />
          <MateCup className="h-[56px] w-auto" />
        </div>
      </section>
    </div>
  );
}
