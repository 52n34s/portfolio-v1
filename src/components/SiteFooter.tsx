import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="flex justify-center px-6 py-8">
      <nav
        aria-label="Legal"
        className="text-[12px]"
        style={{
          fontFamily: "var(--font-jetbrains-mono), monospace",
          color: "rgba(26, 26, 26, 0.5)",
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
