import React from 'react';
import { motion } from 'framer-motion';
import { 
  Volume2, 
  Star, 
  ChevronDown, 
  ChevronUp, 
  Copy, 
  CheckCircle, 
  Trash2 
} from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

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

interface WordListProps {
  words: Word[];
  expandedWord: string | null;
  toggleExpand: (id: string) => void;
  toggleFavorite: (id: string) => void;
  deleteWord: (id: string) => void;
  copyToClipboard: (text: string) => void;
  playPronunciation: (word: string) => void;
  copied: boolean;
}

export function WordList({ 
  words, 
  expandedWord, 
  toggleExpand, 
  toggleFavorite, 
  deleteWord, 
  copyToClipboard, 
  playPronunciation,
  copied 
}: WordListProps) {
  return (
    <div className="d-flex flex-column gap-3">
      {words.map((word) => (
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
  );
}