"use client";

import { FaChartLine } from "react-icons/fa";
import {
  SiPython, SiCplusplus, SiJavascript, SiMysql,
  SiPandas, SiNumpy, SiScikitlearn, SiTensorflow, SiPytorch,
  SiReact, SiTailwindcss, SiFastapi, SiNodedotjs,
  SiGit, SiDocker, SiSupabase, SiRender, SiVercel,
  SiSpring
} from "react-icons/si";

const categories = [
  {
    title: "Languages",
    gradient: "from-blue-500 to-blue-600",
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
    gradient: "from-cyan-500 to-blue-500",
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
    gradient: "from-sky-400 to-cyan-500",
    items: [
      { label: "React", icon: <SiReact className="text-[#61DAFB]" /> },
      { label: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      { label: "FastAPI", icon: <SiFastapi className="text-[#009688]" /> },
      { label: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
    ],
  },
  {
    title: "DevOps & Tools",
    gradient: "from-teal-400 to-sky-500",
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
      className="h-screen px-6 sm:px-10 bg-[#f0f6ff] text-[#0f172a] dark:bg-[#0b1120] dark:text-[#e2e8f0] scroll-mt-0 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto w-full h-full flex flex-col justify-center gap-8 pt-16">
        {/* Intro */}
        <div className="space-y-2 text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-bold font-[Poppins] relative inline-block pb-1">
            About Me
            <span className="absolute left-0 -bottom-0.5 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto md:mx-0 pt-2">
            I&apos;m <strong className="text-slate-800 dark:text-slate-200">Chirag</strong>, a Machine Learning Engineer and Full Stack Developer. I build intelligent systems that fuse data-driven AI with human-friendly design — from model training to scalable deployment.
          </p>
        </div>

        {/* Tech Stack */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 font-[Poppins] text-center md:text-left">
            My Tech Toolbox
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="bg-white dark:bg-[#0e1830] border border-blue-100 dark:border-blue-900/30 rounded-xl p-4 shadow-sm hover:shadow-md hover:shadow-blue-500/5 transition-shadow duration-300"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <span className={`w-1 h-4 rounded-full bg-gradient-to-b ${cat.gradient} shrink-0`} />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 font-[Poppins]">
                    {cat.title}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item.label}
                      className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-50 dark:bg-[#0b1120] border border-blue-100 dark:border-blue-900/30 text-xs rounded-lg font-mono text-slate-700 dark:text-slate-300 hover:scale-105 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-200 cursor-default"
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
