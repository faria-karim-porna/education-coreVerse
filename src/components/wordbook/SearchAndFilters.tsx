import React from 'react';
import { Search, Star, SortAsc, SortDesc, Plus } from 'lucide-react';
import { Button } from '../ui/Button';

interface SearchAndFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedTag: string;
  setSelectedTag: (tag: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  sortDirection: string;
  setSortDirection: (direction: string) => void;
  showFavoritesOnly: boolean;
  setShowFavoritesOnly: (show: boolean) => void;
  onAddWordClick: () => void;
  categories: { id: string; label: string }[];
  allTags: string[];
}

export function SearchAndFilters({
  searchQuery,
  setSearchQuery,
  selectedTag,
  setSelectedTag,
  sortBy,
  setSortBy,
  sortDirection,
  setSortDirection,
  showFavoritesOnly,
  setShowFavoritesOnly,
  onAddWordClick,
  categories,
  allTags
}: SearchAndFiltersProps) {
  return (
    <div className="row g-3 mb-4">
      <div className="col-md-6">
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
      <div className="col-md-4">
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
          <Button onClick={onAddWordClick} className="p-2">
            <Plus size={16} />
          </Button>
        </div>
      </div>
      <div className="col-md-6">
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
    </div>
  );
}