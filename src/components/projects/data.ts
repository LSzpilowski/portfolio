export interface IProject {
  title: string;
  subtitle: string;
  url: string;
  githubUrl?: string;
  image: string;
  alt?: string;
  introExcerpt: string;
  excerpt: string[];
  techs: string[];
  isVisible?: boolean;
}

export interface IProjectSection {
  id: string;
  title: string;
  projects: IProject[];
}

export const projectSections: IProjectSection[] = [
  {
    id: "professional",
    title: "Professional & Client Work",
    projects: [
      {
        title: "Opera",
        subtitle: "Maintaining & evolving opera.com",
        url: "https://www.opera.com",
        image: "/images/opera-cover.png",
        alt: "Screenshot of opera.com",
        introExcerpt: "Opera is one of the most recognized browser brands globally, serving tens of millions of users. The site encompasses marketing campaigns, product landing pages, blog network, and internal tooling – all maintained under continuous delivery.",
        excerpt: [
          "As part of the frontend team, I contributed to the day-to-day development and upkeep of opera.com. My work spanned building and maintaining marketing campaigns, developing new landing pages, migrating legacy static pages into structured Wagtail CMS models, implementing code refactoring and accessibility improvements, and conducting code reviews. I also developed and updated components across Opera's WordPress-based blog network, including custom PHP adjustments. Worked in a fast-paced, international team collaborating with designers, backend engineers, and QA.",
          "The platform is built on Django and Wagtail CMS with TypeScript and SCSS on the frontend, supported by AWS infrastructure. Development flows through GitLab CI/CD pipelines with Docker-based local environments.",
        ],
        techs: ["Django", "WagtailCMS", "Python", "TypeScript", "JavaScript", "SCSS", "AWS", "WordPress", "PHP", "CI/CD", "GitLab", "Jira"],
        isVisible: true,
      },
      {
        title: "ZTT P.U.M.A.",
        subtitle: "Medical Research Laboratory",
        url: "https://pumadott.com",
        image: "/images/pumadott-cover.png",
        alt: "Screenshot of ZTT P.U.M.A. - Medical Research Laboratory",
        introExcerpt: "pumadott.com is the official website of the Laboratory of Unique Application Models (P.U.M.A.) at Wrocław Medical University – a research unit operating at the intersection of medicine, biology, computer science, and biotechnology.",
        excerpt: [
          "I handled the entire project end-to-end: from UX/UI design and frontend architecture, through backend integrations and contact forms, to deployment and hosting on Vercel. The site is bilingual (Polish & English), fully accessible, and built to academic content requirements.",
          "Features research project showcases, team profiles, publications, and collaboration opportunities. Secure contact and recruitment forms with Google reCAPTCHA v3, rate limiting, honeypot fields, and email delivery via Nodemailer. Built with Next.js 14, TypeScript, SCSS following BEM and mobile-first principles.",
        ],
        techs: ["Next.js 14", "TypeScript", "SCSS", "next-intl", "Nodemailer", "Google reCAPTCHA", "Vercel"],
        isVisible: true,
      },
    ],
  },
  {
    id: "learning",
    title: "Learning Projects",
    projects: [
      {
        title: "DoItly",
        subtitle: "Minimal Task Management App",
        url: "https://doitly.vercel.app",
        githubUrl: "https://github.com/LSzpilowski/DoItly",
        image: "/images/doitly-cover.png",
        alt: "Screenshot of DoItly - Minimal Task Management App",
        introExcerpt: "No priorities. No deadlines. Just do it. A focused task management app that strips away complexity and keeps users moving. Built as a full-stack learning project covering auth flows, database design, and dual persistence – localStorage for guests, Supabase for signed-in users with seamless offline-to-online sync.",
        excerpt: [
          "Built independently as a full-stack learning project – covering architecture decisions, state management, auth flows, database design, and UX. Updated continuously with improvements to performance and accessibility.",
          "Features dual data persistence: localStorage for guests, Supabase for authenticated users with seamless offline-to-online sync. Includes a single-input task model with multiple states (active, completed, archived, deleted), reusable templates, monthly/yearly statistics, user data export (JSON), account deletion, and GDPR-compliant privacy controls. Accessible via ARIA labels, optimized images, and lazy loading.",
        ],
        techs: ["Next.js", "TypeScript", "Tailwind", "Zustand", "Supabase"],
        isVisible: true,
      },
      {
        title: "Wordly",
        subtitle: "Minimal Dictionary App",
        url: "https://wordly-ls.vercel.app",
        githubUrl: "https://github.com/LSzpilowski/Wordly",
        image: "/images/wordly-cover.png",
        alt: "Screenshot of Wordly - Minimal Dictionary App",
        introExcerpt: "No noise. Just words. A fast, mobile-first dictionary app designed around content clarity – definitions and examples front and center. Integrates DictionaryAPI and Pexels image API with client-side caching and debounce-based search. Installable as a PWA with full Open Graph and dynamic metadata support.",
        excerpt: [
          "Built independently as a learning project, with a focus on API integration patterns, performance optimization, and SEO best practices. Iterated on over time with accessibility and PWA improvements.",
          "Integrates DictionaryAPI and Pexels image API with error handling and client-side caching. Features debounce-based search, lazy loading, dynamic metadata, Open Graph support, and a PWA manifest for installability. Accessible via ARIA labels and optimized images.",
        ],
        techs: ["Next.js", "TypeScript", "Tailwind CSS", "API Integration"],
        isVisible: true,
      },
      {
        title: "Eataly Restaurant",
        subtitle: "Modern Restaurant Website",
        url: "https://eataly-restaurant.vercel.app/home",
        githubUrl: "https://github.com/LSzpilowski/eataly-restaurant",
        image: "/images/eataly-cover.png",
        alt: "Screenshot of Eataly Restaurant - Modern Restaurant Website",
        introExcerpt: "A restaurant concept website built to practice layout composition, component design, and responsive UI patterns. Showcases a full menu with category filtering, a dish slider, and a layout optimized across all screen sizes.",
        excerpt: [
          "Designed and developed independently as an early learning project – focusing on building reusable components and consistent visual hierarchy.",
          "Showcases a full menu with starters, main courses, desserts, and drinks. Features a slider for highlighted dishes, category filtering, and a responsive layout optimized across all screen sizes.",
        ],
        techs: ["Next.js", "TypeScript", "Tailwind CSS"],
        isVisible: true,
      },
      {
        title: "Leaf-3",
        subtitle: "Participatory Budgeting Platform",
        url: "https://leaf-3.vercel.app/home",
        githubUrl: "https://github.com/LSzpilowski/leaf-3",
        image: "/images/leaf3-cover.png",
        alt: "Screenshot of Leaf-3 - Participatory Budgeting Platform",
        introExcerpt: "A civic tech concept inspired by the Legnica Participatory Budget – built to explore complex state management and data-driven UI in a real-world-like context. Users can browse and filter budget projects by ID, name, or district, with an interactive map visualization and mock voting results.",
        excerpt: [
          "Developed independently as a learning project focused on Redux architecture, filtering logic, and interactive map integration.",
          "Allows browsing and filtering budget projects by ID, name, or district, with an interactive map visualization and a results page displaying mock voting data.",
        ],
        techs: ["Next.js", "TypeScript", "Tailwind", "Redux"],
        isVisible: true,
      },
    ],
  },
];

export const projects: IProject[] = projectSections
  .flatMap((section) => section.projects)
  .filter((project) => project.isVisible !== false);
