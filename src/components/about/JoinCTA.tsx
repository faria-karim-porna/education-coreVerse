import React from "react";
import { motion } from "framer-motion";
import { Users, TrendingUp } from "lucide-react";
import { Button } from "../ui/Button";

interface JoinCTAProps {
  onNavigate: (view: string) => void;
}

export function JoinCTA({ onNavigate }: JoinCTAProps) {
  return (
    <section className="py-5 bg-gradient-secondary text-white">
      <div className="container-lg text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h2 className="display-4 fw-bold mb-4">Join Our Mission</h2>
          <p className="lead mb-5 opacity-75">
            Be part of the educational revolution. Whether you're an educator, student, or passionate about learning, there's a place for
            you at CoreVerse.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <Button variant="secondary" size="lg" className="btn-custom-white" onClick={() => onNavigate("community")}>
              <Users size={20} className="me-2" />
              Join Our Community
            </Button>
            <Button variant="outline-secondary" size="lg" className="border-white text-white" onClick={() => onNavigate("careers")}>
              <TrendingUp size={20} className="me-2" />
              Career Opportunities
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
