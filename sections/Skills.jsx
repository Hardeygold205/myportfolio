"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiVuedotjs,
  SiLivewire,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiLaravel,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiSupabase,
  SiFirebase,
  SiGit,
  SiGithubactions,
  SiWordpress,
  SiDocker,
  SiLinux,
  SiPm2,
  SiApache,
  SiNginx,
  SiVercel,
  SiCpanel,
  SiCloudflare,
} from "react-icons/si";
import { TbBrandReactNative, TbTerminal2 } from "react-icons/tb";
import { FaLayerGroup } from "react-icons/fa";
import Link from "next/link";

function SkillCard({ skill, icon: Icon, category, color }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative">
      <div className="group relative flex flex-col justify-between rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 p-6 hover:border-neutral-300 dark:hover:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all duration-300">
        <div className="relative z-10 flex flex-col items-center gap-3">
          <motion.div
            animate={isHovered ? { rotate: [0, -10, 10, -10, 0] } : {}}
            transition={{ duration: 0.5 }}
            className="text-5xl"
            style={{ color }}>
            <Icon />
          </motion.div>
          <h3 className="text-neutral-900 dark:text-white font-semibold text-lg">{skill}</h3>
          <span className="text-xs text-neutral-500 dark:text-white/70 uppercase tracking-wider">
            {category}
          </span>
        </div>
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
      skills: [
        {
          name: "JavaScript",
          icon: SiJavascript,
          category: "ES6+",
          color: "#F7DF1E",
        },
        {
          name: "TypeScript",
          icon: SiTypescript,
          category: "Programming",
          color: "#3178C6",
        },
        { name: "PHP", icon: SiPhp, category: "Programming", color: "#777BB4" },
        { name: "HTML", icon: SiHtml5, category: "Markup", color: "#E34F26" },
        { name: "CSS", icon: SiCss3, category: "Styling", color: "#1572B6" },
      ],
    },
    {
      category: "Frontend & Frameworks",
      skills: [
        {
          name: "React",
          icon: SiReact,
          category: "Frontend",
          color: "#61DAFB",
        },
        {
          name: "React Native",
          icon: TbBrandReactNative,
          category: "Mobile",
          color: "#61DAFB",
        },
        {
          name: "Next.js",
          icon: SiNextdotjs,
          category: "Full-stack",
          color: "#FFFFFF",
        },
        {
          name: "TailwindCSS",
          icon: SiTailwindcss,
          category: "Styling",
          color: "#06B6D4",
        },
        {
          name: "Vue.js",
          icon: SiVuedotjs,
          category: "Frontend",
          color: "#4FC08D",
        },
        {
          name: "Livewire",
          icon: SiLivewire,
          category: "Frontend",
          color: "#FB70A9",
        },
        {
          name: "Framer Motion",
          icon: SiFramer,
          category: "Animation",
          color: "#0055FF",
        },
      ],
    },
    {
      category: "Backend & Frameworks",
      skills: [
        {
          name: "Node.js",
          icon: SiNodedotjs,
          category: "Backend",
          color: "#5FA04E",
        },
        {
          name: "Express.js",
          icon: SiExpress,
          category: "Backend",
          color: "#FFFFFF",
        },
        {
          name: "NestJS",
          icon: SiNestjs,
          category: "Backend",
          color: "#E0234E",
        },
        {
          name: "Laravel",
          icon: SiLaravel,
          category: "Backend",
          color: "#FF2D20",
        },
        {
          name: "Filament",
          icon: FaLayerGroup,
          category: "Admin Panel",
          color: "#FDAE4B",
        },
      ],
    },
    {
      category: "Databases",
      skills: [
        {
          name: "PostgreSQL",
          icon: SiPostgresql,
          category: "SQL",
          color: "#4169E1",
        },
        {
          name: "MongoDB",
          icon: SiMongodb,
          category: "NoSQL",
          color: "#47A248",
        },
        { name: "MySQL", icon: SiMysql, category: "SQL", color: "#4479A1" },
        { name: "Redis", icon: SiRedis, category: "Cache", color: "#FF4438" },
        {
          name: "Supabase",
          icon: SiSupabase,
          category: "BaaS",
          color: "#3ECF8E",
        },
        {
          name: "Firebase",
          icon: SiFirebase,
          category: "BaaS",
          color: "#FFCA28",
        },
      ],
    },
    {
      category: "Server, Tools & Platforms",
      skills: [
        {
          name: "Git",
          icon: SiGit,
          category: "Version Control",
          color: "#F05032",
        },
        {
          name: "GitHub Actions",
          icon: SiGithubactions,
          category: "CI/CD",
          color: "#2088FF",
        },
        {
          name: "WordPress",
          icon: SiWordpress,
          category: "CMS",
          color: "#21759B",
        },
        {
          name: "Docker",
          icon: SiDocker,
          category: "Containers",
          color: "#2496ED",
        },
        { name: "Linux", icon: SiLinux, category: "OS", color: "#FCC624" },
        {
          name: "SSH",
          icon: TbTerminal2,
          category: "Server",
          color: "#4EAA25",
        },
        {
          name: "PM2",
          icon: SiPm2,
          category: "Process Manager",
          color: "#2B037A",
        },
        {
          name: "Apache",
          icon: SiApache,
          category: "Server",
          color: "#D22128",
        },
        { name: "Nginx", icon: SiNginx, category: "Server", color: "#009639" },
        {
          name: "Vercel",
          icon: SiVercel,
          category: "Deployment",
          color: "#FFFFFF",
        },
        {
          name: "cPanel",
          icon: SiCpanel,
          category: "Hosting",
          color: "#FF6C2C",
        },
        {
          name: "Cloudflare",
          icon: SiCloudflare,
          category: "DNS/CDN",
          color: "#F38020",
        },
      ],
    },
  ];

  return (
    <div id="skills" className="relative py-20 overflow-hidden bg-white dark:bg-neutral-950 transition-colors duration-300">
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-white p-2">
            Skills & Technologies
          </h2>

          <p className="text-neutral-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use
            to build exceptional digital experiences
          </p>
        </motion.div>

        {skillCategories.map((category) => (
          <div key={category.category} className="mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-8">
              <h3 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2 flex items-center gap-3">
                <span className="w-12 h-1 bg-green-500 rounded-full" />
                {category.category}
              </h3>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {category.skills.map((skill) => (
                <SkillCard
                  key={skill.name}
                  skill={skill.name}
                  icon={skill.icon}
                  category={skill.category}
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

        {/* <motion.div
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
        /> */}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center">
          <Link
            href="#contact"
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800 py-2 px-3 md:px-6 lg:px-8 font-medium text-neutral-800 dark:text-neutral-200 transition-all duration-300 hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black hover:ring-2 hover:ring-neutral-400 hover:ring-offset-2 hover:ring-offset-white dark:hover:ring-offset-neutral-900">
            <span className="mr-2">Let&apos;s Build Something Amazing</span>
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
