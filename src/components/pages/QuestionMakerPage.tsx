import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen,
  HelpCircle,
  CheckCircle,
  X,
  Plus,
  Trash2,
  Save,
  Download,
  Share2,
  Copy,
  Edit,
  FileText,
  Image,
  Clock,
  Settings,
  Shuffle,
  BarChart3,
  Eye,
  EyeOff,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  ArrowRight,
  Layers,
  Tag,
  Filter,
  Search,
  AlertCircle,
  Info
} from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';

interface QuestionMakerPageProps {
  onNavigate: (view: string) => void;
}

interface Question {
  id: string;
  type: 'multiple-choice' | 'true-false' | 'short-answer' | 'matching' | 'fill-blank';
  text: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation?: string;
  difficulty: 'easy' | 'medium' | 'hard';
  points: number;
  category: string;
  tags: string[];
  image?: string;
  timeLimit?: number;
}

export function QuestionMakerPage({ onNavigate }: QuestionMakerPageProps) {
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: '1',
      type: 'multiple-choice',
      text: 'What is the chemical symbol for gold?',
      options: ['Au', 'Ag', 'Fe', 'Cu'],
      correctAnswer: 'Au',
      explanation: 'Au is the chemical symbol for gold, derived from the Latin word "aurum".',
      difficulty: 'easy',
      points: 5,
      category: 'chemistry',
      tags: ['elements', 'periodic-table', 'symbols']
    },
    {
      id: '2',
      type: 'true-false',
      text: 'The Earth revolves around the Sun.',
      correctAnswer: 'true',
      explanation: 'The Earth orbits around the Sun in an elliptical path, completing one revolution in approximately 365.25 days.',
      difficulty: 'easy',
      points: 3,
      category: 'astronomy',
      tags: ['solar-system', 'planets', 'basic']
    },
    {
      id: '3',
      type: 'short-answer',
      text: 'What is the formula for calculating the area of a circle?',
      correctAnswer: 'πr²',
      explanation: 'The area of a circle is calculated using the formula πr², where r is the radius of the circle.',
      difficulty: 'medium',
      points: 8,
      category: 'mathematics',
      tags: ['geometry', 'formulas', 'circles']
    }
  ]);

  const [currentQuiz, setCurrentQuiz] = useState({
    title: 'Chemistry Quiz',
    description: 'Test your knowledge of basic chemistry concepts',
    timeLimit: 30, // minutes
    totalPoints: 100,
    passingScore: 70,
    randomizeQuestions: true,
    showFeedback: true
  });

  const [selectedQuestions, setSelectedQuestions] = useState<string[]>(['1', '2']);
  const [editingQuestion, setEditingQuestion] = useState<Question | null>(null);
  const [newQuestion, setNewQuestion] = useState<Partial<Question>>({
    type: 'multiple-choice',
    text: '',
    options: ['', '', '', ''],
    correctAnswer: '',
    difficulty: 'medium',
    points: 5,
    category: '',
    tags: []
  });
  const [isAddingQuestion, setIsAddingQuestion] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterDifficulty, setFilterDifficulty] = useState('all');
  const [showPreview, setShowPreview] = useState(false);
  const [currentPreviewQuestion, setCurrentPreviewQuestion] = useState(0);
  const [previewAnswers, setPreviewAnswers] = useState<{[key: string]: any}>({});
  const [showResults, setShowResults] = useState(false);
  const [newTag, setNewTag] = useState('');

  const categories = [
    { id: 'all', label: 'All Categories' },
    { id: 'chemistry', label: 'Chemistry' },
    { id: 'physics', label: 'Physics' },
    { id: 'biology', label: 'Biology' },
    { id: 'mathematics', label: 'Mathematics' },
    { id: 'astronomy', label: 'Astronomy' },
    { id: 'computer-science', label: 'Computer Science' },
    { id: 'history', label: 'History' },
    { id: 'geography', label: 'Geography' }
  ];

  const difficulties = [
    { id: 'all', label: 'All Difficulties' },
    { id: 'easy', label: 'Easy' },
    { id: 'medium', label: 'Medium' },
    { id: 'hard', label: 'Hard' }
  ];

  const filteredQuestions = questions.filter(question => {
    const matchesSearch = question.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         question.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         question.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = filterCategory === 'all' || question.category === filterCategory;
    const matchesDifficulty = filterDifficulty === 'all' || question.difficulty === filterDifficulty;
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const selectedQuestionsList = questions.filter(q => selectedQuestions.includes(q.id));

  const handleAddQuestion = () => {
    if (!newQuestion.text || !newQuestion.category) {
      alert('Please fill in all required fields');
      return;
    }

    const id = (questions.length + 1).toString();
    const questionToAdd: Question = {
      id,
      type: newQuestion.type as 'multiple-choice',
      text: newQuestion.text,
      options: newQuestion.options,
      correctAnswer: newQuestion.correctAnswer || '',
      explanation: newQuestion.explanation,
      difficulty: newQuestion.difficulty as 'easy',
      points: newQuestion.points || 5,
      category: newQuestion.category,
      tags: newQuestion.tags || [],
      image: newQuestion.image,
      timeLimit: newQuestion.timeLimit
    };

    setQuestions([...questions, questionToAdd]);
    setIsAddingQuestion(false);
    setNewQuestion({
      type: 'multiple-choice',
      text: '',
      options: ['', '', '', ''],
      correctAnswer: '',
      difficulty: 'medium',
      points: 5,
      category: '',
      tags: []
    });
  };

  const handleUpdateQuestion = () => {
    if (!editingQuestion) return;

    const updatedQuestions = questions.map(q => 
      q.id === editingQuestion.id ? editingQuestion : q
    );
    
    setQuestions(updatedQuestions);
    setEditingQuestion(null);
  };

  const handleDeleteQuestion = (id: string) => {
    const updatedQuestions = questions.filter(q => q.id !== id);
    setQuestions(updatedQuestions);
    
    // Also remove from selected questions if present
    if (selectedQuestions.includes(id)) {
      setSelectedQuestions(selectedQuestions.filter(qId => qId !== id));
    }
  };

  const toggleQuestionSelection = (id: string) => {
    if (selectedQuestions.includes(id)) {
      setSelectedQuestions(selectedQuestions.filter(qId => qId !== id));
    } else {
      setSelectedQuestions([...selectedQuestions, id]);
    }
  };

  const handleOptionChange = (index: number, value: string) => {
    if (editingQuestion && editingQuestion.options) {
      const newOptions = [...editingQuestion.options];
      newOptions[index] = value;
      setEditingQuestion({...editingQuestion, options: newOptions});
    } else if (newQuestion.options) {
      const newOptions = [...newQuestion.options];
      newOptions[index] = value;
      setNewQuestion({...newQuestion, options: newOptions});
    }
  };

  const addOption = () => {
    if (editingQuestion && editingQuestion.options) {
      setEditingQuestion({...editingQuestion, options: [...editingQuestion.options, '']});
    } else if (newQuestion.options) {
      setNewQuestion({...newQuestion, options: [...newQuestion.options, '']});
    }
  };

  const removeOption = (index: number) => {
    if (editingQuestion && editingQuestion.options && editingQuestion.options.length > 2) {
      const newOptions = [...editingQuestion.options];
      newOptions.splice(index, 1);
      setEditingQuestion({...editingQuestion, options: newOptions});
    } else if (newQuestion.options && newQuestion.options.length > 2) {
      const newOptions = [...newQuestion.options];
      newOptions.splice(index, 1);
      setNewQuestion({...newQuestion, options: newOptions});
    }
  };

  const addTag = () => {
    if (!newTag) return;
    
    if (editingQuestion) {
      const updatedTags = [...editingQuestion.tags, newTag];
      setEditingQuestion({...editingQuestion, tags: updatedTags});
    } else {
      const updatedTags = [...(newQuestion.tags || []), newTag];
      setNewQuestion({...newQuestion, tags: updatedTags});
    }
    
    setNewTag('');
  };

  const removeTag = (tag: string) => {
    if (editingQuestion) {
      const updatedTags = editingQuestion.tags.filter(t => t !== tag);
      setEditingQuestion({...editingQuestion, tags: updatedTags});
    } else if (newQuestion.tags) {
      const updatedTags = newQuestion.tags.filter(t => t !== tag);
      setNewQuestion({...newQuestion, tags: updatedTags});
    }
  };

  const startPreview = () => {
    setShowPreview(true);
    setCurrentPreviewQuestion(0);
    setPreviewAnswers({});
    setShowResults(false);
  };

  const endPreview = () => {
    setShowPreview(false);
    setCurrentPreviewQuestion(0);
    setPreviewAnswers({});
    setShowResults(false);
  };

  const nextPreviewQuestion = () => {
    if (currentPreviewQuestion < selectedQuestionsList.length - 1) {
      setCurrentPreviewQuestion(currentPreviewQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const prevPreviewQuestion = () => {
    if (currentPreviewQuestion > 0) {
      setCurrentPreviewQuestion(currentPreviewQuestion - 1);
    }
  };

  const handlePreviewAnswer = (questionId: string, answer: any) => {
    setPreviewAnswers({...previewAnswers, [questionId]: answer});
  };

  const calculateScore = () => {
    let score = 0;
    let totalPossible = 0;
    
    selectedQuestionsList.forEach(question => {
      totalPossible += question.points;
      
      const userAnswer = previewAnswers[question.id];
      if (!userAnswer) return;
      
      if (Array.isArray(question.correctAnswer)) {
        // For matching or multiple select questions
        const isCorrect = Array.isArray(userAnswer) && 
          userAnswer.length === question.correctAnswer.length &&
          userAnswer.every(a => question.correctAnswer.includes(a));
        
        if (isCorrect) score += question.points;
      } else {
        // For single answer questions
        if (userAnswer === question.correctAnswer) {
          score += question.points;
        }
      }
    });
    
    return {
      score,
      totalPossible,
      percentage: Math.round((score / totalPossible) * 100)
    };
  };

  const saveQuiz = () => {
    // In a real app, this would save to a server or local storage
    alert('Quiz saved successfully!');
  };

  const exportQuiz = () => {
    const quizData = {
      ...currentQuiz,
      questions: selectedQuestionsList
    };
    
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(quizData));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", currentQuiz.title.replace(/\s+/g, '-').toLowerCase() + ".json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  const renderQuestionForm = () => {
    const question = editingQuestion || newQuestion;
    
    return (
      <div className="p-4 border rounded-3 bg-white">
        <h5 className="fw-bold text-deep-red mb-4">
          {editingQuestion ? 'Edit Question' : 'Add New Question'}
        </h5>
        
        <div className="mb-3">
          <label className="form-label fw-medium text-deep-red">Question Type</label>
          <select 
            className="form-select"
            value={question.type}
            onChange={(e) => editingQuestion 
              ? setEditingQuestion({...editingQuestion, type: e.target.value as any})
              : setNewQuestion({...newQuestion, type: e.target.value as any})
            }
          >
            <option value="multiple-choice">Multiple Choice</option>
            <option value="true-false">True/False</option>
            <option value="short-answer">Short Answer</option>
            <option value="matching">Matching</option>
            <option value="fill-blank">Fill in the Blank</option>
          </select>
        </div>
        
        <div className="mb-3">
          <label className="form-label fw-medium text-deep-red">Question Text</label>
          <textarea 
            className="form-control"
            rows={3}
            value={question.text}
            onChange={(e) => editingQuestion 
              ? setEditingQuestion({...editingQuestion, text: e.target.value})
              : setNewQuestion({...newQuestion, text: e.target.value})
            }
            placeholder="Enter your question here..."
          />
        </div>
        
        {(question.type === 'multiple-choice') && (
          <div className="mb-3">
            <label className="form-label fw-medium text-deep-red">Options</label>
            {question.options?.map((option, index) => (
              <div key={index} className="d-flex align-items-center gap-2 mb-2">
                <div className="form-check">
                  <input 
                    className="form-check-input" 
                    type="radio" 
                    name="correctAnswer" 
                    checked={question.correctAnswer === option}
                    onChange={() => editingQuestion 
                      ? setEditingQuestion({...editingQuestion, correctAnswer: option})
                      : setNewQuestion({...newQuestion, correctAnswer: option})
                    }
                  />
                </div>
                <input 
                  type="text" 
                  className="form-control"
                  value={option}
                  onChange={(e) => handleOptionChange(index, e.target.value)}
                  placeholder={`Option ${index + 1}`}
                />
                <Button 
                  variant="secondary"
                  onClick={() => removeOption(index)}
                  disabled={question.options?.length <= 2}
                  className="p-1"
                >
                  <X size={14} />
                </Button>
              </div>
            ))}
            <Button 
              variant="secondary" 
              size="sm" 
              onClick={addOption}
              className="mt-2"
            >
              <Plus size={14} className="me-1" />
              Add Option
            </Button>
          </div>
        )}
        
        {question.type === 'true-false' && (
          <div className="mb-3">
            <label className="form-label fw-medium text-deep-red">Correct Answer</label>
            <div className="d-flex gap-3">
              <div className="form-check">
                <input 
                  className="form-check-input" 
                  type="radio" 
                  name="trueFalse" 
                  id="answerTrue"
                  checked={question.correctAnswer === 'true'}
                  onChange={() => editingQuestion 
                    ? setEditingQuestion({...editingQuestion, correctAnswer: 'true'})
                    : setNewQuestion({...newQuestion, correctAnswer: 'true'})
                  }
                />
                <label className="form-check-label" htmlFor="answerTrue">
                  True
                </label>
              </div>
              <div className="form-check">
                <input 
                  className="form-check-input" 
                  type="radio" 
                  name="trueFalse" 
                  id="answerFalse"
                  checked={question.correctAnswer === 'false'}
                  onChange={() => editingQuestion 
                    ? setEditingQuestion({...editingQuestion, correctAnswer: 'false'})
                    : setNewQuestion({...newQuestion, correctAnswer: 'false'})
                  }
                />
                <label className="form-check-label" htmlFor="answerFalse">
                  False
                </label>
              </div>
            </div>
          </div>
        )}
        
        {question.type === 'short-answer' && (
          <div className="mb-3">
            <label className="form-label fw-medium text-deep-red">Correct Answer</label>
            <input 
              type="text" 
              className="form-control"
              value={question.correctAnswer as string}
              onChange={(e) => editingQuestion 
                ? setEditingQuestion({...editingQuestion, correctAnswer: e.target.value})
                : setNewQuestion({...newQuestion, correctAnswer: e.target.value})
              }
              placeholder="Enter the correct answer"
            />
          </div>
        )}
        
        <div className="mb-3">
          <label className="form-label fw-medium text-deep-red">Explanation (Optional)</label>
          <textarea 
            className="form-control"
            rows={2}
            value={question.explanation || ''}
            onChange={(e) => editingQuestion 
              ? setEditingQuestion({...editingQuestion, explanation: e.target.value})
              : setNewQuestion({...newQuestion, explanation: e.target.value})
            }
            placeholder="Explain why the answer is correct..."
          />
        </div>
        
        <div className="row g-3 mb-3">
          <div className="col-md-6">
            <label className="form-label fw-medium text-deep-red">Difficulty</label>
            <select 
              className="form-select"
              value={question.difficulty}
              onChange={(e) => editingQuestion 
                ? setEditingQuestion({...editingQuestion, difficulty: e.target.value as any})
                : setNewQuestion({...newQuestion, difficulty: e.target.value as any})
              }
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label fw-medium text-deep-red">Points</label>
            <input 
              type="number" 
              className="form-control"
              value={question.points || 5}
              onChange={(e) => editingQuestion 
                ? setEditingQuestion({...editingQuestion, points: parseInt(e.target.value)})
                : setNewQuestion({...newQuestion, points: parseInt(e.target.value)})
              }
              min="1"
              max="100"
            />
          </div>
        </div>
        
        <div className="mb-3">
          <label className="form-label fw-medium text-deep-red">Category</label>
          <select 
            className="form-select"
            value={question.category}
            onChange={(e) => editingQuestion 
              ? setEditingQuestion({...editingQuestion, category: e.target.value})
              : setNewQuestion({...newQuestion, category: e.target.value})
            }
          >
            <option value="">Select a category</option>
            {categories.filter(c => c.id !== 'all').map(category => (
              <option key={category.id} value={category.id}>{category.label}</option>
            ))}
          </select>
        </div>
        
        <div className="mb-3">
          <label className="form-label fw-medium text-deep-red">Tags</label>
          <div className="d-flex gap-2 mb-2">
            <input 
              type="text" 
              className="form-control"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              placeholder="Add a tag"
              onKeyPress={(e) => e.key === 'Enter' && addTag()}
            />
            <Button 
              variant="secondary"
              onClick={addTag}
            >
              <Plus size={14} />
            </Button>
          </div>
          <div className="d-flex flex-wrap gap-2">
            {question.tags?.map((tag, index) => (
              <span key={index} className="badge bg-light-bg text-deep-red d-flex align-items-center gap-1">
                {tag}
                <X 
                  size={12} 
                  className="cursor-pointer" 
                  onClick={() => removeTag(tag)}
                />
              </span>
            ))}
          </div>
        </div>
        
        <div className="mb-3">
          <label className="form-label fw-medium text-deep-red">Image URL (Optional)</label>
          <input 
            type="text" 
            className="form-control"
            value={question.image || ''}
            onChange={(e) => editingQuestion 
              ? setEditingQuestion({...editingQuestion, image: e.target.value})
              : setNewQuestion({...newQuestion, image: e.target.value})
            }
            placeholder="Enter image URL"
          />
        </div>
        
        <div className="d-flex gap-2 justify-content-end">
          <Button 
            variant="secondary"
            onClick={() => {
              setEditingQuestion(null);
              setIsAddingQuestion(false);
            }}
          >
            Cancel
          </Button>
          <Button 
            onClick={editingQuestion ? handleUpdateQuestion : handleAddQuestion}
          >
            {editingQuestion ? 'Update Question' : 'Add Question'}
          </Button>
        </div>
      </div>
    );
  };

  const renderQuestionPreview = () => {
    if (selectedQuestionsList.length === 0) {
      return (
        <div className="text-center p-5">
          <AlertCircle size={48} className="text-muted mb-3" />
          <h5 className="text-muted">No questions selected</h5>
          <p className="text-muted">Select questions from the question bank to preview your quiz.</p>
        </div>
      );
    }

    if (showResults) {
      const result = calculateScore();
      const isPassing = result.percentage >= currentQuiz.passingScore;
      
      return (
        <div className="p-5 text-center">
          <h4 className="fw-bold text-deep-red mb-4">Quiz Results</h4>
          
          <div className="mb-4">
            <div className="display-1 fw-bold mb-2" style={{ color: isPassing ? '#22c55e' : '#ef4444' }}>
              {result.percentage}%
            </div>
            <p className="text-muted">
              You scored {result.score} out of {result.totalPossible} points
            </p>
            <div className={`badge ${isPassing ? 'bg-success' : 'bg-danger'} text-white px-3 py-2`}>
              {isPassing ? 'PASSED' : 'FAILED'}
            </div>
          </div>
          
          <div className="d-flex justify-content-center gap-3 mt-4">
            <Button variant="secondary" onClick={endPreview}>
              Exit Preview
            </Button>
            <Button onClick={() => {
              setShowResults(false);
              setCurrentPreviewQuestion(0);
              setPreviewAnswers({});
            }}>
              Retry Quiz
            </Button>
          </div>
        </div>
      );
    }

    const currentQuestion = selectedQuestionsList[currentPreviewQuestion];
    
    return (
      <div className="p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <span className="badge bg-primary-red text-white">
              Question {currentPreviewQuestion + 1} of {selectedQuestionsList.length}
            </span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <span className="badge bg-light-bg text-deep-red text-capitalize">
              {currentQuestion.difficulty}
            </span>
            <span className="badge bg-success text-white">
              {currentQuestion.points} pts
            </span>
          </div>
        </div>
        
        <div className="mb-4">
          <h5 className="fw-bold text-deep-red mb-3">{currentQuestion.text}</h5>
          {currentQuestion.image && (
            <img 
              src={currentQuestion.image} 
              alt="Question" 
              className="img-fluid rounded-3 mb-3"
              style={{ maxHeight: '200px' }}
            />
          )}
        </div>
        
        {currentQuestion.type === 'multiple-choice' && (
          <div className="mb-4">
            {currentQuestion.options?.map((option, index) => (
              <div key={index} className="form-check mb-2">
                <input 
                  className="form-check-input" 
                  type="radio" 
                  name={`question-${currentQuestion.id}`}
                  id={`option-${index}`}
                  checked={previewAnswers[currentQuestion.id] === option}
                  onChange={() => handlePreviewAnswer(currentQuestion.id, option)}
                />
                <label className="form-check-label" htmlFor={`option-${index}`}>
                  {option}
                </label>
              </div>
            ))}
          </div>
        )}
        
        {currentQuestion.type === 'true-false' && (
          <div className="mb-4">
            <div className="form-check mb-2">
              <input 
                className="form-check-input" 
                type="radio" 
                name={`question-${currentQuestion.id}`}
                id="option-true"
                checked={previewAnswers[currentQuestion.id] === 'true'}
                onChange={() => handlePreviewAnswer(currentQuestion.id, 'true')}
              />
              <label className="form-check-label" htmlFor="option-true">
                True
              </label>
            </div>
            <div className="form-check mb-2">
              <input 
                className="form-check-input" 
                type="radio" 
                name={`question-${currentQuestion.id}`}
                id="option-false"
                checked={previewAnswers[currentQuestion.id] === 'false'}
                onChange={() => handlePreviewAnswer(currentQuestion.id, 'false')}
              />
              <label className="form-check-label" htmlFor="option-false">
                False
              </label>
            </div>
          </div>
        )}
        
        {currentQuestion.type === 'short-answer' && (
          <div className="mb-4">
            <textarea 
              className="form-control"
              rows={3}
              value={previewAnswers[currentQuestion.id] || ''}
              onChange={(e) => handlePreviewAnswer(currentQuestion.id, e.target.value)}
              placeholder="Enter your answer here..."
            />
          </div>
        )}
        
        <div className="d-flex justify-content-between">
          <Button 
            variant="secondary"
            onClick={prevPreviewQuestion}
            disabled={currentPreviewQuestion === 0}
          >
            <ArrowLeft size={16} className="me-1" />
            Previous
          </Button>
          <Button 
            onClick={nextPreviewQuestion}
          >
            {currentPreviewQuestion < selectedQuestionsList.length - 1 ? (
              <>
                Next
                <ArrowRight size={16} className="ms-1" />
              </>
            ) : (
              'Finish Quiz'
            )}
          </Button>
        </div>
      </div>
    );
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
                <HelpCircle className="text-white" size={40} />
              </div>
              <h1 className="display-3 fw-bold mb-4">Question Maker</h1>
              <p className="lead mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                Create, organize, and share interactive quizzes and assessments. 
                Build your question bank and generate customized tests for your students.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <Button variant="secondary" size="lg" className="bg-white text-primary-red border-white" onClick={saveQuiz}>
                  <Save size={20} className="me-2" />
                  Save Quiz
                </Button>
                <Button variant="outline-secondary" size="lg" className="border-white text-white" onClick={startPreview}>
                  <Eye size={20} className="me-2" />
                  Preview Quiz
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-5">
        <div className="container-lg">
          {showPreview ? (
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <Card>
                  <div className="card-body p-0">
                    <div className="bg-primary-red text-white p-4 rounded-top">
                      <div className="d-flex justify-content-between align-items-center">
                        <h3 className="h4 fw-bold mb-0">{currentQuiz.title}</h3>
                        <Button variant="outline-light" size="sm" onClick={endPreview}>
                          Exit Preview
                        </Button>
                      </div>
                      <p className="mb-0 opacity-75">{currentQuiz.description}</p>
                    </div>
                    {renderQuestionPreview()}
                  </div>
                </Card>
              </div>
            </div>
          ) : (
            <div className="row g-4">
              {/* Left Column - Question Bank */}
              <div className="col-lg-4">
                <Card>
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <h4 className="fw-bold text-deep-red mb-0">Question Bank</h4>
                      <Button onClick={() => setIsAddingQuestion(true)}>
                        <Plus size={16} className="me-1" />
                        New Question
                      </Button>
                    </div>
                    
                    <div className="mb-3">
                      <div className="position-relative">
                        <Search className="position-absolute text-muted" 
                                style={{ left: '12px', top: '50%', transform: 'translateY(-50%)', width: '16px', height: '16px' }} />
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search questions..."
                          className="form-control ps-5"
                          style={{ paddingLeft: '2.5rem' }}
                        />
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <div className="row g-2">
                        <div className="col-6">
                          <select 
                            className="form-select form-select-sm"
                            value={filterCategory}
                            onChange={(e) => setFilterCategory(e.target.value)}
                          >
                            {categories.map(category => (
                              <option key={category.id} value={category.id}>{category.label}</option>
                            ))}
                          </select>
                        </div>
                        <div className="col-6">
                          <select 
                            className="form-select form-select-sm"
                            value={filterDifficulty}
                            onChange={(e) => setFilterDifficulty(e.target.value)}
                          >
                            {difficulties.map(difficulty => (
                              <option key={difficulty.id} value={difficulty.id}>{difficulty.label}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                    
                    <div className="d-flex flex-column gap-3" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                      {filteredQuestions.length === 0 ? (
                        <div className="text-center p-4">
                          <p className="text-muted mb-0">No questions found</p>
                        </div>
                      ) : (
                        filteredQuestions.map((question) => (
                          <div 
                            key={question.id} 
                            className="border rounded-3 p-3 position-relative"
                          >
                            <div className="form-check position-absolute top-0 end-0 m-2">
                              <input 
                                className="form-check-input" 
                                type="checkbox" 
                                checked={selectedQuestions.includes(question.id)}
                                onChange={() => toggleQuestionSelection(question.id)}
                              />
                            </div>
                            <div className="d-flex align-items-start gap-2 mb-2">
                              <div className={`badge ${
                                question.difficulty === 'easy' ? 'bg-success' : 
                                question.difficulty === 'medium' ? 'bg-warning' : 'bg-danger'
                              } text-white text-capitalize`}>
                                {question.difficulty}
                              </div>
                              <div className="badge bg-primary-red text-white">
                                {question.points} pts
                              </div>
                              <div className="badge bg-light-bg text-deep-red text-capitalize">
                                {question.type.replace('-', ' ')}
                              </div>
                            </div>
                            <p className="mb-2 fw-medium">{question.text}</p>
                            <div className="d-flex flex-wrap gap-1 mb-2">
                              {question.tags.map((tag, index) => (
                                <span key={index} className="badge bg-light-bg text-muted small">
                                  #{tag}
                                </span>
                              ))}
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                              <span className="text-muted small text-capitalize">{question.category}</span>
                              <div className="d-flex gap-1">
                                <Button 
                                  size="sm" 
                                  variant="secondary"
                                  onClick={() => setEditingQuestion(question)}
                                  className="p-1"
                                >
                                  <Edit size={14} />
                                </Button>
                                <Button 
                                  size="sm" 
                                  variant="danger"
                                  onClick={() => handleDeleteQuestion(question.id)}
                                  className="p-1"
                                >
                                  <Trash2 size={14} />
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </Card>
              </div>

              {/* Middle Column - Question Editor */}
              <div className="col-lg-4">
                {isAddingQuestion || editingQuestion ? (
                  renderQuestionForm()
                ) : (
                  <Card>
                    <div className="card-body p-4">
                      <h4 className="fw-bold text-deep-red mb-4">Quiz Settings</h4>
                      
                      <div className="mb-3">
                        <label className="form-label fw-medium text-deep-red">Quiz Title</label>
                        <input 
                          type="text" 
                          className="form-control"
                          value={currentQuiz.title}
                          onChange={(e) => setCurrentQuiz({...currentQuiz, title: e.target.value})}
                          placeholder="Enter quiz title"
                        />
                      </div>
                      
                      <div className="mb-3">
                        <label className="form-label fw-medium text-deep-red">Description</label>
                        <textarea 
                          className="form-control"
                          rows={3}
                          value={currentQuiz.description}
                          onChange={(e) => setCurrentQuiz({...currentQuiz, description: e.target.value})}
                          placeholder="Enter quiz description"
                        />
                      </div>
                      
                      <div className="row g-3 mb-3">
                        <div className="col-md-6">
                          <label className="form-label fw-medium text-deep-red">Time Limit (minutes)</label>
                          <input 
                            type="number" 
                            className="form-control"
                            value={currentQuiz.timeLimit}
                            onChange={(e) => setCurrentQuiz({...currentQuiz, timeLimit: parseInt(e.target.value)})}
                            min="1"
                            max="180"
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label fw-medium text-deep-red">Passing Score (%)</label>
                          <input 
                            type="number" 
                            className="form-control"
                            value={currentQuiz.passingScore}
                            onChange={(e) => setCurrentQuiz({...currentQuiz, passingScore: parseInt(e.target.value)})}
                            min="0"
                            max="100"
                          />
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <div className="form-check form-switch">
                          <input 
                            className="form-check-input" 
                            type="checkbox" 
                            id="randomizeQuestions"
                            checked={currentQuiz.randomizeQuestions}
                            onChange={(e) => setCurrentQuiz({...currentQuiz, randomizeQuestions: e.target.checked})}
                          />
                          <label className="form-check-label" htmlFor="randomizeQuestions">
                            Randomize Question Order
                          </label>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="form-check form-switch">
                          <input 
                            className="form-check-input" 
                            type="checkbox" 
                            id="showFeedback"
                            checked={currentQuiz.showFeedback}
                            onChange={(e) => setCurrentQuiz({...currentQuiz, showFeedback: e.target.checked})}
                          />
                          <label className="form-check-label" htmlFor="showFeedback">
                            Show Feedback After Each Question
                          </label>
                        </div>
                      </div>
                      
                      <div className="d-grid gap-2">
                        <Button onClick={saveQuiz}>
                          <Save size={16} className="me-1" />
                          Save Quiz
                        </Button>
                        <Button variant="secondary" onClick={exportQuiz}>
                          <Download size={16} className="me-1" />
                          Export Quiz
                        </Button>
                        <Button variant="secondary" onClick={startPreview}>
                          <Eye size={16} className="me-1" />
                          Preview Quiz
                        </Button>
                      </div>
                    </div>
                  </Card>
                )}
              </div>

              {/* Right Column - Selected Questions */}
              <div className="col-lg-4">
                <Card>
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <h4 className="fw-bold text-deep-red mb-0">Selected Questions</h4>
                      <span className="badge bg-primary-red text-white">
                        {selectedQuestions.length} Questions
                      </span>
                    </div>
                    
                    {selectedQuestions.length === 0 ? (
                      <div className="text-center p-4">
                        <HelpCircle size={48} className="text-muted mb-3" />
                        <p className="text-muted mb-0">No questions selected yet</p>
                        <p className="text-muted small">Select questions from the question bank</p>
                      </div>
                    ) : (
                      <div className="d-flex flex-column gap-3" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                        {selectedQuestionsList.map((question, index) => (
                          <div 
                            key={question.id} 
                            className="border rounded-3 p-3"
                          >
                            <div className="d-flex justify-content-between align-items-start mb-2">
                              <span className="badge bg-primary-red text-white">Q{index + 1}</span>
                              <div className="d-flex gap-1">
                                <span className={`badge ${
                                  question.difficulty === 'easy' ? 'bg-success' : 
                                  question.difficulty === 'medium' ? 'bg-warning' : 'bg-danger'
                                } text-white text-capitalize`}>
                                  {question.difficulty}
                                </span>
                                <span className="badge bg-light-bg text-deep-red">
                                  {question.points} pts
                                </span>
                              </div>
                            </div>
                            <p className="mb-2 small fw-medium">{question.text}</p>
                            <div className="d-flex justify-content-between align-items-center">
                              <span className="text-muted small text-capitalize">{question.type.replace('-', ' ')}</span>
                              <Button 
                                size="sm" 
                                variant="secondary"
                                onClick={() => toggleQuestionSelection(question.id)}
                                className="p-1"
                              >
                                <X size={14} />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <div className="mt-4 p-3 bg-light-bg rounded-3">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="fw-medium text-deep-red">Total Points:</span>
                        <span className="fw-bold">{selectedQuestionsList.reduce((sum, q) => sum + q.points, 0)}</span>
                      </div>
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="fw-medium text-deep-red">Estimated Time:</span>
                        <span className="fw-bold">{Math.max(5, selectedQuestionsList.length * 2)} minutes</span>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="fw-medium text-deep-red">Categories:</span>
                        <span className="fw-bold">{Array.from(new Set(selectedQuestionsList.map(q => q.category))).length}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          )}
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
                  <button onClick={() => onNavigate('live-classroom')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Live Classroom
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('drawing-tool')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Drawing Tool
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('question-maker')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Question Maker
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('interactive-globe')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Interactive Globe
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