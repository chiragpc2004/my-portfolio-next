"use client";

import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Iris Classifier",
    description: "A full-stack ML app classifying Iris flower species using scikit-learn, FastAPI backend, and React frontend.",
    tech: ["scikit-learn", "FastAPI", "React"],
    link: "https://iris-classifier-one.vercel.app/",
    accent: "from-blue-500 to-cyan-400",
  },
  {
    title: "Teachable Machine",
    description: "Image classifier webapp that lets users train models in-browser. Great for low-resource setups.",
    tech: ["TensorFlow", "React", "Supabase"],
    link: "https://github.com/chiragpc2004/Teachable_Machine",
    accent: "from-sky-500 to-blue-500",
  },
  {
    title: "AI Chatbot",
    description: "Conversational chatbot built on transformer models. Multi-turn and human-like.",
    tech: ["Python", "TensorFlow", "Transformers"],
    link: "https://chiragchatbot.streamlit.app/",
    accent: "from-cyan-500 to-sky-500",
  },
  {
    title: "Image-to-Story",
    description: "Creative ML app that generates narratives from images using image captioning techniques.",
    tech: ["Python", "Hugging Face", "Vision-to-Text"],
    link: "https://github.com/chiragpc2004/Image-to-story",
    accent: "from-teal-400 to-cyan-500",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="h-screen px-6 sm:px-10 bg-[#f0f6ff] text-[#0f172a] dark:bg-[#0b1120] dark:text-[#e2e8f0] scroll-mt-0 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-center gap-10 pt-16">
        {/* Header */}
        <div className="text-center md:text-left space-y-2">
          <h2 className="text-4xl sm:text-5xl font-bold font-[Poppins] relative inline-block pb-1">
            Projects
            <span className="absolute left-0 -bottom-0.5 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base font-[Poppins] max-w-2xl mx-auto md:mx-0 pt-1">
            A curated selection of AI &amp; ML projects built with real-world applicability across classification, NLP, and creative generation.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((proj, index) => (
            <a
              key={index}
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col bg-white dark:bg-[#0e1830] border border-blue-100 dark:border-blue-900/30 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`h-1 w-full bg-gradient-to-r ${proj.accent}`} />
              <div className="flex flex-col flex-1 p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200 font-[Poppins] group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 leading-snug">
                    {proj.title}
                  </h3>
                  <ExternalLink
                    size={14}
                    className="shrink-0 mt-0.5 text-slate-300 dark:text-slate-600 group-hover:text-blue-400 transition-colors duration-200"
                  />
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-xs mb-4 leading-relaxed flex-1 font-[Poppins]">
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {proj.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs rounded-md font-mono border border-blue-100 dark:border-blue-800/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
