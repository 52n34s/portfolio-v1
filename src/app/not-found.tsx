import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found-inner">
        <p className="not-found-prompt">steffen@berlin:~$</p>
        <h1 className="not-found-code">404</h1>
        <p className="not-found-message">
          {"> page not found."}
          <span className="not-found-cursor" aria-hidden="true">
            █
          </span>
        </p>
        <p className="not-found-subtext">this path doesn&apos;t exist. yet.</p>
        <nav className="not-found-nav" aria-label="Useful links">
          <Link href="/" className="not-found-home-btn">
            {"> cd ~/"}
          </Link>
          <Link href="/work" className="not-found-link">
            /work
          </Link>
          <Link href="/apps" className="not-found-link">
            /apps
          </Link>
        </nav>
      </div>
    </main>
  );
}
