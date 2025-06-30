import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Settings, AlertTriangle, Database, Shield, Lock } from 'lucide-react';
import { Card } from '../ui/Card';

export function UserRights() {
  const userRights = [
    {
      icon: Eye,
      title: 'Right to Access',
      description: 'Request a copy of all personal data we have about you'
    },
    {
      icon: Settings,
      title: 'Right to Rectification',
      description: 'Correct any inaccurate or incomplete personal data'
    },
    {
      icon: AlertTriangle,
      title: 'Right to Erasure',
      description: 'Request deletion of your personal data under certain conditions'
    },
    {
      icon: Database,
      title: 'Right to Portability',
      description: 'Receive your data in a structured, machine-readable format'
    },
    {
      icon: Shield,
      title: 'Right to Object',
      description: 'Object to processing of your personal data for certain purposes'
    },
    {
      icon: Lock,
      title: 'Right to Restrict',
      description: 'Request restriction of processing under certain circumstances'
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
          <h2 className="display-4 fw-bold text-deep-red mb-4">Your Privacy Rights</h2>
          <p className="lead text-muted">
            You have comprehensive rights regarding your personal data
          </p>
        </motion.div>

        <div className="row g-4">
          {userRights.map((right, index) => (
            <div key={right.title} className="col-md-6 col-lg-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover className="h-100">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-start">
                      <div className="bg-accent-red bg-opacity-10 rounded-3 d-flex align-items-center justify-content-center me-3 flex-shrink-0"
                           style={{ width: '48px', height: '48px' }}>
                        <right.icon className="text-accent-red" size={24} />
                      </div>
                      <div>
                        <h5 className="fw-bold text-deep-red mb-2">{right.title}</h5>
                        <p className="text-muted mb-0">{right.description}</p>
                      </div>
                    </div>
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