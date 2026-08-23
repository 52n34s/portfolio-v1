"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import AppCardStack, {
  type StackPlacement,
} from "@/components/AppCardStack";

const DESIGN_W = 1440;
const DESIGN_H = 900;

const PAPER_SHADOW = "shadow-[2px_5px_14px_rgba(26,26,26,0.13)]";

const GRID_X = 680;
const GRID_Y = 268;

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
    variant === "mobile" ? "px-5 py-2.5 text-[14px]" : "px-4 py-2 text-[13px]";

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

function placementFor(
  layout: "desktop" | "tablet" | "mobile",
): StackPlacement {
  if (layout === "desktop") return "beside";
  if (layout === "tablet") return "below";
  return "row";
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

  const placement = placementFor(layout);

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

              <div
                className="absolute z-30 overflow-visible"
                style={{ left: GRID_X, top: GRID_Y }}
              >
                <AppCardStack variant="home" placement="beside" />
              </div>
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

          <div className="mx-auto mt-12 flex w-full max-w-[720px] justify-center overflow-visible px-5 pt-5">
            <AppCardStack variant="home" placement={placement} />
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

          <div className="mx-auto mt-10 w-full overflow-visible pt-5">
            <AppCardStack variant="home" placement={placement} />
          </div>

          <div className="mx-auto mt-10 w-full max-w-[285px]">
            <ServiceCard className="-rotate-[1deg]" variant="mobile" />
          </div>
        </section>
      )}
    </div>
  );
}
