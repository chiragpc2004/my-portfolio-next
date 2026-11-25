import type { CSSProperties, ReactNode } from "react";

/** Stagger index for [data-reveal] children. */
export const R = (i: number) => ({ "--i": i }) as CSSProperties;

/** A section on one pane of glass: the name on top, the content below at full width. */
export function Row({
  id,
  title,
  note,
  children,
}: {
  id: string;
  title: string;
  note?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="wrap py-4 sm:py-6">
      <div className="glass rounded-[22px] p-5 sm:rounded-[28px] sm:p-8 md:p-10">
        <div className="mb-8 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 sm:mb-10">
          <h2 id={`${id}-title`} className="text-[clamp(1.6rem,1.2rem+1.2vw,2.1rem)] font-semibold leading-[1.1] tracking-[-0.03em]">
            {title}
          </h2>
          {note ? <p className="text-muted">{note}</p> : null}
        </div>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}

/** An outbound link as a small tactile button. */
export function ExtButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="btn btn-light !h-9 !px-3.5 !text-small">
      {children}
      <span aria-hidden="true" className="opacity-50">&#8599;</span>
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
