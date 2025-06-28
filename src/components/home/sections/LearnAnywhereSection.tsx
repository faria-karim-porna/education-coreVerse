import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Tablet, Monitor, Wifi } from 'lucide-react';
import { Card } from '../../ui/Card';

export function LearnAnywhereSection() {
  const devices = [
    {
      icon: Monitor,
      title: 'Desktop',
      description: 'Full-featured experience with advanced simulations'
    },
    {
      icon: Tablet,
      title: 'Tablet',
      description: 'Touch-optimized interface for interactive learning'
    },
    {
      icon: Smartphone,
      title: 'Mobile',
      description: 'Learn on-the-go with our mobile-friendly platform'
    },
    {
      icon: Wifi,
      title: 'Offline Mode',
      description: 'Download content for learning without internet'
    }
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container-lg">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="display-4 fw-bold text-deep-red mb-4">
                Learn Anywhere, Anytime
              </h2>
              <p className="lead text-muted mb-4">
                Access CoreVerse on any device, anywhere in the world. Our platform 
                adapts to your lifestyle and learning preferences.
              </p>
              <div className="row g-3">
                {devices.map((device, index) => (
                  <div key={device.title} className="col-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="d-flex align-items-center p-3 border rounded-3"
                    >
                      <div className="bg-primary-red bg-opacity-10 rounded-3 d-flex align-items-center justify-content-center me-3"
                           style={{ width: '40px', height: '40px' }}>
                        <device.icon className="text-primary-red" size={20} />
                      </div>
                      <div>
                        <h6 className="fw-semibold text-deep-red mb-1">{device.title}</h6>
                        <small className="text-muted">{device.description}</small>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-center"
            >
              <img
                src="https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2"
                alt="Learning on multiple devices"
                className="img-fluid rounded-4 shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}