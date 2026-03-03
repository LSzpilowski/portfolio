"use client";

import { useState, useRef, useCallback } from "react";
import { ProjectCard } from "./ProjectCard";
import { projectSections } from "./data";
import { ChevronLeft, ChevronRight } from "lucide-react";
import dynamic from "next/dynamic";

const VenomModel = dynamic(
  () => import("@/components/models/VenomModel").then((m) => m.VenomModel),
  { ssr: false }
);

export function MobileProjectSlider() {
  const allProjects = projectSections.flatMap((section) =>
    section.projects.filter((p) => p.isVisible !== false)
  );

  const totalSlides = allProjects.length + 1;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [shackleTrigger, setShackleTrigger] = useState(false);

  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const isDragging = useRef(false);

  const goTo = useCallback(
    (index: number) => {
      setCurrentSlide(Math.max(0, Math.min(index, totalSlides - 1)));
    },
    [totalSlides]
  );

  const goNext = useCallback(() => goTo(currentSlide + 1), [currentSlide, goTo]);
  const goPrev = useCallback(() => goTo(currentSlide - 1), [currentSlide, goTo]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    isDragging.current = true;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging.current) return;
      isDragging.current = false;

      const deltaX = e.changedTouches[0].clientX - touchStartX.current;
      const deltaY = e.changedTouches[0].clientY - touchStartY.current;

      if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX < 0) {
          goNext();
        } else {
          goPrev();
        }
      }
    },
    [goNext, goPrev]
  );

  const isVenomSlide = currentSlide === totalSlides - 1;

  const handleVenomClick = useCallback(() => {
    if (shackleTrigger) return;
    setShackleTrigger(true);
  }, [shackleTrigger]);

  const handleShackleDone = useCallback(() => {
    setShackleTrigger(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div id="projects" className="relative w-full h-screen bg-black dark:bg-white overflow-hidden">
      {/* Title */}
      <div className="w-full text-center py-4 shrink-0">
        <h2
          className="text-3xl uppercase font-light text-background tracking-tight"
          style={{ fontFamily: "var(--font-syne), 'Roboto', sans-serif" }}
        >
          Selected projects
        </h2>
      </div>

      <div
        className="flex-1 relative overflow-hidden"
        style={{ height: "calc(100vh - 7rem)" }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex h-full transition-transform duration-300 ease-out"
          style={{
            width: `${totalSlides * 100}%`,
            transform: `translateX(-${(currentSlide * 100) / totalSlides}%)`,
          }}
        >
          {allProjects.map((project, index) => (
            <div
              key={index}
              className="h-full overflow-y-auto"
              style={{ width: `${100 / totalSlides}%` }}
            >
              <ProjectCard project={project} isFirst={true} />
            </div>
          ))}

          <div
            className="h-full flex flex-col items-center justify-center"
            style={{
              width: `${100 / totalSlides}%`,
              backgroundImage: "url(/images/street.webp)",
              backgroundSize: "cover",
              backgroundPosition: "bottom",
            }}
          >
            <div className="w-full relative" style={{ height: "40rem" }}>
              <VenomModel
                playShackle={shackleTrigger}
                inViewport={isVenomSlide}
                onClickMesh={handleVenomClick}
                onShackleDone={handleShackleDone}
              />
            </div>
            <span
              className="text-2xl font-mono font-bold italic tracking-[0.25em] uppercase text-white hover:text-red-800 transition-colors duration-300 mt-4 cursor-pointer"
              onClick={handleVenomClick}
              role="button"
              aria-label="Scroll to top"
            >
              Back to top
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-3 z-20">
        <button
          onClick={goPrev}
          disabled={currentSlide === 0}
          aria-label="Previous project"
          className="p-1 text-background disabled:opacity-20 transition-opacity"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="flex gap-2">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === currentSlide
                  ? "bg-background scale-125"
                  : "bg-background/40"
              }`}
            />
          ))}
        </div>

        <button
          onClick={goNext}
          disabled={currentSlide === totalSlides - 1}
          aria-label="Next project"
          className="p-1 text-background disabled:opacity-20 transition-opacity"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
