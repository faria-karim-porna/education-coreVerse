import React from 'react';
import { motion } from 'framer-motion';
import { Users, Globe, BookOpen, TrendingUp } from 'lucide-react';
import { Card } from '../../ui/Card';

export function GlobalImpactSection() {
  const globalStats = [
    { number: '150+', label: 'Countries Served', icon: Globe },
    { number: '5,000+', label: 'Educational Institutions', icon: Users },
    { number: '2M+', label: 'Courses Completed', icon: BookOpen },
    { number: '98%', label: 'Completion Rate', icon: TrendingUp }
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-5"
        >
          <div className="badge bg-success text-white px-3 py-2 rounded-pill mb-3">
            <Globe className="me-1" size={16} />
            Global Impact
          </div>
          <h2 className="display-4 fw-bold text-deep-red mb-4">
            Transforming Education Worldwide
          </h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Our platform reaches learners across the globe, making quality education 
            accessible to everyone, everywhere.
          </p>
        </motion.div>

        <div className="row g-4">
          {globalStats.map((stat, index) => (
            <div key={stat.label} className="col-md-6 col-lg-3">
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