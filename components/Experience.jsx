import ExperienceList from "@/constants/ExperienceList";
import React from "react";
import Image from "next/image";

export default function Experience() {
  return (
    <div className="max-w-6xl mx-auto ">
      <div className="p-5 flex flex-col justify-center">
        <h1 className="md:text-5xl text-4xl text-center md:text-end font-extrabold mt-10 ">
          Experiences
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-center space-x-0 md:space-x-40">
          <div className="order-2 md:order-none hidden md:flex justify-center">
            <Image
              alt="education_icon"
              src="/assets/expBlack-53aeced5.svg"
              width={700}
              height={700}
              className="object-contain"
            />
          </div>
          <div className="order-1 md:order-2 w-full">
            <ExperienceList
              school="University of Ibada, Ibadan Nigeria"
              course="Bachelor of Science in Physics"
              year="2021 - 2025"
            />
            <ExperienceList
              school="ALX Africa"
              course="Software Engineer"
              year="2023 - 2024"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
