import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

interface FeatureCategoriesProps {
  categories: {
    id: string;
    label: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
  }[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export function FeatureCategories({ categories, activeCategory, setActiveCategory }: FeatureCategoriesProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-5"
    >
      <h2 className="display-4 fw-bold text-deep-red mb-4">Explore by Category</h2>
      <p className="lead text-muted">
        Choose a category to explore specific features in detail
      </p>
      
      <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? 'primary' : 'secondary'}
            onClick={() => setActiveCategory(category.id)}
            className="d-flex align-items-center gap-2"
          >
            <category.icon size={16} />
            {category.label}
          </Button>
        ))}
      </div>
    </motion.div>
  );
}