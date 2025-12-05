"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { socials, navigations } from "./data";

function FixedInfo() {
  const [activeSection, setActiveSection] = useState("About");

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "";

      for (const id of navigations) {
        const section = document.getElementById(id.toLowerCase());
        if (section) {
          const rect = section.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            currentSection = id;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full pt-8 lg:pt-0 lg:fixed lg:top-16 lg:bottom-4 lg:left-0 flex flex-col items-center lg:w-1/2 lg:justify-between lg:pb-12">
      <div className="flex flex-col">
        <div className="flex flex-col gap-3">
          <p className="text-5xl font-bold">Lukasz Szpilowski</p>
          <p className="text-xl font-bold">Freelance Frontend Developer</p>
          <div>
            <p>I build intuitive, engaging, </p>
            <p>and accessible digital experiences.</p>
          </div>
        </div>
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {navigations.map((navigation, index) => (
              <li key={index}>
                <Link
                  className={`group flex items-center py-3 ${
                    activeSection === navigation ? "null" : "null"
                  }`}
                  href={`#${navigation.toLowerCase()}`}
                >
                  <span
                    className={`nav-indicator mr-4 h-px bg-primary  transition-all ${
                      activeSection === navigation
                        ? "w-16 opacity-100"
                        : "w-8 group-hover:w-16 opacity-70 group-focus-visible:w-16 "
                    }     motion-reduce:transition-none`}
                  ></span>
                  <span
                    className={`nav-text text-xs font-bold uppercase tracking-widest ${
                      activeSection === navigation
                        ? "opacity-100"
                        : "opacity-70"
                    } `}
                  >
                    {navigation}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <ul className="ml-1 mt-12 flex items-center" aria-label="Social media">
        {socials.map((social, index) => (
          <li className="mr-5 text-xs shrink-0" key={index}>
            <Link
              className="block hover:text-slate-200"
              href={social.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${social.title} opens in a new tab`}
              title={social.title}
            >
              <span className="sr-only">{social.title}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox={social.viewBox}
                fill="currentColor"
                className={social.className}
                aria-hidden="true"
              >
                <path d={social.path}></path>
              </svg>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FixedInfo;
