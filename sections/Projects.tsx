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
      className="min-h-screen px-6 sm:px-10 py-24 bg-lightBg dark:bg-darkBg text-black dark:text-white scroll-mt-16 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full space-y-16">
        <div className="text-center md:text-left space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold inline-block border-b-4 border-[#1e40af] dark:border-[#58a6ff] pb-2 font-[Poppins]">
            Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg font-[Poppins] max-w-2xl mx-auto md:mx-0">
            A curated selection of AI & ML projects built with real-world applicability across classification, NLP, and creative generation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, index) => (
            <a
              key={index}
              href={proj.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white/80 dark:bg-[#161b22]/60 border border-gray-300 dark:border-white/10 rounded-xl p-6 shadow-sm hover:ring-1 hover:ring-[#1e40af] dark:hover:ring-[#58a6ff] hover:scale-[1.02] hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#1e40af] dark:text-[#58a6ff] mb-3 group-hover:underline underline-offset-4 font-[Poppins]">
                    {proj.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base mb-4 leading-relaxed font-[Poppins]">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {proj.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-gray-100 dark:bg-[#1e293b] text-blue-900 dark:text-blue-300 text-xs sm:text-sm rounded-full font-mono border border-gray-300 dark:border-white/10 hover:scale-105 transition-transform"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {proj.demo !== "#" && (
                  <div className="mt-4">
                    <span className="text-sm text-blue-700 dark:text-blue-300 underline hover:text-blue-900 dark:hover:text-blue-400 transition">
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
