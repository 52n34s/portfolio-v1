const VIOLET = "#5B4CF0";

/** The top match, scored for your project, and the milestone that pays them. */
export default function ErdiBuildsVisual() {
  const mono = { fontFamily: "var(--font-jetbrains-mono), monospace" };
  const score = 92;
  const r = 26;
  const c = 2 * Math.PI * r;

  return (
    <div className="relative h-full w-full overflow-hidden" style={{ backgroundColor: VIOLET }}>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.16) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
        aria-hidden="true"
      />

      <div aria-hidden="true">
        <img
          src="/brand-2026/app-logo-erdibuilds-2026.png"
          alt=""
          className="absolute bottom-6 left-6 h-[64px] w-[64px] -rotate-[6deg] rounded-[16px] shadow-[3px_6px_14px_rgba(0,0,0,0.3)]"
        />

        <div className="absolute left-6 top-[30px] flex w-[232px] -rotate-[1.5deg] items-center gap-3 rounded-[18px] bg-white px-4 py-3.5 shadow-[0_10px_24px_rgba(0,0,0,0.25)]">
          <svg width="64" height="64" viewBox="0 0 64 64" className="shrink-0">
            <circle cx="32" cy="32" r={r} fill="none" stroke="#ECEAFE" strokeWidth="6" />
            <circle
              cx="32"
              cy="32"
              r={r}
              fill="none"
              stroke={VIOLET}
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={`${(c * score) / 100} ${c}`}
              transform="rotate(-90 32 32)"
            />
            <text x="32" y="37" textAnchor="middle" fontSize="15" fontWeight="700" fill="#17133A">
              {score}%
            </text>
          </svg>
          <div className="min-w-0">
            <p className="text-[8px] tracking-[0.16em]" style={{ ...mono, color: VIOLET }}>
              TOP MATCH
            </p>
            <p className="mt-0.5 text-[13px] font-bold text-[#17133A]">Ana K.</p>
            <p className="text-[10px] leading-snug text-[#17133A]/65">Shipped three booking apps</p>
          </div>
        </div>

        <div className="absolute bottom-7 right-6 flex w-[200px] rotate-[2deg] items-center gap-2 rounded-[14px] bg-[#17133A] px-3 py-2.5 text-white shadow-[0_8px_18px_rgba(0,0,0,0.3)]">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1D9E75] text-[11px]">
            ✓
          </span>
          <div>
            <p className="text-[11px] font-semibold">Milestone approved</p>
            <p className="text-[9px] text-white/60">Payment released</p>
          </div>
        </div>
      </div>
    </div>
  );
}
