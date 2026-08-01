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


const ORIVELA_ICON = "/app-logo-orivela.png";
const KOLIBI_ICON = "/app-logo-kolibi.jpg";
const PEERANIMO_ICON = "/app-logo-peeranimo.webp";
const CARPINCHO_ICON = "/carpincho.png";

const PAPER_SHADOW = "shadow-[2px_5px_14px_rgba(26,26,26,0.13)]";

const APP_STATUS: Record<string, [string, string, string]> = {
  orivela: ["ORIVELA", "LIVE", "ON THE APP STORE"],
  kolibi: ["KOLIBI", "LIVE", "ON THE APP STORE"],
  peeranimo: ["PEERANIMO", "LIVE", "ON THE WEB"],
  carpincho: ["CARPINCHO", "SOON", "JOIN WAITLIST"],
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

const CELL_W = 330;
const CELL_H = 255;
/** Vertical clearance for the tallest top-row card before the second row. */
const GRID_ROW_SPAN = 320;
const CARD_PAD = 24;
/** Extra bottom inset so Open pill clears the paper edge (Tailwind spacing 12 = 3rem). */
const CARD_PAD_BOTTOM = 48;
const HAND_COPY = "pr-[90px] text-[17px] leading-snug";

/** Grid positions — 64px from subhead, 64px cell gap, 48px row gap */
const GRID_X = 704;
const GRID_Y = 280;
const GRID_GAP_X = 64;
const GRID_GAP_Y = 48;

function OpenPill({
  className = "",
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <span
      className={`rounded-full bg-[#1A1A1A] px-4 py-1.5 text-[12px] leading-none text-[#F5F0E8] ${className}`}
      style={style}
    >
      Open
    </span>
  );
}

function AppIdentity({
  icon,
  name,
  platform,
}: {
  icon: string;
  name: string;
  platform: string;
}) {
  return (
    <div className="flex items-center gap-2.5">
      <img
        src={icon}
        alt={`${name} app icon`}
        className="h-[48px] w-[48px] rounded-[11px] border border-black/10 object-cover"
      />
      <div className="leading-tight">
        <h3 className="m-0 text-[14px] font-medium text-[#1A1A1A]">{name}</h3>
        <p className="text-[11px] text-[#1A1A1A]/55">{platform}</p>
      </div>
    </div>
  );
}

/** Self-contained app cell: flex flow; only the stamp stays absolute. */
function AppObjectShell({
  stamp,
  children,
  footer,
  className = "",
  style,
  minHeight = CELL_H,
}: {
  stamp: [string, string, string];
  children: ReactNode;
  footer: ReactNode;
  className?: string;
  style?: CSSProperties;
  minHeight?: number;
}) {
  return (
    <article
      className={`relative flex w-full max-w-full flex-col overflow-visible ${className}`}
      style={{
        width: "100%",
        maxWidth: CELL_W,
        minHeight,
        height: "auto",
        padding: `${CARD_PAD}px ${CARD_PAD}px ${CARD_PAD_BOTTOM}px`,
        gap: 16,
        ...style,
      }}
    >
      <div className="absolute z-40" style={{ top: -14, right: -14 }}>
        <StatusStamp lines={stamp} />
      </div>
      {children}
      <div className="relative z-10">{footer}</div>
      <OpenPill className="relative z-10 mt-auto self-start" />
    </article>
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
        {...(external
          ? { target: "_blank", rel: "noopener" }
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

function HeadlineOnly({
  className = "",
  size = "desktop",
}: {
  className?: string;
  size?: "desktop" | "mobile" | "tablet";
}) {
  const sizeClass =
    size === "mobile"
      ? "text-[32px]"
      : size === "tablet"
        ? "text-[42px]"
        : "text-[48px]";

  return (
    <p
      className={`leading-[1.1] tracking-tight text-[#1A1A1A] ${sizeClass} ${className}`}
      style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
    >
      Start before you can.
      <br />
      Find the way while walking.
      <br />
      Trust the process.
    </p>
  );
}

function HeadlineBlock({
  className = "",
  variant = "desktop",
}: {
  className?: string;
  variant?: "desktop" | "mobile" | "tablet";
}) {
  if (variant === "mobile") {
    return (
      <div className={className}>
        <HeadlineOnly size="mobile" />
        <SubtitleLines className="mt-10 max-w-[560px] text-[15px]" />
      </div>
    );
  }

  if (variant === "tablet") {
    return (
      <div className={className}>
        <HeadlineOnly size="tablet" />
        <SubtitleLines className="mt-10 max-w-[560px] text-[16px]" />
      </div>
    );
  }

  return (
    <div className={className}>
      <HeadlineOnly />
      <SubtitleLines className="mt-10 max-w-[560px] text-[17px]" />
    </div>
  );
}

function PeeranimoPolaroids() {
  const cards = [
    {
      src: "/peers/peeranimo_european_woman.jpg",
      alt: "Peer portrait — woman with light brown hair",
      color: "#7B5CF0",
      pos: "left-0 top-[8px] z-10 rotate-[-10deg]",
      showTape: false,
    },
    {
      src: "/peers/peeranimo_asia_woman.jpg",
      alt: "Peer portrait — woman with dark hair",
      color: "#00C2A8",
      pos: "left-[48px] top-0 z-20 rotate-[-2deg]",
      showTape: true,
    },
    {
      src: "/peers/peeranimo_pepe_latino_woman.jpg",
      alt: "Peer portrait — woman with curly hair",
      color: "#D85A30",
      pos: "left-[96px] top-[10px] z-30 rotate-[8deg]",
      showTape: false,
    },
  ] as const;

  return (
    <div className="relative h-[108px]">
      {cards.map((card) => (
        <div
          key={card.src}
          className={`absolute w-[72px] bg-white p-[5px] pb-[14px] ${PAPER_SHADOW} ${card.pos}`}
        >
          {card.showTape && (
            <Tape className="-right-1 -top-1 z-20 rotate-[28deg]" />
          )}
          <div className="relative aspect-square overflow-hidden">
            <img
              src={card.src}
              alt={card.alt}
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

function PeeranimoUnit({ className = "" }: { className?: string }) {
  return (
    <AppObjectShell
      stamp={APP_STATUS.peeranimo}
      className={className}
      footer={
        <AppIdentity
          icon={PEERANIMO_ICON}
          name="Peeranimo"
          platform="Social platform · Web"
        />
      }
    >
      <div className="relative z-10">
        <PeeranimoPolaroids />
        <p
          className={`mt-1 text-center text-[#1A1A1A] ${HAND_COPY}`}
          style={{ fontFamily: "var(--font-hand), cursive" }}
        >
          People who get it. Without searching for years.
        </p>
      </div>
    </AppObjectShell>
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
        : "text-[18px]";
  const buttonSize =
    variant === "mobile"
      ? "px-5 py-2.5 text-[14px]"
      : "px-4 py-2 text-[13px]";

  return (
    <div
      className={`relative bg-white px-4 pb-5 pt-4 ${PAPER_SHADOW} ${className}`}
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
        className={`mt-3 rounded-full bg-[#1A1A1A] font-medium text-[#F5F0E8] transition-opacity hover:opacity-90 ${buttonSize}`}
      >
        Let&apos;s think it through →
      </button>
      <TornEdge />
    </div>
  );
}

function CarpinchoVariantFlags({ className = "" }: { className?: string }) {
  const flags = [
    { emoji: "🇦🇷", label: "Argentina" },
    { emoji: "🇺🇾", label: "Uruguay" },
    { emoji: "🇲🇽", label: "Mexico" },
    { emoji: "🇨🇴", label: "Colombia" },
    { emoji: "🇵🇪", label: "Peru" },
    { emoji: "🇪🇸", label: "Spain" },
  ] as const;

  return (
    <div
      className={`flex items-center gap-1.5 ${className}`}
      aria-label="Language variants: Rioplatense, Neutral Latin America, Spain"
    >
      {flags.map((flag) => (
        <span
          key={flag.label}
          className="text-[14px] leading-none"
          role="img"
          aria-label={flag.label}
        >
          {flag.emoji}
        </span>
      ))}
    </div>
  );
}

function CarpinchoCard({ className = "" }: { className?: string }) {
  return (
    <AppObjectShell
      stamp={APP_STATUS.carpincho}
      className={`bg-[#FFFDF5] ${PAPER_SHADOW} ${className}`}
      minHeight={Math.round(CELL_H * 0.85)}
      footer={
        <div>
          <AppIdentity
            icon={CARPINCHO_ICON}
            name="Carpincho"
            platform="Spanish with the least effort possible"
          />
          <CarpinchoVariantFlags className="mt-2" />
        </div>
      }
    >
      <Tape className="absolute -left-2 -top-2 z-20 -rotate-[22deg]" />
      <div className="relative z-10">
        <p
          className={`text-[#D6156F] ${HAND_COPY}`}
          style={{ fontFamily: "var(--font-hand), cursive" }}
        >
          Don&apos;t be a tourist.
        </p>
        <p
          className={`mt-1 text-[#D6156F] ${HAND_COPY}`}
          style={{ fontFamily: "var(--font-hand), cursive" }}
        >
          1,000 words is enough.
        </p>
      </div>
    </AppObjectShell>
  );
}

function OrivelaNote({ className = "" }: { className?: string }) {
  return (
    <AppObjectShell
      stamp={APP_STATUS.orivela}
      className={`bg-[#FCF3C8] ${PAPER_SHADOW} ${className}`}
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 76%, 76% 100%, 0 100%)",
      }}
      footer={
        <AppIdentity icon={ORIVELA_ICON} name="Orivela" platform="iOS" />
      }
    >
      <Tape className="absolute -left-2 -top-2 z-20 -rotate-[28deg]" />
      <div
        className="absolute bottom-0 right-0 z-10 h-9 w-9 bg-[#EDE2B0]"
        style={{ clipPath: "polygon(100% 0, 0 100%, 100% 100%)" }}
        aria-hidden="true"
      />
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
        className={`relative z-10 pl-2 text-[#1A2E5A] ${HAND_COPY}`}
        style={{ fontFamily: "var(--font-hand), cursive" }}
      >
        Every document you&apos;ll need someday.
        <br />
        Found in seconds.
      </p>
      <TornEdge fill="#F5F0E8" />
    </AppObjectShell>
  );
}

function KolibiReceipt({ className = "" }: { className?: string }) {
  const mono = { fontFamily: "var(--font-jetbrains-mono), monospace" };

  return (
    <AppObjectShell
      stamp={APP_STATUS.kolibi}
      className={`bg-white ${PAPER_SHADOW} ${className}`}
      footer={
        <AppIdentity
          icon={KOLIBI_ICON}
          name="Kolibi"
          platform="iOS · Android"
        />
      }
    >
      <Tape className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-2 rotate-[6deg]" />
      <ReceiptZigzag position="top" />
      <div className="relative z-10">
        <p
          className="pr-[90px] text-center text-[11px] font-medium uppercase tracking-wider text-[#1A1A1A]"
          style={mono}
        >
          KOLIBI
        </p>
        <div className="my-1.5 border-t border-dashed border-[#1A1A1A]/30" />
        <p
          className="pr-[90px] text-[11px] leading-snug text-[#333]"
          style={mono}
        >
          One photo. You know what&apos;s left for today.
        </p>
        <div className="my-1.5 border-t border-dashed border-[#1A1A1A]/30" />
        <div
          className="space-y-0.5 pr-[90px] text-[10px] text-[#1A1A1A]"
          style={mono}
        >
          <div className="flex justify-between gap-2">
            <span>BOWL &amp; EGGS</span>
            <span>438</span>
          </div>
          <div className="flex justify-between gap-2">
            <span>FLAT WHITE</span>
            <span>84</span>
          </div>
        </div>
        <div className="my-1.5 border-t border-dashed border-[#1A1A1A]/30" />
        <p
          className="pr-[90px] text-[11px] font-medium text-[#1A1A1A]"
          style={mono}
        >
          <span className="flex justify-between gap-2">
            <span>REMAINING</span>
            <span>412 kcal</span>
          </span>
        </p>
      </div>
      <ReceiptZigzag position="bottom" />
    </AppObjectShell>
  );
}

export default function HomeCollage() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [layout, setLayout] = useState<"desktop" | "tablet" | "mobile">(
    "desktop",
  );

  useEffect(() => {
    const mqDesktop = window.matchMedia("(min-width: 1024px)");
    const mqTablet = window.matchMedia("(min-width: 768px)");
    const update = () => {
      if (mqDesktop.matches) setLayout("desktop");
      else if (mqTablet.matches) setLayout("tablet");
      else setLayout("mobile");
    };
    update();
    mqDesktop.addEventListener("change", update);
    mqTablet.addEventListener("change", update);
    return () => {
      mqDesktop.removeEventListener("change", update);
      mqTablet.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (layout !== "desktop") return;
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
  }, [layout]);

  const gridCol2 = GRID_X + CELL_W + GRID_GAP_X;
  const gridRow2 = GRID_Y + GRID_ROW_SPAN + GRID_GAP_Y;

  return (
    <div id="room-01">
      <h1 className="sr-only">
        Steffen Giebler — Product Developer and Indie Founder in Berlin
      </h1>
      <h2 className="sr-only">Apps</h2>
      {layout === "desktop" && (
        <section className="relative w-full overflow-hidden bg-[#F5F0E8]">
          <div
            ref={stageRef}
            className="relative h-screen w-full overflow-hidden"
          >
          <div
            className="absolute left-1/2 top-1/2"
            style={{
              width: DESIGN_W,
              height: DESIGN_H,
              transform: `translate(-50%, -50%) scale(${scale})`,
            }}
          >
            <svg
              className="pointer-events-none absolute z-0 -rotate-[4deg]"
              style={{ left: 0, top: 480, width: 300, height: 380 }}
              viewBox="0 0 280 340"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                fill="#7B5CF0"
                d="M36 62 L62 54 L88 65 L116 55 L146 66 L176 56 L204 67 L232 57 L238 300 L210 310 L182 300 L154 311 L124 301 L96 312 L66 302 L40 312 Z"
              />
            </svg>

            <div
              className="absolute z-30"
              style={{ left: 80, top: 90, width: 780 }}
            >
              <HeadlineOnly />
              <SubtitleLines className="mt-10 max-w-[560px] text-[15px]" />
            </div>

            <div
              className="absolute z-20"
              style={{ left: 80, top: 500, width: 250, height: 370 }}
            >
              <img
                src="/me-steffen.png"
                alt="Steffen Giebler, product developer and indie founder, Berlin"
                className="pointer-events-none h-full w-auto object-contain drop-shadow-[3px_5px_9px_rgba(26,26,26,0.22)]"
              />
              <Clickable
                label="Why I wear colors"
                scrollTo="#room-05"
                className="left-0 top-[45%] h-[55%] w-full"
              >
                <span className="block h-full w-full" aria-hidden="true" />
              </Clickable>
            </div>

            <div
              className="absolute z-30 -rotate-[1deg]"
              style={{ left: 360, top: 620, width: 230, height: 250 }}
            >
              <ServiceCard />
            </div>

            <Clickable
              label="Kolibi"
              href="https://apps.apple.com/us/app/kolibi/id6790129149"
              external
              className="z-30 -rotate-[1.5deg]"
              style={{ left: GRID_X, top: GRID_Y, width: CELL_W }}
            >
              <KolibiReceipt />
            </Clickable>

            <Clickable
              label="Carpincho"
              href="https://carpincho.app/"
              external
              className="z-[32] rotate-[1.2deg]"
              style={{ left: gridCol2, top: GRID_Y, width: CELL_W }}
            >
              <CarpinchoCard />
            </Clickable>

            <Clickable
              label="Orivela"
              href="https://www.orivela.app/"
              external
              className="z-[35] -rotate-[0.8deg]"
              style={{ left: GRID_X, top: gridRow2, width: CELL_W }}
            >
              <OrivelaNote />
            </Clickable>

            <Clickable
              label="Peeranimo"
              href="https://peeranimo.app/"
              external
              className="z-[35] rotate-[1.5deg]"
              style={{ left: gridCol2, top: gridRow2, width: CELL_W }}
            >
              <PeeranimoUnit />
            </Clickable>
          </div>
          </div>
          {/* Card→skyline breathing room (desktop) */}
          <div className="h-[220px]" aria-hidden="true" />
        </section>
      )}

      {layout === "tablet" && (
        <section className="overflow-visible bg-[#F5F0E8] px-8 pt-14 pb-[220px]">
          <HeadlineBlock variant="tablet" />

          <img
            src="/me-steffen.png"
            alt="Steffen Giebler, product developer and indie founder, Berlin"
            className="mx-auto mt-12 h-[300px] w-auto object-contain drop-shadow-[3px_5px_9px_rgba(26,26,26,0.22)]"
          />

          <div className="mx-auto mt-12 grid w-full max-w-[720px] grid-cols-2 items-start gap-x-4 gap-y-10 overflow-visible px-5 pt-5">
            <Clickable
              label="Kolibi"
              href="https://apps.apple.com/us/app/kolibi/id6790129149"
              external
              positioned={false}
            >
              <KolibiReceipt className="-rotate-[1.5deg]" />
            </Clickable>
            <Clickable
              label="Carpincho"
              href="https://carpincho.app/"
              external
              positioned={false}
            >
              <CarpinchoCard className="rotate-[1.2deg]" />
            </Clickable>
            <Clickable
              label="Orivela"
              href="https://www.orivela.app/"
              external
              positioned={false}
            >
              <OrivelaNote className="-rotate-[0.8deg]" />
            </Clickable>
            <Clickable
              label="Peeranimo"
              href="https://peeranimo.app/"
              external
              positioned={false}
            >
              <PeeranimoUnit className="rotate-[1.5deg]" />
            </Clickable>
          </div>

          <div className="mx-auto mt-10 w-full max-w-[285px]">
            <ServiceCard className="-rotate-[1deg]" variant="tablet" />
          </div>
        </section>
      )}

      {layout === "mobile" && (
        <section className="overflow-visible bg-[#F5F0E8] px-6 pt-12 pb-[128px]">
          <HeadlineBlock variant="mobile" />

          <img
            src="/me-steffen.png"
            alt="Steffen Giebler, product developer and indie founder, Berlin"
            className="mx-auto mt-8 h-[280px] w-auto object-contain drop-shadow-[3px_5px_9px_rgba(26,26,26,0.22)]"
          />

          <div className="mx-auto mt-10 flex max-w-[330px] flex-col items-center gap-8 overflow-visible px-5 pt-5">
            <Clickable
              label="Kolibi"
              href="https://apps.apple.com/us/app/kolibi/id6790129149"
              external
              positioned={false}
            >
              <KolibiReceipt className="-rotate-[1.5deg]" />
            </Clickable>

            <Clickable
              label="Carpincho"
              href="https://carpincho.app/"
              external
              positioned={false}
            >
              <CarpinchoCard className="rotate-[1.2deg]" />
            </Clickable>

            <Clickable
              label="Orivela"
              href="https://www.orivela.app/"
              external
              positioned={false}
            >
              <OrivelaNote className="-rotate-[0.8deg]" />
            </Clickable>

            <Clickable
              label="Peeranimo"
              href="https://peeranimo.app/"
              external
              positioned={false}
            >
              <PeeranimoUnit className="rotate-[1.5deg]" />
            </Clickable>

            <div className="w-full max-w-[285px]">
              <ServiceCard className="-rotate-[1deg]" variant="mobile" />
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
