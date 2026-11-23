const LILAC = "#7C6FE5";

/** Two people at the same point, and the first message between them. */
export default function PeeranimoVisual() {
  const hand = { fontFamily: "var(--font-hand), cursive" };

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#F3F1FD]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle at 30% 35%, rgba(124,111,229,0.22), transparent 50%)",
        }}
        aria-hidden="true"
      />

      <div aria-hidden="true">
        <img
          src="/app-logo-peeranimo.webp"
          alt=""
          className="absolute bottom-6 left-6 h-[64px] w-[64px] -rotate-[6deg] rounded-[16px] shadow-[3px_6px_14px_rgba(30,26,61,0.2)]"
        />

        <p className="absolute left-6 top-5 -rotate-2 text-[18px]" style={{ ...hand, color: LILAC }}>
          Same chapter, same questions.
        </p>

        <div className="absolute left-[30%] top-[74px] flex -translate-x-1/2 items-center">
          <span
            className="flex h-14 w-14 items-center justify-center rounded-full text-[20px] font-bold text-white shadow-[0_6px_14px_rgba(124,111,229,0.4)]"
            style={{ backgroundColor: LILAC }}
          >
            Y
          </span>
          <span className="mx-1 w-16 border-t-[3px] border-dotted" style={{ borderColor: LILAC }} />
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E8A25C] text-[20px] font-bold text-white shadow-[0_6px_14px_rgba(232,162,92,0.4)]">
            D
          </span>
        </div>

        <div className="absolute bottom-7 right-6 w-[210px] rotate-[2deg] rounded-[16px] rounded-br-[4px] bg-white px-3.5 py-2.5 text-[12px] leading-snug text-[#1E1A3D] shadow-[0_6px_16px_rgba(30,26,61,0.15)]">
          Same book, three chapters behind you. Want to talk?
        </div>
      </div>
    </div>
  );
}
