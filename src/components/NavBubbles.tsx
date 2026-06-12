"use client";

const NAV_ITEMS = [
  { id: 1, roomId: "room-01", label: ">_ boot" },
  { id: 2, roomId: "room-02", label: "~/home" },
  { id: 3, roomId: "room-03", label: "./builds" },
  { id: 4, roomId: "room-04", label: "~/peeranimo" },
  { id: 5, roomId: "room-05", label: "./beliefs" },
  { id: 6, roomId: "room-06", label: ">_ contact" },
];

const labelStyle = {
  fontFamily: "var(--font-jetbrains-mono), monospace",
  fontSize: "11px",
};

interface NavBubblesProps {
  activeRoom: string;
  onNavigate: (roomId: string) => void;
}

export default function NavBubbles({ activeRoom, onNavigate }: NavBubblesProps) {
  return (
    <nav
      className="fixed right-6 top-1/2 z-50 -translate-y-1/2"
      aria-label="Room navigation"
    >
      <div className="relative flex flex-col">
        <div
          className="absolute top-4 bottom-4 left-4 w-px -translate-x-1/2"
          style={{ background: "#CCC" }}
        />

        {NAV_ITEMS.map((item) => {
          const isActive = activeRoom === item.roomId;

          return (
            <div key={item.id} className="flex items-center gap-3 py-3">
              <button
                type="button"
                onClick={() => onNavigate(item.roomId)}
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
                {isActive ? `${item.label} ← aktiv` : item.label}
              </span>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
