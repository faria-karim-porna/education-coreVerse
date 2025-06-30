import React from 'react';
import { motion } from 'framer-motion';
import { Pencil, Square, Circle, Type, Eraser, Trash2 } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

interface LayersPanelProps {
  shapes: any[];
  selectedShape: number | null;
  setSelectedShape: (index: number | null) => void;
  deleteSelectedShape: () => void;
}

export function LayersPanel({ shapes, selectedShape, setSelectedShape, deleteSelectedShape }: LayersPanelProps) {
  return (
    <Card style={{ width: '250px' }}>
      <div className="card-body p-3">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h6 className="fw-bold text-deep-red mb-0">Layers</h6>
          <Button 
            size="sm" 
            variant="secondary"
            onClick={deleteSelectedShape}
            disabled={selectedShape === null}
            className="p-1"
          >
            <Trash2 size={14} />
          </Button>
        </div>
        <div className="d-flex flex-column gap-2" style={{ maxHeight: '300px', overflowY: 'auto' }}>
          {shapes.length === 0 ? (
            <p className="text-muted small text-center py-3">No layers yet</p>
          ) : (
            shapes.map((shape, index) => (
              <div 
                key={index}
                className={`d-flex align-items-center justify-content-between p-2 border rounded-3 ${selectedShape === index ? 'bg-light-bg' : ''}`}
                onClick={() => setSelectedShape(index)}
                style={{ cursor: 'pointer' }}
              >
                <div className="d-flex align-items-center gap-2">
                  {shape.type === 'pencil' && <Pencil size={14} />}
                  {shape.type === 'rectangle' && <Square size={14} />}
                  {shape.type === 'circle' && <Circle size={14} />}
                  {shape.type === 'text' && <Type size={14} />}
                  {shape.type === 'eraser' && <Eraser size={14} />}
                  <span className="small">
                    {shape.type.charAt(0).toUpperCase() + shape.type.slice(1)} {index + 1}
                  </span>
                </div>
                <div 
                  className="rounded-circle border"
                  style={{ 
                    width: '14px', 
                    height: '14px', 
                    backgroundColor: shape.color
                  }}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </Card>
  );
}