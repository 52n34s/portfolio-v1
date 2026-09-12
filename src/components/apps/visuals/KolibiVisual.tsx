function ReceiptZigzag({ position }: { position: "top" | "bottom" }) {
  const isTop = position === "top";
  return (
    <svg
      className={`absolute left-0 w-full ${isTop ? "top-0" : "bottom-0"}`}
      height="10"
      viewBox="0 0 170 10"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        fill="#F5F0E8"
        d={
          isTop
            ? "M0 0 L8.5 10 L17 0 L25.5 10 L34 0 L42.5 10 L51 0 L59.5 10 L68 0 L76.5 10 L85 0 L93.5 10 L102 0 L110.5 10 L119 0 L127.5 10 L136 0 L144.5 10 L153 0 L161.5 10 L170 0 L170 0 L0 0 Z"
            : "M0 10 L8.5 0 L17 10 L25.5 0 L34 10 L42.5 0 L51 10 L59.5 0 L68 10 L76.5 0 L85 10 L93.5 0 L102 10 L110.5 0 L119 10 L127.5 0 L136 10 L144.5 0 L153 10 L161.5 0 L170 10 L170 10 L0 10 Z"
        }
      />
    </svg>
  );
}

export default function KolibiVisual() {
  const mono = { fontFamily: "var(--font-jetbrains-mono), monospace" };

  return (
    <div className="relative flex h-full w-full items-center justify-center bg-[#F5F0E8] px-8 py-10">
      <div className="relative w-full max-w-[220px] bg-white px-5 pb-6 pt-7 shadow-[2px_8px_24px_rgba(26,26,26,0.16)]">
        <ReceiptZigzag position="top" />
        <p
          className="text-center text-[11px] font-medium uppercase tracking-wider text-[#1A1A1A]"
          style={mono}
        >
          KOLIBI
        </p>
        <div className="my-2.5 border-t border-dashed border-[#1A1A1A]/30" />
        <div className="space-y-1.5 text-[12px] text-[#1A1A1A]" style={mono}>
          <div className="flex justify-between gap-2">
            <span>BOWL &amp; EGGS</span>
            <span>438</span>
          </div>
          <div className="flex justify-between gap-2">
            <span>FLAT WHITE</span>
            <span>84</span>
          </div>
        </div>
        <div className="my-2.5 border-t border-dashed border-[#1A1A1A]/30" />
        <p className="flex justify-between gap-2 text-[12px] font-semibold text-[#1A1A1A]" style={mono}>
          <span>REMAINING</span>
          <span>412 kcal</span>
        </p>
        <ReceiptZigzag position="bottom" />
      </div>
    </div>
  );
}
