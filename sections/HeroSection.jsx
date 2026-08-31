"use client";

import React from "react";
import { FiDownload } from "react-icons/fi";
import Photo from "@/components/Photo";
import Link from "next/link";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FlipWords } from "@/components/ui/flip-words";
import InfoList from "@/components/InfoList";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function HeroSection() {
  const words = [
    "Software Engineer",
    "Full-Stack Developer",
    "Web Developer",
    "Mobile Developer",
  ];

  const details = `I am a passionate and dedicated Software Engineer with a strong
              foundation in programming languages. I have a keen eye for detail
              and a strong ability to work well in a team.
`;

  return (
    <div className="bg-white dark:bg-neutral-950 transition-colors duration-300">
      <div id="about" className="mx-auto max-w-6xl text-neutral-900 dark:text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="xl:h-[70vh] h-full flex justify-center p-5 ">
          <div className="flex flex-col xl:flex-row justify-between items-center gap-y-10 xl:gap-y-0 space-x-0 xl:space-x-32">
            <div className="order-2 xl:order-none text-center xl:text-left">
              <h1 className="text-2xl mb-1">
                <FlipWords words={words} />
              </h1>
              <h1 className="sm:text-6xl text-4xl font-semibold mb-8">
                Hello I&apos;m <br />
                <span className="text-green-500">Hadi Ademola</span>
              </h1>
              <div className="max-w-[500px] mb-110">
                <TextGenerateEffect details={details} />
              </div>
              <div className="flex flex-col md:flex-row items-center md:justify-between justify-center gap-8">
                <a
                  href="/Hadi_Ademola.pdf"
                  download="Hadi_Ademola_Resume"
                  className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-lg bg-transparent border border-green-500 py-2 px-2 md:px-3 lg:px-4 font-medium text-neutral-700 dark:text-neutral-200 transition-all duration-300 hover:bg-green-500 hover:text-white dark:hover:bg-white dark:hover:text-black hover:ring-2 hover:ring-neutral-400 hover:ring-offset-2 hover:ring-offset-white dark:hover:ring-offset-neutral-900">
                  <span className="mr-2 uppercase">download cv</span>
                  <FiDownload className="text-xl transition-transform group-hover:scale-90" />
                </a>
                <div className="flex flex-row gap-4 items-center">
                  {[
                    {
                      name: "discord",
                      icon: <FaDiscord />,
                      href: "https://discord.com/hardeygold205",
                    },
                    {
                      name: "linkedin",
                      icon: <FaLinkedin />,
                      href: "https://www.linkedin.com/in/hardeygold205/",
                    },
                    {
                      name: "github",
                      icon: <FaGithub />,
                      href: "https://github.com/Hardeygold205",
                    },
                    {
                      name: "twitter",
                      icon: <FaXTwitter />,
                      href: "https://x.com/AdeCode205",
                    },
                  ].map(({ name, icon, href }, index) => (
                    <div className="group" key={index}>
                      <Link
                        href={href}
                        className="group flex items-center justify-center border rounded-lg p-2 border-green-500 group-hover:bg-green-500 transition-all duration-300 dark:group-hover:bg-green-500"
                        key={index}>
                        <div className="text-xl text-green-500 group-hover:text-white">
                          {icon}
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="order-1 xl:order-2 flex justify-center items-center">
              <Photo />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="p-5">
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full
          ">
            <InfoList number="4" text="Years of experience" />
            <InfoList number="20" text="Technology mastered" />
            <InfoList number="12" text="Projects completed" />
            <InfoList number="806" text="Code commits" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
