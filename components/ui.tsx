import type { CSSProperties, ReactNode } from "react";

/** Stagger index for [data-reveal] children. */
export const R = (i: number) => ({ "--i": i }) as CSSProperties;

/**
 * A section laid out like a well-kept résumé: the name in a narrow left
 * column, the content on the right. No boxes.
 */
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
    <section id={id} aria-labelledby={`${id}-title`} className="wrap py-14 sm:py-20">
      <div className="grid gap-6 md:grid-cols-[11rem_1fr] md:gap-10">
        <div data-reveal className="md:sticky md:top-24 md:self-start">
          <h2 id={`${id}-title`} className="text-head font-semibold tracking-[-0.02em]">
            {title}
          </h2>
          {note ? <p className="mt-1 text-small text-muted">{note}</p> : null}
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
