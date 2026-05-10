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
    color: "from-blue-500 to-indigo-500",
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
    color: "from-orange-500 to-red-500",
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
    color: "from-cyan-500 to-teal-500",
    items: [
      { label: "React", icon: <SiReact className="text-[#61DAFB]" /> },
      { label: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      { label: "FastAPI", icon: <SiFastapi className="text-[#009688]" /> },
      { label: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
    ],
  },
  {
    title: "DevOps & Tools",
    color: "from-violet-500 to-purple-500",
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
      className="min-h-screen px-6 sm:px-10 py-16 bg-[#f9fafb] text-[#1f2937] dark:bg-[#0d1117] dark:text-[#c9d1d9] scroll-mt-16 flex items-center transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto w-full space-y-12">
        {/* Intro */}
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-5xl font-bold pb-1 font-[Poppins] relative inline-block">
            About Me
            <span className="absolute left-0 -bottom-1 w-full h-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full" />
          </h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto md:mx-0 pt-2">
            I&apos;m <strong>Chirag</strong>, a Machine Learning Engineer, AI Enthusiast, and Full Stack Developer. I build intelligent systems that fuse data-driven AI with human-friendly design—from model training to scalable deployment.
          </p>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-3xl mx-auto md:mx-0">
            Outside of code, I love building things, learning new software, and doing graphic design.
          </p>
        </div>

        {/* Tech Summary Heading */}
        <div className="space-y-1 text-center md:text-left">
          <h3 className="text-2xl font-semibold text-indigo-600 dark:text-[#58a6ff] font-[Poppins]">
            My Tech Toolbox
          </h3>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-3xl mx-auto md:mx-0">
            A quick look at the languages, tools, and frameworks I use—from backend APIs and AI to UI/UX and deployment.
          </p>
        </div>

        {/* Tech Stack */}
        <div className="grid sm:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/8 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className={`w-1 h-5 rounded-full bg-gradient-to-b ${cat.color} shrink-0`} />
                <h4 className="text-base font-semibold text-gray-800 dark:text-[#c9d1d9] font-[Poppins]">
                  {cat.title}
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item.label}
                    className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/8 text-xs sm:text-sm rounded-lg font-mono text-gray-700 dark:text-gray-300 hover:scale-105 hover:border-indigo-300 dark:hover:border-[#58a6ff]/40 transition-all duration-200 shadow-sm cursor-default"
                  >
                    <span className="text-base leading-none">{item.icon}</span>
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
