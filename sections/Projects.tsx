"use client";

const projects = [
  {
    title: "Iris Classifier",
    description: "A full-stack ML app classifying Iris flower species using scikit-learn, FastAPI backend, and React frontend.",
    tech: ["scikit-learn", "FastAPI", "React"],
    github: "https://iris-classifier-one.vercel.app/",
    demo: "#",
  },
  {
    title: "Teachable Machine",
    description: "Image classifier webapp that lets users train models in-browser. Great for low-resource setups.",
    tech: ["TensorFlow", "React", "Supabase"],
    github: "https://github.com/chiragpc2004/Teachable_Machine",
    demo: "#",
  },
  {
    title: "AI Chatbot",
    description: "Conversational chatbot built on transformer models. Multi-turn and human-like.",
    tech: ["Python", "TensorFlow", "Transformers"],
    github: "https://chiragchatbot.streamlit.app/",
    demo: "#",
  },
  {
    title: "Image-to-Story",
    description: "Creative ML app that generates narratives from images using image captioning techniques.",
    tech: ["Python", "Hugging Face", "Vision-to-Text"],
    github: "https://github.com/chiragpc2004/Image-to-story",
    demo: "#",
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
          <h2 className="text-4xl sm:text-5xl font-bold inline-block border-b-4 border-indigo-500 dark:border-[#58a6ff] pb-2 font-[Poppins]">
            Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg font-[Poppins] max-w-2xl mx-auto md:mx-0">
            A curated selection of AI & ML projects built with real-world applicability across classification, NLP, and creative generation.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, index) => (
            <a
              key={index}
              href={proj.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white dark:bg-[#161b22] border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-sm hover:ring-1 hover:ring-indigo-500 dark:hover:ring-[#58a6ff] hover:scale-[1.02] hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-indigo-800 dark:text-[#58a6ff] mb-3 group-hover:underline underline-offset-4 font-[Poppins]">
                    {proj.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base mb-4 leading-relaxed font-[Poppins]">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {proj.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-gray-100 dark:bg-[#1e293b] text-indigo-700 dark:text-blue-300 text-xs sm:text-sm rounded-full font-mono border border-gray-300 dark:border-white/10 hover:scale-105 transition-transform"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Live Demo */}
                {proj.demo !== "#" && (
                  <div className="mt-4">
                    <span className="text-sm text-indigo-600 dark:text-blue-300 underline hover:text-indigo-800 dark:hover:text-blue-400 transition font-[Poppins]">
                      🌐 Live Demo
                    </span>
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
