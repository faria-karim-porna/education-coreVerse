import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

interface PageHeroProps {
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  lastUpdated?: string;
}

export function PageHero({ title, subtitle, icon: Icon, lastUpdated }: PageHeroProps) {
  return (
    <section className="position-relative overflow-hidden bg-gradient-primary text-white py-5 hero-section-with-icon">
      <div className="container-lg py-5">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white bg-opacity-20 rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
                 style={{ width: '80px', height: '80px' }}>
              <Icon className="text-white" size={40} />
            </div>
            <h1 className="display-3 fw-bold mb-4">{title}</h1>
            <p className="lead mb-4 mx-auto" style={{ maxWidth: '600px' }}>
              {subtitle}
            </p>
            {lastUpdated && (
              <div className="d-flex align-items-center justify-content-center gap-3 text-white-50">
                <Calendar size={16} />
                <span>Last updated: {lastUpdated}</span>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}