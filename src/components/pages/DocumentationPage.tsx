import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search,
  Code,
  Play,
  FileText,
  Video,
  Lightbulb,
  Globe,
  MessageCircle,
  Users
} from 'lucide-react';
import { Navbar } from '../common/Navbar';
import { CTASection } from '../common/CTASection';
import { Footer } from '../common/Footer';
import { DocSidebar } from '../documentation/DocSidebar';
import { DocContent } from '../documentation/DocContent';
import { DocHero } from '../documentation/DocHero';

interface DocumentationPageProps {
  onNavigate: (view: string) => void;
}

export function DocumentationPage({ onNavigate }: DocumentationPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('getting-started');

  return (
    <div className="min-vh-100 bg-light-bg">
      {/* Navigation */}
      <Navbar onNavigate={onNavigate} />

      {/* Hero Section */}
      <DocHero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Documentation Content */}
      <section className="py-5 bg-white">
        <div className="container-lg">
          <div className="row">
            {/* Sidebar */}
            <div className="col-lg-3 mb-4 mb-lg-0">
              <DocSidebar 
                selectedCategory={selectedCategory} 
                setSelectedCategory={setSelectedCategory} 
              />
            </div>

            {/* Main Content */}
            <div className="col-lg-9">
              <DocContent selectedCategory={selectedCategory} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        className="bg-gradient-secondary"
        title="Need More Help?"
        subtitle="Can't find what you're looking for? Our support team and community are here to help."
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