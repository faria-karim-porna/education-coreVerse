import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';

interface PlatformAdvantageProps {
  feature: {
    icon: React.ComponentType<{ size?: number; className?: string }>;
    title: string;
    description: string;
  };
  index: number;
}

export function PlatformAdvantage({ feature, index }: PlatformAdvantageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="text-center h-100">
        <div className="card-body p-4">
          <div className="bg-primary-red bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
               style={{ width: '64px', height: '64px' }}>
            <feature.icon className="text-primary-red" size={32} />
          </div>
          <h4 className="fw-bold text-deep-red mb-3">{feature.title}</h4>
          <p className="text-muted">{feature.description}</p>
        </div>
      </Card>
    </motion.div>
  );
}