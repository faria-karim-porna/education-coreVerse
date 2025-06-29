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
            <div className="d-flex justify-content-center mb-5 position-relative" style={{ height: "350px" }}>
              <div className="book">
                <div className="gap"></div>
                <div className="outer-covers">
                  <div className="outer-cover"></div>
                  <div className="outer-cover"></div>
                </div>
                <div className="gap"></div>
                <div className="covers">
                  <div className="cover">Educational Journey</div>
                  <div className="cover"></div>
                </div>
                <div className="gap"></div>
                <div className="pages">
                  <div className="page">
                    <div className="page-content">
                      <div className="page-title">Physics Lab</div>
                      <p className="page-text">Explore the fundamental laws of nature through interactive simulations and experiments.</p>
                    </div>
                  </div>
                  <div className="page">
                    <div className="page-content">
                      <div className="page-title">Chemistry</div>
                      <p className="page-text">Discover molecular structures and reactions in our virtual chemistry laboratory.</p>
                    </div>
                  </div>
                  <div className="page">
                    <div className="page-content">
                      <div className="page-title">Biology</div>
                      <p className="page-text">Explore cells, genetics, and ecosystems with detailed interactive models.</p>
                    </div>
                  </div>
                  <div className="page">
                    <div className="page-content">
                      <div className="page-title">Mathematics</div>
                      <p className="page-text">Master complex concepts with visual tools and step-by-step problem solving.</p>
                    </div>
                  </div>
                  <div className="page">
                    <div className="page-content">
                      <div className="page-title">Virtual Classroom</div>
                      <p className="page-text">Connect with teachers and peers in our collaborative learning environment.</p>
                    </div>
                  </div>
                  <div className="page">
                    <div className="page-content">
                      <div className="page-title">Progress Tracking</div>
                      <p className="page-text">Monitor your learning journey with detailed analytics and achievements.</p>
                    </div>
                  </div>
                </div>
                <div className="flips">
                  <div className="flip flip1">
                    <div className="flip flip2">
                      <div className="flip flip3">
                        <div className="flip flip4">
                          <div className="flip flip5">
                            <div className="flip flip6">
                              <div className="flip flip7"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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