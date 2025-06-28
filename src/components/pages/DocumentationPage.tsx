import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen,
  Search,
  Code,
  Play,
  Download,
  ExternalLink,
  FileText,
  Video,
  Lightbulb,
  Users,
  ArrowRight,
  ChevronRight,
  Star,
  Clock,
  CheckCircle,
  Zap,
  Beaker,
  Calculator,
  Globe,
  MessageCircle,
  Award
} from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';

interface DocumentationPageProps {
  onNavigate: (view: string) => void;
}

export function DocumentationPage({ onNavigate }: DocumentationPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('getting-started');

  const docCategories = [
    { id: 'getting-started', label: 'Getting Started', icon: Play },
    { id: 'api-reference', label: 'API Reference', icon: Code },
    { id: 'tutorials', label: 'Tutorials', icon: Video },
    { id: 'guides', label: 'User Guides', icon: FileText },
    { id: 'examples', label: 'Examples', icon: Lightbulb },
    { id: 'integrations', label: 'Integrations', icon: Globe }
  ];

  const quickStartGuides = [
    {
      title: 'Platform Overview',
      description: 'Get familiar with CoreVerse interface and navigation',
      duration: '5 min read',
      difficulty: 'Beginner',
      icon: BookOpen
    },
    {
      title: 'First Virtual Lab',
      description: 'Run your first physics simulation in minutes',
      duration: '10 min read',
      difficulty: 'Beginner',
      icon: Beaker
    },
    {
      title: 'Creating Classes',
      description: 'Set up your first virtual classroom',
      duration: '8 min read',
      difficulty: 'Intermediate',
      icon: Users
    },
    {
      title: 'Using Scientific Tools',
      description: 'Master the calculator suite and analysis tools',
      duration: '12 min read',
      difficulty: 'Intermediate',
      icon: Calculator
    }
  ];

  const apiEndpoints = [
    {
      method: 'GET',
      endpoint: '/api/v1/classes',
      description: 'Retrieve all classes for authenticated user',
      response: 'Array of class objects'
    },
    {
      method: 'POST',
      endpoint: '/api/v1/classes',
      description: 'Create a new virtual classroom',
      response: 'Created class object'
    },
    {
      method: 'GET',
      endpoint: '/api/v1/labs/{id}',
      description: 'Get specific lab simulation details',
      response: 'Lab simulation object'
    },
    {
      method: 'POST',
      endpoint: '/api/v1/assignments',
      description: 'Create new assignment for class',
      response: 'Created assignment object'
    }
  ];

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

  const integrations = [
    {
      name: 'Canvas LMS',
      description: 'Seamless integration with Canvas Learning Management System',
      status: 'Available',
      icon: BookOpen,
      features: ['Grade passback', 'SSO support', 'Roster sync']
    },
    {
      name: 'Google Classroom',
      description: 'Connect with Google Classroom for easy class management',
      status: 'Available',
      icon: Users,
      features: ['Assignment sync', 'Student roster', 'Grade export']
    },
    {
      name: 'Microsoft Teams',
      description: 'Integrate virtual labs with Teams meetings',
      status: 'Beta',
      icon: MessageCircle,
      features: ['Screen sharing', 'Collaboration', 'Meeting integration']
    },
    {
      name: 'Blackboard',
      description: 'Full integration with Blackboard Learn platform',
      status: 'Coming Soon',
      icon: Globe,
      features: ['Deep linking', 'Grade sync', 'Content integration']
    }
  ];

  const renderContent = () => {
    switch (selectedCategory) {
      case 'getting-started':
        return (
          <div>
            <h3 className="h4 fw-bold text-deep-red mb-4">Quick Start Guides</h3>
            <div className="row g-4">
              {quickStartGuides.map((guide, index) => (
                <div key={guide.title} className="col-md-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card hover className="h-100">
                      <div className="card-body p-4">
                        <div className="d-flex align-items-start mb-3">
                          <div className="bg-primary-red bg-opacity-10 rounded-3 d-flex align-items-center justify-content-center me-3"
                               style={{ width: '48px', height: '48px' }}>
                            <guide.icon className="text-primary-red" size={24} />
                          </div>
                          <div className="flex-fill">
                            <h5 className="fw-bold text-deep-red mb-1">{guide.title}</h5>
                            <p className="text-muted small mb-2">{guide.description}</p>
                            <div className="d-flex align-items-center gap-3 small text-muted">
                              <span className="d-flex align-items-center gap-1">
                                <Clock size={12} />
                                {guide.duration}
                              </span>
                              <span className={`badge ${
                                guide.difficulty === 'Beginner' ? 'bg-success' : 
                                guide.difficulty === 'Intermediate' ? 'bg-warning' : 'bg-danger'
                              } text-white`}>
                                {guide.difficulty}
                              </span>
                            </div>
                          </div>
                        </div>
                        <Button size="sm" className="w-100">
                          Start Guide
                          <ArrowRight size={14} className="ms-1" />
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'api-reference':
        return (
          <div>
            <h3 className="h4 fw-bold text-deep-red mb-4">API Reference</h3>
            <div className="mb-4">
              <div className="bg-light-bg rounded-3 p-4">
                <h5 className="fw-bold text-deep-red mb-3">Base URL</h5>
                <code className="bg-white p-2 rounded border">https://api.coreverse.edu</code>
                <p className="text-muted mt-3 mb-0">
                  All API requests must include authentication headers. See our authentication guide for details.
                </p>
              </div>
            </div>
            <div className="d-flex flex-column gap-3">
              {apiEndpoints.map((endpoint, index) => (
                <motion.div
                  key={endpoint.endpoint}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <div className="card-body p-4">
                      <div className="d-flex align-items-start justify-content-between mb-3">
                        <div className="d-flex align-items-center gap-3">
                          <span className={`badge ${
                            endpoint.method === 'GET' ? 'bg-success' : 
                            endpoint.method === 'POST' ? 'bg-primary' : 'bg-warning'
                          } text-white`}>
                            {endpoint.method}
                          </span>
                          <code className="bg-light-bg px-2 py-1 rounded">{endpoint.endpoint}</code>
                        </div>
                        <Button size="sm" variant="secondary">
                          <ExternalLink size={14} className="me-1" />
                          Try it
                        </Button>
                      </div>
                      <p className="text-muted mb-2">{endpoint.description}</p>
                      <small className="text-muted">
                        <strong>Response:</strong> {endpoint.response}
                      </small>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 'tutorials':
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
                    <Card hover className="h-100">
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

      case 'integrations':
        return (
          <div>
            <h3 className="h4 fw-bold text-deep-red mb-4">Platform Integrations</h3>
            <div className="row g-4">
              {integrations.map((integration, index) => (
                <div key={integration.name} className="col-md-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-100">
                      <div className="card-body p-4">
                        <div className="d-flex align-items-start justify-content-between mb-3">
                          <div className="d-flex align-items-center gap-3">
                            <div className="bg-accent-red bg-opacity-10 rounded-3 d-flex align-items-center justify-content-center"
                                 style={{ width: '48px', height: '48px' }}>
                              <integration.icon className="text-accent-red" size={24} />
                            </div>
                            <div>
                              <h5 className="fw-bold text-deep-red mb-1">{integration.name}</h5>
                              <span className={`badge ${
                                integration.status === 'Available' ? 'bg-success' : 
                                integration.status === 'Beta' ? 'bg-warning' : 'bg-secondary'
                              } text-white`}>
                                {integration.status}
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className="text-muted mb-3">{integration.description}</p>
                        <div className="mb-3">
                          <h6 className="fw-semibold text-deep-red mb-2">Features:</h6>
                          {integration.features.map((feature, idx) => (
                            <div key={idx} className="d-flex align-items-center mb-1">
                              <CheckCircle className="text-success me-2" size={14} />
                              <small className="text-muted">{feature}</small>
                            </div>
                          ))}
                        </div>
                        <Button size="sm" className="w-100" disabled={integration.status === 'Coming Soon'}>
                          {integration.status === 'Available' ? 'Setup Integration' : 
                           integration.status === 'Beta' ? 'Join Beta' : 'Coming Soon'}
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return <div>Select a category to view documentation</div>;
    }
  };

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
              className="nav-link btn btn-link text-deep-red text-decoration-none"
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
              <h1 className="display-3 fw-bold mb-4">Documentation</h1>
              <p className="lead mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                Comprehensive guides, API references, and tutorials to help you 
                make the most of CoreVerse's educational platform.
              </p>
              
              {/* Search Bar */}
              <div className="mx-auto" style={{ maxWidth: '500px' }}>
                <div className="position-relative">
                  <Search className="position-absolute text-muted" 
                          style={{ left: '16px', top: '50%', transform: 'translateY(-50%)', width: '20px', height: '20px' }} />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search documentation..."
                    className="form-control form-control-lg ps-5 py-3 border-0 rounded-4"
                    style={{ paddingLeft: '3rem' }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Documentation Content */}
      <section className="py-5 bg-white">
        <div className="container-lg">
          <div className="row">
            {/* Sidebar */}
            <div className="col-lg-3 mb-4 mb-lg-0">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <Card>
                  <div className="card-body p-4">
                    <h5 className="fw-bold text-deep-red mb-3">Categories</h5>
                    <div className="d-flex flex-column gap-2">
                      {docCategories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => setSelectedCategory(category.id)}
                          className={`btn text-start d-flex align-items-center gap-2 ${
                            selectedCategory === category.id
                              ? 'btn-custom-primary'
                              : 'btn-link text-muted'
                          }`}
                        >
                          <category.icon size={16} />
                          {category.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>

            {/* Main Content */}
            <div className="col-lg-9">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                key={selectedCategory}
              >
                {renderContent()}
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
            <h2 className="display-4 fw-bold mb-4">Need More Help?</h2>
            <p className="lead mb-5 opacity-75">
              Can't find what you're looking for? Our support team and 
              community are here to help.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <Button variant="secondary" size="lg" className="bg-white text-primary-red border-white" onClick={() => onNavigate('contact')}>
                <MessageCircle size={20} className="me-2" />
                Contact Support
              </Button>
              <Button variant="outline-secondary" size="lg" className="border-white text-white" onClick={() => onNavigate('community')}>
                <Users size={20} className="me-2" />
                Join Community
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
                  <button onClick={() => onNavigate('progress-tracking')} className="btn btn-link text-white-50 text-decoration-none p-0">
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
                  <button onClick={() => onNavigate('help-center')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Help Center
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('documentation')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Documentation
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('community')} className="btn btn-link text-white-50 text-decoration-none p-0">
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
                  <button onClick={() => onNavigate('careers')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Careers
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('privacy')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Privacy
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('terms')} className="btn btn-link text-white-50 text-decoration-none p-0">
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