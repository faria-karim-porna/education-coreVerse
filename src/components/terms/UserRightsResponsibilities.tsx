import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertTriangle, Ban } from 'lucide-react';
import { Card } from '../ui/Card';

export function UserRightsResponsibilities() {
  const prohibitedActivities = [
    'Sharing account credentials with unauthorized users',
    'Attempting to hack, disrupt, or damage the platform',
    'Uploading malicious software or harmful content',
    'Violating intellectual property rights',
    'Harassing or bullying other users',
    'Using the platform for commercial purposes without permission',
    'Creating fake accounts or impersonating others',
    'Attempting to circumvent security measures'
  ];

  const userRights = [
    'Access to all subscribed features and content',
    'Technical support during business hours',
    'Data portability and account management',
    'Privacy protection according to our Privacy Policy',
    'Fair use of platform resources',
    'Notification of significant service changes'
  ];

  return (
    <section className="py-5 bg-light-bg">
      <div className="container-lg">
        <div className="row g-5">
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Card className="h-100">
                <div className="card-body p-5">
                  <div className="d-flex align-items-center mb-4">
                    <div className="bg-success bg-opacity-10 rounded-3 d-flex align-items-center justify-content-center me-3"
                         style={{ width: '48px', height: '48px' }}>
                      <CheckCircle className="text-success" size={24} />
                    </div>
                    <h3 className="fw-bold text-deep-red mb-0">Your Rights</h3>
                  </div>
                  <p className="text-muted mb-4">
                    As a CoreVerse user, you are entitled to these rights and protections:
                  </p>
                  <div className="d-flex flex-column gap-3">
                    {userRights.map((right, index) => (
                      <div key={index} className="d-flex align-items-start">
                        <CheckCircle className="text-success me-2 mt-1 flex-shrink-0" size={16} />
                        <span className="text-muted">{right}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Card className="h-100">
                <div className="card-body p-5">
                  <div className="d-flex align-items-center mb-4">
                    <div className="bg-danger bg-opacity-10 rounded-3 d-flex align-items-center justify-content-center me-3"
                         style={{ width: '48px', height: '48px' }}>
                      <Ban className="text-danger" size={24} />
                    </div>
                    <h3 className="fw-bold text-deep-red mb-0">Prohibited Activities</h3>
                  </div>
                  <p className="text-muted mb-4">
                    The following activities are strictly prohibited on our platform:
                  </p>
                  <div className="d-flex flex-column gap-3">
                    {prohibitedActivities.map((activity, index) => (
                      <div key={index} className="d-flex align-items-start">
                        <AlertTriangle className="text-danger me-2 mt-1 flex-shrink-0" size={16} />
                        <span className="text-muted">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}