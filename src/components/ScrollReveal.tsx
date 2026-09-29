"use client";

import { useEffect } from "react";

/**
 * One-shot scroll reveals for elements marked `data-reveal="<kind>"`.
 *
 * The server markup carries only `data-reveal`, which hides nothing — without
 * JS every element stays visible. On mount this component sets
 * `data-reveal-state="hidden"` on elements that are still below the fold, then
 * flips them to "shown" the first time they cross the threshold. The CSS in
 * globals.css (all behind prefers-reduced-motion: no-preference) turns those
 * states into the actual motion. Elements already on screen at load are left
 * untouched, so nothing flickers. The dock is the one exception: it always
 * plays its entrance (see the pre-paint class in app/layout.tsx).
 *
 * Kinds: head, card, row, stamp (follows its card), dock, divider.
 */

type Kind = "head" | "card" | "row" | "stamp" | "dock" | "divider";

/** Duration per kind (ms) — also written to --reveal-dur for the CSS. */
const DURATION: Record<Kind, number> = {
  head: 500,
  card: 550,
  row: 550,
  stamp: 350,
  dock: 300,
  divider: 1200,
};

/** Delay between siblings that are revealed together (ms). */
const STAGGER: Partial<Record<Kind, number>> = {
  head: 80,
  card: 120,
  row: 60,
  dock: 40,
};

/** Stamp starts this long after its card is revealed. */
const STAMP_OFFSET = 250;
/** Dock start delay when it is already on screen at load. */
const DOCK_LOAD_DELAY = 300;

const THRESHOLD = 0.15;

function kindOf(el: HTMLElement) {
  return el.dataset.reveal as Kind;
}

function inViewport(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

function hide(el: HTMLElement) {
  el.dataset.revealState = "hidden";
}

/** Flip to "shown" after the hidden state has been painted, then clean up so
 *  the element's own transitions (hover etc.) apply again. */
function show(el: HTMLElement, delay: number) {
  const duration = DURATION[kindOf(el)];
  el.style.setProperty("--reveal-delay", `${delay}ms`);
  el.style.setProperty("--reveal-dur", `${duration}ms`);
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      el.dataset.revealState = "shown";
      window.setTimeout(() => {
        delete el.dataset.revealState;
        el.style.removeProperty("--reveal-delay");
        el.style.removeProperty("--reveal-dur");
      }, delay + duration + 50);
    });
  });
}

function stampsIn(card: HTMLElement) {
  return Array.from(
    card.querySelectorAll<HTMLElement>('[data-reveal="stamp"]'),
  );
}

export default function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      root.classList.remove("reveal-js");
      return;
    }

    const all = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    ).filter((el) => kindOf(el) !== "stamp");

    const pending: HTMLElement[] = [];
    const dockOnScreen: HTMLElement[] = [];

    for (const el of all) {
      const kind = kindOf(el);
      if (kind === "dock") {
        hide(el);
        if (inViewport(el)) dockOnScreen.push(el);
        else pending.push(el);
        continue;
      }
      if (inViewport(el)) continue;
      hide(el);
      if (kind === "card") stampsIn(el).forEach(hide);
      pending.push(el);
    }

    // The pre-paint rule has done its job once every dock icon carries a state.
    root.classList.remove("reveal-js");

    dockOnScreen.forEach((el, i) =>
      show(el, DOCK_LOAD_DELAY + i * (STAGGER.dock ?? 0)),
    );

    if (pending.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Siblings (same group, same kind) that enter together are staggered
        // in DOM order — e.g. eyebrow → headline → subline, or a card pair.
        // The group is the nearest [data-reveal-group], else the parent.
        const batchIndex = new Map<string, number>();
        const parents = new Map<Element, number>();

        for (const entry of entries) {
          if (!entry.isIntersecting || entry.intersectionRatio < THRESHOLD) {
            continue;
          }
          const el = entry.target as HTMLElement;
          observer.unobserve(el);

          const kind = kindOf(el);
          const parent =
            el.closest("[data-reveal-group]") ?? el.parentElement ?? el;
          if (!parents.has(parent)) parents.set(parent, parents.size);
          const key = `${parents.get(parent)}:${kind}`;
          const index = batchIndex.get(key) ?? 0;
          batchIndex.set(key, index + 1);

          const delay = index * (STAGGER[kind] ?? 0);
          show(el, delay);
          if (kind === "card") {
            stampsIn(el).forEach((stamp) => show(stamp, delay + STAMP_OFFSET));
          }
        }
      },
      { threshold: THRESHOLD },
    );

    pending.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
