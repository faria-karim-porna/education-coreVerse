import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

interface DocHeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export function DocHero({ searchQuery, setSearchQuery }: DocHeroProps) {
  return (
    <section className="position-relative overflow-hidden bg-gradient-primary text-white py-5">
      <div className="container-lg py-5">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="display-3 fw-bold mb-4">Documentation</h1>
            <p className="lead mb-5 mx-auto" style={{ maxWidth: '600px' }}>
              Comprehensive guides, API references, and tutorials to help you 
              make the most of CoreVerse's educational platform.
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
                  placeholder="Search documentation..."
                  className="form-control form-control-lg ps-5 py-3 border-0 rounded-4"
                  style={{ paddingLeft: '3rem' }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}