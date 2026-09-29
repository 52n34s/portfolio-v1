/** Shared showcase data for /countdown and /apps card grids.
 *  Headlines match each app's landing page — kept in sync by hand. */

export const OUTCOME_HEADLINES: Record<string, string> = {
  carpincho:
    "Order dinner, joke with family, never get switched to English.",
  kolibi: "Your food knows it's training day.",
  orivela: "Out of your head. Into one place.",
  erdiknows: "See which changes pay off.",
  getabite: "Decide where to eat before you leave.",
  peeranimo: "Find people who get it.",
  findmystack: "Build your app right the first time.",
  erdibuilds: "Your app, live in people's hands.",
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

type Rgb = [number, number, number];

/** Page base colour the row tint sits on (PageBackground). */
const PAGE_BASE: Rgb = [0xfa, 0xf8, 0xf5];

function parseHex(hex: string): Rgb {
  const value = hex.replace("#", "");
  return [0, 2, 4].map((i) => parseInt(value.slice(i, i + 2), 16)) as Rgb;
}

function toHex(rgb: Rgb) {
  return `#${rgb.map((c) => Math.round(c).toString(16).padStart(2, "0")).join("")}`;
}

/** Linear mix: t = 0 → a, t = 1 → b. */
function mix(a: Rgb, b: Rgb, t: number): Rgb {
  return a.map((c, i) => c + (b[i] - c) * t) as Rgb;
}

function luminance(rgb: Rgb) {
  const [r, g, b] = rgb.map((c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function contrastRatio(a: string, b: string) {
  const [hi, lo] = [luminance(parseHex(a)), luminance(parseHex(b))].sort(
    (x, y) => y - x,
  );
  return (hi + 0.05) / (lo + 0.05);
}

/** Open-row colours derived from an app's `color`:
 *  tint — 12% of the app colour on the page base (row background);
 *  ink  — the app colour darkened in 5% steps (from 30%) until it reaches
 *         4.5:1 against the tint (headline colour). */
export function rowColors(color: string) {
  const rgb = parseHex(color);
  const tint = toHex(mix(PAGE_BASE, rgb, 0.12));
  let ink = color;
  for (let t = 0.3; t <= 1.0001; t += 0.05) {
    ink = toHex(mix(rgb, [0, 0, 0], t));
    if (contrastRatio(ink, tint) >= 4.5) break;
  }
  return { tint, ink };
}
