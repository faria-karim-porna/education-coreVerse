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
        return 'btn-custom-primary';
      case 'secondary':
        return 'btn-custom-secondary';
      case 'success':
        return 'btn-success';
      case 'warning':
        return 'btn-warning';
      case 'danger':
        return 'btn-danger';
      case 'outline-primary':
        return 'btn-outline-primary';
      case 'outline-secondary':
        return 'btn-outline-secondary';
      default:
        return 'btn-custom-primary';
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case 'sm':
        return 'btn-sm';
      case 'lg':
        return 'btn-lg';
      default:
        return '';
    }
  };

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.05, y: disabled ? 0 : -3 }}
      whileTap={{ scale: disabled ? 1 : 0.98, y: disabled ? 0 : -1 }}
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`btn ${getVariantClass()} ${getSizeClass()} d-inline-flex align-items-center gap-2 fw-medium ${className}`}
      style={{ 
        borderRadius: '1.5rem',
        boxShadow: disabled ? 'none' : '0 4px 10px rgba(0, 0, 0, 0.05)'
      }}
    >
      {Icon && <Icon size={16} />}
      <span>{children}</span>
    </motion.button>
  );
}