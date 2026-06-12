"use client";

const NAV_ITEMS = [
  { id: 1, label: ">_ boot ← aktiv" },
  { id: 2, label: "~/home" },
  { id: 3, label: "./builds" },
  { id: 4, label: "~/peeranimo" },
  { id: 5, label: "./beliefs" },
  { id: 6, label: ">_ contact" },
];

const labelStyle = {
  fontFamily: "var(--font-jetbrains-mono), monospace",
  fontSize: "11px",
};

export default function NavBubbles() {
  return (
    <nav
      className="fixed right-6 top-1/2 z-50 -translate-y-1/2"
      aria-label="Room navigation"
    >
      <div className="relative flex flex-col">
        {/* Connecting line through bubble centers */}
        <div
          className="absolute top-4 bottom-4 left-4 w-px -translate-x-1/2"
          style={{ background: "#CCC" }}
        />

        {NAV_ITEMS.map((item) => {
          const isActive = item.id === 1;

          return (
            <div key={item.id} className="flex items-center gap-3 py-3">
              <button
                type="button"
                className="relative z-10 h-8 w-8 shrink-0 rounded-full transition-transform hover:scale-110"
                style={{
                  background: isActive ? "var(--orange)" : "transparent",
                  border: isActive ? "none" : "1px solid #CCC",
                }}
                aria-label={item.label}
                aria-current={isActive ? "page" : undefined}
              />

              <span
                className="whitespace-nowrap"
                style={{
                  ...labelStyle,
                  color: isActive ? "var(--orange)" : "#888",
                }}
              >
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
