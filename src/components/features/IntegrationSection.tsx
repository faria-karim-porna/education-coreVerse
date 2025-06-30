import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Button } from '../ui/Button';

interface IntegrationSectionProps {
  onNavigate: (view: string) => void;
}

export function IntegrationSection({ onNavigate }: IntegrationSectionProps) {
  return (
    <section className="py-5 bg-white">
      <div className="container-lg">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="display-4 fw-bold text-deep-red mb-4">Seamless Integration</h2>
              <p className="lead text-muted mb-4">
                CoreVerse integrates with your existing educational infrastructure, 
                making adoption smooth and efficient.
              </p>
              <div className="d-flex flex-column gap-3 mb-4">
                <div className="d-flex align-items-center">
                  <CheckCircle className="text-success me-3" size={20} />
                  <span>LMS Integration (Canvas, Blackboard, Moodle)</span>
                </div>
                <div className="d-flex align-items-center">
                  <CheckCircle className="text-success me-3" size={20} />
                  <span>Single Sign-On (SSO) Support</span>
                </div>
                <div className="d-flex align-items-center">
                  <CheckCircle className="text-success me-3" size={20} />
                  <span>Grade Passback Functionality</span>
                </div>
                <div className="d-flex align-items-center">
                  <CheckCircle className="text-success me-3" size={20} />
                  <span>API Access for Custom Integrations</span>
                </div>
              </div>
              <Button onClick={() => onNavigate('contact')}>
                View Integration Guide
              </Button>
            </motion.div>
          </div>
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-center"
            >
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2"
                alt="Integration"
                className="img-fluid rounded-4 shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}