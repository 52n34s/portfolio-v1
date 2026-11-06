const PINK = "#EC1E7E";

const WORDS = ["Tom", "está", "feliz", "en", "el", "parque."];
const LIT = 2;

/** Learn while you scroll: a clip with live subtitles, the word lighting up as
 *  it is spoken, and the honest answer after you say it yourself. */
export default function CarpinchoVisual() {
  const mono = { fontFamily: "var(--font-jetbrains-mono), monospace" };

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#FBEB86]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, transparent, transparent 27px, rgba(26,26,26,0.1) 27px, rgba(26,26,26,0.1) 28px)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col justify-between px-7 py-5 md:py-7">
        <p
          className="text-[17px] leading-snug text-[#1A1A1A]"
          style={{ fontFamily: "var(--font-hand), cursive" }}
        >
          Walk in like you live here.
        </p>

        <div className="flex flex-col items-center gap-3" aria-hidden="true">
          <div className="relative w-full max-w-[280px] -rotate-[1deg] overflow-hidden rounded-[14px] bg-[#1A1A1A] px-4 pb-3 pt-10 shadow-[0_4px_14px_rgba(26,26,26,0.18)]">
            <span
              className="absolute left-3 top-3 rounded-full bg-white/15 px-2 py-0.5 text-[9px] tracking-[0.12em] text-white/80"
              style={mono}
            >
              LEARN WHILE YOU SCROLL
            </span>
            <p className="text-center text-[14px] font-medium leading-snug text-white">
              {WORDS.map((word, i) => (
                <span key={word} style={i === LIT ? { color: PINK } : undefined}>
                  {word}
                  {i < WORDS.length - 1 ? " " : ""}
                </span>
              ))}
            </p>
            <p className="mt-1 text-center text-[11px] text-white/55">
              Tom is happy at the park.
            </p>
          </div>

          <div className="flex w-full max-w-[280px] rotate-[1.2deg] items-center gap-3 rounded-[14px] bg-white px-4 py-2.5 shadow-[0_4px_14px_rgba(26,26,26,0.12)]">
            <span
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white"
              style={{ backgroundColor: PINK }}
            >
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="currentColor">
                <rect x="5.5" y="1.5" width="5" height="8.5" rx="2.5" />
                <path d="M3.5 7.5a4.5 4.5 0 009 0M8 12v2.5" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" />
              </svg>
            </span>
            <p className="min-w-0 flex-1 truncate text-[12px] text-[#1A1A1A]">
              Understood
            </p>
            <span className="shrink-0 text-[10px] text-[#1A1A1A]/50" style={mono}>
              say it out loud
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
