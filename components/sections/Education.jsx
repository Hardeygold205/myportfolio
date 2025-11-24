"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function TimelineItem({ item, index, isEducation }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: isEducation ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}>
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-green-500/50 via-pink-500/50 to-transparent md:left-1/2 md:-translate-x-1/2" />

      <motion.div
        className="absolute left-0 top-8 w-4 h-4 rounded-full bg-gradient-to-br from-green-500 to-pink-500 border-4 border-slate-950 md:left-1/2 md:-translate-x-1/2 z-10"
        animate={isHovered ? { scale: 1.5 } : { scale: 1 }}
        transition={{ type: "spring", stiffness: 300 }}>
        <motion.div
          className="absolute inset-0 rounded-full bg-green-500"
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </motion.div>

      {/* Content card */}
      <div
        className={`ml-12 md:ml-0 ${
          isEducation ? "md:pr-12 md:text-right" : "md:pl-12"
        } ${!isEducation && "md:ml-auto"} md:w-1/2`}>
        <motion.div
          whileHover={{ scale: 1.02, y: -5 }}
          className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300 overflow-hidden group">
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Year badge */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", delay: index * 0.2 + 0.3 }}
            viewport={{ once: true }}
            className={`inline-block mb-4 px-4 py-1.5 bg-gradient-to-r from-green-500/20 to-pink-500/20 border border-green-500/30 rounded-full text-green-300 text-sm font-semibold ${
              isEducation ? "md:float-right md:ml-4" : "md:float-left md:mr-4"
            }`}>
            📅 {item.year}
          </motion.div>

          {/* Content */}
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors">
              {item.title}
            </h3>
            <p className="text-green-400 font-semibold mb-3 flex items-center gap-2 md:justify-start">
              <span className="text-2xl">{item.icon}</span>
              {item.role}
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Decorative corner */}
          <div
            className={`absolute ${
              isEducation ? "top-0 right-0" : "top-0 left-0"
            } w-20 h-20 bg-gradient-to-br from-green-500/20 to-transparent blur-2xl`}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function EducationExperience() {
  const [activeTab, setActiveTab] = useState("all");

  const educationData = [
    {
      title: "University of Ibadan, Ibadan Nigeria",
      role: "Bachelor of Science in Physics",
      year: "2021 - 2025",
      icon: "🎓",
      description:
        "Focused on theoretical and applied physics with research in quantum mechanics and computational physics.",
    },
    {
      title: "ALX Africa",
      role: "Software Engineer",
      year: "2023 - 2024",
      icon: "💻",
      description:
        "Intensive software engineering program covering full-stack development, algorithms, and system design.",
    },
    {
      title: "FreeCodeCamp",
      role: "Frontend Developer",
      year: "2022 - 2023",
      icon: "🎨",
      description:
        "Comprehensive frontend development curriculum including responsive design, JavaScript, and modern frameworks.",
    },
  ];

  const experienceData = [
    {
      title: "CampusRide Org.",
      role: "App Developer",
      year: "2024 - 2025",
      icon: "📱",
      description:
        "Developing mobile applications for campus transportation solutions using React Native and modern technologies.",
    },
    {
      title: "ExcelExchange",
      role: "Full-Stack Developer",
      year: "2023 - 2025",
      icon: "🚀",
      description:
        "Building scalable web applications with React, Node.js, and cloud technologies for financial technology solutions.",
    },
    {
      title: "Imaginarium Creative Global",
      role: "SIWES Intern",
      year: "2023 - 2024",
      icon: "🎯",
      description:
        "Industrial training focused on creative design and web development, working on client projects and digital solutions.",
    },
  ];

  return (
    <div className="relative py-20 bg-neutral-950 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block mb-4">
            <span className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-semibold">
              📚 My Journey
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Education & Experience
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A timeline of my academic achievements and professional experiences
            that shaped my career
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10 md:mb-16 w-full">
          {[
            { id: "all", label: "All", icon: "📊" },
            { id: "education", label: "Education", icon: "🎓" },
            { id: "experience", label: "Experience", icon: "💼" },
          ].map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 md:px-6 md:py-3 text-sm md:text-base rounded-lg md:rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-green-500 to-pink-500 text-white shadow-lg shadow-green-500/50"
                  : "bg-white/5 text-gray-400 border border-white/10 hover:border-green-500/50"
              }`}>
              <span className="text-base md:text-lg">{tab.icon}</span>
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            {(activeTab === "all" || activeTab === "education") && (
              <motion.div
                key="education"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-12 mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 mb-8">
                  <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                    <span className="text-4xl">🎓</span>
                    Education
                  </h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-green-500 to-transparent" />
                </motion.div>

                {educationData.map((item, index) => (
                  <TimelineItem
                    key={index}
                    item={item}
                    index={index}
                    isEducation={true}
                  />
                ))}
              </motion.div>
            )}

            {(activeTab === "all" || activeTab === "experience") && (
              <motion.div
                key="experience"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 mb-8">
                  <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                    <span className="text-4xl">💼</span>
                    Experience
                  </h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-pink-500 to-transparent" />
                </motion.div>

                {experienceData.map((item, index) => (
                  <TimelineItem
                    key={index}
                    item={item}
                    index={index}
                    isEducation={false}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "3", label: "Certifications", icon: "🏆" },
            { number: "7+", label: "Work Experiences", icon: "💼" },
            { number: "4+", label: "Years Learning", icon: "📚" },
            { number: "12+", label: "Projects Completed", icon: "🚀" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center hover:border-green-500/50 transition-all duration-300">
              <div className="text-4xl mb-3">{stat.icon}</div>
              <motion.h4 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-pink-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </motion.h4>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
