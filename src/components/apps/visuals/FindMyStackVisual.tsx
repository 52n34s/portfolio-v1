const NEON = "#3D6FE0";

const LAYERS = [
  { label: "CLIENT", tool: "Expo" },
  { label: "CORE", tool: "Supabase" },
  { label: "PAYMENTS", tool: "RevenueCat" },
  { label: "BUILDER", tool: "ErdiBuilds" },
];

/** The neon stack from the logo, built layer by layer into one answer. */
export default function FindMyStackVisual() {
  const mono = { fontFamily: "var(--font-jetbrains-mono), monospace" };

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#0B1020]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 70% 55%, rgba(61,111,224,0.35), transparent 55%),
            repeating-linear-gradient(to right, rgba(61,111,224,0.12) 0, rgba(61,111,224,0.12) 1px, transparent 1px, transparent 28px),
            repeating-linear-gradient(to bottom, rgba(61,111,224,0.12) 0, rgba(61,111,224,0.12) 1px, transparent 1px, transparent 28px)
          `,
        }}
        aria-hidden="true"
      />

      <div aria-hidden="true">
        <p className="absolute left-6 top-5 text-[11px] tracking-[0.14em] text-[#8FB0FF]" style={mono}>
          $ find-my-stack --idea
        </p>

        <img
          src="/brand-2026/app-logo-findmystack-2026.png?v=2"
          alt=""
          className="absolute bottom-6 left-6 h-[66px] w-[66px] rounded-[16px] shadow-[0_0_24px_rgba(61,111,224,0.6)]"
        />

        <div className="absolute bottom-5 right-6 flex w-[220px] flex-col gap-2">
          {LAYERS.map((layer, i) => (
            <div
              key={layer.label}
              className="flex items-center justify-between rounded-[10px] border bg-[#0F1730]/90 px-3 py-2"
              style={{
                borderColor: i === LAYERS.length - 1 ? NEON : "rgba(143,176,255,0.35)",
                boxShadow: i === LAYERS.length - 1 ? `0 0 16px ${NEON}` : "none",
                transform: `translateX(${(LAYERS.length - 1 - i) * -6}px)`,
              }}
            >
              <span className="text-[8px] tracking-[0.16em] text-[#8FB0FF]" style={mono}>
                {layer.label}
              </span>
              <span className="text-[12px] font-semibold text-white" style={mono}>
                {layer.tool}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
