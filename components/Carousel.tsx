"use client";

import { Children, useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

/**
 * A row of large panels you swipe through. Scrolling is native scroll-snap, so
 * it works with touch, trackpad and keyboard even before this script runs; the
 * arrows and dots are a convenience on top.
 */
export default function Carousel({
  title,
  note,
  labels,
  children,
}: {
  title: string;
  note?: string;
  labels: string[];
  children: ReactNode;
}) {
  const track = useRef<HTMLDivElement>(null);
  const [cur, setCur] = useState(0);
  const count = Children.count(children);

  useEffect(() => {
    const t = track.current;
    if (!t) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const items = Array.from(t.children) as HTMLElement[];
        const base = items[0]?.offsetLeft ?? 0;
        let best = 0;
        let dist = Infinity;
        items.forEach((el, i) => {
          const d = Math.abs(el.offsetLeft - base - t.scrollLeft);
          if (d < dist) {
            dist = d;
            best = i;
          }
        });
        setCur(best);
      });
    };
    t.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      t.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const go = (i: number) => {
    const t = track.current;
    if (!t) return;
    const items = Array.from(t.children) as HTMLElement[];
    const to = items[Math.max(0, Math.min(count - 1, i))];
    if (!to) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    t.scrollTo({
      left: to.offsetLeft - items[0].offsetLeft,
      behavior: reduce ? "auto" : "smooth",
    });
  };

  return (
    <div>
      <div className="wrap mb-6 flex items-end justify-between gap-4">
        <div>
          <h2
            id="projects-title"
            className="text-[clamp(1.6rem,1.2rem+1.2vw,2.1rem)] font-semibold leading-[1.1] tracking-[-0.03em]"
          >
            {title}
          </h2>
          {note ? <p className="mt-1 text-muted">{note}</p> : null}
        </div>
        <div className="hidden shrink-0 gap-2 sm:flex">
          <button
            type="button"
            onClick={() => go(cur - 1)}
            disabled={cur === 0}
            aria-label="Previous project"
            className="btn btn-light !h-11 !w-11 !p-0 disabled:opacity-35 disabled:hover:translate-y-0"
          >
            <ArrowLeft size={17} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => go(cur + 1)}
            disabled={cur === count - 1}
            aria-label="Next project"
            className="btn btn-light !h-11 !w-11 !p-0 disabled:opacity-35 disabled:hover:translate-y-0"
          >
            <ArrowRight size={17} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="wrap">
        <div
          ref={track}
          className="track"
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label={title}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") {
              e.preventDefault();
              go(cur + 1);
            } else if (e.key === "ArrowLeft") {
              e.preventDefault();
              go(cur - 1);
            }
          }}
        >
          {children}
        </div>
      </div>

      <div className="flex justify-center">
        {labels.map((l, i) => (
          <button
            key={l}
            type="button"
            onClick={() => go(i)}
            aria-label={`Show ${l}`}
            aria-current={i === cur ? "true" : undefined}
            className="group p-1.5"
          >
            <span
              className={`block h-2 rounded-full transition-[width,background-color] duration-300 ${i === cur ? "w-6 bg-signal" : "w-2 bg-white/25 group-hover:bg-white/40"}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
