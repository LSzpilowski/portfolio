export interface SkillSection {
  title: string;
  items: string[];
}

export interface WorkSection {
  title: string;
  items: string[];
}

export interface Tab {
  title: string;
  color: string;
  paragraphs?: string[];
  skillSections?: SkillSection[];
  workSections?: WorkSection[];
}

export const aboutParagraphs = [
  "Hi there – thanks for stopping by!",
  "I'm a frontend engineer with 3+ years of experience, including work at Opera Software. I specialize in building maintainable, production-ready web interfaces using TypeScript, modern frameworks, and CMS-driven architectures.",
  "I focus on clarity, scalability, and long-term maintainability – thinking not only about how things look, but how components, content models, and systems work together. I enjoy refining UX details, improving structure, and reducing unnecessary complexity.",
  "Outside of coding, I stay active with bouldering, calisthenics, and movement-based performance. It keeps me focused, balanced, and creatively energized – which, believe it or not, actually helps when debugging tricky layouts."
];

export const skillSections: SkillSection[] = [
  {
    title: "Frontend engineering",
    items: [
      "TypeScript & JavaScript (ES6+)",
      "React & Next.js",
      "Responsive UI (SCSS, Tailwind CSS)",
      "HTML semantics & accessibility (WCAG-aware)",
    ]
  },
  {
    title: "State & data",
    items: [
      "Client-side state management (Zustand)",
      "RESTful API integration",
      "Supabase (Auth, database, storage)"
    ]
  },
  {
    title: "CMS & content-driven apps",
    items: [
      "Django / Wagtail CMS (production experience)",
      "WordPress (custom themes, PHP templates)"
    ]
  },
  {
    title: "Workflow & collaboration",
    items: [
      "Git (feature branching, code reviews), GitLab",
      "Jira (task planning, agile workflows)",
      "Figma (design systems, UI handoff)"
    ]
  },
  {
    title: "Development practices",
    items: [
      "Component-driven architecture",
      "Clean, maintainable reusable code",
      "Performance-aware implementation",
      "Mobile-first & cross-browser compatibility"
    ]
  }
];

export const workSections: WorkSection[] = [
  {
    title: "I value clear processes and communication.",
    items: [
      "I enjoy working in a structured environment where everyone knows what we're building and why. I collaborate closely with designers, copywriters, developers, and project managers to keep tasks moving smoothly from concept to delivery. Tools like Figma, Jira, and GitLab help me keep everything aligned and transparent."
    ]
  },
  {
    title: "I write simple, readable, and maintainable code.",
    items: [
      "I'm always looking for ways to reduce complexity, remove noise, and make components easier to understand. I love spaghetti – but not in code. Clean structure and shared conventions help teams work faster and avoid unnecessary friction."
    ]
  },
  {
    title: "I care about consistency and user experience.",
    items: [
      "Whether I'm building new pages, updating components, or migrating content, I focus on patterns that make the product feel cohesive. A predictable UX, clean implementation, and reliable collaboration are what keep projects stable even when deadlines aren't."
    ]
  }
];

export const tabs: Tab[] = [
  {
    title: "About me",
    color: "bg-blue-500",
    paragraphs: aboutParagraphs,
  },
  {
    title: "My skills",
    color: "bg-purple-500",
    skillSections: skillSections,
  },
  {
    title: "How I work",
    color: "bg-green-500",
    workSections: workSections,
  },
];
