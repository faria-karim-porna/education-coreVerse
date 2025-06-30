import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell,
  LineChart,
  Line,
  Area,
  AreaChart
} from 'recharts';
import { 
  Trophy, 
  Award, 
  Target, 
  TrendingUp, 
  Calendar,
  Clock,
  Star,
  BookOpen,
  Users,
  Zap,
  Filter,
  Download,
  Share2,
  Eye,
  CheckCircle,
  AlertCircle,
  BarChart3
} from 'lucide-react';
import { Card } from '../ui/Card';
import { StatCard } from '../ui/StatCard';
import { Button } from '../ui/Button';
import { Header } from '../layout/Header';
import { Sidebar } from '../layout/Sidebar';
import { mockProgress } from '../../data/mockData';

interface StudentProgressPageProps {
  onNavigate: (view: string) => void;
}

export function StudentProgressPage({ onNavigate }: StudentProgressPageProps) {
  const [selectedTimeframe, setSelectedTimeframe] = useState('week');
  const [selectedMetric, setSelectedMetric] = useState('all');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const COLORS = ['#ff7474', '#c64242', '#F97316', '#EF4444', '#22c55e', '#3b82f6'];

  const timeframes = [
    { id: 'week', label: 'This Week' },
    { id: 'month', label: 'This Month' },
    { id: 'semester', label: 'This Semester' },
    { id: 'year', label: 'This Year' }
  ];

  const metrics = [
    { id: 'all', label: 'All Metrics' },
    { id: 'engagement', label: 'Engagement' },
    { id: 'performance', label: 'Performance' },
    { id: 'completion', label: 'Completion' }
  ];

  const monthlyProgress = [
    { month: 'Jan', physics: 65, chemistry: 70, biology: 80, math: 75 },
    { month: 'Feb', physics: 70, chemistry: 75, biology: 85, math: 78 },
    { month: 'Mar', physics: 78, chemistry: 80, biology: 88, math: 82 },
    { month: 'Apr', physics: 82, chemistry: 85, biology: 90, math: 85 },
    { month: 'May', physics: 85, chemistry: 88, biology: 92, math: 88 },
    { month: 'Jun', physics: 88, chemistry: 90, biology: 95, math: 90 }
  ];

  const skillsData = [
    { skill: 'Problem Solving', level: 85, growth: '+12%' },
    { skill: 'Critical Thinking', level: 78, growth: '+8%' },
    { skill: 'Data Analysis', level: 82, growth: '+15%' },
    { skill: 'Scientific Method', level: 90, growth: '+5%' },
    { skill: 'Collaboration', level: 75, growth: '+18%' },
    { skill: 'Communication', level: 80, growth: '+10%' }
  ];

  const achievements = [
    {
      title: 'Physics Master',
      description: 'Completed 50 physics simulations',
      icon: Zap,
      date: '2 days ago',
      rarity: 'Epic',
      progress: 100
    },
    {
      title: 'Lab Explorer',
      description: 'Tried all available lab types',
      icon: BookOpen,
      date: '1 week ago',
      rarity: 'Rare',
      progress: 100
    },
    {
      title: 'Team Player',
      description: 'Collaborated on 10 group projects',
      icon: Users,
      date: '2 weeks ago',
      rarity: 'Common',
      progress: 100
    },
    {
      title: 'Streak Master',
      description: 'Maintain 30-day learning streak',
      icon: Target,
      date: 'In Progress',
      rarity: 'Legendary',
      progress: 87
    }
  ];

  const recentActivities = [
    {
      type: 'assignment',
      title: 'Circuit Analysis Lab',
      subject: 'Physics',
      score: 95,
      time: '2 hours ago',
      status: 'completed'
    },
    {
      type: 'quiz',
      title: 'Organic Chemistry Quiz',
      subject: 'Chemistry',
      score: 88,
      time: '1 day ago',
      status: 'completed'
    },
    {
      type: 'lab',
      title: 'DNA Sequencing Simulation',
      subject: 'Biology',
      score: null,
      time: '2 days ago',
      status: 'in-progress'
    },
    {
      type: 'assignment',
      title: 'Calculus Problem Set',
      subject: 'Mathematics',
      score: 92,
      time: '3 days ago',
      status: 'completed'
    }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'assignment': return BookOpen;
      case 'quiz': return Target;
      case 'lab': return Award;
      default: return CheckCircle;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-success';
      case 'in-progress': return 'text-warning';
      case 'overdue': return 'text-danger';
      default: return 'text-muted';
    }
  };

  return (
    <div className="min-vh-100 bg-light-bg d-flex">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        activeView="student-progress"
        onViewChange={onNavigate}
      />
      
      <div className="flex-fill d-flex flex-column overflow-hidden">
        <Header
          onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)}
          isSidebarOpen={isSidebarOpen}
          onNavigate={onNavigate}
        />
        
        <main className="flex-fill overflow-auto">
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
                    <BarChart3 className="text-white" size={40} />
                  </div>
                  <h1 className="display-3 fw-bold mb-4">Student Progress</h1>
                  <p className="lead mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                    Monitor your learning journey with comprehensive analytics, 
                    achievements, and personalized insights to maximize your educational success.
                  </p>
                  <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                    <Button variant="secondary" size="lg" className="bg-white text-primary-red border-white">
                      <Download size={20} className="me-2" />
                      Export Report
                    </Button>
                    <Button variant="outline-secondary" size="lg" className="border-white text-white">
                      <Share2 size={20} className="me-2" />
                      Share Progress
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Filters */}
          <section className="py-4 bg-white border-bottom">
            <div className="container-lg">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="d-flex align-items-center gap-3">
                    <span className="fw-medium text-deep-red">Time Period:</span>
                    <div className="btn-group" role="group">
                      {timeframes.map((timeframe) => (
                        <button
                          key={timeframe.id}
                          onClick={() => setSelectedTimeframe(timeframe.id)}
                          className={`btn btn-sm ${
                            selectedTimeframe === timeframe.id ? 'btn-custom-primary' : 'btn-outline-secondary'
                          }`}
                        >
                          {timeframe.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center gap-3 justify-content-md-end">
                    <span className="fw-medium text-deep-red">Metrics:</span>
                    <div className="btn-group" role="group">
                      {metrics.map((metric) => (
                        <button
                          key={metric.id}
                          onClick={() => setSelectedMetric(metric.id)}
                          className={`btn btn-sm ${
                            selectedMetric === metric.id ? 'btn-custom-primary' : 'btn-outline-secondary'
                          }`}
                        >
                          {metric.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Overview */}
          <section className="py-5 bg-light-bg">
            <div className="container-lg">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="row g-4 mb-5"
              >
                <div className="col-sm-6 col-lg-3">
                  <StatCard
                    title="Total Points"
                    value={mockProgress.totalPoints}
                    change={12}
                    icon={Trophy}
                    color="success"
                  />
                </div>
                <div className="col-sm-6 col-lg-3">
                  <StatCard
                    title="Assignments Done"
                    value={mockProgress.completedAssignments}
                    change={8}
                    icon={Target}
                    color="primary"
                  />
                </div>
                <div className="col-sm-6 col-lg-3">
                  <StatCard
                    title="Badges Earned"
                    value={mockProgress.badgesEarned.length}
                    change={25}
                    icon={Award}
                    color="warning"
                  />
                </div>
                <div className="col-sm-6 col-lg-3">
                  <StatCard
                    title="Weekly Growth"
                    value="15%"
                    change={15}
                    icon={TrendingUp}
                    color="secondary"
                  />
                </div>
              </motion.div>

              {/* Charts Section */}
              <div className="row g-4 mb-5">
                {/* Monthly Progress */}
                <div className="col-lg-8">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Card>
                      <div className="card-body p-4">
                        <div className="d-flex align-items-center justify-content-between mb-4">
                          <h3 className="h4 fw-bold text-deep-red mb-0">Subject Progress Over Time</h3>
                          <Button size="sm" variant="secondary">
                            <Eye size={14} className="me-1" />
                            View Details
                          </Button>
                        </div>
                        <div style={{ width: '100%', height: '350px' }}>
                          <ResponsiveContainer>
                            <AreaChart data={monthlyProgress}>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="month" />
                              <YAxis />
                              <Tooltip />
                              <Area type="monotone" dataKey="physics" stackId="1" stroke="#ff7474" fill="#ff7474" fillOpacity={0.6} />
                              <Area type="monotone" dataKey="chemistry" stackId="1" stroke="#c64242" fill="#c64242" fillOpacity={0.6} />
                              <Area type="monotone" dataKey="biology" stackId="1" stroke="#22c55e" fill="#22c55e" fillOpacity={0.6} />
                              <Area type="monotone" dataKey="math" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                            </AreaChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </div>

                {/* Subject Distribution */}
                <div className="col-lg-4">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Card>
                      <div className="card-body p-4">
                        <h3 className="h4 fw-bold text-deep-red mb-4">Subject Distribution</h3>
                        <div style={{ width: '100%', height: '300px' }}>
                          <ResponsiveContainer>
                            <PieChart>
                              <Pie
                                data={mockProgress.subjectProgress}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={({ subject, progress }) => `${subject}: ${progress}%`}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="progress"
                              >
                                {mockProgress.subjectProgress.map((_, index) => (
                                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                              </Pie>
                              <Tooltip />
                            </PieChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </div>
              </div>

              {/* Skills & Achievements */}
              <div className="row g-4 mb-5">
                {/* Skills Development */}
                <div className="col-lg-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Card>
                      <div className="card-body p-4">
                        <h3 className="h4 fw-bold text-deep-red mb-4">Skills Development</h3>
                        <div className="d-flex flex-column gap-3">
                          {skillsData.map((skill, index) => (
                            <div key={skill.skill} className="d-flex align-items-center justify-content-between">
                              <div className="flex-fill me-3">
                                <div className="d-flex align-items-center justify-content-between mb-1">
                                  <span className="fw-medium text-deep-red">{skill.skill}</span>
                                  <div className="d-flex align-items-center gap-2">
                                    <span className="small text-muted">{skill.level}%</span>
                                    <span className="small text-success">{skill.growth}</span>
                                  </div>
                                </div>
                                <div className="progress" style={{ height: '8px' }}>
                                  <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${skill.level}%` }}
                                    transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                                    className="progress-bar bg-primary-red"
                                  />
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </div>

                {/* Recent Achievements */}
                <div className="col-lg-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Card>
                      <div className="card-body p-4">
                        <h3 className="h4 fw-bold text-deep-red mb-4">Recent Achievements</h3>
                        <div className="d-flex flex-column gap-3">
                          {achievements.map((achievement, index) => (
                            <motion.div
                              key={achievement.title}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.6 + index * 0.1 }}
                              className="d-flex align-items-start p-3 border rounded-3 bg-light-bg"
                            >
                              <div className={`p-2 rounded-3 me-3 ${
                                achievement.rarity === 'Legendary' ? 'bg-warning' :
                                achievement.rarity === 'Epic' ? 'bg-primary' :
                                achievement.rarity === 'Rare' ? 'bg-success' : 'bg-secondary'
                              } bg-opacity-10`}>
                                <achievement.icon className={`${
                                  achievement.rarity === 'Legendary' ? 'text-warning' :
                                  achievement.rarity === 'Epic' ? 'text-primary' :
                                  achievement.rarity === 'Rare' ? 'text-success' : 'text-secondary'
                                }`} size={20} />
                              </div>
                              <div className="flex-fill">
                                <div className="d-flex align-items-center justify-content-between mb-1">
                                  <h6 className="fw-semibold text-deep-red mb-0">{achievement.title}</h6>
                                  <span className={`badge ${
                                    achievement.rarity === 'Legendary' ? 'bg-warning' :
                                    achievement.rarity === 'Epic' ? 'bg-primary' :
                                    achievement.rarity === 'Rare' ? 'bg-success' : 'bg-secondary'
                                  } text-white`}>
                                    {achievement.rarity}
                                  </span>
                                </div>
                                <p className="text-muted small mb-2">{achievement.description}</p>
                                <div className="d-flex align-items-center justify-content-between">
                                  <small className="text-muted">{achievement.date}</small>
                                  {achievement.progress < 100 && (
                                    <div className="d-flex align-items-center gap-2">
                                      <div className="progress" style={{ width: '60px', height: '4px' }}>
                                        <div 
                                          className="progress-bar bg-primary-red" 
                                          style={{ width: `${achievement.progress}%` }}
                                        />
                                      </div>
                                      <small className="text-muted">{achievement.progress}%</small>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </div>
              </div>

              {/* Recent Activity */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Card>
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <h3 className="h4 fw-bold text-deep-red mb-0">Recent Activity</h3>
                      <Button size="sm" variant="secondary" onClick={() => onNavigate('dashboard')}>
                        View All
                      </Button>
                    </div>
                    <div className="d-flex flex-column gap-3">
                      {recentActivities.map((activity, index) => {
                        const ActivityIcon = getActivityIcon(activity.type);
                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 + index * 0.1 }}
                            className="d-flex align-items-center p-3 border rounded-3"
                          >
                            <div className="bg-primary-red bg-opacity-10 rounded-3 d-flex align-items-center justify-content-center me-3"
                                 style={{ width: '40px', height: '40px' }}>
                              <ActivityIcon className="text-primary-red" size={20} />
                            </div>
                            <div className="flex-fill">
                              <div className="d-flex align-items-center justify-content-between mb-1">
                                <h6 className="fw-semibold text-deep-red mb-0">{activity.title}</h6>
                                <div className="d-flex align-items-center gap-2">
                                  {activity.score && (
                                    <span className="badge bg-success text-white">{activity.score}%</span>
                                  )}
                                  <span className={`small ${getStatusColor(activity.status)}`}>
                                    {activity.status === 'completed' ? <CheckCircle size={14} /> : 
                                     activity.status === 'in-progress' ? <AlertCircle size={14} /> : null}
                                  </span>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <span className="text-muted small">{activity.subject}</span>
                                <span className="text-muted small">{activity.time}</span>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-5 bg-gradient-secondary text-white">
            <div className="container-lg text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className="display-4 fw-bold mb-4">Keep Learning & Growing</h2>
                <p className="lead mb-5 opacity-75">
                  Your progress shows great dedication to learning. Continue your journey 
                  and unlock new achievements in STEM education.
                </p>
                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                  <Button variant="secondary" size="lg" className="bg-white text-primary-red border-white" onClick={() => onNavigate('dashboard')}>
                    <BookOpen size={20} className="me-2" />
                    Continue Learning
                  </Button>
                  <Button variant="outline-secondary" size="lg" className="border-white text-white" onClick={() => onNavigate('features')}>
                    <BarChart3 size={20} className="me-2" />
                    Explore Features
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
        </main>
      </div>
    </div>
  );
}