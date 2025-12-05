import React from "react";
import { workSections } from "../data";

export const WorkSection = () => {
  return (
    <div className="space-y-4">
      {workSections.map((section, i) => (
        <div key={i}>
          <div className="font-bold mb-2">{section.title}</div>
          <div className="text-sm space-y-2">
            {section.items.map((item, idx) => (
              <p key={idx} className="opacity-90">
                {item}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
