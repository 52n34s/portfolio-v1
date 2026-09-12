const ERDI_MAGENTA = "#FC2E70";

export default function ErdiKnowsVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#F4EBD4]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(to right, rgba(252,46,112,0.08) 0, rgba(252,46,112,0.08) 1px, transparent 1px, transparent 8px),
            repeating-linear-gradient(to bottom, rgba(252,46,112,0.08) 0, rgba(252,46,112,0.08) 1px, transparent 1px, transparent 8px),
            repeating-linear-gradient(to right, rgba(252,46,112,0.2) 0, rgba(252,46,112,0.2) 1.5px, transparent 1.5px, transparent 40px),
            repeating-linear-gradient(to bottom, rgba(252,46,112,0.2) 0, rgba(252,46,112,0.2) 1.5px, transparent 1.5px, transparent 40px)
          `,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col justify-between px-7 py-6">
        <p
          className="max-w-[180px] text-[17px] leading-snug"
          style={{ fontFamily: "var(--font-hand), cursive", color: ERDI_MAGENTA }}
        >
          Numbers moved.
          <br />
          Erdi knew why.
        </p>

        <svg
          viewBox="0 0 280 90"
          className="w-full"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M6 74 C 42 70, 54 50, 86 44 C 118 38, 128 66, 158 28 C 178 4, 198 22, 228 16 C 248 12, 262 10, 274 12"
            fill="none"
            stroke={ERDI_MAGENTA}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="158" cy="28" r="5" fill={ERDI_MAGENTA} />
          <circle cx="158" cy="28" r="9" fill="none" stroke={ERDI_MAGENTA} strokeWidth="1.5" opacity="0.5" />
        </svg>
      </div>
    </div>
  );
}
