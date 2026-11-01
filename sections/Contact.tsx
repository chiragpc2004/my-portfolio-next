"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const EMAIL = "chiragpc2004@gmail.com";

const socials = [
  { href: "https://github.com/chiragpc2004", label: "GitHub" },
  { href: "https://linkedin.com/in/chiragpc2004", label: "LinkedIn" },
  { href: "https://www.kaggle.com/chiragpoojarikodi", label: "Kaggle" },
  { href: "https://x.com/chiragpc_2004", label: "Twitter" },
  { href: "https://www.instagram.com/chiragpc_2004/", label: "Instagram" },
  { href: "https://www.facebook.com/chirag.poojarikodi", label: "Facebook" },
];

const credits = [
  {
    title: "Iris setosa var. setosa",
    href: "https://commons.wikimedia.org/wiki/File:Iris_setosa_var._setosa_(2595031014).jpg",
    by: "Emma Forsberg",
    license: "CC BY 2.0",
    licenseHref: "https://creativecommons.org/licenses/by/2.0",
  },
  {
    title: "Iris versicolor",
    href: "https://commons.wikimedia.org/wiki/File:Iris_versicolor_-20200620-RM-100933.jpg",
    by: "Ermell",
    license: "CC BY-SA 4.0",
    licenseHref: "https://creativecommons.org/licenses/by-sa/4.0",
  },
  {
    title: "Iris virginica",
    href: "https://commons.wikimedia.org/wiki/File:Iris_virginica.jpg",
    by: "Frank Mayfield",
    license: "CC BY-SA 2.0",
    licenseHref: "https://creativecommons.org/licenses/by-sa/2.0",
  },
  {
    title: "Rocks at the Lighthouse, Biarritz",
    href: "https://www.artic.edu/artworks/66144",
    by: "Joaquín Sorolla, 1906",
    license: "CC0",
    licenseHref: "https://creativecommons.org/publicdomain/zero/1.0/",
  },
];

const R = (i: number) => ({ "--i": i }) as React.CSSProperties;

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
    "w-full bg-surface text-ink placeholder:text-muted px-4 py-3.5 border-0 border-b-2 border-ink/20 focus:border-ink focus:outline-none transition-[border-color] duration-200";

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="theme-invert min-h-svh snap:h-screen bg-ground text-ink pt-[calc(var(--nav-h)+2.5rem)] pb-8"
    >
      <div className="mx-auto max-w-[88rem] h-full px-5 sm:px-8 flex flex-col">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 flex-1 content-center">
          <div className="lg:col-span-6">
            <h2 id="contact-title" data-reveal className="font-display font-semibold uppercase text-head max-w-[12ch]">
              Let&apos;s build something
            </h2>
            <p data-reveal style={R(1)} className="mt-6 text-lead max-w-[30ch]">
              A role, a project or a question about one of mine. I answer every message.
            </p>
            <a
              data-reveal
              style={R(2)}
              href={`mailto:${EMAIL}`}
              className="group mt-10 inline-flex items-center gap-3 py-2 font-display font-semibold text-[clamp(1.125rem,0.7rem+1.6vw,2rem)] tracking-[-0.02em] break-all underline decoration-ink/25 decoration-2 underline-offset-[10px] hover:decoration-ink transition-[text-decoration-color] duration-200"
            >
              {EMAIL}
              <ArrowUpRight aria-hidden="true" className="shrink-0 w-[1em] h-[1em] transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <ul data-reveal style={R(3)} className="mt-10 flex flex-wrap gap-x-6 gap-y-1">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center h-11 text-muted hover:text-ink transition-colors duration-200"
                  >
                    {s.label}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <form data-reveal style={R(2)} onSubmit={handleSubmit} className="lg:col-span-5 lg:col-start-8 grid gap-4 content-center">
            <h3 className="font-medium">Or write here</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="name" required aria-label="Your name" autoComplete="name" placeholder="Your name" value={form.name} onChange={handleChange} className={field} />
              <input name="email" type="email" required aria-label="Your email" autoComplete="email" placeholder="Your email" value={form.email} onChange={handleChange} className={field} />
            </div>
            <textarea name="message" required aria-label="Your message" placeholder="Your message" rows={4} value={form.message} onChange={handleChange} className={`${field} resize-none`} />
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <p role="status" aria-live="polite" className={`text-small transition-opacity duration-500 ${status ? "opacity-100" : "opacity-0"}`}>
                {status === "success" ? "Sent. I'll reply soon." : status === "error" ? "That didn't send. Try again, or email me directly." : " "}
              </p>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center h-12 px-7 rounded-full bg-accent text-accent-ink font-medium hover:bg-accent/85 active:scale-[0.97] disabled:opacity-60 transition-[background-color,transform,opacity] duration-200"
              >
                {loading ? "Sending…" : "Send message"}
              </button>
            </div>
          </form>
        </div>

        <footer className="mt-16 snap:mt-8 grid gap-3 sm:grid-cols-[auto_1fr] sm:gap-10 text-small text-muted">
          <p>© {new Date().getFullYear()} Chirag P C</p>
          <p className="sm:text-right">
            Photographs:{" "}
            {credits.map((c, i) => (
              <span key={c.href}>
                <a href={c.href} className="underline underline-offset-2 hover:text-ink">
                  {c.title}
                </a>{" "}
                by {c.by},{" "}
                <a href={c.licenseHref} className="underline underline-offset-2 hover:text-ink">
                  {c.license}
                </a>
                {i < credits.length - 1 ? "; " : "."}
              </span>
            ))}
          </p>
        </footer>
      </div>
    </section>
  );
}
