const INDIGO = "#4F52D9";

/** The hummingbird coach: today's session, the next level, and food that follows. */
export default function KolibiVisual() {
  const mono = { fontFamily: "var(--font-jetbrains-mono), monospace" };
  const hand = { fontFamily: "var(--font-hand), cursive" };

  return (
    <div className="relative h-full w-full overflow-hidden" style={{ backgroundColor: INDIGO }}>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(to right, rgba(255,255,255,0.07) 0, rgba(255,255,255,0.07) 1px, transparent 1px, transparent 30px),
            repeating-linear-gradient(to bottom, rgba(255,255,255,0.07) 0, rgba(255,255,255,0.07) 1px, transparent 1px, transparent 30px)
          `,
        }}
        aria-hidden="true"
      />

      <div aria-hidden="true">
        <p className="absolute left-6 top-5 -rotate-2 text-[19px] text-white" style={hand}>
          Your coach says:
        </p>

        <svg className="absolute bottom-0 left-0 h-[120px] w-full" viewBox="0 0 400 120" preserveAspectRatio="none">
          <path
            d="M0 110 C 60 100, 90 80, 140 82 S 230 50, 270 44 S 350 18, 400 10"
            fill="none"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="3"
            strokeDasharray="6 7"
          />
        </svg>

        <img
          src="/brand-2026/app-logo-kolibi-2026.png"
          alt=""
          className="absolute bottom-7 left-6 h-[78px] w-[78px] -rotate-[6deg] rounded-[20px] shadow-[3px_6px_14px_rgba(0,0,0,0.3)]"
        />

        <div className="absolute bottom-6 right-6 w-[250px] rotate-[1.5deg] rounded-[18px] rounded-tl-[4px] bg-white px-4 py-3.5 shadow-[4px_8px_18px_rgba(0,0,0,0.25)]">
          <p className="text-[8px] tracking-[0.16em]" style={{ ...mono, color: INDIGO }}>
            TODAY · PUSH LADDER
          </p>
          <p className="mt-1.5 text-[14px] font-bold leading-snug text-[#1A1A3A]">
            3 × 8 push-ups. You're ready for level 4.
          </p>
          <div className="mt-3 flex gap-1.5">
            <span
              className="whitespace-nowrap rounded-full px-2.5 py-1 text-[10px] font-semibold text-white"
              style={{ backgroundColor: INDIGO }}
            >
              +320 kcal today
            </span>
            <span className="whitespace-nowrap rounded-full bg-[#EEF0FF] px-2.5 py-1 text-[10px] font-semibold text-[#1A1A3A]">
              Protein 140 g
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
