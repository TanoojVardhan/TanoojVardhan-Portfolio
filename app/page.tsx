import Link from "next/link";
import React from "react";
import Particles from "@/components/particles";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-full h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-8xl whitespace-nowrap bg-clip-text py-3.5 px-0.5">
        Gantasala Tanooj Vardhan
      </h1>
      <div className="hidden w-full h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-10 text-center animate-fade-in max-w-2xl">
        <p className="text-sm text-zinc-400 mb-6">
        Aspiring management professional with hands-on experience in operations, logistics, and event management. I am skilled in team 
        leadership, planning, and driving efficiency to achieve impactful results.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <a
            href="mailto:tanoojvardhanstudent@gmail.com"
            className="flex items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>tanoojvardhanstudent@gmail.com</span>
          </a>
          <a
            href="tel:+919849577705"
            className="flex items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>+91 98495 77705</span>
          </a>
          <a
            href="https://linkedin.com/in/tanoojvardhan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            <span>linkedin.com/in/tanoojvardhan</span>
          </a>
          <a
            href="https://github.com/tanoojvardhan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>github.com/tanoojvardhan</span>
          </a>
        </div>
      </div>
    </div>
  );
}
