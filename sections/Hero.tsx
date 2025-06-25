"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";


function Hero() {
  return (
    <motion.section
      id="home"
      className="relative min-h-screen bg-[#0d1117] text-[#c9d1d9] flex items-center px-4 sm:px-8 md:px-12 py-12 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Gradient Background Blob */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-gradient-to-tr from-[#58a6ff] to-[#d946ef] rounded-full blur-[120px] opacity-30 z-0"></div>

      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-sm sm:text-base text-[#e7eaec] mb-3 font-mono">
            Hi, my name is
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight text-white font-[Poppins]">
            Chirag P C
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#58a6ff] mb-6 font-[Poppins]">
            Machine Learning Engineer & AI Enthusiast
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#c9d1d9] mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
            I specialize in building intelligent systems — from machine learning models to scalable web apps.
            I work at the intersection of AI, engineering, and product thinking to deliver real-world impact.
          </p>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 border border-[#30363d] text-[#c9d1d9] px-5 py-3 rounded hover:bg-[#21262d] transition duration-150 font-mono"
          >
            View My Work <ArrowRight size={16} />
          </a>
        </div>

        {/* Right Profile Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src="https://avatars.githubusercontent.com/u/72426288"
            alt="Chirag"
            className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full border-4 border-[#30363d] shadow-2xl object-cover"
          />
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;
