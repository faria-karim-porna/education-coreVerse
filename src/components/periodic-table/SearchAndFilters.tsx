import React from 'react';
import { Search } from 'lucide-react';

interface SearchAndFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  categories: { id: string; label: string; color: string }[];
}

export function SearchAndFilters({ 
  searchQuery, 
  setSearchQuery, 
  selectedCategory, 
  setSelectedCategory,
  categories 
}: SearchAndFiltersProps) {
  return (
    <div className="row align-items-center">
      <div className="col-md-6">
        <div className="position-relative">
          <Search className="position-absolute text-muted" 
                  style={{ left: '12px', top: '50%', transform: 'translateY(-50%)', width: '16px', height: '16px' }} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search elements by name or symbol..."
            className="form-control ps-5"
            style={{ paddingLeft: '2.5rem' }}
          />
        </div>
      </div>
      <div className="col-md-6">
        <div className="d-flex align-items-center gap-3 justify-content-md-end">
          <span className="fw-medium text-deep-red">Category:</span>
          <select 
            className="form-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{ maxWidth: '200px' }}
          >
            {categories.map(category => (
              <option key={category.id} value={category.id}>{category.label}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}