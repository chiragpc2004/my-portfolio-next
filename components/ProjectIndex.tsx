"use client";

import { useState } from "react";

export type IndexItem = {
  name: string;
  kind: string;
  href: string;
  external?: boolean;
  image?: { src: string; position?: string };
  stack?: string;
};

/**
 * The project names are the index. Hover or focus a name and the frame on the
 * right shows that project. Without script, every name is still a plain link.
 */
export default function ProjectIndex({ items }: { items: IndexItem[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
      <ol className="lg:col-span-8">
        {items.map((it, i) => {
          const on = i === active;
          return (
            <li key={it.name}>
              <a
                href={it.href}
                {...(it.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className="group block py-2.5"
              >
                <span
                  className={`font-display text-head transition-colors duration-200 ${
                    on ? "text-ink" : "text-muted"
                  } group-hover:text-ink`}
                >
                  {it.name}
                  {it.external ? <span className="sr-only"> (opens in a new tab)</span> : null}
                </span>
              </a>
            </li>
          );
        })}
      </ol>

      <div className="hidden lg:col-span-4 lg:block" aria-hidden="true">
        <div className="sticky top-[15vh] aspect-[4/5] w-full overflow-hidden bg-surface">
          {items.map((it, i) => (
            <div
              key={it.name}
              className={`absolute inset-0 transition-[opacity,visibility] duration-300 ease-out ${
                i === active ? "visible opacity-100" : "invisible opacity-0"
              }`}
            >
              {it.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={it.image.src}
                  alt=""
                  loading="lazy"
                  className={`h-full w-full object-cover ${it.image.position ?? "object-top"} ${
                    i === active ? "scale-100" : "scale-[1.04]"
                  } transition-transform duration-700 ease-out`}
                />
              ) : (
                <div className="flex h-full flex-col justify-between p-8">
                  <p className="font-display text-head">{it.name}</p>
                  <p className="text-lead">{it.stack}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
