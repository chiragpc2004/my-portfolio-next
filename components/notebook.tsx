/* Field Notebook primitives: the few marks every page is built from. */

export const R = (i: number) => ({ "--i": i }) as React.CSSProperties;

/** A hand-drawn underline that draws itself in when its parent is revealed. */
export function Scribble({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 300 14"
      preserveAspectRatio="none"
      className={`draw block h-3 text-pen ${className}`}
      fill="none"
    >
      <path
        d="M2 9.5c38-4.5 77-6.2 118-5.6 44 .6 82 2.6 120 1.8 20-.4 40-1.6 58-3.4"
        pathLength={1}
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Section opener: a page number in mono, the title in the serif, a red underline. */
export function SectionHead({ no, title, id, children }: { no: string; title: string; id: string; children?: React.ReactNode }) {
  return (
    <header data-reveal className="max-w-[40rem]">
      <p className="font-mono text-small text-muted tracking-wide">§ {no}</p>
      <h2 id={id} className="mt-2 font-display text-head font-medium tracking-[-0.02em]">
        {title}
      </h2>
      <Scribble className="mt-1 w-[min(14rem,60%)]" />
      {children ? <div className="mt-6 text-lead text-muted">{children}</div> : null}
    </header>
  );
}

/**
 * A note in red pen. In the right gutter on wide screens, inline under its
 * paragraph on phones, so nothing depends on hover or width.
 */
export function MarginNote({ label, children }: { label?: string; children: React.ReactNode }) {
  return (
    <aside className="relative border-l-2 border-pen/40 pl-4 text-pen lg:border-l-0 lg:pl-0">
      {label ? <p className="font-mono text-[0.75rem] uppercase tracking-[0.12em] text-pen/80">{label}</p> : null}
      <p className="mt-1 font-hand text-[1.5rem] leading-[1.15]">{children}</p>
    </aside>
  );
}

/** A rubber stamp for awards. Slightly rotated, never animated. */
export function Stamp({ title, sub }: { title: string; sub: string }) {
  return (
    <p className="inline-flex -rotate-2 flex-col items-center border-2 border-pen/70 rounded-md px-4 py-2 text-center text-pen">
      <span className="font-mono text-[0.75rem] font-medium uppercase tracking-[0.14em]">{title}</span>
      <span className="font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-pen/80">{sub}</span>
    </p>
  );
}
