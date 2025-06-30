import React from 'react';
import { motion } from 'framer-motion';
import { Users, Globe, BookOpen, Heart, Award, Target } from 'lucide-react';
import { Card } from '../ui/Card';

export function ImpactStats() {
  const impactStats = [
    { number: '2M+', label: 'Students Reached', icon: Users },
    { number: '150+', label: 'Countries Served', icon: Globe },
    { number: '5,000+', label: 'Educational Institutions', icon: BookOpen },
    { number: '98%', label: 'Student Satisfaction', icon: Heart },
    { number: '500+', label: 'Lab Simulations', icon: Award },
    { number: '50+', label: 'Team Members', icon: Target }
  ];

  return (
    <section className="py-5 bg-light-bg">
      <div className="container-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-5"
        >
          <h2 className="display-4 fw-bold text-deep-red mb-4">Our Global Impact</h2>
          <p className="lead text-muted">
            Transforming education across the globe, one student at a time
          </p>
        </motion.div>

        <div className="row g-4">
          {impactStats.map((stat, index) => (
            <div key={stat.label} className="col-md-6 col-lg-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center">
                  <div className="card-body p-4">
                    <div className="bg-primary-red bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                         style={{ width: '64px', height: '64px' }}>
                      <stat.icon className="text-primary-red" size={32} />
                    </div>
                    <div className="display-4 fw-bold text-primary-red mb-2">{stat.number}</div>
                    <div className="text-muted fw-medium">{stat.label}</div>
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