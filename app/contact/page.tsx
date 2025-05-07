"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { Navigation } from "@/components/nav";
import { Card } from "@/components/card";
import Particles from "@/components/particles";
import { Github, Linkedin, Mail, Phone, MapPin, FileText, Download } from "lucide-react";
import "./contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully."
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: data.message || "Something went wrong. Please try again later."
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "An error occurred. Please try again later."
      });
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const downloadFile = (fileUrl: string, fileName: string) => {
    // Create a direct link and trigger a click on it
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl glow-text">
            Connect With Me
          </h2>
          <p className="mt-4 text-zinc-400">
            Recent B.Tech graduate in AI & ML seeking opportunities in
            operations and technology. Feel free to reach out or download my
            resume for more details.
          </p>
        </div>
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

        

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <div className="p-6 animate-fade-in contact-card">
              <h3 className="text-xl font-bold mb-6 text-zinc-100 glow-text">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-300 pointer-events-none">
                  <Mail className="w-5 h-5 text-zinc-400" />
                  <div className="flex-1">
                    <p className="text-zinc-400 text-sm">Email</p>
                    <a
                      href="mailto:tanoojvardhanstudent@gmail.com"
                      className="text-zinc-100 hover:text-white transition-colors inline-block pointer-events-auto"
                      style={{ position: "relative", zIndex: 100 }}
                    >
                      tanoojvardhanstudent@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-300 pointer-events-none">
                  <Phone className="w-5 h-5 text-zinc-400" />
                  <div className="flex-1">
                    <p className="text-zinc-400 text-sm">Phone</p>
                    <a
                      href="tel:+919849577705"
                      className="text-zinc-100 hover:text-white transition-colors inline-block pointer-events-auto"
                      style={{ position: "relative", zIndex: 100 }}
                    >
                      +91 98495 77705
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-300 pointer-events-none">
                  <Linkedin className="w-5 h-5 text-zinc-400" />
                  <div className="flex-1">
                    <p className="text-zinc-400 text-sm">LinkedIn</p>
                    <a
                      href="https://linkedin.com/in/tanoojvardhan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-100 hover:text-white transition-colors inline-block pointer-events-auto"
                      style={{ position: "relative", zIndex: 100 }}
                    >
                      linkedin.com/in/tanoojvardhan
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-300 pointer-events-none">
                  <Github className="w-5 h-5 text-zinc-400" />
                  <div className="flex-1">
                    <p className="text-zinc-400 text-sm">GitHub</p>
                    <a
                      href="https://github.com/tanoojvardhan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-100 hover:text-white transition-colors inline-block pointer-events-auto"
                      style={{ position: "relative", zIndex: 100 }}
                    >
                      github.com/tanoojvardhan
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-300 pointer-events-none">
                  <MapPin className="w-5 h-5 text-zinc-400" />
                  <div>
                    <p className="text-zinc-400 text-sm">Location</p>
                    <p className="text-zinc-100">Visakhapatnam, India</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <div className="p-6 contact-card no-hover-shadow flex flex-col md:flex-col items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold mb-3 text-zinc-100 flex items-center gap-2 glow-text">
                  {/* <FileText className="w-5 h-5" /> */}
                  My Documents
                </h3>
                <p className="text-zinc-400 mb-0 md:mb-0 max-w-lg">
                  Download my resume and cover letter to learn more about my
                  education, skills, and experience.
                </p>
              </div>
              <div className="flex flex-col gap-6 md:w-auto">
                <a
                  href="/Tanooj_Resume.pdf"
                  download="Tanooj_Vardhan_Resume.pdf"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full md:w-auto flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 py-3 px-8 rounded-lg transition-colors group hover-lift cursor-pointer border border-zinc-700"
                  style={{ position: "relative", zIndex: 50 }}
                >
                  <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
                  <span className="font-medium">Resume (PDF)</span>
                </a>
                <a
                  href="/Tanooj_Cover Letter.pdf"
                  download="Tanooj_Vardhan_Cover_Letter.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 py-3 px-8 rounded-lg transition-colors group hover-lift cursor-pointer border border-zinc-700"
                  style={{ position: "relative", zIndex: 50 }}
                >
                  <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
                  <span className="font-medium">Cover Letter (PDF)</span>
                </a>
              </div>
            </div>
          </Card>
        </div>

<div className="relative z-20 animate-fade-in">
          <Card>
            <div
              className="p-6 animate-fade-in contact-card"
              style={{ animationDelay: "200ms" }}
            >
              <h4 className="text-xl font-bold mb-6 text-zinc-100 group-hover:text-white glow-text">
                Technical Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "React JS",
                  "Next JS",
                  "HTML",
                  "CSS",
                  "Python",
                  "Java",
                  "JavaScript",
                  "C",
                  "Git",
                  "Tailwind CSS",
                  "Node.js",
                  "MongoDB",
                ].map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-2 bg-zinc-800/40 rounded-full text-sm text-zinc-300 hover:text-zinc-50 transition-colors hover-lift"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        </div>

        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

        <section
          className="animate-fade-in"
          style={{ animationDelay: "400ms" }}
        >
          
          <Card>
            <div className="p-6 contact-card">
            <h4 className="text-xl font-bold mb-6 text-zinc-100 group-hover:text-white glow-text">
            Core Competencies
          </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Team Leadership",
                  "Operations Planning",
                  "Event Management",
                  "Problem Solving",
                  "Documentation",
                  "Financial Planning",
                  "Strategic Thinking",
                  "Project Management",
                  "Resource Allocation",
                  "Communication Skills",
                ].map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-2 bg-zinc-800/40 rounded-full text-sm text-zinc-300 hover:text-zinc-50 transition-colors hover-lift"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        </section>

        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

        <section
          className="animate-fade-in"
          style={{ animationDelay: "600ms" }}
        >
          <Card>
            <div className="p-6 contact-card">
              <h3 className="text-xl font-bold mb-6 text-zinc-100 group-hover:text-white glow-text">
                Notable Experience
              </h3>
              <ul className="list-disc pl-5 text-zinc-400 space-y-3">
                <li className="duration-150 group-hover:text-zinc-300">
                  Led inventory and logistics operations with a team of 20+
                  members for Shore Fest 2023
                </li>
                <li className="duration-150 group-hover:text-zinc-300">
                  Managed operations across five sub-domains as Operations
                  Manager at GStudio Club
                </li>
                <li className="duration-150 group-hover:text-zinc-300">
                  Developed an E-Commerce platform with AI chatbot integration
                  during summer internship
                </li>
                <li className="duration-150 group-hover:text-zinc-300">
                  Created a Video Summarization project using CNN (to be
                  published in IEEE conference)
                </li>
              </ul>
            </div>
          </Card>
        </section>

        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

        <section
          className="animate-fade-in"
          style={{ animationDelay: "800ms" }}
        >
          <Card>
            <div className="p-6 contact-card">
              <h3 className="text-xl font-bold mb-6 text-zinc-100 group-hover:text-white glow-text">
                Get In Touch
              </h3>
              <p className="text-zinc-400 mb-4 duration-150 group-hover:text-zinc-300">
                I'm currently looking for new opportunities in operations and
                technology. If you'd like to connect or have any questions, feel
                free to reach out through any of the channels above.
              </p>
              {/* <a
                href="mailto:tanoojvardhanstudent@gmail.com"
                className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 py-3 px-6 rounded-lg transition-colors group hover-lift"
              >
                <Mail className="w-4 h-4" />
                Email Me{" "}
                <span
                  className="ml-1 invisible group-hover:visible group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                >
                  →
                </span>
              </a> */}
            </div>
          </Card>
        </section>

        <section
          className="animate-fade-in"
          style={{ animationDelay: "1000ms" }}
        >
          <Card>
            <div className="p-6 contact-card">
              <h3 className="text-xl font-bold mb-6 text-zinc-100 group-hover:text-white glow-text">
                Contact Form
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                {status.message && (
                  <div
                    className={`p-4 rounded-md ${
                      status.type === "success"
                        ? "bg-green-600/20 text-green-300 border border-green-600/30"
                        : "bg-red-600/20 text-red-300 border border-red-600/30"
                    }`}
                  >
                    {status.message}
                  </div>
                )}
                <div className="hover-lift transition-all duration-300">
                  <label htmlFor="name" className="block text-zinc-400 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    autoComplete="name"
                    className="w-full px-4 py-2 bg-zinc-800 text-zinc-100 rounded-md border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
                    style={{ zIndex: 10, position: "relative" }}
                    required
                  />
                </div>
                <div className="hover-lift transition-all duration-300">
                  <label htmlFor="email" className="block text-zinc-400 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    autoComplete="email"
                    className="w-full px-4 py-2 bg-zinc-800 text-zinc-100 rounded-md border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
                    style={{ zIndex: 10, position: "relative" }}
                    required
                  />
                </div>
                <div className="hover-lift transition-all duration-300">
                  <label htmlFor="subject" className="block text-zinc-400 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject of your message"
                    autoComplete="off"
                    className="w-full px-4 py-2 bg-zinc-800 text-zinc-100 rounded-md border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
                    style={{ zIndex: 10, position: "relative" }}
                    required
                  />
                </div>
                <div className="hover-lift transition-all duration-300">
                  <label htmlFor="message" className="block text-zinc-400 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    autoComplete="off"
                    className="w-full px-4 py-2 bg-zinc-800 text-zinc-100 rounded-md border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
                    style={{ zIndex: 10, position: "relative" }}
                    rows={4}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 py-3 px-6 rounded-lg transition-colors group hover-lift ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                  style={{ zIndex: 10, position: "relative" }}
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <span className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                        →
                      </span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
