import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';
import { Card } from '../ui/Card';

export function MissionVisionValues() {
  return (
    <section className="py-5 bg-white">
      <div className="container-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-5"
        >
          <h2 className="display-4 fw-bold text-deep-red mb-4">Our Foundation</h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Built on strong principles that guide everything we do
          </p>
        </motion.div>

        <div className="row g-4">
          <div className="col-lg-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-100 text-center">
                <div className="card-body p-5">
                  <div className="bg-primary-red rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
                       style={{ width: '80px', height: '80px' }}>
                    <Target className="text-white" size={40} />
                  </div>
                  <h3 className="h4 fw-bold text-deep-red mb-3">Our Mission</h3>
                  <p className="text-muted lh-base">
                    To democratize quality STEM education by providing innovative, 
                    interactive learning experiences that inspire and empower students 
                    to achieve their full potential.
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>

          <div className="col-lg-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="h-100 text-center">
                <div className="card-body p-5">
                  <div className="bg-accent-red rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
                       style={{ width: '80px', height: '80px' }}>
                    <Eye className="text-white" size={40} />
                  </div>
                  <h3 className="h4 fw-bold text-deep-red mb-3">Our Vision</h3>
                  <p className="text-muted lh-base">
                    A world where every student has access to world-class STEM education, 
                    regardless of their location or background, fostering the next 
                    generation of innovators and problem-solvers.
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>

          <div className="col-lg-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="h-100 text-center">
                <div className="card-body p-5">
                  <div className="bg-success rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
                       style={{ width: '80px', height: '80px' }}>
                    <Heart className="text-white" size={40} />
                  </div>
                  <h3 className="h4 fw-bold text-deep-red mb-3">Our Values</h3>
                  <p className="text-muted lh-base">
                    Innovation, accessibility, excellence, and student-centricity 
                    drive our commitment to creating meaningful educational 
                    experiences that make a lasting impact.
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}