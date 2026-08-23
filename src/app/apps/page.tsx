import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Apps by Steffen Giebler — Orivela, Kolibi, Peeranimo, Carpincho",
  description:
    "Four apps built solo in Berlin: a document vault, an AI calorie tracker, a peer-matching platform, and a Spanish course. Live on iOS, Android and web.",
  alternates: {
    canonical: "/apps",
  },
  openGraph: {
    title: "Apps by Steffen Giebler — Orivela, Kolibi, Peeranimo, Carpincho",
    description:
      "Four apps built solo in Berlin: a document vault, an AI calorie tracker, a peer-matching platform, and a Spanish course. Live on iOS, Android and web.",
    url: "https://52n34s.app/apps",
    type: "website",
  },
};

const ORIVELA_ICON = "/app-logo-orivela.jpg";
const KOLIBI_ICON = "/app-logo-kolibi.jpg";
const PEERANIMO_ICON = "/app-logo-peeranimo.webp";
const CARPINCHO_ICON = "/app-logo-carpincho.jpg";

const APP_STATUS: Record<string, [string, string, string]> = {
  orivela: ["ORIVELA", "LIVE", "ON THE APP STORE"],
  kolibi: ["KOLIBI", "LIVE", "ON THE APP STORE"],
  peeranimo: ["PEERANIMO", "LIVE", "ON THE WEB"],
  carpincho: ["CARPINCHO", "SOON", "JOIN WAITLIST"],
};

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
        alt={`${name} app icon`}
        className="app-store-icon app-store-icon--lg"
      />
      <p className="text-[15px] font-medium text-[#1A1A1A]">{name}</p>
    </div>
  );
}

function OrivelaCard() {
  return (
    <div className="relative w-full max-w-[300px] -rotate-[3deg] md:-rotate-[3deg]">
      <div className="absolute -right-4 -top-4 z-40">
        <StatusStamp lines={APP_STATUS.orivela} />
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
          className="relative w-[78%] py-0 pl-2 pr-4 text-[20px] leading-snug text-[#1A2E5A]"
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
        <p className="relative mt-2 pl-2 font-inter text-[11px] text-[#1A1A1A]/50">
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
    <div className="relative w-full max-w-[300px] rotate-[3deg]">
      <div className="absolute -right-4 -top-4 z-40">
        <StatusStamp lines={APP_STATUS.kolibi} />
      </div>
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
        <div className="space-y-0.5 text-[10px] text-[#1A1A1A]" style={mono}>
          <div className="flex justify-between gap-2">
            <span>BOWL &amp; EGGS</span>
            <span>438</span>
          </div>
          <div className="flex justify-between gap-2">
            <span>FLAT WHITE</span>
            <span>84</span>
          </div>
        </div>
        <div className="my-2 border-t border-dashed border-[#1A1A1A]/30" />
        <p className="text-[11px] font-medium text-[#1A1A1A]" style={mono}>
          <span className="flex justify-between gap-2">
            <span>REMAINING</span>
            <span>412 kcal</span>
          </span>
        </p>
        <div className="my-2 border-t border-dashed border-[#1A1A1A]/30" />
        <div className="flex items-center gap-2">
          <img
            src={KOLIBI_ICON}
            alt="Kolibi app icon"
            className="app-store-icon app-store-icon--lg"
          />
          <p className="text-[12px] font-medium text-[#1A1A1A]">Kolibi</p>
        </div>
        <a
          href="https://apps.apple.com/us/app/kolibi/id6790129149"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block rounded-full bg-[#1D9E75] px-5 py-2 font-inter text-[13px] font-medium text-white"
        >
          Get the app →
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
      alt: "Peer portrait — woman with light brown hair",
      color: "#7B5CF0",
      pos: "left-0 top-[10px] z-10 -rotate-[7deg] md:-rotate-[13deg]",
      showTape: false,
    },
    {
      src: "/peers/peeranimo_asia_woman.jpg",
      alt: "Peer portrait — woman with dark hair",
      color: "#00C2A8",
      pos: "left-[40px] top-0 z-20 -rotate-[2deg] md:left-[51px]",
      showTape: true,
    },
    {
      src: "/peers/peeranimo_pepe_latino_woman.jpg",
      alt: "Peer portrait — woman with curly hair",
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
              alt={card.alt}
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
        <StatusStamp lines={APP_STATUS.peeranimo} />
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
          className="inline-block rounded-full bg-[#1D9E75] px-5 py-2 font-inter text-[13px] font-medium text-white"
        >
          Try it now →
        </a>
      </div>
    </div>
  );
}

function CarpinchoVariantFlags({ className = "" }: { className?: string }) {
  const flags = [
    { emoji: "🇦🇷", label: "Argentina" },
    { emoji: "🇺🇾", label: "Uruguay" },
    { emoji: "🇲🇽", label: "Mexico" },
    { emoji: "🇨🇴", label: "Colombia" },
    { emoji: "🇵🇪", label: "Peru" },
    { emoji: "🇪🇸", label: "Spain" },
  ] as const;

  return (
    <div
      className={`flex items-center gap-1.5 ${className}`}
      aria-label="Language variants: Rioplatense, Neutral Latin America, Spain"
    >
      {flags.map((flag) => (
        <span
          key={flag.label}
          className="text-[14px] leading-none"
          role="img"
          aria-label={flag.label}
        >
          {flag.emoji}
        </span>
      ))}
    </div>
  );
}

function CarpinchoCard() {
  return (
    <div className="relative w-full max-w-[300px] rotate-[4deg]">
      <div className="absolute -right-4 -top-4 z-40">
        <StatusStamp lines={APP_STATUS.carpincho} />
      </div>
      <Tape className="-left-2 -top-2 z-20 -rotate-[22deg]" />
      <article
        className={`relative bg-[#FFFDF5] px-5 pb-6 pt-5 ${PAPER_SHADOW}`}
      >
        <p
          className="text-[20px] leading-snug text-[#D6156F]"
          style={{ fontFamily: "var(--font-hand), cursive" }}
        >
          Don&apos;t be a tourist.
        </p>
        <p
          className="mt-1 text-[17px] leading-snug text-[#D6156F]"
          style={{ fontFamily: "var(--font-hand), cursive" }}
        >
          1,000 words is enough.
        </p>
        <div className="mt-4 flex items-center gap-2.5">
          <img
            src={CARPINCHO_ICON}
            alt="Carpincho app icon"
            className="app-store-icon app-store-icon--lg"
          />
          <div className="leading-tight">
            <p className="text-[15px] font-medium text-[#1A1A1A]">Carpincho</p>
            <p className="text-[12px] text-[#1A1A1A]/55">
              Spanish with the least effort possible
            </p>
          </div>
        </div>
        <CarpinchoVariantFlags className="mt-2" />
        <a
          href="https://apps.apple.com/de/app/carpincho-learn-less-say-more/id6795982399"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block rounded-full bg-[#D6156F] px-5 py-2 font-inter text-[13px] font-medium text-white"
        >
          Get the app →
        </a>
      </article>
    </div>
  );
}

export default function AppsPage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Apps by Steffen Giebler",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: { "@id": "https://52n34s.app/#orivela" },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: { "@id": "https://52n34s.app/#kolibi" },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: { "@id": "https://52n34s.app/#peeranimo" },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: { "@id": "https://52n34s.app/#carpincho" },
      },
    ],
  };

  return (
    <main className="relative flex min-h-screen flex-col bg-[#F5F0E8]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />
      <header className="px-6 pt-10 pb-16 text-center md:px-12 md:pt-16">
        <h1
          className="text-[32px] leading-[1.1] tracking-tight text-[#1A1A1A] md:text-[42px] lg:text-[48px]"
          style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
        >
          Apps — built by Steffen.
        </h1>
        <p className="mx-auto mt-2 max-w-[520px] text-[15px] leading-[1.6] text-[#1A1A1A]/75 md:text-[16px] lg:mt-6 lg:text-[17px]">
          Five products. Five different problems.
        </p>
      </header>

      <section className="mx-auto grid max-w-[1100px] flex-1 grid-cols-1 gap-16 px-6 py-16 md:grid-cols-2 md:gap-x-20 md:gap-y-24">
        <div className="flex justify-center">
          <KolibiCard />
        </div>
        <div className="flex justify-center">
          <CarpinchoCard />
        </div>
        <div className="flex justify-center">
          <OrivelaCard />
        </div>
        <div className="flex justify-center">
          <PeeranimoCard />
        </div>
      </section>

      <footer className="flex flex-col items-center gap-4 px-6 pt-16 pb-8 md:px-12 md:pb-10">
        <div className="flex flex-col items-center gap-2 md:flex-row md:gap-6">
          <Link
            href="/"
            className="text-[14px] text-[#1A1A1A]/60 underline underline-offset-4 hover:text-[#1A1A1A]"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Curious who&apos;s behind these? → About Steffen
          </Link>
          <Link
            href="/#room-05"
            className="text-[14px] text-[#1A1A1A]/60 underline underline-offset-4 hover:text-[#1A1A1A]"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Have your own idea? → Work with Steffen
          </Link>
        </div>
        <Link
          href="/"
          className="rounded-full border border-[#1A1A1A] px-5 py-2 text-[14px] font-medium text-[#1A1A1A] transition-colors hover:bg-[#1A1A1A] hover:text-[#F5F0E8]"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          ← Home
        </Link>
      </footer>
    </main>
  );
}
