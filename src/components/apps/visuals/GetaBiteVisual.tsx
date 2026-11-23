const RASPBERRY = "#D6336C";

const DISHES = ["Falafel bowl", "Lentil soup", "Bánh mì Veggie"];

/** A map with heart pins and the vegan dishes behind one of them. */
export default function GetaBiteVisual() {
  const hand = { fontFamily: "var(--font-hand), cursive" };

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#FFE7EE]">
      <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <pattern id="getabite2-streets" width="60" height="60" patternUnits="userSpaceOnUse" patternTransform="rotate(8)">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(214,51,108,0.18)" strokeWidth="6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#getabite2-streets)" />
      </svg>

      <div aria-hidden="true">
        <p className="absolute left-6 top-5 -rotate-2 text-[18px]" style={{ ...hand, color: RASPBERRY }}>
          Vegan, two streets away.
        </p>

        {[
          "left-[22%] top-[46%] -rotate-[8deg]",
          "left-[46%] top-[24%] rotate-[6deg]",
          "left-[38%] top-[68%] rotate-[-4deg]",
        ].map((pos) => (
          <img
            key={pos}
            src="/icon-getabite.png"
            alt=""
            className={`absolute h-10 w-10 rounded-[11px] shadow-[0_6px_12px_rgba(214,51,108,0.35)] ${pos}`}
          />
        ))}

        <div className="absolute bottom-7 right-6 w-[170px] rotate-[3deg] rounded-[12px] bg-white px-3.5 py-3 shadow-[2px_8px_18px_rgba(42,16,24,0.2)]">
          <p className="text-[12px] font-bold text-[#2A1018]">Green Kitchen</p>
          <ul className="mt-1.5 space-y-1">
            {DISHES.map((dish) => (
              <li key={dish} className="flex items-center gap-1.5 text-[11px] text-[#2A1018]/80">
                <span className="text-[#1D9E75]">●</span>
                {dish}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
