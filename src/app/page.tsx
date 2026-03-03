"use client";

import { useEffect, useRef, useState } from "react";
import AboutMe from "@/components/about/AboutMe";
import FixedInfo from "@/components/fixed-info/FixedInfo";
import { ProjectScroller } from "@/components/projects/ProjectScroller";
import { MobileProjectSlider } from "@/components/projects/MobileProjectSlider";
import { ExperienceSection } from "@/components/experience/ExperienceSection";
import { BouncingPattern } from "@/components/background/BouncingPattern";
import { useIsMobile } from "@/hooks/useIsMobile";
import { AnimationToggle } from "@/components/background/AnimationToggle";
import { ModeToggle } from "@/components/background/ModeToggle";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  const isMobile = useIsMobile();
  const [contactVisible, setContactVisible] = useState(true);
  const [inContact, setInContact] = useState(false);
  const [clicking, setClicking] = useState(false);
  const prevInContact = useRef(false);

  useEffect(() => {
    if (isMobile === null) return;

    const projects = document.getElementById("projects");
    const contact = document.getElementById("contact");
    if (!projects || !contact) return;

    const projectsObserver = new IntersectionObserver(
      ([entry]) => setContactVisible(!entry.isIntersecting),
      { threshold: 0.05 }
    );

    const contactObserver = new IntersectionObserver(
      ([entry]) => {
        const next = entry.isIntersecting;
        if (next !== prevInContact.current) {
          prevInContact.current = next;
          setInContact(next);
          setClicking(false);
        }
      },
      { threshold: 0.05 }
    );

    projectsObserver.observe(projects);
    contactObserver.observe(contact);
    return () => {
      projectsObserver.disconnect();
      contactObserver.disconnect();
    };
  }, [isMobile]);

  return (
    <>
      <BouncingPattern />
      <header className="flex items-center justify-between z-10 static mt-4 mb-2 mx-4 md:fixed md:top-5 md:left-5 md:right-5 md:mt-0 md:mb-0 md:mx-0">
        <div className="flex space-x-2">
          <ModeToggle />
          <AnimationToggle />
        </div>
        <a
          href={inContact ? "#about" : "#contact"}
          onClick={() => setClicking(true)}
          aria-label={inContact ? "Scroll to About section" : "Scroll to Contact section"}
          className={`btn-fill text-xs md:text-md font-bold uppercase tracking-widest px-5 py-2 rounded-md transition-all duration-300
            bg-foreground text-background hover:opacity-80
            ${contactVisible && !clicking ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}
          `}
        >
          {inContact ? "About" : "Contact"}
        </a>
      </header>
      <main className="w-full min-h-screen relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4 min-h-screen mx-auto max-w-screen-xl font-sans p-4 md:px-20 md:py-20 lg:px-24 lg:pt-12 lg:pb-10">
        <aside className="lg:sticky lg:top-16 lg:self-start lg:h-[calc(100vh-8rem)]" role="complementary">
          <FixedInfo />
        </aside>
        
        <section className="flex flex-col w-full">
          <h1 className="sr-only">Szpilowski Lukasz – Frontend Developer Portfolio</h1>
          
          <div id="about">
            <AboutMe />
          </div>

          <ExperienceSection />
        </section>
      </div>
      
      <div className="w-full relative bg-black dark:bg-white">
        {isMobile === null ? null : isMobile ? <MobileProjectSlider /> : <ProjectScroller />}
      </div>

      <Footer />
      </main>
    </>
  );
}
