import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";

interface CTASectionProps {
  className?: string;
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  primaryButtonIcon?: React.ComponentType<{ size?: number; className?: string }>;
  secondaryButtonIcon?: React.ComponentType<{ size?: number; className?: string }>;
  onNavigate: (view: string) => void;
}

export function CTASection({ 
  className, 
  title = "Ready to Get Started?", 
  subtitle = "Join thousands of users already using our platform", 
  primaryButtonText = "Get Started", 
  primaryButtonLink = "dashboard",
  secondaryButtonText,
  secondaryButtonLink,
  primaryButtonIcon,
  secondaryButtonIcon,
  onNavigate 
}: CTASectionProps) {
  return (
    <section className={`py-5 text-white ${className ?? ""}`}>
      <div className="container-lg text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h2 className="display-4 fw-bold mb-4">{title}</h2>
          <p className="lead mb-5 opacity-75">{subtitle}</p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <Button 
              variant="secondary" 
              size="lg" 
              className="btn-custom-white" 
              onClick={() => onNavigate(primaryButtonLink)}
              icon={primaryButtonIcon}
            >
              {primaryButtonText}
            </Button>
            
            {secondaryButtonText && (
              <Button 
                variant="outline-secondary" 
                size="lg" 
                className="border-white text-white" 
                onClick={() => onNavigate(secondaryButtonLink || "dashboard")}
                icon={secondaryButtonIcon}
              >
                {secondaryButtonText}
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}