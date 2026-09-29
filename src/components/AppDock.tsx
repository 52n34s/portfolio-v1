"use client";

import { useRef, useState, useSyncExternalStore, type MouseEvent } from "react";
import Image from "next/image";
import { APPS } from "@/data/apps";

/** Icon under the cursor grows to this; neighbours ease down to 1. */
const MAX_SCALE = 1.6;
/** Horizontal distance (px) from an icon's centre at which magnification
 *  reaches zero — roughly two icon slots on desktop (56px icon + 28px gap). */
const RANGE = 168;

const MAGNIFY_QUERY =
  "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)";

function subscribe(onChange: () => void) {
  const mq = window.matchMedia(MAGNIFY_QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function canMagnifySnapshot() {
  return window.matchMedia(MAGNIFY_QUERY).matches;
}

/** Smooth falloff: 1 at the centre, 0 at RANGE and beyond. */
function scaleFor(distance: number) {
  if (distance >= RANGE) return 1;
  const falloff = (Math.cos((Math.PI * distance) / RANGE) + 1) / 2;
  return 1 + (MAX_SCALE - 1) * falloff;
}

function scrollToCard(event: MouseEvent<HTMLAnchorElement>, id: string) {
  const target = document.getElementById(id);
  if (!target) return;
  event.preventDefault();
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  // Offset for the fixed menu button comes from the card's scroll-margin-top.
  target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
}

/** macOS-dock style row of app icons that jumps to each app card.
 *  Magnifies only with a fine hover pointer and motion allowed; touch gets
 *  static icons with a short press feedback. */
export default function AppDock() {
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const canMagnify = useSyncExternalStore(subscribe, canMagnifySnapshot, () => false);
  const [scales, setScales] = useState<number[]>(() => APPS.map(() => 1));

  function handleMouseMove(event: MouseEvent<HTMLUListElement>) {
    if (!canMagnify) return;
    const { clientX, clientY } = event;
    setScales(
      itemRefs.current.map((item) => {
        if (!item) return 1;
        // <li> is never transformed, so its rect is the resting position.
        const rect = item.getBoundingClientRect();
        // Only the row under the cursor reacts (matters once the row wraps).
        const lift = rect.height * (MAX_SCALE - 1);
        if (clientY < rect.top - lift || clientY > rect.bottom) return 1;
        return scaleFor(Math.abs(clientX - (rect.left + rect.width / 2)));
      }),
    );
  }

  function handleMouseLeave() {
    setScales(APPS.map(() => 1));
  }

  return (
    <nav aria-label="Apps" className="pt-10 md:pt-14">
      {/* md:pt-10 reserves the headroom the magnified icons grow into, so
          the row never changes height. */}
      <ul
        className="flex flex-wrap items-end justify-center gap-4 md:gap-x-7 md:pt-10"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {APPS.map((app, index) => {
          const scale = canMagnify ? scales[index] : 1;
          return (
            <li
              key={app.slug}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className="group relative h-11 w-11 md:h-14 md:w-14"
            >
              <a
                href={`#${app.slug}`}
                aria-label={app.name}
                onClick={(event) => scrollToCard(event, app.slug)}
                className="block h-full w-full origin-bottom rounded-[22%] transition-[transform,scale] duration-150 ease-out motion-safe:active:scale-90"
                style={canMagnify ? { transform: `scale(${scale})` } : undefined}
              >
                <Image
                  src={app.logo}
                  alt=""
                  width={112}
                  height={112}
                  className="h-full w-full rounded-[22%] border border-black/5 object-cover shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
                />
              </a>

              {/* Tooltip above the (possibly magnified) icon — hover devices
                  and keyboard focus only; the link's aria-label carries the
                  name for screen readers. */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#1A1A1A] px-2 py-1 text-[11px] leading-none text-[#F5F0E8] opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-has-[:focus-visible]:opacity-100"
                style={{
                  bottom: `calc(${100 + (scale - 1) * 100}% + 8px)`,
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                }}
              >
                {app.name}
              </span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
