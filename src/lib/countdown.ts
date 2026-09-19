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
  id: string;
  name: string;
  description: string;
  /** Small mono platform tag, e.g. "IOS", "WEB", "IOS · ANDROID". */
  platform: string;
  logo: string;
  href: string | null;
};

export const CHALLENGE_APPS: ChallengeApp[] = [
  {
    id: "kolibi",
    name: "Kolibi",
    description:
      "Photograph your plate and the calories fill themselves in. Subscription, live on iOS.",
    platform: "IOS",
    logo: "/app-logo-kolibi.jpg",
    href: "https://apps.apple.com/us/app/kolibi-calories-by-photo/id6790129149",
  },
  {
    id: "erdiknows",
    name: "ErdiKnows",
    description:
      "Releases, price changes and ad spend on one timeline, next to the customers that followed. Web, 14-day trial.",
    platform: "WEB",
    logo: "/erdiknows.png",
    href: "https://erdiknows.com/",
  },
  {
    id: "carpincho",
    name: "Carpincho",
    description:
      "Speak Rioplatense Spanish from the first lesson and get graded honestly. Subscription, iOS.",
    platform: "IOS",
    logo: "/app-logo-carpincho.jpg",
    href: "https://apps.apple.com/us/app/carpi-speak-learn-spanish/id6795982399",
  },
  {
    id: "orivela",
    name: "Orivela",
    description:
      "Notes and records in one place, back in seconds when you ask.",
    platform: "IOS",
    logo: "/app-logo-orivela.jpg",
    href: "https://apps.apple.com/app/orivela-life-admin-vault/id6785050823",
  },
  {
    id: "peeranimo",
    name: "Peeranimo",
    description:
      "Peers in the exact same chapter of life, matched to you. Free, live on the web.",
    platform: "WEB",
    logo: "/app-logo-peeranimo.webp",
    href: "https://peeranimo.app/",
  },
  {
    id: "getabite",
    name: "GetaBite",
    description:
      "Know what you'll order before you leave the house. Vegan and vegetarian places with the dishes they actually serve. Free, on the web.",
    platform: "WEB",
    logo: "/getabite-mark-128.png",
    href: "/go/getabite",
  },
];

/** First sentence of a one-liner, used as the short benefit line in the featured block. */
export function firstSentence(text: string) {
  const match = text.match(/^[^.!?]+[.!?]/);
  return match ? match[0] : text;
}
