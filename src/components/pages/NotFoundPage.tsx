import React from 'react';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '../ui/Button';
import { NotFoundContent } from '../notfound/NotFoundContent';
import { QuickNavigation } from '../notfound/QuickNavigation';

interface NotFoundPageProps {
  onNavigate: (view: string) => void;
}

export function NotFoundPage({ onNavigate }: NotFoundPageProps) {
  return (
    <div className="min-vh-100 bg-light-bg d-flex align-items-center justify-content-center p-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <NotFoundContent />
            
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center mb-5">
              <Button size="lg" onClick={() => window.history.back()}>
                <ArrowLeft size={20} className="me-2" />
                Go Back
              </Button>
              <Button variant="secondary" size="lg" onClick={() => onNavigate('home')}>
                <Home size={20} className="me-2" />
                Go to Home
              </Button>
            </div>
            
            <QuickNavigation onNavigate={onNavigate} />
          </div>
        </div>
      </div>
    </div>
  );
}