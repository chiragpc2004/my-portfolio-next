"use client";

import { motion } from "framer-motion";
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
      <div className="max-w-6xl mx-auto h-full px-6 sm:px-10 flex flex-col justify-between pt-24 pb-14">

        {/* Top — big statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-mono tracking-[0.3em] uppercase text-indigo-500 dark:text-indigo-400 mb-4">
            About Me
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white font-[Poppins] max-w-3xl">
            Building intelligent<br className="hidden sm:block" /> systems that matter.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl">
            I&apos;m <span className="text-gray-800 dark:text-gray-200 font-medium">Chirag</span> — a Machine Learning Engineer and Full Stack Developer fusing data-driven AI with human-friendly design. I love building things at the intersection of engineering and creativity.
          </p>
        </motion.div>

        {/* Bottom — skill columns */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="text-xs font-mono tracking-[0.25em] uppercase text-gray-400 dark:text-gray-600 mb-6">
            Tech Toolbox
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6">
            {categories.map((cat) => (
              <div key={cat.title}>
                <h4 className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-4">
                  {cat.title}
                </h4>
                <ul className="space-y-2.5">
                  {cat.items.map((item) => (
                    <li key={item.label} className="flex items-center gap-2.5 text-sm text-gray-600 dark:text-gray-400">
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
