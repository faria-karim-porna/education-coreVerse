import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen,
  Plus,
  Edit,
  Trash2,
  ChevronLeft,
  ChevronRight,
  Shuffle,
  RotateCcw,
  Check,
  X,
  Save,
  Download,
  Share2,
  Folder,
  Star,
  Clock,
  Filter,
  Search,
  Tag,
  Eye,
  EyeOff
} from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Header } from '../layout/Header';
import { Sidebar } from '../layout/Sidebar';

interface FlashcardPageProps {
  onNavigate: (view: string) => void;
}

interface Flashcard {
  id: string;
  front: string;
  back: string;
  tags: string[];
  difficulty: 'easy' | 'medium' | 'hard';
  lastReviewed?: Date;
  timesReviewed: number;
  mastered: boolean;
}

interface Deck {
  id: string;
  name: string;
  description: string;
  cards: Flashcard[];
  category: string;
  createdAt: Date;
  lastStudied?: Date;
}

export function FlashcardPage({ onNavigate }: FlashcardPageProps) {
  const [decks, setDecks] = useState<Deck[]>([
    {
      id: '1',
      name: 'Biology Terminology',
      description: 'Essential biology terms and definitions',
      category: 'science',
      createdAt: new Date('2024-01-15'),
      lastStudied: new Date('2024-02-10'),
      cards: [
        {
          id: '101',
          front: 'Photosynthesis',
          back: 'The process by which green plants and some other organisms use sunlight to synthesize foods with carbon dioxide and water.',
          tags: ['biology', 'plants', 'energy'],
          difficulty: 'medium',
          lastReviewed: new Date('2024-02-10'),
          timesReviewed: 5,
          mastered: false
        },
        {
          id: '102',
          front: 'Mitochondria',
          back: 'Organelles that generate most of the cell\'s supply of adenosine triphosphate (ATP), used as a source of chemical energy.',
          tags: ['biology', 'cells', 'organelles'],
          difficulty: 'medium',
          lastReviewed: new Date('2024-02-08'),
          timesReviewed: 4,
          mastered: false
        },
        {
          id: '103',
          front: 'DNA',
          back: 'Deoxyribonucleic acid, a self-replicating material present in nearly all living organisms as the main constituent of chromosomes.',
          tags: ['biology', 'genetics', 'molecules'],
          difficulty: 'easy',
          lastReviewed: new Date('2024-02-05'),
          timesReviewed: 7,
          mastered: true
        }
      ]
    },
    {
      id: '2',
      name: 'Physics Formulas',
      description: 'Key physics equations and their applications',
      category: 'science',
      createdAt: new Date('2024-01-20'),
      lastStudied: new Date('2024-02-12'),
      cards: [
        {
          id: '201',
          front: 'F = ma',
          back: 'Newton\'s Second Law: Force equals mass times acceleration.',
          tags: ['physics', 'mechanics', 'newton'],
          difficulty: 'easy',
          lastReviewed: new Date('2024-02-12'),
          timesReviewed: 8,
          mastered: true
        },
        {
          id: '202',
          front: 'E = mc²',
          back: 'Einstein\'s mass-energy equivalence formula: Energy equals mass times the speed of light squared.',
          tags: ['physics', 'relativity', 'einstein'],
          difficulty: 'hard',
          lastReviewed: new Date('2024-02-11'),
          timesReviewed: 6,
          mastered: false
        },
        {
          id: '203',
          front: 'V = IR',
          back: 'Ohm\'s Law: Voltage equals current times resistance.',
          tags: ['physics', 'electricity', 'circuits'],
          difficulty: 'medium',
          lastReviewed: new Date('2024-02-09'),
          timesReviewed: 5,
          mastered: false
        }
      ]
    },
    {
      id: '3',
      name: 'Chemical Elements',
      description: 'Common elements and their properties',
      category: 'science',
      createdAt: new Date('2024-01-25'),
      lastStudied: new Date('2024-02-08'),
      cards: [
        {
          id: '301',
          front: 'H',
          back: 'Hydrogen: Atomic number 1, lightest element, colorless gas.',
          tags: ['chemistry', 'elements', 'periodic table'],
          difficulty: 'easy',
          lastReviewed: new Date('2024-02-08'),
          timesReviewed: 4,
          mastered: true
        },
        {
          id: '302',
          front: 'O',
          back: 'Oxygen: Atomic number 8, essential for respiration, colorless gas.',
          tags: ['chemistry', 'elements', 'periodic table'],
          difficulty: 'easy',
          lastReviewed: new Date('2024-02-07'),
          timesReviewed: 3,
          mastered: true
        },
        {
          id: '303',
          front: 'Fe',
          back: 'Iron: Atomic number 26, metal, essential for hemoglobin in blood.',
          tags: ['chemistry', 'elements', 'metals'],
          difficulty: 'medium',
          lastReviewed: new Date('2024-02-06'),
          timesReviewed: 5,
          mastered: false
        }
      ]
    }
  ]);
  
  const [selectedDeck, setSelectedDeck] = useState<Deck | null>(null);
  const [studyMode, setStudyMode] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showCardBack, setShowCardBack] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isCreatingDeck, setIsCreatingDeck] = useState(false);
  const [isEditingCard, setIsEditingCard] = useState(false);
  const [newDeck, setNewDeck] = useState<Partial<Deck>>({
    name: '',
    description: '',
    category: 'science',
    cards: []
  });
  const [newCard, setNewCard] = useState<Partial<Flashcard>>({
    front: '',
    back: '',
    tags: [],
    difficulty: 'medium'
  });
  const [tagInput, setTagInput] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const categories = [
    { id: 'all', label: 'All Categories' },
    { id: 'science', label: 'Science' },
    { id: 'math', label: 'Mathematics' },
    { id: 'language', label: 'Languages' },
    { id: 'history', label: 'History' },
    { id: 'arts', label: 'Arts' }
  ];

  const filteredDecks = decks.filter(deck => {
    const matchesSearch = deck.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         deck.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || deck.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const nextCard = () => {
    if (!selectedDeck) return;
    
    // Mark current card as reviewed
    const updatedDecks = [...decks];
    const deckIndex = updatedDecks.findIndex(d => d.id === selectedDeck.id);
    if (deckIndex !== -1) {
      const card = updatedDecks[deckIndex].cards[currentCardIndex];
      card.lastReviewed = new Date();
      card.timesReviewed += 1;
      setDecks(updatedDecks);
    }
    
    // Move to next card
    if (currentCardIndex < selectedDeck.cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    } else {
      // End of deck
      setCurrentCardIndex(0);
    }
    setShowCardBack(false);
  };

  const prevCard = () => {
    if (!selectedDeck) return;
    
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    } else {
      // Wrap to end of deck
      setCurrentCardIndex(selectedDeck.cards.length - 1);
    }
    setShowCardBack(false);
  };

  const shuffleDeck = () => {
    if (!selectedDeck) return;
    
    const shuffledCards = [...selectedDeck.cards].sort(() => Math.random() - 0.5);
    const updatedDecks = [...decks];
    const deckIndex = updatedDecks.findIndex(d => d.id === selectedDeck.id);
    
    if (deckIndex !== -1) {
      updatedDecks[deckIndex] = {
        ...updatedDecks[deckIndex],
        cards: shuffledCards
      };
      
      setDecks(updatedDecks);
      setSelectedDeck({
        ...selectedDeck,
        cards: shuffledCards
      });
      setCurrentCardIndex(0);
      setShowCardBack(false);
    }
  };

  const markCardMastery = (mastered: boolean) => {
    if (!selectedDeck) return;
    
    const updatedDecks = [...decks];
    const deckIndex = updatedDecks.findIndex(d => d.id === selectedDeck.id);
    
    if (deckIndex !== -1) {
      updatedDecks[deckIndex].cards[currentCardIndex].mastered = mastered;
      updatedDecks[deckIndex].cards[currentCardIndex].lastReviewed = new Date();
      updatedDecks[deckIndex].cards[currentCardIndex].timesReviewed += 1;
      
      setDecks(updatedDecks);
      setSelectedDeck({
        ...selectedDeck,
        cards: updatedDecks[deckIndex].cards
      });
      
      // Move to next card
      nextCard();
    }
  };

  const startStudyMode = (deck: Deck) => {
    setSelectedDeck(deck);
    setStudyMode(true);
    setCurrentCardIndex(0);
    setShowCardBack(false);
    
    // Update last studied timestamp
    const updatedDecks = [...decks];
    const deckIndex = updatedDecks.findIndex(d => d.id === deck.id);
    if (deckIndex !== -1) {
      updatedDecks[deckIndex].lastStudied = new Date();
      setDecks(updatedDecks);
    }
  };

  const exitStudyMode = () => {
    setStudyMode(false);
    setSelectedDeck(null);
  };

  const createNewDeck = () => {
    if (!newDeck.name) return;
    
    const deck: Deck = {
      id: `deck-${Date.now()}`,
      name: newDeck.name || 'Untitled Deck',
      description: newDeck.description || '',
      category: newDeck.category || 'science',
      cards: [],
      createdAt: new Date()
    };
    
    setDecks([...decks, deck]);
    setNewDeck({
      name: '',
      description: '',
      category: 'science',
      cards: []
    });
    setIsCreatingDeck(false);
  };

  const addCardToDeck = () => {
    if (!selectedDeck || !newCard.front || !newCard.back) return;
    
    const card: Flashcard = {
      id: `card-${Date.now()}`,
      front: newCard.front || '',
      back: newCard.back || '',
      tags: newCard.tags || [],
      difficulty: newCard.difficulty || 'medium',
      timesReviewed: 0,
      mastered: false
    };
    
    const updatedDecks = [...decks];
    const deckIndex = updatedDecks.findIndex(d => d.id === selectedDeck.id);
    
    if (deckIndex !== -1) {
      updatedDecks[deckIndex].cards.push(card);
      setDecks(updatedDecks);
      setSelectedDeck({
        ...selectedDeck,
        cards: [...selectedDeck.cards, card]
      });
      
      setNewCard({
        front: '',
        back: '',
        tags: [],
        difficulty: 'medium'
      });
      setTagInput('');
      setIsEditingCard(false);
    }
  };

  const addTag = () => {
    if (!tagInput.trim()) return;
    
    setNewCard({
      ...newCard,
      tags: [...(newCard.tags || []), tagInput.trim()]
    });
    setTagInput('');
  };

  const removeTag = (tag: string) => {
    setNewCard({
      ...newCard,
      tags: (newCard.tags || []).filter(t => t !== tag)
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

  return (
    <div className="min-vh-100 bg-light-bg d-flex">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        activeView="flashcard"
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
                    <BookOpen className="text-white" size={40} />
                  </div>
                  <h1 className="display-3 fw-bold mb-4">Flashcards</h1>
                  <p className="lead mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                    Create, study, and master your subjects with our interactive flashcard system. 
                    Perfect for memorization, test prep, and spaced repetition learning.
                  </p>
                  <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                    <Button variant="secondary" size="lg" className="bg-white text-primary-red border-white" onClick={() => setIsCreatingDeck(true)}>
                      <Plus size={20} className="me-2" />
                      Create New Deck
                    </Button>
                    <Button variant="outline-secondary" size="lg" className="border-white text-white">
                      <Download size={20} className="me-2" />
                      Import Deck
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Main Content */}
          {studyMode ? (
            // Study Mode
            <section className="py-5 bg-white">
              <div className="container-lg">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div className="d-flex align-items-center gap-3">
                    <Button variant="secondary" onClick={exitStudyMode}>
                      <ChevronLeft size={16} className="me-1" />
                      Back to Decks
                    </Button>
                    <h2 className="h4 fw-bold text-deep-red mb-0">{selectedDeck?.name}</h2>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <span className="text-muted">
                      Card {currentCardIndex + 1} of {selectedDeck?.cards.length}
                    </span>
                    <Button variant="secondary" onClick={shuffleDeck}>
                      <Shuffle size={16} />
                    </Button>
                  </div>
                </div>

                {selectedDeck && selectedDeck.cards.length > 0 ? (
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        key={currentCardIndex + (showCardBack ? '-back' : '-front')}
                      >
                        <Card 
                          className="text-center cursor-pointer" 
                          onClick={() => setShowCardBack(!showCardBack)}
                          hover
                        >
                          <div className="card-body p-5" style={{ minHeight: '300px' }}>
                            <div className="d-flex align-items-center justify-content-between mb-4">
                              <div className="d-flex align-items-center gap-2">
                                {selectedDeck.cards[currentCardIndex].tags.map((tag, index) => (
                                  <span key={index} className="badge bg-light-bg text-deep-red">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                              <span className={`badge ${getDifficultyColor(selectedDeck.cards[currentCardIndex].difficulty)} text-white`}>
                                {selectedDeck.cards[currentCardIndex].difficulty}
                              </span>
                            </div>
                            
                            <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '200px' }}>
                              <h3 className="display-6 fw-bold text-deep-red">
                                {showCardBack 
                                  ? selectedDeck.cards[currentCardIndex].back 
                                  : selectedDeck.cards[currentCardIndex].front}
                              </h3>
                            </div>
                            
                            <div className="mt-4">
                              <p className="text-muted small">
                                {showCardBack ? 'Click to see front' : 'Click to see back'}
                              </p>
                            </div>
                          </div>
                        </Card>
                      </motion.div>

                      <div className="d-flex align-items-center justify-content-between mt-4">
                        <Button variant="secondary" onClick={prevCard}>
                          <ChevronLeft size={20} className="me-1" />
                          Previous
                        </Button>
                        
                        <div className="d-flex gap-2">
                          {showCardBack && (
                            <>
                              <Button variant="danger" onClick={() => markCardMastery(false)}>
                                <X size={20} className="me-1" />
                                Still Learning
                              </Button>
                              <Button variant="success" onClick={() => markCardMastery(true)}>
                                <Check size={20} className="me-1" />
                                Mastered
                              </Button>
                            </>
                          )}
                        </div>
                        
                        <Button onClick={nextCard}>
                          Next
                          <ChevronRight size={20} className="ms-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-5">
                    <h3 className="text-muted">No cards in this deck</h3>
                    <Button className="mt-3" onClick={() => setIsEditingCard(true)}>
                      <Plus size={16} className="me-1" />
                      Add Card
                    </Button>
                  </div>
                )}
              </div>
            </section>
          ) : (
            // Deck Selection Mode
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
                        placeholder="Search decks..."
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
                    <Button className="w-100" onClick={() => setIsCreatingDeck(true)}>
                      <Plus size={16} className="me-1" />
                      New Deck
                    </Button>
                  </div>
                </div>

                {/* Decks Grid */}
                <div className="row g-4">
                  {filteredDecks.map((deck, index) => (
                    <div key={deck.id} className="col-md-6 col-lg-4">
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
                                <BookOpen className="text-primary-red" size={24} />
                              </div>
                              <span className="badge bg-accent-red text-white">
                                {deck.category}
                              </span>
                            </div>
                            
                            <h4 className="fw-bold text-deep-red mb-2">{deck.name}</h4>
                            <p className="text-muted small mb-3">{deck.description}</p>
                            
                            <div className="d-flex align-items-center justify-content-between mb-3">
                              <span className="text-muted small">
                                {deck.cards.length} cards
                              </span>
                              <div className="d-flex align-items-center gap-2 text-muted small">
                                <Clock size={14} />
                                <span>
                                  {deck.lastStudied 
                                    ? `Last studied: ${deck.lastStudied.toLocaleDateString()}`
                                    : 'Not studied yet'}
                                </span>
                              </div>
                            </div>
                            
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <span className="badge bg-success text-white me-1">
                                  {deck.cards.filter(card => card.mastered).length} mastered
                                </span>
                                <span className="badge bg-warning text-dark">
                                  {deck.cards.length - deck.cards.filter(card => card.mastered).length} learning
                                </span>
                              </div>
                              <Button onClick={() => startStudyMode(deck)}>
                                Study Now
                              </Button>
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    </div>
                  ))}
                </div>

                {filteredDecks.length === 0 && (
                  <div className="text-center py-5">
                    <h3 className="text-muted">No decks found</h3>
                    <p className="text-muted">Try adjusting your search or create a new deck</p>
                    <Button className="mt-3" onClick={() => setIsCreatingDeck(true)}>
                      <Plus size={16} className="me-1" />
                      Create New Deck
                    </Button>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Create Deck Modal */}
          {isCreatingDeck && (
            <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50" style={{ zIndex: 1050 }}>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white rounded-4 p-4 w-100"
                style={{ maxWidth: '500px' }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <h3 className="h4 fw-bold text-deep-red mb-0">Create New Deck</h3>
                  <Button variant="secondary" onClick={() => setIsCreatingDeck(false)}>
                    <X size={16} />
                  </Button>
                </div>
                
                <div className="mb-3">
                  <label className="form-label fw-medium text-deep-red">Deck Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter deck name"
                    value={newDeck.name}
                    onChange={(e) => setNewDeck({...newDeck, name: e.target.value})}
                  />
                </div>
                
                <div className="mb-3">
                  <label className="form-label fw-medium text-deep-red">Description</label>
                  <textarea
                    className="form-control"
                    placeholder="Enter deck description"
                    value={newDeck.description}
                    onChange={(e) => setNewDeck({...newDeck, description: e.target.value})}
                    rows={3}
                  />
                </div>
                
                <div className="mb-4">
                  <label className="form-label fw-medium text-deep-red">Category</label>
                  <select
                    className="form-select"
                    value={newDeck.category}
                    onChange={(e) => setNewDeck({...newDeck, category: e.target.value})}
                  >
                    {categories.filter(c => c.id !== 'all').map(category => (
                      <option key={category.id} value={category.id}>{category.label}</option>
                    ))}
                  </select>
                </div>
                
                <div className="d-flex gap-2">
                  <Button className="flex-fill" onClick={createNewDeck} disabled={!newDeck.name}>
                    Create Deck
                  </Button>
                  <Button variant="secondary" className="flex-fill" onClick={() => setIsCreatingDeck(false)}>
                    Cancel
                  </Button>
                </div>
              </motion.div>
            </div>
          )}

          {/* Add Card Modal */}
          {isEditingCard && selectedDeck && (
            <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50" style={{ zIndex: 1050 }}>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white rounded-4 p-4 w-100"
                style={{ maxWidth: '600px' }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <h3 className="h4 fw-bold text-deep-red mb-0">Add Card to {selectedDeck.name}</h3>
                  <Button variant="secondary" onClick={() => setIsEditingCard(false)}>
                    <X size={16} />
                  </Button>
                </div>
                
                <div className="mb-3">
                  <label className="form-label fw-medium text-deep-red">Front (Question/Term)</label>
                  <textarea
                    className="form-control"
                    placeholder="Enter the front of the card"
                    value={newCard.front}
                    onChange={(e) => setNewCard({...newCard, front: e.target.value})}
                    rows={3}
                  />
                </div>
                
                <div className="mb-3">
                  <label className="form-label fw-medium text-deep-red">Back (Answer/Definition)</label>
                  <textarea
                    className="form-control"
                    placeholder="Enter the back of the card"
                    value={newCard.back}
                    onChange={(e) => setNewCard({...newCard, back: e.target.value})}
                    rows={5}
                  />
                </div>
                
                <div className="mb-3">
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
                    {newCard.tags?.map((tag, index) => (
                      <span key={index} className="badge bg-light-bg text-deep-red d-flex align-items-center gap-1">
                        {tag}
                        <X size={12} className="cursor-pointer" onClick={() => removeTag(tag)} />
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="form-label fw-medium text-deep-red">Difficulty</label>
                  <select
                    className="form-select"
                    value={newCard.difficulty}
                    onChange={(e) => setNewCard({...newCard, difficulty: e.target.value as 'easy' | 'medium' | 'hard'})}
                  >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </div>
                
                <div className="d-flex gap-2">
                  <Button 
                    className="flex-fill" 
                    onClick={addCardToDeck} 
                    disabled={!newCard.front || !newCard.back}
                  >
                    Add Card
                  </Button>
                  <Button variant="secondary" className="flex-fill" onClick={() => setIsEditingCard(false)}>
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