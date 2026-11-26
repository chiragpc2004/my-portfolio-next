import { site } from "@/content/site";

/** First-visit intro: the initials fill in, then the curtain lifts. Pure CSS, so it never blocks the page. */
export default function Loader() {
  const initials = site.name
    .split(" ")
    .map((w) => w[0])
    .join("");
  return (
    <div className="loader" aria-hidden="true">
      <div className="loader-mark">
        {initials}
        <span>{initials}</span>
        <i />
      </div>
    </div>
  );
}
