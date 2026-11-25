"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type OrbItem = {
  href: string;
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
    href: "/apps",
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
    href: "/work",
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
    href: "/contact",
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

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

/** Site navigation: a gradient orb at the bottom centre that fans three
 *  links out in an arc. Replaces NavBubbles. */
export default function OrbNav() {
  const pathname = usePathname() ?? "/";
  // The page the fan was opened on; navigating anywhere else closes it.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const setOpen = useCallback(
    (value: boolean) => setOpenOn(value ? pathname : null),
    [pathname],
  );
  const navRef = useRef<HTMLElement>(null);
  const orbRef = useRef<HTMLButtonElement>(null);
  const firstRef = useRef<HTMLAnchorElement>(null);

  const close = useCallback(
    (refocus: boolean) => {
      setOpen(false);
      if (refocus) orbRef.current?.focus();
    },
    [setOpen],
  );

  useEffect(() => {
    if (!open) return;
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

  return (
    <nav
      ref={navRef}
      aria-label="Main"
      className="orb-nav"
      data-open={open || undefined}
    >
      <ul className="orb-items" role="list" inert={!open}>
        {ITEMS.map((item, index) => {
          const active = isActive(pathname, item.href);
          return (
            <li
              key={item.href}
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
                href={item.href}
                className="orb-link"
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                <span className="orb-dot" data-active={active || undefined}>
                  {item.icon}
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
