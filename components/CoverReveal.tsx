"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { useClientReducedMotion } from "./useClientReducedMotion";

/** The project cover opens like a curtain from the bottom on load. */
export default function CoverReveal({ children }: { children: ReactNode }) {
  const reduce = useClientReducedMotion();
  return (
    <motion.div
      className="p-cover cover-hover"
      initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
      animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
      transition={{ duration: reduce ? 0 : 1.3, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
    >
      {children}
    </motion.div>
  );
}
