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
  comingSoon?: boolean;
};

export const CHALLENGE_APPS: ChallengeApp[] = [
  {
    name: "Kolibi",
    description:
      "Photograph your plate, get the calories. No database search, no typing. Subscription, live on iOS.",
    logo: "/app-logo-kolibi.jpg",
    href: "https://apps.apple.com/us/app/kolibi-calories-by-photo/id6790129149",
  },
  {
    name: "ErdiKnows",
    description:
      "Ad spend, releases and price changes on one timeline, next to the customers that followed. For developers running more than one product. Web, 14-day trial.",
    logo: "/erdiknows.png",
    href: "https://erdiknows.com/",
  },
  {
    name: "Carpincho",
    description:
      "A Spanish learning app built around one number: a thousand words is enough to hold a real conversation. You speak, it listens and grades you honestly. Rioplatense, neutral Latin American or Spain.",
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
      "Peer matching for people who want to be understood without explaining first. Live on the web.",
    logo: "/app-logo-peeranimo.webp",
    href: "https://peeranimo.app/",
  },
  {
    name: "GetaBite",
    description: "", // <- von Steffen einzutragen
    logo: "", // <- leer lassen, falls kein Logo vorhanden
    href: null,
    comingSoon: true,
  },
];
