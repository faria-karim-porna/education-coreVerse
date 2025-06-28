import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Beaker, 
  Calculator, 
  Users, 
  BarChart3, 
  Globe, 
  MessageCircle,
  Zap,
  Atom,
  Microscope,
  BookOpen,
  Video,
  Award,
  Shield,
  Smartphone,
  Cloud,
  Brain,
  Target,
  Play,
  CheckCircle
} from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export function FeaturesPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const featureCategories = [
    { id: 'all', label: 'All Features', icon: Target },
    { id: 'labs', label: 'Virtual Labs', icon: Beaker },
    { id: 'classrooms', label: 'Classrooms', icon: Users },
    { id: 'tools', label: 'Study Tools', icon: Calculator },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 }
  ];

  const features = [
    {
      id: 'physics-sim',
      category: 'labs',
      title: 'Physics Simulations',
      description: 'Interactive physics experiments covering mechanics, electromagnetism, thermodynamics, and quantum physics.',
      icon: Zap,
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      features: ['Circuit Builder', 'Motion Analysis', 'Wave Mechanics', 'Quantum Experiments'],
      color: 'bg-primary-red'
    },
    {
      id: 'chemistry-lab',
      category: 'labs',
      title: 'Chemistry Laboratory',
      description: 'Safe virtual chemistry experiments with realistic molecular interactions and reaction simulations.',
      icon: Atom,
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      features: ['Molecular Modeling', 'Reaction Simulator', 'Periodic Table', 'Lab Equipment'],
      color: 'bg-accent-red'
    },
    {
      id: 'biology-explorer',
      category: 'labs',
      title: 'Biology Explorer',
      description: 'Explore life sciences through interactive cell models, genetic simulations, and ecosystem studies.',
      icon: Microscope,
      image: 'https://images.pexels.com/photos/2280568/pexels-photo-2280568.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      features: ['Cell Viewer', 'DNA Sequencing', 'Ecosystem Models', 'Anatomy 3D'],
      color: 'bg-success'
    },
    {
      id: 'virtual-classroom',
      category: 'classrooms',
      title: 'Virtual Classrooms',
      description: 'Immersive online learning spaces with real-time collaboration and interactive whiteboards.',
      icon: Users,
      image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      features: ['Live Sessions', 'Screen Sharing', 'Breakout Rooms', 'Recording'],
      color: 'bg-info'
    },
    {
      id: 'assignment-system',
      category: 'classrooms',
      title: 'Assignment Management',
      description: 'Comprehensive assignment creation, distribution, and grading system with automated feedback.',
      icon: BookOpen,
      image: 'https://images.pexels.com/photos/4144101/pexels-photo-4144101.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      features: ['Auto-Grading', 'Rubrics', 'Peer Review', 'Plagiarism Check'],
      color: 'bg-warning'
    },
    {
      id: 'video-lectures',
      category: 'classrooms',
      title: 'Interactive Video Lectures',
      description: 'Engaging video content with embedded quizzes, annotations, and adaptive playback.',
      icon: Video,
      image: 'https://images.pexels.com/photos/4144962/pexels-photo-4144962.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      features: ['Interactive Quizzes', 'Note Taking', 'Speed Control', 'Captions'],
      color: 'bg-purple'
    },
    {
      id: 'scientific-calculator',
      category: 'tools',
      title: 'Scientific Calculator Suite',
      description: 'Advanced calculators for complex mathematical operations, graphing, and statistical analysis.',
      icon: Calculator,
      image: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      features: ['Graphing Calculator', 'Matrix Operations', 'Statistics', 'Unit Converter'],
      color: 'bg-primary-red'
    },
    {
      id: 'knowledge-base',
      category: 'tools',
      title: 'Knowledge Explorer',
      description: 'Interactive knowledge base with 3D models, timelines, and cross-referenced content.',
      icon: Globe,
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      features: ['3D Models', 'Interactive Maps', 'Timelines', 'Search Engine'],
      color: 'bg-success'
    },
    {
      id: 'ai-tutor',
      category: 'tools',
      title: 'AI-Powered Tutor',
      description: 'Personalized learning assistant that adapts to your learning style and provides instant help.',
      icon: Brain,
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      features: ['24/7 Support', 'Personalized Help', 'Learning Paths', 'Progress Tracking'],
      color: 'bg-info'
    },
    {
      id: 'progress-analytics',
      category: 'analytics',
      title: 'Learning Analytics',
      description: 'Comprehensive analytics dashboard tracking student progress, engagement, and performance.',
      icon: BarChart3,
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      features: ['Performance Metrics', 'Engagement Tracking', 'Predictive Analytics', 'Custom Reports'],
      color: 'bg-warning'
    },
    {
      id: 'achievement-system',
      category: 'analytics',
      title: 'Achievement System',
      description: 'Gamified learning experience with badges, leaderboards, and milestone tracking.',
      icon: Award,
      image: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      features: ['Digital Badges', 'Leaderboards', 'Certificates', 'Portfolio'],
      color: 'bg-accent-red'
    },
    {
      id: 'communication',
      category: 'tools',
      title: 'Communication Hub',
      description: 'Integrated messaging, forums, and collaboration tools for seamless student-teacher interaction.',
      icon: MessageCircle,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      features: ['Instant Messaging', 'Discussion Forums', 'Video Calls', 'File Sharing'],
      color: 'bg-purple'
    }
  ];

  const platformFeatures = [
    {
      icon: Cloud,
      title: 'Cloud-Based Platform',
      description: 'Access your learning materials anywhere, anytime with our secure cloud infrastructure.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Responsive',
      description: 'Seamless experience across all devices - desktop, tablet, and mobile.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with data encryption and privacy protection.'
    },
    {
      icon: Globe,
      title: 'Multi-Language Support',
      description: 'Available in 25+ languages to serve our global community.'
    }
  ];

  const filteredFeatures = activeCategory === 'all' 
    ? features 
    : features.filter(feature => feature.category === activeCategory);

  return (
    <div className="min-vh-100 bg-light-bg">
      {/* Hero Section */}
      <section className="position-relative overflow-hidden bg-gradient-primary text-white py-5">
        <div className="container-lg py-5">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="display-3 fw-bold mb-4">Platform Features</h1>
              <p className="lead mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                Discover the comprehensive suite of tools and features that make 
                CoreVerse the ultimate educational platform for STEM learning.
              </p>
              <Button variant="secondary" size="lg" className="bg-white text-primary-red border-white">
                <Play size={20} className="me-2" />
                Watch Feature Demo
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Categories */}
      <section className="py-5 bg-white">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-5"
          >
            <h2 className="display-4 fw-bold text-deep-red mb-4">Explore by Category</h2>
            <p className="lead text-muted">
              Choose a category to explore specific features in detail
            </p>
          </motion.div>

          <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
            {featureCategories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? 'primary' : 'secondary'}
                onClick={() => setActiveCategory(category.id)}
                className="d-flex align-items-center gap-2"
              >
                <category.icon size={16} />
                {category.label}
              </Button>
            ))}
          </div>

          <div className="row g-4">
            {filteredFeatures.map((feature, index) => (
              <div key={feature.id} className="col-lg-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="h-100"
                >
                  <Card hover className="h-100">
                    <div className="row g-0 h-100">
                      <div className="col-md-5">
                        <div className="position-relative h-100">
                          <img
                            src={feature.image}
                            alt={feature.title}
                            className="img-fluid h-100 object-fit-cover rounded-start"
                          />
                          <div className={`position-absolute top-0 start-0 m-3 ${feature.color} rounded-3 d-flex align-items-center justify-content-center`}
                               style={{ width: '48px', height: '48px' }}>
                            <feature.icon className="text-white" size={24} />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-7">
                        <div className="card-body p-4 h-100 d-flex flex-column">
                          <h4 className="fw-bold text-deep-red mb-3">{feature.title}</h4>
                          <p className="text-muted mb-4 flex-fill">{feature.description}</p>
                          <div className="mb-4">
                            {feature.features.map((item, idx) => (
                              <div key={idx} className="d-flex align-items-center mb-2">
                                <CheckCircle className="text-success me-2 flex-shrink-0" size={16} />
                                <small className="text-muted">{item}</small>
                              </div>
                            ))}
                          </div>
                          <Button size="sm" className="align-self-start">
                            Learn More
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-5 bg-light-bg">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-5"
          >
            <h2 className="display-4 fw-bold text-deep-red mb-4">Platform Advantages</h2>
            <p className="lead text-muted">
              Built with modern technology for reliability, security, and performance
            </p>
          </motion.div>

          <div className="row g-4">
            {platformFeatures.map((feature, index) => (
              <div key={feature.title} className="col-md-6 col-lg-3">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="text-center h-100">
                    <div className="card-body p-4">
                      <div className="bg-primary-red bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
                           style={{ width: '64px', height: '64px' }}>
                        <feature.icon className="text-primary-red" size={32} />
                      </div>
                      <h4 className="fw-bold text-deep-red mb-3">{feature.title}</h4>
                      <p className="text-muted">{feature.description}</p>
                    </div>
                  </Card>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-5 bg-white">
        <div className="container-lg">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h2 className="display-4 fw-bold text-deep-red mb-4">Seamless Integration</h2>
                <p className="lead text-muted mb-4">
                  CoreVerse integrates with your existing educational infrastructure, 
                  making adoption smooth and efficient.
                </p>
                <div className="d-flex flex-column gap-3 mb-4">
                  <div className="d-flex align-items-center">
                    <CheckCircle className="text-success me-3" size={20} />
                    <span>LMS Integration (Canvas, Blackboard, Moodle)</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <CheckCircle className="text-success me-3" size={20} />
                    <span>Single Sign-On (SSO) Support</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <CheckCircle className="text-success me-3" size={20} />
                    <span>Grade Passback Functionality</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <CheckCircle className="text-success me-3" size={20} />
                    <span>API Access for Custom Integrations</span>
                  </div>
                </div>
                <Button>
                  View Integration Guide
                </Button>
              </motion.div>
            </div>
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-center"
              >
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2"
                  alt="Integration"
                  className="img-fluid rounded-4 shadow-lg"
                />
              </motion.div>
            </div>
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
            <h2 className="display-4 fw-bold mb-4">Ready to Experience CoreVerse?</h2>
            <p className="lead mb-5 opacity-75">
              Start your free trial today and discover how our features can 
              transform your educational experience.
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
    </div>
  );
}