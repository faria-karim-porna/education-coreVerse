import React from 'react';
import { 
  Shield,
  Mail,
  FileText
} from 'lucide-react';
import { Navbar } from '../common/Navbar';
import { CTASection } from '../common/CTASection';
import { Footer } from '../common/Footer';
import { PageHero } from '../common/PageHero';
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
      <PageHero 
        title="Privacy Policy"
        subtitle="Your privacy is fundamental to our mission. Learn how we protect, use, and respect your personal information."
        icon={Shield}
        lastUpdated="January 15, 2024"
      />

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