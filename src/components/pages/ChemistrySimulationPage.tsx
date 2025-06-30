import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Beaker, FlaskRound as Flask, Thermometer, Play, Pause, RotateCcw, Download, Share2, Info, Plus, Minus, X, Settings, HelpCircle, Save, Eye, Layers, Zap, Droplet, Flame, ArrowDown } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Header } from '../layout/Header';
import { Sidebar } from '../layout/Sidebar';

interface ChemistrySimulationPageProps {
  onNavigate: (view: string) => void;
}

export function ChemistrySimulationPage({ onNavigate }: ChemistrySimulationPageProps) {
  const [selectedSimulation, setSelectedSimulation] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [simulationSpeed, setSimulationSpeed] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Acid-Base Titration state
  const [dropRate, setDropRate] = useState(1);
  const [naohAdded, setNaohAdded] = useState(0);
  const [phValue, setPhValue] = useState(1);
  const [solutionColor, setSolutionColor] = useState('#f8f9fa');
  const [isNeutralized, setIsNeutralized] = useState(false);
  
  // Chemical Reaction Heat state
  const [chemicalA, setChemicalA] = useState('hcl');
  const [chemicalB, setChemicalB] = useState('naoh');
  const [temperature, setTemperature] = useState(25);
  const [reactionType, setReactionType] = useState<'exothermic' | 'endothermic'>('exothermic');
  const [showEffect, setShowEffect] = useState(false);
  
  // Salt Formation state
  const [selectedAcid, setSelectedAcid] = useState('hcl');
  const [selectedBase, setSelectedBase] = useState('naoh');
  const [saltFormula, setSaltFormula] = useState('NaCl');
  const [saltName, setSaltName] = useState('Sodium Chloride');
  const [showReaction, setShowReaction] = useState(false);

  const simulations = [
    {
      id: 'acid-base-titration',
      name: 'Acid-Base Titration',
      description: 'Simulate titration with NaOH and HCl using phenolphthalein indicator',
      difficulty: 'Beginner',
      icon: Droplet,
      color: 'bg-primary-red'
    },
    {
      id: 'reaction-heat',
      name: 'Chemical Reaction Heat',
      description: 'Observe temperature changes in exothermic and endothermic reactions',
      difficulty: 'Intermediate',
      icon: Thermometer,
      color: 'bg-accent-red'
    },
    {
      id: 'salt-formation',
      name: 'Salt Formation',
      description: 'Simulate acid-base reactions to form different salts',
      difficulty: 'Beginner',
      icon: Flask,
      color: 'bg-success'
    }
  ];

  const acids = [
    { id: 'hcl', name: 'Hydrochloric Acid', formula: 'HCl' },
    { id: 'h2so4', name: 'Sulfuric Acid', formula: 'H₂SO₄' },
    { id: 'hno3', name: 'Nitric Acid', formula: 'HNO₃' },
    { id: 'ch3cooh', name: 'Acetic Acid', formula: 'CH₃COOH' }
  ];

  const bases = [
    { id: 'naoh', name: 'Sodium Hydroxide', formula: 'NaOH' },
    { id: 'koh', name: 'Potassium Hydroxide', formula: 'KOH' },
    { id: 'caoh2', name: 'Calcium Hydroxide', formula: 'Ca(OH)₂' },
    { id: 'nh4oh', name: 'Ammonium Hydroxide', formula: 'NH₄OH' }
  ];

  const chemicalCombinations = {
    'hcl-naoh': { type: 'exothermic', maxTemp: 35, salt: { formula: 'NaCl', name: 'Sodium Chloride' } },
    'hcl-koh': { type: 'exothermic', maxTemp: 34, salt: { formula: 'KCl', name: 'Potassium Chloride' } },
    'hcl-caoh2': { type: 'exothermic', maxTemp: 38, salt: { formula: 'CaCl₂', name: 'Calcium Chloride' } },
    'hcl-nh4oh': { type: 'exothermic', maxTemp: 32, salt: { formula: 'NH₄Cl', name: 'Ammonium Chloride' } },
    'h2so4-naoh': { type: 'exothermic', maxTemp: 40, salt: { formula: 'Na₂SO₄', name: 'Sodium Sulfate' } },
    'h2so4-koh': { type: 'exothermic', maxTemp: 39, salt: { formula: 'K₂SO₄', name: 'Potassium Sulfate' } },
    'h2so4-caoh2': { type: 'exothermic', maxTemp: 42, salt: { formula: 'CaSO₄', name: 'Calcium Sulfate' } },
    'h2so4-nh4oh': { type: 'exothermic', maxTemp: 36, salt: { formula: '(NH₄)₂SO₄', name: 'Ammonium Sulfate' } },
    'hno3-naoh': { type: 'exothermic', maxTemp: 37, salt: { formula: 'NaNO₃', name: 'Sodium Nitrate' } },
    'hno3-koh': { type: 'exothermic', maxTemp: 36, salt: { formula: 'KNO₃', name: 'Potassium Nitrate' } },
    'hno3-caoh2': { type: 'exothermic', maxTemp: 39, salt: { formula: 'Ca(NO₃)₂', name: 'Calcium Nitrate' } },
    'hno3-nh4oh': { type: 'exothermic', maxTemp: 33, salt: { formula: 'NH₄NO₃', name: 'Ammonium Nitrate' } },
    'ch3cooh-naoh': { type: 'endothermic', maxTemp: 22, salt: { formula: 'CH₃COONa', name: 'Sodium Acetate' } },
    'ch3cooh-koh': { type: 'endothermic', maxTemp: 21, salt: { formula: 'CH₃COOK', name: 'Potassium Acetate' } },
    'ch3cooh-caoh2': { type: 'endothermic', maxTemp: 20, salt: { formula: '(CH₃COO)₂Ca', name: 'Calcium Acetate' } },
    'ch3cooh-nh4oh': { type: 'endothermic', maxTemp: 19, salt: { formula: 'CH₃COONH₄', name: 'Ammonium Acetate' } }
  };

  // Effect for Acid-Base Titration
  useEffect(() => {
    if (isPlaying && selectedSimulation === 'acid-base-titration') {
      const interval = setInterval(() => {
        if (naohAdded < 25) {
          setNaohAdded(prev => prev + dropRate * 0.1);
          
          // Calculate pH based on NaOH added (simplified model)
          const newPh = 1 + (naohAdded / 25) * 13;
          setPhValue(newPh);
          
          // Change color when pH reaches around 7 (neutralization point)
          if (newPh >= 8.2) {
            setSolutionColor('#ff9cce'); // Pink for basic with phenolphthalein
            if (!isNeutralized) {
              setIsNeutralized(true);
            }
          } else {
            setSolutionColor('#f8f9fa'); // Clear/colorless for acidic
          }
        } else {
          clearInterval(interval);
        }
      }, 500 / simulationSpeed);
      
      return () => clearInterval(interval);
    }
  }, [isPlaying, selectedSimulation, naohAdded, dropRate, simulationSpeed]);

  // Effect for Chemical Reaction Heat
  useEffect(() => {
    if (isPlaying && selectedSimulation === 'reaction-heat') {
      const combination = `${chemicalA}-${chemicalB}`;
      const reactionInfo = chemicalCombinations[combination as keyof typeof chemicalCombinations];
      
      if (reactionInfo) {
        setReactionType(reactionInfo.type);
        setShowEffect(true);
        
        const targetTemp = reactionInfo.type === 'exothermic' 
          ? reactionInfo.maxTemp 
          : reactionInfo.maxTemp;
        
        const interval = setInterval(() => {
          setTemperature(prev => {
            if (reactionInfo.type === 'exothermic') {
              return prev < targetTemp ? prev + 0.5 * simulationSpeed : prev;
            } else {
              return prev > targetTemp ? prev - 0.5 * simulationSpeed : prev;
            }
          });
        }, 100);
        
        return () => clearInterval(interval);
      }
    } else if (!isPlaying && selectedSimulation === 'reaction-heat') {
      setShowEffect(false);
    }
  }, [isPlaying, selectedSimulation, chemicalA, chemicalB, simulationSpeed]);

  // Effect for Salt Formation
  useEffect(() => {
    if (selectedSimulation === 'salt-formation') {
      const combination = `${selectedAcid}-${selectedBase}`;
      const reactionInfo = chemicalCombinations[combination as keyof typeof chemicalCombinations];
      
      if (reactionInfo) {
        setSaltFormula(reactionInfo.salt.formula);
        setSaltName(reactionInfo.salt.name);
      }
      
      if (isPlaying) {
        setShowReaction(true);
      } else {
        setShowReaction(false);
      }
    }
  }, [isPlaying, selectedSimulation, selectedAcid, selectedBase]);

  const startSimulation = () => {
    setIsPlaying(true);
  };

  const pauseSimulation = () => {
    setIsPlaying(false);
  };

  const resetSimulation = () => {
    setIsPlaying(false);
    
    // Reset simulation-specific state
    if (selectedSimulation === 'acid-base-titration') {
      setNaohAdded(0);
      setPhValue(1);
      setSolutionColor('#f8f9fa');
      setIsNeutralized(false);
    } else if (selectedSimulation === 'reaction-heat') {
      setTemperature(25);
      setShowEffect(false);
    } else if (selectedSimulation === 'salt-formation') {
      setShowReaction(false);
    }
    
    setSimulationSpeed(1);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-success';
      case 'Intermediate': return 'bg-warning';
      case 'Advanced': return 'bg-danger';
      default: return 'bg-secondary';
    }
  };

  const getAcidName = (id: string) => {
    return acids.find(acid => acid.id === id)?.name || '';
  };

  const getAcidFormula = (id: string) => {
    return acids.find(acid => acid.id === id)?.formula || '';
  };

  const getBaseName = (id: string) => {
    return bases.find(base => base.id === id)?.name || '';
  };

  const getBaseFormula = (id: string) => {
    return bases.find(base => base.id === id)?.formula || '';
  };

  const renderAcidBaseTitration = () => {
    return (
      <div className="h-100 p-4 position-relative">
        <div className="bg-white rounded-3 border h-100 position-relative overflow-hidden">
          {/* Burette */}
          <div className="position-absolute" style={{ top: '10px', left: '50%', transform: 'translateX(-50%)' }}>
            <div className="bg-light border rounded-top" style={{ width: '30px', height: '100px', position: 'relative' }}>
              <div className="bg-info bg-opacity-50" style={{ 
                width: '100%', 
                height: `${100 - Math.min(naohAdded * 4, 100)}%`, 
                position: 'absolute',
                top: 0,
                transition: 'height 0.5s ease-in-out'
              }}></div>
              <div className="position-absolute" style={{ bottom: '-20px', left: '50%', transform: 'translateX(-50%)' }}>
                <div className="bg-dark" style={{ width: '2px', height: '20px' }}></div>
              </div>
            </div>
          </div>
          
          {/* Drop animation */}
          {isPlaying && (
            <motion.div
              animate={{ 
                y: [130, 200],
                opacity: [1, 0]
              }}
              transition={{ 
                repeat: Infinity,
                duration: 1 / dropRate,
                ease: "easeIn"
              }}
              className="position-absolute bg-info rounded-circle"
              style={{ 
                width: '8px', 
                height: '8px', 
                left: 'calc(50% - 4px)', 
                top: '130px'
              }}
            />
          )}
          
          {/* Flask */}
          <div className="position-absolute" style={{ bottom: '50px', left: '50%', transform: 'translateX(-50%)' }}>
            <div className="position-relative">
              <div className="rounded-bottom border" style={{ 
                width: '120px', 
                height: '100px',
                background: solutionColor,
                transition: 'background-color 1s ease-in-out'
              }}>
                {/* Bubbles animation when drops fall */}
                {isPlaying && (
                  <>
                    <motion.div
                      animate={{ 
                        y: [0, -20],
                        opacity: [0, 1, 0],
                        x: [0, 5]
                      }}
                      transition={{ 
                        repeat: Infinity,
                        duration: 2,
                        delay: 0.5
                      }}
                      className="position-absolute bg-white rounded-circle"
                      style={{ width: '10px', height: '10px', left: '40%', bottom: '10px' }}
                    />
                    <motion.div
                      animate={{ 
                        y: [0, -30],
                        opacity: [0, 1, 0],
                        x: [0, -8]
                      }}
                      transition={{ 
                        repeat: Infinity,
                        duration: 1.5,
                        delay: 0.2
                      }}
                      className="position-absolute bg-white rounded-circle"
                      style={{ width: '8px', height: '8px', left: '60%', bottom: '20px' }}
                    />
                  </>
                )}
              </div>
              <div className="border-top border-start border-end rounded-top" style={{ 
                width: '60px', 
                height: '20px',
                marginLeft: '30px'
              }}></div>
            </div>
          </div>
          
          {/* pH Meter */}
          <div className="position-absolute" style={{ bottom: '20px', right: '20px' }}>
            <div className="bg-white border rounded p-2">
              <div className="text-center mb-1">pH Meter</div>
              <div className="progress" style={{ height: '20px', width: '150px' }}>
                <div 
                  className="progress-bar" 
                  role="progressbar" 
                  style={{ 
                    width: `${(phValue / 14) * 100}%`,
                    backgroundColor: phValue < 7 ? '#dc3545' : phValue === 7 ? '#6c757d' : '#0d6efd',
                    transition: 'width 0.5s ease-in-out, background-color 0.5s ease-in-out'
                  }}
                >
                  {phValue.toFixed(1)}
                </div>
              </div>
              <div className="d-flex justify-content-between mt-1">
                <span className="small">Acidic</span>
                <span className="small">Neutral</span>
                <span className="small">Basic</span>
              </div>
            </div>
          </div>
          
          {/* Volume Tracker */}
          <div className="position-absolute" style={{ bottom: '20px', left: '20px' }}>
            <div className="bg-white border rounded p-2">
              <div className="text-center mb-1">NaOH Added</div>
              <div className="text-center fw-bold">
                {naohAdded.toFixed(1)} mL
              </div>
            </div>
          </div>
          
          {/* Neutralization Message */}
          {isNeutralized && (
            <div className="position-absolute top-50 start-50 translate-middle">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-success text-white p-3 rounded-3"
              >
                <h5 className="mb-0">Neutralization Point Reached!</h5>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderChemicalReactionHeat = () => {
    return (
      <div className="h-100 p-4 position-relative">
        <div className="bg-white rounded-3 border h-100 position-relative overflow-hidden">
          {/* Beakers */}
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="d-flex flex-column align-items-center me-5">
              <div className="mb-2 text-center">
                <span className="fw-bold">{getAcidName(chemicalA)}</span>
                <br />
                <span className="text-muted">{getAcidFormula(chemicalA)}</span>
              </div>
              <div className="rounded-bottom border" style={{ 
                width: '80px', 
                height: '100px',
                background: '#e6f7ff',
              }}>
                {isPlaying && (
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ 
                      repeat: Infinity,
                      duration: 2
                    }}
                    className="w-100 h-100"
                  />
                )}
              </div>
            </div>
            
            <div className="d-flex align-items-center">
              <motion.div
                animate={{ scale: isPlaying ? [1, 1.2, 1] : 1 }}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                <div className="bg-primary-red rounded-circle d-flex align-items-center justify-content-center"
                     style={{ width: '40px', height: '40px' }}>
                  <Plus className="text-white" size={24} />
                </div>
              </motion.div>
            </div>
            
            <div className="d-flex flex-column align-items-center ms-5">
              <div className="mb-2 text-center">
                <span className="fw-bold">{getBaseName(chemicalB)}</span>
                <br />
                <span className="text-muted">{getBaseFormula(chemicalB)}</span>
              </div>
              <div className="rounded-bottom border" style={{ 
                width: '80px', 
                height: '100px',
                background: '#fff0e6',
              }}>
                {isPlaying && (
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ 
                      repeat: Infinity,
                      duration: 2,
                      delay: 0.5
                    }}
                    className="w-100 h-100"
                  />
                )}
              </div>
            </div>
          </div>
          
          {/* Reaction Beaker */}
          {isPlaying && (
            <div className="position-absolute" style={{ bottom: '50px', left: '50%', transform: 'translateX(-50%)' }}>
              <div className="d-flex flex-column align-items-center">
                <div className="rounded-bottom border" style={{ 
                  width: '120px', 
                  height: '120px',
                  background: reactionType === 'exothermic' ? '#ffece6' : '#e6f9ff',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {/* Bubbles/Reaction Animation */}
                  {showEffect && (
                    <>
                      {reactionType === 'exothermic' ? (
                        // Steam/bubbles for exothermic
                        <>
                          <motion.div
                            animate={{ 
                              y: [60, 0],
                              opacity: [1, 0],
                              x: [0, 10]
                            }}
                            transition={{ 
                              repeat: Infinity,
                              duration: 2,
                              delay: 0.2
                            }}
                            className="position-absolute bg-white rounded-circle"
                            style={{ width: '15px', height: '15px', left: '30%', bottom: '0' }}
                          />
                          <motion.div
                            animate={{ 
                              y: [60, 0],
                              opacity: [1, 0],
                              x: [0, -15]
                            }}
                            transition={{ 
                              repeat: Infinity,
                              duration: 1.7,
                              delay: 0.5
                            }}
                            className="position-absolute bg-white rounded-circle"
                            style={{ width: '12px', height: '12px', left: '60%', bottom: '0' }}
                          />
                          <motion.div
                            animate={{ 
                              y: [60, 0],
                              opacity: [1, 0],
                              x: [0, 5]
                            }}
                            transition={{ 
                              repeat: Infinity,
                              duration: 2.3,
                              delay: 0.8
                            }}
                            className="position-absolute bg-white rounded-circle"
                            style={{ width: '10px', height: '10px', left: '45%', bottom: '0' }}
                          />
                        </>
                      ) : (
                        // Frost/ice effect for endothermic
                        <>
                          <div className="position-absolute" style={{ top: '0', left: '0', right: '0', height: '15px' }}>
                            <motion.div
                              animate={{ opacity: [0, 0.7, 0.5] }}
                              transition={{ repeat: Infinity, duration: 3 }}
                              className="w-100 h-100 bg-info bg-opacity-25"
                              style={{ borderRadius: '0 0 50% 50%' }}
                            />
                          </div>
                          <motion.div
                            animate={{ 
                              opacity: [0, 0.5, 0]
                            }}
                            transition={{ 
                              repeat: Infinity,
                              duration: 2
                            }}
                            className="position-absolute bg-info bg-opacity-10"
                            style={{ width: '30px', height: '30px', left: '10px', top: '20px', borderRadius: '50% 50% 0 50%' }}
                          />
                          <motion.div
                            animate={{ 
                              opacity: [0, 0.5, 0]
                            }}
                            transition={{ 
                              repeat: Infinity,
                              duration: 2.5,
                              delay: 0.5
                            }}
                            className="position-absolute bg-info bg-opacity-10"
                            style={{ width: '25px', height: '25px', right: '15px', top: '30px', borderRadius: '50% 50% 50% 0' }}
                          />
                        </>
                      )}
                    </>
                  )}
                </div>
                
                {/* Reaction Equation */}
                <div className="mt-3 bg-light p-2 rounded text-center">
                  <span className="small">
                    {getAcidFormula(chemicalA)} + {getBaseFormula(chemicalB)} → 
                    {chemicalCombinations[`${chemicalA}-${chemicalB}` as keyof typeof chemicalCombinations]?.salt.formula} + H₂O
                  </span>
                </div>
              </div>
            </div>
          )}
          
          {/* Thermometer */}
          <div className="position-absolute" style={{ top: '20px', right: '20px' }}>
            <div className="bg-white border rounded p-2">
              <div className="text-center mb-1">Temperature</div>
              <div className="d-flex align-items-center">
                <div className="position-relative me-2" style={{ width: '20px', height: '100px' }}>
                  <div className="bg-light border rounded-pill w-100 h-100"></div>
                  <div 
                    className="position-absolute bottom-0 rounded-pill" 
                    style={{ 
                      width: '14px', 
                      height: `${((temperature - 15) / 30) * 100}%`,
                      left: '3px',
                      backgroundColor: temperature > 25 ? '#dc3545' : '#0d6efd',
                      transition: 'height 0.5s ease-in-out, background-color 0.5s ease-in-out'
                    }}
                  ></div>
                </div>
                <div className="text-center fw-bold" style={{ width: '50px' }}>
                  {temperature.toFixed(1)}°C
                </div>
              </div>
              <div className="d-flex flex-column justify-content-between align-items-end" style={{ height: '100px' }}>
                <span className="small text-danger">45°C</span>
                <span className="small text-secondary">25°C</span>
                <span className="small text-primary">15°C</span>
              </div>
            </div>
          </div>
          
          {/* Reaction Type Indicator */}
          {showEffect && (
            <div className="position-absolute" style={{ top: '20px', left: '20px' }}>
              <div className={`bg-white border rounded p-2 ${reactionType === 'exothermic' ? 'border-danger' : 'border-info'}`}>
                <div className="text-center mb-1">Reaction Type</div>
                <div className={`text-center fw-bold ${reactionType === 'exothermic' ? 'text-danger' : 'text-info'}`}>
                  {reactionType === 'exothermic' ? 'Exothermic' : 'Endothermic'}
                </div>
                <div className="text-center">
                  {reactionType === 'exothermic' ? 'Releases Heat' : 'Absorbs Heat'}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderSaltFormation = () => {
    const acid = acids.find(a => a.id === selectedAcid);
    const base = bases.find(b => b.id === selectedBase);
    
    return (
      <div className="h-100 p-4 position-relative">
        <div className="bg-white rounded-3 border h-100 position-relative overflow-hidden">
          {/* Reaction Visualization */}
          <div className="d-flex justify-content-center align-items-center h-100">
            {/* Acid Beaker */}
            <div className="d-flex flex-column align-items-center me-4">
              <div className="mb-2 text-center">
                <span className="fw-bold">{acid?.name}</span>
                <br />
                <span className="text-muted">{acid?.formula}</span>
              </div>
              <div className="rounded-bottom border" style={{ 
                width: '80px', 
                height: '100px',
                background: 'rgba(220, 53, 69, 0.1)',
              }}>
                {isPlaying && (
                  <motion.div
                    animate={{ 
                      y: [0, -5, 0],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ 
                      repeat: Infinity,
                      duration: 2
                    }}
                    className="w-100 h-100"
                  />
                )}
              </div>
            </div>
            
            <div className="d-flex align-items-center">
              <motion.div
                animate={{ rotate: isPlaying ? 360 : 0 }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <div className="bg-primary-red rounded-circle d-flex align-items-center justify-content-center"
                     style={{ width: '40px', height: '40px' }}>
                  <Plus className="text-white" size={24} />
                </div>
              </motion.div>
            </div>
            
            {/* Base Beaker */}
            <div className="d-flex flex-column align-items-center ms-4">
              <div className="mb-2 text-center">
                <span className="fw-bold">{base?.name}</span>
                <br />
                <span className="text-muted">{base?.formula}</span>
              </div>
              <div className="rounded-bottom border" style={{ 
                width: '80px', 
                height: '100px',
                background: 'rgba(13, 110, 253, 0.1)',
              }}>
                {isPlaying && (
                  <motion.div
                    animate={{ 
                      y: [0, -5, 0],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ 
                      repeat: Infinity,
                      duration: 2,
                      delay: 0.5
                    }}
                    className="w-100 h-100"
                  />
                )}
              </div>
            </div>
          </div>
          
          {/* Reaction Result */}
          {showReaction && (
            <div className="position-absolute" style={{ bottom: '30px', left: '50%', transform: 'translateX(-50%)' }}>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="bg-light border rounded p-3 text-center"
                style={{ width: '300px' }}
              >
                <div className="mb-2">
                  <span className="fw-bold">Reaction:</span>
                  <div className="mt-1">
                    {acid?.formula} + {base?.formula} → {saltFormula} + H₂O
                  </div>
                </div>
                <div className="mb-2">
                  <span className="fw-bold">Salt Formed:</span>
                  <div className="mt-1">
                    <span className="badge bg-success p-2">{saltName} ({saltFormula})</span>
                  </div>
                </div>
                
                {/* Fizzing/Bubbling Animation */}
                <div className="position-relative mt-3" style={{ height: '40px' }}>
                  <div className="position-absolute w-100">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="position-absolute bg-white border rounded-circle"
                        style={{ 
                          width: `${Math.random() * 10 + 5}px`, 
                          height: `${Math.random() * 10 + 5}px`,
                          left: `${Math.random() * 100}%`
                        }}
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ 
                          y: -10, 
                          opacity: [0, 1, 0],
                          x: Math.random() * 20 - 10
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: Math.random() * 2 + 1,
                          delay: Math.random() * 2
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-vh-100 bg-light-bg d-flex">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        activeView="chemistry-simulation"
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
                              onClick={() => {
                                setSelectedSimulation(simulation.id);
                                resetSimulation();
                              }}
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
                          ) : selectedSimulation === 'acid-base-titration' ? (
                            renderAcidBaseTitration()
                          ) : selectedSimulation === 'reaction-heat' ? (
                            renderChemicalReactionHeat()
                          ) : selectedSimulation === 'salt-formation' ? (
                            renderSaltFormation()
                          ) : (
                            <div className="h-100 d-flex flex-column align-items-center justify-content-center">
                              <div className="bg-primary-red bg-opacity-10 rounded-circle p-4">
                                <Beaker size={64} className="text-primary-red" />
                              </div>
                              <h5 className="text-muted mt-3">
                                Simulation Loading...
                              </h5>
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
                            {/* Common Settings */}
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
                            
                            {/* Acid-Base Titration Settings */}
                            {selectedSimulation === 'acid-base-titration' && (
                              <div className="col-md-6">
                                <label className="form-label fw-medium text-deep-red">Drop Rate</label>
                                <div className="d-flex align-items-center gap-2">
                                  <Button 
                                    size="sm" 
                                    variant="secondary"
                                    onClick={() => setDropRate(Math.max(1, dropRate - 1))}
                                    className="p-1"
                                  >
                                    <Minus size={14} />
                                  </Button>
                                  <input
                                    type="range"
                                    className="form-range flex-fill"
                                    min="1"
                                    max="10"
                                    value={dropRate}
                                    onChange={(e) => setDropRate(parseInt(e.target.value))}
                                  />
                                  <Button 
                                    size="sm" 
                                    variant="secondary"
                                    onClick={() => setDropRate(Math.min(10, dropRate + 1))}
                                    className="p-1"
                                  >
                                    <Plus size={14} />
                                  </Button>
                                  <span className="text-muted" style={{ width: '40px' }}>{dropRate} drops/s</span>
                                </div>
                              </div>
                            )}
                            
                            {/* Chemical Reaction Heat Settings */}
                            {selectedSimulation === 'reaction-heat' && (
                              <>
                                <div className="col-md-6">
                                  <label className="form-label fw-medium text-deep-red">Chemical A</label>
                                  <select 
                                    className="form-select"
                                    value={chemicalA}
                                    onChange={(e) => setChemicalA(e.target.value)}
                                  >
                                    {acids.map(acid => (
                                      <option key={acid.id} value={acid.id}>{acid.name} ({acid.formula})</option>
                                    ))}
                                  </select>
                                </div>
                                <div className="col-md-6">
                                  <label className="form-label fw-medium text-deep-red">Chemical B</label>
                                  <select 
                                    className="form-select"
                                    value={chemicalB}
                                    onChange={(e) => setChemicalB(e.target.value)}
                                  >
                                    {bases.map(base => (
                                      <option key={base.id} value={base.id}>{base.name} ({base.formula})</option>
                                    ))}
                                  </select>
                                </div>
                              </>
                            )}
                            
                            {/* Salt Formation Settings */}
                            {selectedSimulation === 'salt-formation' && (
                              <>
                                <div className="col-md-6">
                                  <label className="form-label fw-medium text-deep-red">Acid</label>
                                  <select 
                                    className="form-select"
                                    value={selectedAcid}
                                    onChange={(e) => setSelectedAcid(e.target.value)}
                                  >
                                    {acids.map(acid => (
                                      <option key={acid.id} value={acid.id}>{acid.name} ({acid.formula})</option>
                                    ))}
                                  </select>
                                </div>
                                <div className="col-md-6">
                                  <label className="form-label fw-medium text-deep-red">Base</label>
                                  <select 
                                    className="form-select"
                                    value={selectedBase}
                                    onChange={(e) => setSelectedBase(e.target.value)}
                                  >
                                    {bases.map(base => (
                                      <option key={base.id} value={base.id}>{base.name} ({base.formula})</option>
                                    ))}
                                  </select>
                                </div>
                              </>
                            )}
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
                                <p className="text-muted small mb-0">Set up your experiment by adjusting the settings.</p>
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
                          
                          {selectedSimulation === 'acid-base-titration' && (
                            <div className="bg-light-bg rounded-3 p-3 mt-3">
                              <h6 className="fw-semibold text-deep-red mb-2">Acid-Base Titration</h6>
                              <p className="text-muted small mb-0">
                                This simulation demonstrates the neutralization of hydrochloric acid (HCl) with sodium 
                                hydroxide (NaOH). The phenolphthalein indicator changes from colorless to pink when the 
                                solution becomes basic (pH {"> 8.2"}), signaling the endpoint of the titration.
                              </p>
                            </div>
                          )}
                          
                          {selectedSimulation === 'reaction-heat' && (
                            <div className="bg-light-bg rounded-3 p-3 mt-3">
                              <h6 className="fw-semibold text-deep-red mb-2">Chemical Reaction Heat</h6>
                              <p className="text-muted small mb-0">
                                This simulation shows how different chemical reactions can either release heat (exothermic) 
                                or absorb heat (endothermic). Observe the temperature changes and visual effects as 
                                different chemicals react.
                              </p>
                            </div>
                          )}
                          
                          {selectedSimulation === 'salt-formation' && (
                            <div className="bg-light-bg rounded-3 p-3 mt-3">
                              <h6 className="fw-semibold text-deep-red mb-2">Salt Formation</h6>
                              <p className="text-muted small mb-0">
                                This simulation demonstrates how acids and bases react to form salts and water. 
                                Different combinations of acids and bases produce different salts. Observe the 
                                chemical equations and the names of the salts formed.
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
        </main>
      </div>
    </div>
  );
}