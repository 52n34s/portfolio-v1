const MENU = [
  { name: "Bánh mì Classic", price: "12.90 €" },
  { name: "Udon Bowl Tofu", price: "12.90 €", veg: true },
  { name: "Bún Tofu", price: "9.90 €", veg: true },
];

/** A restaurant's own little website: the menu, and a table booked on the side. */
export default function GetaBiteOneVisual() {
  const mono = { fontFamily: "var(--font-jetbrains-mono), monospace" };

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#F5EFE6]">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage: `
            repeating-linear-gradient(to right, rgba(26,26,26,0.06) 0, rgba(26,26,26,0.06) 1px, transparent 1px, transparent 30px),
            repeating-linear-gradient(to bottom, rgba(26,26,26,0.06) 0, rgba(26,26,26,0.06) 1px, transparent 1px, transparent 30px)
          `,
        }}
        aria-hidden="true"
      />

      <p
        className="absolute left-6 top-5 max-w-[150px] -rotate-2 text-[16px] leading-snug text-[#1A1A1A]"
        style={{ fontFamily: "var(--font-hand), cursive" }}
        aria-hidden="true"
      >
        Your own restaurant site.
      </p>

      <div className="relative z-10 flex h-full items-center justify-center px-7 pt-12 pb-5" aria-hidden="true">
        <div className="w-full max-w-[250px] -rotate-[1deg] overflow-hidden rounded-[14px] bg-white shadow-[0_4px_14px_rgba(26,26,26,0.12)]">
          <div className="flex items-center gap-1.5 border-b border-black/5 bg-[#FAF8F5] px-3 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-black/15" />
            <span className="h-1.5 w-1.5 rounded-full bg-black/15" />
            <span className="h-1.5 w-1.5 rounded-full bg-black/15" />
            <span className="ml-2 text-[9px] tracking-[0.1em] text-[#1A1A1A]/45" style={mono}>
              SAIGON & HERBS
            </span>
          </div>
          <div className="space-y-2 px-4 py-3">
            {MENU.map((item) => (
              <div key={item.name} className="flex items-center justify-between text-[11px] text-[#1A1A1A]">
                <span>
                  {item.name}
                  {item.veg && <span className="ml-1 text-[#1D9E75]">V</span>}
                </span>
                <span className="font-semibold">{item.price}</span>
              </div>
            ))}
            <div className="pt-1">
              <span className="inline-block rounded-full bg-[#1A1A1A] px-3 py-1 text-[10px] text-white">
                Order now
              </span>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-6 right-5 w-[120px] rotate-[4deg] rounded-[2px] bg-white px-3 py-2.5 shadow-[2px_5px_12px_rgba(26,26,26,0.22)]"
          style={mono}
        >
          <p className="text-[8px] tracking-[0.14em] text-[#1A1A1A]/45">TABLE</p>
          <p className="mt-0.5 text-[11px] font-semibold text-[#1A1A1A]">2 · 19:30</p>
          <p className="mt-1 text-[9px] text-[#1D9E75]">✓ Confirmed</p>
        </div>
      </div>
    </div>
  );
}
