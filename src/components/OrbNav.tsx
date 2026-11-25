"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
} from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type OrbItem = {
  /** Id of the home section this item scrolls to. */
  section: string;
  label: string;
  /** Offset from the orb centre on desktop, in px; mobile scales it by 0.85. */
  x: number;
  y: number;
  icon: React.ReactNode;
};

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

// Order: left → top → right.
const ITEMS: OrbItem[] = [
  {
    section: "apps",
    label: "Apps",
    x: -118,
    y: -72,
    icon: (
      <Icon>
        <rect x="4" y="4" width="6.5" height="6.5" rx="1.5" />
        <rect x="13.5" y="4" width="6.5" height="6.5" rx="1.5" />
        <rect x="4" y="13.5" width="6.5" height="6.5" rx="1.5" />
        <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.5" />
      </Icon>
    ),
  },
  {
    section: "room-05",
    label: "Work with me",
    x: 0,
    y: -128,
    icon: (
      <Icon>
        <rect x="3" y="7.5" width="18" height="12.5" rx="2" />
        <path d="M8.5 7.5V5.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5v2" />
        <path d="M3 13h18" />
      </Icon>
    ),
  },
  {
    section: "room-06",
    label: "Contact",
    x: 118,
    y: -72,
    icon: (
      <Icon>
        <rect x="3" y="5.5" width="18" height="13" rx="2" />
        <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
      </Icon>
    ),
  },
];

const SPIN_TURNS = 10;
const SPIN_MS = 10_000;
const SPIN_EASING = "cubic-bezier(0.05, 0.85, 0.15, 1)";

function reducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Current `rotate` of an element in degrees, mid-animation included. */
function currentAngle(el: HTMLElement) {
  const value = parseFloat(getComputedStyle(el).rotate);
  return Number.isFinite(value) ? value : 0;
}

/** Stop any spin and keep the circle at the angle it reached. */
function freezeSpin(el: HTMLElement) {
  const angle = currentAngle(el) % 360;
  el.getAnimations().forEach((animation) => animation.cancel());
  el.style.rotate = `${angle}deg`;
}

/** Very fast start, then a long even run-out: SPIN_TURNS turns in SPIN_MS.
 *  A new click restarts from the current angle for another full SPIN_MS. */
function spin(el: HTMLElement) {
  if (reducedMotion()) return;
  const from = currentAngle(el) % 360;
  el.getAnimations().forEach((animation) => animation.cancel());
  el.style.rotate = `${from}deg`;
  const animation = el.animate(
    [{ rotate: `${from}deg` }, { rotate: `${from + SPIN_TURNS * 360}deg` }],
    { duration: SPIN_MS, easing: SPIN_EASING, fill: "forwards" },
  );
  animation.onfinish = () => {
    // from + 3600 ≡ from (mod 360): same visual angle, no jump.
    el.style.rotate = `${from}deg`;
    animation.cancel();
  };
}

/** Site navigation: a gradient orb at the bottom centre that fans three
 *  links out in an arc. On the home page the links scroll to their section
 *  and the fan stays open; elsewhere they go to /#section. */
export default function OrbNav() {
  const pathname = usePathname() ?? "/";
  const onHome = pathname === "/";
  // The page the fan was opened on; navigating anywhere else closes it.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const setOpen = useCallback(
    (value: boolean) => setOpenOn(value ? pathname : null),
    [pathname],
  );
  const [spySection, setSpySection] = useState<string | null>(null);
  const activeSection = onHome ? spySection : null;
  const navRef = useRef<HTMLElement>(null);
  const orbRef = useRef<HTMLButtonElement>(null);
  const firstRef = useRef<HTMLAnchorElement>(null);
  const spinRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const close = useCallback(
    (refocus: boolean) => {
      setOpen(false);
      if (refocus) orbRef.current?.focus();
    },
    [setOpen],
  );

  useEffect(() => {
    if (!open) {
      // Closing mid-spin: stop, and the circle flies back as usual.
      spinRefs.current.forEach((el) => el && freezeSpin(el));
      return;
    }
    firstRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close(true);
    }
    function onPointerDown(event: PointerEvent) {
      if (!navRef.current?.contains(event.target as Node)) close(false);
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open, close]);

  // Home only: the section crossing the middle of the viewport is active.
  useEffect(() => {
    if (!onHome) return;
    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        });
        setSpySection(
          ITEMS.find((item) => visible.has(item.section))?.section ?? null,
        );
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    ITEMS.forEach((item) => {
      const el = document.getElementById(item.section);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [onHome]);

  function onItemClick(
    event: MouseEvent<HTMLAnchorElement>,
    item: OrbItem,
    index: number,
  ) {
    // Elsewhere the link navigates to /#section; Next scrolls on arrival.
    if (!onHome) return;
    const target = document.getElementById(item.section);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({
      behavior: reducedMotion() ? "auto" : "smooth",
      block: "start",
    });
    window.history.replaceState(window.history.state, "", `#${item.section}`);
    const el = spinRefs.current[index];
    if (el) spin(el);
  }

  return (
    <nav
      ref={navRef}
      aria-label="Main"
      className="orb-nav"
      data-open={open || undefined}
    >
      <ul className="orb-items" role="list" inert={!open}>
        {ITEMS.map((item, index) => {
          const active = activeSection === item.section;
          return (
            <li
              key={item.section}
              className="orb-item"
              style={
                {
                  "--orb-x": `${item.x}px`,
                  "--orb-y": `${item.y}px`,
                  "--orb-i": index,
                } as React.CSSProperties
              }
            >
              <Link
                ref={index === 0 ? firstRef : undefined}
                href={`/#${item.section}`}
                className="orb-link"
                aria-current={active ? "true" : undefined}
                onClick={(event) => onItemClick(event, item, index)}
              >
                <span className="orb-dot" data-active={active || undefined}>
                  {/* Own wrapper for the spin, apart from hover scale and fan position. */}
                  <span
                    ref={(el) => {
                      spinRefs.current[index] = el;
                    }}
                    className="orb-spin"
                  >
                    {item.icon}
                  </span>
                </span>
                <span className="orb-label">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>

      <button
        ref={orbRef}
        type="button"
        className="orb-button"
        aria-label="Menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <svg viewBox="0 0 24 24" className="orb-plus" aria-hidden="true">
          <path
            d="M12 5v14M5 12h14"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
      {/* After the button so `.orb-button:hover + .orb-hint` can reveal it. */}
      <span className="orb-hint" aria-hidden="true">
        MENU
      </span>
    </nav>
  );
}
