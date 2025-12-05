export interface IProject {
  title: string;
  url: string;
  image: string;
  excerpt: string;
  techs: string[];
}

export const projects: IProject[] = [
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
    title: "Todo List",
    url: "https://todolist-app-next-vercel-delta.vercel.app/",
    image: "/images/todo.jpg",
    excerpt:
      "The Todo List App features a simple interface to add and track tasks. Users can create todos, mark them as completed, and review items on their lists. Additionally, ten last deleted task are stored and ready to reuse. The design is minimalistic, focusing on functionality and ease of use. Built with Next.js, it emphasizes organizing tasks effectively. Future development: log in functionality, ability to add more list and store data. ",
    techs: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "Dictionary App",
    url: "https://dictionary-app-next-eight.vercel.app/",
    image: "/images/dictionary.jpg",
    excerpt:
      "The Dictionary App was built with JavaScript at early stage of my programming journey, following the course. Later on, it was updated to Next.js and TypeScript. It allows users to search for English words, providing definitions, word types, and example uses. The app also features an audio pronunciation option, enhancing the learning experience. It offers a clean and educational interface, focusing on simple navigation and comprehensive word explanations. ",
    techs: ["Next.js", "TypeScript", "Tailwind", "API"],
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
