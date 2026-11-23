const PURPLE = "#6D28D9";

const CHECKS = ["ID", "Income proof", "Credit report"];

/** One listing, a pile of applications, and the one complete applicant on top. */
export default function ApplentoVisual() {
  const mono = { fontFamily: "var(--font-jetbrains-mono), monospace" };

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#EEEAFB]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(rgba(109,40,217,0.18) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
        aria-hidden="true"
      />

      <p
        className="absolute left-6 top-5 max-w-[150px] -rotate-2 text-[16px] leading-snug text-[#1A1A1A]"
        style={{ fontFamily: "var(--font-hand), cursive" }}
        aria-hidden="true"
      >
        Only complete ones get in.
      </p>

      <div
        className="relative z-10 flex h-full flex-col items-center justify-center gap-3 px-7 pt-12 pb-5"
        aria-hidden="true"
      >
        <div className="flex w-full max-w-[280px] rotate-[1.5deg] items-center justify-between rounded-[14px] bg-white px-4 py-3 shadow-[0_4px_14px_rgba(26,26,26,0.12)]">
          <div>
            <p className="text-[9px] tracking-[0.14em] text-[#1A1A1A]/45" style={mono}>
              KNAACKSTR. 27 · 2 ROOMS
            </p>
            <p className="mt-1 text-[12px] font-medium text-[#1A1A1A]">48 applications</p>
          </div>
          <span
            className="rounded-full px-2.5 py-1 text-[10px] text-white"
            style={{ backgroundColor: PURPLE }}
          >
            New 3
          </span>
        </div>

        <div className="w-full max-w-[280px] -rotate-[1deg] rounded-[14px] bg-white px-4 py-3 shadow-[0_4px_14px_rgba(26,26,26,0.12)]">
          <div className="flex items-center justify-between">
            <p className="text-[12px] font-medium text-[#1A1A1A]">Emma C.</p>
            <span className="text-[12px] font-semibold text-[#1D9E75]" style={mono}>
              84
            </span>
          </div>
          <div className="mt-2 space-y-1">
            {CHECKS.map((label) => (
              <div key={label} className="flex items-center gap-1.5 text-[10px] text-[#1A1A1A]/75">
                <span className="text-[#1D9E75]">✓</span>
                <span>{label}</span>
              </div>
            ))}
          </div>
          <div className="mt-2.5 flex gap-1.5">
            <span
              className="rounded-full px-2.5 py-1 text-[10px] text-white"
              style={{ backgroundColor: PURPLE }}
            >
              Accept
            </span>
            <span className="rounded-full border border-black/15 px-2.5 py-1 text-[10px] text-[#1A1A1A]/70">
              Decline
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
