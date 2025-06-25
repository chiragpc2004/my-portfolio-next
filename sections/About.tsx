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
      className="min-h-screen px-6 sm:px-10 py-24 bg-lightBg dark:bg-darkBg text-black dark:text-white scroll-mt-16 flex items-center"
    >
      <div className="max-w-5xl mx-auto w-full space-y-16">
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-bold inline-block border-b-4 border-[#1e40af] dark:border-[#58a6ff] pb-2 font-[Poppins]">
            About Me
          </h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto md:mx-0">
            I'm <strong>Chirag</strong>, a Machine Learning Engineer, AI Enthusiast, and Full Stack Developer. I build intelligent systems that fuse data-driven AI with human-friendly design. From model training to scalable deployment, I handle the full ML pipeline.
          </p>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-3xl mx-auto md:mx-0">
            Outside of code, I love building things, learning new software, and doing graphic design.
          </p>
        </div>

        <div className="space-y-10">
          {categories.map((cat) => (
            <div key={cat.title}>
              <h3 className="text-xl font-semibold text-[#1e40af] dark:text-[#58a6ff] mb-3">{cat.title}</h3>
              <div className="flex flex-wrap gap-3">
                {cat.items.map((item) => (
                  <span
                    key={item.label}
                    className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-[#1e293b] text-sm rounded-full font-mono border border-gray-300 dark:border-white/10 hover:scale-105 transition-transform"
                  >
                    <span className="text-lg">{item.icon}</span>
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
