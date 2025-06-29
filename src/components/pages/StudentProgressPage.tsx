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
  Legend,
  AreaChart,
  Area
} from 'recharts';
import { 
  BookOpen,
  Search,
  Filter,
  Download,
  Share2,
  Users,
  Award,
  TrendingUp,
  Clock,
  Calendar,
  CheckCircle,
  AlertCircle,
  Star,
  Mail,
  Phone,
  MessageCircle,
  FileText,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  ArrowUpRight,
  ArrowDownRight,
  BarChart2,
  Activity,
  Target,
  Flag,
  AlertTriangle
} from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';

interface StudentProgressPageProps {
  onNavigate: (view: string) => void;
}

interface Student {
  id: string;
  name: string;
  email: string;
  avatar: string;
  grade: string;
  overallProgress: number;
  attendance: number;
  lastActive: Date;
  subjects: {
    name: string;
    progress: number;
    grade: string;
    trend: 'up' | 'down' | 'stable';
  }[];
  recentActivities: {
    type: string;
    title: string;
    date: Date;
    score?: number;
    status: 'completed' | 'in-progress' | 'overdue' | 'not-started';
  }[];
  strengths: string[];
  areasForImprovement: string[];
  notes: string;
}

export function StudentProgressPage({ onNavigate }: StudentProgressPageProps) {
  const [students, setStudents] = useState<Student[]>([
    {
      id: '1',
      name: 'Alice Johnson',
      email: 'alice@student.com',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      grade: 'A-',
      overallProgress: 85,
      attendance: 92,
      lastActive: new Date('2024-02-12T14:30:00'),
      subjects: [
        { name: 'Physics', progress: 78, grade: 'B+', trend: 'up' },
        { name: 'Chemistry', progress: 92, grade: 'A', trend: 'up' },
        { name: 'Biology', progress: 85, grade: 'A-', trend: 'stable' },
        { name: 'Mathematics', progress: 88, grade: 'B+', trend: 'up' }
      ],
      recentActivities: [
        { type: 'assignment', title: 'Circuit Analysis Lab', date: new Date('2024-02-12T10:30:00'), score: 92, status: 'completed' },
        { type: 'quiz', title: 'Organic Chemistry Quiz', date: new Date('2024-02-10T15:45:00'), score: 85, status: 'completed' },
        { type: 'lab', title: 'DNA Sequencing Simulation', date: new Date('2024-02-08T13:20:00'), status: 'in-progress' },
        { type: 'assignment', title: 'Calculus Problem Set', date: new Date('2024-02-05T09:15:00'), score: 90, status: 'completed' }
      ],
      strengths: ['Laboratory techniques', 'Problem-solving', 'Data analysis'],
      areasForImprovement: ['Theoretical physics concepts', 'Time management'],
      notes: 'Alice is a dedicated student who excels in practical applications. She would benefit from more focus on theoretical concepts.'
    },
    {
      id: '2',
      name: 'James Park',
      email: 'james@student.com',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      grade: 'B+',
      overallProgress: 78,
      attendance: 85,
      lastActive: new Date('2024-02-11T16:45:00'),
      subjects: [
        { name: 'Physics', progress: 82, grade: 'B+', trend: 'up' },
        { name: 'Chemistry', progress: 75, grade: 'B', trend: 'stable' },
        { name: 'Biology', progress: 68, grade: 'C+', trend: 'down' },
        { name: 'Mathematics', progress: 90, grade: 'A-', trend: 'up' }
      ],
      recentActivities: [
        { type: 'assignment', title: 'Mechanics Problem Set', date: new Date('2024-02-11T14:20:00'), score: 88, status: 'completed' },
        { type: 'quiz', title: 'Algebra Quiz', date: new Date('2024-02-09T11:30:00'), score: 92, status: 'completed' },
        { type: 'lab', title: 'Chemical Reactions Lab', date: new Date('2024-02-07T15:10:00'), status: 'completed', score: 78 },
        { type: 'assignment', title: 'Cell Biology Report', date: new Date('2024-02-15T23:59:00'), status: 'overdue' }
      ],
      strengths: ['Mathematical reasoning', 'Computational skills', 'Physics concepts'],
      areasForImprovement: ['Biology fundamentals', 'Written communication', 'Meeting deadlines'],
      notes: 'James shows exceptional talent in mathematics and physics but needs support with biology concepts and assignment deadlines.'
    },
    {
      id: '3',
      name: 'Emily Watson',
      email: 'emily@student.com',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      grade: 'A',
      overallProgress: 94,
      attendance: 98,
      lastActive: new Date('2024-02-12T09:15:00'),
      subjects: [
        { name: 'Physics', progress: 88, grade: 'A-', trend: 'up' },
        { name: 'Chemistry', progress: 95, grade: 'A', trend: 'stable' },
        { name: 'Biology', progress: 98, grade: 'A+', trend: 'up' },
        { name: 'Mathematics', progress: 92, grade: 'A', trend: 'stable' }
      ],
      recentActivities: [
        { type: 'assignment', title: 'Genetic Engineering Essay', date: new Date('2024-02-12T08:30:00'), score: 98, status: 'completed' },
        { type: 'quiz', title: 'Biochemistry Quiz', date: new Date('2024-02-10T10:15:00'), score: 95, status: 'completed' },
        { type: 'lab', title: 'Physics Experiment', date: new Date('2024-02-08T14:45:00'), status: 'completed', score: 92 },
        { type: 'assignment', title: 'Calculus Assignment', date: new Date('2024-02-14T23:59:00'), status: 'not-started' }
      ],
      strengths: ['Research skills', 'Critical thinking', 'Scientific writing', 'Laboratory work'],
      areasForImprovement: ['Group collaboration', 'Presentation skills'],
      notes: 'Emily is an exceptional student with a particular aptitude for biology. She could benefit from more group projects to develop collaboration skills.'
    },
    {
      id: '4',
      name: 'David Kim',
      email: 'david@student.com',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      grade: 'C+',
      overallProgress: 68,
      attendance: 75,
      lastActive: new Date('2024-02-10T11:20:00'),
      subjects: [
        { name: 'Physics', progress: 65, grade: 'C', trend: 'down' },
        { name: 'Chemistry', progress: 70, grade: 'C+', trend: 'stable' },
        { name: 'Biology', progress: 72, grade: 'C+', trend: 'up' },
        { name: 'Mathematics', progress: 62, grade: 'C-', trend: 'down' }
      ],
      recentActivities: [
        { type: 'assignment', title: 'Physics Problem Set', date: new Date('2024-02-10T10:30:00'), score: 65, status: 'completed' },
        { type: 'quiz', title: 'Chemistry Formulas Quiz', date: new Date('2024-02-08T13:45:00'), score: 72, status: 'completed' },
        { type: 'lab', title: 'Biology Lab Report', date: new Date('2024-02-05T15:20:00'), status: 'completed', score: 68 },
        { type: 'assignment', title: 'Mathematics Assignment', date: new Date('2024-02-03T23:59:00'), status: 'completed', score: 60 }
      ],
      strengths: ['Practical applications', 'Visual learning', 'Creativity'],
      areasForImprovement: ['Theoretical concepts', 'Study habits', 'Attendance', 'Time management'],
      notes: 'David is struggling with several subjects and has attendance issues. Recommend additional tutoring and regular check-ins.'
    }
  ]);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [timeRange, setTimeRange] = useState('month');
  const [expandedNotes, setExpandedNotes] = useState(false);
  const [isAddingNote, setIsAddingNote] = useState(false);
  const [newNote, setNewNote] = useState('');

  // Mock data for charts
  const weeklyActivityData = [
    { day: 'Mon', activities: 8, assignments: 2, quizzes: 1 },
    { day: 'Tue', activities: 12, assignments: 3, quizzes: 2 },
    { day: 'Wed', activities: 15, assignments: 4, quizzes: 1 },
    { day: 'Thu', activities: 10, assignments: 2, quizzes: 2 },
    { day: 'Fri', activities: 18, assignments: 5, quizzes: 3 },
    { day: 'Sat', activities: 5, assignments: 1, quizzes: 0 },
    { day: 'Sun', activities: 3, assignments: 0, quizzes: 1 }
  ];

  const monthlyProgressData = [
    { month: 'Jan', physics: 65, chemistry: 70, biology: 80, mathematics: 75 },
    { month: 'Feb', physics: 70, chemistry: 75, biology: 85, mathematics: 78 },
    { month: 'Mar', physics: 78, chemistry: 80, biology: 88, mathematics: 82 },
    { month: 'Apr', physics: 82, chemistry: 85, biology: 90, mathematics: 85 },
    { month: 'May', physics: 85, chemistry: 88, biology: 92, mathematics: 88 },
    { month: 'Jun', physics: 88, chemistry: 90, biology: 95, mathematics: 90 }
  ];

  const attendanceData = [
    { month: 'Jan', present: 18, absent: 2, late: 1 },
    { month: 'Feb', present: 16, absent: 3, late: 2 },
    { month: 'Mar', present: 20, absent: 1, late: 0 },
    { month: 'Apr', present: 19, absent: 0, late: 2 },
    { month: 'May', present: 17, absent: 2, late: 2 },
    { month: 'Jun', present: 15, absent: 4, late: 1 }
  ];

  const COLORS = ['#ff7474', '#c64242', '#22c55e', '#3b82f6'];

  const filteredStudents = students.filter(student => 
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addNoteToStudent = () => {
    if (!selectedStudent || !newNote.trim()) return;
    
    const updatedStudents = students.map(student => 
      student.id === selectedStudent.id 
        ? { ...student, notes: student.notes ? `${student.notes}\n\n${new Date().toLocaleDateString()}: ${newNote}` : newNote }
        : student
    );
    
    setStudents(updatedStudents);
    setSelectedStudent({
      ...selectedStudent,
      notes: selectedStudent.notes ? `${selectedStudent.notes}\n\n${new Date().toLocaleDateString()}: ${newNote}` : newNote
    });
    
    setNewNote('');
    setIsAddingNote(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-success';
      case 'in-progress': return 'text-warning';
      case 'overdue': return 'text-danger';
      case 'not-started': return 'text-muted';
      default: return 'text-muted';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle size={14} />;
      case 'in-progress': return <Clock size={14} />;
      case 'overdue': return <AlertTriangle size={14} />;
      case 'not-started': return <AlertCircle size={14} />;
      default: return <AlertCircle size={14} />;
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <ArrowUpRight size={14} className="text-success" />;
      case 'down': return <ArrowDownRight size={14} className="text-danger" />;
      default: return <ChevronRight size={14} className="text-muted" />;
    }
  };

  const getGradeColor = (grade: string) => {
    if (grade.startsWith('A')) return 'text-success';
    if (grade.startsWith('B')) return 'text-primary';
    if (grade.startsWith('C')) return 'text-warning';
    if (grade.startsWith('D')) return 'text-danger';
    if (grade.startsWith('F')) return 'text-danger';
    return 'text-muted';
  };

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
                <BarChart2 className="text-white" size={40} />
              </div>
              <h1 className="display-3 fw-bold mb-4">Student Progress Tracking</h1>
              <p className="lead mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                Comprehensive analytics and insights to monitor student performance, 
                identify strengths and areas for improvement, and guide personalized learning.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <Button variant="secondary" size="lg" className="bg-white text-primary-red border-white">
                  <Download size={20} className="me-2" />
                  Export Reports
                </Button>
                <Button variant="outline-secondary" size="lg" className="border-white text-white">
                  <Share2 size={20} className="me-2" />
                  Share Insights
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-5 bg-white">
        <div className="container-lg">
          <div className="row g-4">
            {/* Left Sidebar - Student List */}
            <div className="col-lg-4">
              <Card>
                <div className="card-body p-4">
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <h3 className="h4 fw-bold text-deep-red mb-0">Students</h3>
                    <div className="position-relative">
                      <Search className="position-absolute text-muted" 
                              style={{ left: '8px', top: '50%', transform: 'translateY(-50%)', width: '14px', height: '14px' }} />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search students..."
                        className="form-control form-control-sm ps-4"
                        style={{ paddingLeft: '2rem', width: '200px' }}
                      />
                    </div>
                  </div>
                  
                  <div className="d-flex flex-column gap-2" style={{ maxHeight: '600px', overflowY: 'auto' }}>
                    {filteredStudents.map((student) => (
                      <div 
                        key={student.id}
                        className={`d-flex align-items-center p-3 border rounded-3 cursor-pointer ${selectedStudent?.id === student.id ? 'bg-light-bg border-primary-red' : ''}`}
                        onClick={() => setSelectedStudent(student)}
                      >
                        <img 
                          src={student.avatar} 
                          alt={student.name} 
                          className="rounded-circle me-3"
                          style={{ width: '48px', height: '48px', objectFit: 'cover' }}
                        />
                        <div className="flex-fill">
                          <div className="d-flex align-items-center justify-content-between">
                            <h5 className="fw-semibold text-deep-red mb-0">{student.name}</h5>
                            <span className={`badge ${student.grade.startsWith('A') ? 'bg-success' : 
                                              student.grade.startsWith('B') ? 'bg-primary' : 
                                              student.grade.startsWith('C') ? 'bg-warning' : 
                                              'bg-danger'} text-white`}>
                              {student.grade}
                            </span>
                          </div>
                          <div className="d-flex align-items-center justify-content-between">
                            <span className="text-muted small">{student.email}</span>
                            <span className="text-muted small">
                              {student.lastActive.toLocaleDateString()}
                            </span>
                          </div>
                          <div className="progress mt-2" style={{ height: '6px' }}>
                            <div 
                              className="progress-bar bg-primary-red" 
                              style={{ width: `${student.overallProgress}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    {filteredStudents.length === 0 && (
                      <div className="text-center py-4">
                        <p className="text-muted mb-0">No students found</p>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </div>

            {/* Main Content - Student Details */}
            <div className="col-lg-8">
              {selectedStudent ? (
                <div className="d-flex flex-column gap-4">
                  {/* Student Overview */}
                  <Card>
                    <div className="card-body p-4">
                      <div className="d-flex align-items-start">
                        <img 
                          src={selectedStudent.avatar} 
                          alt={selectedStudent.name} 
                          className="rounded-circle me-4"
                          style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                        />
                        <div className="flex-fill">
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <h3 className="h3 fw-bold text-deep-red mb-0">{selectedStudent.name}</h3>
                            <div className="d-flex gap-2">
                              <Button size="sm" variant="secondary">
                                <Mail size={14} className="me-1" />
                                Email
                              </Button>
                              <Button size="sm">
                                <MessageCircle size={14} className="me-1" />
                                Message
                              </Button>
                            </div>
                          </div>
                          
                          <div className="row g-3 mb-3">
                            <div className="col-sm-6 col-md-3">
                              <div className="d-flex flex-column">
                                <span className="text-muted small">Overall Grade</span>
                                <span className={`fw-bold ${getGradeColor(selectedStudent.grade)}`}>
                                  {selectedStudent.grade}
                                </span>
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                              <div className="d-flex flex-column">
                                <span className="text-muted small">Progress</span>
                                <span className="fw-bold text-primary-red">
                                  {selectedStudent.overallProgress}%
                                </span>
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                              <div className="d-flex flex-column">
                                <span className="text-muted small">Attendance</span>
                                <span className="fw-bold text-success">
                                  {selectedStudent.attendance}%
                                </span>
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                              <div className="d-flex flex-column">
                                <span className="text-muted small">Last Active</span>
                                <span className="fw-bold text-muted">
                                  {selectedStudent.lastActive.toLocaleDateString()}
                                </span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="d-flex gap-2">
                            <Button 
                              size="sm" 
                              variant={activeTab === 'overview' ? 'primary' : 'secondary'}
                              onClick={() => setActiveTab('overview')}
                            >
                              Overview
                            </Button>
                            <Button 
                              size="sm" 
                              variant={activeTab === 'subjects' ? 'primary' : 'secondary'}
                              onClick={() => setActiveTab('subjects')}
                            >
                              Subjects
                            </Button>
                            <Button 
                              size="sm" 
                              variant={activeTab === 'activities' ? 'primary' : 'secondary'}
                              onClick={() => setActiveTab('activities')}
                            >
                              Activities
                            </Button>
                            <Button 
                              size="sm" 
                              variant={activeTab === 'analytics' ? 'primary' : 'secondary'}
                              onClick={() => setActiveTab('analytics')}
                            >
                              Analytics
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Tab Content */}
                  {activeTab === 'overview' && (
                    <div className="row g-4">
                      {/* Progress Overview */}
                      <div className="col-md-6">
                        <Card>
                          <div className="card-body p-4">
                            <h4 className="h5 fw-bold text-deep-red mb-4">Progress Overview</h4>
                            <div style={{ height: '250px' }}>
                              <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                  <Pie
                                    data={selectedStudent.subjects}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={({ name, progress }) => `${name}: ${progress}%`}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="progress"
                                    nameKey="name"
                                  >
                                    {selectedStudent.subjects.map((_, index) => (
                                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                  </Pie>
                                  <Tooltip />
                                </PieChart>
                              </ResponsiveContainer>
                            </div>
                          </div>
                        </Card>
                      </div>

                      {/* Weekly Activity */}
                      <div className="col-md-6">
                        <Card>
                          <div className="card-body p-4">
                            <h4 className="h5 fw-bold text-deep-red mb-4">Weekly Activity</h4>
                            <div style={{ height: '250px' }}>
                              <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={weeklyActivityData}>
                                  <CartesianGrid strokeDasharray="3 3" />
                                  <XAxis dataKey="day" />
                                  <YAxis />
                                  <Tooltip />
                                  <Bar dataKey="activities" fill="#ff7474" name="Activities" />
                                </BarChart>
                              </ResponsiveContainer>
                            </div>
                          </div>
                        </Card>
                      </div>

                      {/* Strengths & Improvements */}
                      <div className="col-md-6">
                        <Card>
                          <div className="card-body p-4">
                            <h4 className="h5 fw-bold text-deep-red mb-3">Strengths & Areas for Improvement</h4>
                            <div className="mb-4">
                              <h6 className="fw-semibold text-success mb-2">
                                <Star size={16} className="me-1" />
                                Strengths
                              </h6>
                              <ul className="text-muted mb-0">
                                {selectedStudent.strengths.map((strength, index) => (
                                  <li key={index}>{strength}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h6 className="fw-semibold text-warning mb-2">
                                <Target size={16} className="me-1" />
                                Areas for Improvement
                              </h6>
                              <ul className="text-muted mb-0">
                                {selectedStudent.areasForImprovement.map((area, index) => (
                                  <li key={index}>{area}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </Card>
                      </div>

                      {/* Recent Activities */}
                      <div className="col-md-6">
                        <Card>
                          <div className="card-body p-4">
                            <h4 className="h5 fw-bold text-deep-red mb-3">Recent Activities</h4>
                            <div className="d-flex flex-column gap-2">
                              {selectedStudent.recentActivities.map((activity, index) => (
                                <div key={index} className="d-flex align-items-start p-2 border rounded-3">
                                  <div className={`${getStatusColor(activity.status)} me-2 mt-1`}>
                                    {getStatusIcon(activity.status)}
                                  </div>
                                  <div className="flex-fill">
                                    <div className="d-flex align-items-center justify-content-between">
                                      <span className="fw-medium text-deep-red">{activity.title}</span>
                                      {activity.score !== undefined && (
                                        <span className={`badge ${activity.score >= 90 ? 'bg-success' : 
                                                            activity.score >= 80 ? 'bg-primary' : 
                                                            activity.score >= 70 ? 'bg-warning' : 
                                                            'bg-danger'} text-white`}>
                                          {activity.score}%
                                        </span>
                                      )}
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                      <span className="text-muted small text-capitalize">{activity.type}</span>
                                      <span className="text-muted small">
                                        {activity.date.toLocaleDateString()}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </Card>
                      </div>

                      {/* Teacher Notes */}
                      <div className="col-12">
                        <Card>
                          <div className="card-body p-4">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                              <h4 className="h5 fw-bold text-deep-red mb-0">Teacher Notes</h4>
                              <Button 
                                size="sm" 
                                variant="secondary"
                                onClick={() => setExpandedNotes(!expandedNotes)}
                              >
                                {expandedNotes ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                              </Button>
                            </div>
                            
                            {expandedNotes ? (
                              <div className="mb-3">
                                <p className="text-muted mb-3" style={{ whiteSpace: 'pre-line' }}>
                                  {selectedStudent.notes || 'No notes available.'}
                                </p>
                                <Button size="sm" onClick={() => setIsAddingNote(true)}>
                                  <Plus size={14} className="me-1" />
                                  Add Note
                                </Button>
                              </div>
                            ) : (
                              <div className="d-flex align-items-center justify-content-between">
                                <p className="text-muted mb-0">
                                  {selectedStudent.notes 
                                    ? selectedStudent.notes.substring(0, 100) + (selectedStudent.notes.length > 100 ? '...' : '')
                                    : 'No notes available.'}
                                </p>
                                <Button size="sm" onClick={() => setIsAddingNote(true)}>
                                  <Plus size={14} className="me-1" />
                                  Add Note
                                </Button>
                              </div>
                            )}
                            
                            {isAddingNote && (
                              <div className="mt-3">
                                <textarea
                                  className="form-control mb-2"
                                  placeholder="Add a new note..."
                                  value={newNote}
                                  onChange={(e) => setNewNote(e.target.value)}
                                  rows={3}
                                />
                                <div className="d-flex gap-2">
                                  <Button size="sm" onClick={addNoteToStudent}>
                                    Save Note
                                  </Button>
                                  <Button size="sm" variant="secondary" onClick={() => setIsAddingNote(false)}>
                                    Cancel
                                  </Button>
                                </div>
                              </div>
                            )}
                          </div>
                        </Card>
                      </div>
                    </div>
                  )}

                  {activeTab === 'subjects' && (
                    <Card>
                      <div className="card-body p-4">
                        <h4 className="h5 fw-bold text-deep-red mb-4">Subject Performance</h4>
                        <div className="table-responsive">
                          <table className="table table-hover">
                            <thead>
                              <tr>
                                <th>Subject</th>
                                <th>Progress</th>
                                <th>Grade</th>
                                <th>Trend</th>
                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {selectedStudent.subjects.map((subject, index) => (
                                <tr key={index}>
                                  <td className="fw-medium text-deep-red">{subject.name}</td>
                                  <td>
                                    <div className="d-flex align-items-center gap-2">
                                      <div className="progress flex-fill" style={{ height: '8px' }}>
                                        <div 
                                          className="progress-bar bg-primary-red" 
                                          style={{ width: `${subject.progress}%` }}
                                        />
                                      </div>
                                      <span className="text-muted small">{subject.progress}%</span>
                                    </div>
                                  </td>
                                  <td className={`fw-semibold ${getGradeColor(subject.grade)}`}>
                                    {subject.grade}
                                  </td>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      {getTrendIcon(subject.trend)}
                                      <span className={`small ms-1 ${
                                        subject.trend === 'up' ? 'text-success' : 
                                        subject.trend === 'down' ? 'text-danger' : 
                                        'text-muted'
                                      }`}>
                                        {subject.trend === 'up' ? 'Improving' : 
                                         subject.trend === 'down' ? 'Declining' : 
                                         'Stable'}
                                      </span>
                                    </div>
                                  </td>
                                  <td>
                                    <Button size="sm" variant="secondary">
                                      View Details
                                    </Button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        
                        <div style={{ height: '300px' }} className="mt-4">
                          <h5 className="h6 fw-bold text-deep-red mb-3">Progress Over Time</h5>
                          <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={monthlyProgressData}>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="month" />
                              <YAxis />
                              <Tooltip />
                              <Legend />
                              {selectedStudent.subjects.map((subject, index) => (
                                <Line 
                                  key={subject.name}
                                  type="monotone" 
                                  dataKey={subject.name.toLowerCase()} 
                                  stroke={COLORS[index % COLORS.length]} 
                                  activeDot={{ r: 8 }}
                                  name={subject.name}
                                />
                              ))}
                            </LineChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    </Card>
                  )}

                  {activeTab === 'activities' && (
                    <div className="row g-4">
                      <div className="col-12">
                        <Card>
                          <div className="card-body p-4">
                            <div className="d-flex align-items-center justify-content-between mb-4">
                              <h4 className="h5 fw-bold text-deep-red mb-0">Recent Activities</h4>
                              <div className="d-flex gap-2">
                                <select 
                                  className="form-select form-select-sm"
                                  value={timeRange}
                                  onChange={(e) => setTimeRange(e.target.value)}
                                  style={{ width: '120px' }}
                                >
                                  <option value="week">This Week</option>
                                  <option value="month">This Month</option>
                                  <option value="semester">This Semester</option>
                                </select>
                                <Button size="sm" variant="secondary">
                                  <Filter size={14} className="me-1" />
                                  Filter
                                </Button>
                              </div>
                            </div>
                            
                            <div className="table-responsive">
                              <table className="table table-hover">
                                <thead>
                                  <tr>
                                    <th>Activity</th>
                                    <th>Type</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Score</th>
                                    <th>Actions</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {selectedStudent.recentActivities.map((activity, index) => (
                                    <tr key={index}>
                                      <td className="fw-medium text-deep-red">{activity.title}</td>
                                      <td className="text-capitalize">{activity.type}</td>
                                      <td>{activity.date.toLocaleDateString()}</td>
                                      <td>
                                        <div className={`d-flex align-items-center ${getStatusColor(activity.status)}`}>
                                          {getStatusIcon(activity.status)}
                                          <span className="ms-1 text-capitalize">{activity.status.replace('-', ' ')}</span>
                                        </div>
                                      </td>
                                      <td>
                                        {activity.score !== undefined ? (
                                          <span className={`fw-semibold ${
                                            activity.score >= 90 ? 'text-success' : 
                                            activity.score >= 80 ? 'text-primary' : 
                                            activity.score >= 70 ? 'text-warning' : 
                                            'text-danger'
                                          }`}>
                                            {activity.score}%
                                          </span>
                                        ) : (
                                          <span className="text-muted">-</span>
                                        )}
                                      </td>
                                      <td>
                                        <Button size="sm" variant="secondary">
                                          View Details
                                        </Button>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </Card>
                      </div>
                      
                      <div className="col-md-6">
                        <Card>
                          <div className="card-body p-4">
                            <h4 className="h5 fw-bold text-deep-red mb-3">Activity Breakdown</h4>
                            <div style={{ height: '250px' }}>
                              <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={weeklyActivityData}>
                                  <CartesianGrid strokeDasharray="3 3" />
                                  <XAxis dataKey="day" />
                                  <YAxis />
                                  <Tooltip />
                                  <Legend />
                                  <Bar dataKey="assignments" fill="#ff7474" name="Assignments" />
                                  <Bar dataKey="quizzes" fill="#c64242" name="Quizzes" />
                                </BarChart>
                              </ResponsiveContainer>
                            </div>
                          </div>
                        </Card>
                      </div>
                      
                      <div className="col-md-6">
                        <Card>
                          <div className="card-body p-4">
                            <h4 className="h5 fw-bold text-deep-red mb-3">Completion Rate</h4>
                            <div className="d-flex flex-column gap-3">
                              <div>
                                <div className="d-flex align-items-center justify-content-between mb-1">
                                  <span className="text-muted">Assignments</span>
                                  <span className="fw-semibold text-success">92%</span>
                                </div>
                                <div className="progress" style={{ height: '8px' }}>
                                  <div className="progress-bar bg-success" style={{ width: '92%' }} />
                                </div>
                              </div>
                              <div>
                                <div className="d-flex align-items-center justify-content-between mb-1">
                                  <span className="text-muted">Quizzes</span>
                                  <span className="fw-semibold text-primary">85%</span>
                                </div>
                                <div className="progress" style={{ height: '8px' }}>
                                  <div className="progress-bar bg-primary" style={{ width: '85%' }} />
                                </div>
                              </div>
                              <div>
                                <div className="d-flex align-items-center justify-content-between mb-1">
                                  <span className="text-muted">Labs</span>
                                  <span className="fw-semibold text-warning">78%</span>
                                </div>
                                <div className="progress" style={{ height: '8px' }}>
                                  <div className="progress-bar bg-warning" style={{ width: '78%' }} />
                                </div>
                              </div>
                              <div>
                                <div className="d-flex align-items-center justify-content-between mb-1">
                                  <span className="text-muted">Projects</span>
                                  <span className="fw-semibold text-primary-red">95%</span>
                                </div>
                                <div className="progress" style={{ height: '8px' }}>
                                  <div className="progress-bar bg-primary-red" style={{ width: '95%' }} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </div>
                    </div>
                  )}

                  {activeTab === 'analytics' && (
                    <div className="row g-4">
                      <div className="col-12">
                        <Card>
                          <div className="card-body p-4">
                            <div className="d-flex align-items-center justify-content-between mb-4">
                              <h4 className="h5 fw-bold text-deep-red mb-0">Performance Analytics</h4>
                              <div className="d-flex gap-2">
                                <select 
                                  className="form-select form-select-sm"
                                  value={timeRange}
                                  onChange={(e) => setTimeRange(e.target.value)}
                                  style={{ width: '120px' }}
                                >
                                  <option value="week">This Week</option>
                                  <option value="month">This Month</option>
                                  <option value="semester">This Semester</option>
                                </select>
                                <Button size="sm" variant="secondary">
                                  <Download size={14} className="me-1" />
                                  Export
                                </Button>
                              </div>
                            </div>
                            
                            <div style={{ height: '300px' }} className="mb-4">
                              <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={monthlyProgressData}>
                                  <CartesianGrid strokeDasharray="3 3" />
                                  <XAxis dataKey="month" />
                                  <YAxis />
                                  <Tooltip />
                                  <Legend />
                                  <Line 
                                    type="monotone" 
                                    dataKey="physics" 
                                    stroke="#ff7474" 
                                    activeDot={{ r: 8 }}
                                    name="Physics"
                                  />
                                  <Line 
                                    type="monotone" 
                                    dataKey="chemistry" 
                                    stroke="#c64242" 
                                    activeDot={{ r: 8 }}
                                    name="Chemistry"
                                  />
                                  <Line 
                                    type="monotone" 
                                    dataKey="biology" 
                                    stroke="#22c55e" 
                                    activeDot={{ r: 8 }}
                                    name="Biology"
                                  />
                                  <Line 
                                    type="monotone" 
                                    dataKey="mathematics" 
                                    stroke="#3b82f6" 
                                    activeDot={{ r: 8 }}
                                    name="Mathematics"
                                  />
                                </LineChart>
                              </ResponsiveContainer>
                            </div>
                            
                            <div className="row g-4">
                              <div className="col-md-6">
                                <h5 className="h6 fw-bold text-deep-red mb-3">Key Insights</h5>
                                <div className="d-flex flex-column gap-2">
                                  <div className="p-3 bg-light-bg rounded-3">
                                    <div className="d-flex align-items-center gap-2 mb-1">
                                      <TrendingUp className="text-success" size={16} />
                                      <span className="fw-medium text-deep-red">Consistent Improvement</span>
                                    </div>
                                    <p className="text-muted small mb-0">
                                      {selectedStudent.name} has shown steady improvement in Physics and Chemistry over the last 3 months.
                                    </p>
                                  </div>
                                  <div className="p-3 bg-light-bg rounded-3">
                                    <div className="d-flex align-items-center gap-2 mb-1">
                                      <Star className="text-warning" size={16} />
                                      <span className="fw-medium text-deep-red">Exceptional Performance</span>
                                    </div>
                                    <p className="text-muted small mb-0">
                                      Consistently scores above class average in Biology (top 10%).
                                    </p>
                                  </div>
                                  <div className="p-3 bg-light-bg rounded-3">
                                    <div className="d-flex align-items-center gap-2 mb-1">
                                      <Flag className="text-danger" size={16} />
                                      <span className="fw-medium text-deep-red">Attention Needed</span>
                                    </div>
                                    <p className="text-muted small mb-0">
                                      Mathematics scores have plateaued. Consider additional support in calculus topics.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="col-md-6">
                                <h5 className="h6 fw-bold text-deep-red mb-3">Attendance</h5>
                                <div style={{ height: '200px' }}>
                                  <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={attendanceData}>
                                      <CartesianGrid strokeDasharray="3 3" />
                                      <XAxis dataKey="month" />
                                      <YAxis />
                                      <Tooltip />
                                      <Legend />
                                      <Area 
                                        type="monotone" 
                                        dataKey="present" 
                                        stackId="1"
                                        stroke="#22c55e" 
                                        fill="#22c55e" 
                                        name="Present"
                                      />
                                      <Area 
                                        type="monotone" 
                                        dataKey="late" 
                                        stackId="1"
                                        stroke="#f59e0b" 
                                        fill="#f59e0b" 
                                        name="Late"
                                      />
                                      <Area 
                                        type="monotone" 
                                        dataKey="absent" 
                                        stackId="1"
                                        stroke="#ef4444" 
                                        fill="#ef4444" 
                                        name="Absent"
                                      />
                                    </AreaChart>
                                  </ResponsiveContainer>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </div>
                      
                      <div className="col-12">
                        <Card>
                          <div className="card-body p-4">
                            <h4 className="h5 fw-bold text-deep-red mb-3">Recommendations</h4>
                            <div className="d-flex flex-column gap-3">
                              <div className="p-3 border rounded-3">
                                <div className="d-flex align-items-center gap-2 mb-2">
                                  <Activity className="text-primary-red" size={18} />
                                  <h6 className="fw-semibold text-deep-red mb-0">Learning Path Adjustment</h6>
                                </div>
                                <p className="text-muted mb-2">
                                  Based on {selectedStudent.name}'s performance, consider the following adjustments:
                                </p>
                                <ul className="text-muted small mb-0">
                                  <li>Provide additional practice problems for calculus concepts</li>
                                  <li>Encourage participation in the physics study group</li>
                                  <li>Assign supplementary reading materials for biology</li>
                                </ul>
                              </div>
                              
                              <div className="p-3 border rounded-3">
                                <div className="d-flex align-items-center gap-2 mb-2">
                                  <Target className="text-success" size={18} />
                                  <h6 className="fw-semibold text-deep-red mb-0">Personalized Goals</h6>
                                </div>
                                <p className="text-muted mb-2">
                                  Suggested goals for the next month:
                                </p>
                                <ul className="text-muted small mb-0">
                                  <li>Improve mathematics score by 5%</li>
                                  <li>Complete all assignments on time</li>
                                  <li>Participate in at least 2 class discussions per week</li>
                                </ul>
                              </div>
                              
                              <div className="p-3 border rounded-3">
                                <div className="d-flex align-items-center gap-2 mb-2">
                                  <MessageCircle className="text-warning" size={18} />
                                  <h6 className="fw-semibold text-deep-red mb-0">Communication Plan</h6>
                                </div>
                                <p className="text-muted mb-2">
                                  Recommended communication strategy:
                                </p>
                                <ul className="text-muted small mb-0">
                                  <li>Schedule a one-on-one meeting to discuss mathematics progress</li>
                                  <li>Send weekly progress updates to parents</li>
                                  <li>Provide positive reinforcement for improvements in physics</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="d-flex align-items-center justify-content-center h-100 py-5">
                  <div className="text-center">
                    <Users size={64} className="text-muted mb-3" />
                    <h3 className="text-muted">Select a student to view details</h3>
                    <p className="text-muted">Choose a student from the list to see their progress and analytics</p>
                  </div>
                </div>
              )}
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
              <h6 className="fw-semibold mb-3">Educational Tools</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <button onClick={() => onNavigate('flashcard')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Flashcards
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('wordbook')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Word Book
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('student-progress')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Student Progress
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('question-maker')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Question Maker
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