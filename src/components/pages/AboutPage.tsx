import React from "react";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { Button } from "../ui/Button";
import { ThemeToggle } from "../ui/ThemeToggle";
import { Footer } from "../common/Footer";
import { AboutHero } from "../about/AboutHero";
import { MissionVisionValues } from "../about/MissionVisionValues";
import { ImpactStats } from "../about/ImpactStats";
import { CompanyTimeline } from "../about/CompanyTimeline";
import { TeamSection } from "../about/TeamSection";
import { JoinCTA } from "../about/JoinCTA";
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
      <JoinCTA onNavigate={onNavigate} />

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
