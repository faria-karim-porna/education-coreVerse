import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen,
  Plus,
  Download,
  Share2
} from 'lucide-react';
import { Button } from '../ui/Button';
import { SearchAndFilters } from '../wordbook/SearchAndFilters';
import { WordList } from '../wordbook/WordList';
import { AddWordForm } from '../wordbook/AddWordForm';
import { Header } from '../layout/Header';
import { Sidebar } from '../layout/Sidebar';

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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

  const categories = [
    { id: 'all', label: 'All Categories' },
    { id: 'science', label: 'Science' },
    { id: 'math', label: 'Mathematics' },
    { id: 'language', label: 'Languages' },
    { id: 'history', label: 'History' },
    { id: 'arts', label: 'Arts' }
  ];

  return (
    <div className="min-vh-100 bg-light-bg d-flex">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        activeView="wordbook"
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
              <SearchAndFilters 
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                selectedTag={selectedTag}
                setSelectedTag={setSelectedTag}
                sortBy={sortBy}
                setSortBy={setSortBy}
                sortDirection={sortDirection}
                setSortDirection={setSortDirection}
                showFavoritesOnly={showFavoritesOnly}
                setShowFavoritesOnly={setShowFavoritesOnly}
                onAddWordClick={() => setIsAddingWord(true)}
                categories={categories}
                allTags={allTags}
              />

              {/* Words List */}
              <WordList 
                words={sortedWords}
                expandedWord={expandedWord}
                toggleExpand={toggleExpand}
                toggleFavorite={toggleFavorite}
                deleteWord={deleteWord}
                copyToClipboard={copyToClipboard}
                playPronunciation={playPronunciation}
                copied={copied}
              />

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
            <AddWordForm 
              onClose={() => setIsAddingWord(false)}
              onAddWord={addWord}
              newWord={newWord}
              setNewWord={setNewWord}
              tagInput={tagInput}
              setTagInput={setTagInput}
              synonymInput={synonymInput}
              setSynonymInput={setSynonymInput}
              antonymInput={antonymInput}
              setAntonymInput={setAntonymInput}
              addTag={addTag}
              removeTag={removeTag}
              addSynonym={addSynonym}
              removeSynonym={removeSynonym}
              addAntonym={addAntonym}
              removeAntonym={removeAntonym}
              addExample={addExample}
              updateExample={updateExample}
              removeExample={removeExample}
            />
          )}
        </main>
      </div>
    </div>
  );
}