"use client";
import { motion } from "framer-motion";
import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center text-center mt-10 px-4 sm:px-6 md:px-8 lg:px-16 w-full"
    >
      {/* Profile Image */}
      <motion.img
        src="/myphoto.png"
        alt="Profile"
        className="w-28 h-28 xs:w-32 xs:h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full border-4 border-white shadow-[0_0_20px_rgba(255,255,255,0.6)] mb-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Main Heading */}
      <motion.h1
        className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent leading-tight px-2"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Hi, I&apos;m Harsh Bhamare 👋
      </motion.h1>

      {/* Subtitle */}
      <p className="mt-4 text-sm xs:text-base sm:text-lg md:text-xl text-gray-300 max-w-sm xs:max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl px-2">
        Frontend Developer passionate about creating sleek, interactive, and
        user-friendly web experiences.
      </p>

      {/* About Heading */}
      <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-extrabold mt-8">
        About
      </h1>

      {/* About Paragraph */}
      <p className="mt-3 text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed text-gray-200 max-w-sm xs:max-w-md sm:max-w-xl md:max-w-3xl lg:max-w-4xl px-3">
        Hello, World! I&apos;m Harsh Bhamare, a passionate frontend developer and a
        second-year engineering student. I have completed my journey in frontend
        development, mastering HTML, CSS, and JavaScript, along with modern
        frameworks like React.js and Next.js for building dynamic and responsive
        web applications. I&apos;m deeply enthusiastic about technology and its power
        to create impactful digital experiences. As I continue to grow in this
        field, I&apos;m eager to explore new technologies, enhance my skills, and
        contribute to innovative projects that make a difference. Let’s connect
        and grow together on this exciting journey through technology!
      </p>
    </section>
  );
}
