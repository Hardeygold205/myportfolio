import React from "react";
import ProjectCard from "@/constants/ProjectCard";
import Img1 from "../assets/fitlift.png";
import Img2 from "../assets/fresh-burger.png";
import Img3 from "../assets/hipsster.png";
import Img4 from "../assets/viberr.png";

export default function Project() {
  const ProjectLists = [
    {
      src: Img1,
      link: "https://github.com/example/project1",
      name: "Project 1",
      language: ["Js", "Vue"],
      description: "A description of Project 1",
    },
    {
      src: Img2,
      link: "https://github.com/example/project2",
      name: "Project 2",
      language: ["Js", "Vue"],
      description: "A description of Project 2",
    },
    {
      src: Img3,
      link: "https://github.com/example/project3",
      name: "Project 3",
      language: ["Js", "Vue"],
      description: "A description of Project 3",
    },
    {
      src: Img4,
      link: "https://github.com/example/project4",
      name: "Project 4",
      language: ["JS", "Vue"],
      description: "A description of Project 4",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto">
      <div className="gap-5 items-center flex flex-col p-5">
        <h1 className="text-4xl text-center font-bold mb-8">Project</h1>
        <div className="flex flex-wrap justify-center gap-6">
          {ProjectLists.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
