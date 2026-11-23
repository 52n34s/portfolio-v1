const RED = "#FF403F";

const SCORES = [
  { label: "Delivered as promised", value: 10 },
  { label: "Matched expectations", value: 10 },
  { label: "Price-performance", value: 8 },
];

/** The red THE block, one review scored question by question, and the proof stamp. */
export default function TheVisual() {
  const mono = { fontFamily: "var(--font-jetbrains-mono), monospace" };

  return (
    <div className="relative h-full w-full overflow-hidden" style={{ backgroundColor: RED }}>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(255,255,255,0.06) 0, rgba(255,255,255,0.06) 12px, transparent 12px, transparent 24px)",
        }}
        aria-hidden="true"
      />

      <div aria-hidden="true">
        <span className="absolute left-6 top-5 text-[42px] font-black leading-none tracking-tight text-white">
          THE
        </span>

        <div className="absolute bottom-6 right-6 w-[250px] rotate-[1.5deg] rounded-[14px] bg-white px-4 py-3.5 shadow-[0_12px_26px_rgba(80,0,0,0.3)]">
          <div className="flex items-baseline gap-1.5">
            <span className="text-[26px] font-black leading-none text-[#1A1A1A]">9.3</span>
            <span className="text-[9px] tracking-[0.12em] text-[#1A1A1A]/45" style={mono}>
              / 10
            </span>
          </div>
          <div className="mt-2.5 space-y-1.5">
            {SCORES.map((score) => (
              <div key={score.label}>
                <div className="flex items-center justify-between text-[10px] text-[#1A1A1A]/75">
                  <span>{score.label}</span>
                  <span className="font-bold text-[#1A1A1A]">{score.value}</span>
                </div>
                <div className="mt-0.5 h-1.5 w-full rounded-full bg-[#FFE1E0]">
                  <div className="h-1.5 rounded-full" style={{ width: `${score.value * 10}%`, backgroundColor: RED }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="absolute left-6 top-[72px] -rotate-[8deg] rounded-[6px] border-2 border-white px-2.5 py-1 text-[10px] font-bold tracking-[0.14em] text-white"
          style={mono}
        >
          ✓ VERIFIED PURCHASE
        </div>
      </div>
    </div>
  );
}
