"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import {
  APPS,
  APP_BY_ID,
  ERDI_MAGENTA,
  type AppDefinition,
  type AppId,
} from "@/data/apps";

export type StackPlacement = "beside" | "below" | "row";
export type CardVariant = "home" | "apps";

const CELL_W = 330;
const CELL_H = 255;
const STACK_W = 278;
const STACK_H = 176;
const STACK_OX = 22;
const STACK_OY = 72;
const STACK_GAP = 36;
const SLOT_PAD = 18;
const CARD_PAD = 24;
const CARD_PAD_BOTTOM = 48;
const HAND_COPY = "pr-[90px] text-[17px] leading-snug";
const PAPER_SHADOW = "shadow-[2px_5px_14px_rgba(26,26,26,0.13)]";
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";
const DURATION_MS = 400;
const STACK_ROTATIONS = [-1.8, 1.6, -0.9, 1.9, -1.3, 0.7];
const FEATURED_ROTATE = -0.6;

type Slot = {
  left: number;
  top: number;
  width: number;
  rotate: number;
  featured: boolean;
};

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function stackRotate(index: number) {
  return STACK_ROTATIONS[index % STACK_ROTATIONS.length];
}

function stackExtent(count: number) {
  return {
    width: STACK_W + Math.max(0, count - 1) * STACK_OX,
    height: STACK_H + Math.max(0, count - 1) * STACK_OY,
  };
}

function computeSlots(
  placement: "beside" | "below",
  stackCount: number,
  featuredMinH: number,
) {
  const featured: Slot = {
    left: SLOT_PAD,
    top: SLOT_PAD,
    width: CELL_W,
    rotate: FEATURED_ROTATE,
    featured: true,
  };
  const stack = stackExtent(stackCount);

  if (placement === "beside") {
    const originX = SLOT_PAD + CELL_W + STACK_GAP;
    const originY = SLOT_PAD;
    const slots: Slot[] = [
      featured,
      ...Array.from({ length: stackCount }, (_, i) => ({
        left: originX + i * STACK_OX,
        top: originY + i * STACK_OY,
        width: STACK_W,
        rotate: stackRotate(i),
        featured: false,
      })),
    ];
    return {
      slots,
      width: originX + stack.width + SLOT_PAD,
      height: SLOT_PAD + Math.max(featuredMinH, stack.height) + SLOT_PAD,
    };
  }

  const width = SLOT_PAD * 2 + Math.max(CELL_W, stack.width);
  featured.left = (width - CELL_W) / 2;
  const originX = (width - stack.width) / 2;
  const originY = SLOT_PAD + featuredMinH + STACK_GAP;
  const slots: Slot[] = [
    featured,
    ...Array.from({ length: stackCount }, (_, i) => ({
      left: originX + i * STACK_OX,
      top: originY + i * STACK_OY,
      width: STACK_W,
      rotate: stackRotate(i),
      featured: false,
    })),
  ];
  return {
    slots,
    width,
    height: originY + stack.height + SLOT_PAD,
  };
}

export function useStackPlacement(): StackPlacement {
  const [placement, setPlacement] = useState<StackPlacement>("beside");

  useEffect(() => {
    const mqDesktop = window.matchMedia("(min-width: 1024px)");
    const mqTablet = window.matchMedia("(min-width: 768px)");
    const update = () => {
      if (mqDesktop.matches) setPlacement("beside");
      else if (mqTablet.matches) setPlacement("below");
      else setPlacement("row");
    };
    update();
    mqDesktop.addEventListener("change", update);
    mqTablet.addEventListener("change", update);
    return () => {
      mqDesktop.removeEventListener("change", update);
      mqTablet.removeEventListener("change", update);
    };
  }, []);

  return placement;
}

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
            : "M0 0 L8.5 10 L17 0 L25.5 10 L34 0 L42.5 10 L51 0 L59.5 10 L68 0 L76.5 10 L85 0 L93.5 10 L102 0 L110.5 0 L119 0 L127.5 10 L136 0 L144.5 10 L153 0 L161.5 10 L170 0 Z"
        }
      />
    </svg>
  );
}

function OpenPill() {
  return (
    <span className="relative z-10 mt-auto self-start rounded-full bg-[#1A1A1A] px-4 py-1.5 text-[12px] leading-none text-[#F5F0E8]">
      Open
    </span>
  );
}

function AppIdentity({
  app,
  compact,
}: {
  app: AppDefinition;
  compact: boolean;
}) {
  return (
    <div className="flex items-center gap-2.5">
      <img
        src={app.icon}
        alt={`${app.name} app icon`}
        className="app-store-icon"
      />
      <div className="min-w-0 leading-tight">
        <h3 className="m-0 truncate text-[14px] font-medium text-[#1A1A1A]">
          {app.name}
        </h3>
        {compact ? (
          <p className="mt-0.5 truncate font-inter text-[11px] leading-tight text-[#1A1A1A]/50">
            {app.subline ?? app.platform}
          </p>
        ) : (
          <>
            <p className="text-[11px] text-[#1A1A1A]/55">{app.platform}</p>
            {app.subline && app.subline !== app.platform && (
              <p className="text-[11px] text-[#1A1A1A]/55">{app.subline}</p>
            )}
          </>
        )}
      </div>
    </div>
  );
}

function Expand({
  compact,
  children,
}: {
  compact: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className="relative z-10 overflow-hidden"
      style={{
        maxHeight: compact ? 0 : 220,
        opacity: compact ? 0 : 1,
        marginBottom: compact ? 0 : undefined,
        transition: `max-height ${DURATION_MS}ms ${EASE}, opacity ${DURATION_MS}ms ${EASE}`,
      }}
      aria-hidden={compact}
    >
      {children}
    </div>
  );
}

function AppCtas({ app, variant }: { app: AppDefinition; variant: CardVariant }) {
  if (variant === "home") return <OpenPill />;

  return (
    <div className="relative z-10">
      <div className="flex flex-wrap gap-2">
        {app.appsCtas.map((cta) => (
          <a
            key={cta.href}
            href={cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cta.className}
          >
            {cta.label}
          </a>
        ))}
      </div>
      {app.appsNote && (
        <p className="mt-2 font-inter text-[11px] text-[#1A1A1A]/50">
          {app.appsNote}
        </p>
      )}
    </div>
  );
}

function AppObjectShell({
  app,
  compact,
  variant,
  className = "",
  style,
  minHeight,
  children,
  footerExtra,
}: {
  app: AppDefinition;
  compact: boolean;
  variant: CardVariant;
  className?: string;
  style?: CSSProperties;
  minHeight?: number;
  children: ReactNode;
  footerExtra?: ReactNode;
}) {
  return (
    <article
      className={`relative flex w-full flex-col overflow-visible ${className}`}
      style={{
        width: "100%",
        maxWidth: "100%",
        minHeight: compact ? STACK_H : (minHeight ?? CELL_H),
        height: compact ? STACK_H : "auto",
        padding: compact
          ? "16px 16px 18px"
          : `${CARD_PAD}px ${CARD_PAD}px ${CARD_PAD_BOTTOM}px`,
        gap: compact ? 10 : 16,
        ...style,
      }}
    >
      <div
        className="absolute z-40"
        style={{ top: compact ? -10 : -14, right: compact ? -10 : -14 }}
      >
        <StatusStamp lines={app.stamp} />
      </div>
      <div
        className="relative z-10"
        style={{ order: compact ? 0 : 2 }}
      >
        <AppIdentity app={app} compact={compact} />
        {footerExtra}
      </div>
      <div style={{ order: 1 }}>{children}</div>
      <div
        className="relative z-10 overflow-hidden"
        style={{
          order: 3,
          maxHeight: compact ? 0 : 120,
          opacity: compact ? 0 : 1,
          pointerEvents: compact ? "none" : "auto",
          transition: `max-height ${DURATION_MS}ms ${EASE}, opacity ${DURATION_MS}ms ${EASE}`,
        }}
      >
        <AppCtas app={app} variant={variant} />
      </div>
    </article>
  );
}

function PeeranimoBadgeChrome({ compact }: { compact: boolean }) {
  const barH = compact ? 20 : 28;
  const hole = compact ? 9 : 12;

  return (
    <>
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-[6] flex items-center justify-center"
        style={{ height: barH, background: "#7B5CF0" }}
        aria-hidden="true"
      >
        <span
          className="tracking-[0.35em] text-white"
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: compact ? 8 : 10,
          }}
        >
          HELLO
        </span>
      </div>
      <div
        className="pointer-events-none absolute bottom-[8px] left-1/2 z-[6] -translate-x-1/2 rounded-full border-[1.5px] border-[#1A1A1A]/25 bg-[#EDEAE3]"
        style={{ width: hole, height: hole }}
        aria-hidden="true"
      />
      <svg
        className="pointer-events-none absolute bottom-0 left-0 z-[6] w-full"
        height={compact ? 6 : 8}
        viewBox="0 0 280 8"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {Array.from({ length: 22 }, (_, i) => (
          <rect
            key={i}
            x={5 + i * 12.4}
            y="2.4"
            width="5.5"
            height="1.5"
            rx="0.75"
            fill="#1A1A1A"
            opacity="0.16"
          />
        ))}
      </svg>
    </>
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

function ErdiCurve({ compact }: { compact: boolean }) {
  return (
    <svg
      viewBox="0 0 280 72"
      className={`relative z-10 w-full ${compact ? "h-[44px]" : "h-[72px]"}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M6 60 C 42 58, 54 42, 86 38 C 118 34, 128 56, 158 24 C 178 6, 198 20, 228 14 C 248 10, 262 8, 274 10"
        fill="none"
        stroke={ERDI_MAGENTA}
        strokeWidth="1.15"
        strokeLinecap="round"
      />
      <circle cx="158" cy="24" r="3.25" fill={ERDI_MAGENTA} />
    </svg>
  );
}

function KolibiFace({
  app,
  compact,
  variant,
}: {
  app: AppDefinition;
  compact: boolean;
  variant: CardVariant;
}) {
  const mono = { fontFamily: "var(--font-jetbrains-mono), monospace" };

  return (
    <AppObjectShell
      app={app}
      compact={compact}
      variant={variant}
      className={`bg-white ${PAPER_SHADOW}`}
    >
      <Tape className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-2 rotate-[6deg]" />
      <ReceiptZigzag position="top" />
      <div className="relative z-10">
        <Expand compact={compact}>
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
        </Expand>
      </div>
      <ReceiptZigzag position="bottom" />
    </AppObjectShell>
  );
}

function CarpinchoFace({
  app,
  compact,
  variant,
}: {
  app: AppDefinition;
  compact: boolean;
  variant: CardVariant;
}) {
  return (
    <AppObjectShell
      app={app}
      compact={compact}
      variant={variant}
      className={`bg-[#FFFDF5] ${PAPER_SHADOW}`}
      minHeight={Math.round(CELL_H * 0.85)}
      footerExtra={
        !compact ? <CarpinchoVariantFlags className="mt-2" /> : null
      }
    >
      <Tape className="absolute -left-2 -top-2 z-20 -rotate-[22deg]" />
      <Expand compact={compact}>
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
      </Expand>
    </AppObjectShell>
  );
}

function OrivelaFace({
  app,
  compact,
  variant,
}: {
  app: AppDefinition;
  compact: boolean;
  variant: CardVariant;
}) {
  return (
    <AppObjectShell
      app={app}
      compact={compact}
      variant={variant}
      className={`bg-[#FCF3C8] ${PAPER_SHADOW}`}
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 76%, 76% 100%, 0 100%)",
      }}
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
      <Expand compact={compact}>
        <p
          className={`relative z-10 pl-2 text-[#1A2E5A] ${HAND_COPY}`}
          style={{ fontFamily: "var(--font-hand), cursive" }}
        >
          Every document you&apos;ll need someday.
          <br />
          Found in seconds.
        </p>
      </Expand>
      <TornEdge fill="#F5F0E8" />
    </AppObjectShell>
  );
}

function PeeranimoFace({
  app,
  compact,
  variant,
}: {
  app: AppDefinition;
  compact: boolean;
  variant: CardVariant;
}) {
  return (
    <AppObjectShell
      app={app}
      compact={compact}
      variant={variant}
      className={`bg-white ${PAPER_SHADOW}`}
      style={{
        paddingTop: compact ? 36 : 56,
        paddingBottom: compact ? 26 : CARD_PAD_BOTTOM,
      }}
    >
      <PeeranimoBadgeChrome compact={compact} />
      <Expand compact={compact}>
        <p
          className={`mt-1 text-center text-[#1A1A1A] ${HAND_COPY}`}
          style={{ fontFamily: "var(--font-hand), cursive" }}
        >
          People who get it. Without searching for years.
        </p>
      </Expand>
    </AppObjectShell>
  );
}

function ErdiKnowsFace({
  app,
  compact,
  variant,
}: {
  app: AppDefinition;
  compact: boolean;
  variant: CardVariant;
}) {
  return (
    <AppObjectShell
      app={app}
      compact={compact}
      variant={variant}
      className={PAPER_SHADOW}
      style={{ backgroundColor: "#F4EBD4" }}
    >
      <Tape className="absolute -right-3 top-3 z-20 rotate-[18deg]" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              to right,
              rgba(252, 46, 112, 0.11) 0,
              rgba(252, 46, 112, 0.11) 1px,
              transparent 1px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              rgba(252, 46, 112, 0.11) 0,
              rgba(252, 46, 112, 0.11) 1px,
              transparent 1px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to right,
              rgba(252, 46, 112, 0.28) 0,
              rgba(252, 46, 112, 0.28) 1.5px,
              transparent 1.5px,
              transparent 40px
            ),
            repeating-linear-gradient(
              to bottom,
              rgba(252, 46, 112, 0.28) 0,
              rgba(252, 46, 112, 0.28) 1.5px,
              transparent 1.5px,
              transparent 40px
            )
          `,
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-[3px]"
        style={{ background: ERDI_MAGENTA, opacity: 0.55 }}
        aria-hidden="true"
      />
      <div className="relative z-10">
        <ErdiCurve compact={compact} />
        <Expand compact={compact}>
          <p
            className="mt-1 pr-[90px] text-[17px] leading-snug"
            style={{
              fontFamily: "var(--font-hand), cursive",
              color: ERDI_MAGENTA,
            }}
          >
            Numbers moved.
            <br />
            Erdi was watching.
          </p>
        </Expand>
      </div>
    </AppObjectShell>
  );
}

function AppFace({
  app,
  compact,
  variant,
}: {
  app: AppDefinition;
  compact: boolean;
  variant: CardVariant;
}) {
  switch (app.id) {
    case "kolibi":
      return <KolibiFace app={app} compact={compact} variant={variant} />;
    case "carpincho":
      return <CarpinchoFace app={app} compact={compact} variant={variant} />;
    case "orivela":
      return <OrivelaFace app={app} compact={compact} variant={variant} />;
    case "peeranimo":
      return <PeeranimoFace app={app} compact={compact} variant={variant} />;
    case "erdiknows":
      return <ErdiKnowsFace app={app} compact={compact} variant={variant} />;
  }
}

function SlotCard({
  app,
  featured,
  variant,
  tilt,
  onPromote,
}: {
  app: AppDefinition;
  featured: boolean;
  variant: CardVariant;
  tilt: number;
  onPromote: (id: AppId) => void;
}) {
  const face = (
    <div
      className="origin-top-left transition-transform duration-200 group-hover:[--lift:-4px]"
      style={{
        transform: `rotate(${tilt}deg) translateY(var(--lift, 0px))`,
      }}
    >
      <AppFace app={app} compact={!featured} variant={variant} />
    </div>
  );
  const flipProps = { "data-app-card": app.id };

  if (!featured) {
    return (
      <button
        type="button"
        {...flipProps}
        onClick={() => onPromote(app.id)}
        aria-label={`Show ${app.name}`}
        className="group block w-full cursor-pointer text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1A1A1A]"
      >
        {face}
      </button>
    );
  }

  if (variant === "home") {
    return (
      <a
        href={app.href}
        {...flipProps}
        target="_blank"
        rel="noopener noreferrer"
        aria-current="true"
        className="group block w-full"
      >
        {face}
      </a>
    );
  }

  return (
    <div {...flipProps} aria-current="true" className="group w-full">
      {face}
    </div>
  );
}

function swapFeatured(order: AppId[], id: AppId): AppId[] {
  const index = order.indexOf(id);
  if (index <= 0) return order;
  const next = [...order];
  [next[0], next[index]] = [next[index], next[0]];
  return next;
}

function playFlip(
  root: HTMLElement,
  first: Map<string, DOMRect>,
) {
  if (prefersReducedMotion()) return;

  root.querySelectorAll<HTMLElement>("[data-app-card]").forEach((el) => {
    const id = el.dataset.appCard;
    if (!id) return;
    const prev = first.get(id);
    if (!prev) return;
    const last = el.getBoundingClientRect();
    const dx = prev.left - last.left;
    const dy = prev.top - last.top;
    const sx = prev.width / Math.max(last.width, 1);
    const sy = prev.height / Math.max(last.height, 1);
    if (Math.abs(dx) < 1 && Math.abs(dy) < 1 && Math.abs(sx - 1) < 0.02) {
      return;
    }
    el.getAnimations().forEach((anim) => anim.cancel());
    el.style.zIndex = "60";
    const animation = el.animate(
      [
        {
          transform: `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})`,
          transformOrigin: "top left",
        },
        { transform: "none", transformOrigin: "top left" },
      ],
      { duration: DURATION_MS, easing: EASE },
    );
    animation.finished
      .catch(() => undefined)
      .finally(() => {
        el.style.zIndex = "";
      });
  });
}

export default function AppCardStack({
  variant,
  placement,
  className = "",
}: {
  variant: CardVariant;
  placement: StackPlacement;
  className?: string;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const firstRectsRef = useRef<Map<string, DOMRect> | null>(null);
  const busyRef = useRef(false);
  const placementRef = useRef(placement);
  const [order, setOrder] = useState<AppId[]>(() => APPS.map((app) => app.id));
  const [elevated, setElevated] = useState<Set<AppId>>(() => new Set());
  const [animateSlots, setAnimateSlots] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setAnimateSlots(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    setAnimateSlots(false);
    const frame = window.requestAnimationFrame(() => setAnimateSlots(true));
    return () => window.cancelAnimationFrame(frame);
  }, [placement]);

  const featuredMinH = variant === "apps" ? 380 : CELL_H;
  const stackCount = Math.max(0, order.length - 1);
  const layout =
    placement === "row"
      ? null
      : computeSlots(placement, stackCount, featuredMinH);

  const promote = (id: AppId) => {
    if (busyRef.current || id === order[0]) return;
    if (placement === "row") {
      const root = rootRef.current;
      if (root) {
        const map = new Map<string, DOMRect>();
        root.querySelectorAll<HTMLElement>("[data-app-card]").forEach((el) => {
          const cardId = el.dataset.appCard;
          if (cardId) map.set(cardId, el.getBoundingClientRect());
        });
        firstRectsRef.current = map;
      }
    } else {
      setElevated(new Set([id, order[0]]));
    }
    busyRef.current = true;
    setOrder((prev) => swapFeatured(prev, id));
  };

  useLayoutEffect(() => {
    if (placementRef.current !== placement) {
      placementRef.current = placement;
      firstRectsRef.current = null;
      busyRef.current = false;
      setElevated(new Set());
      return;
    }
    const first = firstRectsRef.current;
    firstRectsRef.current = null;
    const root = rootRef.current;
    if (placement === "row" && first && root) {
      playFlip(root, first);
    }
    const timer = window.setTimeout(() => {
      busyRef.current = false;
      setElevated(new Set());
    }, DURATION_MS);
    return () => window.clearTimeout(timer);
  }, [order, placement]);

  const [reduceMotion, setReduceMotion] = useState(false);
  useEffect(() => {
    setReduceMotion(prefersReducedMotion());
  }, []);
  const slotTransition =
    animateSlots && !reduceMotion
      ? `left ${DURATION_MS}ms ${EASE}, top ${DURATION_MS}ms ${EASE}, width ${DURATION_MS}ms ${EASE}`
      : undefined;

  if (placement === "row") {
    const featuredApp = APP_BY_ID[order[0]];
    const stackIds = order.slice(1);
    return (
      <div
        ref={rootRef}
        className={`flex flex-col items-center gap-8 ${className}`}
      >
        <div
          className="relative w-full max-w-[330px] shrink-0"
          style={{ minHeight: featuredMinH }}
        >
          <SlotCard
            app={featuredApp}
            featured
            variant={variant}
            tilt={FEATURED_ROTATE}
            onPromote={promote}
          />
        </div>
        <div className="-mx-2 flex w-full gap-4 overflow-x-auto px-2 py-5">
          {stackIds.map((id, index) => (
            <div
              key={id}
              className="shrink-0"
              style={{ width: STACK_W }}
            >
              <SlotCard
                app={APP_BY_ID[id]}
                featured={false}
                variant={variant}
                tilt={stackRotate(index)}
                onPromote={promote}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!layout) return null;

  return (
    <div
      ref={rootRef}
      className={`relative overflow-visible ${className}`}
      style={{ width: layout.width, height: layout.height }}
    >
      {APPS.map((app) => {
        const slotIndex = order.indexOf(app.id);
        const slot = layout.slots[slotIndex];
        if (!slot) return null;
        const flying = elevated.has(app.id);
        return (
          <div
            key={app.id}
            className="absolute"
            style={{
              left: slot.left,
              top: slot.top,
              width: slot.width,
              zIndex: flying ? 40 : slot.featured ? 12 : slotIndex + 1,
              transition: slotTransition,
            }}
          >
            <SlotCard
              app={app}
              featured={slot.featured}
              variant={variant}
              tilt={slot.rotate}
              onPromote={promote}
            />
          </div>
        );
      })}
    </div>
  );
}
