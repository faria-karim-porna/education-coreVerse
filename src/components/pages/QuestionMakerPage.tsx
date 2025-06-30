import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen,
  Plus,
  Edit,
  Trash2,
  Save,
  Download,
  Share2,
  CheckSquare,
  Square,
  AlignLeft,
  List,
  FileText,
  Settings,
  X,
  Copy,
  CheckCircle,
  Clock,
  Filter,
  Search,
  Tag,
  Eye,
  EyeOff,
  HelpCircle
} from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Header } from '../layout/Header';
import { Sidebar } from '../layout/Sidebar';

interface QuestionMakerPageProps {
  onNavigate: (view: string) => void;
}

interface Question {
  id: string;
  text: string;
  type: 'multiple-choice' | 'true-false' | 'short-answer' | 'essay';
  options?: string[];
  correctAnswer?: string | string[];
  points: number;
  difficulty: 'easy' | 'medium' | 'hard';
  tags: string[];
}

interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  timeLimit?: number; // in minutes
  category: string;
  createdAt: Date;
  lastEdited?: Date;
}

export function QuestionMakerPage({ onNavigate }: QuestionMakerPageProps) {
  const [quizzes, setQuizzes] = useState<Quiz[]>([
    {
      id: '1',
      title: 'Physics Fundamentals',
      description: 'Basic concepts in mechanics and energy',
      category: 'science',
      createdAt: new Date('2024-01-15'),
      lastEdited: new Date('2024-02-10'),
      timeLimit: 30,
      questions: [
        {
          id: '101',
          text: 'What is Newton\'s First Law of Motion?',
          type: 'multiple-choice',
          options: [
            'An object at rest stays at rest, and an object in motion stays in motion unless acted upon by an external force.',
            'Force equals mass times acceleration.',
            'For every action, there is an equal and opposite reaction.',
            'Energy cannot be created or destroyed, only transformed.'
          ],
          correctAnswer: 'An object at rest stays at rest, and an object in motion stays in motion unless acted upon by an external force.',
          points: 10,
          difficulty: 'medium',
          tags: ['physics', 'mechanics', 'newton']
        },
        {
          id: '102',
          text: 'The formula E = mc² represents:',
          type: 'multiple-choice',
          options: [
            'Kinetic energy',
            'Mass-energy equivalence',
            'Gravitational potential energy',
            'Electrical energy'
          ],
          correctAnswer: 'Mass-energy equivalence',
          points: 10,
          difficulty: 'hard',
          tags: ['physics', 'relativity', 'einstein']
        },
        {
          id: '103',
          text: 'True or False: Energy can be created through nuclear reactions.',
          type: 'true-false',
          correctAnswer: 'False',
          points: 5,
          difficulty: 'medium',
          tags: ['physics', 'energy', 'nuclear']
        }
      ]
    },
    {
      id: '2',
      title: 'Chemistry Basics',
      description: 'Fundamental concepts in chemistry',
      category: 'science',
      createdAt: new Date('2024-01-20'),
      lastEdited: new Date('2024-02-12'),
      timeLimit: 45,
      questions: [
        {
          id: '201',
          text: 'What is the atomic number of Oxygen?',
          type: 'short-answer',
          correctAnswer: '8',
          points: 5,
          difficulty: 'easy',
          tags: ['chemistry', 'elements', 'periodic table']
        },
        {
          id: '202',
          text: 'Explain the difference between an ionic and covalent bond.',
          type: 'essay',
          points: 15,
          difficulty: 'hard',
          tags: ['chemistry', 'bonding', 'molecules']
        }
      ]
    }
  ]);
  
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isCreatingQuiz, setIsCreatingQuiz] = useState(false);
  const [isAddingQuestion, setIsAddingQuestion] = useState(false);
  const [newQuiz, setNewQuiz] = useState<Partial<Quiz>>({
    title: '',
    description: '',
    category: 'science',
    questions: [],
    timeLimit: 30
  });
  const [newQuestion, setNewQuestion] = useState<Partial<Question>>({
    text: '',
    type: 'multiple-choice',
    options: ['', '', '', ''],
    correctAnswer: '',
    points: 10,
    difficulty: 'medium',
    tags: []
  });
  const [tagInput, setTagInput] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const categories = [
    { id: 'all', label: 'All Categories' },
    { id: 'science', label: 'Science' },
    { id: 'math', label: 'Mathematics' },
    { id: 'language', label: 'Languages' },
    { id: 'history', label: 'History' },
    { id: 'arts', label: 'Arts' }
  ];

  const questionTypes = [
    { id: 'multiple-choice', label: 'Multiple Choice', icon: CheckSquare },
    { id: 'true-false', label: 'True/False', icon: Square },
    { id: 'short-answer', label: 'Short Answer', icon: AlignLeft },
    { id: 'essay', label: 'Essay', icon: FileText }
  ];

  const filteredQuizzes = quizzes.filter(quiz => {
    const matchesSearch = quiz.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         quiz.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || quiz.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const createNewQuiz = () => {
    if (!newQuiz.title) return;
    
    const quiz: Quiz = {
      id: `quiz-${Date.now()}`,
      title: newQuiz.title || 'Untitled Quiz',
      description: newQuiz.description || '',
      category: newQuiz.category || 'science',
      questions: [],
      timeLimit: newQuiz.timeLimit || 30,
      createdAt: new Date()
    };
    
    setQuizzes([...quizzes, quiz]);
    setNewQuiz({
      title: '',
      description: '',
      category: 'science',
      questions: [],
      timeLimit: 30
    });
    setIsCreatingQuiz(false);
  };

  const addQuestionToQuiz = () => {
    if (!selectedQuiz || !newQuestion.text) return;
    
    const question: Question = {
      id: `question-${Date.now()}`,
      text: newQuestion.text || '',
      type: newQuestion.type || 'multiple-choice',
      options: newQuestion.options,
      correctAnswer: newQuestion.correctAnswer,
      points: newQuestion.points || 10,
      difficulty: newQuestion.difficulty || 'medium',
      tags: newQuestion.tags || []
    };
    
    const updatedQuizzes = [...quizzes];
    const quizIndex = updatedQuizzes.findIndex(q => q.id === selectedQuiz.id);
    
    if (quizIndex !== -1) {
      updatedQuizzes[quizIndex].questions.push(question);
      updatedQuizzes[quizIndex].lastEdited = new Date();
      
      setQuizzes(updatedQuizzes);
      setSelectedQuiz({
        ...selectedQuiz,
        questions: [...selectedQuiz.questions, question],
        lastEdited: new Date()
      });
      
      setNewQuestion({
        text: '',
        type: 'multiple-choice',
        options: ['', '', '', ''],
        correctAnswer: '',
        points: 10,
        difficulty: 'medium',
        tags: []
      });
      setTagInput('');
      setIsAddingQuestion(false);
    }
  };

  const addTag = () => {
    if (!tagInput.trim()) return;
    
    setNewQuestion({
      ...newQuestion,
      tags: [...(newQuestion.tags || []), tagInput.trim()]
    });
    setTagInput('');
  };

  const removeTag = (tag: string) => {
    setNewQuestion({
      ...newQuestion,
      tags: (newQuestion.tags || []).filter(t => t !== tag)
    });
  };

  const updateOption = (index: number, value: string) => {
    const updatedOptions = [...(newQuestion.options || [])];
    updatedOptions[index] = value;
    setNewQuestion({
      ...newQuestion,
      options: updatedOptions
    });
  };

  const setCorrectOption = (option: string) => {
    setNewQuestion({
      ...newQuestion,
      correctAnswer: option
    });
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-success';
      case 'medium': return 'bg-warning';
      case 'hard': return 'bg-danger';
      default: return 'bg-secondary';
    }
  };

  const getQuestionTypeIcon = (type: string) => {
    switch (type) {
      case 'multiple-choice': return CheckSquare;
      case 'true-false': return Square;
      case 'short-answer': return AlignLeft;
      case 'essay': return FileText;
      default: return HelpCircle;
    }
  };

  const copyQuiz = (quizId: string) => {
    const quizToCopy = quizzes.find(q => q.id === quizId);
    if (!quizToCopy) return;
    
    const newQuizCopy: Quiz = {
      ...quizToCopy,
      id: `quiz-${Date.now()}`,
      title: `${quizToCopy.title} (Copy)`,
      createdAt: new Date(),
      lastEdited: new Date()
    };
    
    setQuizzes([...quizzes, newQuizCopy]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const deleteQuiz = (quizId: string) => {
    if (confirm('Are you sure you want to delete this quiz?')) {
      setQuizzes(quizzes.filter(q => q.id !== quizId));
      if (selectedQuiz?.id === quizId) {
        setSelectedQuiz(null);
        setEditMode(false);
      }
    }
  };

  return (
    <div className="min-vh-100 bg-light-bg d-flex">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        activeView="question-maker"
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
                    <HelpCircle className="text-white" size={40} />
                  </div>
                  <h1 className="display-3 fw-bold mb-4">Question Maker</h1>
                  <p className="lead mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                    Create custom quizzes, tests, and assessments with multiple question types. 
                    Perfect for teachers, students, and self-assessment.
                  </p>
                  <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                    <Button variant="secondary" size="lg" className="bg-white text-primary-red border-white" onClick={() => setIsCreatingQuiz(true)}>
                      <Plus size={20} className="me-2" />
                      Create New Quiz
                    </Button>
                    <Button variant="outline-secondary" size="lg" className="border-white text-white">
                      <Download size={20} className="me-2" />
                      Import Questions
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Main Content */}
          {editMode && selectedQuiz ? (
            // Quiz Editor Mode
            <section className="py-5 bg-white">
              <div className="container-lg">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div className="d-flex align-items-center gap-3">
                    <Button variant="secondary" onClick={() => {
                      setEditMode(false);
                      setSelectedQuiz(null);
                    }}>
                      <X size={16} className="me-1" />
                      Close Editor
                    </Button>
                    <h2 className="h4 fw-bold text-deep-red mb-0">Editing: {selectedQuiz.title}</h2>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <Button variant="secondary">
                      <Settings size={16} className="me-1" />
                      Quiz Settings
                    </Button>
                    <Button>
                      <Save size={16} className="me-1" />
                      Save Quiz
                    </Button>
                  </div>
                </div>

                {/* Questions List */}
                <div className="mb-4">
                  <Card>
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center justify-content-between mb-4">
                        <h3 className="h5 fw-bold text-deep-red mb-0">Questions ({selectedQuiz.questions.length})</h3>
                        <Button onClick={() => setIsAddingQuestion(true)}>
                          <Plus size={16} className="me-1" />
                          Add Question
                        </Button>
                      </div>

                      {selectedQuiz.questions.length === 0 ? (
                        <div className="text-center py-4">
                          <HelpCircle size={48} className="text-muted mb-3" />
                          <h5 className="text-muted">No questions yet</h5>
                          <p className="text-muted">Click "Add Question" to create your first question</p>
                        </div>
                      ) : (
                        <div className="d-flex flex-column gap-3">
                          {selectedQuiz.questions.map((question, index) => {
                            const QuestionIcon = getQuestionTypeIcon(question.type);
                            return (
                              <div key={question.id} className="border rounded-3 p-3">
                                <div className="d-flex align-items-start">
                                  <div className="bg-primary-red bg-opacity-10 rounded-3 d-flex align-items-center justify-content-center me-3 flex-shrink-0"
                                       style={{ width: '40px', height: '40px' }}>
                                    <QuestionIcon className="text-primary-red" size={20} />
                                  </div>
                                  <div className="flex-fill">
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                      <div className="d-flex align-items-center gap-2">
                                        <h5 className="fw-semibold text-deep-red mb-0">Question {index + 1}</h5>
                                        <span className={`badge ${getDifficultyColor(question.difficulty)} text-white`}>
                                          {question.difficulty}
                                        </span>
                                        <span className="badge bg-info text-white">
                                          {question.points} pts
                                        </span>
                                      </div>
                                      <div className="d-flex gap-2">
                                        <Button size="sm" variant="secondary">
                                          <Edit size={14} />
                                        </Button>
                                        <Button size="sm" variant="danger">
                                          <Trash2 size={14} />
                                        </Button>
                                      </div>
                                    </div>
                                    <p className="text-muted mb-2">{question.text}</p>
                                    
                                    {question.type === 'multiple-choice' && question.options && (
                                      <div className="mb-2">
                                        <div className="d-flex flex-column gap-1">
                                          {question.options.map((option, idx) => (
                                            <div key={idx} className={`d-flex align-items-center p-2 rounded-3 ${
                                              option === question.correctAnswer ? 'bg-success bg-opacity-10' : ''
                                            }`}>
                                              <div className="me-2">
                                                {option === question.correctAnswer ? (
                                                  <CheckCircle size={16} className="text-success" />
                                                ) : (
                                                  <Circle size={16} className="text-muted" />
                                                )}
                                              </div>
                                              <span className={option === question.correctAnswer ? 'fw-medium' : ''}>
                                                {option}
                                              </span>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    )}
                                    
                                    {question.type === 'true-false' && (
                                      <div className="mb-2">
                                        <span className="fw-medium">Correct answer: </span>
                                        <span className="text-success">{question.correctAnswer}</span>
                                      </div>
                                    )}
                                    
                                    {question.type === 'short-answer' && (
                                      <div className="mb-2">
                                        <span className="fw-medium">Correct answer: </span>
                                        <span className="text-success">{question.correctAnswer}</span>
                                      </div>
                                    )}
                                    
                                    {question.tags && question.tags.length > 0 && (
                                      <div className="d-flex flex-wrap gap-2">
                                        {question.tags.map((tag, idx) => (
                                          <span key={idx} className="badge bg-light-bg text-deep-red">
                                            {tag}
                                          </span>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </Card>
                </div>

                {/* Quiz Preview */}
                <Card>
                  <div className="card-body p-4">
                    <h3 className="h5 fw-bold text-deep-red mb-3">Quiz Preview</h3>
                    <div className="row mb-3">
                      <div className="col-md-8">
                        <div className="mb-3">
                          <h4 className="h2 fw-bold text-deep-red">{selectedQuiz.title}</h4>
                          <p className="text-muted">{selectedQuiz.description}</p>
                        </div>
                        <div className="d-flex flex-wrap gap-3">
                          <div className="d-flex align-items-center gap-2">
                            <HelpCircle size={16} className="text-muted" />
                            <span className="text-muted">{selectedQuiz.questions.length} questions</span>
                          </div>
                          {selectedQuiz.timeLimit && (
                            <div className="d-flex align-items-center gap-2">
                              <Clock size={16} className="text-muted" />
                              <span className="text-muted">{selectedQuiz.timeLimit} minutes</span>
                            </div>
                          )}
                          <div className="d-flex align-items-center gap-2">
                            <Tag size={16} className="text-muted" />
                            <span className="text-muted">{selectedQuiz.category}</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 text-md-end">
                        <div className="d-flex flex-column gap-2">
                          <Button>
                            <Eye size={16} className="me-1" />
                            Preview
                          </Button>
                          <Button variant="secondary">
                            <Download size={16} className="me-1" />
                            Export
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </section>
          ) : (
            // Quiz List Mode
            <section className="py-5 bg-white">
              <div className="container-lg">
                {/* Search and Filters */}
                <div className="row g-3 mb-4">
                  <div className="col-md-6">
                    <div className="position-relative">
                      <Search className="position-absolute text-muted" 
                              style={{ left: '12px', top: '50%', transform: 'translateY(-50%)', width: '16px', height: '16px' }} />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search quizzes..."
                        className="form-control ps-5"
                        style={{ paddingLeft: '2.5rem' }}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
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
                  <div className="col-md-2">
                    <Button className="w-100" onClick={() => setIsCreatingQuiz(true)}>
                      <Plus size={16} className="me-1" />
                      New Quiz
                    </Button>
                  </div>
                </div>

                {/* Quizzes Grid */}
                <div className="row g-4">
                  {filteredQuizzes.map((quiz, index) => (
                    <div key={quiz.id} className="col-md-6 col-lg-4">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Card hover className="h-100">
                          <div className="card-body p-4">
                            <div className="d-flex align-items-start justify-content-between mb-3">
                              <div className="bg-primary-red bg-opacity-10 rounded-3 d-flex align-items-center justify-content-center"
                                   style={{ width: '48px', height: '48px' }}>
                                <HelpCircle className="text-primary-red" size={24} />
                              </div>
                              <span className="badge bg-accent-red text-white">
                                {quiz.category}
                              </span>
                            </div>
                            
                            <h4 className="fw-bold text-deep-red mb-2">{quiz.title}</h4>
                            <p className="text-muted small mb-3">{quiz.description}</p>
                            
                            <div className="d-flex align-items-center justify-content-between mb-3">
                              <span className="text-muted small">
                                {quiz.questions.length} questions
                              </span>
                              <div className="d-flex align-items-center gap-2 text-muted small">
                                <Clock size={14} />
                                <span>
                                  {quiz.timeLimit ? `${quiz.timeLimit} min` : 'No time limit'}
                                </span>
                              </div>
                            </div>
                            
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="d-flex gap-2">
                                <Button size="sm" variant="secondary" onClick={() => copyQuiz(quiz.id)}>
                                  {copied ? <CheckCircle size={14} /> : <Copy size={14} />}
                                </Button>
                                <Button size="sm" variant="danger" onClick={() => deleteQuiz(quiz.id)}>
                                  <Trash2 size={14} />
                                </Button>
                              </div>
                              <Button onClick={() => {
                                setSelectedQuiz(quiz);
                                setEditMode(true);
                              }}>
                                <Edit size={16} className="me-1" />
                                Edit Quiz
                              </Button>
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    </div>
                  ))}
                </div>

                {filteredQuizzes.length === 0 && (
                  <div className="text-center py-5">
                    <h3 className="text-muted">No quizzes found</h3>
                    <p className="text-muted">Try adjusting your search or create a new quiz</p>
                    <Button className="mt-3" onClick={() => setIsCreatingQuiz(true)}>
                      <Plus size={16} className="me-1" />
                      Create New Quiz
                    </Button>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Create Quiz Modal */}
          {isCreatingQuiz && (
            <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50" style={{ zIndex: 1050 }}>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white rounded-4 p-4 w-100"
                style={{ maxWidth: '500px' }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <h3 className="h4 fw-bold text-deep-red mb-0">Create New Quiz</h3>
                  <Button variant="secondary" onClick={() => setIsCreatingQuiz(false)}>
                    <X size={16} />
                  </Button>
                </div>
                
                <div className="mb-3">
                  <label className="form-label fw-medium text-deep-red">Quiz Title</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter quiz title"
                    value={newQuiz.title}
                    onChange={(e) => setNewQuiz({...newQuiz, title: e.target.value})}
                  />
                </div>
                
                <div className="mb-3">
                  <label className="form-label fw-medium text-deep-red">Description</label>
                  <textarea
                    className="form-control"
                    placeholder="Enter quiz description"
                    value={newQuiz.description}
                    onChange={(e) => setNewQuiz({...newQuiz, description: e.target.value})}
                    rows={3}
                  />
                </div>
                
                <div className="row g-3 mb-4">
                  <div className="col-md-6">
                    <label className="form-label fw-medium text-deep-red">Category</label>
                    <select
                      className="form-select"
                      value={newQuiz.category}
                      onChange={(e) => setNewQuiz({...newQuiz, category: e.target.value})}
                    >
                      {categories.filter(c => c.id !== 'all').map(category => (
                        <option key={category.id} value={category.id}>{category.label}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-medium text-deep-red">Time Limit (minutes)</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter time limit"
                      value={newQuiz.timeLimit}
                      onChange={(e) => setNewQuiz({...newQuiz, timeLimit: parseInt(e.target.value)})}
                      min="0"
                    />
                    <small className="text-muted">Leave empty for no time limit</small>
                  </div>
                </div>
                
                <div className="d-flex gap-2">
                  <Button className="flex-fill" onClick={createNewQuiz} disabled={!newQuiz.title}>
                    Create Quiz
                  </Button>
                  <Button variant="secondary" className="flex-fill" onClick={() => setIsCreatingQuiz(false)}>
                    Cancel
                  </Button>
                </div>
              </motion.div>
            </div>
          )}

          {/* Add Question Modal */}
          {isAddingQuestion && selectedQuiz && (
            <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50" style={{ zIndex: 1050 }}>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white rounded-4 p-4 w-100"
                style={{ maxWidth: '700px', maxHeight: '90vh', overflowY: 'auto' }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <h3 className="h4 fw-bold text-deep-red mb-0">Add Question to {selectedQuiz.title}</h3>
                  <Button variant="secondary" onClick={() => setIsAddingQuestion(false)}>
                    <X size={16} />
                  </Button>
                </div>
                
                <div className="mb-3">
                  <label className="form-label fw-medium text-deep-red">Question Type</label>
                  <div className="d-flex flex-wrap gap-2">
                    {questionTypes.map(type => (
                      <Button
                        key={type.id}
                        variant={newQuestion.type === type.id ? 'primary' : 'secondary'}
                        onClick={() => setNewQuestion({...newQuestion, type: type.id as any})}
                        className="d-flex align-items-center gap-2"
                      >
                        <type.icon size={16} />
                        {type.label}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div className="mb-3">
                  <label className="form-label fw-medium text-deep-red">Question Text</label>
                  <textarea
                    className="form-control"
                    placeholder="Enter your question"
                    value={newQuestion.text}
                    onChange={(e) => setNewQuestion({...newQuestion, text: e.target.value})}
                    rows={3}
                  />
                </div>
                
                {/* Multiple Choice Options */}
                {newQuestion.type === 'multiple-choice' && (
                  <div className="mb-3">
                    <label className="form-label fw-medium text-deep-red">Answer Options</label>
                    {newQuestion.options?.map((option, index) => (
                      <div key={index} className="d-flex gap-2 mb-2">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="correctOption"
                            id={`option${index}`}
                            checked={option === newQuestion.correctAnswer}
                            onChange={() => setCorrectOption(option)}
                          />
                          <label className="form-check-label" htmlFor={`option${index}`}>
                            Correct
                          </label>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder={`Option ${index + 1}`}
                          value={option}
                          onChange={(e) => updateOption(index, e.target.value)}
                        />
                      </div>
                    ))}
                  </div>
                )}
                
                {/* True/False Options */}
                {newQuestion.type === 'true-false' && (
                  <div className="mb-3">
                    <label className="form-label fw-medium text-deep-red">Correct Answer</label>
                    <div className="d-flex gap-3">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="trueFalse"
                          id="optionTrue"
                          checked={newQuestion.correctAnswer === 'True'}
                          onChange={() => setNewQuestion({...newQuestion, correctAnswer: 'True'})}
                        />
                        <label className="form-check-label" htmlFor="optionTrue">
                          True
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="trueFalse"
                          id="optionFalse"
                          checked={newQuestion.correctAnswer === 'False'}
                          onChange={() => setNewQuestion({...newQuestion, correctAnswer: 'False'})}
                        />
                        <label className="form-check-label" htmlFor="optionFalse">
                          False
                        </label>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Short Answer */}
                {newQuestion.type === 'short-answer' && (
                  <div className="mb-3">
                    <label className="form-label fw-medium text-deep-red">Correct Answer</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter the correct answer"
                      value={newQuestion.correctAnswer as string || ''}
                      onChange={(e) => setNewQuestion({...newQuestion, correctAnswer: e.target.value})}
                    />
                  </div>
                )}
                
                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label className="form-label fw-medium text-deep-red">Points</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Points"
                      value={newQuestion.points}
                      onChange={(e) => setNewQuestion({...newQuestion, points: parseInt(e.target.value)})}
                      min="1"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-medium text-deep-red">Difficulty</label>
                    <select
                      className="form-select"
                      value={newQuestion.difficulty}
                      onChange={(e) => setNewQuestion({...newQuestion, difficulty: e.target.value as 'easy' | 'medium' | 'hard'})}
                    >
                      <option value="easy">Easy</option>
                      <option value="medium">Medium</option>
                      <option value="hard">Hard</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="form-label fw-medium text-deep-red">Tags</label>
                  <div className="d-flex gap-2 mb-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Add tag"
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && addTag()}
                    />
                    <Button variant="secondary" onClick={addTag}>
                      <Plus size={16} />
                    </Button>
                  </div>
                  <div className="d-flex flex-wrap gap-2">
                    {newQuestion.tags?.map((tag, index) => (
                      <span key={index} className="badge bg-light-bg text-deep-red d-flex align-items-center gap-1">
                        {tag}
                        <X size={12} className="cursor-pointer" onClick={() => removeTag(tag)} />
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="d-flex gap-2">
                  <Button 
                    className="flex-fill" 
                    onClick={addQuestionToQuiz} 
                    disabled={!newQuestion.text || (newQuestion.type === 'multiple-choice' && !newQuestion.correctAnswer)}
                  >
                    Add Question
                  </Button>
                  <Button variant="secondary" className="flex-fill" onClick={() => setIsAddingQuestion(false)}>
                    Cancel
                  </Button>
                </div>
              </motion.div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

// Helper component for Circle icon since it's not imported
function Circle({ size, className }: { size: number, className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10"></circle>
    </svg>
  );
}