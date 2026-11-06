const INDIGO = "#5B4CF0";
const GREEN = "#1D9E75";

/** Match score and milestone approval, the two moments from the erdibuilds.app hero. */
export default function ErdiBuildsVisual() {
  const mono = { fontFamily: "var(--font-jetbrains-mono), monospace" };
  const radius = 20;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#EEEBFB]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(rgba(91,76,240,0.22) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col justify-center gap-4 px-7 py-5" aria-hidden="true">
        <div className="flex w-full max-w-[280px] -rotate-[1.5deg] items-center gap-3 self-center rounded-[14px] bg-white px-4 py-3 shadow-[0_4px_14px_rgba(26,26,26,0.12)]">
          <svg viewBox="0 0 48 48" className="h-12 w-12 shrink-0">
            <circle cx="24" cy="24" r={radius} fill="none" stroke="rgba(91,76,240,0.15)" strokeWidth="5" />
            <circle
              cx="24"
              cy="24"
              r={radius}
              fill="none"
              stroke={INDIGO}
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray={`${circumference * 0.92} ${circumference}`}
              transform="rotate(-90 24 24)"
            />
            <text x="24" y="28" textAnchor="middle" fontSize="11" fontWeight="600" fill="#1A1A1A">
              92%
            </text>
          </svg>
          <div className="min-w-0">
            <p className="text-[9px] tracking-[0.14em]" style={{ ...mono, color: INDIGO }}>
              TOP MATCH
            </p>
            <p className="text-[12px] leading-snug text-[#1A1A1A]">
              Has shipped something like yours
            </p>
          </div>
        </div>

        <div className="flex w-full max-w-[280px] rotate-[1deg] items-center gap-3 self-center rounded-[14px] bg-white px-4 py-3 shadow-[0_4px_14px_rgba(26,26,26,0.12)]">
          <span
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white"
            style={{ backgroundColor: GREEN }}
          >
            <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3.5 8.5l3 3 6-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <div className="min-w-0">
            <p className="text-[12px] font-medium text-[#1A1A1A]">Milestone approved</p>
            <p className="text-[11px] text-[#1A1A1A]/55">Payment released to developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
