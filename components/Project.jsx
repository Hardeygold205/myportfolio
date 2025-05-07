import React from "react";
import { HoverEffect } from "../components/ui/card-hover-effect";
import { FaArrowCircleRight } from "react-icons/fa";
import Link from "next/link";

export default function Project() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="gap-5 items-center flex flex-col p-5">
        <h1 className="md:text-5xl text-4xl font-extrabold mt-10">Project</h1>
        <div className="max-w-5xl mx-auto px-2">
          <HoverEffect items={projects} />
        </div>
        <Link target="_blank" href="https://github.com/Hardeygold205">
          <button className="btn rounded-full bg-transparent border px-5 text-md">
            View all
            <FaArrowCircleRight className="text-2xl" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export const projects = [
  {
    title: "NotifyBot",
    description:
      "A telegram bot that notifies based on user set keywords. The Bot can be used in all group chat.",
    link: "https://github.com/Hardeygold205/NottifyBot",
    language: ["NodeJs"],
  },
  {
    title: "ExcelExchange App",
    description:
      "This is an Exchange App where users can buy and sell cryptocurrencies and digital funds with thier local currency",
    link: "https://github.com/Hardeygold205/ExcelApp",
    language: ["React Native"],
  },
  {
    title: "Twitter Gain App",
    description:
      "This is a twitter gain web app where you can connect with people, basically for following one another on Twitter",
    link: "https://github.com/Hardeygold205/twitter-gain-app",
    language: ["HTML", "CSS"],
  },
  {
    title: "CoinBitExtension DApps",
    description:
      "A technology built with React and ExpressJS where users can interact with web3 DAPS",
    link: "https://coinbit-extension.vercel.app",
    language: ["React", "ExpressJS"],
  },
  {
    title: "My Portfolio",
    description:
      "This is my personal portfolio where you can know about me, my skills, my projects and all...",
    link: "https://github.com/Hardeygold205/myportfolio",
    language: ["NextJs"],
  },
  {
    title: "CampusRide App",
    description:
      "Ride made easy with CampusRide, A riding app built with lot of technology where you can connect user can connect to drivers and book ride.",
    link: "https://github.com/Hardeygold205/CampusRide",
    language: ["React Native"],
  },
];
