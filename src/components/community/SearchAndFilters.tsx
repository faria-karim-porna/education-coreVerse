import React from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Plus } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

interface SearchAndFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export function SearchAndFilters({ searchQuery, setSearchQuery }: SearchAndFiltersProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-4"
    >
      <Card>
        <div className="card-body p-4">
          <div className="row g-3">
            <div className="col-md-8">
              <div className="position-relative">
                <Search className="position-absolute text-muted" 
                        style={{ left: '12px', top: '50%', transform: 'translateY(-50%)', width: '16px', height: '16px' }} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search discussions..."
                  className="form-control ps-5"
                  style={{ paddingLeft: '2.5rem' }}
                />
              </div>
            </div>
            <div className="col-md-4">
              <Button variant="secondary" className="w-100 d-flex align-items-center justify-content-center gap-2">
                <Filter size={16} />
                Filter
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}