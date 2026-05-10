"use client";

import { FaChartLine } from "react-icons/fa";
import {
  SiPython, SiCplusplus, SiJavascript, SiMysql,
  SiPandas, SiNumpy, SiScikitlearn, SiTensorflow, SiPytorch,
  SiReact, SiTailwindcss, SiFastapi, SiNodedotjs,
  SiGit, SiDocker, SiSupabase, SiRender, SiVercel, SiSpring,
} from "react-icons/si";

const categories = [
  {
    title: "Languages",
    items: [
      { label: "Python", icon: <SiPython className="text-[#3776AB]" /> },
      { label: "Java", icon: <SiSpring className="text-[#6DB33F]" /> },
      { label: "C++", icon: <SiCplusplus className="text-[#00599C]" /> },
      { label: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { label: "SQL", icon: <SiMysql className="text-[#4479A1]" /> },
    ],
  },
  {
    title: "ML & AI",
    items: [
      { label: "Pandas", icon: <SiPandas className="text-[#150458]" /> },
      { label: "NumPy", icon: <SiNumpy className="text-[#4DABCF]" /> },
      { label: "Matplotlib", icon: <FaChartLine className="text-[#11557C]" /> },
      { label: "Scikit-Learn", icon: <SiScikitlearn className="text-[#F7931E]" /> },
      { label: "TensorFlow", icon: <SiTensorflow className="text-[#FF6F00]" /> },
      { label: "PyTorch", icon: <SiPytorch className="text-[#EE4C2C]" /> },
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      { label: "React", icon: <SiReact className="text-[#61DAFB]" /> },
      { label: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      { label: "FastAPI", icon: <SiFastapi className="text-[#009688]" /> },
      { label: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
    ],
  },
  {
    title: "DevOps & Tools",
    items: [
      { label: "Git", icon: <SiGit className="text-[#F05032]" /> },
      { label: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
      { label: "Supabase", icon: <SiSupabase className="text-[#3ECF8E]" /> },
      { label: "Render", icon: <SiRender className="text-[#46E3B7]" /> },
      { label: "Vercel", icon: <SiVercel className="text-black dark:text-white" /> },
    ],
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="h-screen px-6 sm:px-10 bg-[#f9fafb] text-[#1f2937] dark:bg-[#0d1117] dark:text-[#c9d1d9] transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto w-full h-full flex flex-col justify-center gap-7 pt-16">
        {/* Intro */}
        <div className="space-y-2 text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-bold font-[Poppins] relative inline-block pb-1">
            About Me
            <span className="absolute left-0 -bottom-0.5 w-full h-0.5 bg-indigo-500 rounded-full" />
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto md:mx-0 pt-1">
            I&apos;m <strong className="text-gray-800 dark:text-gray-200">Chirag</strong>, a Machine Learning Engineer and Full Stack Developer. I build intelligent systems that fuse data-driven AI with human-friendly design — from model training to scalable deployment. Outside of code, I love building things and doing graphic design.
          </p>
        </div>

        {/* Tech stack */}
        <div className="space-y-3">
          <h3 className="text-base font-semibold text-indigo-600 dark:text-indigo-400 font-[Poppins] text-center md:text-left">
            Tech Toolbox
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="bg-white dark:bg-[#161b22] border border-gray-200 dark:border-white/8 rounded-xl p-4 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1 h-4 rounded-full bg-indigo-500 shrink-0" />
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 font-[Poppins]">{cat.title}</h4>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((item) => (
                    <span
                      key={item.label}
                      className="flex items-center gap-1.5 px-2.5 py-1 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/8 text-xs rounded-lg font-mono text-gray-700 dark:text-gray-300 hover:border-indigo-300 dark:hover:border-indigo-700 hover:scale-105 transition-all duration-150 cursor-default"
                    >
                      <span className="text-sm leading-none">{item.icon}</span>
                      {item.label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
