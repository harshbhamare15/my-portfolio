"use client";

import { useEffect, useState } from "react";
import { Home, Github, Linkedin, Twitter, Instagram,} from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const sections = [
      "hero",
      "workexperience",
      "education",
      "skills",
      "projects",
      "hackathon",
      "contact",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  if (!mounted) return null;

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-white/80 backdrop-blur-md border border-gray-200 shadow-lg rounded-full px-6 py-3 flex items-center justify-center gap-5 transition-all">
      {/* Home */}
      <Link
        href="/"
        className={`hover:scale-110 transition-transform ${
          activeSection === "hero" ? "text-black" : "text-gray-400"
        }`}
      >
        <Home className="w-5 h-5" />
      </Link>

      <div className="w-[1px] h-5 bg-gray-300" />

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/harshbhamare15/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform text-black"
      >
        <Linkedin className="w-5 h-5" />
      </a>

      <div className="w-[1px] h-5 bg-gray-300" />

      {/* Twitter / X */}
      <a
        href="https://x.com/harsh_bhamare15"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform text-black"
      >
        <Twitter className="w-5 h-5" />
      </a>

      <div className="w-[1px] h-5 bg-gray-300" />

      {/* Instagram */}
      <a
        href="https://www.instagram.com/harsh_bhamare15_/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform text-black"
      >
        <Instagram className="w-5 h-5" />
      </a>

      <div className="w-[1px] h-5 bg-gray-300" />

      {/* GitHub */}
      <a
        href="https://github.com/harshbhamare15"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform text-black"
      >
        <Github className="w-5 h-5" />
      </a>
    </nav>
  );
}
