"use client";

import { useEffect, useState } from "react";
import { useReveal } from "./useReveal";

const navItems = [
  { label: "Journey", href: "#journey", id: "journey" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Product work", href: "#product-work", id: "product-work" },
  { label: "Contact", href: "#contact", id: "contact" },
];

// Résumé link left out until the updated PDF exists; the old one predates the SDET role.

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [pastHero, setPastHero] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

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
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((el) => observer.observe(el));

    // The small name in the bar appears only once the big one has left.
    const hero = document.getElementById("home");
    const heroObs = new IntersectionObserver(([e]) => setPastHero(!e.isIntersecting), { threshold: 0.12 });
    if (hero) heroObs.observe(hero);
    return () => {
      observer.disconnect();
      heroObs.disconnect();
    };
  }, []);

  const link = (active: boolean) =>
    `relative inline-flex items-center h-11 px-2.5 text-small transition-colors duration-200 ${
      active ? "text-ink" : "text-muted hover:text-ink"
    }`;

  return (
    <nav aria-label="Main" className="fixed inset-x-0 top-0 z-50 bg-ground text-ink">
      <div className="wrap h-[var(--nav-h)] flex items-center justify-between gap-6">
        <a
          href="#home"
          tabIndex={pastHero ? 0 : -1}
          aria-hidden={!pastHero}
          className={`inline-flex items-center h-11 font-display text-lead leading-none whitespace-nowrap transition-[opacity,transform] duration-500 ease-out ${
            pastHero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
          }`}
        >
          Chirag P C
        </a>

        <div className="hidden md:flex items-center gap-1">
          <ul className="flex items-center">
            {navItems.map((item) => {
              const active = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a href={item.href} aria-current={active ? "location" : undefined} className={link(active)}>
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={`absolute left-2.5 right-2.5 bottom-2.5 h-0.5 bg-ink origin-left transition-transform duration-300 ease-out ${
                        active ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
          <button
            onClick={toggleTheme}
            aria-label={darkMode ? "Switch to light theme" : "Switch to dark theme"}
            className="ml-3 inline-flex items-center h-11 px-2.5 text-small text-muted hover:text-ink transition-colors duration-200"
          >
            {darkMode ? "Light" : "Dark"}
          </button>
        </div>

        <button
          className="md:hidden inline-flex items-center h-11 -mr-1 px-1 text-small"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="md:hidden bg-ground wrap pb-8 h-[calc(100svh-var(--nav-h))] flex flex-col">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-2 font-display text-head ${activeSection === item.id ? "text-ink" : "text-muted"}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <button onClick={toggleTheme} className="mt-auto self-start inline-flex items-center h-11 text-small text-muted">
            {darkMode ? "Switch to light" : "Switch to dark"}
          </button>
        </div>
      )}
    </nav>
  );
}
