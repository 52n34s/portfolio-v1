function Pin({ className = "", fill = "#1A1A1A" }: { className?: string; fill?: string }) {
  return (
    <svg
      className={`absolute h-6 w-6 drop-shadow-[1px_2px_3px_rgba(26,26,26,0.35)] ${className}`}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fill={fill}
        d="M12 0C6.5 0 2 4.5 2 10c0 7.5 10 14 10 14s10-6.5 10-14c0-5.5-4.5-10-10-10z"
      />
      <circle cx="12" cy="10" r="3.5" fill="#F5F0E8" />
    </svg>
  );
}

export default function GetaBiteVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#F0E9D8]">
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.35]"
        aria-hidden="true"
      >
        <defs>
          <pattern id="getabite-grid" width="34" height="34" patternUnits="userSpaceOnUse" patternTransform="rotate(6)">
            <path d="M 34 0 L 0 0 0 34" fill="none" stroke="#B9AF95" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#getabite-grid)" />
      </svg>

      <div
        className="pointer-events-none absolute inset-y-0 left-[34%] w-[10px] -translate-x-1/2 bg-gradient-to-r from-transparent via-black/10 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-[58%] h-[10px] -translate-y-1/2 bg-gradient-to-b from-transparent via-black/10 to-transparent"
        aria-hidden="true"
      />

      <p
        className="absolute left-6 top-5 max-w-[140px] -rotate-2 text-[16px] leading-snug text-[#1A1A1A]"
        style={{ fontFamily: "var(--font-hand), cursive" }}
      >
        Decide before you leave.
      </p>

      <Pin className="left-[14%] top-[54%] rotate-[-8deg]" fill="#C25B4A" />
      <Pin className="left-[70%] top-[22%] rotate-[6deg]" fill="#1A1A1A" />
      <Pin className="left-[56%] top-[62%] rotate-[-3deg]" fill="#1D9E75" />

      <div
        className="absolute left-[62%] top-[68%] w-[132px] rotate-[2deg] rounded-[2px] bg-white px-3 py-2.5 shadow-[2px_5px_12px_rgba(26,26,26,0.22)]"
        style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
      >
        <div className="space-y-1 text-[9px] leading-[1.5] text-[#1A1A1A]">
          <div className="flex items-center gap-1">
            <span className="text-[#1D9E75]">🌿</span>
            <span>Falafel bowl</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[#1D9E75]">🌿</span>
            <span>Lentil soup</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-[10px]" />
            <span className="text-[#1A1A1A]/40 line-through">Chicken wrap</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-[10px]" />
            <span>House salad</span>
          </div>
        </div>
      </div>
    </div>
  );
}
