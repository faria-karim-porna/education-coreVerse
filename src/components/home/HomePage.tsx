import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Beaker, Calculator, Globe, MessageCircle, Award, ArrowRight, Play, CheckCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

export function HomePage() {
  const features = [
    {
      icon: Beaker,
      title: 'STEM Lab Simulators',
      description: 'Interactive physics, chemistry, and biology simulations for hands-on learning',
      color: 'bg-primary-red'
    },
    {
      icon: Calculator,
      title: 'Scientific Tools',
      description: 'Advanced calculators, equation solvers, and plotting tools',
      color: 'bg-accent-red'
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
      color: 'bg-deep-red'
    },
    {
      icon: Award,
      title: 'Progress Tracking',
      description: 'Comprehensive analytics and achievement systems',
      color: 'bg-primary-red'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Physics Professor',
      content: 'CoreVerse has transformed how I teach complex concepts. The lab simulators make abstract physics tangible for my students.',
      avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    },
    {
      name: 'Alice Johnson',
      role: 'University Student',
      content: 'The interactive tools and progress tracking keep me motivated. I\'ve improved my understanding significantly.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    },
    {
      name: 'Prof. Michael Rodriguez',
      role: 'Chemistry Department',
      content: 'The virtual lab experiments are incredibly detailed. Students can practice safely before real lab work.',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Active Students' },
    { number: '2K+', label: 'Educators' },
    { number: '100+', label: 'Lab Simulations' },
    { number: '95%', label: 'Success Rate' }
  ];

  return (
    <div className="min-vh-100 bg-light-bg">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm border-bottom">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="navbar-brand d-flex align-items-center gap-2"
          >
            <div className="bg-primary-red rounded-4 d-flex align-items-center justify-content-center"
                 style={{ width: '40px', height: '40px' }}>
              <BookOpen className="text-white" size={24} />
            </div>
            <span className="fw-bold h3 text-deep-red mb-0">CoreVerse</span>
          </motion.div>
          
          <div className="d-none d-md-flex align-items-center gap-4">
            <a href="#features" className="nav-link text-deep-red">Features</a>
            <a href="#about" className="nav-link text-deep-red">About</a>
            <a href="#testimonials" className="nav-link text-deep-red">Reviews</a>
            <Button variant="secondary" className="me-2">Sign In</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="position-relative overflow-hidden bg-gradient-light py-5">
        <div className="container-lg py-5">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="display-3 display-lg-2 fw-bold text-deep-red mb-4 lh-1">
                Transform Your
                <span className="text-primary-red d-block">Learning Journey</span>
              </h1>
              <p className="lead text-muted mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                Experience interactive STEM education with virtual labs, scientific tools, 
                and collaborative classrooms designed for modern learners.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <Button size="lg" className="justify-content-center">
                  Start Learning Today
                  <ArrowRight size={20} className="ms-2" />
                </Button>
                <Button variant="secondary" size="lg" className="justify-content-center">
                  <Play size={20} className="me-2" />
                  Watch Demo
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-5 bg-white">
        <div className="container-lg">
          <div className="row g-4">
            {stats.map((stat, index) => (
              <div key={stat.label} className="col-6 col-lg-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="display-4 fw-bold text-primary-red mb-2">{stat.number}</div>
                  <div className="text-muted">{stat.label}</div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tilt Card Section */}
      <section className="py-5 bg-light-bg">
        <div className="container-lg">
          <div className="d-flex justify-content-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="position-relative tilt-card-container"
            >
              <div className="card shadow-lg border-0 p-4 transform-rotate-3 hover-transform-rotate-0 transition-all">
                <div className="row g-3">
                  <div className="col-6">
                    <div className="bg-light-bg p-3 rounded-3 text-center">
                      <Beaker className="text-primary-red mb-2" size={32} />
                      <h6 className="fw-semibold text-deep-red mb-0">Virtual Labs</h6>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="bg-card-bg p-3 rounded-3 text-center">
                      <Calculator className="text-accent-red mb-2" size={32} />
                      <h6 className="fw-semibold text-deep-red mb-0">Sci Tools</h6>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="bg-success bg-opacity-10 p-3 rounded-3 text-center">
                      <Globe className="text-success mb-2" size={32} />
                      <h6 className="fw-semibold text-deep-red mb-0">Explore</h6>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="bg-warning bg-opacity-10 p-3 rounded-3 text-center">
                      <Users className="text-warning mb-2" size={32} />
                      <h6 className="fw-semibold text-deep-red mb-0">Collaborate</h6>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-5 bg-white">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-5"
          >
            <h2 className="display-4 fw-bold text-deep-red mb-4">
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
                  <Card hover className="h-100">
                    <div className="card-body p-4">
                      <div className={`${feature.color} rounded-4 d-inline-flex align-items-center justify-content-center mb-4`}
                           style={{ width: '64px', height: '64px' }}>
                        <feature.icon className="text-white" size={32} />
                      </div>
                      <h4 className="fw-bold text-deep-red mb-3">{feature.title}</h4>
                      <p className="text-muted lh-base">{feature.description}</p>
                    </div>
                  </Card>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
                        <div>
                          <h6 className="fw-semibold text-deep-red mb-0">{testimonial.name}</h6>
                          <small className="text-muted">{testimonial.role}</small>
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

      {/* CTA Section */}
      <section className="py-5 bg-gradient-primary text-white">
        <div className="container-lg text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="display-4 fw-bold mb-4">
              Ready to Transform Education?
            </h2>
            <p className="lead mb-5 opacity-75">
              Join thousands of educators and students already using CoreVerse 
              to enhance their learning experience.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <Button variant="secondary" size="lg" className="bg-white text-primary-red border-white">
                Start Free Trial
              </Button>
              <Button variant="outline-secondary" size="lg" className="border-white text-white">
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-deep-red text-white py-5">
        <div className="container-lg">
          <div className="row g-4">
            <div className="col-lg-3">
              <div className="d-flex align-items-center gap-2 mb-4">
                <div className="bg-primary-red rounded-3 d-flex align-items-center justify-content-center"
                     style={{ width: '32px', height: '32px' }}>
                  <BookOpen className="text-white" size={20} />
                </div>
                <span className="fw-bold h5 mb-0">CoreVerse</span>
              </div>
              <p className="text-white-50">
                Transforming education through interactive technology and innovative learning experiences.
              </p>
            </div>
            
            <div className="col-lg-3">
              <h6 className="fw-semibold mb-3">Platform</h6>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">STEM Labs</a></li>
                <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Virtual Classrooms</a></li>
                <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Progress Tracking</a></li>
                <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Scientific Tools</a></li>
              </ul>
            </div>
            
            <div className="col-lg-3">
              <h6 className="fw-semibold mb-3">Support</h6>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Help Center</a></li>
                <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Documentation</a></li>
                <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Community</a></li>
                <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Contact Us</a></li>
              </ul>
            </div>
            
            <div className="col-lg-3">
              <h6 className="fw-semibold mb-3">Company</h6>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">About</a></li>
                <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Careers</a></li>
                <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Privacy</a></li>
                <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Terms</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-top border-white border-opacity-25 mt-5 pt-4 text-center">
            <p className="text-white-50 mb-0">&copy; 2024 CoreVerse. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}