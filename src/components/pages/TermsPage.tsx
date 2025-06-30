import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen,
  FileText,
  Calendar,
  Mail,
  FileText as FileTextIcon
} from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { Navbar } from '../common/Navbar';
import { CTASection } from '../common/CTASection';
import { Footer } from '../common/Footer';
import { KeyTermsOverview } from '../terms/KeyTermsOverview';
import { UserRightsResponsibilities } from '../terms/UserRightsResponsibilities';
import { DetailedTerms } from '../terms/DetailedTerms';

interface TermsPageProps {
  onNavigate: (view: string) => void;
}

export function TermsPage({ onNavigate }: TermsPageProps) {
  return (
    <div className="min-vh-100 bg-light-bg">
      {/* Navigation */}
      <Navbar onNavigate={onNavigate} />

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
      <KeyTermsOverview />

      {/* User Rights and Responsibilities */}
      <UserRightsResponsibilities />

      {/* Detailed Terms */}
      <DetailedTerms />

      {/* CTA Section */}
      <CTASection
        className="bg-gradient-secondary"
        title="Questions About Our Terms?"
        subtitle="Our legal team is available to help clarify any aspects of our terms of service."
        primaryButtonText="Contact Legal Team"
        primaryButtonLink="contact"
        primaryButtonIcon={Mail}
        secondaryButtonText="Legal Help Center"
        secondaryButtonLink="help-center"
        secondaryButtonIcon={FileTextIcon}
        onNavigate={onNavigate}
      />

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}