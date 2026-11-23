const PURPLE = "#6D28D9";

const CHECKS = ["ID", "Income proof", "Credit report"];

/** The Applento A, a listing full of applications, and the complete one on top. */
export default function ApplentoVisual() {
  const mono = { fontFamily: "var(--font-jetbrains-mono), monospace" };

  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{ background: "linear-gradient(160deg, #CFC3FB 0%, #EDE8FD 55%, #FFFFFF 100%)" }}
    >
      <div aria-hidden="true">
        <img
          src="/logos/applento-mark.png"
          alt=""
          className="absolute -left-2 bottom-1 h-[130px] w-auto -rotate-[8deg] opacity-95 drop-shadow-[0_10px_18px_rgba(109,40,217,0.35)]"
        />

        <div className="absolute left-6 top-6 w-[200px] -rotate-[2deg] rounded-[14px] bg-white/80 px-4 py-2.5 shadow-[0_4px_14px_rgba(26,26,26,0.08)]">
          <p className="text-[8px] tracking-[0.14em] text-[#14102E]/50" style={mono}>
            KNAACKSTR. 27 · 2 ROOMS
          </p>
          <p className="mt-0.5 text-[12px] font-bold text-[#14102E]">48 applications</p>
        </div>

        <div className="absolute bottom-6 right-6 w-[230px] -rotate-[1.5deg] rounded-[16px] bg-white px-4 py-3 shadow-[0_12px_26px_rgba(109,40,217,0.25)]">
          <div className="flex items-center justify-between">
            <p className="text-[13px] font-bold text-[#14102E]">Emma C.</p>
            <span className="rounded-full bg-[#E7F7F0] px-2 py-0.5 text-[11px] font-bold text-[#1D9E75]" style={mono}>
              84
            </span>
          </div>
          <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-0.5">
            {CHECKS.map((label) => (
              <span key={label} className="text-[10px] text-[#14102E]/70">
                <span className="text-[#1D9E75]">✓</span> {label}
              </span>
            ))}
          </div>
          <div className="mt-2.5 flex gap-1.5">
            <span className="rounded-full px-3 py-1 text-[10px] font-semibold text-white" style={{ backgroundColor: PURPLE }}>
              Accept
            </span>
            <span className="rounded-full border border-black/15 px-3 py-1 text-[10px] text-[#14102E]/70">
              Decline
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
