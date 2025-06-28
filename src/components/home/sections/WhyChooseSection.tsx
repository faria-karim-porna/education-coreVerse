import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Users, Zap, Globe, Heart } from 'lucide-react';
import { Card } from '../../ui/Card';

export function WhyChooseSection() {
  const reasons = [
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee'
    },
    {
      icon: Award,
      title: 'Award-Winning',
      description: 'Recognized by leading educational organizations worldwide'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: '24/7 support from education technology specialists'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance for seamless learning experience'
    },
    {
      icon: Globe,
      title: 'Global Community',
      description: 'Connect with learners and educators from around the world'
    },
    {
      icon: Heart,
      title: 'Student-Centered',
      description: 'Designed with student success and engagement in mind'
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
          <h2 className="display-4 fw-bold text-deep-red mb-4">
            Why Choose CoreVerse?
          </h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Join millions of learners who trust CoreVerse for their educational journey
          </p>
        </motion.div>

        <div className="row g-4">
          {reasons.map((reason, index) => (
            <div key={reason.title} className="col-md-6 col-lg-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="h-100"
              >
                <Card hover className="h-100">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-start">
                      <div className="bg-primary-red bg-opacity-10 rounded-3 d-flex align-items-center justify-content-center me-3 flex-shrink-0"
                           style={{ width: '48px', height: '48px' }}>
                        <reason.icon className="text-primary-red" size={24} />
                      </div>
                      <div>
                        <h5 className="fw-bold text-deep-red mb-2">{reason.title}</h5>
                        <p className="text-muted mb-0">{reason.description}</p>
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