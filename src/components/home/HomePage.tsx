import React from 'react';
import { Navbar } from './sections/Navbar';
import { HeroSection } from './sections/HeroSection';
import { StatsSection } from './sections/StatsSection';
import { TiltCardSection } from './sections/TiltCardSection';
import { GlobalImpactSection } from './sections/GlobalImpactSection';
import { SubjectsSection } from './sections/SubjectsSection';
import { CareerPathwaysSection } from './sections/CareerPathwaysSection';
import { HowItWorksSection } from './sections/HowItWorksSection';
import { UpcomingEventsSection } from './sections/UpcomingEventsSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { LearnAnywhereSection } from './sections/LearnAnywhereSection';
import { WhyChooseSection } from './sections/WhyChooseSection';
import { FeaturesSection } from './sections/FeaturesSection';
import { PricingSection } from './sections/PricingSection';
import { CTASection } from './sections/CTASection';
import { Footer } from './sections/Footer';

interface HomePageProps {
  onNavigate: (view: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-vh-100 bg-light-bg">
      <Navbar onNavigate={onNavigate} />
      <HeroSection onNavigate={onNavigate} />
      <StatsSection />
      <TiltCardSection />
      <GlobalImpactSection />
      <SubjectsSection onNavigate={onNavigate} />
      <CareerPathwaysSection onNavigate={onNavigate} />
      <HowItWorksSection />
      <UpcomingEventsSection />
      <TestimonialsSection />
      <LearnAnywhereSection />
      <WhyChooseSection />
      <FeaturesSection onNavigate={onNavigate} />
      <PricingSection onNavigate={onNavigate} />
      <CTASection onNavigate={onNavigate} />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}