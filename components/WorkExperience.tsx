import React from "react";
import Image from "next/image";

interface WorkExp {
  logo: string;
  company: string;
  role: string;
  period: string;
  isLatest?: boolean;
  isText?: boolean;
}

const experiences: WorkExp[] = [
  {
    logo: "https://yt3.googleusercontent.com/gCHepjodxvjcAXhiHzvNa5l_h7Xn5ghVeKGE6rTBy_XcyXDe-yEhyAK74HolUOmh-jVdp-NaeVE=s900-c-k-c0x00ffffff-no-rj",
    company: "Edu-Versity ",
    role: "Campus Ambassador",
    period: "Nov 2024 - Present",
  },
  {
    logo: "https://play-lh.googleusercontent.com/gZefyvQfHc1_c72CMMTuK2wF4MPkIRI7h86hbHyATMbszohKNQXzwbv3s08kiV0k2rY",
    company: "MetaApply",
    role: "Student Ambassador",
    period: "Jul 2024 - Present",
  },
];

const logoColors: Record<string, string> = {
  EV: "bg-white text-black border border-black",
  MA: "bg-white text-pink-500 border border-pink-500",
};

export default function WorkExperience() {
  return (
    <section className="max-w-2xl mx-auto px-6">
      <h2 className="text-2xl font-bold text-black mb-6">Work Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <div key={idx} className="flex items-center justify-between gap-4">
            {/* Left: logo + info */}
            <div className="flex items-center gap-4">
              <div className="w-15 h-15 rounded-full overflow-hidden flex-shrink-0 relative bg-white">
                <Image
                  src={exp.logo}
                  alt={exp.company}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-base font-semibold text-black">
                    {exp.company}
                  </span>
                  {exp.isLatest && (
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full border border-gray-200">
                      Latest
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-900">{exp.role}</p>
              </div>
            </div>
            {/* Right: period */}
            <span className="text-sm text-gray-500 whitespace-nowrap">
              {exp.period}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
