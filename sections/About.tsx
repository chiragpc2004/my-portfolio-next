"use client";

import { motion } from "framer-motion";
import { FaChartLine } from "react-icons/fa";
import {
  SiPython, SiCplusplus, SiJavascript, SiMysql,
  SiPandas, SiNumpy, SiScikitlearn, SiTensorflow, SiPytorch,
  SiReact, SiTailwindcss, SiFastapi, SiNodedotjs,
  SiGit, SiDocker, SiSupabase, SiRender, SiVercel, SiSpring,
} from "react-icons/si";
import { Brain, Code2, Layers } from "lucide-react";

const specialties = [
  {
    icon: <Brain size={22} />,
    title: "Machine Learning",
    description: "Designing and training models — from classical ML to deep learning — deployed at scale.",
  },
  {
    icon: <Code2 size={22} />,
    title: "Full Stack Development",
    description: "End-to-end web apps with React, FastAPI, and Node.js, backed by robust data pipelines.",
  },
  {
    icon: <Layers size={22} />,
    title: "AI Integration",
    description: "Embedding LLMs, vision models, and NLP into real products with clean, maintainable APIs.",
  },
];

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
    title: "Frameworks",
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
      className="h-screen bg-[#f9fafb] dark:bg-[#0d1117] text-[#1f2937] dark:text-[#c9d1d9] transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto h-full px-6 sm:px-10 flex flex-col justify-between pt-20 pb-12">

        {/* Top — heading + bio */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-mono tracking-[0.3em] uppercase text-indigo-500 dark:text-indigo-400 mb-3">
            About Me
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white font-[Poppins] max-w-3xl">
            Building intelligent systems that matter.
          </h2>
          <p className="mt-3 text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl">
            I&apos;m <span className="text-gray-800 dark:text-gray-200 font-medium">Chirag</span> — a Machine Learning Engineer and Full Stack Developer fusing data-driven AI with human-friendly design.
          </p>
        </motion.div>

        {/* Middle — specialty cards */}
        <motion.div
          className="grid sm:grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {specialties.map((s) => (
            <div
              key={s.title}
              className="bg-white dark:bg-[#111827] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5"
            >
              <div className="text-indigo-600 dark:text-indigo-400 mb-3">{s.icon}</div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1.5 font-[Poppins]">{s.title}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Bottom — tech toolbox */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-xs font-mono tracking-[0.25em] uppercase text-gray-400 dark:text-gray-600 mb-5">
            Tech Toolbox
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4">
            {categories.map((cat) => (
              <div key={cat.title}>
                <h4 className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-3">
                  {cat.title}
                </h4>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item.label} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <span className="text-base leading-none shrink-0">{item.icon}</span>
                      {item.label}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
