"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { projectSections } from "./data";
import { ProjectModal } from "./ProjectModal";
import type { IProject } from "./data";

function ProjectList() {
  const [selectedProject, setSelectedProject] = useState<IProject | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [revealedSections, setRevealedSections] = useState<Set<string>>(new Set());
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleProjectClick = (project: IProject) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 200);
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('data-section-id');
            if (sectionId) {
              setRevealedSections((prev) => new Set(prev).add(sectionId));
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('[data-section-id]');
    sections.forEach((section) => {
      if (observerRef.current) {
        observerRef.current.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (observerRef.current) {
          observerRef.current.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <section className="pt-12" id="projects" aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="sr-only">Projects</h2>
      {projectSections.map((section, sectionIndex) => {
        const visibleProjects = section.projects.filter(
          (project) => project.isVisible !== false
        );

        if (visibleProjects.length === 0) return null;

        const isEven = sectionIndex % 2 === 0;
        const translateClass = isEven ? '-translate-x-8' : 'translate-x-8';

        return (
          <section
            key={section.id}
            data-section-id={section.id}
            className={`mb-16 last:mb-0 transition-all duration-700 ease-in-out ${
              revealedSections.has(section.id) ? 'opacity-100 translate-x-0' : `opacity-0 ${translateClass}`
            }`}
            tabIndex={0}
            aria-labelledby={`section-heading-${section.id}`}
          >
            <h3 id={`section-heading-${section.id}`} className="text-2xl md:text-3xl font-bold mb-6 text-background dark:text-background-reverse">
              {section.title}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {visibleProjects.map((project, index) => {
                const projectKey = `${section.id}-${index}`;
                const isHovered = hoveredProject === projectKey;
                const isDimmed = hoveredProject !== null && !isHovered;

                return (
                  <article
                    key={index}
                    onClick={() => handleProjectClick(project)}
                    onMouseEnter={() => setHoveredProject(projectKey)}
                    onMouseLeave={() => setHoveredProject(null)}
                    tabIndex={0}
                    aria-label={`Open details for project ${project.title}`}
                    className="group relative aspect-video overflow-hidden rounded-lg border-2 border-primary/20 cursor-pointer transition-all duration-300 hover:border-primary/40 hover:shadow-lg bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/80"
                    onKeyDown={e => {
                      if (e.key === "Enter" || e.key === " ") {
                        handleProjectClick(project);
                      }
                    }}
                  >
                    <div className={`absolute inset-0 md:hover:scale-105 transition-all duration-500 ${
                      isDimmed ? 'opacity-10' : 'opacity-60'
                    }`}>
                      <Image
                        src={project.image}
                        alt={project.alt || `${project.title} - ${project.subtitle}`}
                        fill
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
                );
              })}
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
