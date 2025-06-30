import React from 'react';
import { motion } from 'framer-motion';
import { Atom, X } from 'lucide-react';
import { Button } from '../ui/Button';

interface Element {
  symbol: string;
  name: string;
  atomicNumber: number;
  atomicMass: number;
  category: string;
  period: number;
  group: number;
  electronConfiguration: string;
  description: string;
  uses: string[];
  discoveredBy: string;
  yearDiscovered: number;
}

interface ElementDetailsProps {
  element: Element;
  onClose: () => void;
  getCategoryColor: (category: string) => string;
}

export function ElementDetails({ element, onClose, getCategoryColor }: ElementDetailsProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050 }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-4 p-5 w-100"
        style={{ maxWidth: '600px', maxHeight: '90vh', overflowY: 'auto' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="d-flex align-items-center justify-content-between mb-4">
          <div className="d-flex align-items-center gap-3">
            <div className={`p-3 rounded-3 ${getCategoryColor(element.category)}`}>
              <Atom className="text-white" size={32} />
            </div>
            <div>
              <h2 className="h3 fw-bold text-deep-red mb-0">{element.name}</h2>
              <p className="text-muted mb-0">Symbol: {element.symbol}</p>
            </div>
          </div>
          <Button variant="secondary" onClick={onClose}>
            <X size={16} />
          </Button>
        </div>

        <div className="row g-4 mb-4">
          <div className="col-6">
            <div className="bg-light-bg rounded-3 p-3">
              <div className="small text-muted">Atomic Number</div>
              <div className="fw-bold text-deep-red">{element.atomicNumber}</div>
            </div>
          </div>
          <div className="col-6">
            <div className="bg-light-bg rounded-3 p-3">
              <div className="small text-muted">Atomic Mass</div>
              <div className="fw-bold text-deep-red">{element.atomicMass}</div>
            </div>
          </div>
          <div className="col-6">
            <div className="bg-light-bg rounded-3 p-3">
              <div className="small text-muted">Period</div>
              <div className="fw-bold text-deep-red">{element.period}</div>
            </div>
          </div>
          <div className="col-6">
            <div className="bg-light-bg rounded-3 p-3">
              <div className="small text-muted">Group</div>
              <div className="fw-bold text-deep-red">{element.group}</div>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h5 className="fw-bold text-deep-red mb-2">Electron Configuration</h5>
          <code className="bg-light-bg p-2 rounded">{element.electronConfiguration}</code>
        </div>

        <div className="mb-4">
          <h5 className="fw-bold text-deep-red mb-2">Description</h5>
          <p className="text-muted">{element.description}</p>
        </div>

        <div className="mb-4">
          <h5 className="fw-bold text-deep-red mb-2">Common Uses</h5>
          <div className="d-flex flex-wrap gap-2">
            {element.uses.map((use, idx) => (
              <span key={idx} className="badge bg-primary-red text-white">{use}</span>
            ))}
          </div>
        </div>

        <div className="bg-light-bg rounded-3 p-3">
          <h6 className="fw-bold text-deep-red mb-2">Discovery</h6>
          <p className="text-muted small mb-0">
            Discovered by <strong>{element.discoveredBy}</strong> in {element.yearDiscovered}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}