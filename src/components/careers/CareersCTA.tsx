import React from 'react';
import { Users, BookOpen } from 'lucide-react';
import { CTASection } from '../common/CTASection';

interface CareersCTAProps {
  onNavigate: (view: string) => void;
}

export function CareersCTA({ onNavigate }: CareersCTAProps) {
  return (
    <CTASection
      className="bg-gradient-secondary"
      title="Ready to Make an Impact?"
      subtitle="Don't see the perfect role? We're always looking for talented individuals who share our passion for education."
      primaryButtonText="Get in Touch"
      primaryButtonLink="contact"
      primaryButtonIcon={Users}
      secondaryButtonText="Learn More About Us"
      secondaryButtonLink="about"
      secondaryButtonIcon={BookOpen}
      onNavigate={onNavigate}
    />
  );
}