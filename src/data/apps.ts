export const ERDI_MAGENTA = "#FC2E70";

export type AppSlug =
  | "kolibi"
  | "getabite"
  | "carpincho"
  | "peeranimo"
  | "orivela"
  | "erdi"
  | "findmystack"
  | "erdibuilds";

/** Apps that have a home-card illustration in components/apps/visuals. */
export type VisualSlug = AppSlug;

export type AppEntry = {
  slug: AppSlug;
  name: string;
  platform: string;
  hook: string;
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
        hook: "Walk in like you live here.",
        body: "Short clips with live subtitles teach you real Spanish while you scroll. A route of over 180 places takes you through your day, from the café to talking about your family. Say it out loud and hear right away if it lands, in the Spanish of Argentina, Latin America or Spain.",
        href: "https://apps.apple.com/de/app/carpincho-learn-less-say-more/id6795982399",
        logo: "/brand-2026/app-logo-carpincho-2026.png",
        visual: "carpincho",
      },
      {
        slug: "kolibi",
        name: "Kolibi",
        platform: "iOS",
        hook: "Your coach. Always with you.",
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
        hook: "Everything runs. More time for everything else.",
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
        hook: "Build what you imagine.",
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
        hook: "Out of your head. Into one place.",
        body: "A thought on the walk home, an insurance PDF, the contract someone wants today. Say it, type it or snap it, and Orivela files it with the right title and labels. Ask in plain language and it comes straight back.",
        href: "https://apps.apple.com/app/orivela-life-admin-vault/id6785050823",
        logo: "/app-logo-orivela.jpg",
        visual: "orivela",
      },
      {
        slug: "peeranimo",
        name: "Peeranimo",
        platform: "Social platform · Web",
        hook: "Find people who get it.",
        body: "Peeranimo matches you with people working on the same thing you are. You describe where you are stuck, and the conversation starts with someone who has been there.",
        href: "https://peeranimo.app/",
        logo: "/app-logo-peeranimo.webp",
        visual: "peeranimo",
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
        hook: "Build your app right the first time.",
        body: "Answer a few questions about your idea and get one clear, honest recommendation.",
        href: "https://findmystack.app",
        logo: "/brand-2026/app-logo-findmystack-2026.png?v=2",
        visual: "findmystack",
        stamp: "LIVE",
        cta: "Take the assessment",
      },
      {
        slug: "getabite",
        name: "GetaBite",
        platform: "Web",
        hook: "Know where you're going and what you'll order before you leave the house.",
        body: "GetaBite maps vegan and vegetarian places together with the dishes they actually serve, built from menus people photograph on the spot. The scanner covers the supermarket shelf for the rest of the week. You walk in knowing what fits and what to ask about.",
        href: "/go/getabite",
        logo: "/icon-getabite.png",
        visual: "getabite",
      },
    ],
  },
];

export const APPS: AppEntry[] = APP_SECTIONS.flatMap((section) => section.apps);
