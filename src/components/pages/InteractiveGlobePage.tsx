import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen,
  Search,
  Globe,
  Eye,
  X,
  Filter,
  Download,
  Share2,
  MapPin,
  Users,
  Mountain,
  Waves,
  Thermometer,
  Clock,
  Info,
  Compass,
  Navigation
} from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';

interface InteractiveGlobePageProps {
  onNavigate: (view: string) => void;
}

interface Location {
  id: string;
  name: string;
  type: string;
  coordinates: { lat: number; lng: number };
  country: string;
  continent: string;
  description: string;
  facts: string[];
  climate: string;
  population?: string;
  elevation?: string;
  area?: string;
  image: string;
}

export function InteractiveGlobePage({ onNavigate }: InteractiveGlobePageProps) {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [viewMode, setViewMode] = useState('satellite');

  const locations: Location[] = [
    {
      id: '1',
      name: 'Mount Everest',
      type: 'mountain',
      coordinates: { lat: 27.9881, lng: 86.9250 },
      country: 'Nepal/China',
      continent: 'Asia',
      description: 'The highest mountain peak in the world, located in the Himalayas.',
      facts: [
        'Height: 8,848.86 meters (29,031.7 feet)',
        'First climbed by Edmund Hillary and Tenzing Norgay in 1953',
        'Known as Sagarmatha in Nepali and Chomolungma in Tibetan',
        'Over 300 people have died attempting to climb it'
      ],
      climate: 'Extreme cold, high altitude',
      elevation: '8,848.86 m',
      image: 'https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
    },
    {
      id: '2',
      name: 'Great Barrier Reef',
      type: 'natural-wonder',
      coordinates: { lat: -18.2871, lng: 147.6992 },
      country: 'Australia',
      continent: 'Oceania',
      description: 'The world\'s largest coral reef system, visible from space.',
      facts: [
        'Stretches over 2,300 kilometers',
        'Home to 1,500 species of fish',
        'Contains 400 types of coral',
        'UNESCO World Heritage Site since 1981'
      ],
      climate: 'Tropical marine',
      area: '344,400 km²',
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
    },
    {
      id: '3',
      name: 'Amazon Rainforest',
      type: 'forest',
      coordinates: { lat: -3.4653, lng: -62.2159 },
      country: 'Brazil (and 8 other countries)',
      continent: 'South America',
      description: 'The largest tropical rainforest in the world, often called the "lungs of the Earth".',
      facts: [
        'Covers 5.5 million square kilometers',
        'Home to 10% of known species',
        'Produces 20% of world\'s oxygen',
        'Contains 390 billion trees'
      ],
      climate: 'Tropical rainforest',
      area: '5.5 million km²',
      image: 'https://images.pexels.com/photos/975771/pexels-photo-975771.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
    },
    {
      id: '4',
      name: 'Sahara Desert',
      type: 'desert',
      coordinates: { lat: 23.4162, lng: 25.6628 },
      country: 'Multiple African countries',
      continent: 'Africa',
      description: 'The largest hot desert in the world, covering much of North Africa.',
      facts: [
        'Covers 9 million square kilometers',
        'Larger than the United States',
        'Temperatures can reach 58°C (136°F)',
        'Contains vast underground water reserves'
      ],
      climate: 'Hot desert',
      area: '9 million km²',
      image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
    },
    {
      id: '5',
      name: 'Tokyo',
      type: 'city',
      coordinates: { lat: 35.6762, lng: 139.6503 },
      country: 'Japan',
      continent: 'Asia',
      description: 'The capital of Japan and one of the world\'s most populous metropolitan areas.',
      facts: [
        'Population: 37.4 million (metropolitan area)',
        'World\'s largest urban economy',
        'Host of 2020 Summer Olympics',
        'Known for technology and culture'
      ],
      climate: 'Humid subtropical',
      population: '37.4 million',
      image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
    },
    {
      id: '6',
      name: 'Antarctica',
      type: 'continent',
      coordinates: { lat: -82.8628, lng: 135.0000 },
      country: 'International territory',
      continent: 'Antarctica',
      description: 'The southernmost continent, covered by ice and home to unique wildlife.',
      facts: [
        'Contains 90% of world\'s ice',
        'Coldest temperature recorded: -89.2°C',
        'No permanent human residents',
        'Home to penguins, seals, and whales'
      ],
      climate: 'Polar ice cap',
      area: '14 million km²',
      image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
    },
    {
      id: '7',
      name: 'Mariana Trench',
      type: 'ocean-feature',
      coordinates: { lat: 11.3733, lng: 142.5917 },
      country: 'International waters',
      continent: 'Pacific Ocean',
      description: 'The deepest part of the world\'s oceans, located in the Pacific.',
      facts: [
        'Deepest point: 11,034 meters below sea level',
        'Pressure is 1,086 times that at sea level',
        'Only 3 manned descents have reached the bottom',
        'Home to unique deep-sea creatures'
      ],
      climate: 'Deep ocean',
      elevation: '-11,034 m',
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
    },
    {
      id: '8',
      name: 'Northern Lights Zone',
      type: 'phenomenon',
      coordinates: { lat: 69.3451, lng: 88.1353 },
      country: 'Arctic Circle countries',
      continent: 'Arctic',
      description: 'The aurora borealis, a natural light display in polar regions.',
      facts: [
        'Caused by solar particles hitting Earth\'s atmosphere',
        'Best viewed between September and March',
        'Colors depend on gas types and altitude',
        'Visible in Alaska, Canada, Greenland, Iceland, Norway'
      ],
      climate: 'Arctic',
      image: 'https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
    }
  ];

  const locationTypes = [
    { id: 'all', label: 'All Locations', icon: Globe },
    { id: 'mountain', label: 'Mountains', icon: Mountain },
    { id: 'city', label: 'Cities', icon: MapPin },
    { id: 'natural-wonder', label: 'Natural Wonders', icon: Waves },
    { id: 'desert', label: 'Deserts', icon: Thermometer },
    { id: 'forest', label: 'Forests', icon: Mountain },
    { id: 'ocean-feature', label: 'Ocean Features', icon: Waves },
    { id: 'continent', label: 'Continents', icon: Globe },
    { id: 'phenomenon', label: 'Phenomena', icon: Eye }
  ];

  const viewModes = [
    { id: 'satellite', label: 'Satellite' },
    { id: 'terrain', label: 'Terrain' },
    { id: 'political', label: 'Political' },
    { id: 'climate', label: 'Climate' }
  ];

  const filteredLocations = locations.filter(location => {
    const matchesSearch = location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         location.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         location.continent.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === 'all' || location.type === selectedType;
    return matchesSearch && matchesType;
  });

  const getTypeIcon = (type: string) => {
    const typeData = locationTypes.find(t => t.id === type);
    return typeData?.icon || Globe;
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
                <Globe className="text-white" size={40} />
              </div>
              <h1 className="display-3 fw-bold mb-4">Interactive Globe Explorer</h1>
              <p className="lead mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                Explore our planet's most fascinating locations, from towering mountains 
                to deep ocean trenches. Discover geography, climate, and natural wonders.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <Button variant="secondary" size="lg" className="bg-white text-primary-red border-white">
                  <Download size={20} className="me-2" />
                  Download Map
                </Button>
                <Button variant="outline-secondary" size="lg" className="border-white text-white">
                  <Share2 size={20} className="me-2" />
                  Share Location
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Controls */}
      <section className="py-4 bg-white border-bottom">
        <div className="container-lg">
          <div className="row align-items-center">
            <div className="col-md-4">
              <div className="position-relative">
                <Search className="position-absolute text-muted" 
                        style={{ left: '12px', top: '50%', transform: 'translateY(-50%)', width: '16px', height: '16px' }} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search locations..."
                  className="form-control ps-5"
                  style={{ paddingLeft: '2.5rem' }}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex align-items-center gap-2">
                <span className="fw-medium text-deep-red">Type:</span>
                <select 
                  className="form-select"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  {locationTypes.map(type => (
                    <option key={type.id} value={type.id}>{type.label}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex align-items-center gap-2">
                <span className="fw-medium text-deep-red">View:</span>
                <select 
                  className="form-select"
                  value={viewMode}
                  onChange={(e) => setViewMode(e.target.value)}
                >
                  {viewModes.map(mode => (
                    <option key={mode.id} value={mode.id}>{mode.label}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Globe Simulation */}
      <section className="py-5 bg-light-bg">
        <div className="container-lg">
          <div className="row g-4">
            <div className="col-lg-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Card>
                  <div className="card-body p-0">
                    <div className="bg-gradient-to-br from-blue-500 to-green-600 rounded-top-3 p-5 text-white text-center position-relative"
                         style={{ height: '500px', background: 'linear-gradient(135deg, #3b82f6, #22c55e)' }}>
                      <div className="position-absolute top-50 start-50 translate-middle">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          className="bg-white bg-opacity-20 rounded-circle d-flex align-items-center justify-content-center"
                          style={{ width: '200px', height: '200px' }}
                        >
                          <Globe size={100} className="text-white" />
                        </motion.div>
                      </div>
                      <div className="position-absolute top-0 start-0 p-3">
                        <div className="d-flex align-items-center gap-2">
                          <Compass className="text-white" size={20} />
                          <span className="fw-medium">Interactive Globe</span>
                        </div>
                      </div>
                      <div className="position-absolute bottom-0 end-0 p-3">
                        <div className="d-flex align-items-center gap-2">
                          <Navigation className="text-white" size={16} />
                          <span className="small">Click locations to explore</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="fw-bold text-deep-red mb-2">Globe Controls</h4>
                      <div className="row g-3">
                        <div className="col-6">
                          <Button size="sm" className="w-100">
                            <Eye size={14} className="me-1" />
                            Zoom In
                          </Button>
                        </div>
                        <div className="col-6">
                          <Button size="sm" variant="secondary" className="w-100">
                            <Globe size={14} className="me-1" />
                            Reset View
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>

            <div className="col-lg-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card>
                  <div className="card-body p-4">
                    <h4 className="fw-bold text-deep-red mb-3">Featured Locations</h4>
                    <div className="d-flex flex-column gap-3" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                      {filteredLocations.slice(0, 6).map((location, index) => {
                        const IconComponent = getTypeIcon(location.type);
                        return (
                          <motion.div
                            key={location.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + index * 0.1 }}
                            className="p-3 border rounded-3 cursor-pointer hover-bg-light"
                            onClick={() => setSelectedLocation(location)}
                          >
                            <div className="d-flex align-items-center gap-3">
                              <div className="bg-primary-red bg-opacity-10 rounded-3 d-flex align-items-center justify-content-center"
                                   style={{ width: '40px', height: '40px' }}>
                                <IconComponent className="text-primary-red" size={20} />
                              </div>
                              <div className="flex-fill">
                                <h6 className="fw-semibold text-deep-red mb-1">{location.name}</h6>
                                <small className="text-muted">{location.country}</small>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-5 bg-white">
        <div className="container-lg">
          <h2 className="h3 fw-bold text-deep-red mb-4">Explore All Locations</h2>
          <div className="row g-4">
            {filteredLocations.map((location, index) => {
              const IconComponent = getTypeIcon(location.type);
              return (
                <div key={location.id} className="col-md-6 col-lg-4">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card hover className="h-100" onClick={() => setSelectedLocation(location)}>
                      <img
                        src={location.image}
                        alt={location.name}
                        className="card-img-top object-fit-cover"
                        style={{ height: '200px' }}
                      />
                      <div className="card-body p-4">
                        <div className="d-flex align-items-center gap-2 mb-2">
                          <IconComponent className="text-primary-red" size={16} />
                          <span className="badge bg-primary-red text-white text-capitalize">
                            {location.type.replace('-', ' ')}
                          </span>
                        </div>
                        
                        <h4 className="fw-bold text-deep-red mb-1">{location.name}</h4>
                        <p className="text-muted small mb-2">{location.country}</p>
                        <p className="text-muted small mb-3">{location.description}</p>
                        
                        <div className="d-flex align-items-center justify-content-between">
                          <small className="text-muted">{location.continent}</small>
                          <Button size="sm">
                            <Eye size={14} className="me-1" />
                            Explore
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Location Details Modal */}
      {selectedLocation && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050 }}
          onClick={() => setSelectedLocation(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-4 p-5 w-100"
            style={{ maxWidth: '800px', maxHeight: '90vh', overflowY: 'auto' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="d-flex align-items-center justify-content-between mb-4">
              <div>
                <h2 className="h3 fw-bold text-deep-red mb-0">{selectedLocation.name}</h2>
                <p className="text-muted mb-0">{selectedLocation.country}</p>
              </div>
              <Button variant="secondary" onClick={() => setSelectedLocation(null)}>
                <X size={16} />
              </Button>
            </div>

            <div className="row g-4 mb-4">
              <div className="col-md-6">
                <img
                  src={selectedLocation.image}
                  alt={selectedLocation.name}
                  className="img-fluid rounded-3"
                />
              </div>
              <div className="col-md-6">
                <h5 className="fw-bold text-deep-red mb-3">Location Details</h5>
                <div className="d-flex flex-column gap-2">
                  <div className="d-flex justify-content-between border-bottom pb-1">
                    <span className="fw-medium text-deep-red">Coordinates:</span>
                    <span className="text-muted">{selectedLocation.coordinates.lat}°, {selectedLocation.coordinates.lng}°</span>
                  </div>
                  <div className="d-flex justify-content-between border-bottom pb-1">
                    <span className="fw-medium text-deep-red">Continent:</span>
                    <span className="text-muted">{selectedLocation.continent}</span>
                  </div>
                  <div className="d-flex justify-content-between border-bottom pb-1">
                    <span className="fw-medium text-deep-red">Climate:</span>
                    <span className="text-muted">{selectedLocation.climate}</span>
                  </div>
                  {selectedLocation.population && (
                    <div className="d-flex justify-content-between border-bottom pb-1">
                      <span className="fw-medium text-deep-red">Population:</span>
                      <span className="text-muted">{selectedLocation.population}</span>
                    </div>
                  )}
                  {selectedLocation.elevation && (
                    <div className="d-flex justify-content-between border-bottom pb-1">
                      <span className="fw-medium text-deep-red">Elevation:</span>
                      <span className="text-muted">{selectedLocation.elevation}</span>
                    </div>
                  )}
                  {selectedLocation.area && (
                    <div className="d-flex justify-content-between border-bottom pb-1">
                      <span className="fw-medium text-deep-red">Area:</span>
                      <span className="text-muted">{selectedLocation.area}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="mb-4">
              <h5 className="fw-bold text-deep-red mb-2">Description</h5>
              <p className="text-muted">{selectedLocation.description}</p>
            </div>

            <div className="bg-light-bg rounded-3 p-4">
              <h5 className="fw-bold text-deep-red mb-3">Fascinating Facts</h5>
              <div className="d-flex flex-column gap-2">
                {selectedLocation.facts.map((fact, idx) => (
                  <div key={idx} className="d-flex align-items-start gap-2">
                    <Info className="text-primary-red mt-1 flex-shrink-0" size={16} />
                    <span className="text-muted">{fact}</span>
                  </div>
                ))}
              </div>
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
                  <button onClick={() => onNavigate('interactive-globe')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Interactive Globe
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('scientific-calculator')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Scientific Calculator
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('unit-converter')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Unit Converter
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('discussion-forum')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Discussion Forum
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