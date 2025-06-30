import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Star, ArrowRight } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export function PopularArticles() {
  const popularArticles = [
    {
      id: '1',
      title: 'Getting Started with CoreVerse',
      description: 'Complete guide to setting up your account and exploring the platform',
      category: 'getting-started',
      readTime: '5 min read',
      views: '12.5K',
      rating: 4.8
    },
    {
      id: '2',
      title: 'How to Use Virtual Labs',
      description: 'Step-by-step instructions for accessing and using STEM simulations',
      category: 'features',
      readTime: '8 min read',
      views: '9.2K',
      rating: 4.9
    },
    {
      id: '3',
      title: 'Troubleshooting Login Issues',
      description: 'Common solutions for account access and authentication problems',
      category: 'troubleshooting',
      readTime: '3 min read',
      views: '7.8K',
      rating: 4.6
    },
    {
      id: '4',
      title: 'Managing Your Subscription',
      description: 'How to upgrade, downgrade, or cancel your CoreVerse subscription',
      category: 'billing',
      readTime: '4 min read',
      views: '6.1K',
      rating: 4.7
    },
    {
      id: '5',
      title: 'Creating and Managing Classes',
      description: 'Teacher guide to setting up virtual classrooms and managing students',
      category: 'features',
      readTime: '10 min read',
      views: '5.4K',
      rating: 4.8
    },
    {
      id: '6',
      title: 'Understanding Progress Analytics',
      description: 'How to interpret and use learning analytics and progress reports',
      category: 'features',
      readTime: '6 min read',
      views: '4.9K',
      rating: 4.5
    }
  ];

  return (
    <div className="mb-5">
      <h3 className="h4 fw-bold text-deep-red mb-4">Popular Articles</h3>
      <div className="row g-4">
        {popularArticles.map((article, index) => (
          <div key={article.id} className="col-md-6 col-lg-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover className="h-100">
                <div className="card-body p-4">
                  <h5 className="fw-bold text-deep-red mb-2">{article.title}</h5>
                  <p className="text-muted small mb-3">{article.description}</p>
                  
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center gap-3 text-muted small">
                      <span className="d-flex align-items-center gap-1">
                        <Clock size={12} />
                        {article.readTime}
                      </span>
                      <span>{article.views} views</span>
                    </div>
                    <div className="d-flex align-items-center gap-1">
                      <Star className="text-warning" size={14} fill="currentColor" />
                      <span className="small fw-medium">{article.rating}</span>
                    </div>
                  </div>

                  <Button size="sm" className="w-100">
                    Read Article
                    <ArrowRight size={14} className="ms-1" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}