import React from 'react';
import { motion } from 'framer-motion';

export function CommunityStats() {
  return (
    <section className="py-4 bg-white border-bottom">
      <div className="container-lg">
        <div className="row g-4 text-center">
          <div className="col-6 col-lg-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              <div className="display-6 fw-bold text-primary-red mb-1">15K+</div>
              <div className="text-muted small">Community Members</div>
            </motion.div>
          </div>
          <div className="col-6 col-lg-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="display-6 fw-bold text-primary-red mb-1">2.3K</div>
              <div className="text-muted small">Active Discussions</div>
            </motion.div>
          </div>
          <div className="col-6 col-lg-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="display-6 fw-bold text-primary-red mb-1">45K</div>
              <div className="text-muted small">Posts & Replies</div>
            </motion.div>
          </div>
          <div className="col-6 col-lg-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="display-6 fw-bold text-primary-red mb-1">98%</div>
              <div className="text-muted small">Questions Answered</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}