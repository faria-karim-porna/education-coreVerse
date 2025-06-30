import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

export function CompanyTimeline() {
  const milestones = [
    {
      year: '2019',
      title: 'CoreVerse Founded',
      description: 'Started with a vision to revolutionize STEM education through technology'
    },
    {
      year: '2020',
      title: 'First Virtual Labs',
      description: 'Launched our first physics and chemistry simulation platforms'
    },
    {
      year: '2021',
      title: 'Global Expansion',
      description: 'Reached 50 countries and partnered with major universities'
    },
    {
      year: '2022',
      title: 'AI Integration',
      description: 'Introduced personalized learning paths powered by machine learning'
    },
    {
      year: '2023',
      title: '1M Students',
      description: 'Celebrated reaching one million active students worldwide'
    },
    {
      year: '2024',
      title: 'Next Generation',
      description: 'Launched advanced AR/VR capabilities and collaborative spaces'
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
          <h2 className="display-4 fw-bold text-deep-red mb-4">Our Journey</h2>
          <p className="lead text-muted">
            Key milestones in our mission to transform education
          </p>
        </motion.div>

        <div className="row">
          <div className="col-lg-8 mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="d-flex align-items-start mb-5"
              >
                <div className="bg-primary-red rounded-circle d-flex align-items-center justify-content-center me-4 flex-shrink-0"
                     style={{ width: '60px', height: '60px' }}>
                  <Calendar className="text-white" size={24} />
                </div>
                <div>
                  <div className="badge bg-accent-red text-white mb-2">{milestone.year}</div>
                  <h4 className="fw-bold text-deep-red mb-2">{milestone.title}</h4>
                  <p className="text-muted mb-0">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}