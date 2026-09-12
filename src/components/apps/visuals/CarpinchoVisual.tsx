const FLAGS = [
  { emoji: "🇦🇷", label: "Argentina" },
  { emoji: "🇺🇾", label: "Uruguay" },
  { emoji: "🇲🇽", label: "Mexico" },
  { emoji: "🇨🇴", label: "Colombia" },
  { emoji: "🇵🇪", label: "Peru" },
  { emoji: "🇪🇸", label: "Spain" },
] as const;

export default function CarpinchoVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#FBEB86]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, transparent, transparent 27px, rgba(26,26,26,0.12) 27px, rgba(26,26,26,0.12) 28px)",
          backgroundPosition: "0 60px",
        }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-y-0 left-10 w-[2px] bg-[#D6156F]/70" aria-hidden="true" />

      <div className="relative z-10 flex h-full flex-col justify-center gap-3 pl-14 pr-6">
        <p
          className="text-[22px] leading-snug text-[#1A1A1A]"
          style={{ fontFamily: "var(--font-hand), cursive" }}
        >
          Don&apos;t be a tourist.
        </p>
        <p
          className="text-[22px] leading-snug text-[#1A1A1A]"
          style={{ fontFamily: "var(--font-hand), cursive" }}
        >
          1,000 words is enough.
        </p>

        <div
          className="mt-2 flex items-center gap-2"
          aria-label="Language variants: Rioplatense, Neutral Latin America, Spain"
        >
          {FLAGS.map((flag) => (
            <span
              key={flag.label}
              className="text-[20px] leading-none"
              role="img"
              aria-label={flag.label}
            >
              {flag.emoji}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
