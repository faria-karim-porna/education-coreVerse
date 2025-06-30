import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, FileText, Users, Video } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

interface SupportOptionsProps {
  onNavigate: (view: string) => void;
}

export function SupportOptions({ onNavigate }: SupportOptionsProps) {
  const supportOptions = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: 'Mon-Fri, 8AM-8PM EST',
      action: 'Start Chat',
      color: 'bg-primary-red'
    },
    {
      icon: FileText,
      title: 'Submit Ticket',
      description: 'Send us a detailed support request',
      availability: '24/7 Response',
      action: 'Create Ticket',
      color: 'bg-accent-red'
    },
    {
      icon: Users,
      title: 'Community Forum',
      description: 'Connect with other users and experts',
      availability: 'Always Active',
      action: 'Join Forum',
      color: 'bg-success'
    },
    {
      icon: Video,
      title: 'Video Call',
      description: 'Schedule a one-on-one support session',
      availability: 'By Appointment',
      action: 'Schedule Call',
      color: 'bg-info'
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
          <h2 className="display-4 fw-bold text-deep-red mb-4">Get Support</h2>
          <p className="lead text-muted">
            Choose the support option that works best for you
          </p>
        </motion.div>

        <div className="row g-4">
          {supportOptions.map((option, index) => (
            <div key={option.title} className="col-md-6 col-lg-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover className="text-center h-100">
                  <div className="card-body p-4">
                    <div className={`${option.color} rounded-circle d-inline-flex align-items-center justify-content-center mb-4`}
                         style={{ width: '64px', height: '64px' }}>
                      <option.icon className="text-white" size={32} />
                    </div>
                    <h4 className="fw-bold text-deep-red mb-2">{option.title}</h4>
                    <p className="text-muted mb-3">{option.description}</p>
                    <small className="text-muted d-block mb-3">{option.availability}</small>
                    <Button size="sm" className="w-100" onClick={() => onNavigate('contact')}>
                      {option.action}
                    </Button>
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