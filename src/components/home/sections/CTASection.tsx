import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../ui/Button";

interface CTASectionProps {
  onNavigate: (view: string) => void;
}

export function CTASection({ onNavigate }: CTASectionProps) {
  return (
    <section className="py-5 bg-gradient-primary text-white position-relative">
      {/* Wavy divider at the top */}
      <div className="wavy-divider wavy-divider-top"></div>
      
      {/* Paper cut out decorative elements */}
      <div className="star star-1 float-slow" style={{ top: '20%', left: '10%' }}></div>
      <div className="star star-2 float" style={{ top: '30%', right: '15%' }}></div>
      <div className="star star-3 float-fast" style={{ top: '15%', left: '50%' }}></div>
      <div className="moon float-slow" style={{ top: '25%', right: '10%' }}></div>
      
      <div className="container-lg text-center position-relative" style={{ zIndex: 5 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h2 className="display-4 fw-bold mb-4">Ready to Transform Education?</h2>
          <p className="lead mb-5 opacity-75">
            Join thousands of educators and students already using CoreVerse to enhance their learning experience.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <Button
              variant="secondary"
              size="lg"
              className="btn-custom-white"
              onClick={() => onNavigate("dashboard")}
            >
              Start Free Trial
            </Button>
          </div>
        </motion.div>
      </div>
      
      {/* Wavy divider at the bottom */}
      <div className="wavy-divider wavy-divider-bottom"></div>
    </section>
  );
}