import React from "react";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import Photo from "@/constants/Photo";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="mx-auto max-w-6xl my-10">
      <div className="xl:h-[85vh] h-full flex justify-center p-5 ">
        <div className="flex flex-col xl:flex-row justify-between items-center gap-y-14 xl:gap-y-0 space-x-0 xl:space-x-32">
          <div className="order-2 xl:order-none text-center xl:text-left">
            <h1 className="text-xl mb-1">Fullstack Developer</h1>
            <h1 className="sm:text-6xl text-3xl font-semibold mb-8">
              Hello I'm <br />
              <span className="text-green-500">Hadi Ademola</span>
            </h1>
            <p className="max-w-[500px] mb-10">
              I am a passionate and dedicated software engineer with a strong
              foundation in programming languages. I have a keen eye for detail
              and a strong ability to work well in a team.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link href="/public/Hadi-Ademola.pdf" download="Hadi_Ademola_CV">
                <button className="btn btn-outline btn-success uppercase p-3 flex items-center gap-2">
                  <span className="text-green-500">download cv</span>
                  <FiDownload className="text-xl" />
                </button>
              </Link>
              <div>Socials</div>
            </div>
          </div>

          <div className="order-1 xl:order-2 flex justify-center items-center">
            <Photo />
          </div>
        </div>
      </div>
    </div>
  );
}
