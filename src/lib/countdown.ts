export const TARGET_DATE = "2026-12-31T23:59:59+01:00";

export const GOAL_EUR = 3000;

/** Weekly defaults. Override without a code change via env. */
export const monthlyRevenue = 0;
export const subscriberCount = 0;

export const DAYS_COVER_GOAL = 30;
const EUR_PER_COVERED_DAY = 100;

function envInt(name: string, fallback: number) {
  const raw = process.env[name];
  if (raw == null || raw.trim() === "") return fallback;
  const n = Number(raw);
  if (!Number.isFinite(n) || n < 0) return fallback;
  return n;
}

/** COUNTDOWN_MONTHLY_REVENUE and COUNTDOWN_SUBSCRIBER_COUNT override the defaults. */
export function getCountdownStats() {
  return {
    monthlyRevenue: envInt("COUNTDOWN_MONTHLY_REVENUE", monthlyRevenue),
    subscriberCount: envInt("COUNTDOWN_SUBSCRIBER_COUNT", subscriberCount),
  };
}

export function daysCoveredFromRevenue(revenue: number) {
  return Math.min(DAYS_COVER_GOAL, Math.floor(revenue / EUR_PER_COVERED_DAY));
}

export const INSTAGRAM_URL = "https://www.instagram.com/steffendoesthings";
export const PITCH_URL = "/#pitch";

export type ChallengeApp = {
  name: string;
  description: string;
  logo: string;
  href: string | null;
};

export const CHALLENGE_APPS: ChallengeApp[] = [
  {
    name: "Kolibi",
    description:
      "Photograph your plate and the calories fill themselves in. Subscription, live on iOS.",
    logo: "/app-logo-kolibi.jpg",
    href: "https://apps.apple.com/us/app/kolibi-calories-by-photo/id6790129149",
  },
  {
    name: "ErdiKnows",
    description:
      "Releases, price changes and ad spend on one timeline, next to the customers that followed. Web, 14-day trial.",
    logo: "/erdiknows.png",
    href: "https://erdiknows.com/",
  },
  {
    name: "Carpincho",
    description:
      "Speak Rioplatense Spanish from the first lesson and get graded honestly. Subscription, iOS.",
    logo: "/app-logo-carpincho.jpg",
    href: "https://apps.apple.com/us/app/carpi-speak-learn-spanish/id6795982399",
  },
  {
    name: "Orivela",
    description:
      "Every document in one place, asked for in plain language. Free, iOS and Android beta.",
    logo: "/app-logo-orivela.jpg",
    href: "https://www.orivela.app/",
  },
  {
    name: "Peeranimo",
    description:
      "Peers in the exact same chapter of life, matched to you. Free, live on the web.",
    logo: "/app-logo-peeranimo.webp",
    href: "https://peeranimo.app/",
  },
  {
    name: "GetaBite",
    description:
      "Know what you'll order before you leave the house. Vegan and vegetarian places with the dishes they actually serve. Free, on the web.",
    logo: "/getabite-mark-128.png",
    href: "/go/getabite",
  },
];
