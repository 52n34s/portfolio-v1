"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

type CardTone =
  | "cream"
  | "lavender"
  | "mint"
  | "butter"
  | "rose"
  | "sky"
  | "sage"
  | "peach";

type ScrollNavItem = {
  kind: "scroll";
  id: string;
  label: string;
  href?: string;
  tone: CardTone;
};

type LinkNavItem = {
  kind: "link";
  href: string;
  label: string;
  tone: CardTone;
};

type ExternalNavItem = {
  kind: "external";
  href: string;
  label: string;
  tone: CardTone;
};

type LabelNavItem = {
  kind: "label";
  label: string;
};

type InteractiveNavItem = ScrollNavItem | LinkNavItem | ExternalNavItem;
type NavItem = InteractiveNavItem | LabelNavItem;

const ROUTE_ACTIVE_LABEL: Record<string, string> = {
  "/builds": "./builds",
};

const navItems: NavItem[] = [
  { kind: "scroll", id: "room-01", label: "~/home", tone: "cream" },
  { kind: "link", label: "./builds", href: "/builds", tone: "lavender" },
  { kind: "scroll", id: "room-05", label: "./work-with-me", tone: "sage" },
  { kind: "scroll", id: "room-06", label: ">_ contact", tone: "peach" },
  { kind: "label", label: "MY APPS" },
  {
    kind: "external",
    label: "./orivela",
    href: "https://www.orivela.app/",
    tone: "mint",
  },
  {
    kind: "external",
    label: "./kolibi",
    href: "https://kolibi.app/",
    tone: "butter",
  },
  {
    kind: "external",
    label: "./carpincho",
    href: "https://carpincho.app/",
    tone: "rose",
  },
  {
    kind: "external",
    label: "~/peeranimo",
    href: "https://peeranimo.app/",
    tone: "sky",
  },
];

/** Fixed per-item tilt — max ±1.5deg */
const PILL_ROTATIONS = [
  "-1.2deg",
  "0.8deg",
  "-0.5deg",
  "1.4deg",
  "-1.5deg",
  "0.3deg",
  "1.1deg",
  "-0.9deg",
] as const;

const ROOM_IDS = ["room-01", "room-05", "room-06"];

function normalizePathname(pathname: string): string {
  if (!pathname || pathname === "/") return "/";
  return pathname.replace(/\/+$/, "");
}

function shouldShowNav(pathname: string): boolean {
  const path = normalizePathname(pathname);
  return path === "/" || path in ROUTE_ACTIVE_LABEL;
}

function isNavItemActive(
  item: InteractiveNavItem,
  activeLabel: string | null,
  activeRoom: string,
): boolean {
  if (activeLabel !== null) {
    return item.label === activeLabel;
  }

  return item.kind === "scroll" && activeRoom === item.id;
}

export default function NavBubbles() {
  const rawPathname = usePathname();
  const [pathname, setPathname] = useState("/");
  const [menuOpen, setMenuOpen] = useState(false);
  const [overlayMounted, setOverlayMounted] = useState(false);
  const [scrollActiveRoom, setScrollActiveRoom] = useState("room-01");
  const router = useRouter();

  useEffect(() => {
    setPathname(rawPathname);
  }, [rawPathname]);

  const path = normalizePathname(pathname);
  const activeLabel = path === "/" ? null : (ROUTE_ACTIVE_LABEL[path] ?? null);

  useEffect(() => {
    if (path !== "/") {
      setScrollActiveRoom("");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setScrollActiveRoom(entry.target.id);
          }
        });
      },
      { threshold: 0.5 },
    );

    ROOM_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [path]);

  useEffect(() => {
    if (menuOpen) {
      setOverlayMounted(true);
      return;
    }
    /* Match longest close animation (backdrop 150ms / overlay 200ms) */
    const t = window.setTimeout(() => setOverlayMounted(false), 200);
    return () => window.clearTimeout(t);
  }, [menuOpen]);

  const activeRoom = path === "/" ? scrollActiveRoom : "";

  const handleSelect = (item: InteractiveNavItem) => {
    if (item.kind === "external") {
      window.open(item.href, "_blank", "noopener,noreferrer");
    } else if (item.kind === "link") {
      router.push(item.href);
    } else if (path === "/") {
      document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
    } else if (item.kind === "scroll" && item.href) {
      router.push(item.href);
    } else {
      router.push(`/#${item.id}`);
    }

    setMenuOpen(false);
  };

  if (!shouldShowNav(pathname)) {
    return null;
  }

  return (
    <>
      <button
        type="button"
        className="nav-hamburger-trigger"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? (
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <path
              d="M3 3L15 15M15 3L3 15"
              stroke="#1A1A1A"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg width="18" height="14" viewBox="0 0 18 14" aria-hidden="true">
            <path
              d="M1 1H17M1 7H17M1 13H17"
              stroke="#1A1A1A"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>

      {overlayMounted && (
        <>
          <button
            type="button"
            className={`nav-hamburger-backdrop ${menuOpen ? "is-open" : "is-closing"}`}
            aria-label="Close navigation menu"
            onClick={() => setMenuOpen(false)}
          />
          <nav
            className={`nav-hamburger-overlay ${menuOpen ? "is-open" : "is-closing"}`}
            aria-label="Room navigation"
          >
            <ul className="nav-hamburger-list">
              {navItems.map((item, index) => {
                if (item.kind === "label") {
                  return (
                    <li
                      key={`label-${item.label}`}
                      className="nav-hamburger-pill-wrap nav-hamburger-pill-wrap--label"
                      style={{
                        ["--pill-delay" as string]: `${index * 40}ms`,
                        ["--pill-rotate" as string]: "0deg",
                      }}
                      aria-hidden="true"
                      role="presentation"
                    >
                      <div className="nav-hamburger-pill nav-hamburger-pill--label">
                        {item.label}
                      </div>
                    </li>
                  );
                }

                const active = isNavItemActive(item, activeLabel, activeRoom);
                const key =
                  item.kind === "scroll"
                    ? `${item.id}-${item.label}`
                    : `${item.kind}-${item.href}`;
                const pillClass = `nav-hamburger-pill nav-hamburger-pill--${item.tone}${
                  active ? " is-active" : ""
                }`;

                return (
                  <li
                    key={key}
                    className="nav-hamburger-pill-wrap"
                    style={{
                      ["--pill-delay" as string]: `${index * 40}ms`,
                      ["--pill-rotate" as string]:
                        PILL_ROTATIONS[index % PILL_ROTATIONS.length],
                    }}
                  >
                    {item.kind === "external" ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMenuOpen(false)}
                        className={pillClass}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleSelect(item)}
                        className={pillClass}
                        aria-current={active ? "page" : undefined}
                      >
                        {item.label}
                      </button>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </>
      )}
    </>
  );
}
