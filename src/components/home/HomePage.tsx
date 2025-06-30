import React from "react";
import { Navbar } from "../common/Navbar";
import { HeroSection } from "./sections/HeroSection";
import { StatsSection } from "./sections/StatsSection";
import { TiltCardSection } from "./sections/TiltCardSection";
import { GlobalImpactSection } from "./sections/GlobalImpactSection";
import { SubjectsSection } from "./sections/SubjectsSection";
import { HowItWorksSection } from "./sections/HowItWorksSection";
import { UpcomingEventsSection } from "./sections/UpcomingEventsSection";
import { SuccessStoriesSection } from "./sections/SuccessStoriesSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { LearnAnywhereSection } from "./sections/LearnAnywhereSection";
import { WhyChooseSection } from "./sections/WhyChooseSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { CTASection } from "../common/CTASection";
import { Footer } from "../common/Footer";

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
      <HowItWorksSection />
      <UpcomingEventsSection />
      <SuccessStoriesSection />
      <TestimonialsSection />
      <LearnAnywhereSection />
      <WhyChooseSection />
      <FeaturesSection onNavigate={onNavigate} />
      <CTASection
        className="bg-gradient-primary"
        title="Ready to Transform Education?"
        subtitle="Join thousands of educators and students already using CoreVerse to enhance their learning experience."
        buttonText="Start Free Trial"
        onNavigate={onNavigate}
      />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
