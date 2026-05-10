"use client";

import { useEffect, useState } from "react";
import { Home, User, FolderKanban, Mail, Github, Linkedin, Sun, Moon } from "lucide-react";
import { HiOutlineMail } from "react-icons/hi";

const navItems = [
  { label: "Home", icon: <Home size={18} />, href: "#home", id: "home" },
  { label: "About", icon: <User size={18} />, href: "#about", id: "about" },
  { label: "Projects", icon: <FolderKanban size={18} />, href: "#projects", id: "projects" },
  { label: "Contact", icon: <Mail size={18} />, href: "#contact", id: "contact" },
];

const socialLinks = [
  { icon: <HiOutlineMail size={20} />, href: "mailto:chiragpc2004@gmail.com", label: "Email" },
  { icon: <Github size={20} />, href: "https://github.com/chiragpc2004", label: "GitHub" },
  { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/chiragpc2004", label: "LinkedIn" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

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
    return () => sections.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-lightBg/80 dark:bg-darkBg/80 border-b border-black/8 dark:border-white/8 shadow-sm font-[Poppins] text-black dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="text-xl sm:text-2xl font-bold text-indigo-600 dark:text-indigo-400">
          Chirag&apos;s Portfolio
        </a>

        <ul className="hidden sm:flex gap-8 md:gap-10 text-sm md:text-base font-semibold">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                aria-current={activeSection === item.id ? "page" : undefined}
                className={`flex items-center gap-1.5 md:gap-2 group relative transition-all duration-300 ${
                  activeSection === item.id ? "text-indigo-600 dark:text-indigo-400" : ""
                }`}
              >
                <span className={`transition group-hover:text-indigo-600 dark:group-hover:text-indigo-400 ${
                  activeSection === item.id ? "text-indigo-600 dark:text-indigo-400" : "text-gray-400 dark:text-gray-500"
                }`}>
                  {item.icon}
                </span>
                <span>{item.label}</span>
                <span className={`absolute left-0 -bottom-1 h-0.5 bg-indigo-500 rounded transition-all duration-300 ${
                  activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden sm:flex items-center gap-4 md:gap-5">
          <button onClick={() => setDarkMode(!darkMode)} aria-label="Toggle Theme" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} aria-label={link.label} className="hover:text-indigo-500 dark:hover:text-indigo-400 transition" target="_blank" rel="noopener noreferrer">
              {link.icon}
            </a>
          ))}
        </div>

        <button className="sm:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="sm:hidden px-4 pb-4 backdrop-blur-md bg-lightBg/95 dark:bg-darkBg/95 rounded-b-xl border-t border-black/5 dark:border-white/5">
          <ul className="flex flex-col gap-4 text-base font-semibold pt-3">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-3 ${activeSection === item.id ? "text-indigo-600 dark:text-indigo-400" : "hover:text-indigo-500 dark:hover:text-indigo-400"} transition`}>
                  {item.icon}{item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
