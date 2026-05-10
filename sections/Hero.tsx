"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, Sparkles } from "lucide-react";

function Hero() {
  return (
    <motion.section
      id="home"
      className="relative min-h-screen bg-[#f9fafb] text-[#1f2937] dark:bg-[#0d1117] dark:text-[#c9d1d9] flex items-center px-4 sm:px-8 md:px-12 py-12 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Gradient Background Blobs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-400 to-violet-400 dark:from-indigo-600 dark:to-violet-600 rounded-full blur-[140px] opacity-20 dark:opacity-15 z-0 pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-gradient-to-tl from-pink-400 to-indigo-400 dark:from-pink-600 dark:to-blue-600 rounded-full blur-[130px] opacity-15 dark:opacity-10 z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          {/* Available badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700/50 text-green-700 dark:text-green-400 text-xs font-semibold tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            Available for opportunities
          </div>

          <p className="text-sm sm:text-base text-gray-500 dark:text-[#8b949e] mb-2 font-mono tracking-widest uppercase">
            Hi, my name is
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight font-[Poppins]">
            <span className="bg-gradient-to-r from-indigo-700 via-violet-600 to-indigo-500 dark:from-white dark:via-[#c9d1d9] dark:to-[#8b949e] bg-clip-text text-transparent">
              Chirag P C
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-500 dark:text-[#58a6ff] mb-6 font-[Poppins]">
            Machine Learning Engineer &amp; AI Enthusiast
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-[#8b949e] mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
            I specialize in building intelligent systems — from machine learning models to scalable web apps.
            I work at the intersection of AI, engineering, and product thinking to deliver real-world impact.
          </p>

          {/* Button Row */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:scale-[1.03] hover:shadow-lg hover:shadow-indigo-500/25 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              View My Work <ArrowRight size={16} />
            </a>
            <a
              href="https://drive.google.com/file/d/13gG3z98A3viQlp8BNyU-P3B6fLl3JrIc/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-indigo-300 dark:border-[#30363d] text-indigo-700 dark:text-[#c9d1d9] bg-white dark:bg-white/5 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:bg-indigo-50 dark:hover:bg-white/10 hover:scale-[1.03] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-300 dark:focus:ring-[#58a6ff]"
            >
              Resume <FileText size={16} />
            </a>
          </div>
        </div>

        {/* Right Profile Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 via-violet-500 to-pink-500 blur-xl opacity-30 dark:opacity-25 scale-110 pointer-events-none" />
            {/* Gradient border frame */}
            <div className="relative p-1 rounded-full bg-gradient-to-tr from-indigo-500 via-violet-500 to-pink-500 shadow-2xl">
              <img
                src="https://avatars.githubusercontent.com/u/72426288"
                alt="Chirag"
                className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full object-cover bg-gray-100 dark:bg-[#161b22]"
              />
            </div>
            {/* Floating sparkle badge */}
            <div className="absolute -bottom-2 -right-2 bg-white dark:bg-[#161b22] border border-gray-200 dark:border-white/10 rounded-full px-3 py-1.5 text-xs font-semibold text-indigo-600 dark:text-[#58a6ff] shadow-md flex items-center gap-1.5">
              <Sparkles size={12} />
              ML &amp; AI
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;
