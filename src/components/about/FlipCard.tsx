import React from "react";
import { CardContent } from "./CardContent";
import { tabs } from "./data";

interface FlipCardProps {
  isFlipped: boolean;
  isMobile: boolean;
  isHovering: boolean;
  tiltStyle: React.CSSProperties;
  cardOrder: number[];
  activeTabIdx: number;
  onFlipClick: () => void;
  onMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave: () => void;
  onSwapCards: (tabIdx: number) => void;
}

export const FlipCard = ({
  isFlipped,
  isMobile,
  isHovering,
  tiltStyle,
  cardOrder,
  activeTabIdx,
  onFlipClick,
  onMouseMove,
  onMouseLeave,
  onSwapCards,
}: FlipCardProps) => {
  return (
    <div
      className={`flip-card cursor-pointer w-full relative ${isFlipped ? 'flipped-container' : ''}`}
      onClick={onFlipClick}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ 
        aspectRatio: "2.5 / 3.5",
        ...(!isFlipped ? tiltStyle : {}),
      }}
    >
      <div className={`flip-card-inner ${isFlipped ? "flipped" : ""}`}>
        <div 
          className="flip-card-front relative w-full h-full flex items-center justify-center rounded-lg hover:shadow-lg transition-all ease-in-out duration-300 border-2 border-primary/20 overflow-hidden [&:hover]:brightness-90 [&:hover]:saturate-[1.3] dark:[&:hover]:brightness-110"
          style={{
            backgroundColor: 'hsl(var(--secondary))',
          }}
        >
          <div className="absolute top-3 left-3 text-center z-10">
            <div 
              className={`text-4xl font-bold transition-all duration-700 ease-in-out ${isHovering ? 'text-primary dark:text-white' : ''}`}
              style={{ opacity: isHovering ? 1 : 0.4 }}
            >
              ?
            </div>
          </div>
          <div className="absolute bottom-3 right-3 text-center transform rotate-180 z-10">
            <div 
              className={`text-4xl font-bold transition-all duration-700 ease-in-out ${isHovering ? 'text-primary dark:text-white' : ''}`}
              style={{ opacity: isHovering ? 1 : 0.4 }}
            >
              ?
            </div>
          </div>
          <div className="text-center z-10">
            <div 
              className={`text-9xl font-bold transition-all duration-700 ease-in-out ${isHovering ? 'text-primary dark:text-white' : ''}`}
              style={{ opacity: isHovering ? 1 : 0.6 }}
            >
              ?
            </div>
          </div>
        </div>

        <div className="flip-card-back relative overflow-visible p-0">
          {cardOrder.map((tabIdx, stackPos) => {
            const tab = tabs[tabIdx];
            const isOnTop = stackPos === 0;
            const zIndex = 30 - stackPos;
            let rotation = isOnTop ? 0 : stackPos * 7;
            let offsetY = stackPos * -5;
            let offsetX = stackPos * -3;

            if (isMobile) {
              rotation = 0;
              offsetX = 0;

              const spread = 60;

              if (stackPos === 0) {
                offsetY = spread * 2;
              } else if (stackPos === 1) {
                offsetY = spread;
              } else if (stackPos === 2) {
                offsetY = 0;
              }
            }
  
            const currentPos = cardOrder.indexOf(tabIdx);              
            const delay = stackPos * 0.15;
            const reverseDelay = isFlipped ? delay : (2 - stackPos) * 0.15;

            return (
              <div
                key={`card-${tabIdx}-${stackPos}`}
                className="absolute inset-0 bg-secondary rounded-lg border-2 border-primary/20 p-8 overflow-hidden"
                style={{
                  zIndex: zIndex,
                  transform: isFlipped 
                    ? `translateX(${offsetX}px) translateY(${offsetY}px) rotateZ(${rotation}deg)` 
                    : `translateX(0px) translateY(0px) rotateZ(0deg) scale(1)`,
                  transformOrigin: "center bottom",
                  pointerEvents: isOnTop ? "auto" : "none",
                  opacity: isFlipped ? 1 : 1,
                  transition: 'transform 1000ms ease-in-out, opacity 1000ms ease-in-out',
                  transitionDelay: isFlipped ? `${reverseDelay}s` : `${Math.max(0, currentPos - 1) * 0.15}s`,
                }}
              >
                <div className={`absolute top-3 left-3 text-4xl font-bold ${isOnTop ? 'text-primary dark:text-white opacity-100' : 'opacity-40'}`}>?</div>
                <div className={`absolute bottom-3 right-3 text-4xl font-bold rotate-180 ${isOnTop ? 'text-primary dark:text-white opacity-100' : 'opacity-40'}`}>?</div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSwapCards(tabIdx);
                  }}
                  className={`absolute -right-12 -top-2 w-20 h-20 rounded-tr-3xl rounded-bl-2xl backdrop-blur-sm transition-all cursor-pointer ${
                    tabIdx === 0
                      ? "bg-gradient-to-b from-red-500/40 to-red-600/30 hover:from-red-500/60 hover:to-red-600/50 border-red-500/70"
                      : tabIdx === 1
                      ? "bg-gradient-to-b from-green-500/40 to-green-600/30 hover:from-green-500/60 hover:to-green-600/50 border-green-500/70"
                      : "bg-gradient-to-b from-blue-500/40 to-blue-600/30 hover:from-blue-500/60 hover:to-blue-600/50 border-blue-500/70"
                  } border-2`}
                  style={{
                    zIndex: 100 + stackPos,
                    pointerEvents: "auto",
                  }}
                  title={tab.title}
                >
                  <span className="text-xs font-bold opacity-80 flex items-center justify-center h-full">
                    {stackPos === 0 ? "📍" : `#${stackPos}`}
                  </span>
                </button>

                <CardContent 
                  activeTabIdx={activeTabIdx}
                  isOnTop={isOnTop}
                  tabIdx={tabIdx}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
