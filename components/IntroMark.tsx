"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { site } from "@/content/site";

type Lenis = { scrollTo: (y: number, o?: object) => void };

/** Restart the first-visit intro: the loader and the hero entrance. */
function replayIntro() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const root = document.documentElement;
  (window as unknown as { __lenis?: Lenis }).__lenis?.scrollTo(0, {
    immediate: true,
    force: true,
  });
  window.scrollTo(0, 0);
  root.classList.remove("is-intro");
  void root.offsetWidth; // let the loader drop out so its animations start over
  root.classList.add("is-intro");
  document
    .querySelectorAll<HTMLElement>(".hero .rise, .hero .fade-in")
    .forEach((el) =>
      el.getAnimations().forEach((a) => {
        a.cancel();
        a.play();
      }),
    );
}

/**
 * The nav's brand link: "PC" while the nav is open at the top of the page, the full name once
 * it folds into the pill. Clicking it plays the intro again (from any page).
 */
export default function IntroMark() {
  const pathname = usePathname();
  const router = useRouter();
  const pending = useRef(false);

  useEffect(() => {
    if (pending.current && pathname === "/") {
      pending.current = false;
      requestAnimationFrame(replayIntro);
    }
  }, [pathname]);

  return (
    <Link
      href="/"
      className="nav-brand"
      aria-label={`${site.monogram}, ${site.name}. Play the intro again`}
      onClick={(e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
        e.preventDefault();
        if (pathname === "/") replayIntro();
        else {
          pending.current = true;
          router.push("/");
        }
      }}
    >
      <span className="nav-mark" aria-hidden="true">
        {site.monogram}
      </span>
      <span className="nav-word" aria-hidden="true">
        {site.name}
      </span>
    </Link>
  );
}
