export const TARGET_DATE = "2026-12-31T23:59:59+01:00";

const MS_DAY = 86_400_000;

/** Whole days remaining until the target date. Used by both the live client
 * countdown and the server-rendered giant background number, so they always agree. */
export function daysUntilTarget(from: Date = new Date()) {
  const diff = Math.max(0, new Date(TARGET_DATE).getTime() - from.getTime());
  return Math.floor(diff / MS_DAY);
}

export const INSTAGRAM_URL = "https://www.instagram.com/steffendoesthings";
export const PITCH_URL = "/#pitch";

export type ChallengeApp = {
  id: string;
  name: string;
  /** One sentence — the card shows exactly this, never more. */
  description: string;
  /** Small mono platform tag, e.g. "IOS", "WEB", "IOS · ANDROID". */
  platform: string;
  logo: string;
  href: string | null;
  /** Sampled from the app icon — the page's only source of colour, no shared theme accent. */
  color: string;
};

export const CHALLENGE_APPS: ChallengeApp[] = [
  {
    id: "kolibi",
    name: "Kolibi",
    description: "Photograph your plate and the calories fill themselves in.",
    platform: "IOS",
    logo: "/app-logo-kolibi.jpg",
    href: "https://apps.apple.com/us/app/kolibi-calories-by-photo/id6790129149",
    color: "#4F52D9",
  },
  {
    id: "erdiknows",
    name: "ErdiKnows",
    description:
      "Releases, price changes and ad spend on one timeline, next to the customers that followed.",
    platform: "WEB",
    logo: "/erdiknows.png",
    href: "https://erdiknows.com/",
    color: "#DC2450",
  },
  {
    id: "carpincho",
    name: "Carpincho",
    description:
      "Speak Spanish from the first lesson and get graded honestly.",
    platform: "IOS",
    logo: "/app-logo-carpincho.jpg",
    href: "https://apps.apple.com/us/app/carpi-speak-learn-spanish/id6795982399",
    color: "#EC1E7E",
  },
  {
    id: "orivela",
    name: "Orivela",
    description:
      "Notes and records in one place, back in seconds when you ask.",
    platform: "IOS",
    logo: "/app-logo-orivela.jpg",
    href: "https://apps.apple.com/app/orivela-life-admin-vault/id6785050823",
    color: "#3A1050",
  },
  {
    id: "peeranimo",
    name: "Peeranimo",
    description:
      "Peers in the exact same chapter of life, matched to you.",
    platform: "WEB",
    logo: "/app-logo-peeranimo.webp",
    href: "https://peeranimo.app/",
    color: "#7C6FE5",
  },
  {
    id: "getabite",
    name: "GetaBite",
    description: "Know what you'll order before you leave the house.",
    platform: "WEB",
    logo: "/getabite-mark-128.png",
    href: "/go/getabite",
    color: "#F04E3E",
  },
];
