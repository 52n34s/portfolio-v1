export default function SectionDivider() {
  return (
    <div
      aria-hidden="true"
      className="home-skyline-band mx-[calc(50%-50vw)] h-16 w-screen overflow-x-hidden border-b border-black/[0.06] md:h-24"
    >
      <div
        className="h-full opacity-[0.18] md:opacity-[0.22]"
        style={{
          backgroundImage: "url(/skyline-tile.svg)",
          backgroundRepeat: "repeat-x",
          backgroundPosition: "bottom center",
          backgroundSize: "auto 100%",
        }}
      />
    </div>
  );
}
