"use client";

import React, { useEffect, useState } from "react";
import SkillList from "@/constants/SkillList";
import checkMarkIconDark from "../assets/checkmark-dark.svg";
import checkMarkIconLight from "../assets/checkmark-light.svg";
import { useTheme } from "@/constants/ThemeContext";

export default function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon =
    theme === "light" ? checkMarkIconLight : checkMarkIconDark;

  return (
    <div className="my-20">
      <section className="flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold mb-8">Skills</h1>
        <div className="flex flex-wrap justify-center gap-10 max-w-sm md:max-w-none">
          <SkillList src={checkMarkIcon} skill="HTML" />
          <SkillList src={checkMarkIcon} skill="CSS" />
          <SkillList src={checkMarkIcon} skill="JavaScript" />
          <SkillList src={checkMarkIcon} skill="TypeScript" />
          <SkillList src={checkMarkIcon} skill="Node" />
          <SkillList src={checkMarkIcon} skill="Python" />
        </div>
        <hr className="w-48 h-0.3 bg-green-600 my-8" />
        <div className="flex flex-wrap justify-center gap-10 max-w-md md:max-w-none">
          <SkillList src={checkMarkIcon} skill="React" />
          <SkillList src={checkMarkIcon} skill="React Native" />
          <SkillList src={checkMarkIcon} skill="NextJS" />
          <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
          <SkillList src={checkMarkIcon} skill="Bootstrap" />
          <SkillList src={checkMarkIcon} skill="ExpressJS" />
          <SkillList src={checkMarkIcon} skill="MongoDB" />
        </div>
        <hr className="w-48 h-0.3 bg-green-600 my-8" />
        <div className="flex flex-wrap justify-center gap-10 max-w-sm md:max-w-none">
          <SkillList src={checkMarkIcon} skill="Redux" />
          <SkillList src={checkMarkIcon} skill="Webpack" />
          <SkillList src={checkMarkIcon} skill="Git" />
          <SkillList src={checkMarkIcon} skill="Jest" />
        </div>
      </section>
    </div>
  );
}
