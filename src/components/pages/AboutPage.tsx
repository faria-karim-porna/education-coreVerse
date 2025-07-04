import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Users } from "lucide-react";
import { Button } from "../ui/Button";
import { ThemeToggle } from "../ui/ThemeToggle";
import { Footer } from "../common/Footer";
import { AboutHero } from "../about/AboutHero";
import { MissionVisionValues } from "../about/MissionVisionValues";
import { ImpactStats } from "../about/ImpactStats";
import { CompanyTimeline } from "../about/CompanyTimeline";
import { TeamSection } from "../about/TeamSection";
import { CTASection } from "../common/CTASection";
import { Navbar } from "../common/Navbar";

interface AboutPageProps {
  onNavigate: (view: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="min-vh-100 bg-light-bg">
      {/* Navigation */}
      <Navbar onNavigate={onNavigate} />

      {/* Hero Section */}
      <AboutHero onNavigate={onNavigate} />

      {/* Mission, Vision, Values */}
      <MissionVisionValues />

      {/* Impact Statistics */}
      <ImpactStats />

      {/* Timeline */}
      <CompanyTimeline />

      {/* Team Section */}
      <TeamSection />

      {/* CTA Section */}
      <CTASection
        className="bg-gradient-secondary"
        title="Join Our Mission"
        subtitle="Be part of the educational revolution. Whether you're an educator, student, or passionate about learning, there's a place for you at CoreVerse."
        primaryButtonText="Join Our Community"
        primaryButtonLink="community"
        primaryButtonIcon={Users}
        secondaryButtonText="Career Opportunities"
        secondaryButtonLink="careers"
        secondaryButtonIcon={BookOpen}
        onNavigate={onNavigate}
      />

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}