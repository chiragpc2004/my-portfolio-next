"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { SiKaggle, SiInstagram, SiFacebook, SiX } from "react-icons/si";

const socials = [
  { href: "mailto:chiragpc2004@gmail.com", icon: <Mail size={18} />, label: "Email" },
  { href: "https://github.com/chiragpc2004", icon: <Github size={18} />, label: "GitHub" },
  { href: "https://linkedin.com/in/chiragpc2004", icon: <Linkedin size={18} />, label: "LinkedIn" },
  { href: "https://www.kaggle.com/chiragpoojarikodi", icon: <SiKaggle size={17} />, label: "Kaggle" },
  { href: "https://x.com/chiragpc_2004", icon: <SiX size={17} />, label: "Twitter" },
  { href: "https://www.instagram.com/chiragpc_2004/", icon: <SiInstagram size={17} />, label: "Instagram" },
  { href: "https://www.facebook.com/chirag.poojarikodi", icon: <SiFacebook size={17} />, label: "Facebook" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData();
    fd.append("name", form.name);
    fd.append("email", form.email);
    fd.append("message", form.message);
    fd.append("_captcha", "false");
    fd.append("_template", "box");
    try {
      const res = await fetch("https://formsubmit.co/chiragpc2004@gmail.com", { method: "POST", body: fd });
      if (res.ok) { setStatus("success"); setForm({ name: "", email: "", message: "" }); }
      else setStatus("error");
    } catch { setStatus("error"); }
    setLoading(false);
    setTimeout(() => setStatus(null), 4000);
  };

  const inputCls = "w-full px-4 py-3 text-sm bg-white dark:bg-[#111827] text-gray-800 dark:text-white border border-gray-200 dark:border-white/[0.06] rounded-xl placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400/40 focus:border-indigo-300 dark:focus:border-indigo-500/40 transition";

  return (
    <section
      id="contact"
      className="h-screen bg-[#f9fafb] dark:bg-[#0d1117] text-[#1f2937] dark:text-[#c9d1d9] font-[Poppins] transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto h-full px-6 sm:px-10 flex flex-col justify-center gap-10 pt-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-mono tracking-[0.3em] uppercase text-indigo-500 dark:text-indigo-400 mb-4">
            Get in Touch
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white font-[Poppins]">
            Let&apos;s work<br className="hidden sm:block" /> together.
          </h2>
          <p className="mt-4 text-base text-gray-500 dark:text-gray-400 max-w-lg">
            Got a project in mind or just want to connect? I&apos;m always open to opportunities and collaborations.
          </p>

          {/* Social icon row */}
          <div className="flex flex-wrap items-center gap-3 mt-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="p-2.5 rounded-xl border border-gray-200 dark:border-white/[0.06] bg-white dark:bg-[#111827] text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-500/40 transition-all duration-200 hover:scale-110 hover:shadow-md"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="name" required placeholder="Your name" value={form.name} onChange={handleChange} className={inputCls} />
              <input name="email" type="email" required placeholder="Your email" value={form.email} onChange={handleChange} className={inputCls} />
            </div>
            <textarea name="message" required placeholder="Your message..." rows={4} value={form.message} onChange={handleChange} className={`${inputCls} resize-none`} />
            <div className="flex items-center justify-between">
              <p className={`text-sm transition-opacity duration-500 ${status === "success" ? "text-green-500 opacity-100" : status === "error" ? "text-red-500 opacity-100" : "opacity-0 pointer-events-none"}`}>
                {status === "success" ? "Message sent!" : status === "error" ? "Failed. Try again." : " "}
              </p>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 disabled:opacity-60 text-white text-sm font-semibold rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25 hover:scale-[1.03]"
              >
                {loading ? "Sending…" : "Send message"} <Send size={14} />
              </button>
            </div>
          </form>

          <p className="text-xs text-gray-400 dark:text-gray-700 mt-8">
            &copy; {new Date().getFullYear()} Chirag P C &mdash; All rights reserved.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
