import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Card } from '../../ui/Card';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Physics Professor',
      content: 'CoreVerse has transformed how I teach complex concepts. The lab simulators make abstract physics tangible for my students.',
      avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 5
    },
    {
      name: 'Alice Johnson',
      role: 'University Student',
      content: 'The interactive tools and progress tracking keep me motivated. I\'ve improved my understanding significantly.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 5
    },
    {
      name: 'Prof. Michael Rodriguez',
      role: 'Chemistry Department',
      content: 'The virtual lab experiments are incredibly detailed. Students can practice safely before real lab work.',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-5 bg-light-bg">
      <div className="container-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-5"
        >
          <h2 className="display-4 fw-bold text-deep-red mb-4">
            Trusted by Educators Worldwide
          </h2>
          <p className="lead text-muted">
            See what teachers and students are saying about CoreVerse
          </p>
        </motion.div>

        <div className="row g-4">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.name} className="col-md-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="h-100"
              >
                <Card className="h-100">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="rounded-circle object-fit-cover me-3"
                        style={{ width: '48px', height: '48px' }}
                      />
                      <div className="flex-fill">
                        <h6 className="fw-semibold text-deep-red mb-0">{testimonial.name}</h6>
                        <small className="text-muted">{testimonial.role}</small>
                      </div>
                      <div className="d-flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="text-warning" size={16} fill="currentColor" />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted fst-italic lh-base">"{testimonial.content}"</p>
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