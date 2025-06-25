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
      { label: "NumPy", icon: <SiNumpy className="text-[#013243]" /> },
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
      className="min-h-screen px-6 sm:px-10 py-16 bg-[#f9fafb] text-[#1f2937] dark:bg-[#0d1117] dark:text-[#c9d1d9] scroll-mt-16 flex items-center transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto w-full space-y-12">
        {/* Intro */}
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-5xl font-bold inline-block border-b-4 border-indigo-500 dark:border-[#58a6ff] pb-1 font-[Poppins]">
            About Me
          </h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto md:mx-0">
            I'm <strong>Chirag</strong>, a Machine Learning Engineer, AI Enthusiast, and Full Stack Developer. I build intelligent systems that fuse data-driven AI with human-friendly design—from model training to scalable deployment.
          </p>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-3xl mx-auto md:mx-0">
            Outside of code, I love building things, learning new software, and doing graphic design.
          </p>
        </div>

        {/* Tech Summary Heading */}
        <div className="space-y-1 text-center md:text-left">
          <h3 className="text-2xl font-semibold text-indigo-600 dark:text-[#58a6ff] font-[Poppins]">
            My Tech Toolbox
          </h3>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-3xl mx-auto md:mx-0">
            A quick look at the languages, tools, and frameworks I use—from backend APIs and AI to UI/UX and deployment.
          </p>
        </div>

        {/* Tech Stack */}
        <div className="space-y-8">
          {categories.map((cat) => (
            <div key={cat.title}>
              <h4 className="text-xl font-semibold text-indigo-600 dark:text-[#58a6ff] mb-2">
                {cat.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item.label}
                    className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-300 dark:bg-[#1e293b] dark:border-white/10 text-sm rounded-full font-mono hover:scale-105 transition-transform shadow-sm"
                  >
                    <span className="text-base">{item.icon}</span>
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
