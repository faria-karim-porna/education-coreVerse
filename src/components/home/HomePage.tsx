import React from 'react';
import { NavigationBar } from './sections/NavigationBar';
import { HeroSection } from './sections/HeroSection';
import { StatsSection } from './sections/StatsSection';
import { InteractiveTiltCard } from './sections/InteractiveTiltCard';
import { SubjectsSection } from './sections/SubjectsSection';
import { FeaturesSection } from './sections/FeaturesSection';
import { GlobalImpactSection } from './sections/GlobalImpactSection';
import { CareerPathwaysSection } from './sections/CareerPathwaysSection';
import { UpcomingEventsSection } from './sections/UpcomingEventsSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { IntegrationSection } from './sections/IntegrationSection';
import { CTASection } from './sections/CTASection';
import { FooterSection } from './sections/FooterSection';

interface HomePageProps {
  onNavigate: (view: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-vh-100 bg-light-bg">
      <NavigationBar onNavigate={onNavigate} />
      <HeroSection onNavigate={onNavigate} />
      <StatsSection />
      <InteractiveTiltCard />
      <SubjectsSection onNavigate={onNavigate} />
      <FeaturesSection />
      <GlobalImpactSection />
      <CareerPathwaysSection onNavigate={onNavigate} />
      <UpcomingEventsSection />
      <TestimonialsSection />
      <IntegrationSection onNavigate={onNavigate} />
      <CTASection onNavigate={onNavigate} />
      <FooterSection onNavigate={onNavigate} />
    </div>
  );
}