import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Users, ArrowLeft } from "lucide-react";
import { Button } from "../ui/Button";
import { ThemeToggle } from "../ui/ThemeToggle";
import { Banner } from "../common/Banner";
import { Footer } from "../common/Footer";
import { CompanyValues } from "../careers/CompanyValues";
import { BenefitsSection } from "../careers/BenefitsSection";
import { JobListings } from "../careers/JobListings";
import { CTASection } from "../common/CTASection";
import { Navbar } from "../common/Navbar";

interface CareersPageProps {
  onNavigate: (view: string) => void;
}

export function CareersPage({ onNavigate }: CareersPageProps) {
  return (
    <div className="min-vh-100 bg-light-bg">
      {/* Navigation */}
      <Navbar onNavigate={onNavigate} />
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

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}