"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import RollText from "./RollText";
import IntroMark from "./IntroMark";
import { site } from "@/content/site";

/**
 * Floating pill nav. It reads the section underneath it (data-theme="dark" | "light")
 * and flips its colours to match, and tucks away while you scroll down.
 */
export default function Nav() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [hidden, setHidden] = useState(false);
  const last = useRef(0);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      const y = window.scrollY;
      const probe = document.elementsFromPoint(window.innerWidth / 2, 40);
      const section = probe.find(
        (el) =>
          el instanceof HTMLElement &&
          el.closest("[data-theme]") &&
          !el.closest(".nav"),
      );
      const t = section?.closest<HTMLElement>("[data-theme]")?.dataset.theme;
      if (t === "dark" || t === "light") setTheme(t);
      setHidden(y > 200 && y > last.current + 4);
      if (y < last.current - 4 || y <= 200) setHidden(false);
      last.current = y;
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
      <IntroMark theme={theme} hidden={hidden} />
      <nav
        className="nav"
        aria-label="Primary"
        data-theme={theme}
        data-hidden={hidden}
      >
        <Link href="/" className="nav-name">
          <RollText>{site.name}</RollText>
        </Link>
        <Link href="/#journey" className="nav-link nav-journey">
          <RollText>Journey</RollText>
        </Link>
        <Link href="/#work" className="nav-link">
          <RollText>Work</RollText>
        </Link>
        <Link href="/#contact" className="nav-cta">
          <RollText>Get in touch</RollText>
        </Link>
      </nav>
    </header>
  );
}
