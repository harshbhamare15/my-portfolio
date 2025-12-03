"use client";

import { useEffect, useState } from "react";
import {
  Home,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white/70 dark:bg-gray-800/60 backdrop-blur-md border border-gray-300 dark:border-gray-700 shadow-lg rounded-full px-6 py-3 flex items-center justify-center gap-6 transition-all">
      <a href="#hero" className="hover:scale-110 transition-transform">
        <Home className="w-5 h-5 text-gray-700 dark:text-gray-200" />
      </a>
      <div className="w-[1px] h-6 bg-gray-300 dark:bg-gray-700" />
      <a
        href="https://www.linkedin.com/in/harshbhamare15/"
        target="_blank"
        className="hover:scale-110 transition-transform"
      >
        <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-200" />
      </a>
      <div className="w-[1px] h-6 bg-gray-300 dark:bg-gray-700" />

      <a
        href="https://x.com/harsh_bhamare15"
        target="_blank"
        className="hover:scale-110 transition-transform"
      >
        <Twitter className="w-5 h-5 text-gray-700 dark:text-gray-200" />
      </a>
      <div className="w-[1px] h-6 bg-gray-300 dark:bg-gray-700" />

      <a
        href="https://www.instagram.com/harsh_bhamare15_/"
        target="_blank"
        className="hover:scale-110 transition-transform"
      >
        <Instagram className="w-5 h-5 text-gray-700 dark:text-gray-200" />
      </a>
      <div className="w-[1px] h-6 bg-gray-300 dark:bg-gray-700" />

      <a
        href="https://github.com/harshbhamare15"
        target="_blank"
        className="hover:scale-110 transition-transform"
      >
        <Github className="w-5 h-5 text-gray-700 dark:text-gray-200" />
      </a>
    </nav>
  );
}
