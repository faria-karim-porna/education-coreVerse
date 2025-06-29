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
            <div className="position-relative mb-5" style={{ height: "200px" }}>
              <div className="book-container">
                <motion.div 
                  className="book"
                  initial={{ rotateY: 0 }}
                  animate={{ 
                    rotateY: [0, 180, 360, 540, 720],
                    transition: {
                      duration: 15,
                      repeat: Infinity,
                      ease: [0.4, 0, 0.2, 1]
                    }
                  }}
                >
                  {/* Book pages */}
                  {[...Array(5)].map((_, i) => (
                    <motion.div 
                      key={i} 
                      className="page"
                      initial={{ rotateY: i * 10 }}
                      animate={{ 
                        rotateY: [i * 10, 180 + i * 10, 360 + i * 10],
                        transition: {
                          duration: 15,
                          repeat: Infinity,
                          ease: [0.4, 0, 0.2, 1],
                          delay: i * 0.2
                        }
                      }}
                    ></motion.div>
                  ))}
                  
                  {/* Book cover */}
                  <motion.div 
                    className="cover"
                    initial={{ rotateY: 0 }}
                    animate={{ 
                      rotateY: [0, 180, 360],
                      transition: {
                        duration: 15,
                        repeat: Infinity,
                        ease: [0.4, 0, 0.2, 1]
                      }
                    }}
                  ></motion.div>
                </motion.div>
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
      
      <style jsx>{`
        .book-container {
          perspective: 1000px;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .book {
          width: 300px;
          height: 200px;
          position: relative;
          transform-style: preserve-3d;
          transform: rotateX(30deg);
        }
        
        .cover, .page {
          position: absolute;
          width: 100%;
          height: 100%;
          transform-origin: left center;
          background-color: white;
          border-radius: 5px;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .cover {
          background-color: #ff7474;
          z-index: 10;
        }
        
        .page:nth-child(1) { background-color: #fff; z-index: 9; }
        .page:nth-child(2) { background-color: #f8f8f8; z-index: 8; }
        .page:nth-child(3) { background-color: #f5f5f5; z-index: 7; }
        .page:nth-child(4) { background-color: #f2f2f2; z-index: 6; }
        .page:nth-child(5) { background-color: #efefef; z-index: 5; }
        
        @media (min-width: 768px) {
          .book {
            width: 400px;
            height: 250px;
          }
        }
        
        @media (min-width: 992px) {
          .book {
            width: 500px;
            height: 300px;
          }
        }
      `}</style>
    </section>
  );
}