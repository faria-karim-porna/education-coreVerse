import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen,
  Shield,
  Calendar,
  Mail,
  FileText
} from 'lucide-react';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';
import { Navbar } from '../common/Navbar';
import { CTASection } from '../common/CTASection';
import { Footer } from '../common/Footer';
import { PrivacyPrinciples } from '../privacy/PrivacyPrinciples';
import { DataCollection } from '../privacy/DataCollection';
import { UserRights } from '../privacy/UserRights';
import { DetailedPolicy } from '../privacy/DetailedPolicy';

interface PrivacyPageProps {
  onNavigate: (view: string) => void;
}

export function PrivacyPage({ onNavigate }: PrivacyPageProps) {
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
      <PrivacyPrinciples />

      {/* Data Collection */}
      <DataCollection />

      {/* Your Rights */}
      <UserRights />

      {/* Detailed Policy */}
      <DetailedPolicy />

      {/* CTA Section */}
      <CTASection
        className="bg-gradient-secondary"
        title="Questions About Privacy?"
        subtitle="Our privacy team is here to help you understand how we protect your data."
        primaryButtonText="Contact Privacy Team"
        primaryButtonLink="contact"
        primaryButtonIcon={Mail}
        secondaryButtonText="Privacy Help Center"
        secondaryButtonLink="help-center"
        secondaryButtonIcon={FileText}
        onNavigate={onNavigate}
      />

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}