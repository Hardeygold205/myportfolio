"use client";

import React from "react";
import { FaArrowRight, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Project() {
  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-neutral-900 dark:text-white bg-clip-text p-2">
            Featured Projects
          </h2>

          <p className="text-neutral-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of applications and tools I&apos;ve built to solve
            problems and explore new technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>

        <div className="flex justify-center">
          <Link href="https://github.com/Hardeygold205" target="_blank">
            <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800 py-2 px-3 md:px-6 lg:px-8 font-medium text-neutral-800 dark:text-neutral-200 transition-all duration-300 hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black hover:ring-2 hover:ring-neutral-400 hover:ring-offset-2 hover:ring-offset-white dark:hover:ring-offset-neutral-900">
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
      className="group relative flex flex-col justify-between rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 p-6 hover:border-neutral-300 dark:hover:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all duration-300">
      <div>
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
            {project.title}
          </h3>
          <Link
            href={project.link}
            target="_blank"
            className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors">
            <FaExternalLinkAlt size={18} />
          </Link>
        </div>

        <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed mb-6">
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
    title: "Noreta Farms",
    description:
      "Production-ready corporate website built with Next.js, featuring optimized performance, a responsive UI, and SEO best practices. Deployed on a Linux server with PM2, managed environment variables, SSH authentication, and automated CI/CD via GitHub Actions for zero-touch deployments.",
    link: "https://noretafarms.com",
    language: [
      "Next.js",
      "TailwindCSS",
      "Node.js",
      "PM2",
      "GitHub Actions",
      "Nginx",
    ],
  },
  {
    title: "Extension Africa Academy",
    description:
      "Learning platform integrating a Next.js frontend with a Moodle LMS backend, providing seamless authentication and course access. Configured Apache for production, and automated deployments using GitHub Actions and PM2.",
    link: "https://academy.extensionafrica.com",
    language: ["Next.js", "Moodle (PHP)", "PM2", "Apache", "GitHub Actions"],
  },
  {
    title: "Play2score App",
    description:
      "Cross-platform mobile application with real-time features, authentication, push notifications, and an offline-friendly user experience. Integrated Supabase services and backend APIs in a Git-based team workflow.",
    link: "https://play2score.net",
    language: ["React Native", "Expo Router", "Supabase", "Firebase"],
  },
  {
    title: "Justshortlet Backend Service",
    description:
      "Designed and deployed a RESTful backend API for JustShortlet using Node.js and Express.js, with PostgreSQL for persistent data storage and Redis for caching and session management.",
    link: "https://github.com/Hardeygold205/justshortlet-api",
    language: ["Node.js", "Express.js", "Redis", "PostgreSQL", "Render"],
  },
  {
    title: "Admin Dasboard Management",
    description:
      "Designed and developed a responsive administrative dashboard with Angular and Tailwind CSS for managing JustShortlet users, hosts, properties, bookings, and platform operations.",
    link: "https://admin.justshortlet.com",
    language: ["Angular.js", "TypeScript", "TailwindCSS", "Vercel"],
  },
  {
    title: "CoinBitExtension DApps",
    description:
      "A technology built with React and ExpressJS where users can interact with web3 DAPS.",
    link: "https://coinbit-extension.vercel.app",
    language: ["React", "ExpressJS", "Web3.js"],
  },
];
