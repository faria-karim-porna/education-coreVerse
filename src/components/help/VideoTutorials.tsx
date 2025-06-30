import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export function VideoTutorials() {
  const videoTutorials = [
    {
      id: '1',
      title: 'Platform Overview',
      description: 'Complete walkthrough of CoreVerse features and interface',
      duration: '12:34',
      thumbnail: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&dpr=2'
    },
    {
      id: '2',
      title: 'Virtual Lab Tutorial',
      description: 'How to conduct experiments in our physics simulation lab',
      duration: '8:45',
      thumbnail: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&dpr=2'
    },
    {
      id: '3',
      title: 'Teacher Dashboard Guide',
      description: 'Managing classes, assignments, and student progress',
      duration: '15:22',
      thumbnail: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&dpr=2'
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
          <h2 className="display-4 fw-bold text-deep-red mb-4">Video Tutorials</h2>
          <p className="lead text-muted">
            Learn with step-by-step video guides
          </p>
        </motion.div>

        <div className="row g-4">
          {videoTutorials.map((video, index) => (
            <div key={video.id} className="col-lg-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="card hover">
                  <div className="position-relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
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
                        {video.duration}
                      </span>
                    </div>
                  </div>
                  <div className="card-body p-4">
                    <h5 className="fw-bold text-deep-red mb-2">{video.title}</h5>
                    <p className="text-muted small mb-0">{video.description}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}