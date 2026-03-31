import React from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Hero() {
  return (
    <section className="max-w-2xl mx-auto px-6 py-15">
      {/* Name + Avatar Row */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <h1 className="text-6xl font-extrabold text-black leading-none tracking-tight mb-4">
            Hi, I&apos;m Harsh👋
          </h1>
          <p
            className={`${inter.className} text-xl text-black font-normal leading-relaxed`}
          >
            Frontend Developer focused on creating sleek, responsive, and
            user-friendly web applications. Looking for Opportunities.
          </p>
        </div>
        {/* Avatar circle — same size & style as screenshot */}
        <div className="flex-shrink-0 w-30 h-30 rounded-full bg-gray-100 overflow-hidden border border-gray-200 mt-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFUEfOEtnNkPyHKHvwPHS5p_EccJH3Es72wlaPH7O5gAtcsv8H"
            alt="Harsh"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* About Section */}
      <div>
        <h2 className="text-xl font-bold text-black mt-10 mb-2">About</h2>
        <p className="text-base text-gray-600 leading-relaxed">
          I am a fresher, A passionate Frontend Developer and a second-year
          engineering student. I have completed my journey in frontend
          development, mastering JavaScript and modern frameworks like{" "}
          <span className="text-black">React.js and Next.js</span> for building
          dynamic and responsive web applications. I'm deeply enthusiastic about
          technology and its power to create impactful digital experiences. As I
          continue to grow in this field, I'm eager to explore new technologies,
          enhance my skills, and contribute to innovative projects that make a
          difference.
        </p>
      </div>
    </section>
  );
}
