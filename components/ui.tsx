import type { CSSProperties, ReactNode } from "react";

/** Stagger index for [data-reveal] children. */
export const R = (i: number) => ({ "--i": i }) as CSSProperties;

/**
 * A section on one pane of glass: the name in a narrow left column, the
 * content on the right.
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
    <section id={id} aria-labelledby={`${id}-title`} className="wrap py-4 sm:py-6">
      <div className="glass grid gap-6 rounded-[22px] p-5 sm:rounded-[28px] sm:p-8 md:grid-cols-[11rem_1fr] md:gap-10 md:p-10">
        <div data-reveal className="md:self-start">
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
