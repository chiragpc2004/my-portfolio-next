"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Iris Classifier",
    description: "Full-stack ML app classifying Iris flower species using scikit-learn, FastAPI, and React.",
    tech: ["scikit-learn", "FastAPI", "React"],
    link: "https://iris-classifier-one.vercel.app/",
  },
  {
    title: "Teachable Machine",
    description: "Image classifier webapp that lets users train models in-browser. Built for low-resource environments.",
    tech: ["TensorFlow", "React", "Supabase"],
    link: "https://github.com/chiragpc2004/Teachable_Machine",
  },
  {
    title: "AI Chatbot",
    description: "Conversational chatbot built on transformer models with multi-turn, human-like dialogue.",
    tech: ["Python", "TensorFlow", "Transformers"],
    link: "https://chiragchatbot.streamlit.app/",
  },
  {
    title: "Image-to-Story",
    description: "Creative ML app that generates narratives from images using vision-to-text captioning.",
    tech: ["Python", "Hugging Face", "Vision-to-Text"],
    link: "https://github.com/chiragpc2004/Image-to-story",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="h-screen bg-[#f9fafb] dark:bg-[#0d1117] text-[#1f2937] dark:text-[#c9d1d9] transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto h-full px-6 sm:px-10 flex flex-col justify-between pt-24 pb-14">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-mono tracking-[0.3em] uppercase text-indigo-500 dark:text-indigo-400 mb-4">
            Selected Work
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white font-[Poppins]">
            Projects
          </h2>
          <p className="mt-3 text-base text-gray-500 dark:text-gray-400 max-w-xl">
            A curated selection of AI &amp; ML projects across classification, NLP, and creative generation.
          </p>
        </motion.div>

        {/* Cards — 2×2, fill remaining space */}
        <motion.div
          className="grid sm:grid-cols-2 gap-4 flex-1 mt-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          {projects.map((proj, i) => (
            <a
              key={i}
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between bg-white dark:bg-[#111827] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-7 hover:border-indigo-300 dark:hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-500/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-mono text-gray-400 dark:text-gray-600 tracking-widest uppercase">
                    0{i + 1}
                  </span>
                  <ExternalLink
                    size={15}
                    className="text-gray-300 dark:text-gray-700 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-200"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white font-[Poppins] mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                  {proj.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {proj.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-5">
                {proj.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 text-xs rounded-full font-mono border border-gray-200 dark:border-white/8"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
