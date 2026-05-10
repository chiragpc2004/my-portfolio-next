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
      className="min-h-screen flex items-center px-6 sm:px-10 py-24 bg-[#f9fafb] text-[#1f2937] dark:bg-[#0d1117] dark:text-[#c9d1d9] font-[Poppins] scroll-mt-16 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto w-full space-y-12 sm:space-y-14">
        {/* Header */}
        <div className="text-center md:text-left space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold pb-1 font-[Poppins] relative inline-block">
            Contact
            <span className="absolute left-0 -bottom-1 w-full h-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full" />
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl text-base sm:text-lg pt-1">
            Got a project in mind or just want to connect? I&apos;m always open to opportunities and collaborations.
          </p>
        </div>

        {/* Contact & Social Links */}
        <div className="space-y-4">
          <div className="grid sm:grid-cols-3 gap-3">
            <HoverLink href="mailto:chiragpc2004@gmail.com" icon={<Mail size={17} />} label="chiragpc2004@gmail.com" />
            <HoverLink href="https://github.com/chiragpc2004" icon={<Github size={17} />} label="GitHub" />
            <HoverLink href="https://linkedin.com/in/chiragpc2004" icon={<Linkedin size={17} />} label="LinkedIn" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <HoverLink href="https://www.kaggle.com/chiragpoojarikodi" icon={<SiKaggle size={15} />} label="Kaggle" />
            <HoverLink href="https://x.com/chiragpc_2004" icon={<SiX size={15} />} label="Twitter" />
            <HoverLink href="https://www.instagram.com/chiragpc_2004/" icon={<SiInstagram size={15} />} label="Instagram" />
            <HoverLink href="https://www.facebook.com/chirag.poojarikodi" icon={<SiFacebook size={15} />} label="Facebook" />
          </div>
        </div>

        {/* Form */}
        <div className="bg-white dark:bg-[#161b22] border border-gray-200 dark:border-white/8 rounded-xl p-6 sm:p-8 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Name
                </label>
                <input
                  name="name"
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 text-sm bg-gray-50 dark:bg-[#0d1117] text-[#1f2937] dark:text-white border border-gray-200 dark:border-white/10 rounded-lg placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-[#58a6ff]/60 focus:border-transparent transition"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Your email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 text-sm bg-gray-50 dark:bg-[#0d1117] text-[#1f2937] dark:text-white border border-gray-200 dark:border-white/10 rounded-lg placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-[#58a6ff]/60 focus:border-transparent transition"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Message
              </label>
              <textarea
                name="message"
                required
                placeholder="Write your message here..."
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-2.5 text-sm bg-gray-50 dark:bg-[#0d1117] text-[#1f2937] dark:text-white border border-gray-200 dark:border-white/10 rounded-lg placeholder-gray-400 dark:placeholder-gray-600 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-[#58a6ff]/60 focus:border-transparent transition"
              />
            </div>
            <div className="flex items-center justify-between gap-4">
              <p
                className={`text-sm transition-opacity duration-500 ${
                  status === "success"
                    ? "text-green-500 opacity-100"
                    : status === "error"
                    ? "text-red-500 opacity-100"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                {status === "success"
                  ? "Message sent successfully!"
                  : status === "error"
                  ? "Failed to send. Please try again."
                  : " "}
              </p>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                {loading ? "Sending..." : "Send Message"}
                <Send size={14} />
              </button>
            </div>
          </form>
        </div>

        {/* Footer Note */}
        <p className="text-xs text-gray-400 dark:text-gray-500 text-center sm:text-left">
          &copy; {new Date().getFullYear()} Chirag P C &mdash; All rights reserved.
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
      className="group flex items-center gap-3 px-4 py-2.5 rounded-lg border border-gray-200 dark:border-white/8 bg-white dark:bg-white/[0.03] hover:bg-indigo-50 dark:hover:bg-white/8 hover:border-indigo-200 dark:hover:border-[#58a6ff]/30 text-gray-600 dark:text-gray-400 hover:text-indigo-700 dark:hover:text-[#58a6ff] transition-all duration-200 w-full shadow-sm text-sm"
    >
      <span className="shrink-0 text-gray-400 dark:text-gray-500 group-hover:text-indigo-500 dark:group-hover:text-[#58a6ff] transition-colors duration-200">{icon}</span>
      <span className="truncate font-medium">{label}</span>
    </a>
  );
}
