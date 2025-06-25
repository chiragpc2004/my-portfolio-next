"use client";

import { FaChartLine } from "react-icons/fa";
import {
  SiPython, SiCplusplus, SiJavascript, SiMysql,
  SiPandas, SiNumpy, SiScikitlearn, SiTensorflow, SiPytorch,
  SiReact, SiTailwindcss, SiFastapi, SiNodedotjs,
  SiGit, SiDocker, SiSupabase, SiRender, SiVercel,
  SiSpring // replacing Java with Spring (if desired)
} from "react-icons/si";

const categories = [
  {
    title: "Languages",
    items: [
      { label: "Python", icon: <SiPython /> },
      { label: "Java", icon: <SiSpring /> },
      { label: "C++", icon: <SiCplusplus /> },
      { label: "JavaScript", icon: <SiJavascript /> },
      { label: "SQL", icon: <SiMysql /> },
    ],
  },
  {
    title: "ML & AI",
    items: [
      { label: "Pandas", icon: <SiPandas /> },
      { label: "NumPy", icon: <SiNumpy /> },
      { label: "Matplotlib", icon: <FaChartLine /> },
      { label: "Scikit-Learn", icon: <SiScikitlearn /> },
      { label: "TensorFlow", icon: <SiTensorflow /> },
      { label: "PyTorch", icon: <SiPytorch /> },
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      { label: "React", icon: <SiReact /> },
      { label: "Tailwind CSS", icon: <SiTailwindcss /> },
      { label: "FastAPI", icon: <SiFastapi /> },
      { label: "Node.js", icon: <SiNodedotjs /> },
    ],
  },
  {
    title: "DevOps & Tools",
    items: [
      { label: "Git", icon: <SiGit /> },
      { label: "Docker", icon: <SiDocker /> },
      { label: "Supabase", icon: <SiSupabase /> },
      { label: "Render", icon: <SiRender /> },
      { label: "Vercel", icon: <SiVercel /> },
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
                    className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-[#1e293b] text-sm text-blue-900 dark:text-blue-300 rounded-full font-mono border border-gray-300 dark:border-white/10 hover:scale-105 transition-transform"
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
