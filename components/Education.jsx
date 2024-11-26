"use client"

import EducationList from "@/constants/EducationList";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="p-5 flex flex-col justify-center">
        <h1 className="md:text-5xl text-4xl text-center md:text-start font-extrabold md:my-10 ">
          Education
        </h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex flex-col md:flex-row justify-between items-center space-x-0 md:space-x-40 ">
          <div className="order-2 md:order-none w-full">
            <EducationList
              school="University of Ibada, Ibadan Nigeria"
              course="Bachelor of Science in Physics"
              year="2021 - 2025"
            />
            <EducationList
              school="ALX Africa"
              course="Software Engineer"
              year="2023 - 2024"
            />
            <EducationList
              school="FreeCodeCamp"
              course="Frontend Developer"
              year="2022 - 2023"
            />
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <Image
              alt="education_icon"
              src="/assets/eduBlack-e8bbd37e.svg"
              width={800}
              height={800}
              className="object-contain"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
