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
  // Create a 2D array to represent the periodic table layout
  const rows = 10; // 7 periods + lanthanides + actinides + empty row
  const cols = 18; // 18 groups
  const periodicTable: (Element | null)[][] = Array(rows).fill(null).map(() => Array(cols).fill(null));
  
  // Place elements in their correct positions
  elements.forEach(element => {
    let row = element.period - 1; // 0-indexed
    let col = element.group - 1; // 0-indexed
    
    // Special handling for lanthanides and actinides
    if (element.category === 'lanthanide') {
      row = 8; // Lanthanide row (after period 7)
      col = element.atomicNumber - 57; // Start from La (57)
    } else if (element.category === 'actinide') {
      row = 9; // Actinide row (after lanthanides)
      col = element.atomicNumber - 89; // Start from Ac (89)
    }
    
    // Only place if within bounds
    if (row >= 0 && row < rows && col >= 0 && col < cols) {
      periodicTable[row][col] = element;
    }
  });

  return (
    <div className="periodic-table-container overflow-auto">
      <table className="w-100" style={{ borderCollapse: 'separate', borderSpacing: '2px' }}>
        <tbody>
          {periodicTable.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((element, colIndex) => (
                <td key={`${rowIndex}-${colIndex}`} style={{ padding: '2px' }}>
                  {element ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: (rowIndex * cols + colIndex) * 0.001 }}
                    >
                      <Card 
                        hover 
                        className="cursor-pointer"
                        onClick={() => onElementClick(element)}
                      >
                        <div className={`card-body p-2 text-center ${getCategoryColor(element.category)} bg-opacity-10`}
                             style={{ width: '70px', height: '70px' }}>
                          <div className="small text-muted" style={{ fontSize: '0.6rem' }}>{element.atomicNumber}</div>
                          <div className="fw-bold text-deep-red" style={{ fontSize: '1.2rem' }}>{element.symbol}</div>
                          <div className="small text-muted" style={{ fontSize: '0.6rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{element.name}</div>
                          <div className="small text-muted" style={{ fontSize: '0.6rem' }}>{element.atomicMass.toFixed(1)}</div>
                        </div>
                      </Card>
                    </motion.div>
                  ) : (
                    // Empty cell
                    <div style={{ width: '70px', height: '70px' }}></div>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}