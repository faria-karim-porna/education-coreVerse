import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Atom,
  Download,
  Share2
} from 'lucide-react';
import { Button } from '../ui/Button';
import { ElementGrid } from '../periodic-table/ElementGrid';
import { CategoryLegend } from '../periodic-table/CategoryLegend';
import { SearchAndFilters } from '../periodic-table/SearchAndFilters';
import { ElementDetails } from '../periodic-table/ElementDetails';
import { Header } from '../layout/Header';
import { Sidebar } from '../layout/Sidebar';

interface PeriodicTablePageProps {
  onNavigate: (view: string) => void;
}

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

export function PeriodicTablePage({ onNavigate }: PeriodicTablePageProps) {
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const elements: Element[] = [
    {
      symbol: 'H',
      name: 'Hydrogen',
      atomicNumber: 1,
      atomicMass: 1.008,
      category: 'nonmetal',
      period: 1,
      group: 1,
      electronConfiguration: '1s¹',
      description: 'The lightest and most abundant element in the universe.',
      uses: ['Fuel cells', 'Rocket fuel', 'Chemical processing'],
      discoveredBy: 'Henry Cavendish',
      yearDiscovered: 1766
    },
    {
      symbol: 'He',
      name: 'Helium',
      atomicNumber: 2,
      atomicMass: 4.003,
      category: 'noble-gas',
      period: 1,
      group: 18,
      electronConfiguration: '1s²',
      description: 'Second lightest element, chemically inert noble gas.',
      uses: ['Balloons', 'Cooling systems', 'Breathing gas for diving'],
      discoveredBy: 'Pierre Janssen',
      yearDiscovered: 1868
    },
    {
      symbol: 'Li',
      name: 'Lithium',
      atomicNumber: 3,
      atomicMass: 6.941,
      category: 'alkali-metal',
      period: 2,
      group: 1,
      electronConfiguration: '[He] 2s¹',
      description: 'Lightest metal, highly reactive alkali metal.',
      uses: ['Batteries', 'Ceramics', 'Mental health medication'],
      discoveredBy: 'Johan August Arfwedson',
      yearDiscovered: 1817
    },
    {
      symbol: 'Be',
      name: 'Beryllium',
      atomicNumber: 4,
      atomicMass: 9.012,
      category: 'alkaline-earth-metal',
      period: 2,
      group: 2,
      electronConfiguration: '[He] 2s²',
      description: 'Light, strong metal used in aerospace applications.',
      uses: ['Aerospace alloys', 'X-ray windows', 'Nuclear reactors'],
      discoveredBy: 'Louis-Nicolas Vauquelin',
      yearDiscovered: 1798
    },
    {
      symbol: 'C',
      name: 'Carbon',
      atomicNumber: 6,
      atomicMass: 12.011,
      category: 'nonmetal',
      period: 2,
      group: 14,
      electronConfiguration: '[He] 2s² 2p²',
      description: 'Essential element for all known life forms.',
      uses: ['Organic compounds', 'Steel production', 'Diamond tools'],
      discoveredBy: 'Ancient civilizations',
      yearDiscovered: -3750
    },
    {
      symbol: 'N',
      name: 'Nitrogen',
      atomicNumber: 7,
      atomicMass: 14.007,
      category: 'nonmetal',
      period: 2,
      group: 15,
      electronConfiguration: '[He] 2s² 2p³',
      description: 'Makes up 78% of Earth\'s atmosphere.',
      uses: ['Fertilizers', 'Explosives', 'Food preservation'],
      discoveredBy: 'Daniel Rutherford',
      yearDiscovered: 1772
    },
    {
      symbol: 'O',
      name: 'Oxygen',
      atomicNumber: 8,
      atomicMass: 15.999,
      category: 'nonmetal',
      period: 2,
      group: 16,
      electronConfiguration: '[He] 2s² 2p⁴',
      description: 'Essential for respiration and combustion.',
      uses: ['Breathing', 'Steel production', 'Water treatment'],
      discoveredBy: 'Carl Wilhelm Scheele',
      yearDiscovered: 1774
    },
    {
      symbol: 'F',
      name: 'Fluorine',
      atomicNumber: 9,
      atomicMass: 18.998,
      category: 'halogen',
      period: 2,
      group: 17,
      electronConfiguration: '[He] 2s² 2p⁵',
      description: 'Most electronegative and reactive element.',
      uses: ['Toothpaste', 'Teflon', 'Refrigerants'],
      discoveredBy: 'Henri Moissan',
      yearDiscovered: 1886
    },
    {
      symbol: 'Ne',
      name: 'Neon',
      atomicNumber: 10,
      atomicMass: 20.180,
      category: 'noble-gas',
      period: 2,
      group: 18,
      electronConfiguration: '[He] 2s² 2p⁶',
      description: 'Inert gas known for its bright orange-red glow.',
      uses: ['Neon signs', 'Lasers', 'Cryogenic refrigerant'],
      discoveredBy: 'William Ramsay',
      yearDiscovered: 1898
    },
    {
      symbol: 'Na',
      name: 'Sodium',
      atomicNumber: 11,
      atomicMass: 22.990,
      category: 'alkali-metal',
      period: 3,
      group: 1,
      electronConfiguration: '[Ne] 3s¹',
      description: 'Highly reactive metal, essential for life.',
      uses: ['Table salt', 'Street lights', 'Chemical production'],
      discoveredBy: 'Humphry Davy',
      yearDiscovered: 1807
    },
    {
      symbol: 'Mg',
      name: 'Magnesium',
      atomicNumber: 12,
      atomicMass: 24.305,
      category: 'alkaline-earth-metal',
      period: 3,
      group: 2,
      electronConfiguration: '[Ne] 3s²',
      description: 'Light metal essential for chlorophyll and bones.',
      uses: ['Alloys', 'Fireworks', 'Dietary supplements'],
      discoveredBy: 'Joseph Black',
      yearDiscovered: 1755
    },
    {
      symbol: 'Al',
      name: 'Aluminum',
      atomicNumber: 13,
      atomicMass: 26.982,
      category: 'post-transition-metal',
      period: 3,
      group: 13,
      electronConfiguration: '[Ne] 3s² 3p¹',
      description: 'Lightweight, corrosion-resistant metal.',
      uses: ['Cans', 'Aircraft', 'Construction'],
      discoveredBy: 'Hans Christian Ørsted',
      yearDiscovered: 1825
    }
  ];

  const categories = [
    { id: 'all', label: 'All Elements', color: 'bg-secondary' },
    { id: 'alkali-metal', label: 'Alkali Metals', color: 'bg-danger' },
    { id: 'alkaline-earth-metal', label: 'Alkaline Earth', color: 'bg-warning' },
    { id: 'transition-metal', label: 'Transition Metals', color: 'bg-info' },
    { id: 'post-transition-metal', label: 'Post-transition', color: 'bg-primary' },
    { id: 'metalloid', label: 'Metalloids', color: 'bg-success' },
    { id: 'nonmetal', label: 'Nonmetals', color: 'bg-dark' },
    { id: 'halogen', label: 'Halogens', color: 'bg-primary-red' },
    { id: 'noble-gas', label: 'Noble Gases', color: 'bg-accent-red' }
  ];

  const getCategoryColor = (category: string) => {
    const categoryData = categories.find(c => c.id === category);
    return categoryData?.color || 'bg-secondary';
  };

  const filteredElements = elements.filter(element => {
    const matchesSearch = element.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         element.symbol.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || element.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-vh-100 bg-light-bg d-flex">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        activeView="periodic-table"
        onViewChange={onNavigate}
      />
      
      <div className="flex-fill d-flex flex-column overflow-hidden">
        <Header
          onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)}
          isSidebarOpen={isSidebarOpen}
          onNavigate={onNavigate}
        />
        
        <main className="flex-fill overflow-auto">
          {/* Hero Section */}
          <section className="position-relative overflow-hidden bg-gradient-primary text-white py-5">
            <div className="container-lg py-5">
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="bg-white bg-opacity-20 rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
                       style={{ width: '80px', height: '80px' }}>
                    <Atom className="text-white" size={40} />
                  </div>
                  <h1 className="display-3 fw-bold mb-4">Interactive Periodic Table</h1>
                  <p className="lead mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                    Explore the elements that make up our universe. Click on any element 
                    to discover its properties, uses, and fascinating history.
                  </p>
                  <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                    <Button variant="secondary" size="lg" className="bg-white text-primary-red border-white">
                      <Download size={20} className="me-2" />
                      Download Reference
                    </Button>
                    <Button variant="outline-secondary" size="lg" className="border-white text-white">
                      <Share2 size={20} className="me-2" />
                      Share Table
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Search and Filters */}
          <section className="py-4 bg-white border-bottom">
            <div className="container-lg">
              <SearchAndFilters 
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                categories={categories}
              />
            </div>
          </section>

          {/* Category Legend */}
          <section className="py-4 bg-light-bg">
            <div className="container-lg">
              <CategoryLegend categories={categories} />
            </div>
          </section>

          {/* Periodic Table Grid */}
          <section className="py-5 bg-white">
            <div className="container-lg">
              <ElementGrid 
                elements={filteredElements} 
                onElementClick={setSelectedElement} 
                getCategoryColor={getCategoryColor} 
              />
            </div>
          </section>

          {/* Element Details Modal */}
          {selectedElement && (
            <ElementDetails 
              element={selectedElement} 
              onClose={() => setSelectedElement(null)} 
              getCategoryColor={getCategoryColor} 
            />
          )}
        </main>
      </div>
    </div>
  );
}