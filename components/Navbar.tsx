"use client";

import { useEffect, useState } from "react";
import { useReveal } from "./useReveal";

const navItems = [
  { label: "About", href: "#home", id: "home", wide: true },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Journey", href: "#journey", id: "journey" },
  { label: "Work", href: "#product-work", id: "product-work" },
  { label: "Contact", href: "#contact", id: "contact" },
];

// Résumé link left out until the updated PDF exists.

export default function Navbar() {
  const [active, setActive] = useState("home");

  useReveal();

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    document.querySelectorAll("section[id], header[id]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

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
                on ? "text-ink bg-white/[0.12] shadow-[0_1px_0_rgb(255_255_255/0.2)_inset]" : "text-muted hover:text-ink"
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
