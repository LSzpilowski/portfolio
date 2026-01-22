export interface IProject {
  title: string;
  url: string;
  image: string;
  excerpt: string;
  techs: string[];
}

export const projects: IProject[] = [
  {
    title: "DoItly - Minimal Task Management App",
    url: "https://doitly.vercel.app",
    image: "/images/todo.jpg",
    excerpt:
      "No priorities. No deadlines. Just do it. A minimalistic task management app with dual data persistence: localStorage for guest users and Supabase for authenticated users, supporting seamless offline-to-online transitions. Features include authentication with user-scoped data access, a single-input task model with multiple states (active, completed, archived, deleted), reusable task templates, and monthly/yearly statistics. Includes user data export (JSON), account deletion, and GDPR-compliant privacy controls.",
    techs: ["Next.js", "TypeScript", "Tailwind", "Zustand", "Supabase"],
  },
  {
    title: "Wordly - Minimal Dictionary App",
    url: "https://wordly-ls.vercel.app",
    image: "/images/dictionary.jpg",
    excerpt:
      "No noise. Just words. A fast, mobile-first dictionary web app with a clean, content-focused UI prioritizing definitions and examples. Integrated public dictionary and image APIs (DictionaryAPI, Pexels) with error handling and caching. Features performance optimizations including debounce, lazy loading, and client-side caching. Enhanced with SEO, dynamic metadata, Open Graph support, and PWA manifest for installability.",
    techs: ["Next.js", "TypeScript", "Tailwind CSS", "API"],
  },
  {
    title: "Leaf-3",
    url: "https://leaf-3.vercel.app/home",
    image: "/images/leaf3.jpg",
    excerpt:
      "This page is a participatory budgeting web application designed for educational purposes, inspired by the Legnica Civic Budget. It showcases skills in using technologies like TypeScript, Next.js, and Redux for state management. The site offers functionalities to display existing participatory budget projects and filter them by ID, name or district. Additionally, you can either display all projects on the map, or just a single one. Result page show (for now) mock voting results.",
    techs: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "Eataly Restaurant",
    url: "https://eataly-restaurant.vercel.app/home",
    image: "/images/eataly.jpg",
    excerpt:
      "Modern design showcasing a menu featuring starters, main courses, desserts, and drinks. The site includes interactive features like a slider for top picks, filtering to browse categories. It's built for user-friendly navigation, allowing quick access to menu items and encouraging ordering through a straightforward interface. Future development: `log in` functionality with option of adding items to cart and mark them as a favourite.",
    techs: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "Weather App",
    url: " https://weather-app-next-js-lime.vercel.app/",
    image: "/images/weather.jpg",
    excerpt:
      "The Weather App was built JavaScript at early stage of my programming journey, following the course. Later on, it was updated to Next.js and TypeScript. It provides a simple interface for users to check weather conditions by city. It includes details like temperature, humidity, and weather descriptions. The app aims to provide quick, real-time weather updates in a user-friendly format. Built with Next.js, it focuses on delivering essential weather information effectively. ",
    techs: ["Next.js", "TypeScript", "Tailwind", "API"],
  },
];
