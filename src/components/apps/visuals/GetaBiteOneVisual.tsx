const MENU = [
  { name: "Bánh mì Classic", price: "12.90 €" },
  { name: "Udon Bowl Tofu", price: "12.90 €", veg: true },
  { name: "Bún Tofu", price: "9.90 €", veg: true },
];

/** The bitten B, a restaurant's own menu page and a table booked on the side. */
export default function GetaBiteOneVisual() {
  const mono = { fontFamily: "var(--font-jetbrains-mono), monospace" };

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#F5EFE6]">
      <div aria-hidden="true">
        <img
          src="/logos/getabite-1-mark.png"
          alt=""
          className="absolute left-3 bottom-4 h-[112px] w-auto -rotate-[6deg]"
        />

        <div className="absolute bottom-6 right-6 w-[230px] rotate-[1.5deg] overflow-hidden rounded-[14px] bg-white shadow-[0_10px_24px_rgba(17,17,17,0.15)]">
          <div className="flex items-center gap-1.5 bg-[#111111] px-3 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
            <span className="ml-2 text-[9px] tracking-[0.1em] text-white/80" style={mono}>
              SAIGON & HERBS
            </span>
          </div>
          <div className="space-y-1.5 px-3.5 py-3">
            {MENU.map((item) => (
              <div key={item.name} className="flex items-center justify-between text-[11px] text-[#111111]">
                <span>
                  {item.name}
                  {item.veg && <span className="ml-1 font-bold text-[#1D9E75]">V</span>}
                </span>
                <span className="font-bold">{item.price}</span>
              </div>
            ))}
            <span className="mt-1 inline-block rounded-full bg-[#111111] px-3 py-1 text-[10px] font-semibold text-white">
              Order now
            </span>
          </div>
        </div>

        <div
          className="absolute left-6 top-6 w-[104px] -rotate-[5deg] rounded-[2px] bg-white px-3 py-2 shadow-[2px_6px_14px_rgba(17,17,17,0.22)]"
          style={mono}
        >
          <p className="text-[8px] tracking-[0.14em] text-[#111111]/45">TABLE</p>
          <p className="text-[12px] font-bold text-[#111111]">2 · 19:30</p>
          <p className="text-[9px] text-[#1D9E75]">✓ Confirmed</p>
        </div>
      </div>
    </div>
  );
}
