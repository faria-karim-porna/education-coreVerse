import React from 'react';
import { motion } from 'framer-motion';
import { Play, Code, Video, FileText, Lightbulb, Globe } from 'lucide-react';
import { Card } from '../ui/Card';

interface DocSidebarProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export function DocSidebar({ selectedCategory, setSelectedCategory }: DocSidebarProps) {
  const docCategories = [
    { id: 'getting-started', label: 'Getting Started', icon: Play },
    { id: 'api-reference', label: 'API Reference', icon: Code },
    { id: 'tutorials', label: 'Tutorials', icon: Video },
    { id: 'guides', label: 'User Guides', icon: FileText },
    { id: 'examples', label: 'Examples', icon: Lightbulb },
    { id: 'integrations', label: 'Integrations', icon: Globe }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <Card>
        <div className="card-body p-4">
          <h5 className="fw-bold text-deep-red mb-3">Categories</h5>
          <div className="d-flex flex-column gap-2">
            {docCategories.map((category) => (
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
    </motion.div>
  );
}