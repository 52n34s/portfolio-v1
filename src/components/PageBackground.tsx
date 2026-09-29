/** Fixed full-viewport background taken 1:1 from the erdibuilds.app hero
 *  (`.hero-bg` in erdibuilds/app/globals.css): base colour, two soft glows
 *  and a 22px dot grid fading toward the bottom. Sits behind all content. */
export default function PageBackground() {
  return <div className="page-bg" aria-hidden="true" />;
}
