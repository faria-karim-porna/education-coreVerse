import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export function Card({ children, className = '', hover = false, onClick }: CardProps) {
  const Component = onClick ? motion.button : motion.div;
  
  return (
    <Component
      whileHover={hover ? { scale: 1.02, y: -5 } : undefined}
      whileTap={onClick ? { scale: 0.98 } : undefined}
      onClick={onClick}
      className={`card paper-cutout border-0 ${hover ? 'card-hover' : ''} ${className}`}
      style={{ 
        cursor: onClick ? 'pointer' : 'default',
        borderRadius: '1.5rem',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)'
      }}
    >
      {children}
    </Component>
  );
}