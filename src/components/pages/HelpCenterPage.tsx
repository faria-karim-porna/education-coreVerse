import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen,
  Search,
  HelpCircle,
  MessageCircle,
  Video,
  FileText,
  Users,
  Lightbulb,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Star,
  Clock,
  CheckCircle,
  Play,
  Download,
  ExternalLink
} from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';

interface HelpCenterPageProps {
  onNavigate: (view: string) => void;
}

export function HelpCenterPage({ onNavigate }: HelpCenterPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const helpCategories = [
    { id: 'all', label: 'All Topics', icon: HelpCircle },
    { id: 'getting-started', label: 'Getting Started', icon: Play },
    { id: 'features', label: 'Platform Features', icon: Star },
    { id: 'troubleshooting', label: 'Troubleshooting', icon: Lightbulb },
    { id: 'account', label: 'Account Management', icon: Users },
    { id: 'billing', label: 'Billing & Payments', icon: FileText }
  ];

  const popularArticles = [
    {
      id: '1',
      title: 'Getting Started with CoreVerse',
      description: 'Complete guide to setting up your account and exploring the platform',
      category: 'getting-started',
      readTime: '5 min read',
      views: '12.5K',
      rating: 4.8
    },
    {
      id: '2',
      title: 'How to Use Virtual Labs',
      description: 'Step-by-step instructions for accessing and using STEM simulations',
      category: 'features',
      readTime: '8 min read',
      views: '9.2K',
      rating: 4.9
    },
    {
      id: '3',
      title: 'Troubleshooting Login Issues',
      description: 'Common solutions for account access and authentication problems',
      category: 'troubleshooting',
      readTime: '3 min read',
      views: '7.8K',
      rating: 4.6
    },
    {
      id: '4',
      title: 'Managing Your Subscription',
      description: 'How to upgrade, downgrade, or cancel your CoreVerse subscription',
      category: 'billing',
      readTime: '4 min read',
      views: '6.1K',
      rating: 4.7
    },
    {
      id: '5',
      title: 'Creating and Managing Classes',
      description: 'Teacher guide to setting up virtual classrooms and managing students',
      category: 'features',
      readTime: '10 min read',
      views: '5.4K',
      rating: 4.8
    },
    {
      id: '6',
      title: 'Understanding Progress Analytics',
      description: 'How to interpret and use learning analytics and progress reports',
      category: 'features',
      readTime: '6 min read',
      views: '4.9K',
      rating: 4.5
    }
  ];

  const faqs = [
    {
      question: 'How do I reset my password?',
      answer: 'Click on "Forgot Password" on the login page, enter your email address, and follow the instructions in the reset email. If you don\'t receive the email, check your spam folder or contact support.',
      category: 'account'
    },
    {
      question: 'Can I use CoreVerse on mobile devices?',
      answer: 'Yes! CoreVerse is fully responsive and works on tablets and smartphones. We also have dedicated mobile apps for iOS and Android with optimized interfaces for smaller screens.',
      category: 'getting-started'
    },
    {
      question: 'What browsers are supported?',
      answer: 'CoreVerse works best on modern browsers including Chrome, Firefox, Safari, and Edge. For the best experience with 3D simulations, we recommend using the latest version of Chrome or Firefox.',
      category: 'troubleshooting'
    },
    {
      question: 'How do I cancel my subscription?',
      answer: 'You can cancel your subscription anytime from your account settings. Go to Billing > Subscription and click "Cancel Subscription". Your access will continue until the end of your current billing period.',
      category: 'billing'
    },
    {
      question: 'Is there a student discount available?',
      answer: 'Yes! We offer significant discounts for students and educational institutions. Contact our sales team or check our pricing page for current educational pricing options.',
      category: 'billing'
    },
    {
      question: 'How do I invite students to my class?',
      answer: 'In your teacher dashboard, go to Classes > [Your Class] > Students > Invite Students. You can send invitations via email or share a class code that students can use to join.',
      category: 'features'
    }
  ];

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

  const supportOptions = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: 'Mon-Fri, 8AM-8PM EST',
      action: 'Start Chat',
      color: 'bg-primary-red'
    },
    {
      icon: FileText,
      title: 'Submit Ticket',
      description: 'Send us a detailed support request',
      availability: '24/7 Response',
      action: 'Create Ticket',
      color: 'bg-accent-red'
    },
    {
      icon: Users,
      title: 'Community Forum',
      description: 'Connect with other users and experts',
      availability: 'Always Active',
      action: 'Join Forum',
      color: 'bg-success'
    },
    {
      icon: Video,
      title: 'Video Call',
      description: 'Schedule a one-on-one support session',
      availability: 'By Appointment',
      action: 'Schedule Call',
      color: 'bg-info'
    }
  ];

  const filteredArticles = selectedCategory === 'all' 
    ? popularArticles 
    : popularArticles.filter(article => article.category === selectedCategory);

  const filteredFaqs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
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
              <h1 className="display-3 fw-bold mb-4">Help Center</h1>
              <p className="lead mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                Find answers, tutorials, and support to get the most out of CoreVerse
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
                    placeholder="Search for help articles, tutorials, or FAQs..."
                    className="form-control form-control-lg ps-5 py-3 border-0 rounded-4"
                    style={{ paddingLeft: '3rem' }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-5 bg-white">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-5"
          >
            <h2 className="display-4 fw-bold text-deep-red mb-4">Get Support</h2>
            <p className="lead text-muted">
              Choose the support option that works best for you
            </p>
          </motion.div>

          <div className="row g-4">
            {supportOptions.map((option, index) => (
              <div key={option.title} className="col-md-6 col-lg-3">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card hover className="text-center h-100">
                    <div className="card-body p-4">
                      <div className={`${option.color} rounded-circle d-inline-flex align-items-center justify-content-center mb-4`}
                           style={{ width: '64px', height: '64px' }}>
                        <option.icon className="text-white" size={32} />
                      </div>
                      <h4 className="fw-bold text-deep-red mb-2">{option.title}</h4>
                      <p className="text-muted mb-3">{option.description}</p>
                      <small className="text-muted d-block mb-3">{option.availability}</small>
                      <Button size="sm" className="w-100" onClick={() => onNavigate('contact')}>
                        {option.action}
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-5 bg-light-bg">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-5"
          >
            <h2 className="display-4 fw-bold text-deep-red mb-4">Browse by Category</h2>
            <p className="lead text-muted">
              Find help articles organized by topic
            </p>
          </motion.div>

          <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
            {helpCategories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'primary' : 'secondary'}
                onClick={() => setSelectedCategory(category.id)}
                className="d-flex align-items-center gap-2"
              >
                <category.icon size={16} />
                {category.label}
              </Button>
            ))}
          </div>

          {/* Popular Articles */}
          <div className="mb-5">
            <h3 className="h4 fw-bold text-deep-red mb-4">Popular Articles</h3>
            <div className="row g-4">
              {filteredArticles.map((article, index) => (
                <div key={article.id} className="col-md-6 col-lg-4">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card hover className="h-100">
                      <div className="card-body p-4">
                        <h5 className="fw-bold text-deep-red mb-2">{article.title}</h5>
                        <p className="text-muted small mb-3">{article.description}</p>
                        
                        <div className="d-flex align-items-center justify-content-between mb-3">
                          <div className="d-flex align-items-center gap-3 text-muted small">
                            <span className="d-flex align-items-center gap-1">
                              <Clock size={12} />
                              {article.readTime}
                            </span>
                            <span>{article.views} views</span>
                          </div>
                          <div className="d-flex align-items-center gap-1">
                            <Star className="text-warning" size={14} fill="currentColor" />
                            <span className="small fw-medium">{article.rating}</span>
                          </div>
                        </div>

                        <Button size="sm" className="w-100">
                          Read Article
                          <ArrowRight size={14} className="ms-1" />
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Tutorials */}
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
                  <Card hover>
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
                      <div className="position-absolute bottom-0 end-0 m-2">
                        <span className="badge bg-dark bg-opacity-75 text-white">
                          {video.duration}
                        </span>
                      </div>
                    </div>
                    <div className="card-body p-4">
                      <h5 className="fw-bold text-deep-red mb-2">{video.title}</h5>
                      <p className="text-muted small mb-0">{video.description}</p>
                    </div>
                  </Card>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5 bg-light-bg">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-5"
          >
            <h2 className="display-4 fw-bold text-deep-red mb-4">Frequently Asked Questions</h2>
            <p className="lead text-muted">
              Quick answers to common questions
            </p>
          </motion.div>

          <div className="row">
            <div className="col-lg-8 mx-auto">
              {filteredFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="mb-3"
                >
                  <Card>
                    <div className="card-body p-0">
                      <button
                        onClick={() => toggleFaq(index)}
                        className="btn btn-link w-100 text-start p-4 text-decoration-none d-flex align-items-center justify-content-between"
                      >
                        <span className="fw-semibold text-deep-red">{faq.question}</span>
                        {expandedFaq === index ? (
                          <ChevronUp className="text-primary-red" size={20} />
                        ) : (
                          <ChevronDown className="text-primary-red" size={20} />
                        )}
                      </button>
                      {expandedFaq === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="px-4 pb-4"
                        >
                          <p className="text-muted mb-0">{faq.answer}</p>
                        </motion.div>
                      )}
                    </div>
                  </Card>
                </motion.div>
              ))}
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
            <h2 className="display-4 fw-bold mb-4">Still Need Help?</h2>
            <p className="lead mb-5 opacity-75">
              Our support team is here to help you succeed with CoreVerse.
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
                  <button onClick={() => onNavigate('progress')} className="btn btn-link text-white-50 text-decoration-none p-0">
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