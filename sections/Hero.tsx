"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      id="home"
      className="min-h-screen px-6 sm:px-10 py-28 bg-lightBg dark:bg-darkBg text-black dark:text-white flex items-center scroll-mt-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-20">
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-mono">Hi, my name is</p>
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight font-[Poppins]">Chirag P C</h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1e40af] dark:text-[#58a6ff] font-[Poppins]">
            Machine Learning Engineer & AI Enthusiast
          </h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-400 max-w-xl mx-auto md:mx-0 leading-relaxed">
            I specialize in building intelligent systems — from ML models to full-stack apps. I work at the intersection of AI, engineering, and product thinking to deliver real-world impact.
          </p>
          <div>
            <a
              href="#projects"
              className="inline-block mt-4 px-6 py-3 border border-gray-300 dark:border-[#30363d] text-sm font-semibold rounded-md hover:bg-gray-100 dark:hover:bg-[#21262d] transition"
            >
              View My Work →
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src="https://avatars.githubusercontent.com/u/72426288"
            alt="Chirag P C"
            className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full object-cover border-2 border-gray-300 dark:border-[#30363d] shadow-xl"
          />
        </div>
      </div>
    </motion.section>
  );
}
