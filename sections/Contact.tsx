"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Monument, R } from "@/components/ui";

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
    "w-full bg-surface text-ink placeholder:text-muted px-4 py-3.5 border-0 focus:outline-2 focus:outline-ink focus:outline-offset-0 transition-[outline-color] duration-200";

  const row = "flex items-baseline justify-between gap-6 px-[var(--gutter)] pt-10 pb-5 sm:pt-14 sm:pb-6";

  return (
    <>
      <section id="contact" aria-labelledby="contact-title" className="bg-ground text-ink pt-24 sm:pt-32">
        <div className="wrap">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-8">
            <h2 id="contact-title" data-reveal className="font-display text-display lg:col-span-7">
              Contact
            </h2>
            <p data-reveal style={R(1)} className="max-w-[40ch] text-lead lg:col-span-5 lg:pb-3">
              Hiring for an APM, Associate PM or AI PM role, or want to dig into one of these projects? I answer every
              message.
            </p>
          </div>
        </div>

        {/* Display rows: the address first, then every place I can be found. */}
        <ul className="mt-16 mx-auto max-w-[120rem]">
          <li data-reveal className="bg-surface">
            <a href={`mailto:${EMAIL}`} className={`group ${row} items-center`}>
              <span className="font-display text-head break-all transition-colors duration-200 group-hover:text-accent">{EMAIL}</span>
              <span
                aria-hidden="true"
                className="grid shrink-0 place-items-center rounded-full bg-accent text-accent-ink w-14 h-14 sm:w-20 sm:h-20 transition-transform duration-300 ease-out group-hover:-rotate-45 group-active:scale-95"
              >
                <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 rotate-45" />
              </span>
            </a>
          </li>
          {socials.map((s, i) => (
            <li key={s.label} data-reveal style={R(i + 1)} className={i % 2 ? "bg-surface" : ""}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" className={`group ${row}`}>
                <span className="font-display text-head transition-colors duration-200 group-hover:text-accent">{s.label}</span>
                <span className="text-muted text-right">
                  {s.handle} &#8599;<span className="sr-only"> (opens in a new tab)</span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="wrap py-24 sm:py-32">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div data-reveal className="lg:col-span-4">
              <h3 className="font-display text-head">Or write it here</h3>
              <p className="mt-4 max-w-[34ch] text-muted">It lands in the same inbox. Leave an email so I can reply.</p>
            </div>
            <form data-reveal style={R(1)} onSubmit={handleSubmit} className="grid gap-4 lg:col-span-7 lg:col-start-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <input name="name" required aria-label="Your name" autoComplete="name" placeholder="Your name" value={form.name} onChange={handleChange} className={field} />
                <input name="email" type="email" required aria-label="Your email" autoComplete="email" placeholder="Your email" value={form.email} onChange={handleChange} className={field} />
              </div>
              <textarea name="message" required aria-label="Your message" placeholder="Your message" rows={5} value={form.message} onChange={handleChange} className={`${field} resize-none`} />
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <p role="status" aria-live="polite" className={`text-small transition-opacity duration-500 ${status ? "opacity-100" : "opacity-0"}`}>
                  {status === "success" ? "Sent. I'll reply soon." : status === "error" ? "That didn't send. Try again, or email me directly." : " "}
                </p>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center h-12 px-7 bg-ink text-ground hover:bg-accent active:scale-[0.98] disabled:opacity-60 transition-[background-color,transform,opacity] duration-200"
                >
                  {loading ? "Sending…" : "Send message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* The name closes the page the way it opened it, in the other colours. */}
      <footer className="theme-invert bg-ground text-ink overflow-hidden">
        <div className="wrap pt-20 pb-6 sm:pt-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <p className="max-w-[28ch] text-lead">
              Thanks for reading.
              <br />
              <a href={`mailto:${EMAIL}`} className="underline decoration-ink/30 underline-offset-[5px] hover:decoration-ink transition-[text-decoration-color]">
                Write to me
              </a>{" "}
              about a role or a project.
            </p>
            <a href="#home" className="inline-flex items-center h-11 text-small text-muted hover:text-ink transition-colors duration-200">
              Back to the top &uarr;
            </a>
          </div>
          <div className="monument-arrive mt-16 sm:mt-24" aria-hidden="true">
            <Monument as="p" className="pb-[0.2em]" />
          </div>
          <p className="mt-2 text-small text-muted">&copy; {new Date().getFullYear()} Chirag P C</p>
        </div>
      </footer>
    </>
  );
}
