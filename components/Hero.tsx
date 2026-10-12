import React from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Hero() {
  return (
    <section className="max-w-2xl mx-auto px-6 py-15">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <h1 className="text-3xl sm:text-6xl font-extrabold text-black leading-none tracking-tight mb-4">
            Hi, I&apos;m Harsh👋
          </h1>
          <p
            className={`${inter.className} text-sm sm:text-xl text-black font-normal leading-relaxed`}
          >
            Frontend Developer focused on creating sleek, responsive, and user
            friendly web applications. Looking for Opportunities.
          </p>
        </div>
        <div className="flex-shrink-0 w-20 h-20 sm:w-30 sm:h-30 rounded-full bg-gray-100 overflow-hidden border border-gray-200 mt-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFUEfOEtnNkPyHKHvwPHS5p_EccJH3Es72wlaPH7O5gAtcsv8H"
            alt="Harsh"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold text-black mt-10 mb-2">About</h2>
        <p className="text-base text-gray-600 leading-relaxed">
          I’m a passionate{" "}
          <span className="bg-yellow-100 text-black font-medium px-1 rounded">
            Frontend Developer
          </span>
          , <span className="text-black underline">Co-Founder of Amrivana</span>
          , and a third-year Computer Science Engineering student. I specialize
          in building dynamic, responsive, and user-friendly web applications
          using TypeScript and modern frameworks like{" "}
          <span className="text-black underline">React.js and Next.js</span>. As
          the Co-Founder of Amrivana, I’m working towards building impactful
          digital solutions that simplify healthcare experiences. This
          entrepreneurial journey allows me to combine my technical skills with
          innovation and problem-solving to create meaningful products. I’m also
          exploring{" "}
          <span className="text-black underline">Android development</span> to
          expand my expertise beyond the web into mobile app development.
          Passionate about technology and continuous learning, I’m always eager
          to explore new technologies, enhance my skills, and contribute to
          innovative projects that make a difference.
        </p>
      </div>
    </section>
  );
}
