import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Menu, X } from 'lucide-react';
import { Button } from '../../ui/Button';
import { ThemeToggle } from '../../ui/ThemeToggle';
import { Link } from 'react-router-dom';

interface NavbarProps {
  onNavigate: (view: string) => void;
}

export function Navbar({ onNavigate }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm border-bottom fixed-top paper-layer-top">
      <div className="container-lg">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="navbar-brand d-flex align-items-center gap-2 btn btn-link text-decoration-none"
          onClick={() => onNavigate('home')}
        >
          <div className="bg-primary-purple rounded-4 d-flex align-items-center justify-content-center"
               style={{ width: '40px', height: '40px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
            <BookOpen className="text-white" size={24} />
          </div>
          <span className="fw-bold h3 text-deep-purple mb-0">CoreVerse</span>
        </motion.button>
        
        {/* Mobile menu toggle button */}
        <button 
          className="navbar-toggler border-0" 
          type="button" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Navigation links - will collapse on mobile */}
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <div className="ms-auto d-flex flex-column flex-lg-row align-items-start align-items-lg-center gap-3 gap-lg-4 mt-3 mt-lg-0">
            <button 
              onClick={() => {
                onNavigate('features');
                setIsMenuOpen(false);
              }}
              className="nav-link btn btn-link text-deep-purple text-decoration-none"
            >
              Features
            </button>
            <button 
              onClick={() => {
                onNavigate('about');
                setIsMenuOpen(false);
              }}
              className="nav-link btn btn-link text-deep-purple text-decoration-none"
            >
              About
            </button>
            <button 
              onClick={() => {
                onNavigate('contact');
                setIsMenuOpen(false);
              }}
              className="nav-link btn btn-link text-deep-purple text-decoration-none"
            >
              Contact
            </button>
            <ThemeToggle />
            <Button 
              variant="secondary" 
              className="me-2" 
              onClick={() => {
                onNavigate('dashboard');
                setIsMenuOpen(false);
              }}
            >
              Sign In
            </Button>
            <Button 
              onClick={() => {
                onNavigate('dashboard');
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