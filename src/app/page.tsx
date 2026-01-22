"use client";

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
        </div>
      </div>
    </div>
  );
}
