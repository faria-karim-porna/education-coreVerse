import React from 'react';
import { motion } from 'framer-motion';

export function NotFoundContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-5"
    >
      <div className="display-1 fw-bold text-primary-red mb-4">404</div>
      <h1 className="h2 fw-bold text-deep-red mb-3">Page Not Found</h1>
      <p className="text-muted mb-5">
        The page you're looking for doesn't exist or has been moved.
      </p>
    </motion.div>
  );
}