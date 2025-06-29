import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "../../ui/Button";

interface HeroSectionProps {
  onNavigate: (view: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="position-relative overflow-hidden bg-gradient-primary py-5" style={{ minHeight: '90vh' }}>
      {/* Paper cut out decorative elements */}
      <div className="cloud cloud-1 float-slow"></div>
      <div className="cloud cloud-2 float"></div>
      <div className="cloud cloud-3 float-fast"></div>
      
      <div className="star star-1 float-fast"></div>
      <div className="star star-2 float"></div>
      <div className="star star-3 float-slow"></div>
      <div className="star star-4 float-fast"></div>
      <div className="star star-5 float"></div>
      
      <div className="moon float-slow"></div>
      
      <div className="container-lg py-5 position-relative" style={{ zIndex: 5 }}>
        <div className="text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <h1 className="display-3 display-lg-2 fw-bold text-white mb-4 lh-1">
              Transform Your
              <span className="d-block">Learning Journey</span>
            </h1>
            <p className="lead text-white text-opacity-75 mb-5 mx-auto" style={{ maxWidth: "600px" }}>
              Experience interactive STEM education with virtual labs, scientific tools, and collaborative classrooms designed for modern
              learners.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <Button size="lg" className="justify-content-center" onClick={() => onNavigate("dashboard")}>
                Start Learning Today
                <ArrowRight size={20} className="ms-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Wavy divider at the bottom */}
      <div className="wavy-divider wavy-divider-bottom"></div>
    </section>
  );
}