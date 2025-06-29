import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen,
  Search,
  Info,
  Atom,
  Zap,
  Thermometer,
  Weight,
  Eye,
  X,
  Filter,
  Download,
  Share2
} from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';

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
    <div className="min-vh-100 bg-light-bg">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm border-bottom">
        <div className="container-lg">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="navbar-brand d-flex align-items-center gap-2 btn btn-link text-decoration-none"
            onClick={() => onNavigate('home')}
          >
            <div className="bg-primary-red rounded-4 d-flex align-items-center justify-content-center"
                 style={{ width: '40px', height: '40px' }}>
              <BookOpen className="text-white" size={24} />
            </div>
            <span className="fw-bold h3 text-deep-red mb-0">CoreVerse</span>
          </motion.button>
          
          <div className="d-none d-md-flex align-items-center gap-4">
            <button 
              onClick={() => onNavigate('features')} 
              className="nav-link btn btn-link text-deep-red text-decoration-none"
            >
              Features
            </button>
            <button 
              onClick={() => onNavigate('about')} 
              className="nav-link btn btn-link text-deep-red text-decoration-none"
            >
              About
            </button>
            <button 
              onClick={() => onNavigate('contact')} 
              className="nav-link btn btn-link text-deep-red text-decoration-none"
            >
              Contact
            </button>
            <ThemeToggle />
            <Button variant="secondary" className="me-2" onClick={() => onNavigate('dashboard')}>
              Sign In
            </Button>
            <Button onClick={() => onNavigate('dashboard')}>Get Started</Button>
          </div>
        </div>
      </nav>

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
        </div>
      </section>

      {/* Category Legend */}
      <section className="py-4 bg-light-bg">
        <div className="container-lg">
          <div className="d-flex flex-wrap gap-3 justify-content-center">
            {categories.slice(1).map((category) => (
              <div key={category.id} className="d-flex align-items-center gap-2">
                <div className={`${category.color} rounded`} style={{ width: '16px', height: '16px' }}></div>
                <span className="small text-muted">{category.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Periodic Table Grid */}
      <section className="py-5 bg-white">
        <div className="container-lg">
          <div className="row g-2">
            {filteredElements.map((element, index) => (
              <div key={element.symbol} className="col-6 col-sm-4 col-md-3 col-lg-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card 
                    hover 
                    className="h-100 cursor-pointer"
                    onClick={() => setSelectedElement(element)}
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
        </div>
      </section>

      {/* Element Details Modal */}
      {selectedElement && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050 }}
          onClick={() => setSelectedElement(null)}
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
                <div className={`p-3 rounded-3 ${getCategoryColor(selectedElement.category)}`}>
                  <Atom className="text-white" size={32} />
                </div>
                <div>
                  <h2 className="h3 fw-bold text-deep-red mb-0">{selectedElement.name}</h2>
                  <p className="text-muted mb-0">Symbol: {selectedElement.symbol}</p>
                </div>
              </div>
              <Button variant="secondary" onClick={() => setSelectedElement(null)}>
                <X size={16} />
              </Button>
            </div>

            <div className="row g-4 mb-4">
              <div className="col-6">
                <div className="bg-light-bg rounded-3 p-3">
                  <div className="small text-muted">Atomic Number</div>
                  <div className="fw-bold text-deep-red">{selectedElement.atomicNumber}</div>
                </div>
              </div>
              <div className="col-6">
                <div className="bg-light-bg rounded-3 p-3">
                  <div className="small text-muted">Atomic Mass</div>
                  <div className="fw-bold text-deep-red">{selectedElement.atomicMass}</div>
                </div>
              </div>
              <div className="col-6">
                <div className="bg-light-bg rounded-3 p-3">
                  <div className="small text-muted">Period</div>
                  <div className="fw-bold text-deep-red">{selectedElement.period}</div>
                </div>
              </div>
              <div className="col-6">
                <div className="bg-light-bg rounded-3 p-3">
                  <div className="small text-muted">Group</div>
                  <div className="fw-bold text-deep-red">{selectedElement.group}</div>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <h5 className="fw-bold text-deep-red mb-2">Electron Configuration</h5>
              <code className="bg-light-bg p-2 rounded">{selectedElement.electronConfiguration}</code>
            </div>

            <div className="mb-4">
              <h5 className="fw-bold text-deep-red mb-2">Description</h5>
              <p className="text-muted">{selectedElement.description}</p>
            </div>

            <div className="mb-4">
              <h5 className="fw-bold text-deep-red mb-2">Common Uses</h5>
              <div className="d-flex flex-wrap gap-2">
                {selectedElement.uses.map((use, idx) => (
                  <span key={idx} className="badge bg-primary-red text-white">{use}</span>
                ))}
              </div>
            </div>

            <div className="bg-light-bg rounded-3 p-3">
              <h6 className="fw-bold text-deep-red mb-2">Discovery</h6>
              <p className="text-muted small mb-0">
                Discovered by <strong>{selectedElement.discoveredBy}</strong> in {selectedElement.yearDiscovered}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Footer */}
      <footer className="bg-deep-red text-white py-5">
        <div className="container-lg">
          <div className="row g-4">
            <div className="col-lg-3">
              <button 
                onClick={() => onNavigate('home')}
                className="d-flex align-items-center gap-2 mb-4 btn btn-link text-white text-decoration-none p-0"
              >
                <div className="bg-primary-red rounded-3 d-flex align-items-center justify-content-center"
                     style={{ width: '32px', height: '32px' }}>
                  <BookOpen className="text-white" size={20} />
                </div>
                <span className="fw-bold h5 mb-0">CoreVerse</span>
              </button>
              <p className="text-white-50">
                Transforming education through interactive technology and innovative learning experiences.
              </p>
            </div>
            
            <div className="col-lg-3">
              <h6 className="fw-semibold mb-3">Study Tools</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <button onClick={() => onNavigate('periodic-table')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Periodic Table
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('physics-formulas')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Physics Formulas
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('biology-names')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Scientific Names
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('country-flags')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Country Flags
                  </button>
                </li>
              </ul>
            </div>
            
            <div className="col-lg-3">
              <h6 className="fw-semibold mb-3">Support</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <button onClick={() => onNavigate('help-center')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Help Center
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('documentation')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Documentation
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('community')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Community
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('contact')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>
            
            <div className="col-lg-3">
              <h6 className="fw-semibold mb-3">Company</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <button onClick={() => onNavigate('about')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    About
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('careers')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Careers
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('privacy')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Privacy
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('terms')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Terms
                  </button>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-top border-white border-opacity-25 mt-5 pt-4 text-center">
            <p className="text-white-50 mb-0">&copy; 2024 CoreVerse. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}