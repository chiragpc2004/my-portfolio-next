import type { CSSProperties, ReactNode } from "react";

/** Stagger index for [data-reveal] children. */
export const R = (i: number) => ({ "--i": i }) as CSSProperties;

/** Section heading: a short title and one plain sentence under it. */
export function SectionHead({ title, id, children }: { title: string; id: string; children?: ReactNode }) {
  return (
    <div data-reveal className="max-w-[40rem]">
      <h2 id={id} className="text-head font-semibold">
        {title}
      </h2>
      {children ? <p className="mt-3 text-lead text-muted">{children}</p> : null}
    </div>
  );
}

const btnBase =
  "inline-flex items-center justify-center gap-1.5 h-10 px-4 rounded-full text-small font-medium transition-[background-color,color,transform,box-shadow] duration-200 active:scale-[0.97]";

export const btn = {
  primary: `${btnBase} bg-ink text-ground hover:bg-ink/85`,
  secondary: `${btnBase} card text-ink hover:bg-ink/[0.04]`,
};

/** An outbound link styled as a small secondary button. */
export function ExtButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={btn.secondary}>
      {children}
      <span aria-hidden="true" className="text-muted">&#8599;</span>
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
