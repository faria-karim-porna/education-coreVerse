import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen,
  MapPin,
  Clock,
  DollarSign,
  Users,
  Briefcase,
  Heart,
  Star,
  ArrowRight,
  Search,
  Filter,
  Building,
  Calendar,
  Award,
  TrendingUp,
  Globe,
  Code,
  Palette,
  BarChart3,
  Headphones,
  Shield
} from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';

interface CareersPageProps {
  onNavigate: (view: string) => void;
}

export function CareersPage({ onNavigate }: CareersPageProps) {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const departments = [
    { id: 'all', label: 'All Departments', icon: Building },
    { id: 'engineering', label: 'Engineering', icon: Code },
    { id: 'design', label: 'Design', icon: Palette },
    { id: 'education', label: 'Education', icon: BookOpen },
    { id: 'marketing', label: 'Marketing', icon: BarChart3 },
    { id: 'support', label: 'Support', icon: Headphones },
    { id: 'security', label: 'Security', icon: Shield }
  ];

  const locations = [
    { id: 'all', label: 'All Locations' },
    { id: 'san-francisco', label: 'San Francisco, CA' },
    { id: 'new-york', label: 'New York, NY' },
    { id: 'london', label: 'London, UK' },
    { id: 'remote', label: 'Remote' }
  ];

  const jobOpenings = [
    {
      id: '1',
      title: 'Senior Frontend Engineer',
      department: 'engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$140K - $180K',
      description: 'Build beautiful, responsive user interfaces for our educational platform using React, TypeScript, and modern web technologies.',
      requirements: ['5+ years React experience', 'TypeScript proficiency', 'UI/UX design sense', 'Educational technology interest'],
      posted: '2 days ago'
    },
    {
      id: '2',
      title: 'Product Designer',
      department: 'design',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$120K - $150K',
      description: 'Design intuitive and engaging educational experiences that help students learn complex STEM concepts effectively.',
      requirements: ['4+ years product design', 'Figma expertise', 'User research skills', 'Educational design experience'],
      posted: '1 week ago'
    },
    {
      id: '3',
      title: 'Educational Content Specialist',
      department: 'education',
      location: 'Remote',
      type: 'Full-time',
      salary: '$80K - $110K',
      description: 'Create and curate high-quality educational content for our STEM simulation platform.',
      requirements: ['PhD in STEM field', 'Curriculum development', 'Online education experience', 'Content creation skills'],
      posted: '3 days ago'
    },
    {
      id: '4',
      title: 'DevOps Engineer',
      department: 'engineering',
      location: 'London, UK',
      type: 'Full-time',
      salary: '£70K - £95K',
      description: 'Build and maintain scalable infrastructure to support millions of students worldwide.',
      requirements: ['AWS/Azure experience', 'Kubernetes knowledge', 'CI/CD expertise', 'Monitoring tools'],
      posted: '5 days ago'
    },
    {
      id: '5',
      title: 'Customer Success Manager',
      department: 'support',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$90K - $120K',
      description: 'Help educational institutions successfully implement and scale CoreVerse across their programs.',
      requirements: ['3+ years customer success', 'Education sector experience', 'Project management', 'Communication skills'],
      posted: '1 week ago'
    },
    {
      id: '6',
      title: 'Marketing Manager',
      department: 'marketing',
      location: 'Remote',
      type: 'Full-time',
      salary: '$100K - $130K',
      description: 'Drive growth and brand awareness in the educational technology market.',
      requirements: ['5+ years marketing', 'EdTech experience', 'Digital marketing', 'Analytics skills'],
      posted: '4 days ago'
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance plus wellness programs'
    },
    {
      icon: DollarSign,
      title: 'Competitive Compensation',
      description: 'Market-leading salaries, equity packages, and performance bonuses'
    },
    {
      icon: Clock,
      title: 'Flexible Schedule',
      description: 'Work-life balance with flexible hours and unlimited PTO'
    },
    {
      icon: BookOpen,
      title: 'Learning & Development',
      description: '$3,000 annual learning budget and conference attendance'
    },
    {
      icon: Globe,
      title: 'Remote-First Culture',
      description: 'Work from anywhere with quarterly team meetups'
    },
    {
      icon: Users,
      title: 'Inclusive Environment',
      description: 'Diverse, welcoming workplace with employee resource groups'
    }
  ];

  const companyValues = [
    {
      icon: Star,
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do'
    },
    {
      icon: Heart,
      title: 'Empathy',
      description: 'We put ourselves in our users\' shoes and care deeply about their success'
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'We embrace challenges and continuously learn and improve'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work together to achieve more than we could alone'
    }
  ];

  const filteredJobs = jobOpenings.filter(job => {
    const departmentMatch = selectedDepartment === 'all' || job.department === selectedDepartment;
    const locationMatch = selectedLocation === 'all' || 
      job.location.toLowerCase().includes(selectedLocation.replace('-', ' ')) ||
      (selectedLocation === 'remote' && job.location === 'Remote');
    return departmentMatch && locationMatch;
  });

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
            <button 
              onClick={() => onNavigate('careers')} 
              className="nav-link btn btn-link text-primary-red text-decoration-none fw-medium"
            >
              Careers
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
              <h1 className="display-3 fw-bold mb-4">Join Our Mission</h1>
              <p className="lead mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                Help us transform education and make quality STEM learning accessible 
                to students around the world. Build the future of education with us.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <Button variant="secondary" size="lg" className="bg-white text-primary-red border-white">
                  <Search size={20} className="me-2" />
                  View Open Positions
                </Button>
                <Button variant="outline-secondary" size="lg" className="border-white text-white" onClick={() => onNavigate('about')}>
                  <Users size={20} className="me-2" />
                  Meet Our Team
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-5 bg-white">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-5"
          >
            <h2 className="display-4 fw-bold text-deep-red mb-4">Our Values</h2>
            <p className="lead text-muted">
              The principles that guide everything we do at CoreVerse
            </p>
          </motion.div>

          <div className="row g-4">
            {companyValues.map((value, index) => (
              <div key={value.title} className="col-md-6 col-lg-3">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="text-center h-100">
                    <div className="card-body p-4">
                      <div className="bg-primary-red bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
                           style={{ width: '64px', height: '64px' }}>
                        <value.icon className="text-primary-red" size={32} />
                      </div>
                      <h4 className="fw-bold text-deep-red mb-3">{value.title}</h4>
                      <p className="text-muted">{value.description}</p>
                    </div>
                  </Card>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-5 bg-light-bg">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-5"
          >
            <h2 className="display-4 fw-bold text-deep-red mb-4">Why Work With Us?</h2>
            <p className="lead text-muted">
              We offer comprehensive benefits and a supportive work environment
            </p>
          </motion.div>

          <div className="row g-4">
            {benefits.map((benefit, index) => (
              <div key={benefit.title} className="col-md-6 col-lg-4">
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
                          <benefit.icon className="text-accent-red" size={24} />
                        </div>
                        <div>
                          <h5 className="fw-bold text-deep-red mb-2">{benefit.title}</h5>
                          <p className="text-muted mb-0">{benefit.description}</p>
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

      {/* Job Openings */}
      <section className="py-5 bg-white">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-5"
          >
            <h2 className="display-4 fw-bold text-deep-red mb-4">Open Positions</h2>
            <p className="lead text-muted">
              Find your next opportunity to make an impact in education
            </p>
          </motion.div>

          {/* Filters */}
          <div className="row g-3 mb-5">
            <div className="col-md-6">
              <label className="form-label fw-medium text-deep-red">Department</label>
              <select 
                className="form-select"
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
              >
                {departments.map(dept => (
                  <option key={dept.id} value={dept.id}>{dept.label}</option>
                ))}
              </select>
            </div>
            <div className="col-md-6">
              <label className="form-label fw-medium text-deep-red">Location</label>
              <select 
                className="form-select"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                {locations.map(location => (
                  <option key={location.id} value={location.id}>{location.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Job Listings */}
          <div className="row g-4">
            {filteredJobs.map((job, index) => (
              <div key={job.id} className="col-lg-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card hover className="h-100">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-start justify-content-between mb-3">
                        <div>
                          <h4 className="fw-bold text-deep-red mb-1">{job.title}</h4>
                          <div className="d-flex align-items-center gap-3 text-muted small">
                            <span className="d-flex align-items-center gap-1">
                              <Building size={14} />
                              {job.department.charAt(0).toUpperCase() + job.department.slice(1)}
                            </span>
                            <span className="d-flex align-items-center gap-1">
                              <MapPin size={14} />
                              {job.location}
                            </span>
                          </div>
                        </div>
                        <span className="badge bg-primary-red text-white">{job.type}</span>
                      </div>

                      <p className="text-muted mb-3">{job.description}</p>

                      <div className="mb-3">
                        <h6 className="fw-semibold text-deep-red mb-2">Requirements:</h6>
                        <ul className="list-unstyled">
                          {job.requirements.slice(0, 3).map((req, idx) => (
                            <li key={idx} className="text-muted small mb-1">
                              • {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <div className="fw-semibold text-success">{job.salary}</div>
                          <small className="text-muted">Posted {job.posted}</small>
                        </div>
                        <Button size="sm">
                          Apply Now
                          <ArrowRight size={14} className="ms-1" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-5">
              <div className="text-muted">
                <Search size={48} className="mb-3" />
                <h5>No positions found</h5>
                <p>Try adjusting your filters or check back later for new opportunities.</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-gradient-secondary text-white">
        <div className="container-lg text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="display-4 fw-bold mb-4">Ready to Make an Impact?</h2>
            <p className="lead mb-5 opacity-75">
              Don't see the perfect role? We're always looking for talented individuals 
              who share our passion for education.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <Button variant="secondary" size="lg" className="bg-white text-primary-red border-white" onClick={() => onNavigate('contact')}>
                <Users size={20} className="me-2" />
                Get in Touch
              </Button>
              <Button variant="outline-secondary" size="lg" className="border-white text-white" onClick={() => onNavigate('about')}>
                <BookOpen size={20} className="me-2" />
                Learn More About Us
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