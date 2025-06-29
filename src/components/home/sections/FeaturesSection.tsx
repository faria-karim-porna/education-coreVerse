import React from 'react';
import { motion } from 'framer-motion';
import { 
  Beaker, 
  Calculator, 
  Users, 
  BarChart3, 
  Globe, 
  MessageCircle,
  Award
} from 'lucide-react';
import { Card } from '../../ui/Card';

interface FeaturesSectionProps {
  onNavigate: (view: string) => void;
}

export function FeaturesSection({ onNavigate }: FeaturesSectionProps) {
  const features = [
    {
      icon: Beaker,
      title: 'STEM Lab Simulators',
      description: 'Interactive physics, chemistry, and biology simulations for hands-on learning',
      color: 'bg-primary-purple'
    },
    {
      icon: Calculator,
      title: 'Scientific Tools',
      description: 'Advanced calculators, equation solvers, and plotting tools',
      color: 'bg-soft-pink'
    },
    {
      icon: Globe,
      title: 'Knowledge Explorer',
      description: 'Interactive globe, historical timelines, and career exploration',
      color: 'bg-success'
    },
    {
      icon: MessageCircle,
      title: 'Language Practice',
      description: 'Conversation simulators and communication skill builders',
      color: 'bg-warning'
    },
    {
      icon: Users,
      title: 'Virtual Classrooms',
      description: 'Live sessions, assignments, and collaborative learning spaces',
      color: 'bg-deep-purple'
    },
    {
      icon: Award,
      title: 'Progress Tracking',
      description: 'Comprehensive analytics and achievement systems',
      color: 'bg-primary-purple'
    }
  ];

  return (
    <section id="features" className="py-5 bg-light-bg position-relative">
      {/* Wavy divider at the top */}
      <div className="wavy-divider wavy-divider-top"></div>
      
      <div className="container-lg position-relative" style={{ zIndex: 5 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-5"
        >
          <h2 className="display-4 fw-bold text-deep-purple mb-4">
            Everything You Need to Excel
          </h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Comprehensive educational tools designed to enhance learning outcomes 
            for students and teaching effectiveness for educators.
          </p>
        </motion.div>

        <div className="row g-4">
          {features.map((feature, index) => (
            <div key={feature.title} className="col-md-6 col-lg-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="h-100"
              >
                <Card hover className="h-100 paper-cutout">
                  <div className="card-body p-4">
                    <div className={`${feature.color} rounded-4 d-inline-flex align-items-center justify-content-center mb-4 hanging-element`}
                         style={{ width: '64px', height: '64px', boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)' }}>
                      <feature.icon className="text-white" size={32} />
                    </div>
                    <h4 className="fw-bold text-deep-purple mb-3">{feature.title}</h4>
                    <p className="text-muted lh-base">{feature.description}</p>
                  </div>
                </Card>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Wavy divider at the bottom */}
      <div className="wavy-divider wavy-divider-bottom"></div>
    </section>
  );
}