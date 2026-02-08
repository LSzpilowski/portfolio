"use client";


import React, { useEffect, useRef, useState } from "react";
import { quotes } from "./data";


export const QuotesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ref = sectionRef.current;
    if (!ref) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(ref);
    return () => {
      observer.disconnect();
    };
  }, []);


  const [quoteIndex, setQuoteIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    setQuoteIndex(0);
    setFade(true);
    const interval = setInterval(() => {
      setFade(false);
      timeout = setTimeout(() => {
        setQuoteIndex((prev) => (prev + 1) % quotes.length);
        setFade(true);
      }, 1000);
    }, 8000);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section
    id="happiness"
      ref={sectionRef}
      className={`w-full max-w-3xl mx-auto px-6 pt-24 transition-all duration-400 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="relative">
        <span className="absolute -top-6 left-0 text-6xl text-background-reversed opacity-30 font-serif select-none">
          &ldquo;
        </span>
        
        <p
          className={`text-2xl md:text-3xl text-center font-light leading-relaxed px-8 transition-opacity duration-700 ${fade ? "opacity-100" : "opacity-0"}`}
        >
          {quotes[quoteIndex].text}
        </p>
        
        <span className="absolute -bottom-6 right-0 text-6xl text-background-reversed opacity-30 font-serif select-none">
          &rdquo;
        </span>
      </div>
      
      <div className="mt-2 text-right pr-8">
        <p
          className={`text-lg text-muted-foreground transition-opacity duration-700 ${fade ? "opacity-100" : "opacity-0"}`}
        >
          <span className="mr-2">~</span>
          {quotes[quoteIndex].author}
        </p>
      </div>
    </section>
  );
};
