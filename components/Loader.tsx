import { site } from "@/content/site";

const STRIPS = 14;

/**
 * First-visit intro. The monogram rises in, fills like a progress bar, then rushes
 * toward you while the curtain splits into ribbons that peel away to the hero.
 * Pure CSS, so it never waits on JavaScript and never blocks the page.
 */
export default function Loader() {
  const letters = Array.from(site.monogram);
  return (
    <div className="loader" aria-hidden="true">
      <div className="loader-strips">
        {Array.from({ length: STRIPS }, (_, i) => (
          <i key={i} style={{ ["--s" as string]: Math.abs(i - (STRIPS - 1) / 2) }} />
        ))}
      </div>
      <div className="loader-mark">
        {letters.map((ch, i) => (
          <span key={i} className="loader-ch" style={{ ["--i" as string]: i }}>
            <span className="loader-ghost">{ch}</span>
            <span className="loader-ink">{ch}</span>
          </span>
        ))}
        <b className="loader-bar" />
      </div>
    </div>
  );
}
