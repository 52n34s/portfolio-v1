"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

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
        <button
          type="button"
          className="not-found-home-btn"
          onClick={() => router.push("/")}
        >
          {"> cd ~/"}
        </button>
      </div>
    </main>
  );
}
