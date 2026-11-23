const MAGENTA = "#FC2E70";

/** The alert that arrives the moment something happens, with the likely cause. */
export default function ErdiVisual() {
  const mono = { fontFamily: "var(--font-jetbrains-mono), monospace" };

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#FFF5F8]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(to right, rgba(252,46,112,0.07) 0, rgba(252,46,112,0.07) 1px, transparent 1px, transparent 8px),
            repeating-linear-gradient(to bottom, rgba(252,46,112,0.07) 0, rgba(252,46,112,0.07) 1px, transparent 1px, transparent 8px),
            repeating-linear-gradient(to right, rgba(252,46,112,0.2) 0, rgba(252,46,112,0.2) 1.5px, transparent 1.5px, transparent 40px),
            repeating-linear-gradient(to bottom, rgba(252,46,112,0.2) 0, rgba(252,46,112,0.2) 1.5px, transparent 1.5px, transparent 40px)
          `,
        }}
        aria-hidden="true"
      />

      <div aria-hidden="true">
        <img
          src="/brand-2026/wordmark-erdi-2026.svg"
          alt=""
          className="absolute left-6 top-5 h-[46px] w-auto -rotate-[3deg]"
        />

        <div className="absolute left-6 top-[80px] w-[236px] -rotate-[1deg] rounded-[18px] bg-white/95 px-3.5 py-3 shadow-[0_10px_24px_rgba(252,46,112,0.22)] ring-1 ring-black/5">
          <div className="flex items-center gap-2">
            <img src="/erdi-icon.svg" alt="" className="h-6 w-6 rounded-[7px]" />
            <span className="text-[10px] font-semibold text-[#1A1A1A]">Erdi</span>
            <span className="ml-auto text-[9px] text-[#1A1A1A]/45" style={mono}>
              now
            </span>
          </div>
          <p className="mt-2 text-[13px] font-semibold leading-snug text-[#1A1A1A]">
            Revenue on Nova dropped 55% yesterday.
          </p>
          <p className="mt-1 text-[11px] leading-snug text-[#1A1A1A]/65">
            Likely cause: the Apple Ads campaign was paused on Monday.
          </p>
        </div>

        <div className="absolute bottom-6 right-6 flex rotate-[1.5deg] items-center gap-2 rounded-full bg-[#1A1A1A] px-3.5 py-2 text-white shadow-[0_6px_14px_rgba(26,26,26,0.25)]">
          <span className="h-2 w-2 animate-pulse rounded-full" style={{ backgroundColor: MAGENTA }} />
          <span className="whitespace-nowrap text-[10px] tracking-[0.12em]" style={mono}>
            WATCHING 5 BUSINESSES
          </span>
        </div>
      </div>
    </div>
  );
}
