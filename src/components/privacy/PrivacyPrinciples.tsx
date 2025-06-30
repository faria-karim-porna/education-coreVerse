import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Users, Lock } from 'lucide-react';
import { Card } from '../ui/Card';

export function PrivacyPrinciples() {
  const privacyPrinciples = [
    {
      icon: Shield,
      title: 'Data Protection',
      description: 'We use industry-standard encryption and security measures to protect your personal information.'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'We clearly explain what data we collect, how we use it, and who we share it with.'
    },
    {
      icon: Users,
      title: 'User Control',
      description: 'You have full control over your data with options to access, modify, or delete your information.'
    },
    {
      icon: Lock,
      title: 'Minimal Collection',
      description: 'We only collect data that is necessary to provide and improve our educational services.'
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
          <h2 className="display-4 fw-bold text-deep-red mb-4">Our Privacy Principles</h2>
          <p className="lead text-muted">
            These core principles guide how we handle your personal information
          </p>
        </motion.div>

        <div className="row g-4">
          {privacyPrinciples.map((principle, index) => (
            <div key={principle.title} className="col-md-6 col-lg-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center h-100">
                  <div className="card-body p-4">
                    <div className="bg-primary-red bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
                         style={{ width: '64px', height: '64px' }}>
                      <principle.icon className="text-primary-red" size={32} />
                    </div>
                    <h4 className="fw-bold text-deep-red mb-3">{principle.title}</h4>
                    <p className="text-muted">{principle.description}</p>
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