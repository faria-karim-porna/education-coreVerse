import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Card } from '../ui/Card';

export function DataCollection() {
  const dataTypes = [
    {
      category: 'Account Information',
      items: ['Name and email address', 'Profile picture', 'Educational institution', 'Role (student/teacher)'],
      purpose: 'To create and manage your account, provide personalized experiences'
    },
    {
      category: 'Educational Data',
      items: ['Course progress', 'Assignment submissions', 'Quiz results', 'Learning analytics'],
      purpose: 'To track progress, provide feedback, and improve learning outcomes'
    },
    {
      category: 'Usage Information',
      items: ['Platform interactions', 'Feature usage', 'Session duration', 'Device information'],
      purpose: 'To improve platform performance and user experience'
    },
    {
      category: 'Communication Data',
      items: ['Messages in forums', 'Support tickets', 'Feedback submissions'],
      purpose: 'To facilitate communication and provide customer support'
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
          <h2 className="display-4 fw-bold text-deep-red mb-4">What Data We Collect</h2>
          <p className="lead text-muted">
            We collect only the information necessary to provide our educational services
          </p>
        </motion.div>

        <div className="row g-4">
          {dataTypes.map((dataType, index) => (
            <div key={dataType.category} className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-100">
                  <div className="card-body p-4">
                    <h4 className="fw-bold text-deep-red mb-3">{dataType.category}</h4>
                    <div className="mb-3">
                      {dataType.items.map((item, idx) => (
                        <div key={idx} className="d-flex align-items-center mb-2">
                          <CheckCircle className="text-success me-2 flex-shrink-0" size={16} />
                          <span className="text-muted">{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="bg-light-bg rounded-3 p-3">
                      <h6 className="fw-semibold text-deep-red mb-2">Purpose:</h6>
                      <p className="text-muted small mb-0">{dataType.purpose}</p>
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