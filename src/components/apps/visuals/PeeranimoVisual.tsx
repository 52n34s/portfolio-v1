export default function PeeranimoVisual() {
  const mono = { fontFamily: "var(--font-jetbrains-mono), monospace" };

  return (
    <div className="relative flex h-full w-full items-center justify-center bg-[#EDEAE3] px-8 py-10">
      <div className="relative w-full max-w-[240px] overflow-hidden rounded-[10px] bg-white shadow-[2px_8px_24px_rgba(26,26,26,0.16)]">
        <div className="flex h-7 items-center justify-center gap-1.5 bg-[#7B5CF0]">
          <span className="h-2 w-2 rounded-full bg-white/40" />
          <span className="h-2 w-2 rounded-full bg-white/40" />
          <span className="h-2 w-2 rounded-full bg-white/40" />
          <span
            className="ml-2 text-[10px] tracking-[0.3em] text-white"
            style={mono}
          >
            HELLO
          </span>
        </div>

        <div className="relative flex items-center justify-center gap-10 px-6 py-9">
          <svg
            className="pointer-events-none absolute left-1/2 top-1/2 h-[2px] w-[64px] -translate-x-1/2 -translate-y-1/2"
            aria-hidden="true"
          >
            <line
              x1="0"
              y1="1"
              x2="64"
              y2="1"
              stroke="#7B5CF0"
              strokeWidth="2"
              strokeDasharray="4 5"
            />
          </svg>
          <div className="z-10 flex h-11 w-11 items-center justify-center rounded-full bg-[#7B5CF0] text-[13px] font-semibold text-white">
            Y
          </div>
          <div className="z-10 flex h-11 w-11 items-center justify-center rounded-full bg-[#F4A261] text-[13px] font-semibold text-white">
            D
          </div>
        </div>

        <div className="px-4 pb-4">
          <div className="rounded-[10px] rounded-bl-[3px] bg-[#F5F0E8] px-3 py-2 text-[11px] leading-snug text-[#1A1A1A]">
            Same book, three chapters behind you. Want to talk?
          </div>
        </div>
      </div>
    </div>
  );
}
