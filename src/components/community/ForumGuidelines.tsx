import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';

export function ForumGuidelines() {
  return (
    <Card>
      <div className="card-body p-4">
        <h5 className="fw-bold text-deep-red mb-3">Forum Guidelines</h5>
        <div className="d-flex flex-column gap-2 small text-muted">
          <div className="d-flex align-items-start gap-2">
            <span className="text-success">•</span>
            <span>Be respectful and constructive</span>
          </div>
          <div className="d-flex align-items-start gap-2">
            <span className="text-success">•</span>
            <span>Search before posting</span>
          </div>
          <div className="d-flex align-items-start gap-2">
            <span className="text-success">•</span>
            <span>Use descriptive titles</span>
          </div>
          <div className="d-flex align-items-start gap-2">
            <span className="text-success">•</span>
            <span>Tag your posts appropriately</span>
          </div>
          <div className="d-flex align-items-start gap-2">
            <span className="text-success">•</span>
            <span>Help others when you can</span>
          </div>
        </div>
      </div>
    </Card>
  );
}