"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

type ScrollNavItem = {
  kind: "scroll";
  id: string;
  label: string;
};

type LinkNavItem = {
  kind: "link";
  href: string;
  label: string;
};

type NavItem = ScrollNavItem | LinkNavItem;

const navItems: NavItem[] = [
  { kind: "scroll", id: "room-01", label: ">_ boot" },
  { kind: "scroll", id: "room-02", label: "~/home" },
  { kind: "scroll", id: "room-03", label: "./builds" },
  { kind: "scroll", id: "room-03b", label: "./orivela" },
  { kind: "scroll", id: "room-04", label: "~/peeranimo" },
  { kind: "scroll", id: "room-05", label: "./work-with-me" },
  { kind: "scroll", id: "room-06", label: ">_ contact" },
];

const labelStyle = {
  fontFamily: "var(--font-jetbrains-mono), monospace",
  fontSize: "11px",
};

interface NavBubblesProps {
  activeRoom?: string;
}

function NavRoomItems({
  activeRoom,
  pathname,
  onSelect,
}: {
  activeRoom: string;
  pathname: string;
  onSelect: (item: NavItem) => void;
}) {
  const isActive = (item: NavItem) => {
    if (item.kind === "link") {
      return pathname === item.href || pathname.startsWith(`${item.href}/`);
    }

    return pathname === "/" && activeRoom === item.id;
  };

  return (
    <>
      <div
        className="absolute top-4 bottom-4 left-4 w-px -translate-x-1/2"
        style={{ background: "#CCC" }}
      />

      {navItems.map((item) => {
        const active = isActive(item);
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

export default function NavBubbles({ activeRoom = "" }: NavBubblesProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleSelect = (item: NavItem) => {
    if (item.kind === "link") {
      router.push(item.href);
    } else if (pathname === "/") {
      document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${item.id}`);
    }

    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className="nav-bubbles-desktop fixed right-6 top-1/2 z-50 -translate-y-1/2"
        aria-label="Room navigation"
      >
        <div className="relative flex flex-col">
          <NavRoomItems
            activeRoom={activeRoom}
            pathname={pathname}
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
                activeRoom={activeRoom}
                pathname={pathname}
                onSelect={handleSelect}
              />
            </div>
          </nav>
        )}
      </div>
    </>
  );
}
