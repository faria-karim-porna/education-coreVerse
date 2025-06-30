import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen,
  Layers,
  Dna,
  Heart,
  Leaf,
  Play,
  Pause,
  RotateCcw,
  Download,
  Share2,
  Info,
  Plus,
  Minus,
  X,
  Settings,
  HelpCircle,
  Save,
  Eye,
  Beaker,
  Zap,
  Search,
  ZoomIn,
  ZoomOut,
  Maximize,
  Minimize,
  Microscope,
  Droplet,
  Brush as Virus,
  Brain,
  Move,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Sun,
  CloudRain
} from 'lucide-react';
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
  
  // Microscope Slide Viewer state
  const [selectedSlide, setSelectedSlide] = useState('onion');
  const [microscopeZoom, setMicroscopeZoom] = useState(1);
  const [slidePosition, setSlidePosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  
  // Photosynthesis Simulator state
  const [lightIntensity, setLightIntensity] = useState(50);
  const [co2Level, setCo2Level] = useState(50);
  const [waterLevel, setWaterLevel] = useState(50);
  const [photosynthesisRate, setPhotosynthesisRate] = useState(0);
  const [oxygenBubbles, setOxygenBubbles] = useState<{id: number, x: number, y: number, size: number}[]>([]);
  
  // Heart Simulator state
  const [heartRate, setHeartRate] = useState('normal');
  const [heartBeat, setHeartBeat] = useState(false);
  const [heartAnimationFrame, setHeartAnimationFrame] = useState(0);
  const heartAnimationRef = useRef<number | null>(null);
  
  const simulations = [
    {
      id: 'microscope-slide',
      name: 'Microscope Slide Viewer',
      description: 'Examine different cell types under a microscope',
      difficulty: 'Beginner',
      icon: Microscope,
      color: 'bg-primary-red'
    },
    {
      id: 'photosynthesis',
      name: 'Photosynthesis Simulator',
      description: 'Explore how plants convert light energy into chemical energy',
      difficulty: 'Intermediate',
      icon: Leaf,
      color: 'bg-success'
    },
    {
      id: 'heart-simulator',
      name: 'Human Heartbeat Simulator',
      description: 'Study the heart chambers and blood flow',
      difficulty: 'Intermediate',
      icon: Heart,
      color: 'bg-danger'
    },
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
      id: 'immune-response',
      name: 'Immune Response',
      description: 'Observe how the immune system defends against pathogens',
      difficulty: 'Advanced',
      icon: Virus,
      color: 'bg-warning'
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
  
  const slides = [
    { id: 'onion', name: 'Onion Cells', description: 'Plant cells with visible cell walls and nuclei', color: '#e0f7fa' },
    { id: 'cheek', name: 'Cheek Cells', description: 'Human epithelial cells with visible nuclei', color: '#ffebee' },
    { id: 'bacteria', name: 'Bacteria', description: 'Prokaryotic cells without membrane-bound organelles', color: '#e8f5e9' },
    { id: 'blood', name: 'Blood Cells', description: 'Red and white blood cells in plasma', color: '#ffebee' }
  ];
  
  const slideLabels = {
    onion: [
      { name: 'Cell Wall', x: 30, y: 40 },
      { name: 'Nucleus', x: 60, y: 50 },
      { name: 'Cytoplasm', x: 45, y: 70 },
      { name: 'Cell Membrane', x: 70, y: 30 }
    ],
    cheek: [
      { name: 'Nucleus', x: 50, y: 50 },
      { name: 'Cytoplasm', x: 70, y: 70 },
      { name: 'Cell Membrane', x: 30, y: 30 }
    ],
    bacteria: [
      { name: 'Cell Wall', x: 40, y: 40 },
      { name: 'Cytoplasm', x: 60, y: 50 },
      { name: 'Flagellum', x: 80, y: 60 }
    ],
    blood: [
      { name: 'Red Blood Cell', x: 30, y: 40 },
      { name: 'White Blood Cell', x: 70, y: 60 },
      { name: 'Plasma', x: 50, y: 80 }
    ]
  };
  
  // Heart chambers and blood flow paths
  const heartChambers = [
    { id: 'right-atrium', name: 'Right Atrium', x: 30, y: 30, width: 20, height: 20, color: '#3b82f6' },
    { id: 'right-ventricle', name: 'Right Ventricle', x: 30, y: 55, width: 20, height: 25, color: '#3b82f6' },
    { id: 'left-atrium', name: 'Left Atrium', x: 60, y: 30, width: 20, height: 20, color: '#ef4444' },
    { id: 'left-ventricle', name: 'Left Ventricle', x: 60, y: 55, width: 20, height: 25, color: '#ef4444' }
  ];
  
  const bloodFlowPaths = [
    { from: 'right-atrium', to: 'right-ventricle', path: 'M 40 45 L 40 55', color: '#3b82f6' },
    { from: 'right-ventricle', to: 'lungs', path: 'M 30 70 L 15 50', color: '#3b82f6' },
    { from: 'lungs', to: 'left-atrium', path: 'M 15 40 L 60 30', color: '#ef4444' },
    { from: 'left-atrium', to: 'left-ventricle', path: 'M 70 45 L 70 55', color: '#ef4444' },
    { from: 'left-ventricle', to: 'body', path: 'M 70 80 L 90 90', color: '#ef4444' },
    { from: 'body', to: 'right-atrium', path: 'M 90 20 L 30 20', color: '#3b82f6' }
  ];

  // Calculate photosynthesis rate based on light, CO2, and water
  useEffect(() => {
    if (selectedSimulation === 'photosynthesis') {
      // Calculate rate based on the limiting factor (whichever is lowest)
      const limitingFactor = Math.min(lightIntensity, co2Level, waterLevel);
      // Add some randomness for realism
      const baseRate = limitingFactor * 0.8;
      const randomFactor = Math.random() * 10;
      const calculatedRate = Math.min(100, baseRate + randomFactor);
      setPhotosynthesisRate(Math.round(calculatedRate));
      
      // Generate oxygen bubbles if simulation is playing
      if (isPlaying) {
        const bubbleInterval = setInterval(() => {
          if (photosynthesisRate > 20) {
            const newBubble = {
              id: Date.now(),
              x: 40 + Math.random() * 20,
              y: 70,
              size: 2 + Math.random() * 4
            };
            setOxygenBubbles(prev => [...prev, newBubble]);
          }
        }, 2000 / (photosynthesisRate / 20));
        
        // Move bubbles upward
        const animationInterval = setInterval(() => {
          setOxygenBubbles(prev => 
            prev.map(bubble => {
              // Move bubble up
              const newY = bubble.y - 1;
              // Remove bubbles that reach the top
              if (newY < 10) {
                return null;
              }
              return { ...bubble, y: newY };
            }).filter(Boolean)
          );
        }, 100);
        
        return () => {
          clearInterval(bubbleInterval);
          clearInterval(animationInterval);
        };
      }
    }
  }, [selectedSimulation, isPlaying, lightIntensity, co2Level, waterLevel, photosynthesisRate]);
  
  // Heart animation
  useEffect(() => {
    if (selectedSimulation === 'heart-simulator' && isPlaying) {
      const heartBeatInterval = heartRate === 'normal' ? 1000 : 500;
      
      const interval = setInterval(() => {
        setHeartBeat(true);
        setTimeout(() => setHeartBeat(false), heartBeatInterval / 2);
      }, heartBeatInterval);
      
      return () => clearInterval(interval);
    }
  }, [selectedSimulation, isPlaying, heartRate]);

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
    setMicroscopeZoom(1);
    setSlidePosition({ x: 0, y: 0 });
    setLightIntensity(50);
    setCo2Level(50);
    setWaterLevel(50);
    setPhotosynthesisRate(0);
    setOxygenBubbles([]);
    setHeartRate('normal');
    setHeartBeat(false);
  };

  const handleCellPartClick = (partId: string) => {
    const part = cellParts.find(p => p.id === partId);
    if (part) {
      setSelectedCellPart(partId);
      setCellPartInfo({ name: part.name, description: part.description });
    }
  };
  
  // Microscope slide functions
  const handleSlideMouseDown = (e: React.MouseEvent) => {
    if (microscopeZoom > 1) {
      setIsDragging(true);
      setDragStart({ 
        x: e.clientX - slidePosition.x, 
        y: e.clientY - slidePosition.y 
      });
    }
  };
  
  const handleSlideMouseMove = (e: React.MouseEvent) => {
    if (isDragging && microscopeZoom > 1) {
      const maxOffset = (microscopeZoom - 1) * 100;
      const newX = Math.max(-maxOffset, Math.min(maxOffset, e.clientX - dragStart.x));
      const newY = Math.max(-maxOffset, Math.min(maxOffset, e.clientY - dragStart.y));
      
      setSlidePosition({
        x: newX,
        y: newY
      });
    }
  };
  
  const handleSlideMouseUp = () => {
    setIsDragging(false);
  };
  
  const zoomInMicroscope = () => {
    setMicroscopeZoom(Math.min(microscopeZoom + 0.5, 3));
  };
  
  const zoomOutMicroscope = () => {
    setMicroscopeZoom(Math.max(microscopeZoom - 0.5, 1));
    if (microscopeZoom - 0.5 <= 1) {
      setSlidePosition({ x: 0, y: 0 });
    }
  };
  
  // Heart beat function
  const triggerHeartbeat = () => {
    setHeartBeat(true);
    setTimeout(() => setHeartBeat(false), 500);
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
                      ) : selectedSimulation === 'microscope-slide' ? (
                        <div className="h-100 p-4 position-relative">
                          {/* Microscope Slide Viewer Simulation */}
                          <div 
                            className="bg-white rounded-3 border h-100 position-relative overflow-hidden"
                            onMouseDown={handleSlideMouseDown}
                            onMouseMove={handleSlideMouseMove}
                            onMouseUp={handleSlideMouseUp}
                            onMouseLeave={handleSlideMouseUp}
                            style={{ cursor: microscopeZoom > 1 ? 'move' : 'default' }}
                          >
                            {/* Slide Background */}
                            <div 
                              className="position-absolute top-0 start-0 w-100 h-100"
                              style={{ 
                                backgroundColor: slides.find(s => s.id === selectedSlide)?.color || '#e0f7fa',
                                transform: `scale(${microscopeZoom}) translate(${slidePosition.x / microscopeZoom}px, ${slidePosition.y / microscopeZoom}px)`,
                                transformOrigin: 'center',
                                transition: isDragging ? 'none' : 'transform 0.3s ease'
                              }}
                            >
                              {/* Cell Patterns - different for each slide type */}
                              {selectedSlide === 'onion' && (
                                <div className="position-absolute top-0 start-0 w-100 h-100">
                                  {Array.from({ length: 20 }).map((_, i) => (
                                    <div 
                                      key={i}
                                      className="position-absolute border border-2 border-teal-100 bg-transparent rounded-1"
                                      style={{
                                        width: 40 + Math.random() * 60,
                                        height: 40 + Math.random() * 60,
                                        left: Math.random() * 100 + '%',
                                        top: Math.random() * 100 + '%',
                                        transform: 'translate(-50%, -50%)'
                                      }}
                                    ></div>
                                  ))}
                                </div>
                              )}
                              
                              {selectedSlide === 'cheek' && (
                                <div className="position-absolute top-0 start-0 w-100 h-100">
                                  {Array.from({ length: 15 }).map((_, i) => (
                                    <div 
                                      key={i}
                                      className="position-absolute border border-1 border-pink-200 bg-transparent rounded-circle"
                                      style={{
                                        width: 50 + Math.random() * 70,
                                        height: 50 + Math.random() * 70,
                                        left: Math.random() * 100 + '%',
                                        top: Math.random() * 100 + '%',
                                        transform: 'translate(-50%, -50%)'
                                      }}
                                    >
                                      <div 
                                        className="position-absolute bg-pink-300 rounded-circle"
                                        style={{
                                          width: 15,
                                          height: 15,
                                          left: '50%',
                                          top: '50%',
                                          transform: 'translate(-50%, -50%)'
                                        }}
                                      ></div>
                                    </div>
                                  ))}
                                </div>
                              )}
                              
                              {selectedSlide === 'bacteria' && (
                                <div className="position-absolute top-0 start-0 w-100 h-100">
                                  {Array.from({ length: 30 }).map((_, i) => (
                                    <div 
                                      key={i}
                                      className="position-absolute bg-green-200 rounded-pill"
                                      style={{
                                        width: 10 + Math.random() * 20,
                                        height: 5 + Math.random() * 10,
                                        left: Math.random() * 100 + '%',
                                        top: Math.random() * 100 + '%',
                                        transform: `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`
                                      }}
                                    ></div>
                                  ))}
                                </div>
                              )}
                              
                              {selectedSlide === 'blood' && (
                                <div className="position-absolute top-0 start-0 w-100 h-100">
                                  {/* Red blood cells */}
                                  {Array.from({ length: 40 }).map((_, i) => (
                                    <div 
                                      key={`rbc-${i}`}
                                      className="position-absolute bg-danger rounded-circle"
                                      style={{
                                        width: 15,
                                        height: 15,
                                        left: Math.random() * 100 + '%',
                                        top: Math.random() * 100 + '%',
                                        opacity: 0.7,
                                        transform: 'translate(-50%, -50%)'
                                      }}
                                    ></div>
                                  ))}
                                  
                                  {/* White blood cells */}
                                  {Array.from({ length: 5 }).map((_, i) => (
                                    <div 
                                      key={`wbc-${i}`}
                                      className="position-absolute bg-white border border-1 border-secondary rounded-circle"
                                      style={{
                                        width: 20,
                                        height: 20,
                                        left: Math.random() * 100 + '%',
                                        top: Math.random() * 100 + '%',
                                        transform: 'translate(-50%, -50%)'
                                      }}
                                    ></div>
                                  ))}
                                </div>
                              )}
                              
                              {/* Labels */}
                              {microscopeZoom >= 2 && slideLabels[selectedSlide as keyof typeof slideLabels]?.map((label, index) => (
                                <div 
                                  key={index}
                                  className="position-absolute bg-white bg-opacity-75 rounded px-2 py-1 border border-primary"
                                  style={{
                                    left: `${label.x}%`,
                                    top: `${label.y}%`,
                                    transform: 'translate(-50%, -50%)',
                                    fontSize: '0.75rem'
                                  }}
                                >
                                  {label.name}
                                </div>
                              ))}
                            </div>
                            
                            {/* Microscope Controls */}
                            <div className="position-absolute top-0 end-0 p-3">
                              <div className="d-flex flex-column gap-2">
                                <Button 
                                  size="sm" 
                                  variant="secondary"
                                  onClick={zoomInMicroscope}
                                  className="p-1"
                                  disabled={microscopeZoom >= 3}
                                >
                                  <ZoomIn size={14} />
                                </Button>
                                <Button 
                                  size="sm" 
                                  variant="secondary"
                                  onClick={zoomOutMicroscope}
                                  className="p-1"
                                  disabled={microscopeZoom <= 1}
                                >
                                  <ZoomOut size={14} />
                                </Button>
                                <Button 
                                  size="sm" 
                                  variant="secondary"
                                  onClick={() => {
                                    setMicroscopeZoom(1);
                                    setSlidePosition({ x: 0, y: 0 });
                                  }}
                                  className="p-1"
                                >
                                  <Maximize size={14} />
                                </Button>
                              </div>
                            </div>
                            
                            {/* Slide Selector */}
                            <div className="position-absolute bottom-0 start-0 end-0 p-3">
                              <div className="bg-white bg-opacity-90 rounded-3 p-2">
                                <div className="d-flex justify-content-between">
                                  {slides.map(slide => (
                                    <Button 
                                      key={slide.id}
                                      size="sm"
                                      variant={selectedSlide === slide.id ? 'primary' : 'secondary'}
                                      onClick={() => setSelectedSlide(slide.id)}
                                    >
                                      {slide.name}
                                    </Button>
                                  ))}
                                </div>
                              </div>
                            </div>
                            
                            {/* Zoom Level Indicator */}
                            <div className="position-absolute top-0 start-0 p-3">
                              <div className="bg-white bg-opacity-75 rounded px-2 py-1">
                                <small className="text-muted">Zoom: {microscopeZoom}x</small>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : selectedSimulation === 'photosynthesis' ? (
                        <div className="h-100 p-4 position-relative">
                          {/* Photosynthesis Simulator */}
                          <div className="bg-white rounded-3 border h-100 position-relative overflow-hidden">
                            {/* Sky Background */}
                            <div 
                              className="position-absolute top-0 start-0 w-100"
                              style={{ 
                                height: '40%', 
                                background: `linear-gradient(to bottom, #87CEEB ${100-lightIntensity}%, #1E90FF)`,
                                transition: 'background 0.5s ease'
                              }}
                            >
                              {/* Sun */}
                              <div 
                                className="position-absolute rounded-circle"
                                style={{ 
                                  width: 40 + lightIntensity/2,
                                  height: 40 + lightIntensity/2,
                                  backgroundColor: '#FFD700',
                                  boxShadow: `0 0 ${lightIntensity}px ${lightIntensity/5}px rgba(255, 215, 0, 0.7)`,
                                  top: '30%',
                                  left: '70%',
                                  transform: 'translate(-50%, -50%)',
                                  transition: 'all 0.5s ease'
                                }}
                              ></div>
                              
                              {/* CO2 Molecules */}
                              {Array.from({ length: Math.floor(co2Level / 10) }).map((_, i) => (
                                <div 
                                  key={i}
                                  className="position-absolute text-dark"
                                  style={{
                                    left: Math.random() * 100 + '%',
                                    top: Math.random() * 100 + '%',
                                    fontSize: '0.7rem',
                                    opacity: 0.7
                                  }}
                                >
                                  CO₂
                                </div>
                              ))}
                            </div>
                            
                            {/* Ground */}
                            <div 
                              className="position-absolute bottom-0 start-0 w-100"
                              style={{ 
                                height: '20%', 
                                backgroundColor: waterLevel > 30 ? '#8B4513' : '#D2B48C',
                                transition: 'background-color 0.5s ease'
                              }}
                            >
                              {/* Water Droplets */}
                              {waterLevel > 30 && Array.from({ length: Math.floor(waterLevel / 15) }).map((_, i) => (
                                <div 
                                  key={i}
                                  className="position-absolute text-primary"
                                  style={{
                                    left: Math.random() * 100 + '%',
                                    top: Math.random() * 100 + '%',
                                    fontSize: '0.8rem'
                                  }}
                                >
                                  💧
                                </div>
                              ))}
                            </div>
                            
                            {/* Plant */}
                            <div className="position-absolute" style={{ bottom: '20%', left: '50%', transform: 'translateX(-50%)' }}>
                              {/* Stem */}
                              <div 
                                className="bg-success"
                                style={{ 
                                  width: '10px', 
                                  height: '100px',
                                  margin: '0 auto'
                                }}
                              ></div>
                              
                              {/* Leaves */}
                              <div 
                                className="position-absolute"
                                style={{ 
                                  width: '60px', 
                                  height: '30px',
                                  backgroundColor: waterLevel < 20 ? '#90EE90' : '#32CD32',
                                  borderRadius: '50%',
                                  transform: 'rotate(45deg)',
                                  top: '30px',
                                  left: '-40px',
                                  filter: `brightness(${80 + photosynthesisRate/5}%)`,
                                  boxShadow: photosynthesisRate > 50 ? `0 0 ${photosynthesisRate/5}px rgba(50, 205, 50, 0.5)` : 'none',
                                  transition: 'all 0.5s ease'
                                }}
                              ></div>
                              
                              <div 
                                className="position-absolute"
                                style={{ 
                                  width: '60px', 
                                  height: '30px',
                                  backgroundColor: waterLevel < 20 ? '#90EE90' : '#32CD32',
                                  borderRadius: '50%',
                                  transform: 'rotate(-45deg)',
                                  top: '30px',
                                  right: '-40px',
                                  filter: `brightness(${80 + photosynthesisRate/5}%)`,
                                  boxShadow: photosynthesisRate > 50 ? `0 0 ${photosynthesisRate/5}px rgba(50, 205, 50, 0.5)` : 'none',
                                  transition: 'all 0.5s ease'
                                }}
                              ></div>
                              
                              <div 
                                className="position-absolute"
                                style={{ 
                                  width: '70px', 
                                  height: '35px',
                                  backgroundColor: waterLevel < 20 ? '#90EE90' : '#32CD32',
                                  borderRadius: '50%',
                                  top: '10px',
                                  left: '-25px',
                                  filter: `brightness(${80 + photosynthesisRate/5}%)`,
                                  boxShadow: photosynthesisRate > 50 ? `0 0 ${photosynthesisRate/5}px rgba(50, 205, 50, 0.5)` : 'none',
                                  transition: 'all 0.5s ease'
                                }}
                              ></div>
                              
                              {/* Oxygen Bubbles */}
                              {oxygenBubbles.map(bubble => (
                                <div 
                                  key={bubble.id}
                                  className="position-absolute bg-white bg-opacity-75 rounded-circle"
                                  style={{
                                    width: bubble.size,
                                    height: bubble.size,
                                    left: bubble.x,
                                    top: bubble.y,
                                    transform: 'translate(-50%, -50%)'
                                  }}
                                >
                                  <span style={{ fontSize: '0.5rem', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                    O₂
                                  </span>
                                </div>
                              ))}
                            </div>
                            
                            {/* Photosynthesis Equation */}
                            <div className="position-absolute top-0 start-0 p-3">
                              <div className="bg-white bg-opacity-75 rounded p-2">
                                <small className="text-muted">
                                  6CO₂ + 6H₂O + Light Energy → C₆H₁₂O₆ + 6O₂
                                </small>
                              </div>
                            </div>
                            
                            {/* Photosynthesis Rate Meter */}
                            <div className="position-absolute bottom-0 end-0 p-3" style={{ width: '200px' }}>
                              <div className="bg-white bg-opacity-90 rounded p-2">
                                <div className="text-center mb-1">
                                  <small className="fw-bold">Photosynthesis Rate</small>
                                </div>
                                <div className="progress" style={{ height: '20px' }}>
                                  <div 
                                    className="progress-bar bg-success" 
                                    role="progressbar" 
                                    style={{ width: `${photosynthesisRate}%` }}
                                    aria-valuenow={photosynthesisRate} 
                                    aria-valuemin={0} 
                                    aria-valuemax={100}
                                  >
                                    {photosynthesisRate}%
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            {/* Control Panel */}
                            <div className="position-absolute start-0 p-3" style={{ width: '200px', top: '40%' }}>
                              <div className="bg-white bg-opacity-90 rounded p-2">
                                <div className="mb-2">
                                  <label className="form-label small mb-1 d-flex align-items-center">
                                    <Sun size={14} className="me-1" /> Light Intensity
                                  </label>
                                  <input
                                    type="range"
                                    className="form-range"
                                    min="0"
                                    max="100"
                                    value={lightIntensity}
                                    onChange={(e) => setLightIntensity(parseInt(e.target.value))}
                                  />
                                </div>
                                <div className="mb-2">
                                  <label className="form-label small mb-1 d-flex align-items-center">
                                    CO₂ Level
                                  </label>
                                  <input
                                    type="range"
                                    className="form-range"
                                    min="0"
                                    max="100"
                                    value={co2Level}
                                    onChange={(e) => setCo2Level(parseInt(e.target.value))}
                                  />
                                </div>
                                <div>
                                  <label className="form-label small mb-1 d-flex align-items-center">
                                    <CloudRain size={14} className="me-1" /> Water Level
                                  </label>
                                  <input
                                    type="range"
                                    className="form-range"
                                    min="0"
                                    max="100"
                                    value={waterLevel}
                                    onChange={(e) => setWaterLevel(parseInt(e.target.value))}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : selectedSimulation === 'heart-simulator' ? (
                        <div className="h-100 p-4 position-relative">
                          {/* Heart Simulator */}
                          <div className="bg-white rounded-3 border h-100 position-relative overflow-hidden">
                            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                              {/* Heart Diagram */}
                              <svg width="300" height="300" viewBox="0 0 100 100">
                                {/* Heart Outline */}
                                <path 
                                  d="M 25 40 A 10 10 0 0 1 35 30 A 10 10 0 0 1 50 40 A 10 10 0 0 1 65 30 A 10 10 0 0 1 75 40 Q 75 60 50 80 Q 25 60 25 40 Z" 
                                  fill="#f8d7da"
                                  stroke="#dc3545"
                                  strokeWidth="1"
                                  style={{ 
                                    transform: heartBeat ? 'scale(1.1)' : 'scale(1)',
                                    transformOrigin: 'center',
                                    transition: 'transform 0.2s ease'
                                  }}
                                />
                                
                                {/* Heart Chambers */}
                                {heartChambers.map(chamber => (
                                  <rect
                                    key={chamber.id}
                                    x={chamber.x}
                                    y={chamber.y}
                                    width={chamber.width}
                                    height={chamber.height}
                                    fill={chamber.color}
                                    stroke="#333"
                                    strokeWidth="0.5"
                                    rx="3"
                                    ry="3"
                                    style={{ 
                                      transform: heartBeat ? 'scale(1.1)' : 'scale(1)',
                                      transformOrigin: 'center',
                                      transition: 'transform 0.2s ease'
                                    }}
                                  />
                                ))}
                                
                                {/* Blood Flow Paths */}
                                {bloodFlowPaths.map((path, index) => (
                                  <g key={index}>
                                    <path
                                      d={path.path}
                                      stroke={path.color}
                                      strokeWidth="2"
                                      fill="none"
                                    />
                                    <circle
                                      cx={path.path.split(' ')[1]}
                                      cy={path.path.split(' ')[2]}
                                      r="1"
                                      fill={path.color}
                                      style={{
                                        animation: isPlaying ? `flowAnimation${index} ${heartRate === 'normal' ? 2 : 1}s infinite` : 'none'
                                      }}
                                    />
                                    <style>
                                      {`
                                        @keyframes flowAnimation${index} {
                                          0% {
                                            cx: ${path.path.split(' ')[1]};
                                            cy: ${path.path.split(' ')[2]};
                                          }
                                          100% {
                                            cx: ${path.path.split(' ')[4]};
                                            cy: ${path.path.split(' ')[5]};
                                          }
                                        }
                                      `}
                                    </style>
                                  </g>
                                ))}
                                
                                {/* Chamber Labels */}
                                <text x="30" y="25" fontSize="3" fill="#000">Right Atrium</text>
                                <text x="30" y="85" fontSize="3" fill="#000">Right Ventricle</text>
                                <text x="60" y="25" fontSize="3" fill="#000">Left Atrium</text>
                                <text x="60" y="85" fontSize="3" fill="#000">Left Ventricle</text>
                                
                                {/* External Labels */}
                                <text x="5" y="45" fontSize="3" fill="#000">To/From Lungs</text>
                                <text x="85" y="45" fontSize="3" fill="#000">To/From Body</text>
                              </svg>
                            </div>
                            
                            {/* Heart Controls */}
                            <div className="position-absolute bottom-0 start-0 end-0 p-3">
                              <div className="bg-white bg-opacity-90 rounded-3 p-2">
                                <div className="d-flex justify-content-between align-items-center">
                                  <Button 
                                    size="sm"
                                    onClick={triggerHeartbeat}
                                    disabled={isPlaying}
                                  >
                                    Beat Once
                                  </Button>
                                  
                                  <div className="d-flex align-items-center gap-2">
                                    <span className="text-muted small">Heart Rate:</span>
                                    <div className="btn-group">
                                      <Button 
                                        size="sm"
                                        variant={heartRate === 'normal' ? 'primary' : 'secondary'}
                                        onClick={() => setHeartRate('normal')}
                                      >
                                        Normal
                                      </Button>
                                      <Button 
                                        size="sm"
                                        variant={heartRate === 'fast' ? 'primary' : 'secondary'}
                                        onClick={() => setHeartRate('fast')}
                                      >
                                        Fast
                                      </Button>
                                    </div>
                                  </div>
                                  
                                  <div className="text-center">
                                    <span className="badge bg-danger">
                                      {heartRate === 'normal' ? '72 BPM' : '120 BPM'}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            {/* Legend */}
                            <div className="position-absolute top-0 end-0 p-3">
                              <div className="bg-white bg-opacity-75 rounded p-2">
                                <div className="d-flex align-items-center gap-2 mb-1">
                                  <div className="rounded-circle bg-danger" style={{ width: '10px', height: '10px' }}></div>
                                  <small className="text-muted">Oxygenated Blood</small>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                  <div className="rounded-circle bg-primary" style={{ width: '10px', height: '10px' }}></div>
                                  <small className="text-muted">Deoxygenated Blood</small>
                                </div>
                              </div>
                            </div>
                          </div>
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
                            {selectedSimulation === 'immune-response' && <Virus size={64} className="text-primary-red" />}
                          </div>
                          <h5 className="text-muted mt-3">
                            {selectedSimulation === 'dna-replication' && 'DNA Replication Simulation'}
                            {selectedSimulation === 'immune-response' && 'Immune Response Simulation'}
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
                      
                      {selectedSimulation === 'microscope-slide' && (
                        <div className="bg-light-bg rounded-3 p-3 mt-3">
                          <h6 className="fw-semibold text-deep-red mb-2">Microscope Slide Viewer Guide</h6>
                          <p className="text-muted small mb-0">
                            Select different slide types to view various cell structures. Use the zoom controls to examine details more closely.
                            When zoomed in, you can drag the slide to view different areas. Labels will appear at higher zoom levels.
                          </p>
                        </div>
                      )}
                      
                      {selectedSimulation === 'photosynthesis' && (
                        <div className="bg-light-bg rounded-3 p-3 mt-3">
                          <h6 className="fw-semibold text-deep-red mb-2">Photosynthesis Simulator Guide</h6>
                          <p className="text-muted small mb-0">
                            Adjust light intensity, CO₂ levels, and water availability to see how they affect the rate of photosynthesis.
                            Watch for oxygen bubbles being released and observe how the plant's appearance changes based on conditions.
                            The photosynthesis rate is determined by the limiting factor (whichever resource is lowest).
                          </p>
                        </div>
                      )}
                      
                      {selectedSimulation === 'heart-simulator' && (
                        <div className="bg-light-bg rounded-3 p-3 mt-3">
                          <h6 className="fw-semibold text-deep-red mb-2">Heart Simulator Guide</h6>
                          <p className="text-muted small mb-0">
                            Observe the four chambers of the heart and the flow of blood through the circulatory system.
                            Blue represents deoxygenated blood, while red represents oxygenated blood.
                            You can trigger individual heartbeats or set a continuous rhythm at normal or accelerated rates.
                          </p>
                        </div>
                      )}
                      
                      {selectedSimulation === 'cell-explorer' && (
                        <div className="bg-light-bg rounded-3 p-3 mt-3">
                          <h6 className="fw-semibold text-deep-red mb-2">Cell Explorer Guide</h6>
                          <p className="text-muted small mb-0">
                            In the Cell Explorer simulation, click on different organelles to learn about their 
                            structure and function. Use the zoom controls to examine the cell in greater detail.
                          </p>
                        </div>
                      )}
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