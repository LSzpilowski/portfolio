"use client";

import React, { useState } from "react";
import Image from "next/image";
import { projectSections } from "./data";
import { ProjectModal } from "./ProjectModal";
import type { IProject } from "./data";

function ProjectList() {
  const [selectedProject, setSelectedProject] = useState<IProject | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: IProject) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 200);
  };

  return (
    <section className="pt-12 lg:pt-24" id="projects" aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="sr-only">Projects</h2>
      {projectSections.map((section) => {
        const visibleProjects = section.projects.filter(
          (project) => project.isVisible !== false
        );

        if (visibleProjects.length === 0) return null;

        return (
          <section
            key={section.id}
            className="mb-16 last:mb-0"
            tabIndex={0}
            aria-labelledby={`section-heading-${section.id}`}
          >
            <h3 id={`section-heading-${section.id}`} className="text-2xl md:text-3xl font-bold mb-6">
              {section.title}
            </h3>

            <div className="grid grid-cols-1 gap-6">
              {visibleProjects.map((project, index) => (
                <article
                  key={index}
                  onClick={() => handleProjectClick(project)}
                  tabIndex={0}
                  aria-label={`Open details for project ${project.title}`}
                  className="group relative aspect-video overflow-hidden rounded-lg border-2 border-primary/20 cursor-pointer transition-all duration-300 hover:border-primary/40 hover:shadow-lg bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/80"
                  onKeyDown={e => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleProjectClick(project);
                    }
                  }}
                >
                  <div className="absolute inset-0 opacity-30 md:hover:scale-105 transition-all duration-500">
                    <Image
                      src={project.image}
                      alt={project.alt || `${project.title} - ${project.subtitle}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      loading="lazy"
                    />
                  </div>

                  <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-6 text-center pointer-events-none">
                    <h4 className="text-4xl md:text-5xl font-bold text-foreground mb-2 drop-shadow-md">
                      {project.title}
                    </h4>
                    <p className="text-base md:text-lg text-foreground/80 drop-shadow-md">
                      {project.subtitle}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        );
      })}

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
}

export default ProjectList;
