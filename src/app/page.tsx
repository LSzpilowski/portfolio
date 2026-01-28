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
    <main className="w-full min-h-screen p-4">
      <motion.div
        className="fixed top-0 left-0 right-0 h-[10px] bg-red-500 transform origin-left z-[9999]"
        style={{ scaleX: scrollYProgress }}
      />
      <header className="static md:fixed top-5 left-5  transform origin-left z-10" role="banner">
        <ModeToggle />
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4 min-h-screen mx-auto max-w-screen-xl font-sans md:px-20 md:py-20 lg:px-24 lg:pt-12 lg:pb-10">
        <aside className="lg:sticky lg:top-16 lg:self-start lg:h-[calc(100vh-8rem)]" role="complementary">
          <FixedInfo />
        </aside>
        <section id="content" className="flex flex-col w-full">
          <h1 className="sr-only">Szpilowski Lukasz – Frontend Engineer Portfolio</h1>
          <AboutMe />
          <HappinessForm />
          <ProjectList />
        </section>
      </div>
    </main>
  );
}
