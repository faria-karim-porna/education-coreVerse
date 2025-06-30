import React from "react";
import { motion } from "framer-motion";
import { Users, BookOpen } from "lucide-react";
import { CTASection } from "../common/CTASection";

interface JoinCTAProps {
  onNavigate: (view: string) => void;
}

export function JoinCTA({ onNavigate }: JoinCTAProps) {
  return (
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
  );
}