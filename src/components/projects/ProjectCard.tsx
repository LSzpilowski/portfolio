"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Globe } from "lucide-react";
import { IProject } from "./data";

export function ProjectCard({ project, isFirst }: { project: IProject; isFirst?: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const handleMouseLeave = () => setExpanded(false);
    card.addEventListener("mouseleave", handleMouseLeave);
    return () => card.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group flex-shrink-0 w-screen md:w-auto md:max-w-[32rem] flex flex-col h-full bg-background overflow-hidden transition-all duration-300 hover:bg-background ${isFirst ? "" : "border-l-8 border-[hsl(var(--background-reverse))]"}`}
    >
      <div className="flex flex-col gap-3 h-full p-10 relative">
        <div className="absolute top-6 right-6 flex gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${project.title} GitHub repository`}
              onClick={(e) => e.stopPropagation()}
              className="text-foreground/40 hover:text-foreground transition-colors duration-200"
            >
              <Image
                src="/svg/GitHub_Invertocat_Black.svg"
                alt="GitHub"
                width={26}
                height={26}
                style={{ width: 26, height: 26 }}
                className="inline-block align-middle opacity-60 hover:opacity-100 transition-opacity duration-200 dark:hidden"
              />
              <Image
                src="/svg/GitHub_Invertocat_White.svg"
                alt="GitHub"
                width={26}
                height={26}
                style={{ width: 26, height: 26 }}
                className="inline-block align-middle opacity-60 hover:opacity-100 transition-opacity duration-200 hidden dark:inline-block"
              />
            </a>
          )}
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${project.title} live site`}
            onClick={(e) => e.stopPropagation()}
            className="text-foreground/40 hover:text-foreground transition-colors duration-200"
          >
            <Globe size={28} strokeWidth={1.5} />
          </a>
        </div>

        <div className="text-left shrink-0 pr-12">
          <h3 className="font-bold text-3xl leading-tight text-foreground tracking-tight">
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer noopener"
              className="underline-ltr"
            >
              {project.title}
            </a>
          </h3>
          <p className="text-sm mt-1 text-foreground/50 font-mono tracking-wide uppercase">{project.subtitle}</p>
        </div>

        <div className="flex-1 min-h-0 overflow-hidden relative">
          <div
            className="flex flex-col gap-3 transition-transform duration-500 ease-in-out"
            style={{ transform: expanded ? "translateY(-100%)" : "translateY(0)" }}
          >
            <div className="relative w-full aspect-video overflow-hidden bg-muted shrink-0">
              <Image
                src={project.image}
                alt={project.alt || `${project.title} screenshot`}
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-cover group-hover:scale-95 transition-all duration-500"
                loading="lazy"
              />
            </div>
            <p className="text-sm leading-relaxed text-foreground/70">{project.introExcerpt}</p>
            <button
              onClick={(e) => { e.preventDefault(); setExpanded(true); }}
              className="underline-ltr self-start text-md font-bold font-mono tracking-widest uppercase mt-1 flex flex-row items-center gap-2"
              aria-label="Read more about this project"
            >
              Read more
              <svg className="ml-2 inline" xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" viewBox="0 0 640 640" fill="currentColor" aria-hidden="true">
                <path d="M598.6 342.6C611.1 330.1 611.1 309.8 598.6 297.3L470.6 169.3C458.1 156.8 437.8 156.8 425.3 169.3C412.8 181.8 412.8 202.1 425.3 214.6L498.7 288L64 288C46.3 288 32 302.3 32 320C32 337.7 46.3 352 64 352L498.7 352L425.3 425.4C412.8 437.9 412.8 458.2 425.3 470.7C437.8 483.2 458.1 483.2 470.6 470.7L598.6 342.7z"/>
              </svg>
            </button>
          </div>

          <div
            className="absolute inset-0 flex flex-col gap-3 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden transition-transform duration-500 ease-in-out"
            style={{ transform: expanded ? "translateY(0)" : "translateY(100%)" }}
          >
            {project.excerpt.map((paragraph, i) => (
              <p key={i} className="text-sm leading-relaxed text-foreground/70">
                {paragraph}
              </p>
            ))}
            <button
              onClick={(e) => { e.preventDefault(); setExpanded(false); }}
              className="underline-ltr self-start text-md font-bold font-mono tracking-widest uppercase mt-2 flex items-center gap-2"
              aria-label="Go back"
            >
              <svg className="mr-2 inline" xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" viewBox="0 0 640 640" fill="currentColor" style={{ transform: "rotate(180deg)" }} aria-hidden="true">
                <path d="M598.6 342.6C611.1 330.1 611.1 309.8 598.6 297.3L470.6 169.3C458.1 156.8 437.8 156.8 425.3 169.3C412.8 181.8 412.8 202.1 425.3 214.6L498.7 288L64 288C46.3 288 32 302.3 32 320C32 337.7 46.3 352 64 352L498.7 352L425.3 425.4C412.8 437.9 412.8 458.2 425.3 470.7C437.8 483.2 458.1 483.2 470.6 470.7L598.6 342.7z"/>
              </svg>
              Back
            </button>
          </div>
        </div>

        <ul className="flex flex-wrap gap-1 shrink-0 pt-3 border-t border-foreground/10" aria-label="Technologies used">
          {project.techs.map((tech, i) => (
            <li key={i}>
              <span className="inline-flex items-center px-2 py-0.5 text-xs font-mono tracking-wide text-foreground/70 border border-foreground/15">
                {tech}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
