"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, type CSSProperties } from "react";

type Lenis = { scrollTo: (y: number, o?: object) => void; stop?: () => void; start?: () => void };

/** How far (in wheel/touch pixels) you keep scrolling at the very bottom before the next project opens. */
const DISTANCE = 1300;
/** Momentum that carries you into the bottom is ignored for this long, so the rail only fills on purpose. */
const ARM_MS = 350;

/**
 * The end of a project page. Once you reach the bottom, scrolling further fills a rail
 * under "Next? <title>"; when it is full, the page fades and the next project opens at the top.
 * Clicking it works too, and nothing happens unless you push past the bottom.
 */
export default function NextProjectGate({ slug, title }: { slug: string; title: string }) {
  const router = useRouter();
  const gate = useRef<HTMLAnchorElement>(null);
  const fill = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("is-leaving");
    router.prefetch(`/work/${slug}`);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let target = 0;
    let shown = 0;
    let raf = 0;
    let leaving = false;
    let touchY: number | null = null;
    let bottomSince = 0;

    const atBottom = () => window.scrollY + window.innerHeight >= root.scrollHeight - 4;
    const armed = () => {
      if (!atBottom()) {
        bottomSince = 0;
        return false;
      }
      if (!bottomSince) bottomSince = performance.now();
      return performance.now() - bottomSince > ARM_MS;
    };

    const go = () => {
      if (leaving) return;
      leaving = true;
      gate.current?.setAttribute("data-done", "");
      root.classList.add("is-leaving");
      const lenis = (window as unknown as { __lenis?: Lenis }).__lenis;
      window.setTimeout(
        () => {
          lenis?.scrollTo(0, { immediate: true, force: true });
          window.scrollTo(0, 0);
          router.push(`/work/${slug}`, { scroll: false });
        },
        reduced ? 0 : 520,
      );
    };

    const tick = () => {
      shown += (target - shown) * (reduced ? 1 : 0.18);
      if (Math.abs(target - shown) < 0.001) shown = target;
      if (fill.current) fill.current.style.transform = `scaleX(${shown})`;
      gate.current?.style.setProperty("--gate", String(shown));
      if (shown >= 0.999 && target >= 1) go();
      raf = shown !== target ? requestAnimationFrame(tick) : 0;
    };

    const push = (dy: number) => {
      if (leaving) return;
      if (dy > 0 && !armed()) return;
      if (dy < 0 && target === 0) return;
      target = Math.min(1, Math.max(0, target + dy / DISTANCE));
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const onWheel = (e: WheelEvent) => push(e.deltaMode === 1 ? e.deltaY * 32 : e.deltaY);
    const onTouchStart = (e: TouchEvent) => (touchY = e.touches[0]?.clientY ?? null);
    const onTouchMove = (e: TouchEvent) => {
      const y = e.touches[0]?.clientY;
      if (touchY == null || y == null) return;
      push((touchY - y) * 1.6);
      touchY = y;
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLElement && e.target.closest("input,textarea,select,[contenteditable]")) return;
      if (["ArrowDown", "PageDown", " ", "End"].includes(e.key)) push(e.key === "ArrowDown" ? 120 : 300);
      else if (["ArrowUp", "PageUp"].includes(e.key)) push(-300);
    };
    // Scrolling back up the page empties the rail again.
    const onScroll = () => {
      armed();
      if (!leaving && target > 0 && !atBottom()) {
        target = 0;
        if (!raf) raf = requestAnimationFrame(tick);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll);
    };
  }, [router, slug]);

  return (
    <Link
      ref={gate}
      href={`/work/${slug}`}
      className="p-gate"
      style={{ "--chars": title.length } as CSSProperties}
      data-cursor="view"
      onClick={(e) => {
        if (!e.metaKey && !e.ctrlKey && !e.shiftKey && e.button === 0) document.documentElement.classList.add("is-leaving");
      }}
    >
      <span className="p-gate-q">Next?</span>
      <span className="p-gate-t">{title}</span>
      <span className="p-gate-rail" aria-hidden="true">
        <span className="p-gate-fill" ref={fill} />
      </span>
      <span className="p-gate-hint" aria-hidden="true">
        Keep scrolling
      </span>
    </Link>
  );
}
