import Link from "next/link";
import React from "react";
import { Navigation } from "@/components/nav";
import { Card } from "@/components/card";
import { Eye } from "lucide-react";
import Particles from "@/components/particles";

export default function ProjectsPage() {
  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "Developed a fully functional e-commerce platform with product browsing, cart management, and secure checkout. Integrated an AI-powered chatbot for product recommendations and real-time customer support.",
      technologies: ["React", "Next.js", "AI Integration"],
      link: "https://github.com/tanoojvardhan/ecommerce",
      slug: "ecommerce",
    },
    {
      title: "Video Summarization",
      description:
        "Developed a Machine Learning project using CNN for video summarization. To be published in IEEE conference.",
      technologies: ["Python", "CNN", "Machine Learning"],
      link: "#",
      slug: "video-summarization",
    },
    {
      title: "Sloth Planner",
      description: "AI planner for tasks, events, and project management with AI integration.",
      technologies: ["React", "AI", "Project Management"],
      link: "#",
      slug: "sloth-planner",
    },
    {
      title: "Movie Ticket Booking",
      description: "Developed an online movie ticket booking database using SQL queries.",
      technologies: ["SQL", "Database Design"],
      link: "#",
      slug: "movie-ticket-booking",
    },
    {
      title: "Discord Chatbot",
      description: "Created a Discord chatbot with various functionalities.",
      technologies: ["JavaScript", "Discord API"],
      link: "#",
      slug: "discord-chatbot",
    },
  ];

  // Featured and top projects
  const featured = projects[2]; // Sloth Planner as featured
  const top2 = projects[0]; // E-Commerce Website as top2
  const top3 = projects[1]; // Video Summarization as top3
  const remaining = projects.slice(3); // Remaining projects

  const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
    <div className="p-4 md:p-8">
      <h2 className="text-2xl font-bold mb-2 text-zinc-100">{project.title}</h2>
      <p className="text-zinc-400 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, i) => (
          <span key={i} className="px-2 py-1 bg-zinc-800/40 rounded text-sm text-zinc-300">
            {tech}
          </span>
        ))}
      </div>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-zinc-200 hover:text-zinc-50 flex items-center group"
      >
        View Project <span className="ml-1 group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
      </a>
    </div>
  );

  return (
    <div className="relative pb-16">
      <Navigation />
      <Particles
        className="absolute inset-0 -z-10 !animate-fade-in"
        quantity={100}
      />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0 !animate-fade-in">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            A collection of my personal and academic projects.
          </p>
        </div>
        <div className="hidden w-screen h-px !animate-glow md:block !animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
          <Card>
            <article className="relative w-full h-full p-4 md:p-8 !animate-fade-in">
              <div className="flex items-center justify-between gap-2">
                <div className="text-xs text-zinc-100">
                  <span>Featured Project</span>
                </div>
              </div>

              <h2
                id="featured-post"
                className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
              >
                {featured.title}
              </h2>
              <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                {featured.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {featured.technologies.map((tech, i) => (
                  <span key={i} className="px-2 py-1 bg-zinc-800/40 rounded text-sm text-zinc-300">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="absolute bottom-4 md:bottom-8">
                <a
                  href={featured.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-200 hover:text-zinc-50 flex items-center group"
                >
                  View Project <span className="ml-1 group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          </Card>

          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0">
            {[top2, top3].map((project, idx) => (
              <Card key={idx}>
                <article className="relative w-full h-full p-4 md:p-8 !animate-fade-in" style={{ animationDelay: `${(idx + 1) * 200}ms` }}>
                  <h2 className="mt-2 text-xl font-bold text-zinc-100 group-hover:text-white">
                    {project.title}
                  </h2>
                  <p className="mt-2 leading-relaxed duration-150 text-zinc-400 group-hover:text-zinc-300">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-zinc-800/40 rounded text-xs text-zinc-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-200 hover:text-zinc-50 flex items-center text-sm group"
                    >
                      View Project <span className="ml-1 group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
                    </a>
                  </div>
                </article>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="hidden w-screen h-px !animate-glow md:block !animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-2 !animate-fade-in" style={{ animationDelay: "600ms" }}>
          {remaining.map((project, idx) => (
            <Card key={idx}>
              <article className="relative w-full h-full p-4 md:p-8">
                <h2 className="mt-2 text-xl font-bold text-zinc-100 group-hover:text-white">
                  {project.title}
                </h2>
                <p className="mt-2 leading-relaxed duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-zinc-800/40 rounded text-xs text-zinc-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-200 hover:text-zinc-50 flex items-center text-sm group"
                  >
                    View Project <span className="ml-1 group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
