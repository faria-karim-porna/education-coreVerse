import React from 'react';
import { motion } from 'framer-motion';
import { Heart, DollarSign, Clock, BookOpen, Globe, Users } from 'lucide-react';
import { Card } from '../ui/Card';

export function BenefitsSection() {
  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance plus wellness programs'
    },
    {
      icon: DollarSign,
      title: 'Competitive Compensation',
      description: 'Market-leading salaries, equity packages, and performance bonuses'
    },
    {
      icon: Clock,
      title: 'Flexible Schedule',
      description: 'Work-life balance with flexible hours and unlimited PTO'
    },
    {
      icon: BookOpen,
      title: 'Learning & Development',
      description: '$3,000 annual learning budget and conference attendance'
    },
    {
      icon: Globe,
      title: 'Remote-First Culture',
      description: 'Work from anywhere with quarterly team meetups'
    },
    {
      icon: Users,
      title: 'Inclusive Environment',
      description: 'Diverse, welcoming workplace with employee resource groups'
    }
  ];

  return (
    <section className="py-5 bg-light-bg">
      <div className="container-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-5"
        >
          <h2 className="display-4 fw-bold text-deep-red mb-4">Why Work With Us?</h2>
          <p className="lead text-muted">
            We offer comprehensive benefits and a supportive work environment
          </p>
        </motion.div>

        <div className="row g-4">
          {benefits.map((benefit, index) => (
            <div key={benefit.title} className="col-md-6 col-lg-4">
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
                        <benefit.icon className="text-accent-red" size={24} />
                      </div>
                      <div>
                        <h5 className="fw-bold text-deep-red mb-2">{benefit.title}</h5>
                        <p className="text-muted mb-0">{benefit.description}</p>
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