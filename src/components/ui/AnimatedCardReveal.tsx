import React, { useState, useEffect, ReactNode } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

interface AnimatedCardRevealProps {
  children: ReactNode;
  isDark?: boolean;
}

export const AnimatedCardReveal: React.FC<AnimatedCardRevealProps> = ({
  children,
  isDark = false,
}) => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // Show content immediately if user prefers reduced motion
    if (prefersReducedMotion) {
      setIsAnimating(false);
      setIsVisible(true);
      return;
    }

    // Start animation sequence
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    // End animation sequence
    const endTimer = setTimeout(() => {
      setIsAnimating(false);
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearTimeout(endTimer);
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <div className="relative">
      {/* Circuit pattern overlay */}
      {isAnimating && (
        <div
          className={`absolute inset-0 z-20 pointer-events-none overflow-hidden rounded-2xl ${isVisible ? "animate-circuitReveal" : "opacity-0"}`}
        >
          <div
            className={`absolute inset-0 ${isDark ? "bg-blue-900/20" : "bg-blue-100/40"}`}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full relative">
              {/* Horizontal lines */}
              <div className="absolute top-1/4 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-70" />
              <div className="absolute top-2/4 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-70" />
              <div className="absolute top-3/4 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-70" />

              {/* Vertical lines */}
              <div className="absolute top-0 bottom-0 left-1/4 w-[1px] bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-70" />
              <div className="absolute top-0 bottom-0 left-2/4 w-[1px] bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-70" />
              <div className="absolute top-0 bottom-0 left-3/4 w-[1px] bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-70" />

              {/* Circuit nodes */}
              <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
              <div className="absolute top-1/4 left-3/4 w-3 h-3 bg-blue-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
              <div className="absolute top-3/4 left-1/4 w-3 h-3 bg-blue-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
              <div className="absolute top-3/4 left-3/4 w-3 h-3 bg-blue-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
              <div className="absolute top-2/4 left-2/4 w-5 h-5 bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse shadow-glow" />
            </div>
          </div>

          {/* Scanline effect */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-x-0 h-10 bg-gradient-to-b from-blue-400/10 to-transparent animate-scanline" />
          </div>

          {/* Digital particles */}
          <div className="absolute inset-0">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-blue-300 rounded-full animate-pulse"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  opacity: Math.random() * 0.7 + 0.3,
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Glitch effect overlay */}
      {isAnimating && (
        <div
          className={`absolute inset-0 z-10 bg-gradient-to-br ${isDark ? "from-blue-900/30 to-indigo-900/30" : "from-blue-100/50 to-indigo-100/50"} rounded-2xl overflow-hidden animate-glitch opacity-70`}
        />
      )}

      {/* Content with fade-in animation */}
      <div
        className={`relative z-0 transition-all duration-500 ${isVisible ? "animate-circuitFadeIn" : "opacity-0"}`}
      >
        {children}
      </div>
    </div>
  );
};
