import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'outline-primary' | 'outline-secondary';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon: Icon, 
  disabled = false, 
  onClick, 
  className = '',
  type = 'button'
}: ButtonProps) {
  const getVariantClass = () => {
    switch (variant) {
      case 'primary':
        return 'btn-paper-primary';
      case 'secondary':
        return 'btn-paper-secondary';
      case 'success':
        return 'btn-paper text-success';
      case 'warning':
        return 'btn-paper text-warning';
      case 'danger':
        return 'btn-paper text-danger';
      case 'outline-primary':
        return 'btn-paper border border-primary text-primary';
      case 'outline-secondary':
        return 'btn-paper border border-secondary text-secondary';
      default:
        return 'btn-paper-primary';
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case 'sm':
        return 'btn-sm px-3 py-2';
      case 'lg':
        return 'btn-lg px-4 py-3';
      default:
        return 'px-3 py-2';
    }
  };

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`btn ${getVariantClass()} ${getSizeClass()} d-inline-flex align-items-center gap-2 fw-medium ${className}`}
    >
      {Icon && <Icon size={16} className="icon" />}
      <span>{children}</span>
    </motion.button>
  );
}