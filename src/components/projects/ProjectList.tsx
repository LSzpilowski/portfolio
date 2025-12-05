import Link from "next/link";
import React from "react";
import Image from "next/image";
import { projects } from "./data";

function ProjectList() {
  return (
    <div className="pt-12 lg:pt-24 " id="projects">
      <div className="flex flex-col gap-10 group">
        {projects.map((project, index) => (
          <Link
            href={project.url}
            className="relative flex flex-col gap-5 hover:cursor-pointer md:group-hover:opacity-60 hover:!opacity-100 duration-300 transition-opacity"
            target="/blank"
            key={index}
          >
            <div className="w-full h-48 md:h-80 bg-cover bg-center rounded-2xl">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                quality={100}
                className="rounded-3xl"
                priority
              />
            </div>
            <div className="absolute inset-0 hidden md:flex flex-col p-5 justify-between bg-black bg-opacity-100 text-white opacity-0 duration-300 hover:opacity-100 transition-opacity rounded-3xl">
              <div className="flex flex-col gap-1">
                <p className="text-xl font-bold">{project.title}</p>
                <p>{project.excerpt}</p>
              </div>
              <div className="flex flex-row gap-3">
                {project.techs.map((tech, index) => (
                  <p
                    key={index}
                    className="border rounded-full px-3 bg-slate-300 text-black  font-semibold"
                  >
                    {tech}
                  </p>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
