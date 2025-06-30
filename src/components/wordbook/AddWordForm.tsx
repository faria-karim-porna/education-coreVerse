import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Plus } from 'lucide-react';
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

interface AddWordFormProps {
  onClose: () => void;
  onAddWord: () => void;
  newWord: Partial<Word>;
  setNewWord: (word: Partial<Word>) => void;
  tagInput: string;
  setTagInput: (tag: string) => void;
  synonymInput: string;
  setSynonymInput: (synonym: string) => void;
  antonymInput: string;
  setAntonymInput: (antonym: string) => void;
  addTag: () => void;
  removeTag: (tag: string) => void;
  addSynonym: () => void;
  removeSynonym: (synonym: string) => void;
  addAntonym: () => void;
  removeAntonym: (antonym: string) => void;
  addExample: () => void;
  updateExample: (index: number, value: string) => void;
  removeExample: (index: number) => void;
}

export function AddWordForm({
  onClose,
  onAddWord,
  newWord,
  setNewWord,
  tagInput,
  setTagInput,
  synonymInput,
  setSynonymInput,
  antonymInput,
  setAntonymInput,
  addTag,
  removeTag,
  addSynonym,
  removeSynonym,
  addAntonym,
  removeAntonym,
  addExample,
  updateExample,
  removeExample
}: AddWordFormProps) {
  return (
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
          <Button variant="secondary" onClick={onClose}>
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
              onClick={onAddWord} 
              disabled={!newWord.term || !newWord.definition}
            >
              Add Word
            </Button>
            <Button variant="secondary" className="flex-fill" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}