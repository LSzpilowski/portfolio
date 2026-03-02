export interface SkillSection {
  title: string;
  items: string[];
}

export interface WorkSection {
  title: string;
  items: string[];
}

export interface ImpactSection {
  title: string;
  items: string[];
}

export interface Tab {
  title: string;
  color: string;
  paragraphs?: string[];
  skillSections?: SkillSection[];
  workSections?: WorkSection[];
  impactSections?: ImpactSection[];
}

export const aboutParagraphs = [
  "Hi there – thanks for stopping by!",
  "I’m a Frontend Developer with commercial experience at Opera Software, focused on building maintainable, production-ready interfaces using TypeScript and modern frameworks.",
  "I think beyond visuals — considering component architecture, content structure, and long-term scalability. I enjoy refining UX details and simplifying systems to make products easier to extend and maintain.",
  "Outside of coding, I train bouldering and calisthenics — movement keeps me focused and surprisingly good at debugging layout issues."
];

export const skillSections: SkillSection[] = [
  {
    title: "Core",
    items: [
      "TypeScript & modern JavaScript (ES6+)",
      "React & Next.js",
      "Responsive UI (Tailwind, SCSS)",
      "Semantic HTML & accessibility (WCAG-aware)",
    ]
  },
  {
    title: "State & data",
    items: [
      "Zustand (client-side state)",
      "REST API integration",
      "Supabase (Auth, database, storage)"
    ]
  },
  {
    title: "CMS & content-driven apps",
    items: [
      "Django / WagtailCMS (production experience)",
      "WordPress (custom themes, PHP templates)"
    ]
  },
  {
    title: "Workflow",
    items: [
      "Git (feature branching, code reviews)",
      "Agile collaboration (Jira)",
      "Figma (design systems & handoff)"
    ]
  },
  {
    title: "Engineering Focus",
    items: [
      "Component-driven architecture",
      "Maintainable & reusable code",
      "Performance-aware implementation",
      "Mobile-first & cross-browser compatibility"
    ]
  }
];

export const workSections: WorkSection[] = [
  {
    title: "I value clear processes and communication.",
    items: [
      "I enjoy working in structured environments where goals are well-defined and everyone understands what we’re building and why. I collaborate closely with designers and backend engineers to move ideas efficiently from concept to production."
    ]
  },
  {
    title: "I write simple, readable, and maintainable code.",
    items: [
      "I reduce complexity, structure components thoughtfully, and follow shared conventions so teams can scale features without friction."
    ]
  },
  {
    title: "I care about consistency and UX quality.",
    items: [
      "Clean implementation, predictable patterns, and attention to detail keep products stable — even under tight deadlines."
    ]
  }
];

export const impactSections: ImpactSection[] = [
  {
    title: "Impact",
    items: [
      "Built and maintained production interfaces",
      "Improved component reusability in CMS-driven projects",
      "Implemented authentication & user-scoped data access",
      "Optimized performance using lazy loading and code splitting",
    ]
  }
];

export const tabs: Tab[] = [
  {
    title: "About me",
    color: "bg-blue-500",
    paragraphs: aboutParagraphs,
    impactSections: impactSections,
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
