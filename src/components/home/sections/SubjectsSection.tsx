import React from 'react';
import { motion } from 'framer-motion';
import { 
  Beaker, 
  Atom, 
  Microscope, 
  Calculator, 
  Code, 
  Languages, 
  History, 
  Palette,
  CheckCircle,
  Star
} from 'lucide-react';
import { Card } from '../../ui/Card';
import { Button } from '../../ui/Button';

interface SubjectsSectionProps {
  onNavigate: (view: string) => void;
}

export function SubjectsSection({ onNavigate }: SubjectsSectionProps) {
  const subjects = [
    {
      icon: Beaker,
      title: 'Physics',
      description: 'Explore the fundamental laws of nature through interactive simulations',
      features: ['Circuit Simulators', 'Motion Analysis', 'Wave Properties', 'Quantum Mechanics'],
      color: 'from-blue-500 to-purple-600',
      bgPattern: 'physics-pattern',
      students: '12.5K',
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
    },
    {
      icon: Atom,
      title: 'Chemistry',
      description: 'Dive into molecular structures and chemical reactions safely',
      features: ['Reaction Simulator', 'Periodic Table', 'Molecular Modeling', 'Lab Safety'],
      color: 'from-green-500 to-teal-600',
      bgPattern: 'chemistry-pattern',
      students: '9.8K',
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
    },
    {
      icon: Microscope,
      title: 'Biology',
      description: 'Study life sciences from cellular level to complex ecosystems',
      features: ['Cell Viewer', 'DNA Sequencing', 'Ecosystem Models', 'Human Anatomy'],
      color: 'from-emerald-500 to-green-600',
      bgPattern: 'biology-pattern',
      students: '15.2K',
      image: 'https://images.pexels.com/photos/2280568/pexels-photo-2280568.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
    },
    {
      icon: Calculator,
      title: 'Mathematics',
      description: 'Master mathematical concepts with visual and interactive tools',
      features: ['Graphing Tools', 'Equation Solver', 'Statistics Lab', 'Geometry Builder'],
      color: 'from-orange-500 to-red-600',
      bgPattern: 'math-pattern',
      students: '18.7K',
      image: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
    },
    {
      icon: Code,
      title: 'Computer Science',
      description: 'Learn programming and computational thinking step by step',
      features: ['Code Editor', 'Algorithm Visualizer', 'Project Builder', 'Debug Tools'],
      color: 'from-purple-500 to-indigo-600',
      bgPattern: 'cs-pattern',
      students: '22.1K',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
    },
    {
      icon: Languages,
      title: 'Languages',
      description: 'Practice speaking, writing, and comprehension with AI tutors',
      features: ['Speech Practice', 'Grammar Check', 'Cultural Context', 'Conversation AI'],
      color: 'from-pink-500 to-rose-600',
      bgPattern: 'lang-pattern',
      students: '8.9K',
      image: 'https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
    },
    {
      icon: History,
      title: 'History',
      description: 'Explore civilizations and historical events through immersive experiences',
      features: ['Timeline Explorer', 'Map Interactions', 'Document Analysis', 'Virtual Tours'],
      color: 'from-amber-500 to-orange-600',
      bgPattern: 'history-pattern',
      students: '6.4K',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
    },
    {
      icon: Palette,
      title: 'Arts & Design',
      description: 'Express creativity through digital art and design principles',
      features: ['Digital Canvas', 'Design Principles', 'Color Theory', 'Portfolio Builder'],
      color: 'from-violet-500 to-purple-600',
      bgPattern: 'art-pattern',
      students: '4.7K',
      image: 'https://images.pexels.com/photos/1053687/pexels-photo-1053687.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
    }
  ];

  return (
    <section id="subjects" className="py-5 bg-light-bg position-relative overflow-hidden">
      <div className="container-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-5"
        >
          <span className="badge bg-primary-red bg-opacity-10 text-primary-red px-3 py-2 rounded-pill mb-3">
            <Star className="me-1" size={16} />
            Comprehensive Learning
          </span>
          <h2 className="display-4 fw-bold text-deep-red mb-4">
            Master Every Subject
          </h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
            Dive deep into interactive learning experiences across all major academic disciplines. 
            From cutting-edge STEM simulations to creative arts tools.
          </p>
        </motion.div>

        <div className="row g-4">
          {subjects.map((subject, index) => (
            <div key={subject.title} className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="h-100"
              >
                <Card hover className="h-100 overflow-hidden border-0 shadow-lg">
                  <div className="row g-0 h-100">
                    <div className="col-md-5">
                      <div className="position-relative h-100">
                        <img
                          src={subject.image}
                          alt={subject.title}
                          className="w-100 h-100 object-fit-cover"
                        />
                        <div className={`position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white bg-gradient-to-br ${subject.color} bg-opacity-90`}>
                          <div className="position-absolute top-0 end-0 p-3">
                            <span className="badge bg-white bg-opacity-20 text-white small">
                              {subject.students} students
                            </span>
                          </div>
                          <div className="text-center">
                            <div className="bg-white bg-opacity-20 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                                 style={{ width: '80px', height: '80px' }}>
                              <subject.icon size={40} />
                            </div>
                            <h3 className="fw-bold mb-2">{subject.title}</h3>
                            <p className="opacity-90 small mb-0">{subject.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="card-body p-4 h-100 d-flex flex-column">
                        <h5 className="fw-bold text-deep-red mb-3">What You'll Learn:</h5>
                        <div className="flex-fill">
                          <div className="row g-2">
                            {subject.features.map((feature, idx) => (
                              <div key={idx} className="col-6">
                                <div className="d-flex align-items-center p-2 bg-light-bg rounded-3">
                                  <CheckCircle className="text-success me-2 flex-shrink-0" size={16} />
                                  <span className="small text-muted">{feature}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="mt-4 d-flex gap-2">
                          <Button variant="primary" size="sm" className="flex-fill" onClick={() => onNavigate('dashboard')}>
                            Start Learning
                          </Button>
                          <Button variant="secondary" size="sm" className="flex-fill">
                            Preview
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}