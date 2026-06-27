"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { builds } from "@/lib/builds";

export default function BuildsNav() {
  const pathname = usePathname();

  return (
    <header className="builds-nav">
      <div className="builds-nav-inner">
        <Link href="/" className="builds-nav-home">
          ← 52n34s.app
        </Link>

        <nav className="builds-nav-links" aria-label="Builds">
          <Link
            href="/builds"
            className={`builds-nav-link ${pathname === "/builds" ? "builds-nav-link-active" : ""}`}
          >
            ./builds
          </Link>
          {builds.map((build) => {
            const href = `/builds/${build.slug}`;
            const isActive = pathname === href;

            return (
              <Link
                key={build.slug}
                href={href}
                className={`builds-nav-link ${isActive ? "builds-nav-link-active" : ""}`}
                style={
                  isActive
                    ? { color: build.accentColor, borderColor: build.accentColor }
                    : undefined
                }
              >
                {build.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
