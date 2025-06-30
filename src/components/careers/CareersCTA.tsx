import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen } from 'lucide-react';
import { Button } from '../ui/Button';

interface CareersCTAProps {
  onNavigate: (view: string) => void;
}

export function CareersCTA({ onNavigate }: CareersCTAProps) {
  return (
    <section className="py-5 bg-gradient-secondary text-white">
      <div className="container-lg text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="display-4 fw-bold mb-4">Ready to Make an Impact?</h2>
          <p className="lead mb-5 opacity-75">
            Don't see the perfect role? We're always looking for talented individuals 
            who share our passion for education.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <Button variant="secondary" size="lg" className="bg-white text-primary-red border-white" onClick={() => onNavigate('contact')}>
              <Users size={20} className="me-2" />
              Get in Touch
            </Button>
            <Button variant="outline-secondary" size="lg" className="border-white text-white" onClick={() => onNavigate('about')}>
              <BookOpen size={20} className="me-2" />
              Learn More About Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}