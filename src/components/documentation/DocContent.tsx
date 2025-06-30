import React from 'react';
import { motion } from 'framer-motion';
import { QuickStartGuides } from './QuickStartGuides';
import { ApiReference } from './ApiReference';
import { VideoTutorials } from './VideoTutorials';
import { Integrations } from './Integrations';

interface DocContentProps {
  selectedCategory: string;
}

export function DocContent({ selectedCategory }: DocContentProps) {
  const renderContent = () => {
    switch (selectedCategory) {
      case 'getting-started':
        return <QuickStartGuides />;
      case 'api-reference':
        return <ApiReference />;
      case 'tutorials':
        return <VideoTutorials />;
      case 'integrations':
        return <Integrations />;
      default:
        return <div>Select a category to view documentation</div>;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      key={selectedCategory}
    >
      {renderContent()}
    </motion.div>
  );
}