import React, { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Menu, X } from "lucide-react";
import { Button } from "../ui/Button";
import { ThemeToggle } from "../ui/ThemeToggle";
import { Link, useLocation } from "react-router-dom";

interface NavbarProps {
  onNavigate: (view: string) => void;
}

export function Navbar({ onNavigate }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Get current path without leading slash
  const currentPath = location.pathname.substring(1) || "home";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm border-bottom fixed-top">
      <div className="container-lg">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="navbar-brand d-flex align-items-center gap-2 btn btn-link text-decoration-none"
          onClick={() => onNavigate("home")}
        >
          <div
            className="bg-primary-red rounded-3 d-flex align-items-center justify-content-center"
            style={{ width: "32px", height: "32px" }}
          >
            <span className="text-white fw-bold small">CV</span>
          </div>
          <span className="fw-bold h3 text-deep-red mb-0">CoreVerse</span>
        </motion.button>

        {/* Mobile menu toggle button - removed border */}
        <button className="navbar-toggler border-0 shadow-none" type="button" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation links - will collapse on mobile */}
        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}>
          <div className="ms-auto d-flex flex-column flex-lg-row align-items-start align-items-lg-center gap-3 gap-lg-4 mt-3 mt-lg-0">
            <button
              onClick={() => {
                onNavigate("features");
                setIsMenuOpen(false);
              }}
              className={`nav-link btn btn-link ${
                currentPath === "features" ? "text-primary-red fw-medium" : "text-deep-red"
              } text-decoration-none`}
            >
              Features
            </button>
            <button
              onClick={() => {
                onNavigate("about");
                setIsMenuOpen(false);
              }}
              className={`nav-link btn btn-link ${
                currentPath === "about" ? "text-primary-red fw-medium" : "text-deep-red"
              } text-decoration-none`}
            >
              About
            </button>
            <button
              onClick={() => {
                onNavigate("contact");
                setIsMenuOpen(false);
              }}
              className={`nav-link btn btn-link ${
                currentPath === "contact" ? "text-primary-red fw-medium" : "text-deep-red"
              } text-decoration-none`}
            >
              Contact
            </button>
            <ThemeToggle />
            <Button
              variant="secondary"
              className="me-2"
              onClick={() => {
                onNavigate("dashboard");
                setIsMenuOpen(false);
              }}
            >
              Sign In
            </Button>
            <Button
              onClick={() => {
                onNavigate("dashboard");
                setIsMenuOpen(false);
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
