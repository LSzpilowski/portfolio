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
  "I'm a front-end developer with over three years of hands-on experience, including a year at Opera Software. I work mostly with TypeScript, SCSS, HTML, and modern frameworks. Basically, I love turning designs into clean, responsive, and easy-to-use pages. I enjoy working with designers, developers, and content teams to make interfaces that just… feel right.",
  "I care about clarity and maintainability, and I often spend time thinking about how a component or CMS model could work better. It's not just about making it look nice – it's about making it work well, consistently, and for real people. Sometimes, I find myself experimenting with small tweaks just to see if the UX can feel a little smoother.",
  "Outside of coding, I stay active with bouldering, calisthenics, and movement-based performance. It keeps me focused, balanced, and creatively energized – which, believe it or not, actually helps when debugging tricky layouts."
];

export const skillSections: SkillSection[] = [
  {
    title: "Core technologies",
    items: [
      "TypeScript & JavaScript (ES6+)",
      "React & Next.js",
      "SCSS, Tailwind CSS, responsive UI",
      "HTML semantics & accessibility standards",
    ]
  },
  {
    title: "Frameworks & CMS",
    items: [
      "Django / Wagtail CMS (production experience)",
      "WordPress (PHP templates, blog customization)"
    ]
  },
  {
    title: "Workflow & collaboration",
    items: [
      "Git (feature branching, reviews), GitLab",
      "Jira (task management), daily standups & weekly planning",
      "Figma (design system & UI translation)"
    ]
  },
  {
    title: "Development practices",
    items: [
      "Component-driven architecture",
      "Clean, maintainable code & reusable components",
      "Performance-aware implementation",
      "Mobile-first approach & cross-browser compatibility"
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
