import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ThumbsUp, Eye, Clock, ChevronRight } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

interface Discussion {
  id: string;
  title: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    role: string;
    reputation: number;
  };
  category: string;
  tags: string[];
  replies: number;
  likes: number;
  views: number;
  timeAgo: string;
  isPinned: boolean;
  isAnswered: boolean;
  lastActivity: string;
}

interface DiscussionListProps {
  discussions: Discussion[];
}

export function DiscussionList({ discussions }: DiscussionListProps) {
  return (
    <div className="d-flex flex-column gap-3">
      {discussions.map((discussion, index) => (
        <motion.div
          key={discussion.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card hover>
            <div className="card-body p-4">
              <div className="d-flex align-items-start">
                <img
                  src={discussion.author.avatar}
                  alt={discussion.author.name}
                  className="rounded-circle object-fit-cover me-3"
                  style={{ width: '48px', height: '48px' }}
                />
                <div className="flex-fill">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <div>
                      <h5 className="fw-bold text-deep-red mb-1">
                        {discussion.isPinned && (
                          <span className="badge bg-warning text-dark me-2">Pinned</span>
                        )}
                        {discussion.title}
                      </h5>
                      <div className="d-flex align-items-center gap-2 text-muted small">
                        <span>by {discussion.author.name}</span>
                        <span>•</span>
                        <span>{discussion.timeAgo}</span>
                        <span>•</span>
                        <span className="text-capitalize">{discussion.category}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted mb-3">{discussion.content}</p>
                  
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {discussion.tags.map((tag) => (
                      <span key={tag} className="badge bg-light-bg text-deep-red">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-4 text-muted small">
                      <span className="d-flex align-items-center gap-1">
                        <MessageCircle size={14} />
                        {discussion.replies}
                      </span>
                      <span className="d-flex align-items-center gap-1">
                        <ThumbsUp size={14} />
                        {discussion.likes}
                      </span>
                      <span className="d-flex align-items-center gap-1">
                        <Eye size={14} />
                        {discussion.views}
                      </span>
                      <span className="d-flex align-items-center gap-1">
                        <Clock size={14} />
                        {discussion.lastActivity}
                      </span>
                    </div>
                    <Button size="sm" variant="secondary">
                      View Discussion
                      <ChevronRight size={14} className="ms-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}