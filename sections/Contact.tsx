"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Row } from "@/components/ui";

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

  return (
    <>
      <Row id="contact" title="Contact">
        <p className="max-w-[36rem] text-lead">
          Want to talk about a product role, or dig into one of these projects? I answer every message.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-2.5">
          <a href={`mailto:${EMAIL}`} className="btn btn-dark">
            {EMAIL}
          </a>
          <button type="button" onClick={copyEmail} className="btn btn-light" aria-label="Copy email address">
            {copied ? <Check size={15} aria-hidden="true" /> : <Copy size={15} aria-hidden="true" />}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>

        <ul className="mt-4 flex flex-wrap gap-2">
          {socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" className="btn btn-light !h-9 !px-3.5 !text-small">
                {s.label}
                <span aria-hidden="true" className="opacity-50">&#8599;</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>

        <form onSubmit={handleSubmit} className="mt-14 grid max-w-[36rem] gap-3">
          <h3 className="font-medium">Or send a message</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            <input name="name" required aria-label="Your name" autoComplete="name" placeholder="Your name" value={form.name} onChange={handleChange} className="field" />
            <input name="email" type="email" required aria-label="Your email" autoComplete="email" placeholder="Your email" value={form.email} onChange={handleChange} className="field" />
          </div>
          <textarea name="message" required aria-label="Your message" placeholder="Your message" rows={5} value={form.message} onChange={handleChange} className="field resize-none" />
          <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
            <p role="status" aria-live="polite" className={`text-small transition-opacity duration-500 ${status ? "opacity-100" : "opacity-0"}`}>
              {status === "success" ? "Sent. I'll reply soon." : status === "error" ? "That didn't send. Try again, or email me directly." : " "}
            </p>
            <button type="submit" disabled={loading} className="btn btn-dark disabled:opacity-60">
              {loading ? "Sending…" : "Send message"}
            </button>
          </div>
        </form>
      </Row>

      <footer className="wrap flex flex-wrap items-center justify-between gap-4 pt-6 pb-10 text-small text-muted">
        <p>&copy; {new Date().getFullYear()} Chirag P C</p>
        <a href="#home" className="hover:text-ink transition-colors duration-200">
          Back to top &uarr;
        </a>
      </footer>
    </>
  );
}
