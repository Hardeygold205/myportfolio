"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LuBriefcase,
  LuGraduationCap,
  LuCalendar,
  LuAward,
  LuFolderCheck,
  LuBookOpen,
  LuLaptop,
} from "react-icons/lu";
import Image from "next/image";

function SectionIllustration({ title, subtitle, imagePath, reverse = false }) {
  return (
    <div className="sticky top-28 flex flex-col items-center justify-center">
      <div className="relative w-full max-w-sm aspect-square flex items-center justify-center p-8 rounded-2xl bg-transparent dark:bg-neutral-950/60 border border-neutral-200 dark:border-neutral-800">
        <Image
          src={imagePath || "/assets/work-study-icon2.png"}
          alt={`${title} Illustration`}
          fill
          className={`relative z-10 w-full h-full object-contain opacity-90 dark:invert transition-transform duration-500 hover:scale-105 ${reverse ? "scale-x-[-1]" : ""}`}
        />
      </div>
      <div className="mt-6 text-center">
        <h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-1">
          {title}
        </h4>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-sm">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

function TimelineCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative pl-8 pb-10 last:pb-0 group">
      <div className="absolute left-[11px] top-3 bottom-0 w-px bg-gradient-to-b from-green-500/50 via-neutral-300 dark:via-neutral-800 to-transparent group-last:hidden" />

      <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-white dark:bg-neutral-950 border border-green-500/50 flex items-center justify-center group-hover:border-green-500 transition-colors">
        <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]" />
      </div>

      <div className="border border-neutral-200 dark:border-neutral-800/80 bg-neutral-50 dark:bg-neutral-900/40 hover:border-neutral-300 dark:hover:border-neutral-700 backdrop-blur-xl rounded-2xl p-6 shadow-xl hover:shadow-green-500/5 transition-all duration-300">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-xs font-semibold">
            <LuCalendar className="w-3.5 h-3.5" />
            {item.year}
          </span>
          {item.icon && (
            <div className="p-2 rounded-lg bg-neutral-200/80 dark:bg-neutral-800/50 text-green-500 dark:text-green-400">
              {item.icon}
            </div>
          )}
        </div>

        <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-1 group-hover:text-green-500 dark:group-hover:text-green-400 transition-colors">
          {item.title}
        </h4>
        <p className="text-sm font-medium text-green-500 mb-3">{item.role}</p>
        <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function EducationExperience() {
  const [activeTab, setActiveTab] = useState("all");

  const experienceData = [
    {
      title: "Extension Africa",
      role: "Frontend Developer (Internship)",
      year: "2025 - Present",
      icon: <LuLaptop className="w-4 h-4" />,
      description:
        "Refactored and improved the organization's web applications. Designed responsive onboarding flows, auth systems, and forms while collaborating in an agile team of 13+.",
    },
    {
      title: "Play2Score Organization",
      role: "Frontend Mobile Developer",
      year: "May 2025 - Dec 2025",
      icon: <LuLaptop className="w-4 h-4" />,
      description:
        "Built mobile and web applications using React Native & Expo. Integrated Supabase for real-time data synchronization, auth, and notifications.",
    },
    {
      title: "Branovax Technology",
      role: "Full-Stack Developer & Team Lead",
      year: "Aug 2025 - April 2025",
      icon: <LuLaptop className="w-4 h-4" />,
      description:
        "Led a 3-member development team to deliver custom client web apps built with Next.js and optimized SEO structures.",
    },
    {
      title: "ExcelExchange",
      role: "Full-Stack Developer",
      year: "2023 - 2025",
      icon: <LuLaptop className="w-4 h-4" />,
      description:
        "Built scalable web applications for fintech solutions using React, Node.js, and modern cloud deployment environments.",
    },
    {
      title: "Imaginarium Creative Global",
      role: "SIWES Intern",
      year: "2023 - 2024",
      icon: <LuLaptop className="w-4 h-4" />,
      description:
        "Industrial training focused on creative design systems and web interface implementations for corporate clients.",
    },
    {
      title: "CampusRide Org.",
      role: "App Developer",
      year: "2024 - 2025",
      icon: <LuLaptop className="w-4 h-4" />,
      description:
        "Engineered mobile transportation tracking applications for campus logistics using React Native.",
    },
  ];

  const educationData = [
    {
      title: "University of Ibadan, Ibadan Nigeria",
      role: "Bachelor of Science in Physics",
      year: "2021 - 2025",
      icon: <LuGraduationCap className="w-4 h-4" />,
      description:
        "Focused on theoretical & applied physics, with computational physics and mechanics research.",
    },
    {
      title: "ALX Africa",
      role: "Software Engineer",
      year: "2023 - 2024",
      icon: <LuLaptop className="w-4 h-4" />,
      description:
        "Intensive software engineering curriculum covering full-stack architecture, system design, and algorithms.",
    },
    {
      title: "FreeCodeCamp",
      role: "Frontend Developer",
      year: "2022 - 2023",
      icon: <LuLaptop className="w-4 h-4" />,
      description:
        "Comprehensive training in responsive web engineering, advanced JavaScript, and SPA frameworks.",
    },
  ];

  return (
    <section className="relative py-24 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white overflow-hidden transition-colors duration-300">
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-neutral-900 dark:text-white bg-clip-text p-2">
            Experience & Education
          </h2>
          <p className="text-neutral-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A chronological breakdown of my professional development and
            academic foundation.
          </p>
        </motion.div>

        <div className="flex justify-center gap-2 mb-16">
          {[
            {
              id: "all",
              label: "Overview",
            },
            {
              id: "experience",
              label: "Experience",
              icon: <LuBriefcase className="w-4 h-4" />,
            },
            {
              id: "education",
              label: "Education",
              icon: <LuGraduationCap className="w-4 h-4" />,
            },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-neutral-900 dark:bg-white text-white dark:text-black shadow-lg shadow-neutral-900/10 dark:shadow-white/10"
                  : "bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white border border-neutral-200 dark:border-neutral-800"
              }`}>
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <div className="space-y-24">
            {(activeTab === "all" || activeTab === "experience") && (
              <motion.div
                key="experience-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}>
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2.5 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400">
                    <LuBriefcase className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">
                    Work Experience
                  </h3>
                  <div className="flex-1 h-px bg-neutral-200 dark:bg-neutral-800 ml-2" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                  <div className="lg:col-span-7">
                    {(activeTab === "all"
                      ? experienceData.slice(0, 3)
                      : experienceData
                    ).map((item, index) => (
                      <TimelineCard key={index} item={item} index={index} />
                    ))}
                  </div>

                  <div className="hidden lg:block lg:col-span-5">
                    <SectionIllustration
                      title="Software Engineering"
                      subtitle="Building high-impact frontend web & mobile platforms."
                      imagePath="/assets/work-study-icon2.png"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {(activeTab === "all" || activeTab === "education") && (
              <motion.div
                key="education-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}>
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2.5 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400">
                    <LuGraduationCap className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">
                    Education & Training
                  </h3>
                  <div className="flex-1 h-px bg-neutral-200 dark:bg-neutral-800 ml-2" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                  <div className="hidden lg:block lg:col-span-5">
                    <SectionIllustration
                      title="Academic Foundation"
                      subtitle="Physics, computational thinking, and software methodologies."
                      imagePath="/assets/work-study-icon2.png"
                      reverse={true}
                    />
                  </div>

                  <div className="lg:col-span-7">
                    {educationData.map((item, index) => (
                      <TimelineCard key={index} item={item} index={index} />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            {
              number: "3",
              label: "Certifications",
              icon: <LuAward className="w-6 h-6 text-green-400" />,
            },
            {
              number: "6+",
              label: "Work Experiences",
              icon: <LuBriefcase className="w-6 h-6 text-green-400" />,
            },
            {
              number: "5+",
              label: "Years Learning",
              icon: <LuBookOpen className="w-6 h-6 text-green-400" />,
            },
            {
              number: "12+",
              label: "Projects Completed",
              icon: <LuFolderCheck className="w-6 h-6 text-green-400" />,
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 hover:border-green-500/40 backdrop-blur-xl rounded-2xl p-6 text-center transition-all duration-300">
              <div className="flex justify-center mb-3">{stat.icon}</div>
              <h4 className="text-3xl font-extrabold text-neutral-900 dark:text-white mb-1">
                {stat.number}
              </h4>
              <p className="text-xs md:text-sm font-medium text-neutral-500 dark:text-neutral-400">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
