import React from 'react';
import { SearchAndFilters } from './SearchAndFilters';
import { DiscussionList } from './DiscussionList';
import { TopContributors } from './TopContributors';
import { QuickActions } from './QuickActions';
import { ForumGuidelines } from './ForumGuidelines';
import { Card } from '../ui/Card';
import { motion } from 'framer-motion';

interface CommunityMainContentProps {
  categories: {
    id: string;
    label: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
  }[];
  discussions: any[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  onNavigate: (view: string) => void;
}

export function CommunityMainContent({
  categories,
  discussions,
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  onNavigate
}: CommunityMainContentProps) {
  return (
    <section className="py-5 bg-white">
      <div className="container-lg">
        <div className="row g-4">
          {/* Sidebar */}
          <div className="col-lg-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="sticky-top"
              style={{ top: '20px' }}
            >
              {/* Categories */}
              <Card className="mb-4">
                <div className="card-body p-4">
                  <h5 className="fw-bold text-deep-red mb-3">Categories</h5>
                  <div className="d-flex flex-column gap-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`btn text-start d-flex align-items-center gap-2 ${
                          selectedCategory === category.id
                            ? 'btn-custom-primary'
                            : 'btn-link text-muted'
                        }`}
                      >
                        <category.icon size={16} />
                        {category.label}
                      </button>
                    ))}
                  </div>
                </div>
              </Card>

              {/* Top Contributors */}
              <TopContributors />
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="col-lg-6">
            {/* Search and Filters */}
            <SearchAndFilters 
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />

            {/* Discussions */}
            <DiscussionList discussions={discussions} />
          </div>

          {/* Right Sidebar */}
          <div className="col-lg-3">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="sticky-top"
              style={{ top: '20px' }}
            >
              {/* Quick Actions */}
              <div className="mb-4">
                <QuickActions onNavigate={onNavigate} />
              </div>

              {/* Forum Guidelines */}
              <ForumGuidelines />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}