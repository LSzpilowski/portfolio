"use client";

import React, { useRef, useEffect, useState } from "react";
import { projectSections } from "./data";
import { ProjectCard } from "./ProjectCard";
import { ScrollToTopButton } from "./ScrollToTopButton";

export function ProjectScroller() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);
  const maxTranslateRef = useRef(0);
  const [titleVisible, setTitleVisible] = useState(false);
  const [separatorsVisible, setSeparatorsVisible] = useState(false);

  useEffect(() => {
    const updateMax = () => {
      if (!sliderRef.current) return;
      const totalWidth = sliderRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      maxTranslateRef.current = Math.max(0, totalWidth - viewportWidth);
    };
    updateMax();
    const ro = new ResizeObserver(updateMax);
    if (sliderRef.current) ro.observe(sliderRef.current);
    window.addEventListener("resize", updateMax);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateMax);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollableDistance = sectionHeight - windowHeight;
      if (rect.top > 0 || rect.bottom < windowHeight) return;
      const scrolled = Math.abs(rect.top);
      const progress = Math.min(1, scrolled / scrollableDistance);
      setTranslateX(-(progress * maxTranslateRef.current));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
          setTimeout(() => setSeparatorsVisible(true), 900);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const scrollMultiplier = 3;

  return (
    <div
      ref={sectionRef}
      id="projects"
      style={{ height: `${100 + scrollMultiplier * 100}vh` }}
      className="relative"
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col bg-background-reverse">
        <div className="w-full text-center py-5 shrink-0 overflow-hidden">
          <h2
            className={`text-4xl md:text-6xl lg:text-7xl uppercase font-light text-background tracking-tight transition-all duration-700 ease-out ${
              titleVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"
            }`}
            style={{ fontFamily: "var(--font-syne), 'Roboto', sans-serif" }}
          >
            Selected projects
          </h2>
        </div>

        <div className="flex-1 min-h-0 overflow-hidden flex items-stretch">
          <div
            ref={sliderRef}
            className="flex will-change-transform items-stretch h-full"
            style={{
              transform: `translate3d(${translateX}px, 0px, 0px)`,
              transition: "transform 0.05s linear",
            }}
          >
            <div className="flex-shrink-0 w-4 md:w-32 h-full" 
                  style={{
          backgroundImage: 'url(/images/street.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
      }}/>
            {projectSections.flatMap((section) =>
              section.projects
                .filter((p) => p.isVisible !== false)
                .map((project, index) => (
                  <React.Fragment key={`${section.id}-${index}`}>
                    {index === 0 && (
                      <div className="flex-shrink-0 flex items-center justify-center w-10 h-full overflow-hidden border-background/10">
                        <span
                          className={`text-2xl font-mono font-semibold tracking-[0.25em] uppercase text-background/50 whitespace-nowrap transition-all duration-700 ease-out ${
                            separatorsVisible ? "opacity-100" : "opacity-0"
                          }`}
                          style={{
                            writingMode: "vertical-rl",
                            transform: separatorsVisible ? "rotate(180deg)" : "rotate(180deg) translateY(-1rem)",
                            transition: "transform 0.9s ease-out, opacity 0.9s ease-out",
                          }}
                        >
                          {section.title}
                        </span>
                      </div>
                    )}
                    <ProjectCard project={project} isFirst={index === 0} />
                  </React.Fragment>
                ))
            )}
            <ScrollToTopButton />
          </div>
        </div>
      </div>
    </div>
  );
}
