"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, Sparkles } from "lucide-react";

function Hero() {
  return (
    <motion.section
      id="home"
      className="relative h-screen bg-[#f9fafb] text-[#1f2937] dark:bg-[#0d1117] dark:text-[#c9d1d9] flex items-center px-6 sm:px-10 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      {/* Subtle background glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-400 dark:bg-indigo-700 rounded-full blur-[160px] opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-10 pt-16">
        {/* Left text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-green-100 dark:bg-green-900/20 border border-green-300 dark:border-green-700/40 text-green-700 dark:text-green-400 text-xs font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            Available for opportunities
          </div>

          <p className="text-xs text-gray-400 dark:text-gray-500 mb-1.5 font-mono tracking-widest uppercase">
            Hi, my name is
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3 leading-tight font-[Poppins] text-gray-900 dark:text-white">
            Chirag P C
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 font-[Poppins] text-indigo-600 dark:text-indigo-400">
            Machine Learning Engineer &amp; AI Enthusiast
          </h2>

          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-7 leading-relaxed max-w-lg mx-auto md:mx-0">
            I specialize in building intelligent systems — from machine learning models to scalable web apps.
            Working at the intersection of AI, engineering, and product thinking.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 hover:scale-[1.03] hover:shadow-lg hover:shadow-indigo-500/20"
            >
              View My Work <ArrowRight size={15} />
            </a>
            <a
              href="https://drive.google.com/file/d/13gG3z98A3viQlp8BNyU-P3B6fLl3JrIc/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-gray-300 dark:border-white/15 text-gray-700 dark:text-gray-300 bg-white dark:bg-white/5 px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:scale-[1.03]"
            >
              Resume <FileText size={15} />
            </a>
          </div>
        </div>

        {/* Right — profile image (hidden on mobile to prevent overflow) */}
        <div className="hidden md:flex w-full md:w-1/2 justify-end">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-indigo-500 blur-2xl opacity-20 scale-110 pointer-events-none" />
            <div className="relative p-1 rounded-full bg-gradient-to-tr from-indigo-500 to-indigo-300 shadow-2xl shadow-indigo-500/20">
              <img
                src="https://avatars.githubusercontent.com/u/72426288"
                alt="Chirag"
                className="w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover dark:bg-[#161b22]"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-white dark:bg-[#161b22] border border-gray-200 dark:border-white/10 rounded-full px-3 py-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 shadow-md flex items-center gap-1.5">
              <Sparkles size={11} />
              ML &amp; AI
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;
