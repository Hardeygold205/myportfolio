import React from "react";
import SkillList from "@/constants/SkillList";

export default function Skills() {

  return (
    <div className="my-20">
      <section className="flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold mb-8">Skills</h1>
        <div className="flex flex-wrap justify-center gap-10 max-w-sm md:max-w-none">
          <SkillList skill="HTML" />
          <SkillList skill="CSS" />
          <SkillList skill="JavaScript" />
          <SkillList skill="TypeScript" />
          <SkillList skill="Node" />
          <SkillList skill="Python" />
        </div>
        <hr className="w-48 h-0.5 bg-gray-700 dark:bg-gray-200 my-8" />
        <div className="flex flex-wrap justify-center gap-10 max-w-md md:max-w-none">
          <SkillList skill="React" />
          <SkillList skill="React Native" />
          <SkillList skill="NextJS" />
          <SkillList skill="Tailwind CSS" />
          <SkillList skill="Bootstrap" />
          <SkillList skill="ExpressJS" />
          <SkillList skill="MongoDB" />
        </div>
        <hr className="w-48 h-0.5 bg-gray-700 dark:bg-gray-200 my-8" />
        <div className="flex flex-wrap justify-center gap-10 max-w-sm md:max-w-none">
          <SkillList skill="Redux" />
          <SkillList skill="Webpack" />
          <SkillList skill="Git" />
          <SkillList skill="Jest" />
        </div>
      </section>
    </div>
  );
}
