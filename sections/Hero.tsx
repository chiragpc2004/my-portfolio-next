"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";

function Hero() {
  return (
    <motion.section
      id="home"
      className="relative h-screen bg-[#f9fafb] dark:bg-[#0d1117] flex flex-col items-center justify-center px-6 overflow-hidden text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[700px] bg-indigo-500 dark:bg-indigo-700 rounded-full blur-[200px] opacity-[0.07] dark:opacity-[0.12]" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6 max-w-4xl">
        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="p-[3px] rounded-full bg-gradient-to-tr from-indigo-500 via-indigo-400 to-indigo-300 shadow-2xl shadow-indigo-500/20">
            <img
              src="https://avatars.githubusercontent.com/u/72426288"
              alt="Chirag"
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover bg-gray-200 dark:bg-[#161b22]"
            />
          </div>
          {/* Available dot */}
          <span className="absolute bottom-1 right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-white dark:border-[#0d1117]" />
          </span>
        </motion.div>

        {/* Text */}
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <p className="text-xs font-mono tracking-[0.3em] uppercase text-gray-400 dark:text-gray-500">
            Machine Learning Engineer
          </p>

          <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-white font-[Poppins]">
            Chirag P C
          </h1>

          <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl">
            I build intelligent systems — from machine learning models to scalable
            web apps — at the intersection of AI, engineering, and product thinking.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex items-center gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white px-7 py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-200 hover:scale-[1.04] hover:shadow-xl hover:shadow-indigo-500/25"
          >
            View My Work <ArrowRight size={15} />
          </a>
          <a
            href="https://drive.google.com/file/d/13gG3z98A3viQlp8BNyU-P3B6fLl3JrIc/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm tracking-wide border border-gray-300 dark:border-white/15 text-gray-700 dark:text-gray-300 hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200 hover:scale-[1.04]"
          >
            Resume <FileText size={15} />
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-300 dark:text-gray-600"
        >
          <span className="text-[10px] tracking-widest uppercase font-mono">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-gray-300 dark:from-gray-600 to-transparent" />
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Hero;
