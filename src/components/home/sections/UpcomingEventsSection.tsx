import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, MapPin, ExternalLink } from 'lucide-react';
import { Card } from '../../ui/Card';
import { Button } from '../../ui/Button';

export function UpcomingEventsSection() {
  const upcomingEvents = [
    {
      title: 'Global STEM Competition 2024',
      date: 'March 15, 2024',
      type: 'Competition',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
      participants: '2,500+',
      location: 'Virtual Event'
    },
    {
      title: 'AI in Education Webinar',
      date: 'March 22, 2024',
      type: 'Webinar',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
      participants: '1,200+',
      location: 'Online'
    },
    {
      title: 'Virtual Lab Workshop',
      date: 'April 5, 2024',
      type: 'Workshop',
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
      participants: '800+',
      location: 'Interactive Session'
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
          <div className="badge bg-info text-white px-3 py-2 rounded-pill mb-3">
            <Calendar className="me-1" size={16} />
            Upcoming Events
          </div>
          <h2 className="display-4 fw-bold text-deep-red mb-4">
            Join Our Learning Community
          </h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Participate in competitions, webinars, and workshops designed to 
            enhance your learning experience and connect with peers.
          </p>
        </motion.div>

        <div className="row g-4">
          {upcomingEvents.map((event, index) => (
            <div key={event.title} className="col-lg-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="h-100"
              >
                <Card hover className="h-100">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="card-img-top object-fit-cover"
                    style={{ height: '200px' }}
                  />
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <span className="badge bg-primary-red text-white">{event.type}</span>
                      <small className="text-muted">{event.date}</small>
                    </div>
                    
                    <h4 className="fw-bold text-deep-red mb-3">{event.title}</h4>
                    
                    <div className="d-flex align-items-center mb-2">
                      <Users className="text-muted me-2" size={16} />
                      <small className="text-muted">{event.participants} registered</small>
                    </div>
                    
                    <div className="d-flex align-items-center mb-4">
                      <MapPin className="text-muted me-2" size={16} />
                      <small className="text-muted">{event.location}</small>
                    </div>

                    <Button size="sm" className="w-100">
                      <ExternalLink size={16} className="me-2" />
                      Register Now
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