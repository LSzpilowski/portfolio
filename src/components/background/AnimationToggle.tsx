"use client";

import * as React from "react";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AnimationToggle() {
  const [isAnimationOn, setIsAnimationOn] = React.useState(true);

  React.useEffect(() => {
    const saved = localStorage.getItem("animation-preference");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    const shouldEnable = saved === "on" || (saved !== "off" && !prefersReducedMotion);
    
    setIsAnimationOn(shouldEnable);
    document.documentElement.setAttribute("data-animation", shouldEnable ? "on" : "off");
  }, []);

  const toggleAnimation = () => {
    const newValue = !isAnimationOn;
    setIsAnimationOn(newValue);
    const preference = newValue ? "on" : "off";
    localStorage.setItem("animation-preference", preference);
    document.documentElement.setAttribute("data-animation", preference);
  };

  return (
    <Button variant="outline" size="icon" onClick={toggleAnimation} className="btn-fill transition-colors duration-300 hover:text-background">
      <Sparkles 
        className={`h-[1.2rem] w-[1.2rem] transition-all ${
          isAnimationOn ? "scale-100 opacity-100" : "scale-90 opacity-50"
        }`} 
      />
      <span className="sr-only">{isAnimationOn ? "Disable" : "Enable"} animation</span>
    </Button>
  );
}
