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
      const res = await fetch("https://formsubmit.co/chiragpc2004@gmail.com", {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }

    setLoading(false);
    setTimeout(() => setStatus(null), 4000);
  };

  return (
    <section
      id="contact"
      className="h-screen flex items-center px-6 sm:px-10 bg-[#f0f6ff] text-[#0f172a] dark:bg-[#0b1120] dark:text-[#e2e8f0] font-[Poppins] scroll-mt-0 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto w-full space-y-8 pt-16">
        {/* Header */}
        <div className="text-center md:text-left space-y-2">
          <h2 className="text-4xl sm:text-5xl font-bold font-[Poppins] relative inline-block pb-1">
            Contact
            <span className="absolute left-0 -bottom-0.5 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl text-sm sm:text-base pt-1">
            Got a project in mind or just want to connect? I&apos;m always open to opportunities and collaborations.
          </p>
        </div>

        {/* Social links */}
        <div className="space-y-2.5">
          <div className="grid sm:grid-cols-3 gap-2.5">
            <HoverLink href="mailto:chiragpc2004@gmail.com" icon={<Mail size={15} />} label="chiragpc2004@gmail.com" />
            <HoverLink href="https://github.com/chiragpc2004" icon={<Github size={15} />} label="GitHub" />
            <HoverLink href="https://linkedin.com/in/chiragpc2004" icon={<Linkedin size={15} />} label="LinkedIn" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <HoverLink href="https://www.kaggle.com/chiragpoojarikodi" icon={<SiKaggle size={14} />} label="Kaggle" />
            <HoverLink href="https://x.com/chiragpc_2004" icon={<SiX size={14} />} label="Twitter" />
            <HoverLink href="https://www.instagram.com/chiragpc_2004/" icon={<SiInstagram size={14} />} label="Instagram" />
            <HoverLink href="https://www.facebook.com/chirag.poojarikodi" icon={<SiFacebook size={14} />} label="Facebook" />
          </div>
        </div>

        {/* Form */}
        <div className="bg-white dark:bg-[#0e1830] border border-blue-100 dark:border-blue-900/30 rounded-xl p-5 sm:p-6 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Name</label>
                <input
                  name="name"
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 text-sm bg-slate-50 dark:bg-[#0b1120] text-slate-800 dark:text-white border border-blue-100 dark:border-blue-900/30 rounded-lg placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Your email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 text-sm bg-slate-50 dark:bg-[#0b1120] text-slate-800 dark:text-white border border-blue-100 dark:border-blue-900/30 rounded-lg placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition"
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Message</label>
              <textarea
                name="message"
                required
                placeholder="Write your message here..."
                rows={3}
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-2 text-sm bg-slate-50 dark:bg-[#0b1120] text-slate-800 dark:text-white border border-blue-100 dark:border-blue-900/30 rounded-lg placeholder-slate-400 dark:placeholder-slate-600 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition"
              />
            </div>
            <div className="flex items-center justify-between gap-4">
              <p className={`text-xs transition-opacity duration-500 ${status === "success" ? "text-green-500 opacity-100" : status === "error" ? "text-red-500 opacity-100" : "opacity-0 pointer-events-none"}`}>
                {status === "success" ? "Message sent successfully!" : status === "error" ? "Failed to send. Try again." : " "}
              </p>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {loading ? "Sending..." : "Send Message"} <Send size={13} />
              </button>
            </div>
          </form>
        </div>

        <p className="text-xs text-slate-400 dark:text-slate-600 text-center sm:text-left">
          &copy; {new Date().getFullYear()} Chirag P C &mdash; All rights reserved.
        </p>
      </div>
    </section>
  );
}

function HoverLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-2.5 px-4 py-2 rounded-lg border border-blue-100 dark:border-blue-900/30 bg-white dark:bg-[#0e1830] hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 dark:hover:border-blue-700/50 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 w-full shadow-sm text-xs font-medium"
    >
      <span className="shrink-0 text-slate-400 dark:text-slate-500 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-200">{icon}</span>
      <span className="truncate">{label}</span>
    </a>
  );
}
