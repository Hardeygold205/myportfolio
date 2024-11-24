import EducationList from "@/constants/EducationList";
import React from "react";
import Image from "next/image";
import EducationIcon from "../assets/eduBlack-e8bbd37e.svg";

export default function Education() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="p-5 flex flex-col justify-center">
        <h1 className="md:text-5xl text-4xl text-center md:text-start font-extrabold mt-10 ">
          Education
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-center space-x-0 md:space-x-40 ">
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
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <Image
              alt="education_icon"
              src={EducationIcon}
              width="auto"
              height="auto"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
