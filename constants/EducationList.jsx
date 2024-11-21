import React from "react";
import { HiOutlineAcademicCap } from "react-icons/hi2";

export default function EducationList({year, course, school}) {
  return (
    <div className="p-5 bg-custom rounded-xl my-3 ">
      <div className="flex items-start gap-5">
        <div className="bg-gray-400 p-2 rounded-full">
          <HiOutlineAcademicCap className="w-6 h-6 text-white" />
        </div>
        <div className="gap-y-2">
          <p className="text-sm text-gray-500">{year}</p>
          <h3 className="text-md font-bold">
            {course}
          </h3>
          <h3 className="text-md font-bold text-gray-500">
            {school}
          </h3>
        </div>
      </div>
    </div>
  );
}
