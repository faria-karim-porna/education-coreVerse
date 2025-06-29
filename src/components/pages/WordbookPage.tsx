import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen,
  Search,
  Plus,
  Edit,
  Trash2,
  Volume2,
  Star,
  Filter,
  SortAsc,
  SortDesc,
  X,
  Save,
  Download,
  Share2,
  Bookmark,
  BookmarkPlus,
  ExternalLink,
  Copy,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Tag
} from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';

interface WordbookPageProps {
  onNavigate: (view: string) => void;
}

interface Word {
  id: string;
  term: string;
  definition: string;
  pronunciation: string;
  partOfSpeech: string;
  examples: string[];
  synonyms: string[];
  antonyms: string[];
  tags: string[];
  isFavorite: boolean;
  dateAdded: Date;
  notes?: string;
}

export function WordbookPage({ onNavigate }: WordbookPageProps) {
  const [words, setWords] = useState<Word[]>([
    {
      id: '1',
      term: 'Photosynthesis',
      definition: 'The process by which green plants and some other organisms use sunlight to synthesize foods with carbon dioxide and water.',
      pronunciation: '/ˌfoʊtoʊˈsɪnθəsɪs/',
      partOfSpeech: 'noun',
      examples: [
        'Photosynthesis is essential for plant growth.',
        'Through photosynthesis, plants convert light energy into chemical energy.'
      ],
      synonyms: ['light synthesis', 'photo-assimilation'],
      antonyms: ['respiration', 'decomposition'],
      tags: ['biology', 'plants', 'science'],
      isFavorite: true,
      dateAdded: new Date('2024-01-15')
    },
    {
      id: '2',
      term: 'Mitosis',
      definition: 'A type of cell division that results in two daughter cells each having the same number and kind of chromosomes as the parent nucleus.',
      pronunciation: '/maɪˈtoʊsɪs/',
      partOfSpeech: 'noun',
      examples: [
        'Mitosis is the process that allows multicellular organisms to grow and develop.',
        'The phases of mitosis include prophase, metaphase, anaphase, and telophase.'
      ],
      synonyms: ['cell division', 'karyokinesis'],
      antonyms: ['meiosis'],
      tags: ['biology', 'cells', 'science'],
      isFavorite: false,
      dateAdded: new Date('2024-01-18')
    },
    {
      id: '3',
      term: 'Quantum',
      definition: 'The minimum amount of any physical entity involved in an interaction.',
      pronunciation: '/ˈkwɑːntəm/',
      partOfSpeech: 'noun',
      examples: [
        'The quantum theory revolutionized our understanding of atomic and subatomic processes.',
        'A quantum of light is called a photon.'
      ],
      synonyms: ['particle', 'amount', 'quantity'],
      antonyms: ['continuum', 'whole'],
      tags: ['physics', 'science', 'energy'],
      isFavorite: true,
      dateAdded: new Date('2024-01-20')
    },
    {
      id: '4',
      term: 'Derivative',
      definition: 'In calculus, a measure of how a function changes as its input changes.',
      pronunciation: '/dɪˈrɪvətɪv/',
      partOfSpeech: 'noun',
      examples: [
        'The derivative of position with respect to time is velocity.',
        'Finding the derivative of a function helps determine its rate of change.'
      ],
      synonyms: ['differential coefficient', 'rate of change'],
      antonyms: ['integral', 'antiderivative'],
      tags: ['mathematics', 'calculus', 'functions'],
      isFavorite: false,
      dateAdded: new Date('2024-01-25')
    },
    {
      id: '5',
      term: 'Osmosis',
      definition: 'The movement of a solvent through a semipermeable membrane from a less concentrated solution to a more concentrated one.',
      pronunciation: '/ɒzˈmoʊsɪs/',
      partOfSpeech: 'noun',
      examples: [
        'Osmosis is crucial for water balance in living cells.',
        'Plants absorb water from soil through osmosis.'
      ],
      synonyms: ['diffusion', 'permeation'],
      antonyms: ['reverse osmosis'],
      tags: ['biology', 'chemistry', 'science'],
      isFavorite: false,
      dateAdded: new Date('2024-01-30')
    },
    {
      id: '6',
      term: 'Algorithm',
      definition: 'A process or set of rules to be followed in calculations or other problem-solving operations, especially by a computer.',
      pronunciation: '/ˈælɡəˌrɪðəm/',
      partOfSpeech: 'noun',
      examples: [
        'Sorting algorithms are used to organize data efficiently.',
        'The search engine uses a complex algorithm to rank web pages.'
      ],
      synonyms: ['procedure', 'formula', 'method'],
      antonyms: ['randomness', 'chaos'],
      tags: ['computer science', 'mathematics', 'programming'],
      isFavorite: true,
      dateAdded: new Date('2024-02-05')
    }
  ]);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('all');
  const [sortBy, setSortBy] = useState('alphabetical');
  const [sortDirection, setSortDirection] = useState('asc');
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [expandedWord, setExpandedWord] = useState<string | null>(null);
  const [isAddingWord, setIsAddingWord] = useState(false);
  const [newWord, setNewWord] = useState<Partial<Word>>({
    term: '',
    definition: '',
    pronunciation: '',
    partOfSpeech: 'noun',
    examples: [''],
    synonyms: [],
    antonyms: [],
    tags: [],
    isFavorite: false
  });
  const [tagInput, setTagInput] = useState('');
  const [synonymInput, setSynonymInput] = useState('');
  const [antonymInput, setAntonymInput] = useState('');
  const [copied, setCopied] = useState(false);

  // Extract all unique tags from words
  const allTags = Array.from(new Set(words.flatMap(word => word.tags)));

  const filteredWords = words.filter(word => {
    const matchesSearch = word.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         word.definition.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         word.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesTag = selectedTag === 'all' || word.tags.includes(selectedTag);
    const matchesFavorite = !showFavoritesOnly || word.isFavorite;
    return matchesSearch && matchesTag && matchesFavorite;
  });

  const sortedWords = [...filteredWords].sort((a, b) => {
    let comparison = 0;
    
    switch (sortBy) {
      case 'alphabetical':
        comparison = a.term.localeCompare(b.term);
        break;
      case 'date':
        comparison = a.dateAdded.getTime() - b.dateAdded.getTime();
        break;
      default:
        comparison = a.term.localeCompare(b.term);
    }
    
    return sortDirection === 'asc' ? comparison : -comparison;
  });

  const toggleFavorite = (id: string) => {
    setWords(words.map(word => 
      word.id === id ? { ...word, isFavorite: !word.isFavorite } : word
    ));
  };

  const toggleExpand = (id: string) => {
    setExpandedWord(expandedWord === id ? null : id);
  };

  const addWord = () => {
    if (!newWord.term || !newWord.definition) return;
    
    const word: Word = {
      id: `word-${Date.now()}`,
      term: newWord.term || '',
      definition: newWord.definition || '',
      pronunciation: newWord.pronunciation || '',
      partOfSpeech: newWord.partOfSpeech || 'noun',
      examples: newWord.examples || [''],
      synonyms: newWord.synonyms || [],
      antonyms: newWord.antonyms || [],
      tags: newWord.tags || [],
      isFavorite: newWord.isFavorite || false,
      dateAdded: new Date(),
      notes: newWord.notes
    };
    
    setWords([...words, word]);
    setNewWord({
      term: '',
      definition: '',
      pronunciation: '',
      partOfSpeech: 'noun',
      examples: [''],
      synonyms: [],
      antonyms: [],
      tags: [],
      isFavorite: false
    });
    setTagInput('');
    setSynonymInput('');
    setAntonymInput('');
    setIsAddingWord(false);
  };

  const deleteWord = (id: string) => {
    if (confirm('Are you sure you want to delete this word?')) {
      setWords(words.filter(word => word.id !== id));
      if (expandedWord === id) {
        setExpandedWord(null);
      }
    }
  };

  const addTag = () => {
    if (!tagInput.trim()) return;
    
    setNewWord({
      ...newWord,
      tags: [...(newWord.tags || []), tagInput.trim()]
    });
    setTagInput('');
  };

  const removeTag = (tag: string) => {
    setNewWord({
      ...newWord,
      tags: (newWord.tags || []).filter(t => t !== tag)
    });
  };

  const addSynonym = () => {
    if (!synonymInput.trim()) return;
    
    setNewWord({
      ...newWord,
      synonyms: [...(newWord.synonyms || []), synonymInput.trim()]
    });
    setSynonymInput('');
  };

  const removeSynonym = (synonym: string) => {
    setNewWord({
      ...newWord,
      synonyms: (newWord.synonyms || []).filter(s => s !== synonym)
    });
  };

  const addAntonym = () => {
    if (!antonymInput.trim()) return;
    
    setNewWord({
      ...newWord,
      antonyms: [...(newWord.antonyms || []), antonymInput.trim()]
    });
    setAntonymInput('');
  };

  const removeAntonym = (antonym: string) => {
    setNewWord({
      ...newWord,
      antonyms: (newWord.antonyms || []).filter(a => a !== antonym)
    });
  };

  const addExample = () => {
    setNewWord({
      ...newWord,
      examples: [...(newWord.examples || []), '']
    });
  };

  const updateExample = (index: number, value: string) => {
    const updatedExamples = [...(newWord.examples || [])];
    updatedExamples[index] = value;
    setNewWord({
      ...newWord,
      examples: updatedExamples
    });
  };

  const removeExample = (index: number) => {
    setNewWord({
      ...newWord,
      examples: (newWord.examples || []).filter((_, i) => i !== index)
    });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const playPronunciation = (word: string) => {
    // In a real app, this would use the Web Speech API or a pronunciation service
    const utterance = new SpeechSynthesisUtterance(word);
    window.speechSynthesis.speak(utterance);
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
                <BookOpen className="text-white" size={40} />
              </div>
              <h1 className="display-3 fw-bold mb-4">Word Book</h1>
              <p className="lead mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                Build your personal vocabulary collection with definitions, examples, 
                and study tools. Perfect for language learning and academic studies.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <Button variant="secondary" size="lg" className="bg-white text-primary-red border-white" onClick={() => setIsAddingWord(true)}>
                  <Plus size={20} className="me-2" />
                  Add New Word
                </Button>
                <Button variant="outline-secondary" size="lg" className="border-white text-white">
                  <Download size={20} className="me-2" />
                  Export Vocabulary
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-5 bg-white">
        <div className="container-lg">
          {/* Search and Filters */}
          <div className="row g-3 mb-4">
            <div className="col-md-5">
              <div className="position-relative">
                <Search className="position-absolute text-muted" 
                        style={{ left: '12px', top: '50%', transform: 'translateY(-50%)', width: '16px', height: '16px' }} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search words, definitions, or tags..."
                  className="form-control ps-5"
                  style={{ paddingLeft: '2.5rem' }}
                />
              </div>
            </div>
            <div className="col-md-2">
              <select 
                className="form-select"
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
              >
                <option value="all">All Tags</option>
                {allTags.map(tag => (
                  <option key={tag} value={tag}>{tag}</option>
                ))}
              </select>
            </div>
            <div className="col-md-3">
              <div className="d-flex gap-2">
                <select 
                  className="form-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="alphabetical">Alphabetical</option>
                  <option value="date">Date Added</option>
                </select>
                <Button 
                  variant="secondary"
                  onClick={() => setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')}
                  className="p-2"
                >
                  {sortDirection === 'asc' ? <SortAsc size={16} /> : <SortDesc size={16} />}
                </Button>
              </div>
            </div>
            <div className="col-md-2">
              <div className="d-flex gap-2">
                <Button 
                  variant={showFavoritesOnly ? 'primary' : 'secondary'}
                  onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
                  className="p-2 flex-fill"
                >
                  <Star size={16} className={showFavoritesOnly ? 'text-white' : ''} />
                  <span className="ms-2">Favorites</span>
                </Button>
                <Button onClick={() => setIsAddingWord(true)} className="p-2">
                  <Plus size={16} />
                </Button>
              </div>
            </div>
          </div>

          {/* Words List */}
          <div className="d-flex flex-column gap-3">
            {sortedWords.map((word) => (
              <motion.div
                key={word.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Card>
                  <div className="card-body p-4">
                    <div className="d-flex align-items-start justify-content-between">
                      <div className="flex-fill">
                        <div className="d-flex align-items-center gap-2 mb-2">
                          <h4 className="fw-bold text-deep-red mb-0">{word.term}</h4>
                          <Button 
                            size="sm" 
                            variant="secondary"
                            onClick={() => playPronunciation(word.term)}
                            className="p-1"
                          >
                            <Volume2 size={14} />
                          </Button>
                          <span className="text-muted small fst-italic">{word.pronunciation}</span>
                          <span className="badge bg-light-bg text-deep-red">{word.partOfSpeech}</span>
                        </div>
                        
                        <p className="text-muted mb-2">{word.definition}</p>
                        
                        <div className="d-flex flex-wrap gap-2 mb-3">
                          {word.tags.map((tag, index) => (
                            <span 
                              key={index} 
                              className="badge bg-light-bg text-deep-red cursor-pointer"
                              onClick={() => setSelectedTag(tag)}
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                        
                        {expandedWord === word.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="mt-3 pt-3 border-top"
                          >
                            {word.examples.length > 0 && (
                              <div className="mb-3">
                                <h6 className="fw-semibold text-deep-red mb-2">Examples:</h6>
                                <ul className="text-muted small mb-0">
                                  {word.examples.map((example, index) => (
                                    <li key={index}>{example}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            
                            <div className="row g-3 mb-3">
                              {word.synonyms.length > 0 && (
                                <div className="col-md-6">
                                  <h6 className="fw-semibold text-deep-red mb-2">Synonyms:</h6>
                                  <div className="d-flex flex-wrap gap-2">
                                    {word.synonyms.map((synonym, index) => (
                                      <span key={index} className="badge bg-success text-white">
                                        {synonym}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              )}
                              
                              {word.antonyms.length > 0 && (
                                <div className="col-md-6">
                                  <h6 className="fw-semibold text-deep-red mb-2">Antonyms:</h6>
                                  <div className="d-flex flex-wrap gap-2">
                                    {word.antonyms.map((antonym, index) => (
                                      <span key={index} className="badge bg-danger text-white">
                                        {antonym}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                            
                            {word.notes && (
                              <div className="bg-light-bg p-3 rounded-3">
                                <h6 className="fw-semibold text-deep-red mb-2">Notes:</h6>
                                <p className="text-muted small mb-0">{word.notes}</p>
                              </div>
                            )}
                          </motion.div>
                        )}
                      </div>
                      
                      <div className="d-flex flex-column gap-2 ms-3">
                        <Button 
                          size="sm" 
                          variant={word.isFavorite ? 'warning' : 'secondary'}
                          onClick={() => toggleFavorite(word.id)}
                          className="p-2"
                        >
                          <Star size={16} fill={word.isFavorite ? 'currentColor' : 'none'} />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="secondary"
                          onClick={() => toggleExpand(word.id)}
                          className="p-2"
                        >
                          {expandedWord === word.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </Button>
                        <Button 
                          size="sm" 
                          variant="secondary"
                          onClick={() => copyToClipboard(`${word.term}: ${word.definition}`)}
                          className="p-2"
                        >
                          {copied ? <CheckCircle size={16} className="text-success" /> : <Copy size={16} />}
                        </Button>
                        <Button 
                          size="sm" 
                          variant="danger"
                          onClick={() => deleteWord(word.id)}
                          className="p-2"
                        >
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {sortedWords.length === 0 && (
            <div className="text-center py-5">
              <h3 className="text-muted">No words found</h3>
              <p className="text-muted">Try adjusting your search or add a new word</p>
              <Button className="mt-3" onClick={() => setIsAddingWord(true)}>
                <Plus size={16} className="me-1" />
                Add New Word
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Add Word Modal */}
      {isAddingWord && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50" style={{ zIndex: 1050 }}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-4 p-4 w-100"
            style={{ maxWidth: '700px', maxHeight: '90vh', overflowY: 'auto' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="d-flex align-items-center justify-content-between mb-4">
              <h3 className="h4 fw-bold text-deep-red mb-0">Add New Word</h3>
              <Button variant="secondary" onClick={() => setIsAddingWord(false)}>
                <X size={16} />
              </Button>
            </div>
            
            <div className="row g-3 mb-3">
              <div className="col-md-6">
                <label className="form-label fw-medium text-deep-red">Term</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter word or term"
                  value={newWord.term}
                  onChange={(e) => setNewWord({...newWord, term: e.target.value})}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-medium text-deep-red">Pronunciation</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g., /fəˈnɛtɪk/"
                  value={newWord.pronunciation}
                  onChange={(e) => setNewWord({...newWord, pronunciation: e.target.value})}
                />
              </div>
            </div>
            
            <div className="mb-3">
              <label className="form-label fw-medium text-deep-red">Part of Speech</label>
              <select
                className="form-select"
                value={newWord.partOfSpeech}
                onChange={(e) => setNewWord({...newWord, partOfSpeech: e.target.value})}
              >
                <option value="noun">Noun</option>
                <option value="verb">Verb</option>
                <option value="adjective">Adjective</option>
                <option value="adverb">Adverb</option>
                <option value="pronoun">Pronoun</option>
                <option value="preposition">Preposition</option>
                <option value="conjunction">Conjunction</option>
                <option value="interjection">Interjection</option>
              </select>
            </div>
            
            <div className="mb-3">
              <label className="form-label fw-medium text-deep-red">Definition</label>
              <textarea
                className="form-control"
                placeholder="Enter definition"
                value={newWord.definition}
                onChange={(e) => setNewWord({...newWord, definition: e.target.value})}
                rows={3}
              />
            </div>
            
            <div className="mb-3">
              <label className="form-label fw-medium text-deep-red">Examples</label>
              {newWord.examples?.map((example, index) => (
                <div key={index} className="d-flex gap-2 mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter example sentence"
                    value={example}
                    onChange={(e) => updateExample(index, e.target.value)}
                  />
                  <Button 
                    variant="danger" 
                    onClick={() => removeExample(index)}
                    className="p-2"
                  >
                    <X size={16} />
                  </Button>
                </div>
              ))}
              <Button variant="secondary" onClick={addExample} className="mt-1">
                <Plus size={16} className="me-1" />
                Add Example
              </Button>
            </div>
            
            <div className="row g-3 mb-3">
              <div className="col-md-6">
                <label className="form-label fw-medium text-deep-red">Synonyms</label>
                <div className="d-flex gap-2 mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Add synonym"
                    value={synonymInput}
                    onChange={(e) => setSynonymInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addSynonym()}
                  />
                  <Button variant="secondary" onClick={addSynonym} className="p-2">
                    <Plus size={16} />
                  </Button>
                </div>
                <div className="d-flex flex-wrap gap-2">
                  {newWord.synonyms?.map((synonym, index) => (
                    <span key={index} className="badge bg-success text-white d-flex align-items-center gap-1">
                      {synonym}
                      <X size={12} className="cursor-pointer" onClick={() => removeSynonym(synonym)} />
                    </span>
                  ))}
                </div>
              </div>
              <div className="col-md-6">
                <label className="form-label fw-medium text-deep-red">Antonyms</label>
                <div className="d-flex gap-2 mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Add antonym"
                    value={antonymInput}
                    onChange={(e) => setAntonymInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addAntonym()}
                  />
                  <Button variant="secondary" onClick={addAntonym} className="p-2">
                    <Plus size={16} />
                  </Button>
                </div>
                <div className="d-flex flex-wrap gap-2">
                  {newWord.antonyms?.map((antonym, index) => (
                    <span key={index} className="badge bg-danger text-white d-flex align-items-center gap-1">
                      {antonym}
                      <X size={12} className="cursor-pointer" onClick={() => removeAntonym(antonym)} />
                    </span>
                  ))}
                </div>
              </div>
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
                <Button variant="secondary" onClick={addTag} className="p-2">
                  <Plus size={16} />
                </Button>
              </div>
              <div className="d-flex flex-wrap gap-2">
                {newWord.tags?.map((tag, index) => (
                  <span key={index} className="badge bg-light-bg text-deep-red d-flex align-items-center gap-1">
                    {tag}
                    <X size={12} className="cursor-pointer" onClick={() => removeTag(tag)} />
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mb-4">
              <label className="form-label fw-medium text-deep-red">Notes (Optional)</label>
              <textarea
                className="form-control"
                placeholder="Add personal notes about this word"
                value={newWord.notes || ''}
                onChange={(e) => setNewWord({...newWord, notes: e.target.value})}
                rows={2}
              />
            </div>
            
            <div className="d-flex align-items-center justify-content-between">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="favoriteCheck"
                  checked={newWord.isFavorite}
                  onChange={(e) => setNewWord({...newWord, isFavorite: e.target.checked})}
                />
                <label className="form-check-label" htmlFor="favoriteCheck">
                  Add to favorites
                </label>
              </div>
              
              <div className="d-flex gap-2">
                <Button 
                  className="flex-fill" 
                  onClick={addWord} 
                  disabled={!newWord.term || !newWord.definition}
                >
                  Add Word
                </Button>
                <Button variant="secondary" className="flex-fill" onClick={() => setIsAddingWord(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

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
                  <button onClick={() => onNavigate('periodic-table')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Periodic Table
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('physics-formulas')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Physics Formulas
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