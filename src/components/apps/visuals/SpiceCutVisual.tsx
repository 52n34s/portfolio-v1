const PINK = "#FF2E93";
const VIOLET = "#8B5CFF";

/** Clip lengths (relative) on the timeline under the phone. */
const CLIPS = [34, 22, 40, 18, 28];

/** Raw clips go in, a finished 9:16 reel comes out, shared in one tap. */
export default function SpiceCutVisual() {
  const mono = { fontFamily: "var(--font-jetbrains-mono), monospace" };

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#0A0A0E]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 72% 40%, rgba(255,46,147,0.32), transparent 55%),
            radial-gradient(circle at 20% 90%, rgba(139,92,255,0.22), transparent 50%)
          `,
        }}
        aria-hidden="true"
      />

      <div aria-hidden="true">
        <p className="absolute left-6 top-5 text-[11px] tracking-[0.14em] text-[#FF7AB8]" style={mono}>
          YOU FILM. WE CUT.
        </p>

        <img
          src="/brand-2026/app-logo-spicecut-2026.png"
          alt=""
          className="absolute bottom-6 left-6 h-[66px] w-[66px] -rotate-[5deg] rounded-[16px] shadow-[0_0_24px_rgba(255,46,147,0.45)]"
        />

        {/* Timeline of raw clips, cut points in pink. */}
        <div className="absolute left-6 top-[58px] flex w-[190px] items-center gap-[3px] rounded-[10px] border border-[#2A2A33] bg-[#141419] p-2">
          {CLIPS.map((w, i) => (
            <span
              key={i}
              className="h-[22px] rounded-[4px]"
              style={{
                width: `${w}%`,
                background: i % 2 ? "#3A3A46" : "#2A2A33",
                borderRight: i < CLIPS.length - 1 ? `2px solid ${PINK}` : undefined,
              }}
            />
          ))}
        </div>
        <div className="absolute left-6 top-[104px] h-[3px] w-[190px] rounded-full bg-[#2A2A33]">
          <span className="block h-full w-[78%] rounded-full" style={{ background: VIOLET }} />
        </div>

        {/* Finished 9:16 reel in a phone frame. */}
        <div
          className="absolute right-[130px] top-6 h-[232px] w-[132px] rotate-[3deg] overflow-hidden rounded-[22px] border-[3px] bg-[#141419]"
          style={{ borderColor: VIOLET, boxShadow: "0 0 28px rgba(139,92,255,0.5)" }}
        >
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(160deg, ${PINK} 0%, #5A1E8C 60%, #0A0A0E 100%)` }}
          />
          <p
            className="absolute left-3 right-3 top-[38%] text-center text-[17px] font-extrabold uppercase leading-[1.05] text-white"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}
          >
            Fresh
            <br />
            today
          </p>
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
            <span className="text-[8px] tracking-[0.14em] text-white/80" style={mono}>
              0:15
            </span>
            <span className="text-[8px] tracking-[0.14em] text-white/80" style={mono}>
              9:16
            </span>
          </div>
        </div>

        <div className="absolute bottom-7 right-6 flex w-[150px] -rotate-[2deg] items-center gap-2 rounded-[14px] bg-[#1C1C23] px-3 py-2.5 text-white shadow-[0_8px_18px_rgba(0,0,0,0.45)]">
          <span
            className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px]"
            style={{ background: VIOLET }}
          >
            ✓
          </span>
          <div>
            <p className="text-[11px] font-semibold">Shared</p>
            <p className="text-[9px] text-white/60">Instagram · TikTok</p>
          </div>
        </div>
      </div>
    </div>
  );
}
