"use client";

import React, { useState, useEffect } from "react";
import { FlipCard } from "@/components/about/FlipCard";
import { useTilt } from "@/hooks/useTilt";

function AboutMe() {
  const [isMobile, setIsMobile] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [cardOrder, setCardOrder] = useState<number[]>([0, 1, 2]);
  const [activeTabIdx, setActiveTabIdx] = useState<number>(0);
  
  const { isHovering, tiltStyle, handleMouseMove, handleMouseLeave } = useTilt(isFlipped, isMobile);

  const swapCards = (clickedTabIdx: number) => {
    const clickedPosition = cardOrder.indexOf(clickedTabIdx);
    if (clickedPosition === 0) {
      setActiveTabIdx(clickedTabIdx);
      return;
    }
    
    const newOrder = [...cardOrder];
    [newOrder[0], newOrder[clickedPosition]] = [newOrder[clickedPosition], newOrder[0]];
    setCardOrder(newOrder);
    setActiveTabIdx(clickedTabIdx);
  };

  const handleFlipClick = () => {
    if (isFlipped) {
      setIsFlipped(false);
      setTimeout(() => {
        setCardOrder([0, 1, 2]);
        setActiveTabIdx(0);
      }, 600);
    } else {
      setIsFlipped(true);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (!aboutSection) return;

      const rect = aboutSection.getBoundingClientRect();
      const isVisible = rect.bottom > -100 && rect.top < window.innerHeight;

      if (!isVisible && isFlipped) {
        setIsFlipped(false);
        setTimeout(() => {
          setCardOrder([0, 1, 2]);
          setActiveTabIdx(0);
        }, 600);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isFlipped]);

  return (
    <section 
      id="about"
      className="flex flex-col pt-12 lg:pt-0 max-w-md mx-auto w-full transition-all duration-1000 ease-in-out"
      style={{
        marginBottom: isMobile && isFlipped ? '140px' : '0px'
      }}
      aria-labelledby="about-heading"
    >
      <h2 id="about-heading" className="sr-only">About Me</h2>
      <FlipCard
        isFlipped={isFlipped}
        isMobile={isMobile}
        isHovering={isHovering}
        tiltStyle={tiltStyle}
        cardOrder={cardOrder}
        activeTabIdx={activeTabIdx}
        onFlipClick={handleFlipClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onSwapCards={swapCards}
      />
    </section>
  );
}

export default AboutMe;
