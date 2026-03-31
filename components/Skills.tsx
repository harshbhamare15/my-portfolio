import React from "react";

const skills: string[] = [
  "JavaScript",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "Canva",
  "Figma",
  "Git",
];

export default function Skills() {
  return (
    <section className="max-w-2xl mx-auto px-6 py-2">
      <h2 className="text-2xl font-bold text-black mb-4">Skills</h2>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-zinc-900 text-white text-sm font-medium px-3 py-0.5 rounded-md"
          >
            {skill}
          </span>
        ))}

        {/* Github centered */}
        <div className="w-full flex justify-center">
          <span className="bg-zinc-900 text-white text-sm font-medium px-3 py-0.5 rounded-md">
            Github
          </span>
        </div>
      </div>
    </section>
  );
}