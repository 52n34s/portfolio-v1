"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

type ScrollNavItem = {
  kind: "scroll";
  id: string;
  label: string;
  href?: string;
};

type LinkNavItem = {
  kind: "link";
  href: string;
  label: string;
};

type NavItem = ScrollNavItem | LinkNavItem;

const ROUTE_ACTIVE_LABEL: Record<string, string> = {
  "/builds/orivela": "./orivela",
  "/builds/kolibi": "./kolibi",
  "/builds/peeranimo": "~/peeranimo",
  "/builds": "./builds",
};

const navItems: NavItem[] = [
  { kind: "scroll", id: "room-01", label: ">_ boot" },
  { kind: "scroll", id: "room-02", label: "~/home" },
  { kind: "scroll", id: "room-03", label: "./builds", href: "/builds" },
  {
    kind: "scroll",
    id: "room-03b",
    label: "./orivela",
    href: "/builds/orivela",
  },
  {
    kind: "link",
    label: "./kolibi",
    href: "/builds/kolibi",
  },
  {
    kind: "scroll",
    id: "room-04",
    label: "~/peeranimo",
    href: "/builds/peeranimo",
  },
  { kind: "scroll", id: "room-05", label: "./work-with-me" },
  { kind: "scroll", id: "room-06", label: ">_ contact" },
];

const ROOM_IDS = [
  "room-01",
  "room-02",
  "room-03",
  "room-03b",
  "room-03c",
  "room-04",
  "room-05",
  "room-06",
];

function normalizePathname(pathname: string): string {
  if (!pathname || pathname === "/") return "/";
  return pathname.replace(/\/+$/, "");
}

function shouldShowNav(pathname: string): boolean {
  const path = normalizePathname(pathname);
  return path === "/" || path in ROUTE_ACTIVE_LABEL;
}

function isNavItemActive(
  item: NavItem,
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
    const t = window.setTimeout(() => setOverlayMounted(false), 200);
    return () => window.clearTimeout(t);
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  const activeRoom = path === "/" ? scrollActiveRoom : "";

  const handleSelect = (item: NavItem) => {
    if (item.kind === "link") {
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
        <nav
          className={`nav-hamburger-overlay ${menuOpen ? "is-open" : "is-closing"}`}
          aria-label="Room navigation"
        >
          <ul className="nav-hamburger-list">
            {navItems.map((item, index) => {
              const active = isNavItemActive(item, activeLabel, activeRoom);
              const key =
                item.kind === "link" ? item.href : `${item.id}-${item.label}`;

              return (
                <li
                  key={key}
                  className="nav-hamburger-pill-wrap"
                  style={{ ["--pill-delay" as string]: `${index * 40}ms` }}
                >
                  <button
                    type="button"
                    onClick={() => handleSelect(item)}
                    className={`nav-hamburger-pill${active ? " is-active" : ""}`}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </>
  );
}
