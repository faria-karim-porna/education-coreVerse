import React from 'react';
import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

interface QuickNavigationProps {
  onNavigate: (view: string) => void;
}

export function QuickNavigation({ onNavigate }: QuickNavigationProps) {
  const quickLinks = [
    { label: 'Home', onClick: () => onNavigate('home') },
    { label: 'Features', onClick: () => onNavigate('features') },
    { label: 'About', onClick: () => onNavigate('about') },
    { label: 'Contact', onClick: () => onNavigate('contact') },
    { label: 'Help Center', onClick: () => onNavigate('help-center') },
    { label: 'Dashboard', onClick: () => onNavigate('dashboard') }
  ];

  return (
    <Card>
      <div className="card-body p-4">
        <div className="d-flex align-items-center mb-4">
          <Compass className="text-primary-red me-2" size={24} />
          <h5 className="fw-bold text-deep-red mb-0">Quick Navigation</h5>
        </div>
        <div className="row g-2">
          {quickLinks.map((link, index) => (
            <div key={link.label} className="col-6">
              <Button 
                variant="secondary" 
                className="w-100" 
                onClick={link.onClick}
              >
                {link.label}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}