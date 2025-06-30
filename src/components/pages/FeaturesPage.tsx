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
  Play
} from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';
import { FeatureCard } from '../features/FeatureCard';
import { PlatformAdvantage } from '../features/PlatformAdvantage';
import { IntegrationSection } from '../features/IntegrationSection';
import { FeatureCategories } from '../features/FeatureCategories';
import { CTASection } from '../features/CTASection';

interface FeaturesPageProps {
  onNavigate: (view: string) => void;
}

export function FeaturesPage({ onNavigate }: FeaturesPageProps) {
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
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm border-bottom">
        <div className="container-lg">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="navbar-brand d-flex align-items-center gap-2 btn btn-link text-decoration-none"
            onClick={() => onNavigate('home')}
          >
            <div className="bg-primary-red rounded-4 d-flex align-items-center justify-content-center"
                 style={{ width: '40px', height: '40px' }}>
              <BookOpen className="text-white" size={24} />
            </div>
            <span className="fw-bold h3 text-deep-red mb-0">CoreVerse</span>
          </motion.button>
          
          <div className="d-none d-md-flex align-items-center gap-4">
            <button 
              onClick={() => onNavigate('features')} 
              className="nav-link btn btn-link text-primary-red text-decoration-none fw-medium"
            >
              Features
            </button>
            <button 
              onClick={() => onNavigate('about')} 
              className="nav-link btn btn-link text-deep-red text-decoration-none"
            >
              About
            </button>
            <button 
              onClick={() => onNavigate('contact')} 
              className="nav-link btn btn-link text-deep-red text-decoration-none"
            >
              Contact
            </button>
            <ThemeToggle />
            <Button variant="secondary" className="me-2" onClick={() => onNavigate('dashboard')}>
              Sign In
            </Button>
            <Button onClick={() => onNavigate('dashboard')}>Get Started</Button>
          </div>
        </div>
      </nav>

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
          <FeatureCategories 
            categories={featureCategories} 
            activeCategory={activeCategory} 
            setActiveCategory={setActiveCategory} 
          />

          <div className="row g-4">
            {filteredFeatures.map((feature, index) => (
              <div key={feature.id} className="col-lg-6">
                <FeatureCard 
                  feature={feature} 
                  index={index} 
                  onNavigate={onNavigate} 
                />
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
                <PlatformAdvantage feature={feature} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <IntegrationSection onNavigate={onNavigate} />

      {/* CTA Section */}
      <CTASection onNavigate={onNavigate} />

      {/* Footer */}
      <footer className="bg-deep-red text-white py-5">
        <div className="container-lg">
          <div className="row g-4">
            <div className="col-lg-3">
              <button 
                onClick={() => onNavigate('home')}
                className="d-flex align-items-center gap-2 mb-4 btn btn-link text-white text-decoration-none p-0"
              >
                <div className="bg-primary-red rounded-3 d-flex align-items-center justify-content-center"
                     style={{ width: '32px', height: '32px' }}>
                  <BookOpen className="text-white" size={20} />
                </div>
                <span className="fw-bold h5 mb-0">CoreVerse</span>
              </button>
              <p className="text-white-50">
                Transforming education through interactive technology and innovative learning experiences.
              </p>
            </div>
            
            <div className="col-lg-3">
              <h6 className="fw-semibold mb-3">Platform</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <button onClick={() => onNavigate('features')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    STEM Labs
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('features')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Virtual Classrooms
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('features')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Progress Tracking
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('features')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Scientific Tools
                  </button>
                </li>
              </ul>
            </div>
            
            <div className="col-lg-3">
              <h6 className="fw-semibold mb-3">Support</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <button onClick={() => onNavigate('contact')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Help Center
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('features')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Documentation
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('contact')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Community
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('contact')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>
            
            <div className="col-lg-3">
              <h6 className="fw-semibold mb-3">Company</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <button onClick={() => onNavigate('about')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    About
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('contact')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Careers
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('contact')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Privacy
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('contact')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Terms
                  </button>
                </li>
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