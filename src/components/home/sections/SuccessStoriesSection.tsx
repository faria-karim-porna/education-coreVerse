import React from 'react';
import { motion } from 'framer-motion';
import { Award, TrendingUp, Users, Star } from 'lucide-react';
import { Card } from '../../ui/Card';

export function SuccessStoriesSection() {
  const successStories = [
    {
      name: 'Maria Rodriguez',
      role: 'High School Student',
      story: 'Improved my chemistry grades from C to A+ using CoreVerse virtual labs. The interactive experiments helped me understand complex reactions.',
      achievement: 'Chemistry Excellence Award',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      subject: 'Chemistry',
      improvement: '+2 letter grades',
      icon: Award
    },
    {
      name: 'James Chen',
      role: 'University Student',
      story: 'CoreVerse physics simulations made quantum mechanics concepts crystal clear. I went from struggling to becoming a tutor for other students.',
      achievement: 'Dean\'s List 3 Semesters',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      subject: 'Physics',
      improvement: '95% average',
      icon: TrendingUp
    },
    {
      name: 'Dr. Lisa Park',
      role: 'Biology Professor',
      story: 'My students\' engagement increased by 300% after implementing CoreVerse. The virtual dissections and cell simulations are game-changers.',
      achievement: 'Teaching Excellence Award',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      subject: 'Biology',
      improvement: '300% engagement',
      icon: Users
    },
    {
      name: 'Alex Thompson',
      role: 'Engineering Student',
      story: 'The circuit simulations helped me land my dream internship at Tesla. I could demonstrate practical knowledge that impressed the interviewers.',
      achievement: 'Tesla Internship',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      subject: 'Engineering',
      improvement: 'Dream job secured',
      icon: Star
    },
    {
      name: 'Sarah Williams',
      role: 'Medical Student',
      story: 'CoreVerse anatomy simulations prepared me perfectly for medical school. I scored in the top 5% of my class in anatomy and physiology.',
      achievement: 'Top 5% Class Ranking',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      subject: 'Medicine',
      improvement: 'Top 5% ranking',
      icon: Award
    },
    {
      name: 'Prof. David Kumar',
      role: 'Mathematics Professor',
      story: 'Student comprehension of calculus concepts improved dramatically with CoreVerse visualization tools. Failure rates dropped by 60%.',
      achievement: 'Department Innovation Award',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      subject: 'Mathematics',
      improvement: '60% fewer failures',
      icon: TrendingUp
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
          <div className="badge bg-success text-white px-3 py-2 rounded-pill mb-3">
            <Star className="me-1" size={16} />
            Success Stories
          </div>
          <h2 className="display-4 fw-bold text-deep-red mb-4">
            Real Results from Real Students
          </h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Discover how CoreVerse has transformed learning experiences and 
            helped students achieve their academic and career goals.
          </p>
        </motion.div>

        <div className="row g-4">
          {successStories.map((story, index) => (
            <div key={story.name} className="col-md-6 col-lg-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="h-100"
              >
                <Card hover className="h-100">
                  <div className="card-body p-4">
                    {/* Header with avatar and achievement */}
                    <div className="d-flex align-items-start mb-3">
                      <img
                        src={story.image}
                        alt={story.name}
                        className="rounded-circle object-fit-cover me-3"
                        style={{ width: '60px', height: '60px' }}
                      />
                      <div className="flex-fill">
                        <h5 className="fw-bold text-deep-red mb-1">{story.name}</h5>
                        <p className="text-muted small mb-2">{story.role}</p>
                        <div className="d-flex align-items-center">
                          <story.icon className="text-warning me-1" size={14} />
                          <span className="badge bg-warning text-dark small">
                            {story.achievement}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Story content */}
                    <blockquote className="mb-4">
                      <p className="text-muted fst-italic small lh-base mb-0">
                        "{story.story}"
                      </p>
                    </blockquote>

                    {/* Metrics */}
                    <div className="border-top pt-3">
                      <div className="row g-2 text-center">
                        <div className="col-6">
                          <div className="bg-light-bg rounded-3 p-2">
                            <small className="text-muted d-block">Subject</small>
                            <span className="fw-semibold text-deep-red small">{story.subject}</span>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="bg-success bg-opacity-10 rounded-3 p-2">
                            <small className="text-muted d-block">Improvement</small>
                            <span className="fw-semibold text-success small">{story.improvement}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-5"
        >
          <div className="bg-gradient-light rounded-4 p-5">
            <h3 className="fw-bold text-deep-red mb-3">Ready to Write Your Success Story?</h3>
            <p className="text-muted mb-4">
              Join thousands of students and educators who have transformed their learning with CoreVerse
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-4">
              <div className="text-center">
                <div className="display-6 fw-bold text-primary-red">98%</div>
                <small className="text-muted">Student Satisfaction</small>
              </div>
              <div className="text-center">
                <div className="display-6 fw-bold text-success">85%</div>
                <small className="text-muted">Grade Improvement</small>
              </div>
              <div className="text-center">
                <div className="display-6 fw-bold text-warning">92%</div>
                <small className="text-muted">Recommend CoreVerse</small>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}