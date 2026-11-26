import { getFeatured } from "@/lib/work";
import { moreBuilds, productWriting } from "@/content/lists";
import WorkCarousel from "./WorkCarousel";
import { Reveal, SplitText } from "./motion";

function List({ title, items }: { title: string; items: { title: string; detail: string; href: string }[] }) {
  return (
    <Reveal>
      <h3 className="list-h">{title}</h3>
      {items.map((it) => (
        <a key={it.title} className="list-row" href={it.href} target="_blank" rel="noreferrer">
          <span className="list-t">{it.title}</span>
          <span className="list-d">
            {it.detail} <span aria-hidden="true">↗</span>
            <span className="sr-only">(opens in a new tab)</span>
          </span>
        </a>
      ))}
    </Reveal>
  );
}

export default function Work() {
  const slides = getFeatured().map(({ slug, title, summary, year, role, type, cover }) => ({
    slug,
    title,
    summary,
    year,
    role,
    type,
    cover,
  }));
  return (
    <section id="work" className="work cols" data-theme="light" aria-labelledby="work-h">
      <div className="work-top">
        <SplitText id="work-h" text="Selected work" className="display section-head" stagger={0.02} />
      </div>
      <WorkCarousel projects={slides} />
      <div className="lists">
        <List title="More builds" items={moreBuilds} />
        <List title="Product writing" items={productWriting} />
      </div>
    </section>
  );
}
