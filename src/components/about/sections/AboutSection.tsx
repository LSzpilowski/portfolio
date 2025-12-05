import React from "react";
import { aboutParagraphs } from "../data";

const boldPatterns = [
  { start: "Hi there", text: "Hi there – thanks for stopping by!" },
  { start: "I'm a front-end developer", text: "I'm a front-end developer" },
  { start: "I care about clarity", text: "I care about clarity and maintainability" },
  { start: "Outside of coding", text: "Outside of coding" },
];

const formatParagraph = (text: string) => {
  const pattern = boldPatterns.find(p => text.startsWith(p.start));
  if (!pattern) return text;
  
  const boldText = pattern.text.replace("I'm", "I'm");
  const restText = text.slice(pattern.text.length);
  
  return (
    <>
      <strong className="text-base">{boldText}</strong>
      {restText}
    </>
  );
};

export const AboutSection = () => {
  return (
    <div className="flex flex-col justify-start h-full space-y-3 text-sm leading-relaxed">
      {aboutParagraphs.map((paragraph, i) => (
        <p key={i} className="opacity-90">
          {formatParagraph(paragraph)}
        </p>
      ))}
    </div>
  );
};
