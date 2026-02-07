import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  highlight?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', highlight = false }) => {
  return (
    <div
      className={`
        bg-card border border-subtle rounded-lg p-8
        transition-all duration-300
        hover:border-white/10
        ${highlight ? 'ring-2 ring-accent ring-opacity-50' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};
