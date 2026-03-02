"use client";

import { useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";

const VenomModel = dynamic(
  () => import("@/components/models/VenomModel").then((m) => m.VenomModel),
  { ssr: false }
);

type ArrowState = "hidden" | "idle" | "shackle";

export function ScrollToTopButton() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [arrowState, setArrowState] = useState<ArrowState>("hidden");
  const [inViewport, setInViewport] = useState(false);
  const [shackleTrigger, setShackleTrigger] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInViewport(true);
          setTimeout(() => setArrowState("idle"), 100);
        } else {
          setInViewport(false);
          setTimeout(() => setArrowState("hidden"), 300);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    if (arrowState !== "idle") return;
    setArrowState("shackle");
    setShackleTrigger(true);
  };

  const containerTranslate: Record<ArrowState, string> = {
    hidden:  "translateY(24rem)",
    idle:    "translateY(0rem)",
    shackle: "translateY(0rem)",
  };

  const containerOpacity: Record<ArrowState, number> = {
    hidden:  0,
    idle:    1,
    shackle: 1,
  };

  const containerDuration: Record<ArrowState, string> = {
    hidden:  "0.6s",
    idle:    "0.5s",
    shackle: "0s",
  };

  const containerEasing: Record<ArrowState, string> = {
    hidden:  "cubic-bezier(0.34,1.56,0.64,1)",
    idle:    "cubic-bezier(0.34,1.56,0.64,1)",
    shackle: "linear",
  };

  return (
    <div
      ref={containerRef}
      className="flex-shrink-0 w-screen md:w-[32rem] h-full flex flex-col items-center justify-end pb-8"
      style={{
        backgroundImage: "url(/images/street.webp)",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
    >
      <div
        className="w-full relative"
        style={{
          height: "32rem",
          opacity: containerOpacity[arrowState],
          transform: containerTranslate[arrowState],
          transition: `transform ${containerDuration[arrowState]} ${containerEasing[arrowState]}, opacity ${containerDuration[arrowState]} ease`,
        }}
      >
        <VenomModel
          playShackle={shackleTrigger}
          inViewport={inViewport}
          onClickMesh={handleClick}
          onShackleDone={() => {
            setShackleTrigger(false);
            setArrowState("idle");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
      </div>

      <span
        className="text-3xl font-mono font-bold italic tracking-[0.25em] uppercase text-white hover:text-red-800 transition-colors duration-300 mt-2 cursor-pointer"
        onClick={handleClick}
        role="button"
        aria-label="Scroll to top"
      >
        Back to top
      </span>
    </div>
  );
}
