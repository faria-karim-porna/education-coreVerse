import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Target, 
  Eye, 
  Users, 
  Award, 
  Globe, 
  Heart,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Calendar,
  TrendingUp
} from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export function AboutPage() {
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

  const impactStats = [
    { number: '2M+', label: 'Students Reached', icon: Users },
    { number: '150+', label: 'Countries Served', icon: Globe },
    { number: '5,000+', label: 'Educational Institutions', icon: BookOpen },
    { number: '98%', label: 'Student Satisfaction', icon: Heart },
    { number: '500+', label: 'Lab Simulations', icon: Award },
    { number: '50+', label: 'Team Members', icon: Target }
  ];

  const milestones = [
    {
      year: '2019',
      title: 'CoreVerse Founded',
      description: 'Started with a vision to revolutionize STEM education through technology'
    },
    {
      year: '2020',
      title: 'First Virtual Labs',
      description: 'Launched our first physics and chemistry simulation platforms'
    },
    {
      year: '2021',
      title: 'Global Expansion',
      description: 'Reached 50 countries and partnered with major universities'
    },
    {
      year: '2022',
      title: 'AI Integration',
      description: 'Introduced personalized learning paths powered by machine learning'
    },
    {
      year: '2023',
      title: '1M Students',
      description: 'Celebrated reaching one million active students worldwide'
    },
    {
      year: '2024',
      title: 'Next Generation',
      description: 'Launched advanced AR/VR capabilities and collaborative spaces'
    }
  ];

  return (
    <div className="min-vh-100 bg-light-bg">
      {/* Hero Section */}
      <section className="position-relative overflow-hidden bg-gradient-primary text-white py-5">
        <div className="container-lg py-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="display-3 fw-bold mb-4">About CoreVerse</h1>
                <p className="lead mb-4">
                  We're on a mission to transform education through innovative technology, 
                  making quality STEM learning accessible to students worldwide.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <Button variant="secondary" className="bg-white text-primary-red border-white">
                    Our Story
                  </Button>
                  <Button variant="outline-secondary" className="border-white text-white">
                    Join Our Team
                  </Button>
                </div>
              </motion.div>
            </div>
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center"
              >
                <img
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2"
                  alt="Team collaboration"
                  className="img-fluid rounded-4 shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-5 bg-white">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-5"
          >
            <h2 className="display-4 fw-bold text-deep-red mb-4">Our Foundation</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
              Built on strong principles that guide everything we do
            </p>
          </motion.div>

          <div className="row g-4">
            <div className="col-lg-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Card className="h-100 text-center">
                  <div className="card-body p-5">
                    <div className="bg-primary-red rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
                         style={{ width: '80px', height: '80px' }}>
                      <Target className="text-white" size={40} />
                    </div>
                    <h3 className="h4 fw-bold text-deep-red mb-3">Our Mission</h3>
                    <p className="text-muted lh-base">
                      To democratize quality STEM education by providing innovative, 
                      interactive learning experiences that inspire and empower students 
                      to achieve their full potential.
                    </p>
                  </div>
                </Card>
              </motion.div>
            </div>

            <div className="col-lg-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card className="h-100 text-center">
                  <div className="card-body p-5">
                    <div className="bg-accent-red rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
                         style={{ width: '80px', height: '80px' }}>
                      <Eye className="text-white" size={40} />
                    </div>
                    <h3 className="h4 fw-bold text-deep-red mb-3">Our Vision</h3>
                    <p className="text-muted lh-base">
                      A world where every student has access to world-class STEM education, 
                      regardless of their location or background, fostering the next 
                      generation of innovators and problem-solvers.
                    </p>
                  </div>
                </Card>
              </motion.div>
            </div>

            <div className="col-lg-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card className="h-100 text-center">
                  <div className="card-body p-5">
                    <div className="bg-success rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
                         style={{ width: '80px', height: '80px' }}>
                      <Heart className="text-white" size={40} />
                    </div>
                    <h3 className="h4 fw-bold text-deep-red mb-3">Our Values</h3>
                    <p className="text-muted lh-base">
                      Innovation, accessibility, excellence, and student-centricity 
                      drive our commitment to creating meaningful educational 
                      experiences that make a lasting impact.
                    </p>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-5 bg-light-bg">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-5"
          >
            <h2 className="display-4 fw-bold text-deep-red mb-4">Our Global Impact</h2>
            <p className="lead text-muted">
              Transforming education across the globe, one student at a time
            </p>
          </motion.div>

          <div className="row g-4">
            {impactStats.map((stat, index) => (
              <div key={stat.label} className="col-md-6 col-lg-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="text-center">
                    <div className="card-body p-4">
                      <div className="bg-primary-red bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                           style={{ width: '64px', height: '64px' }}>
                        <stat.icon className="text-primary-red" size={32} />
                      </div>
                      <div className="display-4 fw-bold text-primary-red mb-2">{stat.number}</div>
                      <div className="text-muted fw-medium">{stat.label}</div>
                    </div>
                  </Card>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-5 bg-white">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-5"
          >
            <h2 className="display-4 fw-bold text-deep-red mb-4">Our Journey</h2>
            <p className="lead text-muted">
              Key milestones in our mission to transform education
            </p>
          </motion.div>

          <div className="row">
            <div className="col-lg-8 mx-auto">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="d-flex align-items-start mb-5"
                >
                  <div className="bg-primary-red rounded-circle d-flex align-items-center justify-content-center me-4 flex-shrink-0"
                       style={{ width: '60px', height: '60px' }}>
                    <Calendar className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="badge bg-accent-red text-white mb-2">{milestone.year}</div>
                    <h4 className="fw-bold text-deep-red mb-2">{milestone.title}</h4>
                    <p className="text-muted mb-0">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
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

      {/* CTA Section */}
      <section className="py-5 bg-gradient-secondary text-white">
        <div className="container-lg text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="display-4 fw-bold mb-4">Join Our Mission</h2>
            <p className="lead mb-5 opacity-75">
              Be part of the educational revolution. Whether you're an educator, 
              student, or passionate about learning, there's a place for you at CoreVerse.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <Button variant="secondary" size="lg" className="bg-white text-primary-red border-white">
                <Users size={20} className="me-2" />
                Join Our Community
              </Button>
              <Button variant="outline-secondary" size="lg" className="border-white text-white">
                <TrendingUp size={20} className="me-2" />
                Career Opportunities
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}