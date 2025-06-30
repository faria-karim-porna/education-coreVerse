import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { mockLabSimulators } from '../../data/mockData';
import { useNavigate } from 'react-router-dom';

export function LabSimulators() {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedSim, setSelectedSim] = useState<string | null>(null);
  const navigate = useNavigate();

  const filteredSims = selectedType === 'all' 
    ? mockLabSimulators 
    : mockLabSimulators.filter(sim => sim.type === selectedType);

  const getDifficultyBadgeClass = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-success text-white';
      case 'intermediate': return 'bg-warning text-dark';
      case 'advanced': return 'bg-danger text-white';
      default: return 'bg-secondary text-white';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'physics': return 'bg-primary-red';
      case 'chemistry': return 'bg-accent-red';
      case 'biology': return 'bg-success';
      default: return 'bg-secondary';
    }
  };

  const handleLaunchClick = (type: string) => {
    if (type === 'chemistry') {
      navigate('/chemistry-simulation');
    } else if (type === 'physics') {
      navigate('/physics-simulation');
    } else if (type === 'biology') {
      navigate('/biology-simulation');
    }
  };

  return (
    <div className="container-fluid">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-secondary text-white p-4 p-md-5 rounded-4 mb-4"
      >
        <h1 className="display-5 fw-bold mb-2">STEM Lab Simulators</h1>
        <p className="lead opacity-75">Explore interactive science simulations</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="d-flex flex-wrap gap-2 mb-4"
      >
        {['all', 'physics', 'chemistry', 'biology'].map((type) => (
          <Button
            key={type}
            variant={selectedType === type ? 'primary' : 'secondary'}
            onClick={() => setSelectedType(type)}
            className="text-capitalize"
          >
            {type}
          </Button>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="row g-4"
      >
        {filteredSims.map((sim, index) => {
          const IconComponent = Icons[sim.icon as keyof typeof Icons] as React.ComponentType<{ size?: number; className?: string }>;
          
          return (
            <div key={sim.id} className="col-md-6 col-lg-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="h-100"
              >
                <Card hover className="h-100" onClick={() => setSelectedSim(sim.id)}>
                  <div className="card-body p-4">
                    <div className="d-flex align-items-start justify-content-between mb-3">
                      <div className={`p-3 rounded-3 ${getTypeColor(sim.type)}`}>
                        <IconComponent size={24} className="text-white" />
                      </div>
                      <span className={`badge ${getDifficultyBadgeClass(sim.difficulty)} text-capitalize`}>
                        {sim.difficulty}
                      </span>
                    </div>
                    
                    <h4 className="fw-semibold text-deep-red mb-2">{sim.name}</h4>
                    <p className="text-muted small mb-4 flex-fill">{sim.description}</p>
                    
                    <div className="d-flex align-items-center justify-content-between">
                      <span className="text-muted small text-capitalize fw-medium">
                        {sim.type}
                      </span>
                      <Button size="sm" onClick={(e) => {
                        e.stopPropagation();
                        handleLaunchClick(sim.type);
                      }}>
                        Launch
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          );
        })}
      </motion.div>

      {selectedSim && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050 }}
          onClick={() => setSelectedSim(null)}
        >
          <Card className="w-100 overflow-auto" style={{ maxWidth: '800px', maxHeight: '90vh' }} onClick={(e) => e.stopPropagation()}>
            <div className="card-body p-4">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h2 className="h3 fw-bold text-deep-red mb-0">
                  {filteredSims.find(s => s.id === selectedSim)?.name}
                </h2>
                <Button variant="secondary" onClick={() => setSelectedSim(null)}>
                  Close
                </Button>
              </div>
              
              <div className="bg-light-bg rounded-3 p-5 text-center">
                <div className="bg-primary-red rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
                     style={{ width: '64px', height: '64px' }}>
                  <Icons.Play className="text-white" size={32} />
                </div>
                <h4 className="fw-semibold text-deep-red mb-2">
                  Simulator Loading...
                </h4>
                <p className="text-muted">
                  This is a demo placeholder. In a real implementation, 
                  this would load the interactive simulator.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      )}
    </div>
  );
}