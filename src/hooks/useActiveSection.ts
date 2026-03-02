import { useEffect, useState } from "react";

export function useActiveSection(sections: string[]) {
  const [activeSection, setActiveSection] = useState(sections[0] ?? "");

  useEffect(() => {
    const handleScroll = () => {
      for (const id of sections) {
        const section = document.getElementById(id.toLowerCase());
        if (section) {
          const rect = section.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            setActiveSection(id);
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return activeSection;
}
