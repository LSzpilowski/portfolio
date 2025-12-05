"use client";

import Link from "next/link";
import AboutMe from "@/components/about/AboutMe";
import FixedInfo from "@/components/fixed-info/FixedInfo";
import HappinessForm from "@/components/happiness/HappinessForm";
import ProjectList from "@/components/projects/ProjectList";
import { motion, useScroll } from "framer-motion";
import { ModeToggle } from "@/components/mode-toggle/ModeToggle";

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="w-full min-h-screen p-4">
      <motion.div
        className="fixed top-0 left-0 right-0 h-[10px] bg-red-500 transform origin-left z-[9999]"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="static md:fixed top-5 left-5  transform origin-left z-10">
        <ModeToggle />
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-4 min-h-screen mx-auto  max-w-screen-xl font-sans md:px-20 md:py-20 lg:px-24 lg:pt-12 lg:pb-10">
        <FixedInfo />
        <div id="content" className="lg:w-1/2 lg:ml-auto flex flex-col w-full">
          <AboutMe />
          <HappinessForm />
          <ProjectList />
          <div className="opacity-80 py-10 md:pt-24 md:pb-0 lg:pt-24">
            <p>
              Partly designed in
              <Link href="https://www.figma.com/" className="font-bold">
                {" "}
                Figma
              </Link>{" "}
              and partly on paper. Coded in
              <Link href="https://code.visualstudio.com/" className="font-bold">
                {" "}
                Visual Studio Code
              </Link>
              . Built with
              <Link href="https://nextjs.org/" className="font-bold">
                {" "}
                Next.js
              </Link>{" "}
              and
              <Link href="https://tailwindcss.com/" className="font-bold">
                {" "}
                Tailwind CSS
              </Link>
              , deployed with
              <Link href="https://vercel.com/" className="font-bold">
                {" "}
                Vercel
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
