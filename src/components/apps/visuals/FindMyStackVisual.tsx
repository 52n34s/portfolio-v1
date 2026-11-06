const BLUE = "#3D6FE0";

const OPTIONS = ["Mobile app", "Web app", "SaaS"];

/** A question from the assessment and the one clear answer at the end. */
export default function FindMyStackVisual() {
  const mono = { fontFamily: "var(--font-jetbrains-mono), monospace" };

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#E8EEFB]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(to right, rgba(61,111,224,0.12) 0, rgba(61,111,224,0.12) 1px, transparent 1px, transparent 28px),
            repeating-linear-gradient(to bottom, rgba(61,111,224,0.12) 0, rgba(61,111,224,0.12) 1px, transparent 1px, transparent 28px)
          `,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-3 px-7 py-5" aria-hidden="true">
        <div className="w-full max-w-[280px] -rotate-[1deg] rounded-[14px] bg-white px-4 py-3 shadow-[0_4px_14px_rgba(26,26,26,0.12)]">
          <p className="text-[9px] tracking-[0.14em] text-[#1A1A1A]/45" style={mono}>
            QUESTION 1
          </p>
          <p className="mt-1 text-[12px] font-medium text-[#1A1A1A]">What are you building?</p>
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {OPTIONS.map((option, i) => (
              <span
                key={option}
                className="rounded-full border px-2.5 py-1 text-[10px]"
                style={
                  i === 0
                    ? { backgroundColor: BLUE, borderColor: BLUE, color: "#fff" }
                    : { borderColor: "rgba(26,26,26,0.15)", color: "rgba(26,26,26,0.7)" }
                }
              >
                {option}
              </span>
            ))}
          </div>
        </div>

        <div
          className="w-full max-w-[280px] rotate-[1.5deg] rounded-[14px] px-4 py-3 text-white shadow-[0_4px_14px_rgba(26,26,26,0.12)]"
          style={{ backgroundColor: BLUE }}
        >
          <p className="text-[9px] tracking-[0.14em] text-white/70" style={mono}>
            YOUR RESULT
          </p>
          <p className="mt-1 text-[12px] font-medium">One clear stack recommendation</p>
        </div>
      </div>
    </div>
  );
}
