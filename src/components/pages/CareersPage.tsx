import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen,
  Users,
  ArrowLeft
} from 'lucide-react';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';
import { Banner } from '../common/Banner';
import { Footer } from '../common/Footer';
import { CompanyValues } from '../careers/CompanyValues';
import { BenefitsSection } from '../careers/BenefitsSection';
import { JobListings } from '../careers/JobListings';
import { CareersCTA } from '../careers/CareersCTA';

interface CareersPageProps {
  onNavigate: (view: string) => void;
}

export function CareersPage({ onNavigate }: CareersPageProps) {
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
      <Banner 
        title="Join Our Mission" 
        subtitle="Help us transform education and make quality STEM learning accessible to students around the world. Build the future of education with us."
      />

      {/* Company Values */}
      <CompanyValues />

      {/* Benefits */}
      <BenefitsSection />

      {/* Job Openings */}
      <JobListings onNavigate={onNavigate} />

      {/* CTA Section */}
      <CareersCTA onNavigate={onNavigate} />

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}