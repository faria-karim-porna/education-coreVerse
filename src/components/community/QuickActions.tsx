import React from 'react';
import { motion } from 'framer-motion';
import { Plus, HelpCircle, Star, MessageCircle, Award } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

interface QuickActionsProps {
  onNavigate?: (view: string) => void;
}

export function QuickActions({ onNavigate }: QuickActionsProps) {
  const handleNavigate = (path: string) => {
    if (onNavigate) {
      onNavigate(path);
    }
  };

  return (
    <Card>
      <div className="card-body p-4">
        <h5 className="fw-bold text-deep-red mb-3">Quick Actions</h5>
        <div className="d-grid gap-2">
          <Button className="w-100">
            <Plus size={16} className="me-2" />
            New Discussion
          </Button>
          <Button variant="secondary" className="w-100" onClick={() => handleNavigate('help-center')}>
            <HelpCircle size={16} className="me-2" />
            Ask Question
          </Button>
          <Button variant="secondary" className="w-100">
            <Star size={16} className="me-2" />
            Share Project
          </Button>
          <Button variant="secondary" className="w-100">
            <Award size={16} className="me-2" />
            View Leaderboard
          </Button>
        </div>
      </div>
    </Card>
  );
}