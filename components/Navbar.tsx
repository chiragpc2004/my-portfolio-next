"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Sun, Moon } from "lucide-react";
import { useReveal } from "./useReveal";

const navItems = [
  { label: "About", href: "#about", id: "about" },
  { label: "Work", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
];

const RESUME_URL = "https://drive.google.com/file/d/13gG3z98A3viQlp8BNyU-P3B6fLl3JrIc/view?usp=sharing";

const socialLinks = [
  { icon: <Github size={20} aria-hidden="true" />, href: "https://github.com/chiragpc2004", label: "GitHub" },
  { icon: <Linkedin size={20} aria-hidden="true" />, href: "https://www.linkedin.com/in/chiragpc2004", label: "LinkedIn" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [darkMode, setDarkMode] = useState(true);

  useReveal();

  // The boot script in layout.tsx has already applied the theme; read it back.
  useEffect(() => {
    setDarkMode(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const next = !darkMode;
    setDarkMode(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const iconBtn =
    "inline-flex items-center justify-center w-11 h-11 rounded-full text-ink/80 hover:text-ink hover:bg-ink/[0.07] active:scale-95 transition-[color,background-color,transform] duration-200";

  return (
    <nav aria-label="Main" className="fixed inset-x-0 top-0 z-50 bg-ground text-ink">
      <div className="mx-auto max-w-[88rem] h-[var(--nav-h)] px-5 sm:px-8 flex items-center justify-between gap-6">
        <a href="#home" className="inline-flex items-center h-11 font-display font-semibold text-small sm:text-body tracking-[-0.01em] whitespace-nowrap">
          Chirag P C
        </a>

        <div className="hidden md:flex items-center gap-2">
          <ul className="flex items-center gap-1 mr-2">
            {navItems.map((item) => {
              const active = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative inline-flex items-center h-11 px-3 text-small font-medium transition-colors duration-200 ${
                      active ? "text-ink" : "text-muted hover:text-ink"
                    }`}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={`absolute left-3 right-3 bottom-2 h-[2px] bg-ink origin-left transition-transform duration-300 ease-out ${
                        active ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
          <button onClick={toggleTheme} aria-label={darkMode ? "Switch to light theme" : "Switch to dark theme"} className={iconBtn}>
            {darkMode ? <Sun size={19} aria-hidden="true" /> : <Moon size={19} aria-hidden="true" />}
          </button>
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} aria-label={link.label} className={iconBtn} target="_blank" rel="noopener noreferrer">
              {link.icon}
            </a>
          ))}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center h-11 px-5 rounded-full bg-ink/[0.08] text-ink text-small font-medium hover:bg-ink/[0.14] active:scale-[0.97] transition-[background-color,transform] duration-200"
          >
            Résumé
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center w-11 h-11 -mr-2 rounded-full"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <svg className="w-6 h-6" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="md:hidden bg-ground px-5 pb-6">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={activeSection === item.id ? "page" : undefined}
                  className={`block py-3 font-display font-semibold text-lead ${activeSection === item.id ? "text-ink" : "text-muted"}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="block py-3 font-display font-semibold text-lead text-muted">
                Résumé<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-1 mt-3 -ml-2.5">
            <button onClick={toggleTheme} aria-label={darkMode ? "Switch to light theme" : "Switch to dark theme"} className={iconBtn}>
              {darkMode ? <Sun size={20} aria-hidden="true" /> : <Moon size={20} aria-hidden="true" />}
            </button>
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} aria-label={link.label} className={iconBtn} target="_blank" rel="noopener noreferrer">
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
