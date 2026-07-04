"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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
  pathname: string,
  activeRoom: string,
): boolean {
  const path = normalizePathname(pathname);

  if (path !== "/") {
    const label = ROUTE_ACTIVE_LABEL[path];
    return label !== undefined && item.label === label;
  }

  return item.kind === "scroll" && activeRoom === item.id;
}

const labelStyle = {
  fontFamily: "var(--font-jetbrains-mono), monospace",
  fontSize: "11px",
};

function NavRoomItems({
  pathname,
  activeRoom,
  onSelect,
}: {
  pathname: string;
  activeRoom: string;
  onSelect: (item: NavItem) => void;
}) {
  return (
    <>
      <div
        className="absolute top-4 bottom-4 left-4 w-px -translate-x-1/2"
        style={{ background: "#CCC" }}
      />

      {navItems.map((item) => {
        const active = isNavItemActive(item, pathname, activeRoom);
        const key = item.kind === "link" ? item.href : `${item.id}-${item.label}`;

        return (
          <button
            key={key}
            type="button"
            onClick={() => onSelect(item)}
            className="group flex w-full cursor-pointer items-center gap-3 border-none bg-transparent py-1 text-left"
            aria-current={active ? "page" : undefined}
          >
            <span
              className="relative z-10 h-8 w-8 shrink-0 rounded-full transition-transform group-hover:scale-110"
              style={{
                background: active ? "var(--orange)" : "transparent",
                border: active ? "none" : "1px solid #CCC",
              }}
              aria-hidden="true"
            />

            <span
              className="whitespace-nowrap"
              style={{
                ...labelStyle,
                color: active ? "var(--orange)" : "#888",
              }}
            >
              {active ? `${item.label} ← aktiv` : item.label}
            </span>
          </button>
        );
      })}
    </>
  );
}

export default function NavBubbles() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollActiveRoom, setScrollActiveRoom] = useState("room-01");
  const pathname = usePathname();
  const router = useRouter();

  const path = normalizePathname(pathname);

  console.log("[NavBubbles render] pathname:", pathname);
  console.log(
    "[NavBubbles render] ROUTE_ACTIVE_LABEL lookup:",
    ROUTE_ACTIVE_LABEL[pathname],
  );
  console.log("[NavBubbles] normalized:", path);
  console.log(
    "[NavBubbles render] ROUTE_ACTIVE_LABEL normalized lookup:",
    ROUTE_ACTIVE_LABEL[path],
  );

  const activeRoom = path === "/" ? scrollActiveRoom : "";

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
      <nav
        className="nav-bubbles-desktop fixed right-6 top-1/2 z-50 -translate-y-1/2"
        aria-label="Room navigation"
      >
        <div className="relative flex flex-col">
          <NavRoomItems
            pathname={pathname}
            activeRoom={activeRoom}
            onSelect={handleSelect}
          />
        </div>
      </nav>

      <div className="nav-mobile">
        <button
          type="button"
          className="nav-mobile-trigger"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          {">_"}
        </button>

        {menuOpen && (
          <nav
            className="nav-mobile-dropdown"
            aria-label="Mobile room navigation"
          >
            <div className="relative flex flex-col">
              <NavRoomItems
                pathname={pathname}
                activeRoom={activeRoom}
                onSelect={handleSelect}
              />
            </div>
          </nav>
        )}
      </div>
    </>
  );
}
