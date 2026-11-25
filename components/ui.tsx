import type { CSSProperties, ReactNode } from "react";

/** Stagger index for [data-reveal] children. */
export const R = (i: number) => ({ "--i": i }) as CSSProperties;

/** Section heading: the section's name at poster size, with one plain sentence beside it. */
export function SectionHead({ title, id, children }: { title: string; id: string; children?: ReactNode }) {
  return (
    <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-8">
      <h2 id={id} data-reveal className="font-display text-display lg:col-span-7">
        {title}
      </h2>
      {children ? (
        <p data-reveal style={R(1)} className="max-w-[40ch] text-lead lg:col-span-5 lg:pb-3">
          {children}
        </p>
      ) : null}
    </div>
  );
}

/**
 * The name as one line of type that spans the margins at every width.
 * Real text (not a drawing), sized in globals.css so it never wraps.
 */
export function Monument({
  className = "",
  rise = false,
  as: Tag = "span",
  id,
  label,
}: {
  className?: string;
  rise?: boolean;
  as?: "span" | "p" | "h1";
  id?: string;
  label?: string;
}) {
  return (
    <Tag id={id} aria-label={label} className={`monument ${rise ? "rise" : ""} ${className}`}>
      {rise
        ? "Chirag P C".split("").map((ch, i) => (
            <span key={i} style={R(i)}>
              {ch === " " ? "\u00a0" : ch}
            </span>
          ))
        : "Chirag\u00a0P\u00a0C"}
    </Tag>
  );
}
