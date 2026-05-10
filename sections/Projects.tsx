"use client";

import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Iris Classifier",
    description: "A full-stack ML app classifying Iris flower species using scikit-learn, FastAPI backend, and React frontend.",
    tech: ["scikit-learn", "FastAPI", "React"],
    link: "https://iris-classifier-one.vercel.app/",
    accent: "from-blue-500 to-indigo-500",
  },
  {
    title: "Teachable Machine",
    description: "Image classifier webapp that lets users train models in-browser. Great for low-resource setups.",
    tech: ["TensorFlow", "React", "Supabase"],
    link: "https://github.com/chiragpc2004/Teachable_Machine",
    accent: "from-orange-500 to-red-500",
  },
  {
    title: "AI Chatbot",
    description: "Conversational chatbot built on transformer models. Multi-turn and human-like.",
    tech: ["Python", "TensorFlow", "Transformers"],
    link: "https://chiragchatbot.streamlit.app/",
    accent: "from-violet-500 to-purple-500",
  },
  {
    title: "Image-to-Story",
    description: "Creative ML app that generates narratives from images using image captioning techniques.",
    tech: ["Python", "Hugging Face", "Vision-to-Text"],
    link: "https://github.com/chiragpc2004/Image-to-story",
    accent: "from-emerald-500 to-teal-500",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 sm:px-10 py-24 bg-[#f9fafb] text-[#1f2937] dark:bg-[#0d1117] dark:text-[#c9d1d9] scroll-mt-16 flex items-center transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto w-full space-y-16">
        {/* Section Header */}
        <div className="text-center md:text-left space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold pb-1 font-[Poppins] relative inline-block">
            Projects
            <span className="absolute left-0 -bottom-1 w-full h-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full" />
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg font-[Poppins] max-w-2xl mx-auto md:mx-0 pt-1">
            A curated selection of AI &amp; ML projects built with real-world applicability across classification, NLP, and creative generation.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, index) => (
            <a
              key={index}
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col bg-white dark:bg-[#161b22] border border-gray-200 dark:border-white/8 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 dark:hover:shadow-[#58a6ff]/5 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Top accent bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${proj.accent}`} />

              <div className="flex flex-col flex-1 p-6">
                {/* Card header */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-[#e6edf3] font-[Poppins] group-hover:text-indigo-600 dark:group-hover:text-[#58a6ff] transition-colors duration-200">
                    {proj.title}
                  </h3>
                  <ExternalLink
                    size={15}
                    className="shrink-0 mt-1 text-gray-400 dark:text-gray-600 group-hover:text-indigo-500 dark:group-hover:text-[#58a6ff] transition-colors duration-200"
                  />
                </div>

                <p className="text-gray-600 dark:text-[#8b949e] text-sm sm:text-base mb-5 leading-relaxed flex-1 font-[Poppins]">
                  {proj.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2">
                  {proj.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-gray-100 dark:bg-white/5 text-indigo-700 dark:text-[#79c0ff] text-xs rounded-md font-mono border border-gray-200 dark:border-white/8"
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
