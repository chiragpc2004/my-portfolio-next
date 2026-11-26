"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import RollText from "./RollText";
import IntroMark from "./IntroMark";

/**
 * At the top of the page the nav is open: PC on the left, links on the right, no background.
 * Once you scroll, it folds into a centred glass pill with the full name, and it stays there.
 * It reads the section underneath it (data-theme="dark" | "light") and flips its colours to match.
 */
export default function Nav() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [compact, setCompact] = useState(false);
  const nav = useRef<HTMLElement>(null);

  // The pill's width, measured from its contents, so the fold can animate between two lengths.
  useLayoutEffect(() => {
    const el = nav.current;
    if (!el) return;
    const measure = () => {
      const kids = Array.from(el.children) as HTMLElement[];
      const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
      const padLeft = window.matchMedia("(max-width: 520px)").matches ? 16 : 20;
      const w =
        kids.reduce((sum, k) => sum + k.offsetWidth, 0) +
        gap * (kids.length - 1) +
        padLeft +
        6 +
        2;
      el.style.setProperty("--pill-w", `${Math.ceil(w)}px`);
    };
    measure();
    document.fonts?.ready.then(measure);
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      setCompact(window.scrollY > 40);
      const probe = document.elementsFromPoint(window.innerWidth / 2, 44);
      const section = probe.find(
        (el) =>
          el instanceof HTMLElement &&
          el.closest("[data-theme]") &&
          !el.closest(".nav"),
      );
      const t = section?.closest<HTMLElement>("[data-theme]")?.dataset.theme;
      if (t === "dark" || t === "light") setTheme(t);
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header className="site-header">
      <nav
        ref={nav}
        className="nav"
        aria-label="Primary"
        data-theme={theme}
        data-compact={compact}
      >
        <IntroMark />
        <div className="nav-links">
          <Link href="/#journey" className="nav-link nav-journey">
            <RollText>Journey</RollText>
          </Link>
          <Link href="/#work" className="nav-link">
            <RollText>Work</RollText>
          </Link>
          <Link href="/#contact" className="nav-cta">
            <RollText>Get in touch</RollText>
          </Link>
        </div>
      </nav>
    </header>
  );
}
