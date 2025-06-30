import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search,
  HelpCircle,
  Play,
  MessageCircle,
  Users
} from 'lucide-react';
import { Navbar } from '../common/Navbar';
import { CTASection } from '../common/CTASection';
import { Footer } from '../common/Footer';
import { SupportOptions } from '../help/SupportOptions';
import { PopularArticles } from '../help/PopularArticles';
import { VideoTutorials } from '../help/VideoTutorials';
import { HelpFAQs } from '../help/HelpFAQs';

interface HelpCenterPageProps {
  onNavigate: (view: string) => void;
}

export function HelpCenterPage({ onNavigate }: HelpCenterPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const helpCategories = [
    { id: 'all', label: 'All Topics', icon: HelpCircle },
    { id: 'getting-started', label: 'Getting Started', icon: Play },
    { id: 'features', label: 'Platform Features', icon: HelpCircle },
    { id: 'troubleshooting', label: 'Troubleshooting', icon: HelpCircle },
    { id: 'account', label: 'Account Management', icon: Users },
    { id: 'billing', label: 'Billing & Payments', icon: HelpCircle }
  ];

  return (
    <div className="min-vh-100 bg-light-bg">
      {/* Navigation */}
      <Navbar onNavigate={onNavigate} />

      {/* Hero Section */}
      <section className="position-relative overflow-hidden bg-gradient-primary text-white py-5">
        <div className="container-lg py-5">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="display-3 fw-bold mb-4">Help Center</h1>
              <p className="lead mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                Find answers, tutorials, and support to get the most out of CoreVerse
              </p>
              
              {/* Search Bar */}
              <div className="mx-auto" style={{ maxWidth: '500px' }}>
                <div className="position-relative">
                  <Search className="position-absolute text-muted" 
                          style={{ left: '16px', top: '50%', transform: 'translateY(-50%)', width: '20px', height: '20px' }} />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for help articles, tutorials, or FAQs..."
                    className="form-control form-control-lg ps-5 py-3 border-0 rounded-4"
                    style={{ paddingLeft: '3rem' }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <SupportOptions onNavigate={onNavigate} />

      {/* Categories */}
      <section className="py-5 bg-light-bg">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-5"
          >
            <h2 className="display-4 fw-bold text-deep-red mb-4">Browse by Category</h2>
            <p className="lead text-muted">
              Find help articles organized by topic
            </p>
          </motion.div>

          <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
            {helpCategories.map((category) => (
              <button
                key={category.id}
                className={`btn ${selectedCategory === category.id ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <category.icon size={16} className="me-2" />
                {category.label}
              </button>
            ))}
          </div>

          {/* Popular Articles */}
          <PopularArticles onNavigate={onNavigate} />
        </div>
      </section>

      {/* Video Tutorials */}
      <VideoTutorials />

      {/* FAQ Section */}
      <HelpFAQs selectedCategory={selectedCategory} />

      {/* CTA Section */}
      <CTASection
        className="bg-gradient-secondary"
        title="Still Need Help?"
        subtitle="Our support team is here to help you succeed with CoreVerse."
        primaryButtonText="Contact Support"
        primaryButtonLink="contact"
        primaryButtonIcon={MessageCircle}
        secondaryButtonText="Join Community"
        secondaryButtonLink="community"
        secondaryButtonIcon={Users}
        onNavigate={onNavigate}
      />

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}