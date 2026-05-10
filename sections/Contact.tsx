"use client";

import { useState } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { SiKaggle, SiInstagram, SiFacebook, SiX } from "react-icons/si";

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
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("message", form.message);
    formData.append("_captcha", "false");
    formData.append("_template", "box");
    try {
      const res = await fetch("https://formsubmit.co/chiragpc2004@gmail.com", { method: "POST", body: formData });
      if (res.ok) { setStatus("success"); setForm({ name: "", email: "", message: "" }); }
      else setStatus("error");
    } catch { setStatus("error"); }
    setLoading(false);
    setTimeout(() => setStatus(null), 4000);
  };

  return (
    <section
      id="contact"
      className="h-screen flex items-center px-6 sm:px-10 bg-[#f9fafb] text-[#1f2937] dark:bg-[#0d1117] dark:text-[#c9d1d9] font-[Poppins] transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto w-full space-y-7 pt-16">
        {/* Header */}
        <div className="text-center md:text-left space-y-2">
          <h2 className="text-4xl sm:text-5xl font-bold font-[Poppins] relative inline-block pb-1">
            Contact
            <span className="absolute left-0 -bottom-0.5 w-full h-0.5 bg-indigo-500 rounded-full" />
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl text-sm sm:text-base pt-1">
            Got a project in mind or just want to connect? I&apos;m always open to opportunities.
          </p>
        </div>

        {/* Links */}
        <div className="space-y-2">
          <div className="grid sm:grid-cols-3 gap-2">
            <HoverLink href="mailto:chiragpc2004@gmail.com" icon={<Mail size={14} />} label="chiragpc2004@gmail.com" />
            <HoverLink href="https://github.com/chiragpc2004" icon={<Github size={14} />} label="GitHub" />
            <HoverLink href="https://linkedin.com/in/chiragpc2004" icon={<Linkedin size={14} />} label="LinkedIn" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <HoverLink href="https://www.kaggle.com/chiragpoojarikodi" icon={<SiKaggle size={13} />} label="Kaggle" />
            <HoverLink href="https://x.com/chiragpc_2004" icon={<SiX size={13} />} label="Twitter" />
            <HoverLink href="https://www.instagram.com/chiragpc_2004/" icon={<SiInstagram size={13} />} label="Instagram" />
            <HoverLink href="https://www.facebook.com/chirag.poojarikodi" icon={<SiFacebook size={13} />} label="Facebook" />
          </div>
        </div>

        {/* Form */}
        <div className="bg-white dark:bg-[#161b22] border border-gray-200 dark:border-white/8 rounded-xl p-5 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Name</label>
                <input name="name" required placeholder="Your name" value={form.name} onChange={handleChange}
                  className="w-full px-3 py-2 text-sm bg-gray-50 dark:bg-[#0d1117] text-gray-800 dark:text-white border border-gray-200 dark:border-white/8 rounded-lg placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400/40 transition" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Email</label>
                <input name="email" type="email" required placeholder="Your email" value={form.email} onChange={handleChange}
                  className="w-full px-3 py-2 text-sm bg-gray-50 dark:bg-[#0d1117] text-gray-800 dark:text-white border border-gray-200 dark:border-white/8 rounded-lg placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400/40 transition" />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Message</label>
              <textarea name="message" required placeholder="Write your message here..." rows={3} value={form.message} onChange={handleChange}
                className="w-full px-3 py-2 text-sm bg-gray-50 dark:bg-[#0d1117] text-gray-800 dark:text-white border border-gray-200 dark:border-white/8 rounded-lg placeholder-gray-400 dark:placeholder-gray-600 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400/40 transition" />
            </div>
            <div className="flex items-center justify-between gap-4">
              <p className={`text-xs transition-opacity duration-500 ${status === "success" ? "text-green-500 opacity-100" : status === "error" ? "text-red-500 opacity-100" : "opacity-0 pointer-events-none"}`}>
                {status === "success" ? "Message sent!" : status === "error" ? "Failed to send. Try again." : " "}
              </p>
              <button type="submit" disabled={loading}
                className="inline-flex items-center gap-2 px-5 py-2 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 disabled:opacity-60 text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:shadow-md hover:shadow-indigo-500/20 hover:scale-[1.02]">
                {loading ? "Sending..." : "Send"} <Send size={13} />
              </button>
            </div>
          </form>
        </div>

        <p className="text-xs text-gray-400 dark:text-gray-600 text-center sm:text-left">
          &copy; {new Date().getFullYear()} Chirag P C &mdash; All rights reserved.
        </p>
      </div>
    </section>
  );
}

function HoverLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      className="group flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 dark:border-white/8 bg-white dark:bg-white/[0.03] hover:border-indigo-300 dark:hover:border-indigo-700/50 hover:bg-indigo-50 dark:hover:bg-indigo-900/10 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200 text-xs font-medium">
      <span className="shrink-0 text-gray-400 dark:text-gray-500 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">{icon}</span>
      <span className="truncate">{label}</span>
    </a>
  );
}
