import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "../../ui/Button";

interface HeroSectionProps {
  onNavigate: (view: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="position-relative overflow-hidden bg-gradient-light py-5">
      <div className="container-lg py-5">
        <div className="text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="display-3 display-lg-2 fw-bold text-deep-red mb-4 lh-1">
              Transform Your
              <span className="text-primary-red d-block">Learning Journey</span>
            </h1>
            <p className="lead text-muted mb-5 mx-auto" style={{ maxWidth: "600px" }}>
              Experience interactive STEM education with virtual labs, scientific tools, and collaborative classrooms designed for modern
              learners.
            </p>
            
            {/* Animated Book */}
            <div className="book-container mb-5">
              <div className="book">
                <motion.div 
                  className="cover"
                  animate={{ 
                    rotateY: [0, 180]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                ></motion.div>
                
                {[...Array(5)].map((_, i) => (
                  <motion.div 
                    key={i} 
                    className="page"
                    animate={{ 
                      rotateY: [0, 180]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      delay: 0.7 + (i * 0.2)
                    }}
                  ></motion.div>
                ))}
              </div>
            </div>
            
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <Button size="lg" className="justify-content-center" onClick={() => onNavigate("dashboard")}>
                Start Learning Today
                <ArrowRight size={20} className="ms-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}