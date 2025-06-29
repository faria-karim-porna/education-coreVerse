import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Layers, Dna, Heart, Leaf, Play, Pause, RotateCcw, Download, Share2, Info, Plus, Minus, X, Settings, HelpCircle, Save, Eye, Beaker, Zap, Search, ZoomIn, ZoomOut, Maximize, Minimize, Microscope, Droplet, Brush as Virus, Brain } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';

interface BiologySimulationPageProps {
  onNavigate: (view: string) => void;
}

export function BiologySimulationPage({ onNavigate }: BiologySimulationPageProps) {
  const [selectedSimulation, setSelectedSimulation] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [temperature, setTemperature] = useState(37);
  const [pH, setPH] = useState(7);
  const [showSettings, setShowSettings] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [simulationSpeed, setSimulationSpeed] = useState(1);
  const [selectedCellPart, setSelectedCellPart] = useState<string | null>(null);
  const [cellPartInfo, setCellPartInfo] = useState<{name: string, description: string} | null>(null);

  const simulations = [
    {
      id: 'cell-explorer',
      name: 'Cell Explorer',
      description: 'Examine the structure and function of animal and plant cells',
      difficulty: 'Beginner',
      icon: Microscope,
      color: 'bg-primary-red'
    },
    {
      id: 'dna-replication',
      name: 'DNA Replication',
      description: 'Visualize the process of DNA replication and protein synthesis',
      difficulty: 'Intermediate',
      icon: Dna,
      color: 'bg-accent-red'
    },
    {
      id: 'photosynthesis',
      name: 'Photosynthesis',
      description: 'Explore how plants convert light energy into chemical energy',
      difficulty: 'Intermediate',
      icon: Leaf,
      color: 'bg-success'
    },
    {
      id: 'circulatory-system',
      name: 'Circulatory System',
      description: 'Study the heart, blood vessels, and blood flow',
      difficulty: 'Intermediate',
      icon: Heart,
      color: 'bg-info'
    },
    {
      id: 'immune-response',
      name: 'Immune Response',
      description: 'Observe how the immune system defends against pathogens',
      difficulty: 'Advanced',
      icon: Virus,
      color: 'bg-warning'
    },
    {
      id: 'neural-network',
      name: 'Neural Network',
      description: 'Investigate neuron structure and signal transmission',
      difficulty: 'Advanced',
      icon: Brain,
      color: 'bg-danger'
    }
  ];

  const cellParts = [
    { id: 'nucleus', name: 'Nucleus', description: 'Control center of the cell containing genetic material', x: 50, y: 50, radius: 15 },
    { id: 'mitochondria', name: 'Mitochondria', description: 'Powerhouse of the cell that produces energy (ATP)', x: 75, y: 40, radius: 8 },
    { id: 'endoplasmic-reticulum', name: 'Endoplasmic Reticulum', description: 'Network of membranes involved in protein synthesis and transport', x: 65, y: 65, radius: 10 },
    { id: 'golgi-apparatus', name: 'Golgi Apparatus', description: 'Modifies, sorts, and packages proteins for secretion', x: 30, y: 60, radius: 8 },
    { id: 'lysosome', name: 'Lysosome', description: 'Contains digestive enzymes to break down waste materials and cellular debris', x: 25, y: 40, radius: 6 },
    { id: 'ribosome', name: 'Ribosome', description: 'Site of protein synthesis', x: 40, y: 75, radius: 5 }
  ];

  const startSimulation = () => {
    setIsPlaying(true);
  };

  const pauseSimulation = () => {
    setIsPlaying(false);
  };

  const resetSimulation = () => {
    setIsPlaying(false);
    setZoom(1);
    setTemperature(37);
    setPH(7);
    setSimulationSpeed(1);
    setSelectedCellPart(null);
    setCellPartInfo(null);
  };

  const zoomIn = () => {
    setZoom(Math.min(zoom + 0.2, 3));
  };

  const zoomOut = () => {
    setZoom(Math.max(zoom - 0.2, 0.5));
  };

  const resetZoom = () => {
    setZoom(1);
  };

  const handleCellPartClick = (partId: string) => {
    const part = cellParts.find(p => p.id === partId);
    if (part) {
      setSelectedCellPart(partId);
      setCellPartInfo({ name: part.name, description: part.description });
    }
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
                <Layers className="text-white" size={40} />
              </div>
              <h1 className="display-3 fw-bold mb-4">Biology Simulation Lab</h1>
              <p className="lead mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                Explore the fascinating world of living systems through interactive simulations. 
                Discover cells, genetics, ecosystems, and human physiology in our virtual lab.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <Button variant="secondary" size="lg" className="bg-white text-primary-red border-white">
                  <Play size={20} className="me-2" />
                  Start Exploring
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
                          : 'Biology Workspace'}
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
                          <Layers size={64} className="text-muted mb-3" />
                          <h5 className="text-muted">Select a simulation to begin</h5>
                        </div>
                      ) : selectedSimulation === 'cell-explorer' ? (
                        <div className="h-100 p-4 position-relative">
                          {/* Cell Explorer Simulation */}
                          <div className="bg-white rounded-3 border h-100 position-relative overflow-hidden">
                            {/* Cell Membrane */}
                            <div className="position-absolute top-0 start-0 end-0 bottom-0 m-3 rounded-circle border border-2 border-primary-red bg-light-bg bg-opacity-50"
                                 style={{ transform: `scale(${zoom})`, transformOrigin: 'center' }}>
                              
                              {/* Cell Parts */}
                              {cellParts.map(part => (
                                <div 
                                  key={part.id}
                                  className={`position-absolute rounded-circle cursor-pointer ${
                                    selectedCellPart === part.id ? 'border-2 border-success' : ''
                                  }`}
                                  style={{ 
                                    left: `${part.x}%`, 
                                    top: `${part.y}%`, 
                                    width: `${part.radius * 2}px`, 
                                    height: `${part.radius * 2}px`,
                                    backgroundColor: part.id === 'nucleus' ? '#6366f1' : 
                                                    part.id === 'mitochondria' ? '#f43f5e' :
                                                    part.id === 'endoplasmic-reticulum' ? '#10b981' :
                                                    part.id === 'golgi-apparatus' ? '#f59e0b' :
                                                    part.id === 'lysosome' ? '#8b5cf6' : '#3b82f6',
                                    transform: 'translate(-50%, -50%)'
                                  }}
                                  onClick={() => handleCellPartClick(part.id)}
                                />
                              ))}
                            </div>
                            
                            {/* Zoom Controls */}
                            <div className="position-absolute top-0 end-0 p-3">
                              <div className="d-flex flex-column gap-2">
                                <Button 
                                  size="sm" 
                                  variant="secondary"
                                  onClick={zoomIn}
                                  className="p-1"
                                >
                                  <ZoomIn size={14} />
                                </Button>
                                <Button 
                                  size="sm" 
                                  variant="secondary"
                                  onClick={zoomOut}
                                  className="p-1"
                                >
                                  <ZoomOut size={14} />
                                </Button>
                                <Button 
                                  size="sm" 
                                  variant="secondary"
                                  onClick={resetZoom}
                                  className="p-1"
                                >
                                  <Maximize size={14} />
                                </Button>
                              </div>
                            </div>
                            
                            {/* Info Panel */}
                            {cellPartInfo && (
                              <div className="position-absolute bottom-0 start-0 end-0 p-3">
                                <div className="bg-white bg-opacity-90 rounded-3 p-3 shadow-sm">
                                  <h6 className="fw-bold text-deep-red mb-1">{cellPartInfo.name}</h6>
                                  <p className="text-muted small mb-0">{cellPartInfo.description}</p>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      ) : (
                        <div className="h-100 d-flex flex-column align-items-center justify-content-center">
                          <div className="bg-primary-red bg-opacity-10 rounded-circle p-4">
                            {selectedSimulation === 'dna-replication' && <Dna size={64} className="text-primary-red" />}
                            {selectedSimulation === 'photosynthesis' && <Leaf size={64} className="text-primary-red" />}
                            {selectedSimulation === 'circulatory-system' && <Heart size={64} className="text-primary-red" />}
                            {selectedSimulation === 'immune-response' && <Virus size={64} className="text-primary-red" />}
                            {selectedSimulation === 'neural-network' && <Brain size={64} className="text-primary-red" />}
                          </div>
                          <h5 className="text-muted mt-3">
                            {selectedSimulation === 'dna-replication' && 'DNA Replication Simulation'}
                            {selectedSimulation === 'photosynthesis' && 'Photosynthesis Simulation'}
                            {selectedSimulation === 'circulatory-system' && 'Circulatory System Simulation'}
                            {selectedSimulation === 'immune-response' && 'Immune Response Simulation'}
                            {selectedSimulation === 'neural-network' && 'Neural Network Simulation'}
                          </h5>
                          <p className="text-muted text-center">
                            This simulation is available in the full version.
                          </p>
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
                          <Button onClick={startSimulation} disabled={!selectedSimulation}>
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
                              onClick={() => setTemperature(Math.max(0, temperature - 1))}
                              className="p-1"
                            >
                              <Minus size={14} />
                            </Button>
                            <input
                              type="range"
                              className="form-range flex-fill"
                              min="0"
                              max="50"
                              value={temperature}
                              onChange={(e) => setTemperature(parseInt(e.target.value))}
                            />
                            <Button 
                              size="sm" 
                              variant="secondary"
                              onClick={() => setTemperature(Math.min(50, temperature + 1))}
                              className="p-1"
                            >
                              <Plus size={14} />
                            </Button>
                            <span className="text-muted" style={{ width: '40px' }}>{temperature}°C</span>
                          </div>
                        </div>
                        
                        <div className="col-md-6">
                          <label className="form-label fw-medium text-deep-red">pH Level</label>
                          <div className="d-flex align-items-center gap-2">
                            <Button 
                              size="sm" 
                              variant="secondary"
                              onClick={() => setPH(Math.max(1, pH - 0.5))}
                              className="p-1"
                            >
                              <Minus size={14} />
                            </Button>
                            <input
                              type="range"
                              className="form-range flex-fill"
                              min="1"
                              max="14"
                              step="0.5"
                              value={pH}
                              onChange={(e) => setPH(parseFloat(e.target.value))}
                            />
                            <Button 
                              size="sm" 
                              variant="secondary"
                              onClick={() => setPH(Math.min(14, pH + 0.5))}
                              className="p-1"
                            >
                              <Plus size={14} />
                            </Button>
                            <span className="text-muted" style={{ width: '40px' }}>{pH}</span>
                          </div>
                        </div>
                        
                        <div className="col-md-6">
                          <label className="form-label fw-medium text-deep-red">Zoom Level</label>
                          <div className="d-flex align-items-center gap-2">
                            <Button 
                              size="sm" 
                              variant="secondary"
                              onClick={zoomOut}
                              className="p-1"
                            >
                              <Minus size={14} />
                            </Button>
                            <input
                              type="range"
                              className="form-range flex-fill"
                              min="0.5"
                              max="3"
                              step="0.1"
                              value={zoom}
                              onChange={(e) => setZoom(parseFloat(e.target.value))}
                            />
                            <Button 
                              size="sm" 
                              variant="secondary"
                              onClick={zoomIn}
                              className="p-1"
                            >
                              <Plus size={14} />
                            </Button>
                            <span className="text-muted" style={{ width: '40px' }}>{zoom.toFixed(1)}x</span>
                          </div>
                        </div>
                        
                        <div className="col-md-6">
                          <label className="form-label fw-medium text-deep-red">Simulation Speed</label>
                          <div className="d-flex align-items-center gap-2">
                            <Button 
                              size="sm" 
                              variant="secondary"
                              onClick={() => setSimulationSpeed(Math.max(0.5, simulationSpeed - 0.5))}
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
                              value={simulationSpeed}
                              onChange={(e) => setSimulationSpeed(parseFloat(e.target.value))}
                            />
                            <Button 
                              size="sm" 
                              variant="secondary"
                              onClick={() => setSimulationSpeed(Math.min(3, simulationSpeed + 0.5))}
                              className="p-1"
                            >
                              <Plus size={14} />
                            </Button>
                            <span className="text-muted" style={{ width: '40px' }}>{simulationSpeed}x</span>
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
                            <h6 className="fw-semibold text-deep-red mb-1">Explore the Model</h6>
                            <p className="text-muted small mb-0">Click on different parts of the biological model to learn more about them.</p>
                          </div>
                        </div>
                        
                        <div className="d-flex align-items-start gap-3">
                          <div className="bg-primary-red bg-opacity-10 rounded-3 p-2">
                            <span className="fw-bold text-primary-red">3</span>
                          </div>
                          <div>
                            <h6 className="fw-semibold text-deep-red mb-1">Adjust Parameters</h6>
                            <p className="text-muted small mb-0">Change temperature, pH, and other settings to see how they affect biological processes.</p>
                          </div>
                        </div>
                        
                        <div className="d-flex align-items-start gap-3">
                          <div className="bg-primary-red bg-opacity-10 rounded-3 p-2">
                            <span className="fw-bold text-primary-red">4</span>
                          </div>
                          <div>
                            <h6 className="fw-semibold text-deep-red mb-1">Run the Simulation</h6>
                            <p className="text-muted small mb-0">Press Play to start the biological process and observe the results.</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-light-bg rounded-3 p-3 mt-3">
                        <h6 className="fw-semibold text-deep-red mb-2">Cell Explorer Guide</h6>
                        <p className="text-muted small mb-0">
                          In the Cell Explorer simulation, click on different organelles to learn about their 
                          structure and function. Use the zoom controls to examine the cell in greater detail.
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
                <Card hover className="h-100" onClick={() => onNavigate('chemistry-simulation')}>
                  <div className="card-body p-4">
                    <div className="d-flex align-items-start gap-3 mb-3">
                      <div className="bg-accent-red p-2 rounded-3">
                        <Beaker className="text-white" size={24} />
                      </div>
                      <div>
                        <h4 className="fw-bold text-deep-red mb-1">Chemistry Lab</h4>
                        <p className="text-muted small mb-0">Explore reactions, molecules, and chemical properties</p>
                      </div>
                    </div>
                    <Button size="sm" className="w-100">
                      <Eye size={14} className="me-1" />
                      View Chemistry Lab
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
                <Card hover className="h-100" onClick={() => onNavigate('physics-simulation')}>
                  <div className="card-body p-4">
                    <div className="d-flex align-items-start gap-3 mb-3">
                      <div className="bg-info p-2 rounded-3">
                        <Zap className="text-white" size={24} />
                      </div>
                      <div>
                        <h4 className="fw-bold text-deep-red mb-1">Physics Lab</h4>
                        <p className="text-muted small mb-0">Discover mechanics, electricity, and forces</p>
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