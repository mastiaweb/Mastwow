import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  rotationFactor?: number;
}

const TiltCard: React.FC<TiltCardProps> = ({ children, className = '', rotationFactor = 15 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Motion values for high-performance animation (bypassing React state)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics
  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  // Transform mouse position to rotation
  // Note: RotateX comes from Y movement, RotateY comes from X movement
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [rotationFactor, -rotationFactor]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-rotationFactor, rotationFactor]);

  useEffect(() => {
    const checkMobile = () => {
      const isTouch = window.matchMedia("(pointer: coarse)").matches;
      setIsMobile(isTouch);
    };
    checkMobile();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate percentage (-0.5 to 0.5)
    const xPct = (e.clientX - rect.left) / width - 0.5;
    const yPct = (e.clientY - rect.top) / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`perspective-container ${className}`}
      onMouseMove={!isMobile ? handleMouseMove : undefined}
      onMouseLeave={!isMobile ? handleMouseLeave : undefined}
      style={{
        transformStyle: "preserve-3d",
        rotateX: isMobile ? 0 : rotateX,
        rotateY: isMobile ? 0 : rotateY,
      }}
    >
      <div 
        style={{ 
          transform: "translateZ(0px)", 
          transformStyle: "preserve-3d",
          backfaceVisibility: 'hidden',
          // Hardware acceleration hint
          willChange: "transform" 
        }}
        className="h-full w-full"
      >
        {children}
      </div>
    </motion.div>
  );
};

export default TiltCard;