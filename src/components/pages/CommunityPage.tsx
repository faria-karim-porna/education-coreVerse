import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users,
  MessageCircle,
  Heart,
  Share2,
  Search,
  Filter,
  TrendingUp,
  Award,
  Calendar,
  MapPin,
  ExternalLink,
  Plus,
  Star,
  Eye,
  ThumbsUp,
  BookOpen,
  Lightbulb,
  HelpCircle,
  Code,
  Beaker,
  Calculator,
  Globe,
  Clock,
  User,
  ChevronRight
} from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';

interface CommunityPageProps {
  onNavigate: (view: string) => void;
}

export function CommunityPage({ onNavigate }: CommunityPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Discussions', icon: MessageCircle },
    { id: 'general', label: 'General', icon: Users },
    { id: 'physics', label: 'Physics', icon: Beaker },
    { id: 'chemistry', label: 'Chemistry', icon: Calculator },
    { id: 'biology', label: 'Biology', icon: Globe },
    { id: 'help', label: 'Help & Support', icon: HelpCircle },
    { id: 'showcase', label: 'Showcase', icon: Star },
    { id: 'feedback', label: 'Feedback', icon: Lightbulb }
  ];

  const discussions = [
    {
      id: '1',
      title: 'Best practices for virtual chemistry labs?',
      author: 'Dr. Sarah Chen',
      avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      category: 'chemistry',
      replies: 23,
      likes: 45,
      views: 234,
      timeAgo: '2 hours ago',
      tags: ['chemistry', 'best-practices', 'virtual-labs'],
      isPinned: true,
      excerpt: 'I\'ve been using CoreVerse for chemistry simulations and wanted to share some best practices I\'ve discovered...'
    },
    {
      id: '2',
      title: 'Circuit simulation accuracy compared to real experiments',
      author: 'Prof. Michael Rodriguez',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      category: 'physics',
      replies: 18,
      likes: 67,
      views: 456,
      timeAgo: '4 hours ago',
      tags: ['physics', 'circuits', 'accuracy'],
      isPinned: false,
      excerpt: 'Has anyone done comparisons between the circuit simulations and actual lab results? I\'m curious about the accuracy...'
    },
    {
      id: '3',
      title: 'Feature Request: Advanced DNA sequencing tools',
      author: 'Dr. Emily Watson',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      category: 'feedback',
      replies: 31,
      likes: 89,
      views: 678,
      timeAgo: '6 hours ago',
      tags: ['biology', 'dna', 'feature-request'],
      isPinned: false,
      excerpt: 'It would be amazing to have more advanced DNA sequencing and analysis tools in the biology lab...'
    },
    {
      id: '4',
      title: 'Student engagement strategies with virtual labs',
      author: 'Alice Johnson',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      category: 'general',
      replies: 15,
      likes: 34,
      views: 189,
      timeAgo: '8 hours ago',
      tags: ['engagement', 'teaching', 'students'],
      isPinned: false,
      excerpt: 'What strategies have you found most effective for keeping students engaged during virtual lab sessions?'
    },
    {
      id: '5',
      title: 'Showcase: My students\' amazing physics projects',
      author: 'James Park',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      category: 'showcase',
      replies: 42,
      likes: 156,
      views: 892,
      timeAgo: '12 hours ago',
      tags: ['showcase', 'physics', 'student-work'],
      isPinned: false,
      excerpt: 'I wanted to share some incredible physics simulations my students created using CoreVerse tools...'
    },
    {
      id: '6',
      title: 'Help: Integration with Canvas LMS not working',
      author: 'David Kim',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      category: 'help',
      replies: 8,
      likes: 12,
      views: 145,
      timeAgo: '1 day ago',
      tags: ['help', 'canvas', 'integration'],
      isPinned: false,
      excerpt: 'I\'m having trouble getting the Canvas integration to work properly. Has anyone else experienced this?'
    }
  ];

  const events = [
    {
      title: 'Virtual STEM Education Webinar',
      date: 'March 25, 2024',
      time: '2:00 PM EST',
      attendees: 245,
      type: 'Webinar',
      description: 'Join us for a discussion on the future of virtual STEM education'
    },
    {
      title: 'Community Showcase: Best Lab Simulations',
      date: 'April 2, 2024',
      time: '3:00 PM EST',
      attendees: 189,
      type: 'Showcase',
      description: 'Community members present their most innovative lab simulations'
    },
    {
      title: 'Q&A with CoreVerse Development Team',
      date: 'April 10, 2024',
      time: '1:00 PM EST',
      attendees: 156,
      type: 'Q&A',
      description: 'Ask questions directly to our development team about upcoming features'
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
    },
    {
      name: 'Alice Johnson',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      posts: 87,
      reputation: 1650,
      badge: 'Rising Star'
    }
  ];

  const filteredDiscussions = selectedCategory === 'all' 
    ? discussions 
    : discussions.filter(discussion => discussion.category === selectedCategory);

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
              <h1 className="display-3 fw-bold mb-4">Community Forum</h1>
              <p className="lead mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                Connect with educators, share knowledge, and collaborate with the 
                CoreVerse community to enhance STEM education worldwide.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <Button variant="secondary" size="lg" className="bg-white text-primary-red border-white">
                  <Plus size={20} className="me-2" />
                  Start Discussion
                </Button>
                <Button variant="outline-secondary" size="lg" className="border-white text-white" onClick={() => onNavigate('help-center')}>
                  <HelpCircle size={20} className="me-2" />
                  Get Help
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-5 bg-white">
        <div className="container-lg">
          <div className="row g-4 text-center">
            <div className="col-6 col-lg-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
              >
                <div className="display-4 fw-bold text-primary-red mb-2">15K+</div>
                <div className="text-muted">Community Members</div>
              </motion.div>
            </div>
            <div className="col-6 col-lg-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="display-4 fw-bold text-primary-red mb-2">2.3K</div>
                <div className="text-muted">Active Discussions</div>
              </motion.div>
            </div>
            <div className="col-6 col-lg-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="display-4 fw-bold text-primary-red mb-2">45K</div>
                <div className="text-muted">Posts & Replies</div>
              </motion.div>
            </div>
            <div className="col-6 col-lg-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="display-4 fw-bold text-primary-red mb-2">98%</div>
                <div className="text-muted">Questions Answered</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-5 bg-light-bg">
        <div className="container-lg">
          <div className="row g-4">
            {/* Sidebar */}
            <div className="col-lg-3">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="sticky-top"
                style={{ top: '20px' }}
              >
                {/* Categories */}
                <Card className="mb-4">
                  <div className="card-body p-4">
                    <h5 className="fw-bold text-deep-red mb-3">Categories</h5>
                    <div className="d-flex flex-column gap-2">
                      {categories.map((category) => (
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

                {/* Top Contributors */}
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
            </div>

            {/* Main Content */}
            <div className="col-lg-6">
              {/* Search and Filters */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4"
              >
                <Card>
                  <div className="card-body p-4">
                    <div className="row g-3">
                      <div className="col-md-8">
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
                      <div className="col-md-4">
                        <Button variant="secondary" className="w-100 d-flex align-items-center justify-content-center gap-2">
                          <Filter size={16} />
                          Filter
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Discussions */}
              <div className="d-flex flex-column gap-3">
                {filteredDiscussions.map((discussion, index) => (
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
                            src={discussion.avatar}
                            alt={discussion.author}
                            className="rounded-circle object-fit-cover me-3"
                            style={{ width: '48px', height: '48px' }}
                          />
                          <div className="flex-fill">
                            <div className="d-flex align-items-start justify-content-between mb-2">
                              <div>
                                <h5 className="fw-bold text-deep-red mb-1">
                                  {discussion.isPinned && (
                                    <span className="badge bg-warning text-dark me-2">Pinned</span>
                                  )}
                                  {discussion.title}
                                </h5>
                                <div className="d-flex align-items-center gap-2 text-muted small">
                                  <span>by {discussion.author}</span>
                                  <span>•</span>
                                  <span>{discussion.timeAgo}</span>
                                  <span>•</span>
                                  <span className="text-capitalize">{discussion.category}</span>
                                </div>
                              </div>
                            </div>
                            
                            <p className="text-muted mb-3">{discussion.excerpt}</p>
                            
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
                                  {discussion.replies} replies
                                </span>
                                <span className="d-flex align-items-center gap-1">
                                  <ThumbsUp size={14} />
                                  {discussion.likes} likes
                                </span>
                                <span className="d-flex align-items-center gap-1">
                                  <Eye size={14} />
                                  {discussion.views} views
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

            {/* Right Sidebar */}
            <div className="col-lg-3">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="sticky-top"
                style={{ top: '20px' }}
              >
                {/* Upcoming Events */}
                <Card className="mb-4">
                  <div className="card-body p-4">
                    <h5 className="fw-bold text-deep-red mb-3">Upcoming Events</h5>
                    <div className="d-flex flex-column gap-3">
                      {events.map((event, index) => (
                        <div key={event.title} className="border-bottom pb-3 last:border-0">
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <span className="badge bg-primary-red text-white">{event.type}</span>
                            <small className="text-muted">{event.attendees} attending</small>
                          </div>
                          <h6 className="fw-semibold text-deep-red mb-1">{event.title}</h6>
                          <div className="d-flex align-items-center gap-2 text-muted small mb-2">
                            <Calendar size={12} />
                            <span>{event.date}</span>
                          </div>
                          <div className="d-flex align-items-center gap-2 text-muted small mb-2">
                            <Clock size={12} />
                            <span>{event.time}</span>
                          </div>
                          <p className="text-muted small mb-2">{event.description}</p>
                          <Button size="sm" className="w-100">
                            Join Event
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>

                {/* Quick Actions */}
                <Card>
                  <div className="card-body p-4">
                    <h5 className="fw-bold text-deep-red mb-3">Quick Actions</h5>
                    <div className="d-grid gap-2">
                      <Button variant="primary" className="w-100">
                        <Plus size={16} className="me-2" />
                        New Discussion
                      </Button>
                      <Button variant="secondary" className="w-100" onClick={() => onNavigate('help-center')}>
                        <HelpCircle size={16} className="me-2" />
                        Ask Question
                      </Button>
                      <Button variant="secondary" className="w-100">
                        <Star size={16} className="me-2" />
                        Share Project
                      </Button>
                      <Button variant="secondary" className="w-100" onClick={() => onNavigate('contact')}>
                        <MessageCircle size={16} className="me-2" />
                        Contact Mods
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-gradient-secondary text-white">
        <div className="container-lg text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="display-4 fw-bold mb-4">Join Our Growing Community</h2>
            <p className="lead mb-5 opacity-75">
              Connect with thousands of educators and students passionate about 
              transforming STEM education through technology.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <Button variant="secondary" size="lg" className="bg-white text-primary-red border-white" onClick={() => onNavigate('dashboard')}>
                <Users size={20} className="me-2" />
                Join Community
              </Button>
              <Button variant="outline-secondary" size="lg" className="border-white text-white" onClick={() => onNavigate('about')}>
                <BookOpen size={20} className="me-2" />
                Learn More
              </Button>
            </div>
          </motion.div>
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
              <h6 className="fw-semibold mb-3">Platform</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <button onClick={() => onNavigate('features')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    STEM Labs
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('features')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Virtual Classrooms
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('progress-tracking')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Progress Tracking
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('features')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Scientific Tools
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