import React from "react";
import { skillSections } from "../data";

export const SkillsSection = () => {
  return (
    <div className="space-y-4">
      {skillSections.map((section, i) => (
        <div key={i}>
          <div className="font-bold mb-2">{section.title}:</div>
          <ul className="list-disc ml-5 space-y-1">
            {section.items.map((item, idx) => (
              <li key={idx} className="text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
