"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

function SkillCard({ skill, icon, category, color, delay }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group">
      <div
        className={`relative bg-gradient-to-br ${color} p-6 rounded-2xl backdrop-blur-sm border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden`}>
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          animate={
            isHovered ? { scale: 1.5, rotate: 45 } : { scale: 1, rotate: 0 }
          }
          transition={{ duration: 0.6 }}
        />

        <div className="relative z-10 flex flex-col items-center gap-3">
          <motion.div
            animate={isHovered ? { rotate: [0, -10, 10, -10, 0] } : {}}
            transition={{ duration: 0.5 }}
            className="text-5xl">
            {icon}
          </motion.div>
          <h3 className="text-white font-semibold text-lg">{skill}</h3>
          <span className="text-xs text-white/70 uppercase tracking-wider">
            {category}
          </span>
        </div>

        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at center, ${
              color.includes("green")
                ? "#a855f7"
                : color.includes("blue")
                ? "#3b82f6"
                : color.includes("green")
                ? "#10b981"
                : "#f59e0b"
            }, transparent)`,
          }}
        />
      </div>
    </motion.div>
  );
}

function InfiniteSkillScroll({ skills, direction = "left", speed = 40 }) {
  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <div className="relative w-full overflow-hidden py-8 ">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l to-transparent z-10" />

      <motion.div
        className="flex gap-8"
        animate={{
          x: direction === "left" ? [0, -1920] : [-1920, 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}>
        {duplicatedSkills.map((skill, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-40 h-40 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 flex flex-col items-center justify-center gap-3 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-green-500/50">
            <div className="text-6xl filter drop-shadow-lg">{skill.icon}</div>
            <p className="text-white font-medium text-sm">{skill.title}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      color: "from-green-600 to-green-800",
      skills: [
        { name: "HTML", icon: "🌐", category: "Markup" },
        { name: "CSS", icon: "🎨", category: "Styling" },
        { name: "JavaScript", icon: "⚡", category: "Programming" },
        { name: "TypeScript", icon: "📘", category: "Programming" },
        { name: "Python", icon: "🐍", category: "Programming" },
      ],
    },
    {
      category: "Frameworks & Libraries",
      color: "from-green-600 to-green-800",
      skills: [
        { name: "React", icon: "⚛️", category: "Frontend" },
        { name: "React Native", icon: "📱", category: "Mobile" },
        { name: "Next.js", icon: "▲", category: "Full-stack" },
        { name: "Express.js", icon: "🚂", category: "Backend" },
        { name: "TailwindCSS", icon: "💨", category: "Styling" },
      ],
    },
    {
      category: "Database & Tools",
      color: "from-green-600 to-green-800",
      skills: [
        { name: "MongoDB", icon: "🍃", category: "NoSQL" },
        { name: "PostgreSQL", icon: "🐘", category: "SQL" },
        { name: "Redux", icon: "🔄", category: "State" },
        { name: "Web3.js", icon: "⛓️", category: "Blockchain" },
        { name: "Git", icon: "📦", category: "Version Control" },
      ],
    },
  ];

  const scrollingSkills = [
    { title: "HTML", icon: "🌐" },
    { title: "CSS", icon: "🎨" },
    { title: "JavaScript", icon: "⚡" },
    { title: "TypeScript", icon: "📘" },
    { title: "React", icon: "⚛️" },
    { title: "Next.js", icon: "▲" },
    { title: "Node.js", icon: "💚" },
    { title: "Python", icon: "🐍" },
    { title: "MongoDB", icon: "🍃" },
    { title: "PostgreSQL", icon: "🐘" },
    { title: "Tailwind", icon: "💨" },
    { title: "Git", icon: "📦" },
  ];

  return (
    <div id="skills" className="relative py-20 overflow-hidden bg-neutral-950">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-6">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block mb-4">
            <span className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-semibold">
              💼 My Expertise
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r  from-green-400 via-white to-green-700 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use
            to build exceptional digital experiences
          </p>
        </motion.div>

        {skillCategories.map((category, categoryIndex) => (
          <div key={category.category} className="mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-8">
              <h3 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                <span className="w-12 h-1 bg-gradient-to-r from-green-500 to-pink-500 rounded-full" />
                {category.category}
              </h3>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {category.skills.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  skill={skill.name}
                  icon={skill.icon}
                  category={skill.category}
                  color={category.color}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        ))}

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-green-500 to-transparent my-16"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8">
          <h3 className="text-3xl font-bold text-white mb-4">
            Technologies I Love Working With
          </h3>
        </motion.div>

        <InfiniteSkillScroll
          skills={scrollingSkills}
          direction="left"
          speed={30}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block">
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-green-500 via-green-700 to-white rounded-full text-white font-semibold hover:shadow-lg hover:shadow-green-500/50 transition-all inline-flex items-center gap-2">
              Let&apos;s Build Something Amazing
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
