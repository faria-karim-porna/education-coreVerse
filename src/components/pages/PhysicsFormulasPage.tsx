import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen,
  Search,
  Zap,
  Calculator,
  Eye,
  X,
  Filter,
  Download,
  Share2,
  Copy,
  CheckCircle
} from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Header } from '../layout/Header';
import { Sidebar } from '../layout/Sidebar';

interface PhysicsFormulasPageProps {
  onNavigate: (view: string) => void;
}

interface Formula {
  id: string;
  name: string;
  formula: string;
  description: string;
  category: string;
  variables: { symbol: string; name: string; unit: string }[];
  example: string;
  applications: string[];
}

export function PhysicsFormulasPage({ onNavigate }: PhysicsFormulasPageProps) {
  const [selectedFormula, setSelectedFormula] = useState<Formula | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [copiedFormula, setCopiedFormula] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const formulas: Formula[] = [
    {
      id: '1',
      name: 'Newton\'s Second Law',
      formula: 'F = ma',
      description: 'The force acting on an object is equal to its mass times acceleration.',
      category: 'mechanics',
      variables: [
        { symbol: 'F', name: 'Force', unit: 'N (Newtons)' },
        { symbol: 'm', name: 'Mass', unit: 'kg (kilograms)' },
        { symbol: 'a', name: 'Acceleration', unit: 'm/s² (meters per second squared)' }
      ],
      example: 'A 10 kg object with acceleration 5 m/s² experiences force F = 10 × 5 = 50 N',
      applications: ['Vehicle dynamics', 'Rocket propulsion', 'Sports physics']
    },
    {
      id: '2',
      name: 'Kinematic Equation',
      formula: 'v = u + at',
      description: 'Final velocity equals initial velocity plus acceleration times time.',
      category: 'mechanics',
      variables: [
        { symbol: 'v', name: 'Final velocity', unit: 'm/s' },
        { symbol: 'u', name: 'Initial velocity', unit: 'm/s' },
        { symbol: 'a', name: 'Acceleration', unit: 'm/s²' },
        { symbol: 't', name: 'Time', unit: 's (seconds)' }
      ],
      example: 'Car accelerating from 20 m/s at 3 m/s² for 5s: v = 20 + 3×5 = 35 m/s',
      applications: ['Traffic analysis', 'Projectile motion', 'Free fall calculations']
    },
    {
      id: '3',
      name: 'Ohm\'s Law',
      formula: 'V = IR',
      description: 'Voltage across a conductor is proportional to current and resistance.',
      category: 'electricity',
      variables: [
        { symbol: 'V', name: 'Voltage', unit: 'V (Volts)' },
        { symbol: 'I', name: 'Current', unit: 'A (Amperes)' },
        { symbol: 'R', name: 'Resistance', unit: 'Ω (Ohms)' }
      ],
      example: 'Circuit with 2A current and 10Ω resistance: V = 2 × 10 = 20V',
      applications: ['Circuit design', 'Electrical safety', 'Power calculations']
    },
    {
      id: '4',
      name: 'Einstein\'s Mass-Energy',
      formula: 'E = mc²',
      description: 'Energy equals mass times the speed of light squared.',
      category: 'modern-physics',
      variables: [
        { symbol: 'E', name: 'Energy', unit: 'J (Joules)' },
        { symbol: 'm', name: 'Mass', unit: 'kg (kilograms)' },
        { symbol: 'c', name: 'Speed of light', unit: '3×10⁸ m/s' }
      ],
      example: '1 gram of matter: E = 0.001 × (3×10⁸)² = 9×10¹³ J',
      applications: ['Nuclear physics', 'Particle accelerators', 'Stellar energy']
    },
    {
      id: '5',
      name: 'Wave Equation',
      formula: 'v = fλ',
      description: 'Wave speed equals frequency times wavelength.',
      category: 'waves',
      variables: [
        { symbol: 'v', name: 'Wave speed', unit: 'm/s' },
        { symbol: 'f', name: 'Frequency', unit: 'Hz (Hertz)' },
        { symbol: 'λ', name: 'Wavelength', unit: 'm (meters)' }
      ],
      example: 'Sound wave at 440 Hz with 0.77m wavelength: v = 440 × 0.77 = 339 m/s',
      applications: ['Acoustics', 'Radio waves', 'Optics']
    },
    {
      id: '6',
      name: 'Gravitational Force',
      formula: 'F = G(m₁m₂)/r²',
      description: 'Gravitational force between two masses.',
      category: 'mechanics',
      variables: [
        { symbol: 'F', name: 'Gravitational force', unit: 'N' },
        { symbol: 'G', name: 'Gravitational constant', unit: '6.67×10⁻¹¹ N⋅m²/kg²' },
        { symbol: 'm₁, m₂', name: 'Masses', unit: 'kg' },
        { symbol: 'r', name: 'Distance', unit: 'm' }
      ],
      example: 'Earth-Moon system with known masses and distance',
      applications: ['Orbital mechanics', 'Tidal forces', 'Planetary motion']
    },
    {
      id: '7',
      name: 'Power Formula',
      formula: 'P = VI',
      description: 'Electrical power equals voltage times current.',
      category: 'electricity',
      variables: [
        { symbol: 'P', name: 'Power', unit: 'W (Watts)' },
        { symbol: 'V', name: 'Voltage', unit: 'V (Volts)' },
        { symbol: 'I', name: 'Current', unit: 'A (Amperes)' }
      ],
      example: 'Device at 120V drawing 5A: P = 120 × 5 = 600W',
      applications: ['Electrical billing', 'Circuit design', 'Energy efficiency']
    },
    {
      id: '8',
      name: 'Ideal Gas Law',
      formula: 'PV = nRT',
      description: 'Relationship between pressure, volume, and temperature of gases.',
      category: 'thermodynamics',
      variables: [
        { symbol: 'P', name: 'Pressure', unit: 'Pa (Pascals)' },
        { symbol: 'V', name: 'Volume', unit: 'm³' },
        { symbol: 'n', name: 'Amount of gas', unit: 'mol (moles)' },
        { symbol: 'R', name: 'Gas constant', unit: '8.314 J/(mol⋅K)' },
        { symbol: 'T', name: 'Temperature', unit: 'K (Kelvin)' }
      ],
      example: '1 mole of gas at 300K and 1 atm pressure',
      applications: ['Weather prediction', 'Engine design', 'Chemical processes']
    }
  ];

  const categories = [
    { id: 'all', label: 'All Categories' },
    { id: 'mechanics', label: 'Mechanics' },
    { id: 'electricity', label: 'Electricity & Magnetism' },
    { id: 'thermodynamics', label: 'Thermodynamics' },
    { id: 'waves', label: 'Waves & Optics' },
    { id: 'modern-physics', label: 'Modern Physics' }
  ];

  const filteredFormulas = formulas.filter(formula => {
    const matchesSearch = formula.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         formula.formula.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         formula.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || formula.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const copyFormula = (formula: string, id: string) => {
    navigator.clipboard.writeText(formula);
    setCopiedFormula(id);
    setTimeout(() => setCopiedFormula(null), 2000);
  };

  return (
    <div className="min-vh-100 bg-light-bg d-flex">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        activeView="physics-formulas"
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
                    <Calculator className="text-white" size={40} />
                  </div>
                  <h1 className="display-3 fw-bold mb-4">Physics Formulas</h1>
                  <p className="lead mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                    Comprehensive collection of essential physics formulas with explanations, 
                    variables, and real-world applications for students and professionals.
                  </p>
                  <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                    <Button variant="secondary" size="lg" className="bg-white text-primary-red border-white">
                      <Download size={20} className="me-2" />
                      Download PDF
                    </Button>
                    <Button variant="outline-secondary" size="lg" className="border-white text-white">
                      <Share2 size={20} className="me-2" />
                      Share Collection
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
                      placeholder="Search formulas by name, equation, or description..."
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
                      style={{ maxWidth: '250px' }}
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

          {/* Formulas Grid */}
          <section className="py-5 bg-light-bg">
            <div className="container-lg">
              <div className="row g-4">
                {filteredFormulas.map((formula, index) => (
                  <div key={formula.id} className="col-md-6 col-lg-4">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card hover className="h-100">
                        <div className="card-body p-4">
                          <div className="d-flex align-items-start justify-content-between mb-3">
                            <div className="bg-primary-red bg-opacity-10 rounded-3 d-flex align-items-center justify-content-center"
                                 style={{ width: '48px', height: '48px' }}>
                              <Zap className="text-primary-red" size={24} />
                            </div>
                            <Button 
                              size="sm" 
                              variant="secondary"
                              onClick={() => copyFormula(formula.formula, formula.id)}
                            >
                              {copiedFormula === formula.id ? (
                                <CheckCircle size={14} className="text-success" />
                              ) : (
                                <Copy size={14} />
                              )}
                            </Button>
                          </div>
                          
                          <h4 className="fw-bold text-deep-red mb-2">{formula.name}</h4>
                          <div className="bg-light-bg rounded-3 p-3 mb-3 text-center">
                            <code className="h5 fw-bold text-primary-red">{formula.formula}</code>
                          </div>
                          <p className="text-muted small mb-3">{formula.description}</p>
                          
                          <div className="d-flex align-items-center justify-content-between">
                            <span className="badge bg-accent-red text-white text-capitalize">
                              {formula.category.replace('-', ' ')}
                            </span>
                            <Button size="sm" onClick={() => setSelectedFormula(formula)}>
                              <Eye size={14} className="me-1" />
                              Details
                            </Button>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Formula Details Modal */}
          {selectedFormula && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-4"
              style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050 }}
              onClick={() => setSelectedFormula(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white rounded-4 p-5 w-100"
                style={{ maxWidth: '700px', maxHeight: '90vh', overflowY: 'auto' }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-primary-red rounded-3 p-3">
                      <Calculator className="text-white" size={32} />
                    </div>
                    <div>
                      <h2 className="h3 fw-bold text-deep-red mb-0">{selectedFormula.name}</h2>
                      <p className="text-muted mb-0 text-capitalize">{selectedFormula.category.replace('-', ' ')}</p>
                    </div>
                  </div>
                  <Button variant="secondary" onClick={() => setSelectedFormula(null)}>
                    <X size={16} />
                  </Button>
                </div>

                <div className="bg-light-bg rounded-3 p-4 mb-4 text-center">
                  <code className="display-5 fw-bold text-primary-red">{selectedFormula.formula}</code>
                </div>

                <div className="mb-4">
                  <h5 className="fw-bold text-deep-red mb-2">Description</h5>
                  <p className="text-muted">{selectedFormula.description}</p>
                </div>

                <div className="mb-4">
                  <h5 className="fw-bold text-deep-red mb-3">Variables</h5>
                  <div className="row g-3">
                    {selectedFormula.variables.map((variable, idx) => (
                      <div key={idx} className="col-md-6">
                        <div className="border rounded-3 p-3">
                          <div className="d-flex align-items-center gap-2 mb-1">
                            <code className="bg-primary-red text-white px-2 py-1 rounded">{variable.symbol}</code>
                            <span className="fw-medium text-deep-red">{variable.name}</span>
                          </div>
                          <small className="text-muted">{variable.unit}</small>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h5 className="fw-bold text-deep-red mb-2">Example</h5>
                  <div className="bg-success bg-opacity-10 rounded-3 p-3">
                    <p className="text-muted mb-0">{selectedFormula.example}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <h5 className="fw-bold text-deep-red mb-2">Applications</h5>
                  <div className="d-flex flex-wrap gap-2">
                    {selectedFormula.applications.map((app, idx) => (
                      <span key={idx} className="badge bg-info text-white">{app}</span>
                    ))}
                  </div>
                </div>

                <div className="d-flex gap-2">
                  <Button 
                    className="flex-fill"
                    onClick={() => copyFormula(selectedFormula.formula, selectedFormula.id)}
                  >
                    <Copy size={16} className="me-2" />
                    Copy Formula
                  </Button>
                  <Button variant="secondary" className="flex-fill">
                    <Download size={16} className="me-2" />
                    Save as PDF
                  </Button>
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
        </main>
      </div>
    </div>
  );
}