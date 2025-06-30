import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Card } from '../ui/Card';

export function VideoTutorials() {
  const tutorials = [
    {
      title: 'Building Circuit Simulations',
      description: 'Complete guide to creating electrical circuit experiments',
      type: 'Video Tutorial',
      duration: '25 min',
      level: 'Advanced',
      thumbnail: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&dpr=2'
    },
    {
      title: 'Chemistry Lab Safety',
      description: 'Best practices for virtual chemistry experiments',
      type: 'Interactive Guide',
      duration: '15 min',
      level: 'Beginner',
      thumbnail: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&dpr=2'
    },
    {
      title: 'Data Analysis Tools',
      description: 'Using built-in analytics for student progress',
      type: 'Step-by-step',
      duration: '20 min',
      level: 'Intermediate',
      thumbnail: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&dpr=2'
    }
  ];

  return (
    <div>
      <h3 className="h4 fw-bold text-deep-red mb-4">Video Tutorials</h3>
      <div className="row g-4">
        {tutorials.map((tutorial, index) => (
          <div key={tutorial.title} className="col-lg-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover>
                <div className="position-relative">
                  <img
                    src={tutorial.thumbnail}
                    alt={tutorial.title}
                    className="card-img-top object-fit-cover"
                    style={{ height: '200px' }}
                  />
                  <div className="position-absolute top-50 start-50 translate-middle">
                    <div className="bg-primary-red bg-opacity-90 rounded-circle d-flex align-items-center justify-content-center"
                         style={{ width: '60px', height: '60px' }}>
                      <Play className="text-white ms-1" size={24} fill="currentColor" />
                    </div>
                  </div>
                  <div className="position-absolute top-0 end-0 m-2">
                    <span className="badge bg-dark bg-opacity-75 text-white">
                      {tutorial.duration}
                    </span>
                  </div>
                </div>
                <div className="card-body p-4">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <span className="badge bg-primary-red text-white">{tutorial.type}</span>
                    <span className={`badge ${
                      tutorial.level === 'Beginner' ? 'bg-success' : 
                      tutorial.level === 'Intermediate' ? 'bg-warning' : 'bg-danger'
                    } text-white`}>
                      {tutorial.level}
                    </span>
                  </div>
                  <h5 className="fw-bold text-deep-red mb-2">{tutorial.title}</h5>
                  <p className="text-muted small mb-0">{tutorial.description}</p>
                </div>
              </Card>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}