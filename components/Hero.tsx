"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useClientReducedMotion } from "./useClientReducedMotion";
import HeroCanvas from "./HeroCanvas";
import { site } from "@/content/site";
import { currentRole } from "@/content/journey";

/** Letters rise in with CSS on load, so the name appears even before JavaScript runs. */
function RiseText({ text, delay = 0 }: { text: string; delay?: number }) {
  let i = 0;
  return (
    <>
      {text.split("\n").map((line, li) => (
        <span key={li} className="split-line">
          {Array.from(line).map((ch) => (
            <span key={i} className="rise" style={{ ["--i" as string]: i++, ["--d" as string]: `${delay}s` }}>
              {ch === " " ? " " : ch}
            </span>
          ))}
        </span>
      ))}
    </>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useClientReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const [first, ...rest] = site.name.split(" ");

  return (
    <section ref={ref} className="hero cols dark" data-theme="dark" aria-label="Introduction">
      <motion.div style={reduce ? undefined : { scale: bgScale }} className="hero-canvas" aria-hidden="true">
        <HeroCanvas />
      </motion.div>
      <div className="hero-shade" aria-hidden="true" />
      <motion.div className="hero-inner" style={reduce ? undefined : { y, opacity }}>
        <div className="hero-main">
          <h1 className="display hero-name" aria-label={site.name}>
            <span aria-hidden="true">
              <RiseText text={`${first}\n${rest.join(" ")}`} />
            </span>
          </h1>
          <div className="hero-side">
            <p className="hero-role fade-in" style={{ ["--d" as string]: "0.55s" }}>
              <span className="dot" aria-hidden="true" />
              {currentRole.heroRole ?? currentRole.title} ↘
            </p>
            <p className="hero-pitch fade-in" style={{ ["--d" as string]: "0.7s" }}>
              {site.pitch}
            </p>
          </div>
        </div>
        <div className="hero-facts fade-in" style={{ ["--d" as string]: "0.9s" }}>
          <div>
            <p className="label">Now</p>
            <p>{currentRole.now ?? `${currentRole.title}, ${currentRole.org}`}</p>
          </div>
          <div>
            <p className="label">Looking for</p>
            <p>{site.lookingFor}</p>
          </div>
          <div>
            <p className="label">Contact</p>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
