export const ERDI_MAGENTA = "#FC2E70";

export type AppSlug =
  | "kolibi"
  | "getabite"
  | "carpincho"
  | "peeranimo"
  | "orivela"
  | "erdi"
  | "findmystack"
  | "erdibuilds"
  | "applento"
  | "getabite1"
  | "the";

/** Apps that have a home-card illustration in components/apps/visuals. */
export type VisualSlug = AppSlug;

/** Per-app branding of the home card. */
export type CardTheme = {
  /** Background of the card's text area (colour or CSS gradient). */
  surface: string;
  /** Name + hook. */
  ink: string;
  /** Platform line, info icon. */
  muted: string;
  /** Button background. */
  accent: string;
  /** Button text. */
  onAccent: string;
  hookFont: "serif" | "serif-italic" | "sans" | "mono" | "hand";
  hookWeight?: 600 | 700 | 800;
  hookUppercase?: boolean;
};

export type AppEntry = {
  slug: AppSlug;
  name: string;
  platform: string;
  /** Dream-outcome line on the home card (at most two short sentences). */
  hook: string;
  /** Longer text, shown in the info popup. */
  body: string;
  href: string;
  logo: string;
  /** Optional: without it the home card renders text-only, no illustration. */
  visual?: VisualSlug;
  badge?: string;
  /** Stamp word on the home card. Defaults to "LIVE". */
  stamp?: string;
  /** Button text on the home card. Defaults to ctaLabel(href). */
  cta?: string;
  /** Optional brand wordmark; replaces icon + name on the home card. Height in px. */
  wordmark?: { src: string; height: number };
  /** "closed" apps are archived and no longer linked. Defaults to "live". */
  status?: "live" | "closed";
  /** Screenshot for the card's image area when there is no visual. */
  screenshot?: string;
  theme: CardTheme;
};

export type AppSection = {
  eyebrow: string;
  headline: string;
  subline: string;
  apps: AppEntry[];
};

/** App Store / Play Store links get the "Get the app" CTA; everything else gets "Open". */
export function isStoreHref(href: string) {
  return href.includes("apps.apple.com") || href.includes("play.google.com");
}

export function ctaLabel(href: string) {
  return isStoreHref(href) ? "Get the app" : "Open";
}

export function stampNote(href: string) {
  return isStoreHref(href) ? "ON THE APP STORE" : "ON THE WEB";
}

export const APP_SECTIONS: AppSection[] = [
  {
    eyebrow: "LANGUAGE & TRAINING",
    headline: "Two apps people pay for.",
    subline: "Spanish that sounds like you live there. A coach that knows what's next.",
    apps: [
      {
        slug: "carpincho",
        name: "Carpincho",
        platform: "iOS",
        hook: "Learn Spanish by doomscrolling.",
        theme: { surface: "#FFF3B8", ink: "#1A1A1A", muted: "rgba(26,26,26,0.55)", accent: "#EC1E7E", onAccent: "#FFFFFF", hookFont: "sans", hookWeight: 800 },
        body: "Short clips with live subtitles teach you real Spanish while you scroll. A route of over 180 places takes you through your day, from the café to talking about your family. Say it out loud and hear right away if it lands, in the Spanish of Argentina, Latin America or Spain.",
        href: "https://apps.apple.com/de/app/carpincho-learn-less-say-more/id6795982399",
        logo: "/brand-2026/app-logo-carpincho-2026.png",
        visual: "carpincho",
      },
      {
        slug: "kolibi",
        name: "Kolibi",
        platform: "iOS",
        hook: "Your calories change with every workout.",
        theme: { surface: "#EEF0FF", ink: "#1A1A3A", muted: "rgba(26,26,58,0.55)", accent: "#4F52D9", onAccent: "#FFFFFF", hookFont: "sans", hookWeight: 700 },
        body: "Kolibi builds your bodyweight training plan, adjusts your food to every session and tells you what's next every day. One photo logs your meal, and your coach moves you up a level when you are ready. From your first push-up to your first pull-up.",
        href: "https://apps.apple.com/us/app/kolibi-calories-workouts/id6790129149",
        logo: "/brand-2026/app-logo-kolibi-2026.png",
        visual: "kolibi",
      },
    ],
  },
  {
    eyebrow: "FOR FOUNDERS",
    headline: "Two tools for running and building a business.",
    subline: "The morning that runs itself. The developer who has built it before.",
    apps: [
      {
        slug: "erdi",
        name: "Erdi",
        platform: "WEB · IOS",
        hook: "Your businesses in three minutes every morning.",
        theme: { surface: "#FFF5F8", ink: "#1A1A1A", muted: "rgba(26,26,26,0.55)", accent: "#FC2E70", onAccent: "#FFFFFF", hookFont: "serif-italic", hookWeight: 600 },
        body: "Every morning Erdi tells you in three minutes what moved, why, and the one thing that needs you today. Your inbox sorts itself and replies wait in your tone, one tap sends them. When checkout drops or installs fall, you know right away, with the likely cause and a fix to approve.",
        href: "https://erdiknows.com",
        logo: "/erdi-icon.svg",
        wordmark: { src: "/brand-2026/wordmark-erdi-2026.svg", height: 56 },
        visual: "erdi",
        cta: "Start free trial",
      },
      {
        slug: "erdibuilds",
        name: "ErdiBuilds",
        platform: "WEB",
        hook: "Get matched with the right developer.",
        theme: { surface: "#F1EFFE", ink: "#17133A", muted: "rgba(23,19,58,0.55)", accent: "#5B4CF0", onAccent: "#FFFFFF", hookFont: "sans", hookWeight: 700 },
        body: "Your idea, live and in people's hands. Pick from verified developers who have already built something like yours. You pay one milestone at a time, and the money is held until you approve the work.",
        href: "https://erdibuilds.app",
        logo: "/brand-2026/app-logo-erdibuilds-2026.png",
        wordmark: { src: "/brand-2026/wordmark-erdibuilds-2026.svg", height: 36 },
        visual: "erdibuilds",
        cta: "Start your project",
      },
    ],
  },
  {
    eyebrow: "NOTES & PEOPLE",
    headline: "Two apps for what's on your mind.",
    subline: "The note you'll want later. People who get it.",
    apps: [
      {
        slug: "orivela",
        name: "Orivela",
        platform: "iOS",
        hook: "Ask your notes and documents anything.",
        theme: { surface: "#0E0B1A", ink: "#F5F0E8", muted: "rgba(245,240,232,0.6)", accent: "#A78BFA", onAccent: "#0E0B1A", hookFont: "serif", hookWeight: 600 },
        body: "A thought on the walk home, an insurance PDF, the contract someone wants today. Say it, type it or snap it, and Orivela files it with the right title and labels. Ask in plain language and it comes straight back.",
        href: "https://apps.apple.com/app/orivela-life-admin-vault/id6785050823",
        logo: "/app-logo-orivela.jpg",
        visual: "orivela",
      },
      {
        slug: "peeranimo",
        name: "Peeranimo",
        platform: "WEB",
        hook: "Meet people working on the same thing as you.",
        theme: { surface: "#F3F1FD", ink: "#1E1A3D", muted: "rgba(30,26,61,0.55)", accent: "#7C6FE5", onAccent: "#FFFFFF", hookFont: "serif", hookWeight: 600 },
        body: "Peeranimo matched you with people working on the same thing you were. You described where you were stuck, and the conversation started with someone who had been there.",
        href: "",
        logo: "/app-logo-peeranimo.webp",
        visual: "peeranimo",
        status: "closed",
      },
    ],
  },
  {
    eyebrow: "FREE TO START",
    headline: "Two free tools for the first step.",
    subline: "The stack that fits your idea. The dish that fits you.",
    apps: [
      {
        slug: "findmystack",
        name: "Find My Stack",
        platform: "WEB",
        hook: "Find out what to build your app with in two minutes.",
        theme: { surface: "#0B1020", ink: "#E8EEFB", muted: "rgba(232,238,251,0.6)", accent: "#3D6FE0", onAccent: "#FFFFFF", hookFont: "mono", hookWeight: 600 },
        body: "Answer a few questions about your idea and get one clear, honest recommendation.",
        href: "https://findmystack.app",
        logo: "/brand-2026/app-logo-findmystack-2026.png?v=2",
        visual: "findmystack",
        stamp: "LIVE",
        cta: "Take the assessment",
      },
      {
        slug: "getabite",
        name: "GetaBite 2.0",
        platform: "Web",
        hook: "See the vegan dishes near you before you go out.",
        theme: { surface: "#FFF0F3", ink: "#2A1018", muted: "rgba(42,16,24,0.55)", accent: "#D6336C", onAccent: "#FFFFFF", hookFont: "sans", hookWeight: 700 },
        body: "GetaBite mapped vegan and vegetarian places together with the dishes they actually served, built from menus people photographed on the spot. The scanner covered the supermarket shelf for the rest of the week.",
        href: "",
        logo: "/icon-getabite.png",
        visual: "getabite",
        status: "closed",
      },
    ],
  },
];

/** Closed products that never had a home-page section. */
const ARCHIVE_ONLY: AppEntry[] = [
  {
    slug: "applento",
    name: "Applento",
    platform: "Property applications · Web",
    hook: "Get complete rental applications in one dashboard.",
    theme: { surface: "linear-gradient(180deg, #E9E3FD 0%, #FFFFFF 100%)", ink: "#14102E", muted: "rgba(20,16,46,0.55)", accent: "#6D28D9", onAccent: "#FFFFFF", hookFont: "sans", hookWeight: 800 },
    body: "Agents listed a flat, shared one link and received only complete applications, all in the same format. Every applicant sat side by side in one dashboard, one click accepted or declined, and each applicant got a professional reply automatically.",
    href: "",
    logo: "/logos/applento.png",
    visual: "applento",
    status: "closed",
  },
  {
    slug: "getabite1",
    name: "GetaBite 1.0",
    platform: "Restaurant SaaS · Web",
    hook: "Give your restaurant a website with ordering and bookings.",
    theme: { surface: "#F5EFE6", ink: "#111111", muted: "rgba(17,17,17,0.55)", accent: "#111111", onAccent: "#FFFFFF", hookFont: "sans", hookWeight: 800 },
    body: "Restaurants signed up on their own and got a website with their menu, online ordering and table reservations, all run from one dashboard. Guests searched for the dish they craved, with vegan and vegetarian marked. AI read printed menus straight onto the platform.",
    href: "",
    logo: "/logos/getabite-1.png",
    visual: "getabite1",
    status: "closed",
  },
  {
    slug: "the",
    name: "THE",
    platform: "The Honest Experience · Web",
    hook: "Read reviews from people who actually bought it.",
    theme: { surface: "#FF403F", ink: "#FFFFFF", muted: "rgba(255,255,255,0.75)", accent: "#FFFFFF", onAccent: "#FF403F", hookFont: "sans", hookWeight: 800, hookUppercase: true },
    body: "THE was a review platform built on real experiences. Every review needed proof of purchase and walked through seven questions, from delivery and packaging to price and performance, and the overall score came from all of them. Reviewers earned badges and helpful votes, and brands got a profile they could claim.",
    href: "",
    logo: "/logos/the.png",
    visual: "the",
    status: "closed",
  },
];

const ALL_APPS: AppEntry[] = [
  ...APP_SECTIONS.flatMap((section) => section.apps),
  ...ARCHIVE_ONLY,
];

export function isClosed(app: { status?: "live" | "closed" }) {
  return app.status === "closed";
}

/** Home grid, dock and /apps order: live apps in APP_SECTIONS order, then the
 *  closed ones (Peeranimo, GetaBite 2.0, Applento, GetaBite 1.0, THE). */
export const APPS: AppEntry[] = [
  ...ALL_APPS.filter((app) => !isClosed(app)),
  ...ALL_APPS.filter(isClosed),
];
