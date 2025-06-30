import React from 'react';
import { motion } from 'framer-motion';
import { Users, Shield, CreditCard, Scale } from 'lucide-react';
import { Card } from '../ui/Card';

export function KeyTermsOverview() {
  const keyTerms = [
    {
      icon: Users,
      title: 'User Responsibilities',
      description: 'Guidelines for appropriate use of our educational platform and services'
    },
    {
      icon: Shield,
      title: 'Service Availability',
      description: 'Information about platform uptime, maintenance, and service limitations'
    },
    {
      icon: CreditCard,
      title: 'Payment Terms',
      description: 'Billing cycles, payment methods, refunds, and subscription management'
    },
    {
      icon: Scale,
      title: 'Intellectual Property',
      description: 'Rights and restrictions regarding content, software, and educational materials'
    }
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-5"
        >
          <h2 className="display-4 fw-bold text-deep-red mb-4">Key Terms Overview</h2>
          <p className="lead text-muted">
            Understanding the main aspects of our terms of service
          </p>
        </motion.div>

        <div className="row g-4">
          {keyTerms.map((term, index) => (
            <div key={term.title} className="col-md-6 col-lg-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center h-100">
                  <div className="card-body p-4">
                    <div className="bg-primary-red bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
                         style={{ width: '64px', height: '64px' }}>
                      <term.icon className="text-primary-red" size={32} />
                    </div>
                    <h4 className="fw-bold text-deep-red mb-3">{term.title}</h4>
                    <p className="text-muted">{term.description}</p>
                  </div>
                </Card>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}