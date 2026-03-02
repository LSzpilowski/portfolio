import { useActiveSection } from "@/hooks/useActiveSection";

const SECTIONS = ["About", "Experience", "Projects"];

export function SideNav() {
  const activeSection = useActiveSection(SECTIONS);

  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {SECTIONS.map((section) => (
          <li key={section}>
            <a
              className="group flex items-center py-3"
              href={`#${section.toLowerCase()}`}
            >
              <span
                className={`nav-indicator mr-4 h-px bg-primary transition-all ${
                  activeSection === section
                    ? "w-16 opacity-100"
                    : "w-8 group-hover:w-16 opacity-70 group-focus-visible:w-16"
                } motion-reduce:transition-none`}
              />
              <span
                className={`nav-text text-xs font-bold uppercase tracking-widest ${
                  activeSection === section ? "opacity-100" : "opacity-70"
                }`}
              >
                {section}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
