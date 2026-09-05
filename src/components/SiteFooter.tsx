"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type SiteFooterProps = {
  variant?: "light" | "dark";
};

export default function SiteFooter({ variant }: SiteFooterProps) {
  const pathname = usePathname();
  const path = pathname.replace(/\/+$/, "") || "/";
  const resolved = variant ?? (path === "/countdown" ? "dark" : "light");
  const dark = resolved === "dark";

  return (
    <footer
      className="flex justify-center px-6 py-8"
      style={dark ? { background: "#0E1620" } : undefined}
    >
      <nav
        aria-label="Legal"
        className="text-[12px]"
        style={{
          fontFamily: "var(--font-jetbrains-mono), monospace",
          color: dark ? "#A8B4BE" : "rgba(26, 26, 26, 0.5)",
        }}
      >
        <Link href="/privacy" className="hover:opacity-80">
          Privacy
        </Link>
        <span className="mx-2" aria-hidden="true">
          ·
        </span>
        <Link href="/imprint" className="hover:opacity-80">
          Impressum
        </Link>
      </nav>
    </footer>
  );
}
