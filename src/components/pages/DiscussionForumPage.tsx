import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen,
  Search,
  MessageCircle,
  Plus,
  Heart,
  Share2,
  Eye,
  Clock,
  User,
  Filter,
  TrendingUp,
  Star,
  ThumbsUp,
  MessageSquare,
  Pin,
  Award,
  Users,
  ChevronRight
} from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';

interface DiscussionForumPageProps {
  onNavigate: (view: string) => void;
}

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

export function DiscussionForumPage({ onNavigate }: DiscussionForumPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('recent');

  const categories = [
    { id: 'all', label: 'All Discussions', icon: MessageCircle },
    { id: 'general', label: 'General', icon: Users },
    { id: 'physics', label: 'Physics', icon: Star },
    { id: 'chemistry', label: 'Chemistry', icon: Star },
    { id: 'biology', label: 'Biology', icon: Star },
    { id: 'mathematics', label: 'Mathematics', icon: Star },
    { id: 'help', label: 'Help & Support', icon: MessageSquare },
    { id: 'announcements', label: 'Announcements', icon: Pin }
  ];

  const discussions: Discussion[] = [
    {
      id: '1',
      title: 'Best practices for virtual chemistry experiments?',
      content: 'I\'ve been using CoreVerse for chemistry simulations and wanted to share some best practices I\'ve discovered. What techniques have worked best for you?',
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
      lastActivity: '30 minutes ago'
    },
    {
      id: '2',
      title: 'Circuit simulation accuracy vs real experiments',
      content: 'Has anyone done comparisons between the circuit simulations and actual lab results? I\'m curious about the accuracy and any limitations.',
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
      lastActivity: '1 hour ago'
    },
    {
      id: '3',
      title: 'Feature Request: Advanced DNA sequencing tools',
      content: 'It would be amazing to have more advanced DNA sequencing and analysis tools in the biology lab. What features would you like to see?',
      author: {
        name: 'Dr. Emily Watson',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
        role: 'Researcher',
        reputation: 1650
      },
      category: 'biology',
      tags: ['biology', 'dna', 'feature-request', 'tools'],
      replies: 31,
      likes: 89,
      views: 678,
      timeAgo: '6 hours ago',
      isPinned: false,
      isAnswered: false,
      lastActivity: '2 hours ago'
    },
    {
      id: '4',
      title: 'Student engagement strategies with virtual labs',
      content: 'What strategies have you found most effective for keeping students engaged during virtual lab sessions? Looking for practical tips.',
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
      lastActivity: '3 hours ago'
    },
    {
      id: '5',
      title: 'Showcase: Amazing physics projects from my students',
      content: 'I wanted to share some incredible physics simulations my students created using CoreVerse tools. The creativity is amazing!',
      author: {
        name: 'James Park',
        avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
        role: 'Instructor',
        reputation: 1420
      },
      category: 'physics',
      tags: ['showcase', 'physics', 'student-work', 'projects'],
      replies: 42,
      likes: 156,
      views: 892,
      timeAgo: '12 hours ago',
      isPinned: false,
      isAnswered: false,
      lastActivity: '4 hours ago'
    },
    {
      id: '6',
      title: 'Help: Integration with Canvas LMS not working',
      content: 'I\'m having trouble getting the Canvas integration to work properly. Has anyone else experienced this issue?',
      author: {
        name: 'David Kim',
        avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
        role: 'Student',
        reputation: 340
      },
      category: 'help',
      tags: ['help', 'canvas', 'integration', 'technical'],
      replies: 8,
      likes: 12,
      views: 145,
      timeAgo: '1 day ago',
      isPinned: false,
      isAnswered: true,
      lastActivity: '6 hours ago'
    }
  ];

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
    }
  ];

  const filteredDiscussions = discussions.filter(discussion => {
    const matchesSearch = discussion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         discussion.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         discussion.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || discussion.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedDiscussions = [...filteredDiscussions].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.likes - a.likes;
      case 'replies':
        return b.replies - a.replies;
      case 'views':
        return b.views - a.views;
      default: // recent
        return new Date(b.lastActivity).getTime() - new Date(a.lastActivity).getTime();
    }
  });

  return (
    <div className="min-vh-100 bg-light-bg">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm border-bottom">
        <div className="container-lg">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="navbar-brand d-flex align-items-center gap-2 btn btn-link text-decoration-none"
            onClick={() => onNavigate('home')}
          >
            <div className="bg-primary-red rounded-4 d-flex align-items-center justify-content-center"
                 style={{ width: '40px', height: '40px' }}>
              <BookOpen className="text-white" size={24} />
            </div>
            <span className="fw-bold h3 text-deep-red mb-0">CoreVerse</span>
          </motion.button>
          
          <div className="d-none d-md-flex align-items-center gap-4">
            <button 
              onClick={() => onNavigate('features')} 
              className="nav-link btn btn-link text-deep-red text-decoration-none"
            >
              Features
            </button>
            <button 
              onClick={() => onNavigate('about')} 
              className="nav-link btn btn-link text-deep-red text-decoration-none"
            >
              About
            </button>
            <button 
              onClick={() => onNavigate('contact')} 
              className="nav-link btn btn-link text-deep-red text-decoration-none"
            >
              Contact
            </button>
            <ThemeToggle />
            <Button variant="secondary" className="me-2" onClick={() => onNavigate('dashboard')}>
              Sign In
            </Button>
            <Button onClick={() => onNavigate('dashboard')}>Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="position-relative overflow-hidden bg-gradient-primary text-white py-5">
        <div className="container-lg py-5">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white bg-opacity-20 rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
                   style={{ width: '80px', height: '80px' }}>
                <MessageCircle className="text-white" size={40} />
              </div>
              <h1 className="display-3 fw-bold mb-4">Discussion Forum</h1>
              <p className="lead mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                Connect with educators and students worldwide. Share knowledge, ask questions, 
                and collaborate to enhance STEM education for everyone.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <Button variant="secondary" size="lg" className="bg-white text-primary-red border-white">
                  <Plus size={20} className="me-2" />
                  Start Discussion
                </Button>
                <Button variant="outline-secondary" size="lg" className="border-white text-white">
                  <Users size={20} className="me-2" />
                  Join Community
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Forum Stats */}
      <section className="py-4 bg-white border-bottom">
        <div className="container-lg">
          <div className="row g-4 text-center">
            <div className="col-6 col-lg-3">
              <div className="display-6 fw-bold text-primary-red mb-1">2.3K</div>
              <div className="text-muted small">Discussions</div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="display-6 fw-bold text-primary-red mb-1">15K</div>
              <div className="text-muted small">Members</div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="display-6 fw-bold text-primary-red mb-1">45K</div>
              <div className="text-muted small">Posts</div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="display-6 fw-bold text-primary-red mb-1">98%</div>
              <div className="text-muted small">Answered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-4 bg-light-bg">
        <div className="container-lg">
          <div className="row g-3 align-items-center">
            <div className="col-md-4">
              <div className="position-relative">
                <Search className="position-absolute text-muted" 
                        style={{ left: '12px', top: '50%', transform: 'translateY(-50%)', width: '16px', height: '16px' }} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search discussions..."
                  className="form-control ps-5"
                  style={{ paddingLeft: '2.5rem' }}
                />
              </div>
            </div>
            <div className="col-md-3">
              <select 
                className="form-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>{category.label}</option>
                ))}
              </select>
            </div>
            <div className="col-md-3">
              <select 
                className="form-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="recent">Most Recent</option>
                <option value="popular">Most Popular</option>
                <option value="replies">Most Replies</option>
                <option value="views">Most Views</option>
              </select>
            </div>
            <div className="col-md-2">
              <Button className="w-100">
                <Plus size={16} className="me-1" />
                New Post
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-5 bg-white">
        <div className="container-lg">
          <div className="row g-4">
            {/* Discussions List */}
            <div className="col-lg-8">
              <div className="d-flex flex-column gap-3">
                {sortedDiscussions.map((discussion, index) => (
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
                            <div className="d-flex align-items-start justify-content-between mb-2">
                              <div className="flex-fill">
                                <div className="d-flex align-items-center gap-2 mb-1">
                                  {discussion.isPinned && (
                                    <Pin className="text-warning" size={16} />
                                  )}
                                  {discussion.isAnswered && (
                                    <div className="bg-success rounded-circle d-flex align-items-center justify-content-center"
                                         style={{ width: '20px', height: '20px' }}>
                                      <span className="text-white" style={{ fontSize: '12px' }}>✓</span>
                                    </div>
                                  )}
                                  <h5 className="fw-bold text-deep-red mb-0">{discussion.title}</h5>
                                </div>
                                <div className="d-flex align-items-center gap-2 text-muted small mb-2">
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
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="d-flex flex-column gap-4">
                {/* Top Contributors */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
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
                </motion.div>

                {/* Quick Actions */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Card>
                    <div className="card-body p-4">
                      <h5 className="fw-bold text-deep-red mb-3">Quick Actions</h5>
                      <div className="d-grid gap-2">
                        <Button className="w-100">
                          <Plus size={16} className="me-2" />
                          New Discussion
                        </Button>
                        <Button variant="secondary" className="w-100">
                          <MessageSquare size={16} className="me-2" />
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
                </motion.div>

                {/* Forum Guidelines */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
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
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-deep-red text-white py-5">
        <div className="container-lg">
          <div className="row g-4">
            <div className="col-lg-3">
              <button 
                onClick={() => onNavigate('home')}
                className="d-flex align-items-center gap-2 mb-4 btn btn-link text-white text-decoration-none p-0"
              >
                <div className="bg-primary-red rounded-3 d-flex align-items-center justify-content-center"
                     style={{ width: '32px', height: '32px' }}>
                  <BookOpen className="text-white" size={20} />
                </div>
                <span className="fw-bold h5 mb-0">CoreVerse</span>
              </button>
              <p className="text-white-50">
                Transforming education through interactive technology and innovative learning experiences.
              </p>
            </div>
            
            <div className="col-lg-3">
              <h6 className="fw-semibold mb-3">Study Tools</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <button onClick={() => onNavigate('interactive-globe')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Interactive Globe
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('scientific-calculator')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Scientific Calculator
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('unit-converter')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Unit Converter
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('discussion-forum')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Discussion Forum
                  </button>
                </li>
              </ul>
            </div>
            
            <div className="col-lg-3">
              <h6 className="fw-semibold mb-3">Support</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <button onClick={() => onNavigate('help-center')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Help Center
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('documentation')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Documentation
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('community')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Community
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('contact')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>
            
            <div className="col-lg-3">
              <h6 className="fw-semibold mb-3">Company</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <button onClick={() => onNavigate('about')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    About
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('careers')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Careers
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('privacy')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Privacy
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('terms')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Terms
                  </button>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-top border-white border-opacity-25 mt-5 pt-4 text-center">
            <p className="text-white-50 mb-0">&copy; 2024 CoreVerse. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}