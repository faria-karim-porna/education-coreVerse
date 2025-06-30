import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";

interface AboutHeroProps {
  onNavigate: (view: string) => void;
}

export function AboutHero({ onNavigate }: AboutHeroProps) {
  return (
    <section className="position-relative overflow-hidden bg-gradient-primary text-white py-5">
      <div className="container-lg py-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="display-3 fw-bold mb-4">About CoreVerse</h1>
              <p className="lead mb-4">
                We're on a mission to transform education through innovative technology, making quality STEM learning accessible to students
                worldwide.
              </p>
              <div className="d-flex flex-wrap gap-3 mb-4 mb-lg-0">
                <Button variant="outline-secondary" className="border-white text-white" onClick={() => onNavigate("careers")}>
                  Join Our Team
                </Button>
              </div>
            </motion.div>
          </div>
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2"
                alt="Team collaboration"
                className="img-fluid rounded-4 shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}