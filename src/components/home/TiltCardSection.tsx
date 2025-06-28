import React from 'react';
import { motion } from 'framer-motion';
import { Beaker, Calculator, Globe, Users } from 'lucide-react';

export function TiltCardSection() {
  return (
    <section className="py-5 bg-light-bg">
      <div className="container-lg">
        <div className="d-flex justify-content-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="position-relative tilt-card-container"
          >
            <div className="card shadow-lg border-0 p-4 transform-rotate-3 hover-transform-rotate-0 transition-all">
              <div className="row g-3">
                <div className="col-6">
                  <div className="bg-light-bg p-3 rounded-3 text-center">
                    <Beaker className="text-primary-red mb-2" size={32} />
                    <h6 className="fw-semibold text-deep-red mb-0">Virtual Labs</h6>
                  </div>
                </div>
                <div className="col-6">
                  <div className="bg-card-bg p-3 rounded-3 text-center">
                    <Calculator className="text-accent-red mb-2" size={32} />
                    <h6 className="fw-semibold text-deep-red mb-0">Sci Tools</h6>
                  </div>
                </div>
                <div className="col-6">
                  <div className="bg-success bg-opacity-10 p-3 rounded-3 text-center">
                    <Globe className="text-success mb-2" size={32} />
                    <h6 className="fw-semibold text-deep-red mb-0">Explore</h6>
                  </div>
                </div>
                <div className="col-6">
                  <div className="bg-warning bg-opacity-10 p-3 rounded-3 text-center">
                    <Users className="text-warning mb-2" size={32} />
                    <h6 className="fw-semibold text-deep-red mb-0">Collaborate</h6>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}