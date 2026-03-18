"use client";
import { useState, useEffect } from "react";

const links = [
  { label: "RSVP", href: "#rsvp" },
  { label: "Info", href: "#details" },
  { label: "Location", href: "#location" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 overflow-x-hidden ${
        scrolled
          ? "bg-[#EDE8DD]/95 backdrop-blur-sm border-b border-[#C8BC9A]"
          : "bg-transparent"
      }`}
    >
      <nav className="w-full max-w-6xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
        <span
          className={`transition-opacity duration-500 ${
            scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
          } min-w-0 max-w-[55%] truncate`}
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: "0.9rem",
            color: scrolled ? "#3A3328" : "rgba(255,255,255,0.85)",
            letterSpacing: "0.05em",
            transition: "color 0.5s",
          }}
        >
          Tatiana e Daniel
        </span>
        <ul className="flex gap-4 sm:gap-8 items-center">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                style={{
                  fontSize: "0.6rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.22em",
                  color: scrolled ? "#8A7A55" : "rgba(255,255,255,0.7)",
                  transition: "color 0.3s",
                }}
                className="hover:opacity-100"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
