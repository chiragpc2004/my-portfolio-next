"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useReveal } from "./useReveal";

const navItems = [
  { label: "About", href: "#home", id: "home", wide: true },
  { label: "Journey", href: "#journey", id: "journey" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Work", href: "#product-work", id: "product-work" },
  { label: "Contact", href: "#contact", id: "contact" },
];

// Résumé link left out until the updated PDF exists.

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [dark, setDark] = useState(false);

  useReveal();

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    document.querySelectorAll("section[id], header[id]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  return (
    <nav aria-label="Main" className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:pt-4">
      <div className="glass flex items-center gap-0.5 rounded-full p-1.5">
        {navItems.map((item) => {
          const on = active === item.id;
          return (
            <a
              key={item.id}
              href={item.href}
              aria-current={on ? "location" : undefined}
              className={`${item.wide ? "hidden sm:inline-flex" : "inline-flex"} items-center h-8 px-2.5 sm:px-3 rounded-full text-small transition-[color,background-color,box-shadow] duration-200 ${
                on
                  ? "text-ink bg-paper/80 shadow-[0_1px_2px_rgb(0_0_0/0.08)] dark:bg-white/10"
                  : "text-muted hover:text-ink"
              }`}
            >
              {item.label}
            </a>
          );
        })}
        <button
          onClick={toggleTheme}
          aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
          className="inline-flex items-center justify-center w-8 h-8 rounded-full text-muted hover:text-ink transition-colors duration-200"
        >
          {dark ? <Sun size={15} aria-hidden="true" /> : <Moon size={15} aria-hidden="true" />}
        </button>
      </div>
    </nav>
  );
}
