import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, MessageCircle, Globe, CheckCircle } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export function Integrations() {
  const integrations = [
    {
      name: 'Canvas LMS',
      description: 'Seamless integration with Canvas Learning Management System',
      status: 'Available',
      icon: BookOpen,
      features: ['Grade passback', 'SSO support', 'Roster sync']
    },
    {
      name: 'Google Classroom',
      description: 'Connect with Google Classroom for easy class management',
      status: 'Available',
      icon: Users,
      features: ['Assignment sync', 'Student roster', 'Grade export']
    },
    {
      name: 'Microsoft Teams',
      description: 'Integrate virtual labs with Teams meetings',
      status: 'Beta',
      icon: MessageCircle,
      features: ['Screen sharing', 'Collaboration', 'Meeting integration']
    },
    {
      name: 'Blackboard',
      description: 'Full integration with Blackboard Learn platform',
      status: 'Coming Soon',
      icon: Globe,
      features: ['Deep linking', 'Grade sync', 'Content integration']
    }
  ];

  return (
    <div>
      <h3 className="h4 fw-bold text-deep-red mb-4">Platform Integrations</h3>
      <div className="row g-4">
        {integrations.map((integration, index) => (
          <div key={integration.name} className="col-md-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-100">
                <div className="card-body p-4">
                  <div className="d-flex align-items-start justify-content-between mb-3">
                    <div className="d-flex align-items-center gap-3">
                      <div className="bg-accent-red bg-opacity-10 rounded-3 d-flex align-items-center justify-content-center"
                           style={{ width: '48px', height: '48px' }}>
                        <integration.icon className="text-accent-red" size={24} />
                      </div>
                      <div>
                        <h5 className="fw-bold text-deep-red mb-1">{integration.name}</h5>
                        <span className={`badge ${
                          integration.status === 'Available' ? 'bg-success' : 
                          integration.status === 'Beta' ? 'bg-warning' : 'bg-secondary'
                        } text-white`}>
                          {integration.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted mb-3">{integration.description}</p>
                  <div className="mb-3">
                    <h6 className="fw-semibold text-deep-red mb-2">Features:</h6>
                    {integration.features.map((feature, idx) => (
                      <div key={idx} className="d-flex align-items-center mb-1">
                        <CheckCircle className="text-success me-2" size={14} />
                        <small className="text-muted">{feature}</small>
                      </div>
                    ))}
                  </div>
                  <Button size="sm" className="w-100" disabled={integration.status === 'Coming Soon'}>
                    {integration.status === 'Available' ? 'Setup Integration' : 
                     integration.status === 'Beta' ? 'Join Beta' : 'Coming Soon'}
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}