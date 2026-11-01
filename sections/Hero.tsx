"use client";

import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { SPECIES } from "@/components/species";

const HOLD_MS = 6000;

function Hero() {
  // Signature move: the three species of the Iris dataset crossfade slowly.
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let timer: number | undefined;
    const stop = () => {
      if (timer) window.clearInterval(timer);
    };
    const start = () => {
      stop();
      timer = window.setInterval(() => setCurrent((c) => (c + 1) % SPECIES.length), HOLD_MS);
    };
    const onVisibility = () => (document.hidden ? stop() : start());
    start();
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-svh snap:h-screen bg-ground text-ink pt-[calc(var(--nav-h)+1.5rem)] pb-10 snap:pb-12"
    >
      <div className="mx-auto max-w-[88rem] h-full px-5 sm:px-8 flex flex-col gap-10 lg:grid lg:grid-cols-12 lg:gap-8 lg:items-end">
        {/* Text */}
        <div className="lg:col-span-7 lg:pb-2">
          <h1 data-reveal className="font-display font-semibold uppercase text-display">
            <span className="block">Chirag</span>
            <span className="block">P C</span>
          </h1>
          <p data-reveal style={{ "--i": 1 } as React.CSSProperties} className="mt-8 max-w-[34ch] text-lead text-ink">
            Machine learning engineer. I train models and build the web products that put them to work.
          </p>
          <div data-reveal style={{ "--i": 2 } as React.CSSProperties} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 h-12 pl-6 pr-5 rounded-full bg-accent text-accent-ink font-medium hover:bg-accent/85 active:scale-[0.97] transition-[background-color,transform] duration-200"
            >
              See the work
              <ArrowDown size={18} aria-hidden="true" className="transition-transform duration-300 ease-out group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center h-12 font-medium underline decoration-ink/30 underline-offset-[6px] hover:decoration-ink transition-[text-decoration-color] duration-200"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Exhibit: the dataset behind the first project */}
        <figure data-reveal style={{ "--i": 1 } as React.CSSProperties} className="lg:col-span-5 lg:h-full flex flex-col min-h-0">
          <div className="relative w-full aspect-[4/5] snap:aspect-auto snap:flex-1 snap:min-h-0 overflow-hidden bg-surface">
            {SPECIES.map((s, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={s.key}
                src={s.src}
                width={s.width}
                height={s.height}
                alt={i === current ? s.alt : ""}
                aria-hidden={i === current ? undefined : true}
                fetchPriority={i === 0 ? "high" : "low"}
                style={{ objectPosition: s.focus }}
                className={`absolute inset-0 w-full h-full object-cover drift transition-opacity duration-[1600ms] ease-in-out ${
                  i === current ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
          <figcaption className="mt-3 flex items-baseline justify-between gap-4 text-small text-muted">
            <span aria-live="polite">
              <span className="text-ink italic">{SPECIES[current].name}</span>, one of the three species my Iris Classifier
              tells apart
            </span>
            <span aria-hidden="true" className="tabular-nums shrink-0">
              {current + 1} / {SPECIES.length}
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export default Hero;
