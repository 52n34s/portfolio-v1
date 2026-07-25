import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apps — built by Steffen",
  description: "Three products. Three different problems. Orivela, Kolibi, Peeranimo.",
  alternates: {
    canonical: "https://52n34s.app/apps",
  },
};

const ORIVELA_ICON = "/app-logo-orivela.png";
const KOLIBI_ICON = "/app-logo-kolibi.jpg";
const PEERANIMO_ICON = "/app-logo-peeranimo.webp";

const PAPER_SHADOW = "shadow-[2px_5px_14px_rgba(26,26,26,0.13)]";

function Tape({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute h-[22px] w-[64px] border-y border-white/60 bg-white/45 shadow-[0_1px_2px_rgba(0,0,0,0.08)] backdrop-blur-[1px] ${className}`}
      style={{ clipPath: "polygon(3% 0%, 97% 4%, 100% 96%, 2% 100%)" }}
      aria-hidden="true"
    />
  );
}

function TornEdge({ fill = "#F5F0E8" }: { fill?: string }) {
  return (
    <svg
      className="absolute bottom-0 left-0 w-full"
      viewBox="0 0 320 14"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        fill={fill}
        d="M0 14 L0 6 L20 12 L40 4 L60 11 L80 3 L100 12 L120 5 L140 11 L160 2 L180 10 L200 4 L220 12 L240 3 L260 11 L280 5 L300 12 L320 6 L320 14 Z"
      />
    </svg>
  );
}

function ReceiptZigzag({ position }: { position: "top" | "bottom" }) {
  const isTop = position === "top";
  return (
    <svg
      className={`absolute left-0 w-full ${isTop ? "top-0 -translate-y-[99%]" : "bottom-0 translate-y-[99%]"}`}
      viewBox="0 0 170 10"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        fill="white"
        d={
          isTop
            ? "M0 10 L8.5 0 L17 10 L25.5 0 L34 10 L42.5 0 L51 10 L59.5 0 L68 10 L76.5 0 L85 10 L93.5 0 L102 10 L110.5 0 L119 10 L127.5 0 L136 10 L144.5 0 L153 10 L161.5 0 L170 10 Z"
            : "M0 0 L8.5 10 L17 0 L25.5 10 L34 0 L42.5 10 L51 0 L59.5 10 L68 0 L76.5 10 L85 0 L93.5 10 L102 0 L110.5 10 L119 0 L127.5 10 L136 0 L144.5 10 L153 0 L161.5 10 L170 0 Z"
        }
      />
    </svg>
  );
}

function StatusStamp({ lines }: { lines: [string, string, string] }) {
  return (
    <div className="flex h-[62px] w-[62px] shrink-0 -rotate-12 flex-col items-center justify-center rounded-full border-2 border-[#1D9E75] text-[#1D9E75] opacity-80">
      <span
        className="text-[6px] tracking-wider"
        style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
      >
        {lines[0]}
      </span>
      <span
        className="text-[12px] font-medium leading-none"
        style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
      >
        {lines[1]}
      </span>
      <span
        className="px-1 text-center text-[5px] leading-[1.15] tracking-wider"
        style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
      >
        {lines[2]}
      </span>
    </div>
  );
}

function AppIdentity({
  icon,
  name,
}: {
  icon: string;
  name: string;
}) {
  return (
    <div className="flex items-center gap-2.5">
      <img
        src={icon}
        alt=""
        className="h-[54px] w-[54px] rounded-[13px] border border-black/10"
      />
      <p className="text-[15px] font-medium text-[#1A1A1A]">{name}</p>
    </div>
  );
}

function OrivelaCard() {
  return (
    <div className="relative w-full max-w-[300px] -rotate-[3deg] md:-rotate-[3deg]">
      <div className="absolute -right-4 -top-4 z-40">
        <StatusStamp lines={["ORIVELA", "LIVE", "ON THE APP STORE"]} />
      </div>
      <Tape className="-left-2 -top-2 z-20 -rotate-[28deg]" />
      <div
        className="absolute bottom-0 right-0 z-10 h-9 w-9 bg-[#EDE2B0]"
        style={{ clipPath: "polygon(100% 0, 0 100%, 100% 100%)" }}
        aria-hidden="true"
      />
      <article
        className={`relative bg-[#FCF3C8] px-5 pb-7 pt-5 ${PAPER_SHADOW}`}
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 76%, 76% 100%, 0 100%)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-[3px] bg-[#E85A4F]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(transparent, transparent 26px, rgba(55,138,221,0.22) 26px, rgba(55,138,221,0.22) 27px)",
            backgroundPosition: "0 10px",
          }}
          aria-hidden="true"
        />
        <p
          className="relative pl-2 text-[20px] leading-snug text-[#1A2E5A]"
          style={{ fontFamily: "var(--font-hand), cursive" }}
        >
          Every document you&apos;ll need someday.
          <br />
          Found in seconds.
        </p>
        <div className="relative mt-4 pl-2">
          <AppIdentity icon={ORIVELA_ICON} name="Orivela" />
        </div>
        <div className="relative mt-4 flex flex-wrap gap-2 pl-2">
          <a
            href="https://apps.apple.com/us/app/orivela/id6785050823"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#1D9E75] px-4 py-2 text-[13px] font-medium text-white"
          >
            App Store →
          </a>
          <a
            href="https://play.google.com/apps/testing/com.steffen.orivela.android"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#1D9E75] px-4 py-2 text-[13px] font-medium text-white"
          >
            Play Store (beta) →
          </a>
        </div>
        <p className="relative mt-2 pl-2 font-dm-sans text-[11px] text-[#1A1A1A]/50">
          Android is in closed testing — request access after tapping Play
          Store.
        </p>
        <TornEdge fill="#F5F0E8" />
      </article>
    </div>
  );
}

function KolibiCard() {
  const mono = { fontFamily: "var(--font-jetbrains-mono), monospace" };

  return (
    <div className="relative w-full max-w-[220px] rotate-[3deg]">
      <Tape className="left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-2 rotate-[6deg]" />
      <article className={`relative bg-white px-4 pb-5 pt-5 ${PAPER_SHADOW}`}>
        <ReceiptZigzag position="top" />
        <p
          className="text-center text-[11px] font-medium uppercase tracking-wider text-[#1A1A1A]"
          style={mono}
        >
          KOLIBI
        </p>
        <div className="my-2 border-t border-dashed border-[#1A1A1A]/30" />
        <p className="text-[11px] leading-snug text-[#333]" style={mono}>
          One photo. Know what&apos;s left for today.
        </p>
        <div className="my-2 border-t border-dashed border-[#1A1A1A]/30" />
        <div className="flex items-center gap-2">
          <img
            src={KOLIBI_ICON}
            alt=""
            className="h-[46px] w-[46px] rounded-[11px] border border-black/10"
          />
          <p className="text-[12px] font-medium text-[#1A1A1A]">Kolibi</p>
        </div>
        <div className="my-2 border-t border-dashed border-[#1A1A1A]/30" />
        <p
          className="flex justify-between gap-2 text-[10px] text-[#1A1A1A]"
          style={mono}
        >
          <span>STATUS</span>
          <span>COMING SOON</span>
        </p>
        <div className="my-2 border-t border-dashed border-[#1A1A1A]/30" />
        <a
          href="https://kolibi.app/"
          className="mt-3 inline-block rounded-full bg-[#EF9F27] px-5 py-2 font-dm-sans text-[13px] font-medium text-white"
        >
          Join the waitlist →
        </a>
        <ReceiptZigzag position="bottom" />
      </article>
    </div>
  );
}

function PeeranimoPolaroids() {
  const cards = [
    {
      src: "/peers/peeranimo_european_woman.jpg",
      color: "#7B5CF0",
      pos: "left-0 top-[10px] z-10 -rotate-[7deg] md:-rotate-[13deg]",
      showTape: false,
    },
    {
      src: "/peers/peeranimo_asia_woman.jpg",
      color: "#00C2A8",
      pos: "left-[40px] top-0 z-20 -rotate-[2deg] md:left-[51px]",
      showTape: true,
    },
    {
      src: "/peers/peeranimo_pepe_latino_woman.jpg",
      color: "#D85A30",
      pos: "left-[80px] top-[10px] z-30 rotate-[3deg] md:left-[102px] md:top-[14px] md:rotate-[9deg]",
      showTape: false,
    },
  ] as const;

  return (
    <div className="relative h-[132px]">
      {cards.map((card) => (
        <div
          key={card.src}
          className={`absolute w-[78px] bg-white p-[6px] pb-[18px] md:w-[84px] ${PAPER_SHADOW} ${card.pos}`}
        >
          {card.showTape && (
            <Tape className="-right-1 -top-1 z-20 rotate-[28deg]" />
          )}
          <div className="relative aspect-square overflow-hidden">
            <img
              src={card.src}
              alt=""
              className="h-full w-full object-cover grayscale contrast-[1.7] brightness-[1.15]"
            />
            <div
              className="absolute inset-0 mix-blend-color"
              style={{ background: card.color }}
            />
            <div
              className="absolute inset-0 opacity-25 mix-blend-screen"
              style={{ background: "#F5F0E8" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function PeeranimoCard() {
  return (
    <div className="relative w-full max-w-[240px] -rotate-[3deg] md:-rotate-[7deg]">
      <div className="absolute -right-2 -top-2 z-40 md:-right-4 md:-top-4">
        <StatusStamp lines={["PEERANIMO", "LIVE", "ON THE WEB"]} />
      </div>
      <PeeranimoPolaroids />
      <p
        className="mt-1 max-w-[210px] -rotate-[2deg] text-center text-[15px] leading-snug text-[#1A1A1A]"
        style={{ fontFamily: "var(--font-hand), cursive" }}
      >
        People who get it.
        <br />
        Without the endless scroll.
      </p>
      <div className="mt-2 flex justify-center">
        <AppIdentity icon={PEERANIMO_ICON} name="Peeranimo" />
      </div>
      <div className="mt-3 flex justify-center">
        <a
          href="https://peeranimo.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-[#1D9E75] px-5 py-2 font-dm-sans text-[13px] font-medium text-white"
        >
          Try it now →
        </a>
      </div>
    </div>
  );
}

export default function AppsPage() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-[#F5F0E8]">
      {/* Background scraps */}
      <svg
        className="pointer-events-none absolute top-[18%] left-[-4%] z-0 h-[42%] w-[38%] -rotate-[4deg] md:top-[22%] md:left-0 md:h-[50%] md:w-[28%]"
        viewBox="0 0 280 340"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="#7B5CF0"
          d="M36 62 L62 54 L88 65 L116 55 L146 66 L176 56 L204 67 L232 57 L238 300 L210 310 L182 300 L154 311 L124 301 L96 312 L66 302 L40 312 Z"
        />
      </svg>
      <svg
        className="pointer-events-none absolute right-[-2%] bottom-[8%] z-0 h-[28%] w-[42%] rotate-[3deg] md:right-[4%] md:bottom-[6%] md:h-[32%] md:w-[24%]"
        viewBox="0 0 260 280"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="#00C2A8"
          d="M28 48 L54 40 L82 52 L110 42 L140 54 L168 44 L196 55 L224 46 L232 250 L204 262 L176 252 L148 263 L118 253 L90 264 L60 254 L34 265 Z"
        />
      </svg>

      <header className="relative z-10 px-6 pt-10 pb-6 md:px-12 md:pt-16">
        <h1 className="font-syne text-[28px] font-extrabold leading-tight text-[#1A1A1A] md:text-[36px]">
          Apps — built by Steffen.
        </h1>
        <p className="mt-2 font-dm-sans text-[15px] text-[#1A1A1A]/70 md:text-[17px]">
          Three products. Three different problems.
        </p>
      </header>

      <section className="relative z-10 flex flex-1 flex-col items-center gap-14 px-6 pb-10 md:flex-row md:items-start md:justify-center md:gap-10 md:px-12 md:pb-12 lg:gap-14">
        <div className="w-full max-w-[300px] md:mt-0 md:w-auto">
          <OrivelaCard />
        </div>
        <div className="w-full max-w-[220px] md:mt-8 md:w-auto">
          <KolibiCard />
        </div>
        <div className="w-full max-w-[240px] md:mt-3 md:w-auto">
          <PeeranimoCard />
        </div>
      </section>

      <footer className="relative z-10 flex flex-col items-center justify-between gap-4 px-6 pb-8 md:flex-row md:px-12 md:pb-10">
        <a
          href="/#room-02"
          className="font-dm-sans text-[14px] text-[#1A1A1A]/60 underline underline-offset-4 hover:text-[#1A1A1A]"
        >
          Curious who&apos;s behind these? → About Steffen
        </a>
        <a
          href="/"
          className="rounded-full border border-[#1A1A1A] px-5 py-2 font-dm-sans text-[14px] font-medium text-[#1A1A1A] transition-colors hover:bg-[#1A1A1A] hover:text-[#F5F0E8]"
        >
          ← Home
        </a>
      </footer>
    </main>
  );
}
