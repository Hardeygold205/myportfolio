"use client"; // Add this if using Next.js App Router

import React from "react";
import { FaArrowRight, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion"; // Assuming you can install framer-motion, if not remove motion.div wrappers

export default function Project() {
  return (
    <section id="projects" className="py-20 bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-4">
            Featured Projects
          </h2>
          <p className="text-neutral-400 max-w-2xl">
            A collection of applications and tools I&apos;ve built to solve
            problems and explore new technologies.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <Link href="https://github.com/Hardeygold205" target="_blank">
            <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-neutral-800 px-8 font-medium text-neutral-200 transition-all duration-300 hover:bg-white hover:text-black hover:ring-2 hover:ring-neutral-400 hover:ring-offset-2 hover:ring-offset-neutral-900">
              <span className="mr-2">View all projects on GitHub</span>
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative flex flex-col justify-between rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 hover:border-neutral-600 hover:bg-neutral-900 transition-all duration-300">
      <div>
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-neutral-100 group-hover:text-green-400 transition-colors">
            {project.title}
          </h3>
          <Link
            href={project.link}
            target="_blank"
            className="text-neutral-500 hover:text-white transition-colors">
            <FaExternalLinkAlt size={18} />
          </Link>
        </div>

        <p className="text-neutral-400 text-sm leading-relaxed mb-6">
          {project.description}
        </p>
      </div>

      <div>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.language.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export const projects = [
  {
    title: "NotifyBot",
    description:
      "A telegram bot that notifies based on user set keywords. The Bot can be used in all group chat.",
    link: "https://github.com/Hardeygold205/NottifyBot",
    language: ["NodeJs", "Telegram API"],
  },
  {
    title: "ExcelExchange App",
    description:
      "This is an Exchange App where users can buy and sell cryptocurrencies and digital funds with their local currency.",
    link: "https://github.com/Hardeygold205/ExcelApp",
    language: ["React Native", "Redux"],
  },
  {
    title: "Twitter Gain App",
    description:
      "This is a twitter gain web app where you can connect with people, basically for following one another on Twitter.",
    link: "https://github.com/Hardeygold205/twitter-gain-app",
    language: ["HTML", "CSS", "JS"],
  },
  {
    title: "CoinBitExtension DApps",
    description:
      "A technology built with React and ExpressJS where users can interact with web3 DAPS.",
    link: "https://coinbit-extension.vercel.app",
    language: ["React", "ExpressJS", "Web3.js"],
  },
  {
    title: "My Portfolio",
    description:
      "This is my personal portfolio where you can know about me, my skills, my projects and all...",
    link: "https://github.com/Hardeygold205/myportfolio",
    language: ["NextJs", "Tailwind"],
  },
  {
    title: "CampusRide App",
    description:
      "Ride made easy with CampusRide. A riding app where users can connect to drivers and book rides.",
    link: "https://github.com/Hardeygold205/CampusRide",
    language: ["React Native", "Firebase"],
  },
];
