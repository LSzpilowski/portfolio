export interface IProject {
  title: string;
  subtitle: string;
  url: string;
  image: string;
  alt?: string;
  excerpt: string;
  techs: string[];
  isVisible?: boolean;
  titleColor?: "black" | "white";
}

export interface IProjectSection {
  id: string;
  title: string;
  projects: IProject[];
}

export const projectSections: IProjectSection[] = [
  {
    id: "client",
    title: "Client Work",
    projects: [
      {
        title: "ZTT P.U.M.A.",
        subtitle: "Medical Research Laboratory",
        url: "https://pumadott.com",
        image: "/images/puma-cover.png",
        alt: "Screenshot of ZTT P.U.M.A.  - Medical Research Laboratory",
        excerpt:
          "Professional website for the Laboratory of Unique Application Models (P.U.M.A.) at Wrocław Medical University. Features research projects, publications, team profiles, and collaboration opportunities. Built with Next.js 14, TypeScript, and Tailwind CSS. The platform showcases cutting-edge research at the intersection of medicine, biology, computer science and biotechnology.",
        techs: ["Next.js 14", "TypeScript", "Tailwind CSS"],
        isVisible: true,
        titleColor: "black",
      },
    ],
  },
  {
    id: "apps",
    title: "User Applications",
    projects: [
      {
        title: "DoItly",
        subtitle: "Minimal Task Management App",
        url: "https://doitly.vercel.app",
        image: "/images/doitly-cover.png",
        alt: "Screenshot of DoItly - Minimal Task Management App",
        excerpt:
          "No priorities. No deadlines. Just do it. A minimalistic task management app with dual data persistence: localStorage for guest users and Supabase for authenticated users, supporting seamless offline-to-online transitions. Features include authentication with user-scoped data access, a single-input task model with multiple states (active, completed, archived, deleted), reusable task templates, and monthly/yearly statistics. Includes user data export (JSON), account deletion, and GDPR-compliant privacy controls.",
        techs: ["Next.js", "TypeScript", "Tailwind", "Zustand", "Supabase"],
        isVisible: true,
      },
      {
        title: "Wordly",
        subtitle: "Minimal Dictionary App",
        url: "https://wordly-ls.vercel.app",
        image: "/images/wordly-cover.png",
        alt: "Screenshot of Wordly - Minimal Dictionary App",
        excerpt:
          "No noise. Just words. A fast, mobile-first dictionary web app with a clean, content-focused UI prioritizing definitions and examples. Integrated public dictionary and image APIs (DictionaryAPI, Pexels) with error handling and caching. Features performance optimizations including debounce, lazy loading, and client-side caching. Enhanced with SEO, dynamic metadata, Open Graph support, and PWA manifest for installability.",
        techs: ["Next.js", "TypeScript", "Tailwind CSS", "API Integration"],
        isVisible: true,
      },
    ],
  },
  {
    id: "learning",
    title: "Learning Projects",
    projects: [
      {
        title: "Eataly Restaurant",
        subtitle: "Modern Restaurant Website",
        url: "https://eataly-restaurant.vercel.app/home",
        image: "/images/eataly-cover.png",
        alt: "Screenshot of Eataly Restaurant - Modern Restaurant Website",
        excerpt:
          "A modern restaurant website showcasing a full menu with starters, main courses, desserts, and drinks. Features interactive elements including a slider for featured dishes and category filtering. Designed for intuitive navigation and user-friendly browsing experience with responsive layout optimized for all devices.",
        techs: ["Next.js", "TypeScript", "Tailwind CSS"],
        isVisible: true,
      },
      {
        title: "Leaf-3",
        subtitle: "Participatory Budgeting Platform",
        url: "https://leaf-3.vercel.app/home",
        image: "/images/leaf3-cover.png",
        alt: "Screenshot of Leaf-3 - Participatory Budgeting Platform",
        excerpt:
          "A participatory budgeting web application designed for educational purposes, inspired by the Legnica Civic Budget. Showcases skills in TypeScript, Next.js, and Redux for state management. Features include displaying budget projects, filtering by ID, name, or district, and interactive map visualization. Results page displays mock voting data for demonstration purposes.",
        techs: ["Next.js", "TypeScript", "Tailwind", "Redux"],
        isVisible: true,
        titleColor: "black",
      },
    ],
  },
];

export const projects: IProject[] = projectSections
  .flatMap((section) => section.projects)
  .filter((project) => project.isVisible !== false);
