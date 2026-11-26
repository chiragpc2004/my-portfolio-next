"use client";

import { Fragment, useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

/** Headline whose letters slide up from behind a mask when it scrolls into view. */
export function SplitText({
  text,
  as = "h2",
  className,
  id,
  delay = 0,
  stagger = 0.025,
}: {
  text: string;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  id?: string;
  delay?: number;
  stagger?: number;
}) {
  const Tag = motion[as];
  const lines = text.split("\n");
  let n = 0;
  const char = {
    hidden: { y: "135%" },
    shown: (i: number) => ({ y: "0%", transition: { duration: 0.9, ease, delay: delay + i * stagger } }),
  };
  return (
    <Tag
      className={className}
      id={id}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.2 }}
    >
      <span className="sr-only">{text.replace(/\n/g, " ")}</span>
      {lines.map((line, li) => (
        <span className="split-line" key={li} aria-hidden="true">
          {line.split(" ").map((word, wi, arr) => (
            <Fragment key={wi}>
              <span className="split-word">
                {Array.from(word).map((ch) => {
                  const i = n++;
                  return (
                    <motion.span key={i} className="split-char" variants={char} custom={i}>
                      {ch}
                    </motion.span>
                  );
                })}
              </span>
              {wi < arr.length - 1 ? " " : null}
            </Fragment>
          ))}
        </span>
      ))}
    </Tag>
  );
}

/** Generic fade-and-rise when the element enters the viewport. */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "li" | "p" | "section" | "figure";
}) {
  const M = motion[as];
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 1, ease, delay }}
    >
      {children}
    </M>
  );
}

/** A thin rule that draws itself from the left. */
export function DrawRule({ className = "j-rule", delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.span
      aria-hidden="true"
      className={className}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 1.2, ease, delay }}
    />
  );
}

function Word({ word, progress, range }: { word: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return (
    <motion.span className="reveal-word" style={{ opacity }}>
      {word}
    </motion.span>
  );
}

/** A paragraph that inks in word by word as you scroll through it. */
export function ScrollRevealText({ text, muted, className }: { text: string; muted?: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.4"] });
  const words = `${text} ${muted ?? ""}`.trim().split(/\s+/);
  return (
    <p ref={ref} className={className}>
      <span className="sr-only">{`${text} ${muted ?? ""}`.trim()}</span>
      <span aria-hidden="true">
        {words.map((w, i) => (
          <span key={i}>
            <Word word={w} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} />
            {i < words.length - 1 ? " " : null}
          </span>
        ))}
      </span>
    </p>
  );
}
