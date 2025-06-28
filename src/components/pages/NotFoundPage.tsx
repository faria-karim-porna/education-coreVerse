import React from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  Search, 
  BookOpen, 
  ArrowLeft, 
  HelpCircle,
  Compass,
  RefreshCw
} from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

interface NotFoundPageProps {
  onNavigate: (view: string) => void;
}

export function NotFoundPage({ onNavigate }: NotFoundPageProps) {
  const suggestions = [
    {
      icon: Home,
      title: 'Go to Homepage',
      description: 'Return to our main page and explore CoreVerse',
      action: 'Take me home',
      color: 'bg-primary-red',
      onClick: () => onNavigate('home')
    },
    {
      icon: Search,
      title: 'Search Platform',
      description: 'Find what you\'re looking for using our search',
      action: 'Start searching',
      color: 'bg-accent-red',
      onClick: () => onNavigate('dashboard')
    },
    {
      icon: BookOpen,
      title: 'Browse Features',
      description: 'Discover our educational tools and simulations',
      action: 'Explore features',
      color: 'bg-success',
      onClick: () => onNavigate('features')
    },
    {
      icon: HelpCircle,
      title: 'Get Help',
      description: 'Contact our support team for assistance',
      action: 'Contact support',
      color: 'bg-info',
      onClick: () => onNavigate('contact')
    }
  ];

  const quickLinks = [
    { label: 'Virtual Labs', onClick: () => onNavigate('features') },
    { label: 'Study Tools', onClick: () => onNavigate('features') },
    { label: 'Progress Tracker', onClick: () => onNavigate('dashboard') },
    { label: 'Help Center', onClick: () => onNavigate('contact') },
    { label: 'Community Forum', onClick: () => onNavigate('contact') },
    { label: 'Contact Us', onClick: () => onNavigate('contact') }
  ];

  return (
    <div className="min-vh-100 bg-light-bg d-flex align-items-center">
      <div className="container-lg">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {/* Main 404 Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-5"
            >
              {/* Animated 404 */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="mb-4"
              >
                <div className="display-1 fw-bold text-primary-red mb-3" style={{ fontSize: '8rem', lineHeight: '1' }}>
                  4
                  <motion.span
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    className="d-inline-block"
                  >
                    0
                  </motion.span>
                  4
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h1 className="display-4 fw-bold text-deep-red mb-4">Page Not Found</h1>
                <p className="lead text-muted mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                  Oops! It looks like you've ventured into uncharted territory. 
                  The page you're looking for doesn't exist or may have been moved.
                </p>
              </motion.div>

              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="d-flex flex-column flex-sm-row gap-3 justify-content-center mb-5"
              >
                <Button size="lg" className="d-flex align-items-center justify-content-center" onClick={() => window.history.back()}>
                  <ArrowLeft size={20} className="me-2" />
                  Go Back
                </Button>
                <Button variant="secondary" size="lg" className="d-flex align-items-center justify-content-center" onClick={() => window.location.reload()}>
                  <RefreshCw size={20} className="me-2" />
                  Refresh Page
                </Button>
              </motion.div>
            </motion.div>

            {/* Suggestions Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mb-5"
            >
              <h2 className="h3 fw-bold text-deep-red text-center mb-4">What would you like to do?</h2>
              <div className="row g-4">
                {suggestions.map((suggestion, index) => (
                  <div key={suggestion.title} className="col-md-6 col-lg-3">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 + index * 0.1 }}
                    >
                      <Card hover className="text-center h-100">
                        <div className="card-body p-4">
                          <div className={`${suggestion.color} rounded-circle d-inline-flex align-items-center justify-content-center mb-3`}
                               style={{ width: '64px', height: '64px' }}>
                            <suggestion.icon className="text-white" size={32} />
                          </div>
                          <h4 className="fw-bold text-deep-red mb-2">{suggestion.title}</h4>
                          <p className="text-muted small mb-3">{suggestion.description}</p>
                          <Button size="sm" className="w-100" onClick={suggestion.onClick}>
                            {suggestion.action}
                          </Button>
                        </div>
                      </Card>
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
            >
              <Card>
                <div className="card-body p-5">
                  <div className="row align-items-center">
                    <div className="col-lg-4">
                      <div className="text-center text-lg-start mb-4 mb-lg-0">
                        <div className="bg-primary-red bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                             style={{ width: '64px', height: '64px' }}>
                          <Compass className="text-primary-red" size={32} />
                        </div>
                        <h3 className="h4 fw-bold text-deep-red mb-2">Quick Navigation</h3>
                        <p className="text-muted small">
                          Jump to popular sections of CoreVerse
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="row g-3">
                        {quickLinks.map((link, index) => (
                          <div key={link.label} className="col-md-6">
                            <motion.button
                              onClick={link.onClick}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 1.4 + index * 0.05 }}
                              className="btn btn-outline-primary w-100 text-start"
                            >
                              {link.label}
                            </motion.button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Fun Fact */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
              className="text-center mt-5"
            >
              <div className="bg-gradient-light rounded-4 p-4">
                <p className="text-muted small mb-0">
                  <strong>Did you know?</strong> The HTTP 404 error was named after room 404 at CERN, 
                  where the World Wide Web was invented. Even the best explorers sometimes take wrong turns!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}