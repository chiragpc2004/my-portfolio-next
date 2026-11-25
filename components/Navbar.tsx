"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
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
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);

  useReveal();

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    document.querySelectorAll("section[id]").forEach((el) => io.observe(el));
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
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
    <nav
      aria-label="Main"
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        scrolled || menuOpen ? "bg-ground/85 backdrop-blur-md shadow-[0_1px_0_rgb(var(--line)/0.07)]" : "bg-transparent"
      }`}
    >
      <div className="wrap h-[var(--nav-h)] flex items-center justify-between gap-6">
        <a href="#home" className="inline-flex items-center gap-2.5 h-10 font-semibold tracking-[-0.01em]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/chirag.jpg" alt="" width={28} height={28} className="h-7 w-7 rounded-full object-cover object-[50%_20%]" />
          Chirag P C
        </a>

        <div className="hidden md:flex items-center gap-1">
          <ul className="flex items-center">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  aria-current={active === item.id ? "location" : undefined}
                  className={`inline-flex items-center h-9 px-3 rounded-full text-small transition-colors duration-200 ${
                    active === item.id ? "text-ink bg-ink/[0.06]" : "text-muted hover:text-ink"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={toggleTheme}
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
            className="ml-1 inline-flex items-center justify-center w-9 h-9 rounded-full text-muted hover:text-ink hover:bg-ink/[0.06] transition-colors duration-200"
          >
            {dark ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}
          </button>
        </div>

        <button
          className="md:hidden inline-flex items-center h-10 px-3 -mr-3 text-small font-medium"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="md:hidden wrap pb-5">
          <ul className="card p-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={item.href} onClick={() => setMenuOpen(false)} className="block px-3 py-3 rounded-lg text-lead hover:bg-ink/[0.04]">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <button onClick={toggleTheme} className="w-full text-left px-3 py-3 rounded-lg text-muted hover:bg-ink/[0.04]">
                {dark ? "Switch to light theme" : "Switch to dark theme"}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
