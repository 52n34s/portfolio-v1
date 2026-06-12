"use client";

interface AboutModalProps {
  open: boolean;
  onClose: () => void;
}

export default function AboutModal({ open, onClose }: AboutModalProps) {
  if (!open) return null;

  return (
    <div
      className="modal-backdrop fixed inset-0 z-[100] flex items-center justify-center p-6"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="modal-card w-full max-w-[480px] p-8"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-labelledby="about-modal-title"
        aria-modal="true"
      >
        <p
          id="about-modal-title"
          className="mb-6"
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            color: "var(--orange)",
            fontSize: "14px",
          }}
        >
          {"> whoami"}
        </p>

        <div
          className="space-y-4"
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 300,
            color: "var(--text)",
            fontSize: "15px",
            lineHeight: "1.7",
          }}
        >
          <p>Ich bin Steffen.</p>
          <p>Freelance Developer.</p>
          <p>Founder. Content Creator.</p>
          <p>Berlin Mitte.</p>
          <p className="pt-2">
            Ich kleide mich bunt — weil ich lange nicht ich selbst sein durfte.
            Das sieht man auf der Straße. Das spürt man in meiner Arbeit.
          </p>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="modal-close-btn mt-8"
        >
          × schließen
        </button>
      </div>
    </div>
  );
}
