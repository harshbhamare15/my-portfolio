import React from "react";

interface Education {
  logo: string;
  institution: string;
  degree: string;
  period: string;
}

const educations: Education[] = [
  {
    logo: "https://i.pinimg.com/736x/fa/14/04/fa140427b70b227ecc7d1a7ba253cef9.jpg",
    institution: "Parul University",
    degree: "B.Tech - Computer Science Engineering",
    period: "2024 - 2028",
  },
  {
    logo: "SG",
    institution:
      "Smt. P.A.S Sarvajanik Marathi Highschool and A.M. Vhora Junior College",
    degree: "Higher Secondary Education, PCMB",
    period: "2023",
  },
];

export default function Education() {
  return (
    <section className="max-w-2xl mx-auto px-6 py-15">
      <h2 className="text-2xl font-bold text-black mb-6">Education</h2>
      <div className="space-y-6">
        {educations.map((edu, idx) => (
          <div key={idx} className="flex items-start justify-between gap-4">
            {/* Left: logo + info */}
            <div className="flex items-start gap-4">
              <div
                className={`w-15 h-15 rounded-full border border-gray-200 flex items-center justify-center flex-shrink-0 ${
                  edu.logo.startsWith("http")
                    ? "bg-white overflow-hidden"
                    : "bg-gray-100 text-xs font-bold text-gray-500"
                }`}
              >
                {edu.logo.startsWith("http") ? (
                  <img
                    src={edu.logo}
                    alt={edu.institution}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  edu.logo
                )}
              </div>
              <div>
                <p className="text-base font-semibold text-black">
                  {edu.institution}
                </p>
                <p className="text-sm text-gray-900">{edu.degree}</p>
              </div>
            </div>
            {/* Right: period */}
            <span className="text-sm text-gray-500 whitespace-nowrap">
              {edu.period}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
