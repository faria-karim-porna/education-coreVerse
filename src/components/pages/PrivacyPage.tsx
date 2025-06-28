import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen,
  Shield,
  Eye,
  Lock,
  Database,
  Users,
  Globe,
  Mail,
  Calendar,
  CheckCircle,
  AlertTriangle,
  FileText,
  Settings
} from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';

interface PrivacyPageProps {
  onNavigate: (view: string) => void;
}

export function PrivacyPage({ onNavigate }: PrivacyPageProps) {
  const privacyPrinciples = [
    {
      icon: Shield,
      title: 'Data Protection',
      description: 'We use industry-standard encryption and security measures to protect your personal information.'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'We clearly explain what data we collect, how we use it, and who we share it with.'
    },
    {
      icon: Users,
      title: 'User Control',
      description: 'You have full control over your data with options to access, modify, or delete your information.'
    },
    {
      icon: Lock,
      title: 'Minimal Collection',
      description: 'We only collect data that is necessary to provide and improve our educational services.'
    }
  ];

  const dataTypes = [
    {
      category: 'Account Information',
      items: ['Name and email address', 'Profile picture', 'Educational institution', 'Role (student/teacher)'],
      purpose: 'To create and manage your account, provide personalized experiences'
    },
    {
      category: 'Educational Data',
      items: ['Course progress', 'Assignment submissions', 'Quiz results', 'Learning analytics'],
      purpose: 'To track progress, provide feedback, and improve learning outcomes'
    },
    {
      category: 'Usage Information',
      items: ['Platform interactions', 'Feature usage', 'Session duration', 'Device information'],
      purpose: 'To improve platform performance and user experience'
    },
    {
      category: 'Communication Data',
      items: ['Messages in forums', 'Support tickets', 'Feedback submissions'],
      purpose: 'To facilitate communication and provide customer support'
    }
  ];

  const userRights = [
    {
      icon: Eye,
      title: 'Right to Access',
      description: 'Request a copy of all personal data we have about you'
    },
    {
      icon: Settings,
      title: 'Right to Rectification',
      description: 'Correct any inaccurate or incomplete personal data'
    },
    {
      icon: AlertTriangle,
      title: 'Right to Erasure',
      description: 'Request deletion of your personal data under certain conditions'
    },
    {
      icon: Database,
      title: 'Right to Portability',
      description: 'Receive your data in a structured, machine-readable format'
    },
    {
      icon: Shield,
      title: 'Right to Object',
      description: 'Object to processing of your personal data for certain purposes'
    },
    {
      icon: Lock,
      title: 'Right to Restrict',
      description: 'Request restriction of processing under certain circumstances'
    }
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
                <Shield className="text-white" size={40} />
              </div>
              <h1 className="display-3 fw-bold mb-4">Privacy Policy</h1>
              <p className="lead mb-4 mx-auto" style={{ maxWidth: '600px' }}>
                Your privacy is fundamental to our mission. Learn how we protect, 
                use, and respect your personal information.
              </p>
              <div className="d-flex align-items-center justify-content-center gap-3 text-white-50">
                <Calendar size={16} />
                <span>Last updated: January 15, 2024</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-5 bg-white">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-5"
          >
            <h2 className="display-4 fw-bold text-deep-red mb-4">Our Privacy Principles</h2>
            <p className="lead text-muted">
              These core principles guide how we handle your personal information
            </p>
          </motion.div>

          <div className="row g-4">
            {privacyPrinciples.map((principle, index) => (
              <div key={principle.title} className="col-md-6 col-lg-3">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="text-center h-100">
                    <div className="card-body p-4">
                      <div className="bg-primary-red bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
                           style={{ width: '64px', height: '64px' }}>
                        <principle.icon className="text-primary-red" size={32} />
                      </div>
                      <h4 className="fw-bold text-deep-red mb-3">{principle.title}</h4>
                      <p className="text-muted">{principle.description}</p>
                    </div>
                  </Card>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Collection */}
      <section className="py-5 bg-light-bg">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-5"
          >
            <h2 className="display-4 fw-bold text-deep-red mb-4">What Data We Collect</h2>
            <p className="lead text-muted">
              We collect only the information necessary to provide our educational services
            </p>
          </motion.div>

          <div className="row g-4">
            {dataTypes.map((dataType, index) => (
              <div key={dataType.category} className="col-lg-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-100">
                    <div className="card-body p-4">
                      <h4 className="fw-bold text-deep-red mb-3">{dataType.category}</h4>
                      <div className="mb-3">
                        {dataType.items.map((item, idx) => (
                          <div key={idx} className="d-flex align-items-center mb-2">
                            <CheckCircle className="text-success me-2 flex-shrink-0" size={16} />
                            <span className="text-muted">{item}</span>
                          </div>
                        ))}
                      </div>
                      <div className="bg-light-bg rounded-3 p-3">
                        <h6 className="fw-semibold text-deep-red mb-2">Purpose:</h6>
                        <p className="text-muted small mb-0">{dataType.purpose}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-5 bg-white">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-5"
          >
            <h2 className="display-4 fw-bold text-deep-red mb-4">Your Privacy Rights</h2>
            <p className="lead text-muted">
              You have comprehensive rights regarding your personal data
            </p>
          </motion.div>

          <div className="row g-4">
            {userRights.map((right, index) => (
              <div key={right.title} className="col-md-6 col-lg-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card hover className="h-100">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-start">
                        <div className="bg-accent-red bg-opacity-10 rounded-3 d-flex align-items-center justify-content-center me-3 flex-shrink-0"
                             style={{ width: '48px', height: '48px' }}>
                          <right.icon className="text-accent-red" size={24} />
                        </div>
                        <div>
                          <h5 className="fw-bold text-deep-red mb-2">{right.title}</h5>
                          <p className="text-muted mb-0">{right.description}</p>
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

      {/* Detailed Policy */}
      <section className="py-5 bg-light-bg">
        <div className="container-lg">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Card>
                  <div className="card-body p-5">
                    <h3 className="h2 fw-bold text-deep-red mb-4">Detailed Privacy Policy</h3>
                    
                    <div className="mb-5">
                      <h4 className="fw-bold text-deep-red mb-3">1. Information We Collect</h4>
                      <p className="text-muted mb-3">
                        We collect information you provide directly to us, such as when you create an account, 
                        use our services, or contact us for support. This includes personal information like 
                        your name, email address, and educational data.
                      </p>
                    </div>

                    <div className="mb-5">
                      <h4 className="fw-bold text-deep-red mb-3">2. How We Use Your Information</h4>
                      <p className="text-muted mb-3">
                        We use the information we collect to provide, maintain, and improve our services, 
                        process transactions, send communications, and comply with legal obligations.
                      </p>
                    </div>

                    <div className="mb-5">
                      <h4 className="fw-bold text-deep-red mb-3">3. Information Sharing</h4>
                      <p className="text-muted mb-3">
                        We do not sell, trade, or otherwise transfer your personal information to third parties 
                        without your consent, except as described in this policy or as required by law.
                      </p>
                    </div>

                    <div className="mb-5">
                      <h4 className="fw-bold text-deep-red mb-3">4. Data Security</h4>
                      <p className="text-muted mb-3">
                        We implement appropriate technical and organizational measures to protect your personal 
                        information against unauthorized access, alteration, disclosure, or destruction.
                      </p>
                    </div>

                    <div className="mb-5">
                      <h4 className="fw-bold text-deep-red mb-3">5. Data Retention</h4>
                      <p className="text-muted mb-3">
                        We retain your personal information for as long as necessary to provide our services 
                        and fulfill the purposes outlined in this policy, unless a longer retention period 
                        is required by law.
                      </p>
                    </div>

                    <div className="mb-5">
                      <h4 className="fw-bold text-deep-red mb-3">6. International Transfers</h4>
                      <p className="text-muted mb-3">
                        Your information may be transferred to and processed in countries other than your own. 
                        We ensure appropriate safeguards are in place to protect your information.
                      </p>
                    </div>

                    <div className="mb-5">
                      <h4 className="fw-bold text-deep-red mb-3">7. Children's Privacy</h4>
                      <p className="text-muted mb-3">
                        We take special care to protect the privacy of children under 13. We do not knowingly 
                        collect personal information from children under 13 without parental consent.
                      </p>
                    </div>

                    <div className="mb-5">
                      <h4 className="fw-bold text-deep-red mb-3">8. Changes to This Policy</h4>
                      <p className="text-muted mb-3">
                        We may update this privacy policy from time to time. We will notify you of any 
                        material changes by posting the new policy on this page and updating the 
                        "last updated" date.
                      </p>
                    </div>

                    <div className="bg-light-bg rounded-3 p-4">
                      <h5 className="fw-bold text-deep-red mb-3">Contact Us About Privacy</h5>
                      <p className="text-muted mb-3">
                        If you have questions about this privacy policy or our privacy practices, 
                        please contact our Data Protection Officer:
                      </p>
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <Mail className="text-primary-red" size={16} />
                        <span>privacy@coreverse.edu</span>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <Globe className="text-primary-red" size={16} />
                        <span>CoreVerse Privacy Team, 123 Innovation Drive, San Francisco, CA 94105</span>
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
            <h2 className="display-4 fw-bold mb-4">Questions About Privacy?</h2>
            <p className="lead mb-5 opacity-75">
              Our privacy team is here to help you understand how we protect your data.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <Button variant="secondary" size="lg" className="bg-white text-primary-red border-white" onClick={() => onNavigate('contact')}>
                <Mail size={20} className="me-2" />
                Contact Privacy Team
              </Button>
              <Button variant="outline-secondary" size="lg" className="border-white text-white" onClick={() => onNavigate('help-center')}>
                <FileText size={20} className="me-2" />
                Privacy Help Center
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