"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { R, btn } from "@/components/ui";

const EMAIL = "chiragpc2004@gmail.com";

const socials = [
  { href: "https://www.linkedin.com/in/chiragpc2004", label: "LinkedIn", handle: "in/chiragpc2004" },
  { href: "https://github.com/chiragpc2004", label: "GitHub", handle: "chiragpc2004" },
  { href: "https://www.kaggle.com/chiragpoojarikodi", label: "Kaggle", handle: "chiragpoojarikodi" },
  { href: "https://x.com/chiragpc_2004", label: "Twitter", handle: "@chiragpc_2004" },
];


export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

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
      const res = await fetch(`https://formsubmit.co/${EMAIL}`, { method: "POST", body: fd });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
    setLoading(false);
    setTimeout(() => setStatus(null), 4000);
  };

  const field =
    "w-full rounded-lg bg-ink/[0.04] text-ink placeholder:text-muted px-4 py-3 border-0 outline-none focus:ring-2 focus:ring-ink/80 transition-shadow duration-200";

  return (
    <>
      <section id="contact" aria-labelledby="contact-title" className="py-20 sm:py-28">
        <div className="wrap">
          <div className="card grid gap-10 p-6 sm:p-10 lg:grid-cols-2 lg:gap-14">
            <div data-reveal>
              <h2 id="contact-title" className="text-head font-semibold">
                Contact
              </h2>
              <p className="mt-3 max-w-[34rem] text-lead text-muted">
                Hiring for an APM, Associate PM or AI PM role, or want to dig into one of these projects? I answer every
                message.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-2">
                <a href={`mailto:${EMAIL}`} className={btn.primary}>
                  {EMAIL}
                </a>
                <button type="button" onClick={copyEmail} className={btn.secondary} aria-label="Copy email address">
                  {copied ? <Check size={15} aria-hidden="true" /> : <Copy size={15} aria-hidden="true" />}
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>

              <ul className="mt-8 grid grid-cols-2 gap-2 sm:max-w-[26rem]">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col rounded-lg bg-ink/[0.04] px-4 py-3 transition-colors duration-200 hover:bg-ink/[0.08]"
                    >
                      <span className="text-small font-medium">{s.label} &#8599;</span>
                      <span className="text-small text-muted truncate">{s.handle}</span>
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <form data-reveal style={R(1)} onSubmit={handleSubmit} className="grid content-start gap-3">
              <h3 className="font-medium">Or send a message</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <input name="name" required aria-label="Your name" autoComplete="name" placeholder="Your name" value={form.name} onChange={handleChange} className={field} />
                <input name="email" type="email" required aria-label="Your email" autoComplete="email" placeholder="Your email" value={form.email} onChange={handleChange} className={field} />
              </div>
              <textarea name="message" required aria-label="Your message" placeholder="Your message" rows={6} value={form.message} onChange={handleChange} className={`${field} resize-none`} />
              <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                <p role="status" aria-live="polite" className={`text-small transition-opacity duration-500 ${status ? "opacity-100" : "opacity-0"}`}>
                  {status === "success" ? "Sent. I'll reply soon." : status === "error" ? "That didn't send. Try again, or email me directly." : " "}
                </p>
                <button type="submit" disabled={loading} className={`${btn.primary} disabled:opacity-60`}>
                  {loading ? "Sending…" : "Send message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="wrap flex flex-wrap items-center justify-between gap-4 pb-10 text-small text-muted">
        <p>&copy; {new Date().getFullYear()} Chirag P C</p>
        <a href="#home" className="hover:text-ink transition-colors duration-200">
          Back to top &uarr;
        </a>
      </footer>
    </>
  );
}
