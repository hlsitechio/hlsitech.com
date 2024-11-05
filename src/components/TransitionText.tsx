import React from 'react';

interface TransitionTextProps {
  children: React.ReactNode;
  isTransitioning: boolean;
  direction: 'up' | 'down';
  className?: string;
  delay?: number;
}

export const TransitionText: React.FC<TransitionTextProps> = ({
  children,
  isTransitioning,
  direction,
  className = '',
  delay = 0
}) => {
  return (
    <span
      style={{
        transitionDelay: `${delay}ms`
      }}
      className={`inline-block transition-all duration-400 ease-in-out ${className} ${
        isTransitioning
          ? `opacity-0 blur-sm transform ${
              direction === 'up' 
                ? '-translate-y-3 scale-95' 
                : 'translate-y-3 scale-95'
            }`
          : 'opacity-100 blur-0 transform translate-y-0 scale-100'
      }`}
    >
      {children}
    </span>
  );
};