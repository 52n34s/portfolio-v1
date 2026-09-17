export const ERDI_MAGENTA = "#FC2E70";

export type AppSlug =
  | "kolibi"
  | "getabite"
  | "carpincho"
  | "peeranimo"
  | "orivela"
  | "erdiknows";

export type AppEntry = {
  slug: AppSlug;
  name: string;
  platform: string;
  hook: string;
  body: string;
  href: string;
  logo: string;
  visual: AppSlug;
  badge?: string;
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
    eyebrow: "FOOD",
    headline: "Two apps for what ends up on the plate.",
    subline: "Decide fast, eat the way you meant to.",
    apps: [
      {
        slug: "kolibi",
        name: "Kolibi",
        platform: "iOS · Android",
        hook: "Photograph your food. That's it.",
        body: "Kolibi reads the plate, estimates the portions and fills in calories and macros in seconds. Your targets are calculated for your body and your goal, and they shift on training days. Correct a portion once and every estimate after that lands closer.",
        href: "https://apps.apple.com/us/app/kolibi/id6790129149",
        logo: "/app-logo-kolibi.jpg",
        visual: "kolibi",
      },
      {
        slug: "getabite",
        name: "GetaBite",
        platform: "Web",
        hook: "Know where you're going and what you'll order before you leave the house.",
        body: "GetaBite maps vegan and vegetarian places together with the dishes they actually serve, built from menus people photograph on the spot. The scanner covers the supermarket shelf for the rest of the week. You walk in knowing what fits and what to ask about.",
        href: "/go/getabite",
        logo: "/getabite-mark-128.png",
        visual: "getabite",
      },
    ],
  },
  {
    eyebrow: "LANGUAGE & PEOPLE",
    headline: "Two apps for the conversation you want to have.",
    subline: "Say it in Spanish. Say it to someone who gets it.",
    apps: [
      {
        slug: "carpincho",
        name: "Carpincho",
        platform: "Spanish with the least effort possible",
        hook: "You say your sentence and the answer comes back in Spanish.",
        body: "Carpincho drills the moments you actually land in, from ordering at the cafe to the call you keep putting off. You speak, it listens and tells you the two words it hung on. Every word is spoken in Rioplatense, neutral Latin American and Spain, so you hear which one you are learning.",
        href: "https://apps.apple.com/de/app/carpincho-learn-less-say-more/id6795982399",
        logo: "/app-logo-carpincho.jpg",
        visual: "carpincho",
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
    eyebrow: "DOCUMENTS & DATA",
    headline: "Two apps for finding the answer fast.",
    subline: "The document you need now. The reason the number moved.",
    apps: [
      {
        slug: "orivela",
        name: "Orivela",
        platform: "iOS",
        hook: "Out of your head. Into one place.",
        body: "A thought on the walk home, an insurance PDF, the contract someone wants today. Say it, type it or snap it, and Orivela files it with the right title and labels. Ask in plain language and it comes straight back.",
        href: "https://apps.apple.com/us/app/orivela/id6785050823",
        logo: "/app-logo-orivela.jpg",
        visual: "orivela",
      },
      {
        slug: "erdiknows",
        name: "ErdiKnows",
        platform: "Web",
        badge: "FOR INDIE DEVELOPERS",
        hook: "You shipped something last week. Did it pay off?",
        body: "ErdiKnows puts your releases, price changes and campaigns on the same timeline as your revenue and your signups. When a number moves, you can see what you changed the week before. Built for developers who ship weekly and want the answer in one screen.",
        href: "https://erdiknows.com",
        logo: "/erdiknows.png",
        visual: "erdiknows",
      },
    ],
  },
];

export const APPS: AppEntry[] = APP_SECTIONS.flatMap((section) => section.apps);
