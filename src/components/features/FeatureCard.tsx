import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

interface FeatureCardProps {
  feature: {
    id: string;
    category: string;
    title: string;
    description: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
    image: string;
    features: string[];
    color: string;
  };
  index: number;
  onNavigate: (view: string) => void;
}

export function FeatureCard({ feature, index, onNavigate }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="h-100"
    >
      <Card hover className="h-100">
        <div className="row g-0 h-100">
          <div className="col-md-5">
            <div className="position-relative h-100">
              <img
                src={feature.image}
                alt={feature.title}
                className="img-fluid h-100 object-fit-cover rounded-start"
              />
              <div className={`position-absolute top-0 start-0 m-3 ${feature.color} rounded-3 d-flex align-items-center justify-content-center`}
                   style={{ width: '48px', height: '48px' }}>
                <feature.icon className="text-white" size={24} />
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="card-body p-4 h-100 d-flex flex-column">
              <h4 className="fw-bold text-deep-red mb-3">{feature.title}</h4>
              <p className="text-muted mb-4 flex-fill">{feature.description}</p>
              <div className="mb-4">
                {feature.features.map((item, idx) => (
                  <div key={idx} className="d-flex align-items-center mb-2">
                    <CheckCircle className="text-success me-2 flex-shrink-0" size={16} />
                    <small className="text-muted">{item}</small>
                  </div>
                ))}
              </div>
              <Button size="sm" className="align-self-start" onClick={() => onNavigate('dashboard')}>
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}