export default function SectionDivider() {
  return (
    <div
      aria-hidden="true"
      className="mx-[calc(50%-50vw)] h-16 w-screen overflow-x-hidden border-b border-black/10 md:h-24"
    >
      <div
        className="h-full opacity-[0.12] md:opacity-[0.15]"
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
