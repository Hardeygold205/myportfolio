"use client";

import React from "react";
import { FiDownload } from "react-icons/fi";
import Photo from "@/constants/Photo";
import Link from "next/link";
import { FaDiscord, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FlipWords } from "../components/ui/flip-words";
import InfoList from "@/constants/InfoList";
import { motion } from "framer-motion";

export default function HeroSection() {
  const words = ["Fullstack Developer", "Software Engineer", "Web3 Marketing"];

  return (
    <div className="mx-auto max-w-6xl my-10">
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
            <p className="max-w-[500px] mb-10 leading-7">
              I am a passionate and dedicated software engineer with a strong
              foundation in programming languages. I have a keen eye for detail
              and a strong ability to work well in a team.
            </p>
            <div className="flex flex-col md:flex-row items-center md:justify-between justify-center gap-8">
              <a href="/Hadi-Ademola.pdf" download="Hadi_Ademola_CV">
                <button className="btn btn-outline btn-success uppercase p-3 flex items-center gap-2">
                  <span className="text-green-500">download cv</span>
                  <FiDownload className="text-xl" />
                </button>
              </a>
              <div className="flex gap-4 items-center">
                <Link
                  href="/discord.com/hardeygold205"
                  className="p-1 border rounded-full border-green-500 hover:bg-green-500">
                  <FaDiscord className="text-xl text-green-500 hover:text-white" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/hardeygold205/"
                  className="p-1 border rounded-full border-green-500 hover:bg-green-500">
                  <FaLinkedin className="text-xl text-green-500 hover:text-white" />
                </Link>
                <Link
                  href="https://github.com/Hardeygold205"
                  className="p-1 border rounded-full border-green-500 hover:bg-green-500">
                  <FaGithub className="text-xl text-green-500 hover:text-white" />
                </Link>
                <Link
                  href="https://x.com/Hardeygold205"
                  className="p-1 border rounded-full border-green-500 hover:bg-green-500">
                  <FaTwitter className="text-xl text-green-500 hover:text-white" />
                </Link>
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
        <div className="flex flex-wrap gap-6 justify-between">
          <InfoList number="2" text="Years of experience" />
          <InfoList number="8" text="Technology mastered" />
          <InfoList number="14" text="Projects completed" />
          <InfoList number="544" text="Code commits" />
        </div>
      </motion.div>
    </div>
  );
}
