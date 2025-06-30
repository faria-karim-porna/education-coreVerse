import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Beaker, Users, Calculator, Clock, ArrowRight } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export function QuickStartGuides() {
  const quickStartGuides = [
    {
      title: 'Platform Overview',
      description: 'Get familiar with CoreVerse interface and navigation',
      duration: '5 min read',
      difficulty: 'Beginner',
      icon: BookOpen
    },
    {
      title: 'First Virtual Lab',
      description: 'Run your first physics simulation in minutes',
      duration: '10 min read',
      difficulty: 'Beginner',
      icon: Beaker
    },
    {
      title: 'Creating Classes',
      description: 'Set up your first virtual classroom',
      duration: '8 min read',
      difficulty: 'Intermediate',
      icon: Users
    },
    {
      title: 'Using Scientific Tools',
      description: 'Master the calculator suite and analysis tools',
      duration: '12 min read',
      difficulty: 'Intermediate',
      icon: Calculator
    }
  ];

  return (
    <div>
      <h3 className="h4 fw-bold text-deep-red mb-4">Quick Start Guides</h3>
      <div className="row g-4">
        {quickStartGuides.map((guide, index) => (
          <div key={guide.title} className="col-md-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover className="h-100">
                <div className="card-body p-4">
                  <div className="d-flex align-items-start mb-3">
                    <div className="bg-primary-red bg-opacity-10 rounded-3 d-flex align-items-center justify-content-center me-3"
                         style={{ width: '48px', height: '48px' }}>
                      <guide.icon className="text-primary-red" size={24} />
                    </div>
                    <div className="flex-fill">
                      <h5 className="fw-bold text-deep-red mb-1">{guide.title}</h5>
                      <p className="text-muted small mb-2">{guide.description}</p>
                      <div className="d-flex align-items-center gap-3 small text-muted">
                        <span className="d-flex align-items-center gap-1">
                          <Clock size={12} />
                          {guide.duration}
                        </span>
                        <span className={`badge ${
                          guide.difficulty === 'Beginner' ? 'bg-success' : 
                          guide.difficulty === 'Intermediate' ? 'bg-warning' : 'bg-danger'
                        } text-white`}>
                          {guide.difficulty}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Button size="sm" className="w-100">
                    Start Guide
                    <ArrowRight size={14} className="ms-1" />
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