import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

interface CTASectionProps {
  onNavigate: (view: string) => void;
}

export function CTASection({ onNavigate }: CTASectionProps) {
  return (
    <section className="py-5 bg-gradient-secondary text-white">
      <div className="container-lg text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="display-4 fw-bold mb-4">Ready to Experience CoreVerse?</h2>
          <p className="lead mb-5 opacity-75">
            Start your free trial today and discover how our features can 
            transform your educational experience.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <Button variant="secondary" size="lg" className="bg-white text-primary-red border-white" onClick={() => onNavigate('dashboard')}>
              Start Free Trial
            </Button>
            <Button variant="outline-secondary" size="lg" className="border-white text-white" onClick={() => onNavigate('contact')}>
              Schedule Demo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}