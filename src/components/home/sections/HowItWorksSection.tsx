import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, BookOpen, Award, TrendingUp } from 'lucide-react';
import { Card } from '../../ui/Card';

export function HowItWorksSection() {
  const steps = [
    {
      icon: UserPlus,
      title: 'Sign Up',
      description: 'Create your account and choose your learning path',
      step: '01'
    },
    {
      icon: BookOpen,
      title: 'Explore',
      description: 'Access virtual labs, tools, and interactive content',
      step: '02'
    },
    {
      icon: Award,
      title: 'Practice',
      description: 'Complete assignments and earn achievements',
      step: '03'
    },
    {
      icon: TrendingUp,
      title: 'Progress',
      description: 'Track your growth and master new skills',
      step: '04'
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
          <h2 className="display-4 fw-bold text-deep-red mb-4">
            How CoreVerse Works
          </h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Get started with CoreVerse in four simple steps and begin your 
            transformative learning journey today.
          </p>
        </motion.div>

        <div className="row g-4">
          {steps.map((step, index) => (
            <div key={step.title} className="col-md-6 col-lg-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="h-100"
              >
                <Card className="text-center h-100 position-relative">
                  <div className="card-body p-4">
                    <div className="position-absolute top-0 start-0 m-3">
                      <span className="badge bg-primary-red text-white fs-6 fw-bold">
                        {step.step}
                      </span>
                    </div>
                    <div className="bg-primary-red bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4 mt-3"
                         style={{ width: '64px', height: '64px' }}>
                      <step.icon className="text-primary-red" size={32} />
                    </div>
                    <h4 className="fw-bold text-deep-red mb-3">{step.title}</h4>
                    <p className="text-muted">{step.description}</p>
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