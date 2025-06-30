import React from 'react';
import { motion } from 'framer-motion';
import { Star, Heart, TrendingUp, Users } from 'lucide-react';
import { Card } from '../ui/Card';

export function CompanyValues() {
  const companyValues = [
    {
      icon: Star,
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do'
    },
    {
      icon: Heart,
      title: 'Empathy',
      description: 'We put ourselves in our users\' shoes and care deeply about their success'
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'We embrace challenges and continuously learn and improve'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work together to achieve more than we could alone'
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
          <h2 className="display-4 fw-bold text-deep-red mb-4">Our Values</h2>
          <p className="lead text-muted">
            The principles that guide everything we do at CoreVerse
          </p>
        </motion.div>

        <div className="row g-4">
          {companyValues.map((value, index) => (
            <div key={value.title} className="col-md-6 col-lg-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center h-100">
                  <div className="card-body p-4">
                    <div className="bg-primary-red bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
                         style={{ width: '64px', height: '64px' }}>
                      <value.icon className="text-primary-red" size={32} />
                    </div>
                    <h4 className="fw-bold text-deep-red mb-3">{value.title}</h4>
                    <p className="text-muted">{value.description}</p>
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