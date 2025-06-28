import React from 'react';
import { BookOpen } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-deep-red text-white py-5">
      <div className="container-lg">
        <div className="row g-4">
          <div className="col-lg-3">
            <button 
              onClick={() => onNavigate('home')}
              className="d-flex align-items-center gap-2 mb-4 btn btn-link text-white text-decoration-none p-0"
            >
              <div className="bg-primary-red rounded-3 d-flex align-items-center justify-content-center"
                   style={{ width: '32px', height: '32px' }}>
                <BookOpen className="text-white" size={20} />
              </div>
              <span className="fw-bold h5 mb-0">CoreVerse</span>
            </button>
            <p className="text-white-50">
              Transforming education through interactive technology and innovative learning experiences.
            </p>
          </div>
          
          <div className="col-lg-3">
            <h6 className="fw-semibold mb-3">Platform</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <button onClick={() => onNavigate('labs')} className="btn btn-link text-white-50 text-decoration-none p-0">
                  STEM Labs
                </button>
              </li>
              <li className="mb-2">
                <button onClick={() => onNavigate('classes')} className="btn btn-link text-white-50 text-decoration-none p-0">
                  Virtual Classrooms
                </button>
              </li>
              <li className="mb-2">
                <button onClick={() => onNavigate('progress')} className="btn btn-link text-white-50 text-decoration-none p-0">
                  Progress Tracking
                </button>
              </li>
              <li className="mb-2">
                <button onClick={() => onNavigate('tools')} className="btn btn-link text-white-50 text-decoration-none p-0">
                  Scientific Tools
                </button>
              </li>
            </ul>
          </div>
          
          <div className="col-lg-3">
            <h6 className="fw-semibold mb-3">Support</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <button onClick={() => onNavigate('help-center')} className="btn btn-link text-white-50 text-decoration-none p-0">
                  Help Center
                </button>
              </li>
              <li className="mb-2">
                <button onClick={() => onNavigate('documentation')} className="btn btn-link text-white-50 text-decoration-none p-0">
                  Documentation
                </button>
              </li>
              <li className="mb-2">
                <button onClick={() => onNavigate('community')} className="btn btn-link text-white-50 text-decoration-none p-0">
                  Community
                </button>
              </li>
              <li className="mb-2">
                <button onClick={() => onNavigate('contact')} className="btn btn-link text-white-50 text-decoration-none p-0">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
          
          <div className="col-lg-3">
            <h6 className="fw-semibold mb-3">Company</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <button onClick={() => onNavigate('about')} className="btn btn-link text-white-50 text-decoration-none p-0">
                  About
                </button>
              </li>
              <li className="mb-2">
                <button onClick={() => onNavigate('careers')} className="btn btn-link text-white-50 text-decoration-none p-0">
                  Careers
                </button>
              </li>
              <li className="mb-2">
                <button onClick={() => onNavigate('privacy')} className="btn btn-link text-white-50 text-decoration-none p-0">
                  Privacy
                </button>
              </li>
              <li className="mb-2">
                <button onClick={() => onNavigate('terms')} className="btn btn-link text-white-50 text-decoration-none p-0">
                  Terms
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-top border-white border-opacity-25 mt-5 pt-4 text-center">
          <p className="text-white-50 mb-0">&copy; 2024 CoreVerse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}