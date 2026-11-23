const LAVENDER = "#A78BFA";

/** Night sky, the parrot, a plain question and the document that comes back. */
export default function OrivelaVisual() {
  const mono = { fontFamily: "var(--font-jetbrains-mono), monospace" };

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#0E0B1A]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 78% 22%, rgba(167,139,250,0.35), transparent 45%),
            radial-gradient(rgba(255,255,255,0.35) 1px, transparent 1px)
          `,
          backgroundSize: "100% 100%, 22px 22px",
        }}
        aria-hidden="true"
      />

      <div aria-hidden="true">
        <img
          src="/app-logo-orivela.jpg"
          alt=""
          className="absolute bottom-6 right-6 h-[76px] w-[76px] -rotate-[6deg] rounded-[20px] shadow-[0_8px_22px_rgba(167,139,250,0.35)]"
        />

        <div className="absolute left-6 top-[34px] w-[232px]">
          <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5">
            <span className="text-[12px]" style={{ color: LAVENDER }}>
              ⌕
            </span>
            <span className="whitespace-nowrap text-[11px] text-white/90">When does my passport expire?</span>
          </div>

          <div className="mt-3 ml-4 rotate-[1.5deg] rounded-[14px] bg-[#1C1630] px-4 py-3 ring-1 ring-white/10">
            <p className="text-[8px] tracking-[0.16em]" style={{ ...mono, color: LAVENDER }}>
              RECORD · DOCUMENTS
            </p>
            <p className="mt-1 text-[13px] font-semibold text-white">Passport, Steffen G.</p>
            <p className="mt-0.5 text-[10px] text-white/55" style={mono}>
              Valid until 03/2029
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
