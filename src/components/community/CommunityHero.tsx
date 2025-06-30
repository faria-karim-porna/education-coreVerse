import React from 'react';
import { motion } from 'framer-motion';
import { Plus, MessageCircle } from 'lucide-react';
import { Button } from '../ui/Button';

interface CommunityHeroProps {
  onNavigate: (view: string) => void;
}

export function CommunityHero({ onNavigate }: CommunityHeroProps) {
  return (
    <section className="position-relative overflow-hidden bg-gradient-primary text-white py-5">
      <div className="container-lg py-5">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="display-3 fw-bold mb-4">Community Forum</h1>
            <p className="lead mb-5 mx-auto" style={{ maxWidth: '600px' }}>
              Connect with educators, share knowledge, and collaborate with the 
              CoreVerse community to enhance STEM education worldwide.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <Button variant="secondary" size="lg" className="bg-white text-primary-red border-white">
                <Plus size={20} className="me-2" />
                Start Discussion
              </Button>
              <Button variant="outline-secondary" size="lg" className="border-white text-white" onClick={() => onNavigate('help-center')}>
                <MessageCircle size={20} className="me-2" />
                Get Help
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}