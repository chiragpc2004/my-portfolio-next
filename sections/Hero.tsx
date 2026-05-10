"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, Sparkles } from "lucide-react";

function Hero() {
  return (
    <motion.section
      id="home"
      className="relative h-screen bg-[#f0f6ff] text-[#0f172a] dark:bg-[#0b1120] dark:text-[#e2e8f0] flex items-center px-4 sm:px-8 md:px-12 overflow-hidden scroll-mt-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Gradient blobs */}
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-full blur-[150px] opacity-15 dark:opacity-10 pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[420px] h-[420px] bg-gradient-to-tl from-sky-500 to-blue-600 rounded-full blur-[140px] opacity-10 dark:opacity-8 pointer-events-none" />

      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 pt-16">
        {/* Left */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 rounded-full bg-green-100 dark:bg-green-900/20 border border-green-300 dark:border-green-700/40 text-green-700 dark:text-green-400 text-xs font-semibold tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            Available for opportunities
          </div>

          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-2 font-mono tracking-widest uppercase">
            Hi, my name is
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight font-[Poppins] text-slate-900 dark:text-white">
            Chirag P C
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-5 font-[Poppins] bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
            Machine Learning Engineer &amp; AI Enthusiast
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
            I specialize in building intelligent systems — from machine learning models to scalable web apps.
            I work at the intersection of AI, engineering, and product thinking to deliver real-world impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:scale-[1.03] hover:shadow-lg hover:shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              View My Work <ArrowRight size={15} />
            </a>
            <a
              href="https://drive.google.com/file/d/13gG3z98A3viQlp8BNyU-P3B6fLl3JrIc/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-blue-300 dark:border-blue-800 text-blue-700 dark:text-blue-300 bg-white dark:bg-blue-900/20 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:bg-blue-50 dark:hover:bg-blue-900/40 hover:scale-[1.03] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Resume <FileText size={15} />
            </a>
          </div>
        </div>

        {/* Right — profile image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-cyan-400 to-sky-400 blur-xl opacity-30 dark:opacity-20 scale-110 pointer-events-none" />
            <div className="relative p-1 rounded-full bg-gradient-to-tr from-blue-500 via-cyan-400 to-sky-400 shadow-2xl shadow-blue-500/20">
              <img
                src="https://avatars.githubusercontent.com/u/72426288"
                alt="Chirag"
                className="w-52 h-52 sm:h-64 sm:w-64 md:w-72 md:h-72 rounded-full object-cover bg-slate-100 dark:bg-[#0e1830]"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-white dark:bg-[#0e1830] border border-blue-100 dark:border-blue-900/40 rounded-full px-3 py-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 shadow-md flex items-center gap-1.5">
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
