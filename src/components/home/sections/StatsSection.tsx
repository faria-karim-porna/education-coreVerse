import React from 'react';
import { motion } from 'framer-motion';

export function StatsSection() {
  const stats = [
    { number: '50K+', label: 'Active Students' },
    { number: '2K+', label: 'Educators' },
    { number: '100+', label: 'Lab Simulations' },
    { number: '95%', label: 'Success Rate' }
  ];

  return (
    <section className="py-5 bg-white position-relative" style={{ zIndex: 2 }}>
      <div className="container-lg">
        <div className="row g-4">
          {stats.map((stat, index) => (
            <div key={stat.label} className="col-6 col-lg-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="display-4 fw-bold text-primary-red mb-2">{stat.number}</div>
                <div className="text-muted">{stat.label}</div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}