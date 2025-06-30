import React from 'react';
import { 
  FileText,
  Mail,
  FileText as FileTextIcon
} from 'lucide-react';
import { Navbar } from '../common/Navbar';
import { CTASection } from '../common/CTASection';
import { Footer } from '../common/Footer';
import { PageHero } from '../common/PageHero';
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
      <PageHero 
        title="Terms of Service"
        subtitle="These terms govern your use of CoreVerse and outline the rights and responsibilities of all users."
        icon={FileText}
        lastUpdated="January 15, 2024"
      />

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