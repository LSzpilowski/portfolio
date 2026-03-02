"use client";

import { useRef, useState, useEffect } from "react";
import { experiences } from "./data";
import { ExperienceItem } from "./ExperienceItem";

export function ExperienceSection() {
  const listRef = useRef<HTMLUListElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

  useEffect(() => {
    const items = listRef.current?.querySelectorAll("li[data-index]");
    if (!items) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.index);
            setVisibleItems((prev) => new Set(prev).add(idx));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      className="pt-12 lg:pt-24 max-w-md mx-auto w-full"
      aria-labelledby="experience-heading"
    >
      <h2 id="experience-heading" className="sr-only">Experience</h2>
      <ul ref={listRef} className="group/list flex flex-col gap-1">
        {experiences.map((exp, index) => (
          <ExperienceItem
            key={index}
            exp={exp}
            index={index}
            isVisible={visibleItems.has(index)}
            isHovered={hoveredIndex !== null && hoveredIndex !== index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          />
        ))}
      </ul>
    </section>
  );
}
