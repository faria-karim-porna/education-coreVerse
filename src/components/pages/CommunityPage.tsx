import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users,
  MessageCircle,
  Plus,
  BookOpen
} from 'lucide-react';
import { Navbar } from '../common/Navbar';
import { CTASection } from '../common/CTASection';
import { Footer } from '../common/Footer';
import { CommunityHero } from '../community/CommunityHero';
import { CommunityStats } from '../community/CommunityStats';
import { CommunityMainContent } from '../community/CommunityMainContent';

interface CommunityPageProps {
  onNavigate: (view: string) => void;
}

export function CommunityPage({ onNavigate }: CommunityPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Discussions', icon: MessageCircle },
    { id: 'general', label: 'General', icon: Users },
    { id: 'physics', label: 'Physics', icon: BookOpen },
    { id: 'chemistry', label: 'Chemistry', icon: BookOpen },
    { id: 'biology', label: 'Biology', icon: BookOpen },
    { id: 'help', label: 'Help & Support', icon: MessageCircle },
    { id: 'showcase', label: 'Showcase', icon: BookOpen },
    { id: 'feedback', label: 'Feedback', icon: MessageCircle }
  ];

  const discussions = [
    {
      id: '1',
      title: 'Best practices for virtual chemistry labs?',
      author: {
        name: 'Dr. Sarah Chen',
        avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
        role: 'Professor',
        reputation: 2340
      },
      category: 'chemistry',
      tags: ['chemistry', 'best-practices', 'virtual-labs'],
      replies: 23,
      likes: 45,
      views: 234,
      timeAgo: '2 hours ago',
      isPinned: true,
      isAnswered: true,
      lastActivity: '30 minutes ago',
      content: 'I\'ve been using CoreVerse for chemistry simulations and wanted to share some best practices I\'ve discovered. What techniques have worked best for you?'
    },
    {
      id: '2',
      title: 'Circuit simulation accuracy vs real experiments',
      author: {
        name: 'Prof. Michael Rodriguez',
        avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
        role: 'Educator',
        reputation: 1890
      },
      category: 'physics',
      tags: ['physics', 'circuits', 'accuracy', 'comparison'],
      replies: 18,
      likes: 67,
      views: 456,
      timeAgo: '4 hours ago',
      isPinned: false,
      isAnswered: false,
      lastActivity: '1 hour ago',
      content: 'Has anyone done comparisons between the circuit simulations and actual lab results? I\'m curious about the accuracy and any limitations.'
    },
    {
      id: '3',
      title: 'Feature Request: Advanced DNA sequencing tools',
      author: {
        name: 'Dr. Emily Watson',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
        role: 'Researcher',
        reputation: 1650
      },
      category: 'feedback',
      tags: ['biology', 'dna', 'feature-request', 'tools'],
      replies: 31,
      likes: 89,
      views: 678,
      timeAgo: '6 hours ago',
      isPinned: false,
      isAnswered: false,
      lastActivity: '2 hours ago',
      content: 'It would be amazing to have more advanced DNA sequencing and analysis tools in the biology lab. What features would you like to see?'
    },
    {
      id: '4',
      title: 'Student engagement strategies with virtual labs',
      author: {
        name: 'Alice Johnson',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
        role: 'Teacher',
        reputation: 980
      },
      category: 'general',
      tags: ['engagement', 'teaching', 'students', 'virtual-labs'],
      replies: 15,
      likes: 34,
      views: 189,
      timeAgo: '8 hours ago',
      isPinned: false,
      isAnswered: true,
      lastActivity: '3 hours ago',
      content: 'What strategies have you found most effective for keeping students engaged during virtual lab sessions? Looking for practical tips.'
    }
  ];

  return (
    <div className="min-vh-100 bg-light-bg">
      {/* Navigation */}
      <Navbar onNavigate={onNavigate} />

      {/* Hero Section */}
      <CommunityHero onNavigate={onNavigate} />

      {/* Community Stats */}
      <CommunityStats />

      {/* Main Content */}
      <CommunityMainContent 
        categories={categories}
        discussions={discussions}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        onNavigate={onNavigate}
      />

      {/* CTA Section */}
      <CTASection
        className="bg-gradient-secondary"
        title="Join Our Growing Community"
        subtitle="Connect with thousands of educators and students passionate about transforming STEM education through technology."
        primaryButtonText="Join Community"
        primaryButtonLink="dashboard"
        primaryButtonIcon={Users}
        secondaryButtonText="Learn More"
        secondaryButtonLink="about"
        secondaryButtonIcon={BookOpen}
        onNavigate={onNavigate}
      />

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}