"use client"

import React from "react";
import SkillList from "@/constants/SkillList";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <div className="my-20">
      <section className="flex flex-col items-center text-center">
        <h1 className="md:text-5xl text-4xl font-extrabold mb-10">Skills</h1>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex flex-wrap justify-center gap-10 max-w-sm md:max-w-none">
          <SkillList skill="HTML" />
          <SkillList skill="CSS" />
          <SkillList skill="JavaScript" />
          <SkillList skill="TypeScript" />
          <SkillList skill="NodeJS" />
          <SkillList skill="Python" />
        </motion.div>
        <hr className="w-48 h-0.5 bg-gray-700 dark:bg-gray-200 my-8" />
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex flex-wrap justify-center gap-10 max-w-md md:max-w-none">
          <SkillList skill="React" />
          <SkillList skill="React Native" />
          <SkillList skill="NextJS" />
          <SkillList skill="TailwindCSS" />
          <SkillList skill="Bootstrap" />
          <SkillList skill="ExpressJS" />
          <SkillList skill="MongoDB" />
        </motion.div>
        <hr className="w-48 h-0.5 bg-gray-700 dark:bg-gray-200 my-8" />
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex flex-wrap justify-center gap-10 max-w-sm md:max-w-none">
          <SkillList skill="PostgreSQL" />
          <SkillList skill="Redux" />
          <SkillList skill="Web3.js" />
          <SkillList skill="Solidity" />
          <SkillList skill="LaTeX" />
        </motion.div>
      </section>
      <div className="h-[20rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="slow"
        />
      </div>
    </div>
  );
}

const testimonials = [
  {
    src: "/assets/html-26148722.svg",
    title: "HTML",
  },
  {
    src: "/assets/css-a3eb2612.svg",
    title: "CSS",
  },
  {
    src: "/assets/javascript-f0e6bb96.svg",
    title: "JavaScript",
  },
  {
    src: "/assets/typescript-53138e59.svg",
    title: "TypeScript",
  },
  {
    src: "/assets/docker-0d1895f9.svg",
    title: "Python",
  },
  {
    src: "/assets/react-cbaee25f.svg",
    title: "React",
  },
  {
    src: "/assets/nextJS-f37481f8.svg",
    title: "NextJS",
  },
  {
    src: "/assets/tailwind-4385994d.svg",
    title: "Tailwind CSS",
  },
  {
    src: "/assets/bootstrap-ab487500.svg",
    title: "Bootstrap",
  },
  {
    src: "/assets/git-11e4ab32.svg",
    title: "Git",
  },
];
