import Link from "next/link";
import React from "react";
import Image from "next/image";

interface IProjects {
  title: string;
  url: string;
  image: string;
  excerpt: string;
  techs: string[];
}

const projects: IProjects[] = [
  {
    title: "Leaf-3",
    url: "https://leaf-3.vercel.app/home",
    image: "/images/leaf3.jpg",
    excerpt:
      "This page is a participatory budgeting web application designed for educational purposes, inspired by the Legnica Civic Budget. It showcases skills in using technologies like TypeScript, Next.js, and Redux for state management. The site offers functionalities to propose ideas, vote, and allocate funds, reflecting the concept of community budgeting. The design is informative, with clear sections detailing the project, the budget process, and contact information. It emphasizes transparency and engagement in local decision-making.",
    techs: ["VS Code", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "Eataly Restaurant",
    url: "https://eataly-restaurant.vercel.app/home",
    image: "/images/eataly.jpg",
    excerpt:
      "The page is a restaurant-themed site with a clean, modern design showcasing a menu featuring starters, main courses, desserts, and drinks. It uses visual elements like images, product descriptions, and pricing. The site includes interactive features like a slider for top picks, filtering to browse categories, and a cart for adding items. It's built for user-friendly navigation, allowing quick access to menu items and encouraging ordering through a straightforward interface. The page's layout and features are aimed at enhancing the user experience and promoting easy exploration of the restaurant’s offerings. ",
    techs: ["VS Code", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "Hygraph Blog Starter",
    url: "https://leaf-3.vercel.app/home",
    image: "/images/leaf3.jpg",
    excerpt:
      "Participatory budgeting allows citizens to engage in decision-making on how to spend a part of a public budget. This application mirrors that concept, providing a platform for users to propose ideas, vote, and allocate funds to projects that improve their community. This project is a replica inspired by Legnica Civic Budget (LBO) and has been created for educational and demonstrative purposes only. The main goal is to showcase my skills and abilities as a programmer while adhering to copyright and legal considerations. ",
    techs: ["VS Code", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "Todo List",
    url: "https://todolist-app-next-vercel-delta.vercel.app/",
    image: "/images/todo.jpg",
    excerpt:
      "The Todo List App features a simple interface to add and track tasks. Users can create todos, mark them as completed, and review items on their lists. The design is minimalistic, focusing on functionality and ease of use. Built with Next.js, it emphasizes organizing tasks effectively. ",
    techs: ["VS Code", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "Dictionary App",
    url: "https://dictionary-app-next-eight.vercel.app/",
    image: "/images/dictionary.jpg",
    excerpt:
      "The Dictionary App allows users to search for English words, providing definitions, word types, and example uses. The app also features an audio pronunciation option, enhancing the learning experience. It offers a clean and educational interface, focusing on simple navigation and comprehensive word explanations. ",
    techs: ["VS Code", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "Weather App",
    url: " https://weather-app-next-js-lime.vercel.app/",
    image: "/images/weather.jpg",
    excerpt:
      "The Weather App provides a simple interface for users to check weather conditions by city. It includes details like temperature, humidity, and weather descriptions. The app aims to provide quick, real-time weather updates in a user-friendly format. Built with Next.js, it focuses on delivering essential weather information effectively. ",
    techs: ["VS Code", "Next.js", "TypeScript", "Tailwind"],
  },
];

function ProjectList() {
  return (
    <div className="flex flex-col gap-10 group pt-24 " id="projects">
      {projects.map((project, index) => (
        <Link
          href={project.url}
          className="relative flex flex-col gap-5 hover:cursor-pointer group-hover:opacity-60 hover:!opacity-100 duration-300 transition-opacity"
          target="/blank"
          key={index}
        >
          <div className="w-full h-80 bg-cover bg-center rounded-2xl">
            <Image
              src={project.image}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              quality={100}
              className="rounded-2xl"
              priority
            />
          </div>
          <div className="absolute inset-0 flex flex-col p-5 justify-between  bg-black bg-opacity-100 text-white opacity-0 duration-300 hover:opacity-100 transition-opacity rounded-2xl">
            <div className="flex flex-col gap-1">
              <p className="text-xl font-bold">{project.title}</p>
              <p>{project.excerpt}</p>
            </div>
            <div className="flex flex-row gap-3">
              {project.techs.map((tech, index) => (
                <p
                  key={index}
                  className="border rounded-full px-3 bg-secondary text-black font-semibold"
                >
                  {tech}
                </p>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProjectList;
