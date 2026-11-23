const RED = "#FF403F";

const SCORES = [
  { label: "Delivered as promised", value: 10 },
  { label: "Matched expectations", value: 10 },
  { label: "Price-performance", value: 8 },
];

/** One review card: the score built from the questions, and proof it was bought. */
export default function TheVisual() {
  const mono = { fontFamily: "var(--font-jetbrains-mono), monospace" };

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#FDF1EE]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, rgba(255,64,63,0.10) 0, rgba(255,64,63,0.10) 1px, transparent 1px, transparent 26px)",
        }}
        aria-hidden="true"
      />

      <p
        className="absolute left-6 top-5 max-w-[150px] -rotate-2 text-[16px] leading-snug text-[#1A1A1A]"
        style={{ fontFamily: "var(--font-hand), cursive" }}
        aria-hidden="true"
      >
        Seven questions per review.
      </p>

      <div className="relative z-10 flex h-full items-center justify-center px-7 pt-12 pb-5" aria-hidden="true">
        <div className="w-full max-w-[260px] rotate-[1deg] rounded-[14px] bg-white px-4 py-3 shadow-[0_4px_14px_rgba(26,26,26,0.12)]">
          <div className="flex items-center justify-between">
            <span className="text-[22px] font-semibold leading-none text-[#1A1A1A]">9.3</span>
            <span
              className="rounded-full px-2.5 py-1 text-[9px] tracking-[0.08em] text-white"
              style={{ ...mono, backgroundColor: RED }}
            >
              ✓ VERIFIED PURCHASE
            </span>
          </div>
          <div className="mt-3 space-y-1.5">
            {SCORES.map((score) => (
              <div key={score.label}>
                <div className="flex items-center justify-between text-[10px] text-[#1A1A1A]/75">
                  <span>{score.label}</span>
                  <span className="font-semibold text-[#1A1A1A]">{score.value}</span>
                </div>
                <div className="mt-0.5 h-1 w-full rounded-full bg-[#FDE2DF]">
                  <div
                    className="h-1 rounded-full"
                    style={{ width: `${score.value * 10}%`, backgroundColor: RED }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
