import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorkExperience from "@/components/WorkExperience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Hackathons from "@/components/Hackathons";
import Contact from "@/components/Contact";

const page = () => {
  return (
    <>
    <main className="space-y-28 px-6 md:px-16 py-12">
      <Hero />
      <WorkExperience />
      <Education />
      <Skills />
      <Projects />
      <Hackathons />
      <Contact />
    </main>
    <Navbar />
    </>
  );
};

export default page;
