import React from 'react';
import { Search } from 'lucide-react';

interface SearchAndFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedContinent: string;
  setSelectedContinent: (continent: string) => void;
  continents: { id: string; label: string }[];
}

export function SearchAndFilters({ 
  searchQuery, 
  setSearchQuery, 
  selectedContinent, 
  setSelectedContinent,
  continents 
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
            placeholder="Search by country name, capital, or continent..."
            className="form-control ps-5"
            style={{ paddingLeft: '2.5rem' }}
          />
        </div>
      </div>
      <div className="col-md-6">
        <div className="d-flex align-items-center gap-3 justify-content-md-end">
          <span className="fw-medium text-deep-red">Continent:</span>
          <select 
            className="form-select"
            value={selectedContinent}
            onChange={(e) => setSelectedContinent(e.target.value)}
            style={{ maxWidth: '200px' }}
          >
            {continents.map(continent => (
              <option key={continent.id} value={continent.id}>{continent.label}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}