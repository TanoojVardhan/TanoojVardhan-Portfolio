import Link from "next/link";
import React from "react";
import { Navigation } from "@/components/nav";
import { Card } from "@/components/card";
import Particles from "@/components/particles";
import "./experience.css";

export default function Experience() {
  const professionalExperiences = [
    {
      title: "Summer Intern – Vertebrate IT and Business Services Pvt Ltd.",
      period: "May 2024 – June 2024",
      description: [
        "Developed a fully functional e-commerce platform with product browsing, cart management, and secure checkout",
        "Integrated an AI-powered chatbot for product recommendations and real-time customer support",
      ],
    },
    {
      title: "EMI LEDHU (FIRM)",
      period: "Oct 2023 – FEB 2024",
      description: [
        "Managed logistics and vendor coordination for a 10-member startup",
        "Streamlined operational processes to enhance efficiency and cost-effectiveness",
      ],
    },
  ];

  const collegeExperiences = [
    {
      title: "Lead of Inventory and Logistics – Shore Fest 2023",
      period: "Oct 2022 – Feb 2023",
      description: [
        "Led a team of 20+ members, overseeing inventory and logistics operations",
        "Coordinated with multiple departments to ensure smooth event execution",
      ],
    },
    {
      title: "Operations Manager - Gstudio Club (GITAM)",
      period: "Feb 2023 – March 2024",
      description: [
        "Led a team of 10, overseeing five sub-domains: operations, finance, documentation, external relations, and logistics",
        "Planned and executed events, ensuring smooth coordination across departments",
      ],
    },
    {
      title: "Smart India Hackathon – Volunteer",
      period: "December 2024",
      description: [
        "Organized a national hackathon for 200+ participants, overseeing logistics and event execution",
        "Provided guidance to teams, improving participant experience",
      ],
    },
    {
      title: "Operations Head – Cricket Club",
      period: "Dec 2021- June 2023",
      description: [
        "Led operations, event planning, and tournament execution",
        "Assisted the marketing team in promotional campaigns",
      ],
    },
  ];

  const education = {
    institution: "Gandhi Institute of Technology and Management, Visakhapatnam, India",
    degree: "Bachelors in Artificial Intelligence and Machine Learning",
    period: "2021 - 2025",
  };

  const skills = {
    technical: ["React JS", "Next JS", "HTML", "CSS", "C", "Python", "Java", "JavaScript"],
    core: [
      "Team Leadership",
      "Operations Planning",
      "Video Editing",
      "Photography & Cinematography",
      "Event Management",
      "Financial Planning",
      "Documentation",
      "Graphic Design",
      "Inventory Management",
      "Logistics Coordination",
      "Cross-functional Collaboration",
      "Project Management",
      "Strategic Thinking",
      "Resource Allocation",
      "Problem Solving",
      "Vendor Management",
      "Budget Planning",
      "Time Management",
      "Communication Skills",
      "Analytical Thinking",
    ],
  };

  // Featured experience and groups
  const featured = professionalExperiences[0]; // Summer Intern
  const top2 = collegeExperiences[0]; // Shore Fest
  const top3 = collegeExperiences[1]; // Gstudio Club
  const remaining = collegeExperiences.slice(2); // Remaining experiences

  return (
    <div className="relative pb-16">
      <Navigation />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={150}
        staticity={20}
        ease={20}
        refresh={true}
      />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0 animate-fade-in">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Experience & Skills
          </h2>
          <p className="mt-4 text-zinc-400">
            My professional background and leadership journey.
          </p>
        </div>
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

        {/* Education section */}
        <section>
          <div className="grid grid-cols-1 gap-4">
            <Card>
              <article className="p-4 md:p-8">
                <h2 className="text-2xl font-bold mb-2 text-zinc-100">Education</h2>
                <h3 className="text-xl font-bold text-zinc-100 group-hover:text-white">{education.institution}</h3>
                <p className="text-zinc-300 group-hover:text-zinc-100">{education.degree}</p>
                <p className="text-zinc-400 group-hover:text-zinc-300">{education.period}</p>
              </article>
            </Card>
          </div>
        </section>

        {/* Main Experience Grid - Featured + Top Experiences */}
        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
          {/* Featured Professional Experience */}
          <Card>
            <article className="relative w-full h-full p-4 md:p-8 animate-fade-in">
              <div className="flex items-center justify-between gap-2">
                <div className="text-xs text-zinc-100">
                  <span>Featured Experience</span>
                </div>
                <span className="text-xs text-zinc-500">{featured.period}</span>
              </div>

              <h2 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
                {featured.title}
              </h2>
              <div className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                <ul className="list-disc pl-5">
                  {featured.description.map((item, i) => (
                    <li key={i} className="leading-7">{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          </Card>

          {/* Top College Experiences */}
          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0">
            {[top2, top3].map((exp, idx) => (
              <Card key={idx}>
                <article className="relative w-full h-full p-4 md:p-8 animate-fade-in" style={{ animationDelay: `${(idx + 1) * 200}ms` }}>
                  <div className="flex justify-between items-center">
                    <h2 className="mt-2 text-xl font-bold text-zinc-100 group-hover:text-white">
                      {exp.title}
                    </h2>
                    <span className="text-xs text-zinc-500">{exp.period}</span>
                  </div>
                  <div className="mt-2 leading-relaxed duration-150 text-zinc-400 group-hover:text-zinc-300">
                    <ul className="list-disc pl-5">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Professional Experience */}
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <section>
          <h2 className="text-2xl font-bold mb-6 text-zinc-100">Additional Professional Experience</h2>
          <div className="grid grid-cols-1 gap-4">
            {professionalExperiences.slice(1).map((exp, idx) => (
              <Card key={idx}>
                <article className="p-4 md:p-8">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-zinc-100 group-hover:text-white">{exp.title}</h3>
                    <span className="text-xs text-zinc-500">{exp.period}</span>
                  </div>
                  <div className="leading-relaxed text-zinc-400 group-hover:text-zinc-300">
                    <ul className="list-disc pl-5">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Card>
            ))}
          </div>
        </section>

        {/* Remaining College Experiences */}
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-2 animate-fade-in" style={{ animationDelay: "600ms" }}>
          {remaining.map((exp, idx) => (
            <Card key={idx}>
              <article className="relative w-full h-full p-4 md:p-8">
                <h2 className="mt-2 text-xl font-bold text-zinc-100 group-hover:text-white">
                  {exp.title}
                </h2>
                <p className="text-xs text-zinc-500">{exp.period}</p>
                <div className="mt-2 leading-relaxed duration-150 text-zinc-400 group-hover:text-zinc-300">
                  <ul className="list-disc pl-5">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </Card>
          ))}
        </div>

        {/* Skills section */}
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        
        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 animate-fade-in" style={{ animationDelay: "800ms" }}>
          <Card>
            <article className="p-4 md:p-8">
              <h2 className="text-xl font-bold mb-4 text-zinc-100 group-hover:text-white">Technical Skills</h2>
              <div className="flex flex-wrap gap-2">
                {skills.technical.map((skill, index) => (
                  <span key={index} className="px-2 py-1 bg-zinc-800/40 rounded text-sm text-zinc-300">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          </Card>
          
          <Card>
            <article className="p-4 md:p-8">
              <h2 className="text-xl font-bold mb-4 text-zinc-100 group-hover:text-white">Core Competencies</h2>
              <div className="flex flex-wrap gap-2">
                {skills.core.slice(0, 15).map((skill, index) => (
                  <span key={index} className="px-2 py-1 bg-zinc-800/40 rounded text-sm text-zinc-300">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          </Card>
        </div>
      </div>
    </div>
  );
}