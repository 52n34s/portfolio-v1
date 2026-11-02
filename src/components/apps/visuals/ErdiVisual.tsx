const ERDI_MAGENTA = "#FC2E70";

const BRIEF = [
  { label: "Moved", text: "Revenue +12%", note: "new bundle" },
  { label: "Inbox", text: "14 sorted", note: "3 replies ready" },
];

export default function ErdiVisual() {
  const mono = { fontFamily: "var(--font-jetbrains-mono), monospace" };

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

      <div className="relative z-10 flex h-full flex-col justify-between px-7 py-5 md:py-7">
        <p
          className="text-[17px] leading-snug"
          style={{ fontFamily: "var(--font-hand), cursive", color: ERDI_MAGENTA }}
        >
          Everything runs.
        </p>

        {/* The morning brief: what moved and why, the inbox, the one thing
            that needs you today. */}
        <div
          className="w-full max-w-[280px] self-center rounded-[12px] bg-white px-4 py-3 shadow-[0_4px_14px_rgba(26,26,26,0.12)]"
          aria-hidden="true"
        >
          <p className="text-[9px] tracking-[0.14em] text-[#1A1A1A]/45" style={mono}>
            GOOD MORNING · 3 MIN
          </p>

          {BRIEF.map((row) => (
            <div
              key={row.label}
              className="mt-2 flex items-baseline gap-2 text-[11px] leading-tight"
              style={mono}
            >
              <span className="w-[42px] shrink-0 text-[9px] uppercase tracking-wider text-[#1A1A1A]/40">
                {row.label}
              </span>
              <span className="text-[#1A1A1A]">{row.text}</span>
              <span className="truncate text-[#1A1A1A]/45">{row.note}</span>
            </div>
          ))}

          <div className="mt-2.5 flex items-center gap-2 border-t border-[#1A1A1A]/10 pt-2.5" style={mono}>
            <span className="w-[42px] shrink-0 text-[9px] uppercase tracking-wider" style={{ color: ERDI_MAGENTA }}>
              Today
            </span>
            <span className="min-w-0 flex-1 truncate text-[11px] text-[#1A1A1A]">
              Refund for Lena
            </span>
            <span
              className="shrink-0 rounded-full px-2.5 py-1 text-[10px] text-white"
              style={{ backgroundColor: ERDI_MAGENTA }}
            >
              Approve
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
