import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProjectCard({ project }) {
  const { src, link, name, language, description } = project;

  return (
    <Link href={link} target="_blank">
      <div
        className="card bg-base-100  border outline-1 border-gray-300 hover:border-green-500 transform transition-transform
            duration-400 ease-in-out hover:scale-105 active:translate-y-0.5 rounded-2xl w-72 shadow-xl">
        <figure>
          <Image src={src} alt={name} width={200} height={80} />
        </figure>
        <div className="card-body p-3">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">{language}</div>
          </h2>
          <p>{description}</p>
          <div className="card-actions justify-between py-3 flex">
            <div className="badge badge-outline">code</div>
            <div className="badge badge-outline">live</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
