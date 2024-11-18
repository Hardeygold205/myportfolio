import React from "react";
import ProjectCard from "@/constants/ProjectCard";
import Img1 from "../assets/fitlift.png";
import Img2 from "../assets/fresh-burger.png";
import Img3 from "../assets/hipsster.png";
import Img4 from "../assets/viberr.png";
import { HoverEffect } from "../components/ui/card-hover-effect";

export default function Project() {
  // const ProjectLists = [
  //   {
  //     src: Img1,
  //     link: "https://github.com/Hardeygold205/NottifyBot",
  //     name: "NotifyBot",
  //     language: ["Js"],
  //     description: "A telegram bot that notifies based on keywords set",
  //   },
  //   {
  //     src: Img2,
  //     link: "https://github.com/example/project2",
  //     name: "ExcelWeb",
  //     language: ["React", "MongoDB", "ExpressJS"],
  //     description: "A description of Project 2",
  //   },
  //   {
  //     src: Img3,
  //     link: "https://github.com/example/project3",
  //     name: "Project 3",
  //     language: ["Js", "Vue"],
  //     description: "A description of Project 3",
  //   },
  //   {
  //     src: Img4,
  //     link: "https://github.com/example/project4",
  //     name: "Project 4",
  //     language: ["JS", "Vue"],
  //     description: "A description of Project 4",
  //   },
  //   {
  //     src: Img3,
  //     link: "https://github.com/example/project3",
  //     name: "Project 5",
  //     language: ["Js", "Vue"],
  //     description: "A description of Project 3",
  //   },
  //   {
  //     src: Img4,
  //     link: "https://github.com/example/project4",
  //     name: "Project 6",
  //     language: ["JS", "Vue"],
  //     description: "A description of Project 4",
  //   },
  // ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="gap-5 items-center flex flex-col p-5">
        <h1 className="text-4xl text-center font-bold mb-8">Project</h1>
        {/* <div className="flex flex-wrap justify-center gap-6">
          {ProjectLists.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div> */}
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={projects} />
        </div>
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
      "A streaming service that offers, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
    language: ["React Native"],
  },
  {
    title: "Twitter Gain App",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
    language: ["HTML", "CSS"],
  },
  {
    title: "CoinBase Daps Clone",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
    language: ["React", "ExpressJS"],
  },
  {
    title: "My Portfolio",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
    language: ["NextJs"],
  },
  {
    title: "CampusRide App",
    description:
      "A multinational technology company that develops, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
    language: ["React Native"],
  },
];
