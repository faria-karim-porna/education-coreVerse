import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Atom, Beaker, FlaskRound as Flask, Thermometer, Play, Pause, RotateCcw, Download, Share2, Info, Plus, Minus, X, Settings, HelpCircle, Save, Eye, Layers, Droplet, Flame, Zap } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';

interface ChemistrySimulationPageProps {
  onNavigate: (view: string) => void;
}

export function ChemistrySimulationPage({ onNavigate }: ChemistrySimulationPageProps) {
  const [selectedSimulation, setSelectedSimulation] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [temperature, setTemperature] = useState(25);
  const [pressure, setPressure] = useState(1);
  const [concentration, setConcentration] = useState(1);
  const [showSettings, setShowSettings] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [reactionSpeed, setReactionSpeed] = useState(1);
  const [selectedElements, setSelectedElements] = useState<string[]>([]);
  const [reactionResult, setReactionResult] = useState<string | null>(null);

  const simulations = [
    {
      id: 'acid-base',
      name: 'Acid-Base Reactions',
      description: 'Explore acid-base neutralization reactions and pH changes',
      difficulty: 'Beginner',
      icon: Droplet,
      color: 'bg-primary-red'
    },
    {
      id: 'titration',
      name: 'Titration Simulation',
      description: 'Perform virtual titrations with various indicators',
      difficulty: 'Intermediate',
      icon: Flask,
      color: 'bg-accent-red'
    },
    {
      id: 'gas-laws',
      name: 'Gas Laws Explorer',
      description: 'Investigate the relationships between pressure, volume, and temperature',
      difficulty: 'Intermediate',
      icon: Thermometer,
      color: 'bg-success'
    },
    {
      id: 'molecular-builder',
      name: 'Molecular Structure Builder',
      description: 'Create and visualize 3D molecular structures',
      difficulty: 'Advanced',
      icon: Atom,
      color: 'bg-info'
    },
    {
      id: 'reaction-kinetics',
      name: 'Reaction Kinetics',
      description: 'Study the rates of chemical reactions and factors affecting them',
      difficulty: 'Advanced',
      icon: Zap,
      color: 'bg-warning'
    },
    {
      id: 'combustion',
      name: 'Combustion Reactions',
      description: 'Observe and analyze various combustion reactions',
      difficulty: 'Intermediate',
      icon: Flame,
      color: 'bg-danger'
    }
  ];

  const elements = [
    { symbol: 'H', name: 'Hydrogen', type: 'nonmetal' },
    { symbol: 'O', name: 'Oxygen', type: 'nonmetal' },
    { symbol: 'Na', name: 'Sodium', type: 'metal' },
    { symbol: 'Cl', name: 'Chlorine', type: 'nonmetal' },
    { symbol: 'C', name: 'Carbon', type: 'nonmetal' },
    { symbol: 'N', name: 'Nitrogen', type: 'nonmetal' },
    { symbol: 'Ca', name: 'Calcium', type: 'metal' },
    { symbol: 'Mg', name: 'Magnesium', type: 'metal' },
    { symbol: 'Fe', name: 'Iron', type: 'metal' },
    { symbol: 'Cu', name: 'Copper', type: 'metal' },
    { symbol: 'Zn', name: 'Zinc', type: 'metal' },
    { symbol: 'S', name: 'Sulfur', type: 'nonmetal' }
  ];

  const toggleElement = (symbol: string) => {
    if (selectedElements.includes(symbol)) {
      setSelectedElements(selectedElements.filter(el => el !== symbol));
    } else {
      if (selectedElements.length < 3) {
        setSelectedElements([...selectedElements, symbol]);
      }
    }
  };

  const startSimulation = () => {
    setIsPlaying(true);
    
    // Simulate reaction result based on selected elements
    if (selectedElements.length >= 2) {
      // Simple reaction logic for demo purposes
      if (selectedElements.includes('H') && selectedElements.includes('O')) {
        setReactionResult('H₂O (Water)');
      } else if (selectedElements.includes('Na') && selectedElements.includes('Cl')) {
        setReactionResult('NaCl (Sodium Chloride)');
      } else if (selectedElements.includes('C') && selectedElements.includes('O')) {
        setReactionResult('CO₂ (Carbon Dioxide)');
      } else if (selectedElements.includes('H') && selectedElements.includes('Cl')) {
        setReactionResult('HCl (Hydrochloric Acid)');
      } else if (selectedElements.includes('Ca') && selectedElements.includes('O')) {
        setReactionResult('CaO (Calcium Oxide)');
      } else {
        setReactionResult('Unknown Compound');
      }
    } else {
      setReactionResult(null);
    }
  };

  const pauseSimulation = () => {
    setIsPlaying(false);
  };

  const resetSimulation = () => {
    setIsPlaying(false);
    setTemperature(25);
    setPressure(1);
    setConcentration(1);
    setReactionSpeed(1);
    setSelectedElements([]);
    setReactionResult(null);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-success';
      case 'Intermediate': return 'bg-warning';
      case 'Advanced': return 'bg-danger';
      default: return 'bg-secondary';
    }
  };

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
                <Beaker className="text-white" size={40} />
              </div>
              <h1 className="display-3 fw-bold mb-4">Chemistry Simulation Lab</h1>
              <p className="lead mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                Explore chemical reactions, molecular structures, and laboratory techniques 
                in our interactive virtual chemistry lab. Safe, engaging, and educational.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <Button variant="secondary" size="lg" className="bg-white text-primary-red border-white">
                  <Play size={20} className="me-2" />
                  Start Experimenting
                </Button>
                <Button variant="outline-secondary" size="lg" className="border-white text-white">
                  <Download size={20} className="me-2" />
                  Download Lab Manual
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-5 bg-white">
        <div className="container-lg">
          <div className="row g-4">
            {/* Simulation Selection */}
            <div className="col-lg-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Card>
                  <div className="card-body p-4">
                    <h3 className="h4 fw-bold text-deep-red mb-4">Simulation Library</h3>
                    <div className="d-flex flex-column gap-3">
                      {simulations.map((simulation, index) => (
                        <motion.div
                          key={simulation.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 + index * 0.1 }}
                          className={`p-3 border rounded-3 cursor-pointer ${
                            selectedSimulation === simulation.id ? 'bg-light-bg border-primary-red' : ''
                          }`}
                          onClick={() => setSelectedSimulation(simulation.id)}
                        >
                          <div className="d-flex align-items-start gap-3">
                            <div className={`p-2 rounded-3 ${simulation.color}`}>
                              <simulation.icon className="text-white" size={20} />
                            </div>
                            <div className="flex-fill">
                              <div className="d-flex align-items-center justify-content-between mb-1">
                                <h6 className="fw-semibold text-deep-red mb-0">{simulation.name}</h6>
                                <span className={`badge ${getDifficultyColor(simulation.difficulty)} text-white small`}>
                                  {simulation.difficulty}
                                </span>
                              </div>
                              <p className="text-muted small mb-0">{simulation.description}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>

            {/* Simulation Workspace */}
            <div className="col-lg-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card>
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <h3 className="h4 fw-bold text-deep-red mb-0">
                        {selectedSimulation 
                          ? simulations.find(s => s.id === selectedSimulation)?.name 
                          : 'Chemistry Workspace'}
                      </h3>
                      <div className="d-flex gap-2">
                        <Button 
                          size="sm" 
                          variant="secondary"
                          onClick={() => setShowSettings(!showSettings)}
                        >
                          <Settings size={16} />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="secondary"
                          onClick={() => setShowHelp(!showHelp)}
                        >
                          <HelpCircle size={16} />
                        </Button>
                      </div>
                    </div>

                    {/* Simulation Viewport */}
                    <div className="bg-light-bg rounded-3 mb-4" style={{ height: '400px' }}>
                      {!selectedSimulation ? (
                        <div className="h-100 d-flex flex-column align-items-center justify-content-center">
                          <Beaker size={64} className="text-muted mb-3" />
                          <h5 className="text-muted">Select a simulation to begin</h5>
                        </div>
                      ) : (
                        <div className="h-100 p-4">
                          {/* Molecular Builder UI */}
                          <div className="h-100 d-flex flex-column">
                            <div className="mb-3">
                              <h5 className="fw-bold text-deep-red mb-3">Periodic Table Elements</h5>
                              <div className="d-flex flex-wrap gap-2 mb-3">
                                {elements.map(element => (
                                  <button
                                    key={element.symbol}
                                    className={`btn ${
                                      selectedElements.includes(element.symbol)
                                        ? 'btn-primary'
                                        : element.type === 'metal' 
                                          ? 'btn-outline-primary' 
                                          : 'btn-outline-secondary'
                                    } py-2 px-3`}
                                    onClick={() => toggleElement(element.symbol)}
                                  >
                                    <div className="fw-bold">{element.symbol}</div>
                                    <div className="small">{element.name}</div>
                                  </button>
                                ))}
                              </div>
                            </div>

                            <div className="flex-fill bg-white rounded-3 border p-3 d-flex flex-column align-items-center justify-content-center">
                              {selectedElements.length > 0 ? (
                                <div className="text-center">
                                  <div className="d-flex align-items-center justify-content-center gap-3 mb-4">
                                    {selectedElements.map((symbol, index) => (
                                      <React.Fragment key={symbol}>
                                        <div className="bg-primary-red bg-opacity-10 rounded-3 p-3">
                                          <span className="h3 fw-bold text-primary-red">{symbol}</span>
                                        </div>
                                        {index < selectedElements.length - 1 && (
                                          <Plus size={24} className="text-muted" />
                                        )}
                                      </React.Fragment>
                                    ))}
                                  </div>
                                  
                                  {isPlaying && reactionResult && (
                                    <motion.div
                                      initial={{ opacity: 0, y: 20 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      className="mb-4"
                                    >
                                      <div className="bg-success bg-opacity-10 rounded-3 p-3">
                                        <h5 className="fw-bold text-success mb-0">
                                          Result: {reactionResult}
                                        </h5>
                                      </div>
                                    </motion.div>
                                  )}
                                  
                                  <p className="text-muted mb-4">
                                    {isPlaying 
                                      ? 'Reaction in progress...' 
                                      : 'Press Play to start the reaction simulation'}
                                  </p>
                                </div>
                              ) : (
                                <div className="text-center">
                                  <Atom size={64} className="text-muted mb-3" />
                                  <h5 className="text-muted">Select elements to create a reaction</h5>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Simulation Controls */}
                    <div className="d-flex flex-wrap gap-3 justify-content-between align-items-center">
                      <div className="d-flex gap-2">
                        {isPlaying ? (
                          <Button onClick={pauseSimulation}>
                            <Pause size={16} className="me-1" />
                            Pause
                          </Button>
                        ) : (
                          <Button onClick={startSimulation} disabled={!selectedSimulation || selectedElements.length < 2}>
                            <Play size={16} className="me-1" />
                            Play
                          </Button>
                        )}
                        <Button variant="secondary" onClick={resetSimulation}>
                          <RotateCcw size={16} className="me-1" />
                          Reset
                        </Button>
                      </div>
                      
                      <div className="d-flex gap-2">
                        <Button variant="secondary">
                          <Save size={16} className="me-1" />
                          Save
                        </Button>
                        <Button variant="secondary">
                          <Share2 size={16} className="me-1" />
                          Share
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Settings Panel */}
              {showSettings && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4"
                >
                  <Card>
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center justify-content-between mb-4">
                        <h4 className="h5 fw-bold text-deep-red mb-0">Simulation Settings</h4>
                        <Button 
                          size="sm" 
                          variant="secondary"
                          onClick={() => setShowSettings(false)}
                        >
                          <X size={16} />
                        </Button>
                      </div>
                      
                      <div className="row g-3">
                        <div className="col-md-6">
                          <label className="form-label fw-medium text-deep-red">Temperature (°C)</label>
                          <div className="d-flex align-items-center gap-2">
                            <Button 
                              size="sm" 
                              variant="secondary"
                              onClick={() => setTemperature(Math.max(0, temperature - 5))}
                              className="p-1"
                            >
                              <Minus size={14} />
                            </Button>
                            <input
                              type="range"
                              className="form-range flex-fill"
                              min="0"
                              max="100"
                              value={temperature}
                              onChange={(e) => setTemperature(parseInt(e.target.value))}
                            />
                            <Button 
                              size="sm" 
                              variant="secondary"
                              onClick={() => setTemperature(Math.min(100, temperature + 5))}
                              className="p-1"
                            >
                              <Plus size={14} />
                            </Button>
                            <span className="text-muted" style={{ width: '40px' }}>{temperature}°C</span>
                          </div>
                        </div>
                        
                        <div className="col-md-6">
                          <label className="form-label fw-medium text-deep-red">Pressure (atm)</label>
                          <div className="d-flex align-items-center gap-2">
                            <Button 
                              size="sm" 
                              variant="secondary"
                              onClick={() => setPressure(Math.max(0.1, pressure - 0.1))}
                              className="p-1"
                            >
                              <Minus size={14} />
                            </Button>
                            <input
                              type="range"
                              className="form-range flex-fill"
                              min="0.1"
                              max="5"
                              step="0.1"
                              value={pressure}
                              onChange={(e) => setPressure(parseFloat(e.target.value))}
                            />
                            <Button 
                              size="sm" 
                              variant="secondary"
                              onClick={() => setPressure(Math.min(5, pressure + 0.1))}
                              className="p-1"
                            >
                              <Plus size={14} />
                            </Button>
                            <span className="text-muted" style={{ width: '40px' }}>{pressure} atm</span>
                          </div>
                        </div>
                        
                        <div className="col-md-6">
                          <label className="form-label fw-medium text-deep-red">Concentration (M)</label>
                          <div className="d-flex align-items-center gap-2">
                            <Button 
                              size="sm" 
                              variant="secondary"
                              onClick={() => setConcentration(Math.max(0.1, concentration - 0.1))}
                              className="p-1"
                            >
                              <Minus size={14} />
                            </Button>
                            <input
                              type="range"
                              className="form-range flex-fill"
                              min="0.1"
                              max="3"
                              step="0.1"
                              value={concentration}
                              onChange={(e) => setConcentration(parseFloat(e.target.value))}
                            />
                            <Button 
                              size="sm" 
                              variant="secondary"
                              onClick={() => setConcentration(Math.min(3, concentration + 0.1))}
                              className="p-1"
                            >
                              <Plus size={14} />
                            </Button>
                            <span className="text-muted" style={{ width: '40px' }}>{concentration} M</span>
                          </div>
                        </div>
                        
                        <div className="col-md-6">
                          <label className="form-label fw-medium text-deep-red">Reaction Speed</label>
                          <div className="d-flex align-items-center gap-2">
                            <Button 
                              size="sm" 
                              variant="secondary"
                              onClick={() => setReactionSpeed(Math.max(0.5, reactionSpeed - 0.5))}
                              className="p-1"
                            >
                              <Minus size={14} />
                            </Button>
                            <input
                              type="range"
                              className="form-range flex-fill"
                              min="0.5"
                              max="3"
                              step="0.5"
                              value={reactionSpeed}
                              onChange={(e) => setReactionSpeed(parseFloat(e.target.value))}
                            />
                            <Button 
                              size="sm" 
                              variant="secondary"
                              onClick={() => setReactionSpeed(Math.min(3, reactionSpeed + 0.5))}
                              className="p-1"
                            >
                              <Plus size={14} />
                            </Button>
                            <span className="text-muted" style={{ width: '40px' }}>{reactionSpeed}x</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )}

              {/* Help Panel */}
              {showHelp && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4"
                >
                  <Card>
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center justify-content-between mb-4">
                        <h4 className="h5 fw-bold text-deep-red mb-0">How to Use This Simulation</h4>
                        <Button 
                          size="sm" 
                          variant="secondary"
                          onClick={() => setShowHelp(false)}
                        >
                          <X size={16} />
                        </Button>
                      </div>
                      
                      <div className="d-flex flex-column gap-3">
                        <div className="d-flex align-items-start gap-3">
                          <div className="bg-primary-red bg-opacity-10 rounded-3 p-2">
                            <span className="fw-bold text-primary-red">1</span>
                          </div>
                          <div>
                            <h6 className="fw-semibold text-deep-red mb-1">Select a Simulation</h6>
                            <p className="text-muted small mb-0">Choose from the simulation library on the left panel.</p>
                          </div>
                        </div>
                        
                        <div className="d-flex align-items-start gap-3">
                          <div className="bg-primary-red bg-opacity-10 rounded-3 p-2">
                            <span className="fw-bold text-primary-red">2</span>
                          </div>
                          <div>
                            <h6 className="fw-semibold text-deep-red mb-1">Set Up Your Experiment</h6>
                            <p className="text-muted small mb-0">Select elements, adjust temperature, pressure, and concentration as needed.</p>
                          </div>
                        </div>
                        
                        <div className="d-flex align-items-start gap-3">
                          <div className="bg-primary-red bg-opacity-10 rounded-3 p-2">
                            <span className="fw-bold text-primary-red">3</span>
                          </div>
                          <div>
                            <h6 className="fw-semibold text-deep-red mb-1">Run the Simulation</h6>
                            <p className="text-muted small mb-0">Press Play to start the reaction and observe the results.</p>
                          </div>
                        </div>
                        
                        <div className="d-flex align-items-start gap-3">
                          <div className="bg-primary-red bg-opacity-10 rounded-3 p-2">
                            <span className="fw-bold text-primary-red">4</span>
                          </div>
                          <div>
                            <h6 className="fw-semibold text-deep-red mb-1">Analyze Results</h6>
                            <p className="text-muted small mb-0">Observe the reaction products and behavior under different conditions.</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-light-bg rounded-3 p-3 mt-3">
                        <h6 className="fw-semibold text-deep-red mb-2">Safety Note</h6>
                        <p className="text-muted small mb-0">
                          This is a virtual simulation for educational purposes. Always follow proper safety 
                          protocols when conducting real chemistry experiments in a laboratory setting.
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Simulations */}
      <section className="py-5 bg-light-bg">
        <div className="container-lg">
          <h2 className="h3 fw-bold text-deep-red mb-4">Related Simulations</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Card hover className="h-100" onClick={() => onNavigate('physics-simulation')}>
                  <div className="card-body p-4">
                    <div className="d-flex align-items-start gap-3 mb-3">
                      <div className="bg-info p-2 rounded-3">
                        <Zap className="text-white" size={24} />
                      </div>
                      <div>
                        <h4 className="fw-bold text-deep-red mb-1">Physics Lab</h4>
                        <p className="text-muted small mb-0">Explore mechanics, electricity, and more</p>
                      </div>
                    </div>
                    <Button size="sm" className="w-100">
                      <Eye size={14} className="me-1" />
                      View Physics Lab
                    </Button>
                  </div>
                </Card>
              </motion.div>
            </div>
            
            <div className="col-md-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card hover className="h-100" onClick={() => onNavigate('biology-simulation')}>
                  <div className="card-body p-4">
                    <div className="d-flex align-items-start gap-3 mb-3">
                      <div className="bg-success p-2 rounded-3">
                        <Layers className="text-white" size={24} />
                      </div>
                      <div>
                        <h4 className="fw-bold text-deep-red mb-1">Biology Lab</h4>
                        <p className="text-muted small mb-0">Discover cells, genetics, and ecosystems</p>
                      </div>
                    </div>
                    <Button size="sm" className="w-100">
                      <Eye size={14} className="me-1" />
                      View Biology Lab
                    </Button>
                  </div>
                </Card>
              </motion.div>
            </div>
            
            <div className="col-md-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card hover className="h-100" onClick={() => onNavigate('labs')}>
                  <div className="card-body p-4">
                    <div className="d-flex align-items-start gap-3 mb-3">
                      <div className="bg-warning p-2 rounded-3">
                        <Beaker className="text-white" size={24} />
                      </div>
                      <div>
                        <h4 className="fw-bold text-deep-red mb-1">All Labs</h4>
                        <p className="text-muted small mb-0">Browse our complete collection of simulations</p>
                      </div>
                    </div>
                    <Button size="sm" className="w-100">
                      <Eye size={14} className="me-1" />
                      View All Labs
                    </Button>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

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
              <h6 className="fw-semibold mb-3">Simulation Labs</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <button onClick={() => onNavigate('chemistry-simulation')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Chemistry Lab
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('physics-simulation')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Physics Lab
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('biology-simulation')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Biology Lab
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('labs')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    All Simulations
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