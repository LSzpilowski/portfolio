import { ExternalLink } from "lucide-react";
import type { IExperienceItem } from "./data";

interface ExperienceItemProps {
  exp: IExperienceItem;
  index: number;
  isVisible: boolean;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export function ExperienceItem({
  exp,
  index,
  isVisible,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}: ExperienceItemProps) {
  return (
    <li
      data-index={index}
      className={`mb-10 last:mb-0 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className={`group relative grid sm:grid-cols-8 sm:gap-8 md:gap-4 pb-1 transition-all duration-200 ${
          isHovered ? "opacity-50" : "opacity-100"
        }`}
      >
        <header
          className="z-10 mb-2 mt-1 text-sm font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2 pt-0.5 whitespace-nowrap"
          aria-label={exp.period}
        >
          {exp.period}
        </header>

        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug">
            <a
              href={exp.companyUrl}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${exp.role} at ${exp.company} (opens in a new tab)`}
              className="group/link inline-flex items-baseline gap-1 text-xl font-medium hover:text-primary transition-colors"
            >
              <span>
                <ExternalLink
                  className="h-5 w-5 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 inline-block mr-2"
                  aria-hidden="true"
                />
                {exp.role} ·{" "}
                <span className="inline-flex items-center gap-1">{exp.company}</span>
              </span>
            </a>
          </h3>

          <p className="mt-2 text-md leading-normal text-muted-foreground">{exp.description}</p>

          <ul className="mt-3 flex flex-col gap-1.5" aria-label="Key responsibilities">
            {exp.bullets.map((bullet, i) => (
              <li key={i} className="flex gap-2 text-md leading-normal text-muted-foreground">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50" aria-hidden="true" />
                {bullet}
              </li>
            ))}
          </ul>

          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
            {exp.techs.map((tech, i) => (
              <li key={i}>
                <div className="flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium leading-5 text-primary">
                  {tech}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}
