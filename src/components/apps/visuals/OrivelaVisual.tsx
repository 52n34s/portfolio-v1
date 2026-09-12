export default function OrivelaVisual() {
  const mono = { fontFamily: "var(--font-jetbrains-mono), monospace" };

  return (
    <div className="relative flex h-full w-full items-center justify-center bg-[#0e0b1a] px-8 py-10">
      <div className="w-full max-w-[240px]">
        <div className="flex items-center gap-2 rounded-[10px] border border-white/10 bg-white/[0.04] px-3 py-2.5">
          <span className="text-[13px] text-[#a78bfa]">⌕</span>
          <span className="text-[12px] text-white/80" style={mono}>
            passport
          </span>
          <span
            className="ml-0.5 inline-block h-[13px] w-[1.5px] bg-[#a78bfa]"
            style={{ animation: "orivela-caret 1s step-end infinite" }}
          />
        </div>

        <div className="mt-3 flex items-center gap-3 rounded-[10px] bg-white/[0.06] px-3 py-3">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M6 2h9l5 5v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"
              stroke="#a78bfa"
              strokeWidth="1.5"
            />
            <path d="M14 2v5h5" stroke="#a78bfa" strokeWidth="1.5" />
          </svg>
          <div className="min-w-0">
            <p className="truncate text-[12px] text-white" style={mono}>
              Passport — Steffen G.
            </p>
            <p className="text-[10px] text-white/40" style={mono}>
              Valid until 2029
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes orivela-caret {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
