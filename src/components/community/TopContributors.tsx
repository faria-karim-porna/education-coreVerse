import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';

export function TopContributors() {
  const topContributors = [
    {
      name: 'Dr. Sarah Chen',
      avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      posts: 156,
      reputation: 2340,
      badge: 'Expert Educator'
    },
    {
      name: 'Prof. Michael Rodriguez',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      posts: 134,
      reputation: 2180,
      badge: 'Physics Master'
    },
    {
      name: 'Dr. Emily Watson',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      posts: 98,
      reputation: 1890,
      badge: 'Biology Expert'
    },
    {
      name: 'Alice Johnson',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      posts: 87,
      reputation: 1650,
      badge: 'Rising Star'
    }
  ];

  return (
    <Card>
      <div className="card-body p-4">
        <h5 className="fw-bold text-deep-red mb-3">Top Contributors</h5>
        <div className="d-flex flex-column gap-3">
          {topContributors.map((contributor, index) => (
            <div key={contributor.name} className="d-flex align-items-center">
              <div className="position-relative me-3">
                <img
                  src={contributor.avatar}
                  alt={contributor.name}
                  className="rounded-circle object-fit-cover"
                  style={{ width: '40px', height: '40px' }}
                />
                <div className="position-absolute top-0 start-100 translate-middle">
                  <span className="badge bg-warning text-dark rounded-pill" style={{ fontSize: '0.6rem' }}>
                    {index + 1}
                  </span>
                </div>
              </div>
              <div className="flex-fill">
                <h6 className="fw-semibold text-deep-red mb-0 small">{contributor.name}</h6>
                <div className="d-flex align-items-center gap-2 text-muted" style={{ fontSize: '0.75rem' }}>
                  <span>{contributor.posts} posts</span>
                  <span>•</span>
                  <span>{contributor.reputation} rep</span>
                </div>
                <span className="badge bg-primary-red text-white" style={{ fontSize: '0.6rem' }}>
                  {contributor.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}