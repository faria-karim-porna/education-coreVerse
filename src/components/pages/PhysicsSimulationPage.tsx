import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen,
  Zap,
  Magnet,
  Waves,
  Orbit,
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
  Layers,
  Beaker,
  ArrowRight,
  ArrowLeft,
  ArrowUp,
  ArrowDown,
  Move,
  CornerUpRight,
  Ruler,
  Gauge,
  Clock
} from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';
import { Header } from '../layout/Header';
import { Sidebar } from '../layout/Sidebar';

interface PhysicsSimulationPageProps {
  onNavigate: (view: string) => void;
}

export function PhysicsSimulationPage({ onNavigate }: PhysicsSimulationPageProps) {
  const [selectedSimulation, setSelectedSimulation] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [gravity, setGravity] = useState(9.8);
  const [mass, setMass] = useState(1);
  const [velocity, setVelocity] = useState(0);
  const [angle, setAngle] = useState(45);
  const [showSettings, setShowSettings] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [simulationSpeed, setSimulationSpeed] = useState(1);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [trajectory, setTrajectory] = useState<{x: number, y: number}[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Free Fall Simulation
  const [initialHeight, setInitialHeight] = useState(100);
  const [fallTime, setFallTime] = useState(0);
  const [finalVelocity, setFinalVelocity] = useState(0);
  const [ballPosition, setBallPosition] = useState(0);
  const [freeFallAnimationId, setFreeFallAnimationId] = useState<number | null>(null);
  
  // Ohm's Law Simulation
  const [voltage, setVoltage] = useState(12);
  const [resistance, setResistance] = useState(4);
  const [current, setCurrent] = useState(3);
  const [flowSpeed, setFlowSpeed] = useState(1);
  
  // Pendulum Simulation
  const [pendulumLength, setPendulumLength] = useState(1);
  const [pendulumAngle, setPendulumAngle] = useState(30);
  const [pendulumPeriod, setPendulumPeriod] = useState(0);
  const [pendulumPosition, setPendulumPosition] = useState({ x: 0, y: 0 });
  const [pendulumAnimationId, setPendulumAnimationId] = useState<number | null>(null);
  const [pendulumTime, setPendulumTime] = useState(0);
  
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const simulations = [
    {
      id: 'free-fall',
      name: 'Free Fall Simulation',
      description: 'Study the motion of objects falling under gravity',
      difficulty: 'Beginner',
      icon: ArrowDown,
      color: 'bg-primary-red'
    },
    {
      id: 'ohms-law',
      name: 'Ohm\'s Law Simulator',
      description: 'Explore the relationship between voltage, current, and resistance',
      difficulty: 'Beginner',
      icon: Zap,
      color: 'bg-accent-red'
    },
    {
      id: 'pendulum',
      name: 'Simple Pendulum',
      description: 'Investigate the periodic motion of a pendulum',
      difficulty: 'Intermediate',
      icon: Move,
      color: 'bg-success'
    },
    {
      id: 'projectile-motion',
      name: 'Projectile Motion',
      description: 'Study the motion of objects thrown into the air',
      difficulty: 'Intermediate',
      icon: CornerUpRight,
      color: 'bg-info'
    },
    {
      id: 'magnetism',
      name: 'Magnetic Fields',
      description: 'Visualize and interact with magnetic fields',
      difficulty: 'Advanced',
      icon: Magnet,
      color: 'bg-warning'
    },
    {
      id: 'waves',
      name: 'Wave Phenomena',
      description: 'Investigate properties of mechanical and electromagnetic waves',
      difficulty: 'Advanced',
      icon: Waves,
      color: 'bg-danger'
    }
  ];

  // Calculate Ohm's Law values
  useEffect(() => {
    if (resistance > 0) {
      setCurrent(voltage / resistance);
      setFlowSpeed(Math.min(Math.max(current / 5, 0.5), 3));
    }
  }, [voltage, resistance, current]);
  
  // Calculate pendulum period
  useEffect(() => {
    // T = 2π√(L/g)
    const period = 2 * Math.PI * Math.sqrt(pendulumLength / gravity);
    setPendulumPeriod(period);
  }, [pendulumLength, gravity]);

  const startSimulation = () => {
    setIsPlaying(true);
    
    if (selectedSimulation === 'free-fall') {
      startFreeFallSimulation();
    } else if (selectedSimulation === 'pendulum') {
      startPendulumSimulation();
    } else if (selectedSimulation === 'projectile-motion') {
      // For projectile motion, calculate trajectory
      const newTrajectory = [];
      const initialVelocityX = velocity * Math.cos(angle * Math.PI / 180);
      const initialVelocityY = velocity * Math.sin(angle * Math.PI / 180);
      const timeStep = 0.1;
      let t = 0;
      let x = 0;
      let y = 0;
      let reachedGround = false;
      
      while (!reachedGround && newTrajectory.length < 100) {
        x = initialVelocityX * t;
        y = initialVelocityY * t - 0.5 * gravity * t * t;
        
        if (y < 0) {
          reachedGround = true;
        } else {
          newTrajectory.push({ x: x * 5 + 10, y: 100 - y * 5 });
          t += timeStep;
        }
      }
      
      setTrajectory(newTrajectory);
    }
  };
  
  const startFreeFallSimulation = () => {
    // Clear any existing animation
    if (freeFallAnimationId !== null) {
      cancelAnimationFrame(freeFallAnimationId);
    }
    
    // Reset values
    setBallPosition(0);
    setFallTime(0);
    setFinalVelocity(0);
    
    let startTime: number | null = null;
    let lastTime = 0;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) / 1000; // seconds
      
      // Calculate position (s = 0.5 * g * t^2)
      const distance = 0.5 * gravity * elapsed * elapsed;
      const normalizedPosition = Math.min(distance / initialHeight, 1);
      
      setBallPosition(normalizedPosition);
      setFallTime(elapsed);
      
      // Calculate velocity (v = g * t)
      const velocity = gravity * elapsed;
      setFinalVelocity(velocity);
      
      // Continue animation if ball hasn't hit ground
      if (normalizedPosition < 1 && isPlaying) {
        const id = requestAnimationFrame(animate);
        setFreeFallAnimationId(id);
      } else {
        // Ball has hit ground
        setIsPlaying(false);
      }
    };
    
    const id = requestAnimationFrame(animate);
    setFreeFallAnimationId(id);
  };
  
  const startPendulumSimulation = () => {
    // Clear any existing animation
    if (pendulumAnimationId !== null) {
      cancelAnimationFrame(pendulumAnimationId);
    }
    
    // Reset values
    setPendulumTime(0);
    
    let startTime: number | null = null;
    const pendulumLengthPixels = 150; // visual length in pixels
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) / 1000; // seconds
      
      // Calculate angle using simple harmonic motion
      // θ = θ₀ * cos(ωt) where ω = √(g/L)
      const omega = Math.sqrt(gravity / pendulumLength);
      const currentAngle = pendulumAngle * Math.cos(omega * elapsed);
      
      // Convert to x,y coordinates
      const x = pendulumLengthPixels * Math.sin(currentAngle * Math.PI / 180);
      const y = pendulumLengthPixels * Math.cos(currentAngle * Math.PI / 180);
      
      setPendulumPosition({ x, y });
      setPendulumTime(elapsed);
      
      // Continue animation if still playing
      if (isPlaying) {
        const id = requestAnimationFrame(animate);
        setPendulumAnimationId(id);
      }
    };
    
    const id = requestAnimationFrame(animate);
    setPendulumAnimationId(id);
  };

  const pauseSimulation = () => {
    setIsPlaying(false);
    
    // Cancel any running animations
    if (freeFallAnimationId !== null) {
      cancelAnimationFrame(freeFallAnimationId);
      setFreeFallAnimationId(null);
    }
    
    if (pendulumAnimationId !== null) {
      cancelAnimationFrame(pendulumAnimationId);
      setPendulumAnimationId(null);
    }
  };

  const resetSimulation = () => {
    pauseSimulation();
    setGravity(9.8);
    setMass(1);
    setVelocity(0);
    setAngle(45);
    setSimulationSpeed(1);
    setPosition({ x: 50, y: 50 });
    setTrajectory([]);
    
    // Reset Free Fall values
    setInitialHeight(100);
    setBallPosition(0);
    setFallTime(0);
    setFinalVelocity(0);
    
    // Reset Ohm's Law values
    setVoltage(12);
    setResistance(4);
    setCurrent(3);
    
    // Reset Pendulum values
    setPendulumLength(1);
    setPendulumAngle(30);
    setPendulumTime(0);
    setPendulumPosition({ x: 0, y: 0 });
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
    <div className="min-vh-100 bg-light-bg d-flex">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        activeView="physics-simulation"
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
                    <Zap className="text-white" size={40} />
                  </div>
                  <h1 className="display-3 fw-bold mb-4">Physics Simulation Lab</h1>
                  <p className="lead mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                    Discover the fundamental laws of physics through interactive simulations. 
                    Experiment with mechanics, electricity, magnetism, and more in our virtual lab.
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
                              : 'Physics Workspace'}
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
                              <Zap size={64} className="text-muted mb-3" />
                              <h5 className="text-muted">Select a simulation to begin</h5>
                            </div>
                          ) : selectedSimulation === 'free-fall' ? (
                            <div className="h-100 p-4 position-relative">
                              {/* Free Fall Simulation */}
                              <div className="bg-white rounded-3 border h-100 position-relative overflow-hidden">
                                {/* Ground */}
                                <div className="position-absolute bottom-0 start-0 end-0 bg-success bg-opacity-10" style={{ height: '20px' }}></div>
                                
                                {/* Ball */}
                                <div 
                                  className="position-absolute start-50 translate-middle-x bg-primary-red rounded-circle"
                                  style={{ 
                                    top: `${ballPosition * 100}%`, 
                                    width: '30px', 
                                    height: '30px',
                                    transition: isPlaying ? 'none' : 'top 0.3s ease-out'
                                  }}
                                ></div>
                                
                                {/* Height Indicator */}
                                <div className="position-absolute start-0 top-0 bottom-0 d-flex flex-column justify-content-between p-2">
                                  <div className="text-muted small">Height: {initialHeight} m</div>
                                  <div className="text-muted small">0 m</div>
                                </div>
                                
                                {/* Info Panel */}
                                <div className="position-absolute top-0 end-0 p-3">
                                  <div className="bg-white bg-opacity-75 rounded-3 p-2">
                                    <div className="d-flex align-items-center gap-2 mb-1">
                                      <Clock size={14} className="text-primary-red" />
                                      <small className="text-muted">Time: {fallTime.toFixed(2)} s</small>
                                    </div>
                                    <div className="d-flex align-items-center gap-2 mb-1">
                                      <ArrowDown size={14} className="text-primary-red" />
                                      <small className="text-muted">Velocity: {finalVelocity.toFixed(2)} m/s</small>
                                    </div>
                                    <div className="d-flex align-items-center gap-2">
                                      <Ruler size={14} className="text-primary-red" />
                                      <small className="text-muted">Gravity: {gravity} m/s²</small>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : selectedSimulation === 'ohms-law' ? (
                            <div className="h-100 p-4 position-relative">
                              {/* Ohm's Law Simulation */}
                              <div className="bg-white rounded-3 border h-100 position-relative overflow-hidden">
                                {/* Circuit Diagram */}
                                <div className="position-absolute top-50 start-50 translate-middle" style={{ width: '80%', height: '60%' }}>
                                  {/* Battery */}
                                  <div className="position-absolute start-0 top-50 translate-middle-y">
                                    <div className="bg-dark rounded-1" style={{ width: '10px', height: '60px' }}></div>
                                    <div className="position-absolute top-0 start-100 translate-middle-y bg-dark rounded-1" style={{ width: '20px', height: '4px' }}></div>
                                    <div className="position-absolute bottom-0 start-100 translate-middle-y bg-dark rounded-1" style={{ width: '10px', height: '4px' }}></div>
                                    <div className="position-absolute top-50 start-0 translate-middle text-dark fw-bold">+</div>
                                    <div className="position-absolute bottom-0 start-0 translate-middle text-dark fw-bold">-</div>
                                  </div>
                                  
                                  {/* Resistor */}
                                  <div className="position-absolute end-0 top-50 translate-middle-y">
                                    <div className="bg-warning rounded-1" style={{ width: '60px', height: '20px' }}></div>
                                    <div className="position-absolute top-50 start-50 translate-middle text-dark small">
                                      {resistance} Ω
                                    </div>
                                  </div>
                                  
                                  {/* Wires */}
                                  <div className="position-absolute top-0 start-0 end-0" style={{ height: '4px', backgroundColor: '#333' }}></div>
                                  <div className="position-absolute bottom-0 start-0 end-0" style={{ height: '4px', backgroundColor: '#333' }}></div>
                                  <div className="position-absolute top-0 start-0 bottom-0" style={{ width: '4px', backgroundColor: '#333' }}></div>
                                  <div className="position-absolute top-0 end-0 bottom-0" style={{ width: '4px', backgroundColor: '#333' }}></div>
                                  
                                  {/* Current Flow Animation */}
                                  {isPlaying && (
                                    <>
                                      <div className="position-absolute top-0" style={{ 
                                        left: '20%', 
                                        width: '10px', 
                                        height: '10px', 
                                        borderRadius: '50%', 
                                        backgroundColor: '#3b82f6',
                                        animation: `flowTop ${3/flowSpeed}s linear infinite`
                                      }}></div>
                                      <div className="position-absolute top-0" style={{ 
                                        left: '50%', 
                                        width: '10px', 
                                        height: '10px', 
                                        borderRadius: '50%', 
                                        backgroundColor: '#3b82f6',
                                        animation: `flowTop ${3/flowSpeed}s linear infinite`,
                                        animationDelay: `${1/flowSpeed}s`
                                      }}></div>
                                      <div className="position-absolute top-0" style={{ 
                                        left: '80%', 
                                        width: '10px', 
                                        height: '10px', 
                                        borderRadius: '50%', 
                                        backgroundColor: '#3b82f6',
                                        animation: `flowTop ${3/flowSpeed}s linear infinite`,
                                        animationDelay: `${2/flowSpeed}s`
                                      }}></div>
                                      
                                      <style>
                                        {`
                                          @keyframes flowTop {
                                            0% { top: 0; left: var(--left, 20%); }
                                            25% { top: 0; left: 100%; }
                                            26% { top: 0; left: 100%; }
                                            50% { top: 100%; left: 100%; }
                                            51% { top: 100%; left: 100%; }
                                            75% { top: 100%; left: 0; }
                                            76% { top: 100%; left: 0; }
                                            100% { top: 0; left: var(--left, 20%); }
                                          }
                                        `}
                                      </style>
                                    </>
                                  )}
                                </div>
                                
                                {/* Info Panel */}
                                <div className="position-absolute top-0 end-0 p-3">
                                  <div className="bg-white bg-opacity-75 rounded-3 p-2">
                                    <div className="d-flex align-items-center gap-2 mb-1">
                                      <Zap size={14} className="text-warning" />
                                      <small className="text-muted">Voltage (V): {voltage.toFixed(1)} V</small>
                                    </div>
                                    <div className="d-flex align-items-center gap-2 mb-1">
                                      <Gauge size={14} className="text-primary" />
                                      <small className="text-muted">Current (I): {current.toFixed(2)} A</small>
                                    </div>
                                    <div className="d-flex align-items-center gap-2">
                                      <Ruler size={14} className="text-danger" />
                                      <small className="text-muted">Resistance (R): {resistance.toFixed(1)} Ω</small>
                                    </div>
                                  </div>
                                </div>
                                
                                {/* Ohm's Law Formula */}
                                <div className="position-absolute bottom-0 start-50 translate-middle-x p-3">
                                  <div className="bg-light-bg rounded-3 p-2 text-center">
                                    <div className="fw-bold text-deep-red">V = I × R</div>
                                    <div className="text-muted small">
                                      {voltage.toFixed(1)} V = {current.toFixed(2)} A × {resistance.toFixed(1)} Ω
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : selectedSimulation === 'pendulum' ? (
                            <div className="h-100 p-4 position-relative">
                              {/* Pendulum Simulation */}
                              <div className="bg-white rounded-3 border h-100 position-relative overflow-hidden">
                                {/* Pendulum Pivot */}
                                <div className="position-absolute start-50 top-25 translate-middle">
                                  <div className="bg-dark rounded-circle" style={{ width: '10px', height: '10px' }}></div>
                                </div>
                                
                                {/* Pendulum String and Bob */}
                                <div className="position-absolute start-50 top-25" style={{ transformOrigin: 'top center' }}>
                                  {/* String */}
                                  <div className="position-absolute start-50 top-0 translate-middle-x bg-dark" 
                                       style={{ 
                                         width: '2px', 
                                         height: '150px',
                                         transform: `rotate(${pendulumPosition.x / 150}rad)`,
                                         transformOrigin: 'top center'
                                       }}>
                                  </div>
                                  
                                  {/* Bob */}
                                  <div className="position-absolute start-50 translate-middle-x bg-primary-red rounded-circle" 
                                       style={{ 
                                         width: '30px', 
                                         height: '30px',
                                         top: '150px',
                                         transform: `rotate(${pendulumPosition.x / 150}rad) translateX(-50%)`,
                                         transformOrigin: 'top center'
                                       }}>
                                  </div>
                                </div>
                                
                                {/* Info Panel */}
                                <div className="position-absolute top-0 end-0 p-3">
                                  <div className="bg-white bg-opacity-75 rounded-3 p-2">
                                    <div className="d-flex align-items-center gap-2 mb-1">
                                      <Ruler size={14} className="text-primary-red" />
                                      <small className="text-muted">Length: {pendulumLength.toFixed(1)} m</small>
                                    </div>
                                    <div className="d-flex align-items-center gap-2 mb-1">
                                      <Clock size={14} className="text-primary-red" />
                                      <small className="text-muted">Period: {pendulumPeriod.toFixed(2)} s</small>
                                    </div>
                                    <div className="d-flex align-items-center gap-2">
                                      <ArrowRight size={14} className="text-primary-red" />
                                      <small className="text-muted">Angle: {pendulumAngle}°</small>
                                    </div>
                                  </div>
                                </div>
                                
                                {/* Formula */}
                                <div className="position-absolute bottom-0 start-50 translate-middle-x p-3">
                                  <div className="bg-light-bg rounded-3 p-2 text-center">
                                    <div className="fw-bold text-deep-red">T = 2π√(L/g)</div>
                                    <div className="text-muted small">
                                      Period = 2π × √({pendulumLength.toFixed(1)}/{gravity.toFixed(1)})
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : selectedSimulation === 'projectile-motion' ? (
                            <div className="h-100 p-4 position-relative">
                              {/* Projectile Motion Simulation */}
                              <div className="bg-white rounded-3 border h-100 position-relative overflow-hidden">
                                {/* Ground */}
                                <div className="position-absolute bottom-0 start-0 end-0 bg-success bg-opacity-10" style={{ height: '20px' }}></div>
                                
                                {/* Trajectory */}
                                {trajectory.length > 0 && (
                                  <svg className="position-absolute top-0 start-0 w-100 h-100" style={{ pointerEvents: 'none' }}>
                                    <path
                                      d={`M ${trajectory.map(point => `${point.x},${point.y}`).join(' L ')}`}
                                      stroke="#ff7474"
                                      strokeWidth="2"
                                      fill="none"
                                      strokeDasharray={isPlaying ? "none" : "5,5"}
                                    />
                                    {isPlaying && (
                                      <circle
                                        cx={trajectory[Math.min(Math.floor(trajectory.length * simulationSpeed / 3), trajectory.length - 1)].x}
                                        cy={trajectory[Math.min(Math.floor(trajectory.length * simulationSpeed / 3), trajectory.length - 1)].y}
                                        r="8"
                                        fill="#ff7474"
                                      />
                                    )}
                                  </svg>
                                )}
                                
                                {/* Launcher */}
                                <div className="position-absolute" style={{ bottom: '20px', left: '10px' }}>
                                  <div className="bg-primary-red rounded-3 p-2">
                                    <CornerUpRight className="text-white" size={24} />
                                  </div>
                                  
                                  {/* Angle Indicator */}
                                  <svg width="60" height="60" className="position-absolute" style={{ bottom: '0', left: '0', transform: 'translate(10px, -20px)' }}>
                                    <path
                                      d={`M 30,30 L ${30 + 25 * Math.cos((90 - angle) * Math.PI / 180)},${30 - 25 * Math.sin((90 - angle) * Math.PI / 180)}`}
                                      stroke="#c64242"
                                      strokeWidth="2"
                                      fill="none"
                                    />
                                    <text
                                      x={30 + 30 * Math.cos((90 - angle) * Math.PI / 180)}
                                      y={30 - 30 * Math.sin((90 - angle) * Math.PI / 180)}
                                      fontSize="12"
                                      fill="#c64242"
                                    >
                                      {angle}°
                                    </text>
                                  </svg>
                                </div>
                                
                                {/* Info Panel */}
                                <div className="position-absolute top-0 end-0 p-3">
                                  <div className="bg-white bg-opacity-75 rounded-3 p-2">
                                    <div className="d-flex align-items-center gap-2 mb-1">
                                      <Gauge size={14} className="text-primary-red" />
                                      <small className="text-muted">Velocity: {velocity} m/s</small>
                                    </div>
                                    <div className="d-flex align-items-center gap-2 mb-1">
                                      <ArrowUp size={14} className="text-primary-red" />
                                      <small className="text-muted">Angle: {angle}°</small>
                                    </div>
                                    <div className="d-flex align-items-center gap-2">
                                      <Ruler size={14} className="text-primary-red" />
                                      <small className="text-muted">Gravity: {gravity} m/s²</small>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="h-100 d-flex flex-column align-items-center justify-content-center">
                              <div className="bg-primary-red bg-opacity-10 rounded-circle p-4">
                                {selectedSimulation === 'magnetism' && <Magnet size={64} className="text-primary-red" />}
                                {selectedSimulation === 'waves' && <Waves size={64} className="text-primary-red" />}
                              </div>
                              <h5 className="text-muted mt-3">
                                {selectedSimulation === 'magnetism' && 'Magnetic Fields Simulation'}
                                {selectedSimulation === 'waves' && 'Wave Phenomena Simulation'}
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
                            {selectedSimulation === 'free-fall' && (
                              <>
                                <div className="col-md-6">
                                  <label className="form-label fw-medium text-deep-red">Initial Height (m)</label>
                                  <div className="d-flex align-items-center gap-2">
                                    <Button 
                                      size="sm" 
                                      variant="secondary"
                                      onClick={() => setInitialHeight(Math.max(10, initialHeight - 10))}
                                      className="p-1"
                                    >
                                      <Minus size={14} />
                                    </Button>
                                    <input
                                      type="range"
                                      className="form-range flex-fill"
                                      min="10"
                                      max="200"
                                      step="10"
                                      value={initialHeight}
                                      onChange={(e) => setInitialHeight(parseInt(e.target.value))}
                                    />
                                    <Button 
                                      size="sm" 
                                      variant="secondary"
                                      onClick={() => setInitialHeight(Math.min(200, initialHeight + 10))}
                                      className="p-1"
                                    >
                                      <Plus size={14} />
                                    </Button>
                                    <span className="text-muted" style={{ width: '50px' }}>{initialHeight} m</span>
                                  </div>
                                </div>
                                
                                <div className="col-md-6">
                                  <label className="form-label fw-medium text-deep-red">Gravity (m/s²)</label>
                                  <div className="d-flex align-items-center gap-2">
                                    <Button 
                                      size="sm" 
                                      variant="secondary"
                                      onClick={() => setGravity(Math.max(1, gravity - 1))}
                                      className="p-1"
                                    >
                                      <Minus size={14} />
                                    </Button>
                                    <input
                                      type="range"
                                      className="form-range flex-fill"
                                      min="1"
                                      max="20"
                                      step="0.1"
                                      value={gravity}
                                      onChange={(e) => setGravity(parseFloat(e.target.value))}
                                    />
                                    <Button 
                                      size="sm" 
                                      variant="secondary"
                                      onClick={() => setGravity(Math.min(20, gravity + 1))}
                                      className="p-1"
                                    >
                                      <Plus size={14} />
                                    </Button>
                                    <span className="text-muted" style={{ width: '50px' }}>{gravity.toFixed(1)} m/s²</span>
                                  </div>
                                </div>
                              </>
                            )}
                            
                            {selectedSimulation === 'ohms-law' && (
                              <>
                                <div className="col-md-6">
                                  <label className="form-label fw-medium text-deep-red">Voltage (V)</label>
                                  <div className="d-flex align-items-center gap-2">
                                    <Button 
                                      size="sm" 
                                      variant="secondary"
                                      onClick={() => setVoltage(Math.max(1, voltage - 1))}
                                      className="p-1"
                                    >
                                      <Minus size={14} />
                                    </Button>
                                    <input
                                      type="range"
                                      className="form-range flex-fill"
                                      min="1"
                                      max="24"
                                      step="0.5"
                                      value={voltage}
                                      onChange={(e) => setVoltage(parseFloat(e.target.value))}
                                    />
                                    <Button 
                                      size="sm" 
                                      variant="secondary"
                                      onClick={() => setVoltage(Math.min(24, voltage + 1))}
                                      className="p-1"
                                    >
                                      <Plus size={14} />
                                    </Button>
                                    <span className="text-muted" style={{ width: '50px' }}>{voltage.toFixed(1)} V</span>
                                  </div>
                                </div>
                                
                                <div className="col-md-6">
                                  <label className="form-label fw-medium text-deep-red">Resistance (Ω)</label>
                                  <div className="d-flex align-items-center gap-2">
                                    <Button 
                                      size="sm" 
                                      variant="secondary"
                                      onClick={() => setResistance(Math.max(0.5, resistance - 0.5))}
                                      className="p-1"
                                    >
                                      <Minus size={14} />
                                    </Button>
                                    <input
                                      type="range"
                                      className="form-range flex-fill"
                                      min="0.5"
                                      max="10"
                                      step="0.5"
                                      value={resistance}
                                      onChange={(e) => setResistance(parseFloat(e.target.value))}
                                    />
                                    <Button 
                                      size="sm" 
                                      variant="secondary"
                                      onClick={() => setResistance(Math.min(10, resistance + 0.5))}
                                      className="p-1"
                                    >
                                      <Plus size={14} />
                                    </Button>
                                    <span className="text-muted" style={{ width: '50px' }}>{resistance.toFixed(1)} Ω</span>
                                  </div>
                                </div>
                              </>
                            )}
                            
                            {selectedSimulation === 'pendulum' && (
                              <>
                                <div className="col-md-6">
                                  <label className="form-label fw-medium text-deep-red">Pendulum Length (m)</label>
                                  <div className="d-flex align-items-center gap-2">
                                    <Button 
                                      size="sm" 
                                      variant="secondary"
                                      onClick={() => setPendulumLength(Math.max(0.1, pendulumLength - 0.1))}
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
                                      value={pendulumLength}
                                      onChange={(e) => setPendulumLength(parseFloat(e.target.value))}
                                    />
                                    <Button 
                                      size="sm" 
                                      variant="secondary"
                                      onClick={() => setPendulumLength(Math.min(3, pendulumLength + 0.1))}
                                      className="p-1"
                                    >
                                      <Plus size={14} />
                                    </Button>
                                    <span className="text-muted" style={{ width: '50px' }}>{pendulumLength.toFixed(1)} m</span>
                                  </div>
                                </div>
                                
                                <div className="col-md-6">
                                  <label className="form-label fw-medium text-deep-red">Initial Angle (degrees)</label>
                                  <div className="d-flex align-items-center gap-2">
                                    <Button 
                                      size="sm" 
                                      variant="secondary"
                                      onClick={() => setPendulumAngle(Math.max(5, pendulumAngle - 5))}
                                      className="p-1"
                                    >
                                      <Minus size={14} />
                                    </Button>
                                    <input
                                      type="range"
                                      className="form-range flex-fill"
                                      min="5"
                                      max="45"
                                      step="5"
                                      value={pendulumAngle}
                                      onChange={(e) => setPendulumAngle(parseInt(e.target.value))}
                                    />
                                    <Button 
                                      size="sm" 
                                      variant="secondary"
                                      onClick={() => setPendulumAngle(Math.min(45, pendulumAngle + 5))}
                                      className="p-1"
                                    >
                                      <Plus size={14} />
                                    </Button>
                                    <span className="text-muted" style={{ width: '50px' }}>{pendulumAngle}°</span>
                                  </div>
                                </div>
                                
                                <div className="col-md-6">
                                  <label className="form-label fw-medium text-deep-red">Gravity (m/s²)</label>
                                  <div className="d-flex align-items-center gap-2">
                                    <Button 
                                      size="sm" 
                                      variant="secondary"
                                      onClick={() => setGravity(Math.max(1, gravity - 1))}
                                      className="p-1"
                                    >
                                      <Minus size={14} />
                                    </Button>
                                    <input
                                      type="range"
                                      className="form-range flex-fill"
                                      min="1"
                                      max="20"
                                      step="0.1"
                                      value={gravity}
                                      onChange={(e) => setGravity(parseFloat(e.target.value))}
                                    />
                                    <Button 
                                      size="sm" 
                                      variant="secondary"
                                      onClick={() => setGravity(Math.min(20, gravity + 1))}
                                      className="p-1"
                                    >
                                      <Plus size={14} />
                                    </Button>
                                    <span className="text-muted" style={{ width: '50px' }}>{gravity.toFixed(1)} m/s²</span>
                                  </div>
                                </div>
                              </>
                            )}
                            
                            {selectedSimulation === 'projectile-motion' && (
                              <>
                                <div className="col-md-6">
                                  <label className="form-label fw-medium text-deep-red">Gravity (m/s²)</label>
                                  <div className="d-flex align-items-center gap-2">
                                    <Button 
                                      size="sm" 
                                      variant="secondary"
                                      onClick={() => setGravity(Math.max(1, gravity - 1))}
                                      className="p-1"
                                    >
                                      <Minus size={14} />
                                    </Button>
                                    <input
                                      type="range"
                                      className="form-range flex-fill"
                                      min="1"
                                      max="20"
                                      step="0.1"
                                      value={gravity}
                                      onChange={(e) => setGravity(parseFloat(e.target.value))}
                                    />
                                    <Button 
                                      size="sm" 
                                      variant="secondary"
                                      onClick={() => setGravity(Math.min(20, gravity + 1))}
                                      className="p-1"
                                    >
                                      <Plus size={14} />
                                    </Button>
                                    <span className="text-muted" style={{ width: '50px' }}>{gravity.toFixed(1)} m/s²</span>
                                  </div>
                                </div>
                                
                                <div className="col-md-6">
                                  <label className="form-label fw-medium text-deep-red">Initial Velocity (m/s)</label>
                                  <div className="d-flex align-items-center gap-2">
                                    <Button 
                                      size="sm" 
                                      variant="secondary"
                                      onClick={() => setVelocity(Math.max(0, velocity - 1))}
                                      className="p-1"
                                    >
                                      <Minus size={14} />
                                    </Button>
                                    <input
                                      type="range"
                                      className="form-range flex-fill"
                                      min="0"
                                      max="50"
                                      value={velocity}
                                      onChange={(e) => setVelocity(parseInt(e.target.value))}
                                    />
                                    <Button 
                                      size="sm" 
                                      variant="secondary"
                                      onClick={() => setVelocity(Math.min(50, velocity + 1))}
                                      className="p-1"
                                    >
                                      <Plus size={14} />
                                    </Button>
                                    <span className="text-muted" style={{ width: '50px' }}>{velocity} m/s</span>
                                  </div>
                                </div>
                                
                                <div className="col-md-6">
                                  <label className="form-label fw-medium text-deep-red">Launch Angle (degrees)</label>
                                  <div className="d-flex align-items-center gap-2">
                                    <Button 
                                      size="sm" 
                                      variant="secondary"
                                      onClick={() => setAngle(Math.max(0, angle - 5))}
                                      className="p-1"
                                    >
                                      <Minus size={14} />
                                    </Button>
                                    <input
                                      type="range"
                                      className="form-range flex-fill"
                                      min="0"
                                      max="90"
                                      value={angle}
                                      onChange={(e) => setAngle(parseInt(e.target.value))}
                                    />
                                    <Button 
                                      size="sm" 
                                      variant="secondary"
                                      onClick={() => setAngle(Math.min(90, angle + 5))}
                                      className="p-1"
                                    >
                                      <Plus size={14} />
                                    </Button>
                                    <span className="text-muted" style={{ width: '50px' }}>{angle}°</span>
                                  </div>
                                </div>
                              </>
                            )}
                            
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
                                <span className="text-muted" style={{ width: '50px' }}>{simulationSpeed}x</span>
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
                                <h6 className="fw-semibold text-deep-red mb-1">Adjust Parameters</h6>
                                <p className="text-muted small mb-0">Set gravity, mass, velocity, and other parameters in the settings panel.</p>
                              </div>
                            </div>
                            
                            <div className="d-flex align-items-start gap-3">
                              <div className="bg-primary-red bg-opacity-10 rounded-3 p-2">
                                <span className="fw-bold text-primary-red">3</span>
                              </div>
                              <div>
                                <h6 className="fw-semibold text-deep-red mb-1">Run the Simulation</h6>
                                <p className="text-muted small mb-0">Press Play to start the simulation and observe the physics in action.</p>
                              </div>
                            </div>
                            
                            <div className="d-flex align-items-start gap-3">
                              <div className="bg-primary-red bg-opacity-10 rounded-3 p-2">
                                <span className="fw-bold text-primary-red">4</span>
                              </div>
                              <div>
                                <h6 className="fw-semibold text-deep-red mb-1">Analyze Results</h6>
                                <p className="text-muted small mb-0">Study the motion, forces, and energy transformations in the system.</p>
                              </div>
                            </div>
                          </div>
                          
                          {selectedSimulation === 'free-fall' && (
                            <div className="bg-light-bg rounded-3 p-3 mt-3">
                              <h6 className="fw-semibold text-deep-red mb-2">Free Fall Physics</h6>
                              <p className="text-muted small mb-0">
                                This simulation demonstrates objects falling under gravity. The distance traveled is 
                                proportional to the square of time (s = 0.5gt²), while velocity increases linearly 
                                with time (v = gt).
                              </p>
                            </div>
                          )}
                          
                          {selectedSimulation === 'ohms-law' && (
                            <div className="bg-light-bg rounded-3 p-3 mt-3">
                              <h6 className="fw-semibold text-deep-red mb-2">Ohm's Law</h6>
                              <p className="text-muted small mb-0">
                                Ohm's Law states that the current through a conductor is directly proportional to 
                                the voltage and inversely proportional to the resistance (I = V/R). Adjust the 
                                voltage and resistance to see how current changes.
                              </p>
                            </div>
                          )}
                          
                          {selectedSimulation === 'pendulum' && (
                            <div className="bg-light-bg rounded-3 p-3 mt-3">
                              <h6 className="fw-semibold text-deep-red mb-2">Simple Pendulum</h6>
                              <p className="text-muted small mb-0">
                                A simple pendulum follows harmonic motion with a period that depends on its length 
                                and gravity (T = 2π√(L/g)). The period is independent of mass and amplitude 
                                (for small angles).
                              </p>
                            </div>
                          )}
                          
                          {selectedSimulation === 'projectile-motion' && (
                            <div className="bg-light-bg rounded-3 p-3 mt-3">
                              <h6 className="fw-semibold text-deep-red mb-2">Projectile Motion</h6>
                              <p className="text-muted small mb-0">
                                This simulation demonstrates key physics principles including Newton's laws of motion, 
                                conservation of energy, and projectile motion. Experiment with different parameters 
                                to see how they affect the trajectory.
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
        </main>
      </div>
    </div>
  );
}