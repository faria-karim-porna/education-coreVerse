import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon: LucideIcon;
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
}

export function StatCard({ title, value, change, icon: Icon, color = 'primary' }: StatCardProps) {
  const getColorClass = () => {
    switch (color) {
      case 'primary':
        return 'bg-light-bg text-primary-purple';
      case 'secondary':
        return 'bg-card-bg text-accent-purple';
      case 'success':
        return 'bg-success bg-opacity-10 text-success';
      case 'warning':
        return 'bg-warning bg-opacity-10 text-warning';
      case 'danger':
        return 'bg-danger bg-opacity-10 text-danger';
      default:
        return 'bg-light-bg text-primary-purple';
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -5 }}
      className="card paper-cutout border-0 shadow-custom"
      style={{ borderRadius: '1.5rem' }}
    >
      <div className="card-body p-4">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <p className="text-muted small fw-medium mb-1">{title}</p>
            <p className="h3 fw-bold text-deep-purple mb-0">{value}</p>
            {change !== undefined && (
              <div className="d-flex align-items-center mt-2">
                {change >= 0 ? (
                  <TrendingUp className="text-success me-1" size={16} />
                ) : (
                  <TrendingDown className="text-danger me-1" size={16} />
                )}
                <span className={`small fw-medium ${
                  change >= 0 ? 'text-success' : 'text-danger'
                }`}>
                  {Math.abs(change)}%
                </span>
              </div>
            )}
          </div>
          <div className={`p-3 rounded-3 ${getColorClass()}`} style={{ boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)' }}>
            <Icon size={24} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}