"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from "motion/react";
import { useClientReducedMotion } from "./useClientReducedMotion";
import Cover from "./covers/Cover";
import type { Cover as CoverT } from "@/lib/work";

export type SlideData = {
  slug: string;
  title: string;
  summary: string;
  year: number;
  role: string;
  type: string;
  cover: CoverT;
};

const useIso = typeof window === "undefined" ? useEffect : useLayoutEffect;
const pad = (n: number) => String(n).padStart(2, "0");

function Slide({ p, priority }: { p: SlideData; priority?: boolean }) {
  return (
    <Link href={`/work/${p.slug}`} className="slide" data-cursor="view">
      <Cover cover={p.cover} priority={priority} />
      <div className="slide-meta">
        <h3 className="slide-title">{p.title}</h3>
        <p className="slide-summary">{p.summary}</p>
        <dl className="slide-dl">
          <div>
            <dt>Year</dt>
            <dd>{p.year}</dd>
          </div>
          <div>
            <dt>Role</dt>
            <dd>{p.role}</dd>
          </div>
          <div>
            <dt>Type</dt>
            <dd>{p.type}</dd>
          </div>
        </dl>
      </div>
    </Link>
  );
}

function Arrows({ onPrev, onNext }: { onPrev: () => void; onNext: () => void }) {
  return (
    <div className="work-arrows">
      <button type="button" className="arrow" onClick={onPrev} aria-label="Previous project">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M19 12H5M11 6l-6 6 6 6" />
        </svg>
      </button>
      <button type="button" className="arrow solid" onClick={onNext} aria-label="Next project">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </button>
    </div>
  );
}

/** Desktop: the section pins and scrolling down slides the projects sideways. */
function Pinned({ projects }: { projects: SlideData[] }) {
  const n = projects.length;
  const outer = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [dist, setDist] = useState(0);
  const [step, setStep] = useState(0);
  const [active, setActive] = useState(0);

  useIso(() => {
    const measure = () => {
      if (!track.current) return;
      // Measure to the last slide plus the side gutter, so the final slide lines up with the page margin.
      const last = track.current.lastElementChild as HTMLElement | null;
      const pad = parseFloat(getComputedStyle(track.current).paddingLeft) || 0;
      const end = last ? last.offsetLeft + last.offsetWidth + pad : track.current.scrollWidth;
      setDist(Math.max(0, end - window.innerWidth));
      const first = track.current.firstElementChild as HTMLElement | null;
      setStep(first ? first.offsetWidth + 32 : 0);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (track.current) ro.observe(track.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: outer, offset: ["start start", "end end"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  // Move one slide per step so the active slide lines up with the left margin; the last one sits flush right.
  const x = useTransform(smooth, (v) => -Math.min(v * (n - 1) * (step || dist / Math.max(1, n - 1)), dist));
  const bar = useTransform(scrollYProgress, (v) => (v * (n - 1) + 1) / n);
  useMotionValueEvent(scrollYProgress, "change", (v) => setActive(Math.round(v * (n - 1))));

  const go = (k: number) => {
    const el = outer.current;
    if (!el) return;
    const i = Math.max(0, Math.min(n - 1, k));
    const top = el.getBoundingClientRect().top + window.scrollY;
    const target = top + (i / (n - 1)) * (el.offsetHeight - window.innerHeight);
    const lenis = (window as unknown as { __lenis?: { scrollTo: (y: number, o?: object) => void } }).__lenis;
    if (lenis) lenis.scrollTo(target, { duration: 1.1 });
    else window.scrollTo({ top: target, behavior: "smooth" });
  };

  return (
    <div ref={outer} className="pin only-desk" style={{ height: `${n * 85 + 15}vh` }}>
      <div className="pin-sticky">
        <div className="wrap work-bar">
          <span className="work-count" aria-live="polite">
            {pad(active + 1)} / {pad(n)}
          </span>
          <Arrows onPrev={() => go(active - 1)} onNext={() => go(active + 1)} />
        </div>
        <div className="progress" aria-hidden="true">
          <motion.div style={{ scaleX: bar }} />
        </div>
        <motion.div ref={track} className="track" style={{ x, marginTop: 24 }}>
          {projects.map((p, i) => (
            <Slide key={p.slug} p={p} priority={i === 0} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

/** Phones (and reduced motion): a native swipe carousel with dots. */
function Swipe({ projects, className }: { projects: SlideData[]; className: string }) {
  const n = projects.length;
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const onScroll = () => {
    const el = ref.current;
    if (!el) return;
    const w = (el.firstElementChild as HTMLElement | null)?.offsetWidth ?? 1;
    setActive(Math.round(el.scrollLeft / (w + 16)));
  };
  const go = (k: number) => {
    const el = ref.current;
    const i = Math.max(0, Math.min(n - 1, k));
    const child = el?.children[i] as HTMLElement | undefined;
    if (el && child) el.scrollTo({ left: child.offsetLeft - (el.clientWidth - child.offsetWidth) / 2, behavior: "smooth" });
  };

  return (
    <div className={className}>
      <div className="wrap work-bar">
        <span className="work-count">
          {pad(active + 1)} / {pad(n)}
        </span>
        <Arrows onPrev={() => go(active - 1)} onNext={() => go(active + 1)} />
      </div>
      <div ref={ref} className="swipe" onScroll={onScroll}>
        {projects.map((p) => (
          <Slide key={p.slug} p={p} />
        ))}
      </div>
      <div className="dots">
        {projects.map((p, i) => (
          <button key={p.slug} type="button" aria-label={`Show ${p.title}`} aria-current={i === active} onClick={() => go(i)} />
        ))}
      </div>
    </div>
  );
}

export default function WorkCarousel({ projects }: { projects: SlideData[] }) {
  const reduce = useClientReducedMotion();
  if (reduce) return <Swipe projects={projects} className="" />;
  return (
    <>
      <Pinned projects={projects} />
      <Swipe projects={projects} className="only-mob" />
    </>
  );
}
