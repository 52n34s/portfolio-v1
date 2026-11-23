import type { CSSProperties } from "react";
import type { CardTheme } from "@/data/apps";

const FONT_SERIF = "var(--font-lora), Georgia, serif";
const FONT_SANS = "var(--font-inter), sans-serif";
const FONT_MONO = "var(--font-jetbrains-mono), monospace";
const FONT_HAND = "var(--font-hand), cursive";

/** Same colour as `rgba(r,g,b,a)` / `#rrggbb`, with a new alpha. */
export function withAlpha(color: string, alpha: number) {
  const rgba = color.match(/rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/);
  if (rgba) return `rgba(${rgba[1]},${rgba[2]},${rgba[3]},${alpha})`;
  const hex = color.match(/^#([0-9a-f]{6})$/i);
  if (hex) {
    const n = parseInt(hex[1], 16);
    return `rgba(${n >> 16},${(n >> 8) & 255},${n & 255},${alpha})`;
  }
  return color;
}

function luminance(hex: string) {
  const m = hex.match(/^#([0-9a-f]{6})$/i);
  if (!m) return 0;
  const n = parseInt(m[1], 16);
  const lin = (c: number) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  };
  return (
    0.2126 * lin(n >> 16) + 0.7152 * lin((n >> 8) & 255) + 0.0722 * lin(n & 255)
  );
}

/** Light ink means a dark surface. */
export function isDarkSurface(theme: CardTheme) {
  return luminance(theme.ink) > 0.5;
}

/** CSS custom properties for a themed card (read by the Tailwind classes). */
export function themeVars(theme: CardTheme): CSSProperties {
  return {
    "--card-ink": theme.ink,
    "--card-muted": theme.muted,
    "--card-line": withAlpha(theme.muted, 0.15),
    "--card-accent": theme.accent,
    "--card-on-accent": theme.onAccent,
    "--card-ring": isDarkSurface(theme) ? theme.ink : theme.accent,
  } as CSSProperties;
}

export function hookFontFamily(theme: CardTheme) {
  switch (theme.hookFont) {
    case "serif":
    case "serif-italic":
      return FONT_SERIF;
    case "sans":
      return FONT_SANS;
    case "mono":
      return FONT_MONO;
    case "hand":
      return FONT_HAND;
  }
}

export function hookStyle(theme: CardTheme): CSSProperties {
  return {
    fontFamily: hookFontFamily(theme),
    fontWeight: theme.hookWeight ?? 600,
    fontStyle: theme.hookFont === "serif-italic" ? "italic" : undefined,
    textTransform: theme.hookUppercase ? "uppercase" : undefined,
    letterSpacing: theme.hookUppercase ? "0.02em" : undefined,
    color: theme.ink,
  };
}

/** Heavy sans hooks sit tighter. */
export function hookClass(theme: CardTheme) {
  return theme.hookFont === "sans" && theme.hookWeight === 800
    ? "leading-tight tracking-tight"
    : "leading-snug";
}

/** Focus ring in --card-ring (set by themeVars on an ancestor). */
export const FOCUS_RING =
  "outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--card-ring)]";

/** Pill button in the card's accent; colours come from themeVars. */
export const THEMED_CTA_CLASS = `inline-block w-fit rounded-full bg-[var(--card-accent)] px-5 py-2.5 text-[13px] font-medium text-[var(--card-on-accent)] transition-[filter] hover:brightness-[0.92] ${FOCUS_RING}`;
