import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export function TeamSection() {
  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'CEO & Co-Founder',
      bio: 'Former MIT professor with 15+ years in educational technology. PhD in Computer Science.',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Prof. Michael Rodriguez',
      role: 'CTO & Co-Founder',
      bio: 'Leading expert in virtual reality and educational simulations. Former Google Research scientist.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Head of Curriculum',
      bio: 'Educational psychologist specializing in STEM learning methodologies. Harvard PhD.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'James Park',
      role: 'Head of Engineering',
      bio: 'Full-stack architect with expertise in scalable educational platforms. Former Netflix engineer.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Dr. Aisha Patel',
      role: 'Head of Research',
      bio: 'AI researcher focused on personalized learning algorithms. Stanford PhD in Machine Learning.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'David Kim',
      role: 'Head of Design',
      bio: 'UX designer passionate about creating intuitive educational experiences. Former Apple designer.',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      linkedin: '#',
      twitter: '#'
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
          <h2 className="display-4 fw-bold text-deep-red mb-4">Meet Our Team</h2>
          <p className="lead text-muted">
            Passionate educators and technologists working together to change the world
          </p>
        </motion.div>

        <div className="row g-4">
          {teamMembers.map((member, index) => (
            <div key={member.name} className="col-md-6 col-lg-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover className="h-100">
                  <div className="card-body p-4 text-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="rounded-circle object-fit-cover mb-3"
                      style={{ width: '100px', height: '100px' }}
                    />
                    <h4 className="fw-bold text-deep-red mb-1">{member.name}</h4>
                    <p className="text-primary-red fw-medium mb-3">{member.role}</p>
                    <p className="text-muted small mb-4">{member.bio}</p>
                    <div className="d-flex justify-content-center gap-2">
                      <Button size="sm" variant="secondary" className="p-2">
                        <Linkedin size={16} />
                      </Button>
                      <Button size="sm" variant="secondary" className="p-2">
                        <Twitter size={16} />
                      </Button>
                      <Button size="sm" variant="secondary" className="p-2">
                        <Mail size={16} />
                      </Button>
                    </div>
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