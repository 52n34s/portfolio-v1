const PINK = "#EC1E7E";

/** The capybara, a clip mid-scroll and the word that just landed. */
export default function CarpinchoVisual() {
  const mono = { fontFamily: "var(--font-jetbrains-mono), monospace" };
  const hand = { fontFamily: "var(--font-hand), cursive" };

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#FFE45C]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, transparent 0, transparent 27px, rgba(26,26,26,0.09) 27px, rgba(26,26,26,0.09) 28px)",
        }}
        aria-hidden="true"
      />

      <div aria-hidden="true">
        <img
          src="/brand-2026/app-logo-carpincho-2026.png"
          alt=""
          className="absolute bottom-6 left-6 h-[80px] w-[80px] -rotate-[8deg] rounded-[22px] shadow-[3px_6px_14px_rgba(26,26,26,0.25)]"
        />

        <div
          className="absolute bottom-[96px] left-[70px] z-10 -rotate-[4deg] rounded-[16px] rounded-bl-[4px] px-3 py-1.5 text-[13px] font-bold text-white shadow-[0_4px_10px_rgba(236,30,126,0.35)]"
          style={{ backgroundColor: PINK }}
        >
          ¡Hola!
        </div>

        <p className="absolute left-6 top-5 -rotate-2 text-[18px] text-[#1A1A1A]" style={hand}>
          Scroll. Learn. Repeat.
        </p>

        <div className="absolute bottom-6 right-6 w-[230px] rotate-[2deg] rounded-[18px] bg-[#1A1A1A] px-4 py-3.5 text-white shadow-[4px_8px_18px_rgba(26,26,26,0.3)]">
          <span
            className="inline-block rounded-full bg-white/10 px-2 py-0.5 text-[8px] tracking-[0.16em] text-white/70"
            style={mono}
          >
            LEARN WHILE YOU SCROLL
          </span>
          <p className="mt-2 text-[15px] font-semibold leading-snug">
            Tom está <span style={{ color: PINK }}>feliz</span> en el parque.
          </p>
          <p className="mt-1 text-[10px] text-white/55">Tom is happy at the park.</p>
          <div className="mt-3 flex items-center gap-2 rounded-full bg-white px-2.5 py-1.5 text-[#1A1A1A]">
            <span
              className="flex h-5 w-5 items-center justify-center rounded-full text-[10px] text-white"
              style={{ backgroundColor: PINK }}
            >
              ●
            </span>
            <span className="text-[11px] font-semibold">Understood</span>
          </div>
        </div>
      </div>
    </div>
  );
}
