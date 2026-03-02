"use client";

import { ExternalLink } from "lucide-react";
import { IProject } from "./data";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ProjectModalProps {
  project: IProject | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[calc(100vw-2rem)] sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-3xl font-bold mb-2">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-base md:text-lg text-foreground/80">
            {project.subtitle}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <p className="text-foreground/80 leading-relaxed">
            {project.excerpt}
          </p>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground/60 mb-3">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techs.map((tech, index) => (
                <span
                  key={index}
                  className="text-sm px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Visit Project
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
