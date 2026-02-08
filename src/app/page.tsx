"use client";

import AboutMe from "@/components/about/AboutMe";
import FixedInfo from "@/components/fixed-info/FixedInfo";
import HappinessForm from "@/components/happiness/HappinessForm";
import ProjectList from "@/components/projects/ProjectList";
import { QuotesSection } from "@/components/quotes/QuotesSection";
import { BouncingPattern } from "@/components/background/BouncingPattern";
import { AnimationToggle } from "@/components/background/AnimationToggle";
import { motion, useScroll } from "framer-motion";
import { ModeToggle } from "@/components/mode-toggle/ModeToggle";

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <main className="w-full min-h-screen relative">
      <BouncingPattern />
      <motion.div
        className="fixed top-0 left-0 right-0 h-[10px] bg-red-500 transform origin-left z-[9999]"
        style={{ scaleX: scrollYProgress }}
      />
      <header className="flex space-x-2 z-10 static mt-4 mb-2 ml-4 md:fixed md:top-5 md:left-5 md:mt-0 md:mb-0 md:ml-0 transform origin-left" role="banner">
        <ModeToggle />
        <AnimationToggle />
      </header>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4 min-h-screen mx-auto max-w-screen-xl font-sans p-4 md:px-20 md:py-20 lg:px-24 lg:pt-12 lg:pb-10">
        <aside className="lg:sticky lg:top-16 lg:self-start lg:h-[calc(100vh-8rem)]" role="complementary">
          <FixedInfo />
        </aside>
        
        <section className="flex flex-col w-full">
          <h1 className="sr-only">Szpilowski Lukasz – Frontend Engineer Portfolio</h1>
          
          <div className="">
            <AboutMe />
          </div>
          
          <div className="flex flex-col">
            <QuotesSection />
            <HappinessForm />
          </div>
        </section>
      </div>
      
      <div className="w-full relative bg-black dark:bg-white" style={{ marginTop: '3.2vh' }}>
        <div className="mx-auto max-w-screen-xl px-4 md:px-20 lg:px-24 py-12">
          <ProjectList />
        </div>
      </div>
    </main>
  );
}
