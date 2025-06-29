import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Tablet, Monitor, Wifi, Clock, MapPin, Cloud, Zap } from 'lucide-react';
import { Card } from '../../ui/Card';

export function LearnAnywhereSection() {
  const devices = [
    {
      icon: Monitor,
      title: 'Desktop',
      description: 'Full-featured experience with advanced simulations',
      color: 'bg-primary-red'
    },
    {
      icon: Tablet,
      title: 'Tablet',
      description: 'Touch-optimized interface for interactive learning',
      color: 'bg-accent-red'
    },
    {
      icon: Smartphone,
      title: 'Mobile',
      description: 'Learn on-the-go with our mobile-friendly platform',
      color: 'bg-success'
    },
    {
      icon: Wifi,
      title: 'Offline Mode',
      description: 'Download content for learning without internet',
      color: 'bg-info'
    }
  ];

  const features = [
    {
      icon: Clock,
      title: 'Flexible Schedule',
      description: 'Learn at your own pace, whenever works best for you'
    },
    {
      icon: MapPin,
      title: 'Location Freedom',
      description: 'Access your courses from anywhere in the world'
    },
    {
      icon: Cloud,
      title: 'Cloud Sync',
      description: 'Your progress syncs across all your devices automatically'
    },
    {
      icon: Zap,
      title: 'Instant Access',
      description: 'No downloads or installations required to get started'
    }
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container-lg">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="badge bg-info text-white px-3 py-2 rounded-pill mb-3">
                <Clock className="me-1" size={16} />
                Flexible Learning
              </div>
              <h2 className="display-4 fw-bold text-deep-red mb-4">
                Learn Anywhere, Anytime
              </h2>
              <p className="lead text-muted mb-4">
                Access CoreVerse on any device, anywhere in the world. Our platform 
                adapts to your lifestyle and learning preferences.
              </p>
              
              <div className="d-flex flex-column gap-4 mb-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="d-flex align-items-start"
                  >
                    <div className="bg-primary-red bg-opacity-10 rounded-3 d-flex align-items-center justify-content-center me-3 flex-shrink-0"
                         style={{ width: '48px', height: '48px' }}>
                      <feature.icon className="text-primary-red" size={24} />
                    </div>
                    <div>
                      <h5 className="fw-semibold text-deep-red mb-1">{feature.title}</h5>
                      <p className="text-muted mb-0">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <div className="col-lg-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="position-relative">
                <img
                  src="https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2"
                  alt="Learning on multiple devices"
                  className="img-fluid rounded-4 shadow-lg"
                />
                
                <div className="position-absolute" style={{ top: '-20px', right: '-20px', zIndex: 2 }}>
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="bg-white rounded-4 shadow-lg p-3"
                  >
                    <div className="d-flex align-items-center gap-2">
                      <div className="bg-success rounded-circle p-2">
                        <Zap className="text-white" size={16} />
                      </div>
                      <div>
                        <h6 className="fw-bold text-deep-red mb-0" style={{ fontSize: '0.8rem' }}>Always Available</h6>
                        <p className="text-muted mb-0" style={{ fontSize: '0.7rem' }}>24/7 Learning</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                <div className="position-absolute" style={{ bottom: '-20px', left: '-20px', zIndex: 2 }}>
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 4, delay: 1 }}
                    className="bg-white rounded-4 shadow-lg p-3"
                  >
                    <div className="d-flex align-items-center gap-2">
                      <div className="bg-primary-red rounded-circle p-2">
                        <MapPin className="text-white" size={16} />
                      </div>
                      <div>
                        <h6 className="fw-bold text-deep-red mb-0" style={{ fontSize: '0.8rem' }}>Global Access</h6>
                        <p className="text-muted mb-0" style={{ fontSize: '0.7rem' }}>Learn from anywhere</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
              
              <div className="row g-3 mt-4">
                {devices.map((device, index) => (
                  <div key={device.title} className="col-6 col-md-3">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      <Card hover className="h-100 text-center">
                        <div className="card-body p-3">
                          <div className={`${device.color} rounded-circle d-inline-flex align-items-center justify-content-center mb-3`}
                               style={{ width: '48px', height: '48px' }}>
                            <device.icon className="text-white" size={24} />
                          </div>
                          <h6 className="fw-semibold text-deep-red mb-1">{device.title}</h6>
                          <p className="text-muted small mb-0">{device.description}</p>
                        </div>
                      </Card>
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}