"use client";

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
    description: "Image classifier webapp that lets users train models in-browser. Great for low-resource setups.",
    tech: ["TensorFlow", "React", "Supabase"],
    link: "https://github.com/chiragpc2004/Teachable_Machine",
  },
  {
    title: "AI Chatbot",
    description: "Conversational chatbot built on transformer models. Multi-turn and human-like responses.",
    tech: ["Python", "TensorFlow", "Transformers"],
    link: "https://chiragchatbot.streamlit.app/",
  },
  {
    title: "Image-to-Story",
    description: "Creative ML app that generates narratives from images using image captioning techniques.",
    tech: ["Python", "Hugging Face", "Vision-to-Text"],
    link: "https://github.com/chiragpc2004/Image-to-story",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="h-screen px-6 sm:px-10 bg-[#f9fafb] text-[#1f2937] dark:bg-[#0d1117] dark:text-[#c9d1d9] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-center gap-8 pt-16">
        {/* Header */}
        <div className="text-center md:text-left space-y-2">
          <h2 className="text-4xl sm:text-5xl font-bold font-[Poppins] relative inline-block pb-1">
            Projects
            <span className="absolute left-0 -bottom-0.5 w-full h-0.5 bg-indigo-500 rounded-full" />
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base font-[Poppins] max-w-2xl mx-auto md:mx-0 pt-1">
            A curated selection of AI &amp; ML projects across classification, NLP, and creative generation.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((proj, index) => (
            <a
              key={index}
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col bg-white dark:bg-[#161b22] border border-gray-200 dark:border-white/8 rounded-xl p-5 shadow-sm hover:shadow-lg hover:shadow-indigo-500/8 hover:-translate-y-1 hover:border-indigo-300 dark:hover:border-indigo-700/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 font-[Poppins] group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                  {proj.title}
                </h3>
                <ExternalLink size={13} className="shrink-0 mt-0.5 text-gray-300 dark:text-gray-600 group-hover:text-indigo-400 transition-colors duration-200" />
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed flex-1 mb-4 font-[Poppins]">
                {proj.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {proj.tech.map((tech) => (
                  <span key={tech} className="px-2 py-0.5 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 text-xs rounded-md font-mono border border-indigo-100 dark:border-indigo-800/30">
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
