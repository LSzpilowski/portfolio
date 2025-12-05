import { useState } from "react";

export const useTilt = (isFlipped: boolean, isMobile: boolean) => {
  const [isHovering, setIsHovering] = useState(false);
  const [tiltStyle, setTiltStyle] = useState({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isFlipped || isMobile) return;
    
    setIsHovering(true);
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    const maxTiltX = 15;
    const maxTiltY = 15;
    
    const tiltY = x * maxTiltY;
    const tiltX = -y * maxTiltX;
    
    setTiltStyle({
      transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
      transition: 'transform 0.2s ease-out',
      filter: 'brightness(1.1) saturate(1.3)',
    });
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
      transition: 'transform 0.3s ease-out, filter 0.3s ease-out',
      filter: 'brightness(1) saturate(1)',
    });
  };

  return {
    isHovering,
    tiltStyle,
    handleMouseMove,
    handleMouseLeave,
  };
};
