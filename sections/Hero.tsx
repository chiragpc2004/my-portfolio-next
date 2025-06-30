"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";

function Hero() {
  return (
    <motion.section
      id="home"
      className="relative min-h-screen bg-[#f9fafb] text-[#1f2937] dark:bg-[#0d1117] dark:text-[#c9d1d9] flex items-center px-4 sm:px-8 md:px-12 py-12 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Gradient Background Blob */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-gradient-to-tr from-indigo-400 to-pink-400 dark:from-[#58a6ff] dark:to-[#d946ef] rounded-full blur-[120px] opacity-30 z-0"></div>

      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-sm sm:text-base text-gray-600 dark:text-[#e7eaec] mb-3 font-mono">
            Hi, my name is
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight text-indigo-800 dark:text-white font-[Poppins]">
            Chirag P C
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-500 dark:text-[#58a6ff] mb-6 font-[Poppins]">
            Machine Learning Engineer & AI Enthusiast
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-[#c9d1d9] mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
            I specialize in building intelligent systems — from machine learning models to scalable web apps.
            I work at the intersection of AI, engineering, and product thinking to deliver real-world impact.
          </p>

          {/* Button Row */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 border border-gray-300 dark:border-[#30363d] text-indigo-700 dark:text-[#c9d1d9] px-5 py-3 rounded font-mono transition-all duration-200 hover:bg-indigo-100 dark:hover:bg-[#21262d] hover:scale-[1.05] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-300 dark:focus:ring-[#58a6ff]"
            >
              View My Work <ArrowRight size={16} />
            </a>
            <a
              href="https://drive.google.com/file/d/1MqBCPuny9TtlQzVwvJF-CjXk2pC9pJfw/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-gray-300 dark:border-[#30363d] text-indigo-700 dark:text-[#c9d1d9] px-5 py-3 rounded font-mono transition-all duration-200 hover:bg-indigo-100 dark:hover:bg-[#21262d] hover:scale-[1.05] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-300 dark:focus:ring-[#58a6ff]"
            >
              Resume <FileText size={16} />
            </a>
          </div>
        </div>

        {/* Right Profile Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src="https://avatars.githubusercontent.com/u/72426288"
            alt="Chirag"
            className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full border-4 border-gray-200 dark:border-[#30363d] shadow-2xl object-cover"
          />
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;
