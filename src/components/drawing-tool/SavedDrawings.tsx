import React from 'react';
import { motion } from 'framer-motion';
import { ChevronUp, ChevronDown, Download } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

interface SavedDrawingsProps {
  showSavedDrawings: boolean;
  setShowSavedDrawings: (show: boolean) => void;
  savedDrawings: string[];
}

export function SavedDrawings({ showSavedDrawings, setShowSavedDrawings, savedDrawings }: SavedDrawingsProps) {
  return (
    <Card style={{ width: '250px' }}>
      <div className="card-body p-3">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h6 className="fw-bold text-deep-red mb-0">Saved Drawings</h6>
          <Button 
            size="sm" 
            variant="secondary"
            onClick={() => setShowSavedDrawings(!showSavedDrawings)}
            className="p-1"
          >
            {showSavedDrawings ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </Button>
        </div>
        {showSavedDrawings && (
          <div className="d-flex flex-column gap-2" style={{ maxHeight: '300px', overflowY: 'auto' }}>
            {savedDrawings.length === 0 ? (
              <p className="text-muted small text-center py-3">No saved drawings</p>
            ) : (
              savedDrawings.map((drawing, index) => (
                <div 
                  key={index}
                  className="border rounded-3 p-2"
                >
                  <div className="mb-2">
                    <img 
                      src={drawing} 
                      alt={`Drawing ${index + 1}`} 
                      className="img-fluid rounded-3"
                      style={{ maxHeight: '100px' }}
                    />
                  </div>
                  <div className="d-flex gap-1">
                    <Button size="sm" className="w-100 py-1">Load</Button>
                    <Button size="sm" variant="secondary" className="py-1">
                      <Download size={14} />
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </Card>
  );
}