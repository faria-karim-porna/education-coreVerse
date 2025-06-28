import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import { Card } from '../../ui/Card';
import { Button } from '../../ui/Button';

interface CareerPathwaysSectionProps {
  onNavigate: (view: string) => void;
}

export function CareerPathwaysSection({ onNavigate }: CareerPathwaysSectionProps) {
  const careerPaths = [
    {
      title: 'Research Scientist',
      description: 'Lead groundbreaking research in your field of expertise',
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      salary: '$85K - $150K',
      growth: '+15%',
      skills: ['Research Methods', 'Data Analysis', 'Scientific Writing', 'Lab Techniques']
    },
    {
      title: 'Software Engineer',
      description: 'Build innovative software solutions and applications',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      salary: '$95K - $180K',
      growth: '+22%',
      skills: ['Programming', 'Problem Solving', 'System Design', 'Collaboration']
    },
    {
      title: 'Healthcare Professional',
      description: 'Make a difference in people\'s lives through medical care',
      image: 'https://images.pexels.com/photos/2280568/pexels-photo-2280568.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      salary: '$75K - $200K',
      growth: '+7%',
      skills: ['Medical Knowledge', 'Patient Care', 'Communication', 'Critical Thinking']
    },
    {
      title: 'Business Analyst',
      description: 'Drive business decisions through data-driven insights',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      salary: '$70K - $130K',
      growth: '+11%',
      skills: ['Data Analysis', 'Business Strategy', 'Communication', 'Project Management']
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
          <div className="badge bg-warning text-dark px-3 py-2 rounded-pill mb-3">
            <TrendingUp className="me-1" size={16} />
            Career Pathways
          </div>
          <h2 className="display-4 fw-bold text-deep-red mb-4">
            Launch Your Dream Career
          </h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Explore high-demand career paths and understand the skills needed 
            to succeed in tomorrow's job market.
          </p>
        </motion.div>

        <div className="row g-4">
          {careerPaths.map((career, index) => (
            <div key={career.title} className="col-md-6 col-lg-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="h-100"
              >
                <Card hover className="h-100">
                  <img
                    src={career.image}
                    alt={career.title}
                    className="card-img-top object-fit-cover"
                    style={{ height: '200px' }}
                  />
                  <div className="card-body p-4">
                    <h4 className="fw-bold text-deep-red mb-2">{career.title}</h4>
                    <p className="text-muted small mb-3">{career.description}</p>
                    
                    <div className="d-flex justify-content-between mb-3">
                      <div>
                        <small className="text-muted d-block">Salary Range</small>
                        <span className="fw-semibold text-success">{career.salary}</span>
                      </div>
                      <div className="text-end">
                        <small className="text-muted d-block">Growth</small>
                        <span className="fw-semibold text-primary-red">{career.growth}</span>
                      </div>
                    </div>

                    <div className="mb-3">
                      <small className="text-muted d-block mb-2">Key Skills:</small>
                      <div className="d-flex flex-wrap gap-1">
                        {career.skills.slice(0, 2).map((skill, idx) => (
                          <span key={idx} className="badge bg-light-bg text-deep-red small">
                            {skill}
                          </span>
                        ))}
                        {career.skills.length > 2 && (
                          <span className="badge bg-light-bg text-muted small">
                            +{career.skills.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>

                    <Button size="sm" className="w-100" onClick={() => onNavigate('careers')}>
                      Explore Path
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