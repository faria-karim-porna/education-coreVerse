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
        return 'text-primary-red';
      case 'secondary':
        return 'text-accent-red';
      case 'success':
        return 'text-success';
      case 'warning':
        return 'text-warning';
      case 'danger':
        return 'text-danger';
      default:
        return 'text-primary-red';
    }
  };

  const getIconBgClass = () => {
    switch (color) {
      case 'primary':
        return 'bg-primary-red';
      case 'secondary':
        return 'bg-accent-red';
      case 'success':
        return 'bg-success';
      case 'warning':
        return 'bg-warning';
      case 'danger':
        return 'bg-danger';
      default:
        return 'bg-primary-red';
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      className="stat-paper-card"
    >
      <div className="card-body p-4">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <p className="text-muted small fw-medium mb-1">{title}</p>
            <p className="h3 fw-bold text-deep-red mb-0">{value}</p>
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
          <div className={`icon-paper-container p-3 ${getIconBgClass()}`}>
            <Icon size={24} className="text-white icon" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}