import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen,
  FileText,
  Scale,
  Shield,
  AlertTriangle,
  CheckCircle,
  Users,
  Globe,
  Mail,
  Calendar,
  Gavel,
  CreditCard,
  RefreshCw,
  Ban
} from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';

interface TermsPageProps {
  onNavigate: (view: string) => void;
}

export function TermsPage({ onNavigate }: TermsPageProps) {
  const keyTerms = [
    {
      icon: Users,
      title: 'User Responsibilities',
      description: 'Guidelines for appropriate use of our educational platform and services'
    },
    {
      icon: Shield,
      title: 'Service Availability',
      description: 'Information about platform uptime, maintenance, and service limitations'
    },
    {
      icon: CreditCard,
      title: 'Payment Terms',
      description: 'Billing cycles, payment methods, refunds, and subscription management'
    },
    {
      icon: Scale,
      title: 'Intellectual Property',
      description: 'Rights and restrictions regarding content, software, and educational materials'
    }
  ];

  const prohibitedActivities = [
    'Sharing account credentials with unauthorized users',
    'Attempting to hack, disrupt, or damage the platform',
    'Uploading malicious software or harmful content',
    'Violating intellectual property rights',
    'Harassing or bullying other users',
    'Using the platform for commercial purposes without permission',
    'Creating fake accounts or impersonating others',
    'Attempting to circumvent security measures'
  ];

  const userRights = [
    'Access to all subscribed features and content',
    'Technical support during business hours',
    'Data portability and account management',
    'Privacy protection according to our Privacy Policy',
    'Fair use of platform resources',
    'Notification of significant service changes'
  ];

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
              <div className="bg-white bg-opacity-20 rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
                   style={{ width: '80px', height: '80px' }}>
                <FileText className="text-white" size={40} />
              </div>
              <h1 className="display-3 fw-bold mb-4">Terms of Service</h1>
              <p className="lead mb-4 mx-auto" style={{ maxWidth: '600px' }}>
                These terms govern your use of CoreVerse and outline the rights and 
                responsibilities of all users.
              </p>
              <div className="d-flex align-items-center justify-content-center gap-3 text-white-50">
                <Calendar size={16} />
                <span>Last updated: January 15, 2024</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Terms Overview */}
      <section className="py-5 bg-white">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-5"
          >
            <h2 className="display-4 fw-bold text-deep-red mb-4">Key Terms Overview</h2>
            <p className="lead text-muted">
              Understanding the main aspects of our terms of service
            </p>
          </motion.div>

          <div className="row g-4">
            {keyTerms.map((term, index) => (
              <div key={term.title} className="col-md-6 col-lg-3">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="text-center h-100">
                    <div className="card-body p-4">
                      <div className="bg-primary-red bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
                           style={{ width: '64px', height: '64px' }}>
                        <term.icon className="text-primary-red" size={32} />
                      </div>
                      <h4 className="fw-bold text-deep-red mb-3">{term.title}</h4>
                      <p className="text-muted">{term.description}</p>
                    </div>
                  </Card>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Rights and Responsibilities */}
      <section className="py-5 bg-light-bg">
        <div className="container-lg">
          <div className="row g-5">
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <Card className="h-100">
                  <div className="card-body p-5">
                    <div className="d-flex align-items-center mb-4">
                      <div className="bg-success bg-opacity-10 rounded-3 d-flex align-items-center justify-content-center me-3"
                           style={{ width: '48px', height: '48px' }}>
                        <CheckCircle className="text-success" size={24} />
                      </div>
                      <h3 className="fw-bold text-deep-red mb-0">Your Rights</h3>
                    </div>
                    <p className="text-muted mb-4">
                      As a CoreVerse user, you are entitled to these rights and protections:
                    </p>
                    <div className="d-flex flex-column gap-3">
                      {userRights.map((right, index) => (
                        <div key={index} className="d-flex align-items-start">
                          <CheckCircle className="text-success me-2 mt-1 flex-shrink-0" size={16} />
                          <span className="text-muted">{right}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>

            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <Card className="h-100">
                  <div className="card-body p-5">
                    <div className="d-flex align-items-center mb-4">
                      <div className="bg-danger bg-opacity-10 rounded-3 d-flex align-items-center justify-content-center me-3"
                           style={{ width: '48px', height: '48px' }}>
                        <Ban className="text-danger" size={24} />
                      </div>
                      <h3 className="fw-bold text-deep-red mb-0">Prohibited Activities</h3>
                    </div>
                    <p className="text-muted mb-4">
                      The following activities are strictly prohibited on our platform:
                    </p>
                    <div className="d-flex flex-column gap-3">
                      {prohibitedActivities.map((activity, index) => (
                        <div key={index} className="d-flex align-items-start">
                          <AlertTriangle className="text-danger me-2 mt-1 flex-shrink-0" size={16} />
                          <span className="text-muted">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Terms */}
      <section className="py-5 bg-white">
        <div className="container-lg">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Card>
                  <div className="card-body p-5">
                    <h3 className="h2 fw-bold text-deep-red mb-4">Complete Terms of Service</h3>
                    
                    <div className="mb-5">
                      <h4 className="fw-bold text-deep-red mb-3">1. Acceptance of Terms</h4>
                      <p className="text-muted mb-3">
                        By accessing or using CoreVerse, you agree to be bound by these Terms of Service 
                        and all applicable laws and regulations. If you do not agree with any of these 
                        terms, you are prohibited from using or accessing this site.
                      </p>
                    </div>

                    <div className="mb-5">
                      <h4 className="fw-bold text-deep-red mb-3">2. Description of Service</h4>
                      <p className="text-muted mb-3">
                        CoreVerse provides an educational platform featuring virtual laboratories, 
                        interactive simulations, and collaborative learning tools for STEM education. 
                        We reserve the right to modify or discontinue any aspect of the service at any time.
                      </p>
                    </div>

                    <div className="mb-5">
                      <h4 className="fw-bold text-deep-red mb-3">3. User Accounts</h4>
                      <p className="text-muted mb-3">
                        You are responsible for maintaining the confidentiality of your account credentials 
                        and for all activities that occur under your account. You must notify us immediately 
                        of any unauthorized use of your account.
                      </p>
                    </div>

                    <div className="mb-5">
                      <h4 className="fw-bold text-deep-red mb-3">4. Payment and Billing</h4>
                      <p className="text-muted mb-3">
                        Subscription fees are billed in advance on a monthly or annual basis. All fees are 
                        non-refundable except as required by law. We reserve the right to change our pricing 
                        with 30 days' notice.
                      </p>
                    </div>

                    <div className="mb-5">
                      <h4 className="fw-bold text-deep-red mb-3">5. Intellectual Property</h4>
                      <p className="text-muted mb-3">
                        The service and its original content, features, and functionality are owned by 
                        CoreVerse and are protected by international copyright, trademark, patent, 
                        trade secret, and other intellectual property laws.
                      </p>
                    </div>

                    <div className="mb-5">
                      <h4 className="fw-bold text-deep-red mb-3">6. User Content</h4>
                      <p className="text-muted mb-3">
                        You retain ownership of content you submit to the platform. By submitting content, 
                        you grant us a worldwide, non-exclusive license to use, reproduce, and distribute 
                        your content in connection with the service.
                      </p>
                    </div>

                    <div className="mb-5">
                      <h4 className="fw-bold text-deep-red mb-3">7. Privacy Policy</h4>
                      <p className="text-muted mb-3">
                        Your privacy is important to us. Please review our Privacy Policy, which also 
                        governs your use of the service, to understand our practices regarding the 
                        collection and use of your information.
                      </p>
                    </div>

                    <div className="mb-5">
                      <h4 className="fw-bold text-deep-red mb-3">8. Termination</h4>
                      <p className="text-muted mb-3">
                        We may terminate or suspend your account and access to the service immediately, 
                        without prior notice, for conduct that we believe violates these Terms of Service 
                        or is harmful to other users, us, or third parties.
                      </p>
                    </div>

                    <div className="mb-5">
                      <h4 className="fw-bold text-deep-red mb-3">9. Limitation of Liability</h4>
                      <p className="text-muted mb-3">
                        In no event shall CoreVerse be liable for any indirect, incidental, special, 
                        consequential, or punitive damages, including without limitation, loss of profits, 
                        data, use, goodwill, or other intangible losses.
                      </p>
                    </div>

                    <div className="mb-5">
                      <h4 className="fw-bold text-deep-red mb-3">10. Governing Law</h4>
                      <p className="text-muted mb-3">
                        These Terms shall be interpreted and governed by the laws of the State of California, 
                        without regard to its conflict of law provisions. Any disputes shall be resolved 
                        in the courts of San Francisco County, California.
                      </p>
                    </div>

                    <div className="mb-5">
                      <h4 className="fw-bold text-deep-red mb-3">11. Changes to Terms</h4>
                      <p className="text-muted mb-3">
                        We reserve the right to modify these terms at any time. We will notify users of 
                        material changes via email or through the platform. Continued use of the service 
                        after changes constitutes acceptance of the new terms.
                      </p>
                    </div>

                    <div className="bg-light-bg rounded-3 p-4">
                      <h5 className="fw-bold text-deep-red mb-3">Contact Information</h5>
                      <p className="text-muted mb-3">
                        If you have any questions about these Terms of Service, please contact us:
                      </p>
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <Mail className="text-primary-red" size={16} />
                        <span>legal@coreverse.edu</span>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <Globe className="text-primary-red" size={16} />
                        <span>CoreVerse Legal Team, 123 Innovation Drive, San Francisco, CA 94105</span>
                      </div>
                    </div>
                  </div>
                </Card>
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
            <h2 className="display-4 fw-bold mb-4">Questions About Our Terms?</h2>
            <p className="lead mb-5 opacity-75">
              Our legal team is available to help clarify any aspects of our terms of service.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <Button variant="secondary" size="lg" className="bg-white text-primary-red border-white" onClick={() => onNavigate('contact')}>
                <Mail size={20} className="me-2" />
                Contact Legal Team
              </Button>
              <Button variant="outline-secondary" size="lg" className="border-white text-white" onClick={() => onNavigate('help-center')}>
                <FileText size={20} className="me-2" />
                Legal Help Center
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