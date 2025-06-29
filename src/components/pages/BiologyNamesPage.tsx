import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen,
  Search,
  Leaf,
  Eye,
  X,
  Filter,
  Download,
  Share2,
  TreePine,
  Bug,
  Fish,
  Bird
} from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';

interface BiologyNamesPageProps {
  onNavigate: (view: string) => void;
}

interface Organism {
  id: string;
  commonName: string;
  scientificName: string;
  kingdom: string;
  phylum: string;
  class: string;
  order: string;
  family: string;
  genus: string;
  species: string;
  category: string;
  habitat: string;
  description: string;
  characteristics: string[];
  conservation: string;
  image: string;
}

export function BiologyNamesPage({ onNavigate }: BiologyNamesPageProps) {
  const [selectedOrganism, setSelectedOrganism] = useState<Organism | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const organisms: Organism[] = [
    {
      id: '1',
      commonName: 'African Elephant',
      scientificName: 'Loxodonta africana',
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Proboscidea',
      family: 'Elephantidae',
      genus: 'Loxodonta',
      species: 'africana',
      category: 'mammal',
      habitat: 'African savannas, forests, and grasslands',
      description: 'Largest living terrestrial animal, known for intelligence and social behavior.',
      characteristics: ['Large ears', 'Trunk with two finger-like projections', 'Tusks in both sexes', 'Gray skin'],
      conservation: 'Vulnerable',
      image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
    },
    {
      id: '2',
      commonName: 'Great White Shark',
      scientificName: 'Carcharodon carcharias',
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Chondrichthyes',
      order: 'Lamniformes',
      family: 'Lamnidae',
      genus: 'Carcharodon',
      species: 'carcharias',
      category: 'fish',
      habitat: 'Coastal and offshore waters worldwide',
      description: 'Apex predator known for its size, speed, and powerful bite.',
      characteristics: ['Torpedo-shaped body', 'Triangular teeth', 'Counter-shaded coloration', 'Cartilaginous skeleton'],
      conservation: 'Vulnerable',
      image: 'https://images.pexels.com/photos/544551/pexels-photo-544551.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
    },
    {
      id: '3',
      commonName: 'Monarch Butterfly',
      scientificName: 'Danaus plexippus',
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Insecta',
      order: 'Lepidoptera',
      family: 'Nymphalidae',
      genus: 'Danaus',
      species: 'plexippus',
      category: 'insect',
      habitat: 'North and South America, migrating seasonally',
      description: 'Famous for its incredible migration journey and orange coloration.',
      characteristics: ['Orange wings with black borders', 'Toxic to predators', 'Long-distance migration', 'Four-stage lifecycle'],
      conservation: 'Endangered',
      image: 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
    },
    {
      id: '4',
      commonName: 'Giant Sequoia',
      scientificName: 'Sequoiadendron giganteum',
      kingdom: 'Plantae',
      phylum: 'Coniferophyta',
      class: 'Pinopsida',
      order: 'Pinales',
      family: 'Cupressaceae',
      genus: 'Sequoiadendron',
      species: 'giganteum',
      category: 'plant',
      habitat: 'Sierra Nevada mountains, California',
      description: 'Among the largest trees on Earth by volume, can live over 3,000 years.',
      characteristics: ['Massive trunk', 'Thick fire-resistant bark', 'Cone-bearing', 'Evergreen'],
      conservation: 'Endangered',
      image: 'https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
    },
    {
      id: '5',
      commonName: 'Bald Eagle',
      scientificName: 'Haliaeetus leucocephalus',
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Aves',
      order: 'Accipitriformes',
      family: 'Accipitridae',
      genus: 'Haliaeetus',
      species: 'leucocephalus',
      category: 'bird',
      habitat: 'Near large bodies of water across North America',
      description: 'National bird of the United States, powerful raptor and fish hunter.',
      characteristics: ['White head and tail feathers', 'Yellow beak and talons', 'Large wingspan', 'Excellent eyesight'],
      conservation: 'Least Concern',
      image: 'https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
    },
    {
      id: '6',
      commonName: 'Venus Flytrap',
      scientificName: 'Dionaea muscipula',
      kingdom: 'Plantae',
      phylum: 'Angiosperms',
      class: 'Eudicots',
      order: 'Caryophyllales',
      family: 'Droseraceae',
      genus: 'Dionaea',
      species: 'muscipula',
      category: 'plant',
      habitat: 'Wetlands of North and South Carolina',
      description: 'Carnivorous plant that traps and digests insects and spiders.',
      characteristics: ['Snap-trap mechanism', 'Trigger hairs', 'Digestive enzymes', 'Rosette growth pattern'],
      conservation: 'Vulnerable',
      image: 'https://images.pexels.com/photos/4505166/pexels-photo-4505166.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
    },
    {
      id: '7',
      commonName: 'Red Panda',
      scientificName: 'Ailurus fulgens',
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Carnivora',
      family: 'Ailuridae',
      genus: 'Ailurus',
      species: 'fulgens',
      category: 'mammal',
      habitat: 'Temperate forests of the Himalayas and southern China',
      description: 'Small mammal with distinctive red fur and ringed tail.',
      characteristics: ['Reddish-brown fur', 'Ringed tail', 'Semi-retractable claws', 'Bamboo diet'],
      conservation: 'Endangered',
      image: 'https://images.pexels.com/photos/3608263/pexels-photo-3608263.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
    },
    {
      id: '8',
      commonName: 'Blue Whale',
      scientificName: 'Balaenoptera musculus',
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Artiodactyla',
      family: 'Balaenopteridae',
      genus: 'Balaenoptera',
      species: 'musculus',
      category: 'mammal',
      habitat: 'Oceans worldwide',
      description: 'Largest animal ever known to have lived on Earth.',
      characteristics: ['Blue-gray coloration', 'Pleated throat grooves', 'Baleen plates', 'Heart size of small car'],
      conservation: 'Endangered',
      image: 'https://images.pexels.com/photos/892548/pexels-photo-892548.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Organisms', icon: Leaf },
    { id: 'mammal', label: 'Mammals', icon: TreePine },
    { id: 'bird', label: 'Birds', icon: Bird },
    { id: 'fish', label: 'Fish', icon: Fish },
    { id: 'insect', label: 'Insects', icon: Bug },
    { id: 'plant', label: 'Plants', icon: Leaf }
  ];

  const filteredOrganisms = organisms.filter(organism => {
    const matchesSearch = organism.commonName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         organism.scientificName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         organism.genus.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || organism.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getConservationColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'least concern': return 'bg-success';
      case 'vulnerable': return 'bg-warning';
      case 'endangered': return 'bg-danger';
      case 'critically endangered': return 'bg-dark';
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
                <Leaf className="text-white" size={40} />
              </div>
              <h1 className="display-3 fw-bold mb-4">Scientific Names Database</h1>
              <p className="lead mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                Explore the scientific classification and nomenclature of organisms 
                from across the tree of life. Learn taxonomy with detailed information.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <Button variant="secondary" size="lg" className="bg-white text-primary-red border-white">
                  <Download size={20} className="me-2" />
                  Download Guide
                </Button>
                <Button variant="outline-secondary" size="lg" className="border-white text-white">
                  <Share2 size={20} className="me-2" />
                  Share Database
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
                  placeholder="Search by common name, scientific name, or genus..."
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

      {/* Organisms Grid */}
      <section className="py-5 bg-light-bg">
        <div className="container-lg">
          <div className="row g-4">
            {filteredOrganisms.map((organism, index) => (
              <div key={organism.id} className="col-md-6 col-lg-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card hover className="h-100" onClick={() => setSelectedOrganism(organism)}>
                    <img
                      src={organism.image}
                      alt={organism.commonName}
                      className="card-img-top object-fit-cover"
                      style={{ height: '200px' }}
                    />
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <span className="badge bg-primary-red text-white text-capitalize">
                          {organism.category}
                        </span>
                        <span className={`badge ${getConservationColor(organism.conservation)} text-white`}>
                          {organism.conservation}
                        </span>
                      </div>
                      
                      <h4 className="fw-bold text-deep-red mb-1">{organism.commonName}</h4>
                      <p className="text-muted fst-italic mb-2">{organism.scientificName}</p>
                      <p className="text-muted small mb-3">{organism.description}</p>
                      
                      <div className="d-flex align-items-center justify-content-between">
                        <small className="text-muted">
                          {organism.genus} {organism.species}
                        </small>
                        <Button size="sm">
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

      {/* Organism Details Modal */}
      {selectedOrganism && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050 }}
          onClick={() => setSelectedOrganism(null)}
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
                <h2 className="h3 fw-bold text-deep-red mb-0">{selectedOrganism.commonName}</h2>
                <p className="text-muted fst-italic mb-0">{selectedOrganism.scientificName}</p>
              </div>
              <Button variant="secondary" onClick={() => setSelectedOrganism(null)}>
                <X size={16} />
              </Button>
            </div>

            <div className="row g-4 mb-4">
              <div className="col-md-6">
                <img
                  src={selectedOrganism.image}
                  alt={selectedOrganism.commonName}
                  className="img-fluid rounded-3"
                />
              </div>
              <div className="col-md-6">
                <h5 className="fw-bold text-deep-red mb-3">Taxonomic Classification</h5>
                <div className="d-flex flex-column gap-2">
                  {[
                    { label: 'Kingdom', value: selectedOrganism.kingdom },
                    { label: 'Phylum', value: selectedOrganism.phylum },
                    { label: 'Class', value: selectedOrganism.class },
                    { label: 'Order', value: selectedOrganism.order },
                    { label: 'Family', value: selectedOrganism.family },
                    { label: 'Genus', value: selectedOrganism.genus },
                    { label: 'Species', value: selectedOrganism.species }
                  ].map((item, idx) => (
                    <div key={idx} className="d-flex justify-content-between border-bottom pb-1">
                      <span className="fw-medium text-deep-red">{item.label}:</span>
                      <span className="text-muted">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-4">
              <h5 className="fw-bold text-deep-red mb-2">Description</h5>
              <p className="text-muted">{selectedOrganism.description}</p>
            </div>

            <div className="mb-4">
              <h5 className="fw-bold text-deep-red mb-2">Habitat</h5>
              <p className="text-muted">{selectedOrganism.habitat}</p>
            </div>

            <div className="mb-4">
              <h5 className="fw-bold text-deep-red mb-2">Key Characteristics</h5>
              <div className="d-flex flex-wrap gap-2">
                {selectedOrganism.characteristics.map((char, idx) => (
                  <span key={idx} className="badge bg-light-bg text-deep-red">{char}</span>
                ))}
              </div>
            </div>

            <div className="bg-light-bg rounded-3 p-3">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <h6 className="fw-bold text-deep-red mb-1">Conservation Status</h6>
                  <span className={`badge ${getConservationColor(selectedOrganism.conservation)} text-white`}>
                    {selectedOrganism.conservation}
                  </span>
                </div>
                <div className="text-end">
                  <small className="text-muted d-block">Category</small>
                  <span className="badge bg-primary-red text-white text-capitalize">
                    {selectedOrganism.category}
                  </span>
                </div>
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