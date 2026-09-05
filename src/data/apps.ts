export const ERDI_MAGENTA = "#FC2E70";

export type AppId =
  | "kolibi"
  | "carpincho"
  | "orivela"
  | "peeranimo"
  | "erdiknows";

export type AppCta = {
  label: string;
  href: string;
  className: string;
};

export type AppDefinition = {
  id: AppId;
  name: string;
  href: string;
  icon: string;
  platform: string;
  subline?: string;
  handwrittenNote?: [string, string];
  stackLine?: string;
  focusHeadline?: string;
  focusBody?: string;
  stamp: [string, string, string];
  appsCtas: AppCta[];
  appsNote?: string;
};

const STORE_BTN =
  "inline-block rounded-full bg-[#1D9E75] px-4 py-2 text-[13px] font-medium text-white";

export const APPS: AppDefinition[] = [
  {
    id: "kolibi",
    name: "Kolibi",
    href: "https://apps.apple.com/us/app/kolibi/id6790129149",
    icon: "/app-logo-kolibi.jpg",
    platform: "iOS · Android",
    subline: "AI photo calorie tracker",
    stamp: ["KOLIBI", "LIVE", "ON THE APP STORE"],
    appsCtas: [
      {
        label: "Get the app →",
        href: "https://apps.apple.com/us/app/kolibi/id6790129149",
        className: `${STORE_BTN} px-5`,
      },
    ],
  },
  {
    id: "carpincho",
    name: "Carpincho",
    href: "https://carpincho.app/",
    icon: "/app-logo-carpincho.jpg",
    platform: "Spanish with the least effort possible",
    subline: "Spanish with the least effort possible",
    stamp: ["CARPINCHO", "LIVE", "ON THE APP STORE"],
    appsCtas: [
      {
        label: "Get the app →",
        href: "https://apps.apple.com/de/app/carpincho-learn-less-say-more/id6795982399",
        className:
          "inline-block rounded-full bg-[#D6156F] px-5 py-2 text-[13px] font-medium text-white",
      },
    ],
  },
  {
    id: "orivela",
    name: "Orivela",
    href: "https://www.orivela.app/",
    icon: "/app-logo-orivela.jpg",
    platform: "iOS",
    subline: "Every document, found in seconds",
    stamp: ["ORIVELA", "LIVE", "ON THE APP STORE"],
    appsCtas: [
      {
        label: "App Store →",
        href: "https://apps.apple.com/us/app/orivela/id6785050823",
        className: STORE_BTN,
      },
      {
        label: "Play Store (beta) →",
        href: "https://play.google.com/apps/testing/com.steffen.orivela.android",
        className: STORE_BTN,
      },
    ],
    appsNote:
      "Android is in closed testing — request access after tapping Play Store.",
  },
  {
    id: "peeranimo",
    name: "Peeranimo",
    href: "https://peeranimo.app/",
    icon: "/app-logo-peeranimo.webp",
    platform: "Social platform · Web",
    subline: "Find people who get it",
    stamp: ["PEERANIMO", "LIVE", "ON THE WEB"],
    appsCtas: [
      {
        label: "Try it now →",
        href: "https://peeranimo.app/",
        className: `${STORE_BTN} px-5`,
      },
    ],
  },
  {
    id: "erdiknows",
    name: "ErdiKnows",
    href: "https://erdiknows.com",
    icon: "/erdiknows.png",
    platform: "Web",
    handwrittenNote: ["Numbers moved.", "Erdi knew why."],
    stackLine: "See which changes pay off.",
    focusHeadline: "See which changes pay off.",
    focusBody:
      "Every release, campaign and price change lands on one timeline, next to the paying customers that followed. You see what a customer really costs, and what your last change actually did. One page, and you know where you stand.",
    stamp: ["ERDIKNOWS", "LIVE", "ON THE WEB"],
    appsCtas: [
      {
        label: "Open on the web →",
        href: "https://erdiknows.com",
        className:
          "inline-block rounded-full bg-[#FC2E70] px-5 py-2 text-[13px] font-medium text-white",
      },
    ],
  },
];

export const DEFAULT_FEATURED_ID: AppId = "kolibi";

export const APP_BY_ID: Record<AppId, AppDefinition> = Object.fromEntries(
  APPS.map((app) => [app.id, app]),
) as Record<AppId, AppDefinition>;
