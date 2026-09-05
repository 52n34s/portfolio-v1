export const TARGET_DATE = "2026-12-31T23:59:59+01:00";

export const GOAL_EUR = 3000;
export const CURRENT_MRR_EUR = 0;
export const PAYING_ACCOUNTS = 0;

export const INSTAGRAM_URL = ""; // <- von Steffen einzutragen
export const PITCH_URL = "/work-with-me";

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
      "Rioplatense Spanish, the version people actually speak in Buenos Aires. A thousand words, spoken and graded.",
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
