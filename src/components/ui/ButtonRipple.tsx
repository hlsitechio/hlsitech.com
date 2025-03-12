import React, { useState, useEffect } from "react";

interface RippleProps {
  x: number;
  y: number;
  size: number;
}

interface ButtonRippleProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  color?: string;
}

export const ButtonRipple: React.FC<ButtonRippleProps> = ({
  children,
  className = "",
  onClick,
  disabled = false,
  color = "rgba(255, 255, 255, 0.7)",
}) => {
  const [ripples, setRipples] = useState<RippleProps[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (ripples.length > 0) {
        setRipples(ripples.slice(1));
      }
    }, 700); // Match the animation duration

    return () => clearTimeout(timer);
  }, [ripples]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;

    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(button.clientWidth, button.clientHeight);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    setRipples([...ripples, { x, y, size }]);

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      className={`relative overflow-hidden ${className}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {ripples.map((ripple, i) => (
        <span
          key={i}
          className="absolute rounded-full animate-ripple"
          style={{
            top: ripple.y,
            left: ripple.x,
            width: ripple.size,
            height: ripple.size,
            backgroundColor: color,
          }}
        />
      ))}
      {children}
    </button>
  );
};
