"use client";

const scraps = [
  {
    src: "/scraps/trikot.png",
    alt: "VfB Stuttgart shirt",
    pos: "top-[6%] right-[10%] w-28 rotate-6",
    hideOnMobile: false,
  },
  {
    src: "/scraps/discokugel.png",
    alt: "disco ball",
    pos: "top-[14%] left-[38%] w-20 -rotate-8",
    hideOnMobile: true,
  },
  {
    src: "/scraps/clubmate.png",
    alt: "Club-Mate bottle",
    pos: "bottom-[22%] left-[30%] w-16 rotate-4",
    hideOnMobile: true,
  },
  {
    src: "/scraps/mate.png",
    alt: "mate gourd",
    pos: "bottom-[18%] left-[42%] w-20 -rotate-5",
    hideOnMobile: false,
  },
  {
    src: "/scraps/fernsehturm.png",
    alt: "Fernsehturm",
    pos: "top-[30%] right-[6%] w-14 rotate-3",
    hideOnMobile: false,
  },
  {
    src: "/scraps/wand.png",
    alt: "painted wall piece",
    pos: "bottom-[8%] right-[24%] w-24 -rotate-6",
    hideOnMobile: true,
  },
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function HeroCollage() {
  return (
    <section
      id="room-01"
      className="hero-collage relative min-h-screen overflow-hidden"
      style={{ background: "#F5F0E8" }}
    >
      {/* Torn paper planes — back layer */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <svg
          className="absolute left-[-8%] top-[8%] h-[70%] w-[55%] -rotate-[4deg] opacity-90"
          viewBox="0 0 280 340"
          preserveAspectRatio="none"
        >
          <path
            fill="#7B5CF0"
            d="M36 62 L62 54 L88 65 L116 55 L146 66 L176 56 L204 67 L232 57 L238 300 L210 310 L182 300 L154 311 L124 301 L96 312 L66 302 L40 312 Z"
          />
        </svg>

        <svg
          className="absolute bottom-[-6%] right-[-4%] h-[48%] w-[42%] rotate-[3deg] opacity-90"
          viewBox="0 0 260 280"
          preserveAspectRatio="none"
        >
          <path
            fill="#00C2A8"
            d="M28 48 L54 40 L82 52 L110 42 L140 54 L168 44 L196 55 L224 46 L232 250 L204 262 L176 252 L148 263 L118 253 L90 264 L60 254 L34 265 Z"
          />
        </svg>

        <svg
          className="absolute right-[4%] top-[-2%] h-[28%] w-[26%] -rotate-[7deg] opacity-95"
          viewBox="0 0 200 180"
          preserveAspectRatio="none"
        >
          <path
            fill="#F4D35E"
            d="M22 34 L46 26 L72 38 L98 28 L124 39 L150 29 L172 40 L178 150 L152 160 L126 150 L100 161 L74 151 L48 162 L26 152 Z"
          />
        </svg>
      </div>

      <div className="hero-collage-inner relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-0 pt-16 md:block md:px-10 md:pt-20">
        {/* Steffen — central figure */}
        <img
          src="/me-steffen.png"
          alt="Steffen"
          className="hero-collage-steffen relative z-10 mx-auto mt-auto h-[55vh] w-auto object-contain object-bottom md:float-left md:mx-0 md:mt-0 md:h-[70vh] md:max-w-[46%]"
        />

        {/* Floating scraps */}
        {scraps.map((scrap) => (
          <img
            key={scrap.src}
            src={scrap.src}
            alt={scrap.alt}
            className={`hero-collage-scrap absolute z-20 object-contain drop-shadow-md ${scrap.pos} ${
              scrap.hideOnMobile ? "hidden md:block" : "opacity-80 md:opacity-100"
            }`}
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        ))}

        {/* Text + CTAs */}
        <div className="hero-collage-copy relative z-30 mx-auto mt-6 max-w-md pb-16 text-center md:mx-0 md:mt-[12vh] md:max-w-lg md:pb-24 md:pl-6 md:text-left">
          <h1
            className="font-serif text-4xl leading-[1.1] tracking-tight text-[#1A1A1A] sm:text-5xl md:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
          >
            I build apps
            <br />
            nobody asked for.
          </h1>

          <p className="mt-5 text-base leading-relaxed text-[#1A1A1A]/opacity-75 sm:text-lg">
            Three so far. No users yet. I also build for other people — that part
            pays.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <button
              type="button"
              onClick={() => scrollToId("app-scraps")}
              className="rounded-full bg-[#1A1A1A] px-6 py-3 text-sm font-medium text-[#F5F0E8] transition-opacity hover:opacity-90"
            >
              What I build
            </button>
            <button
              type="button"
              onClick={() => scrollToId("room-05")}
              className="rounded-full border-[1.5px] border-[#1A1A1A] bg-transparent px-6 py-3 text-sm font-medium text-[#1A1A1A] transition-colors hover:bg-[#1A1A1A]/10"
            >
              Work with me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
