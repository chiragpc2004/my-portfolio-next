"use client";

import { useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { SiKaggle, SiInstagram, SiFacebook, SiX } from "react-icons/si";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Optimistically show success before API completes
    setStatus("success");

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("message", form.message);
    formData.append("_captcha", "false");
    formData.append("_template", "box");

    try {
      const res = await fetch("https://formsubmit.co/chiragpc2004@gmail.com", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }

    setTimeout(() => setStatus(null), 3000);
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center px-6 sm:px-10 py-24 bg-lightBg dark:bg-darkBg text-black dark:text-white font-[Poppins] scroll-mt-16"
    >
      <div className="max-w-5xl mx-auto w-full space-y-14">
        {/* Header */}
        <div className="text-center md:text-left space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold inline-block border-b-4 border-[#1e40af] dark:border-[#58a6ff] pb-2">
            Contact
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl text-base sm:text-lg">
            Got a project in mind or just want to connect? I’m always open to opportunities and collaborations.
          </p>
        </div>

        {/* Contact Links */}
        <div className="grid sm:grid-cols-3 gap-4">
          <HoverLink href="mailto:chiragpc2004@gmail.com" icon={<Mail size={18} />} label="chiragpc2004@gmail.com" />
          <HoverLink href="https://github.com/chiragpc2004" icon={<Github size={18} />} label="GitHub" />
          <HoverLink href="https://linkedin.com/in/chiragpc2004" icon={<Linkedin size={18} />} label="LinkedIn" />
        </div>

        {/* Socials */}
        <div className="grid sm:grid-cols-4 gap-4">
          <HoverLink href="https://www.kaggle.com/chiragpoojarikodi" icon={<SiKaggle size={16} />} label="Kaggle" />
          <HoverLink href="https://x.com/chiragpc_2004" icon={<SiX size={16} />} label="Twitter" />
          <HoverLink href="https://www.instagram.com/chiragpc_2004/" icon={<SiInstagram size={16} />} label="Instagram" />
          <HoverLink href="https://www.facebook.com/chirag.poojarikodi" icon={<SiFacebook size={16} />} label="Facebook" />
        </div>

        {/* Form */}
        <div className="bg-white/80 dark:bg-[#161b22]/60 border border-gray-300 dark:border-white/10 rounded-xl p-6 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                name="name"
                required
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                className="px-4 py-2 text-sm bg-white dark:bg-[#0d1117] text-black dark:text-white border border-gray-300 dark:border-white/10 rounded-md placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1e40af] dark:focus:ring-[#58a6ff]"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Your email"
                value={form.email}
                onChange={handleChange}
                className="px-4 py-2 text-sm bg-white dark:bg-[#0d1117] text-black dark:text-white border border-gray-300 dark:border-white/10 rounded-md placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1e40af] dark:focus:ring-[#58a6ff]"
              />
            </div>
            <textarea
              name="message"
              required
              placeholder="Write your message here..."
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-2 text-sm bg-white dark:bg-[#0d1117] text-black dark:text-white border border-gray-300 dark:border-white/10 rounded-md placeholder-gray-500 dark:placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-[#1e40af] dark:focus:ring-[#58a6ff]"
            />
            <div className="text-right">
              <button
                type="submit"
                className="px-6 py-2 bg-[#1e40af] dark:bg-[#58a6ff] hover:bg-[#1e3a8a] dark:hover:bg-[#4698ff] text-white text-sm font-semibold rounded-md transition"
              >
                Send Message
              </button>
            </div>

            {/* Status Message */}
            <p
              className={`text-sm text-center transition-opacity duration-500 ${
                status === "success"
                  ? "text-green-500 opacity-100"
                  : status === "error"
                  ? "text-red-500 opacity-100"
                  : "opacity-0"
              }`}
            >
              {status === "success"
                ? "✅ Your message has been sent!"
                : status === "error"
                ? "❌ Failed to send. Please try again."
                : ""}
            </p>
          </form>
        </div>

        {/* Footer Note */}
        <p className="text-xs text-gray-500 dark:text-gray-400 text-center sm:text-left">
          © {new Date().getFullYear()} Chirag P C — All rights reserved.
        </p>
      </div>
    </section>
  );
}

function HoverLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 px-5 py-3 rounded-md border border-gray-300 dark:border-white/10 bg-white/80 dark:bg-white/5 hover:bg-blue-50 dark:hover:bg-white/10 backdrop-blur text-gray-700 dark:text-gray-300 hover:text-[#1e40af] dark:hover:text-[#58a6ff] transition-all w-full shadow-sm"
    >
      <span className="shrink-0">{icon}</span>
      <span className="truncate">{label}</span>
    </a>
  );
}
