/** Shared showcase data for /countdown and /apps card grids.
 *  Headlines match each app's landing page — kept in sync by hand. */

export const OUTCOME_HEADLINES: Record<string, string> = {
  carpincho:
    "Order dinner, joke with family, never get switched to English.",
  kolibi: "Know where you stand.",
  orivela: "Out of your head. Into one place.",
  erdiknows: "See which changes pay off.",
  getabite: "Decide where to eat before you leave.",
  peeranimo: "Find people who get it.",
};

/** Optimised WebP screenshots. Native sizes vary (tall phone vs. wider web
 * screens) — the card crops them to a fixed box via CSS. */
export const APP_SCREENSHOTS: Record<
  string,
  { src: string; width: number; height: number }
> = {
  carpincho: {
    src: "/app-screens/carpincho_screen_1.webp",
    width: 552,
    height: 1200,
  },
  kolibi: {
    src: "/app-screens/kolibi_screen_1.webp",
    width: 552,
    height: 1200,
  },
  orivela: {
    src: "/app-screens/orivela_screen_1.webp",
    width: 552,
    height: 1200,
  },
  erdiknows: {
    src: "/app-screens/erdiknows_screen_1.webp",
    width: 1041,
    height: 1200,
  },
  getabite: {
    src: "/app-screens/getabite_screen_1.webp",
    width: 921,
    height: 1200,
  },
  peeranimo: {
    src: "/app-screens/peeranimo_screen_1.webp",
    width: 555,
    height: 1200,
  },
};

export function hexToRgba(hex: string, alpha: number) {
  const value = hex.replace("#", "");
  const r = parseInt(value.slice(0, 2), 16);
  const g = parseInt(value.slice(2, 4), 16);
  const b = parseInt(value.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/** Adds Apple's campaign-link params to an App Store URL: `ct` + `mt=8`. */
export function withCampaignToken(url: string, token: string) {
  try {
    const withParams = new URL(url);
    withParams.searchParams.set("ct", token);
    withParams.searchParams.set("mt", "8");
    return withParams.toString();
  } catch {
    return url;
  }
}

/** Applied inline: this build's CSS bundler silently drops `backdrop-filter`
 * from stylesheet rules, so the glass blur has to travel as an inline style. */
export const showcaseGlass = {
  backdropFilter: "blur(20px) saturate(160%)",
  WebkitBackdropFilter: "blur(20px) saturate(160%)",
} as const;
