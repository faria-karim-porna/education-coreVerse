import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';

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

interface ElementGridProps {
  elements: Element[];
  onElementClick: (element: Element) => void;
  getCategoryColor: (category: string) => string;
}

export function ElementGrid({ elements, onElementClick, getCategoryColor }: ElementGridProps) {
  return (
    <div className="row g-2">
      {elements.map((element, index) => (
        <div key={element.symbol} className="col-6 col-sm-4 col-md-3 col-lg-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card 
              hover 
              className="h-100 cursor-pointer"
              onClick={() => onElementClick(element)}
            >
              <div className={`card-body p-3 text-center ${getCategoryColor(element.category)} bg-opacity-10`}>
                <div className="small text-muted mb-1">{element.atomicNumber}</div>
                <div className="h4 fw-bold text-deep-red mb-1">{element.symbol}</div>
                <div className="small text-muted">{element.name}</div>
                <div className="small text-muted">{element.atomicMass}</div>
              </div>
            </Card>
          </motion.div>
        </div>
      ))}
    </div>
  );
}