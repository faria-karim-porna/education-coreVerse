import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Beaker, Calculator, Globe, MessageCircle, Award, ArrowRight, Play, CheckCircle, Atom, Microscope, Brain, Code, Palette, Music, Languages, History, TrendingUp, Star, Clock, Shield, Zap, Target, Lightbulb, Rocket, Heart, Monitor, Smartphone, Tablet, ChevronRight, Building, GraduationCap, Briefcase, MapPin, Calendar, Mail, Phone } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { ThemeToggle } from '../ui/ThemeToggle';

export function HomePage() {
  const features = [
    {
      icon: Beaker,
      title: 'STEM Lab Simulators',
      description: 'Interactive physics, chemistry, and biology simulations for hands-on learning',
      color: 'bg-primary-red'
    },
    {
      icon: Calculator,
      title: 'Scientific Tools',
      description: 'Advanced calculators, equation solvers, and plotting tools',
      color: 'bg-accent-red'
    },
    {
      icon: Globe,
      title: 'Knowledge Explorer',
      description: 'Interactive globe, historical timelines, and career exploration',
      color: 'bg-success'
    },
    {
      icon: MessageCircle,
      title: 'Language Practice',
      description: 'Conversation simulators and communication skill builders',
      color: 'bg-warning'
    },
    {
      icon: Users,
      title: 'Virtual Classrooms',
      description: 'Live sessions, assignments, and collaborative learning spaces',
      color: 'bg-deep-red'
    },
    {
      icon: Award,
      title: 'Progress Tracking',
      description: 'Comprehensive analytics and achievement systems',
      color: 'bg-primary-red'
    }
  ];

  const subjects = [
    {
      icon: Beaker,
      title: 'Physics',
      description: 'Explore the fundamental laws of nature through interactive simulations',
      features: ['Circuit Simulators', 'Motion Analysis', 'Wave Properties', 'Quantum Mechanics'],
      color: 'from-blue-500 to-purple-600',
      bgPattern: 'physics-pattern',
      students: '12.5K',
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
    },
    {
      icon: Atom,
      title: 'Chemistry',
      description: 'Dive into molecular structures and chemical reactions safely',
      features: ['Reaction Simulator', 'Periodic Table', 'Molecular Modeling', 'Lab Safety'],
      color: 'from-green-500 to-teal-600',
      bgPattern: 'chemistry-pattern',
      students: '9.8K',
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
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
      image: 'https://images.pexels.com/photos/6238050/pexels-photo-6238050.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
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

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Physics Professor',
      content: 'CoreVerse has transformed how I teach complex concepts. The lab simulators make abstract physics tangible for my students.',
      avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 5
    },
    {
      name: 'Alice Johnson',
      role: 'University Student',
      content: 'The interactive tools and progress tracking keep me motivated. I\'ve improved my understanding significantly.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 5
    },
    {
      name: 'Prof. Michael Rodriguez',
      role: 'Chemistry Department',
      content: 'The virtual lab experiments are incredibly detailed. Students can practice safely before real lab work.',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 5
    }
  ];

  const stats = [
    { number: '50K+', label: 'Active Students' },
    { number: '2K+', label: 'Educators' },
    { number: '100+', label: 'Lab Simulations' },
    { number: '95%', label: 'Success Rate' }
  ];

  const benefits = [
    {
      icon: Clock,
      title: '24/7 Access',
      description: 'Learn at your own pace, anytime, anywhere'
    },
    {
      icon: Shield,
      title: 'Safe Learning',
      description: 'Risk-free virtual experiments and simulations'
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: '95% improvement in student performance'
    },
    {
      icon: Users,
      title: 'Collaborative',
      description: 'Work together with peers and instructors'
    }
  ];

  const howItWorks = [
    {
      step: '01',
      title: 'Sign Up & Explore',
      description: 'Create your account and browse our extensive library of interactive content',
      icon: Rocket
    },
    {
      step: '02',
      title: 'Choose Your Path',
      description: 'Select subjects and difficulty levels that match your learning goals',
      icon: Target
    },
    {
      step: '03',
      title: 'Learn Interactively',
      description: 'Engage with simulations, labs, and collaborative tools',
      icon: Lightbulb
    },
    {
      step: '04',
      title: 'Track Progress',
      description: 'Monitor your achievements and get personalized recommendations',
      icon: TrendingUp
    }
  ];

  const platformFeatures = [
    {
      icon: Monitor,
      title: 'Desktop Experience',
      description: 'Full-featured platform with advanced tools and simulations'
    },
    {
      icon: Tablet,
      title: 'Tablet Optimized',
      description: 'Touch-friendly interface perfect for interactive learning'
    },
    {
      icon: Smartphone,
      title: 'Mobile Ready',
      description: 'Learn on-the-go with our responsive mobile experience'
    }
  ];

  const successStories = [
    {
      metric: '40%',
      description: 'Increase in test scores',
      detail: 'Students using CoreVerse show significant improvement'
    },
    {
      metric: '85%',
      description: 'Student engagement rate',
      detail: 'Higher participation in virtual labs vs traditional methods'
    },
    {
      metric: '92%',
      description: 'Teacher satisfaction',
      detail: 'Educators report improved teaching effectiveness'
    },
    {
      metric: '60%',
      description: 'Time saved on prep',
      detail: 'Teachers spend less time preparing lab materials'
    }
  ];

  const pricingPlans = [
    {
      name: 'Student',
      price: 'Free',
      description: 'Perfect for individual learners',
      features: ['Access to basic simulations', 'Progress tracking', 'Community support', 'Mobile app access'],
      popular: false
    },
    {
      name: 'Educator',
      price: '$29/month',
      description: 'Ideal for teachers and instructors',
      features: ['All student features', 'Classroom management', 'Assignment creation', 'Advanced analytics', 'Priority support'],
      popular: true
    },
    {
      name: 'Institution',
      price: 'Custom',
      description: 'For schools and universities',
      features: ['All educator features', 'Unlimited users', 'Custom branding', 'API access', 'Dedicated support'],
      popular: false
    }
  ];

  // NEW SECTION 1: Global Reach & Impact
  const globalStats = [
    {
      icon: Globe,
      number: '150+',
      label: 'Countries Served',
      description: 'Students worldwide using CoreVerse'
    },
    {
      icon: Building,
      number: '5,000+',
      label: 'Educational Institutions',
      description: 'Schools and universities trust us'
    },
    {
      icon: GraduationCap,
      number: '2M+',
      label: 'Courses Completed',
      description: 'Successful learning journeys'
    },
    {
      icon: Award,
      number: '98%',
      label: 'Completion Rate',
      description: 'Students finish what they start'
    }
  ];

  // NEW SECTION 2: Career Pathways
  const careerPaths = [
    {
      icon: Beaker,
      title: 'Research Scientist',
      description: 'Advance scientific knowledge through research and experimentation',
      skills: ['Laboratory Techniques', 'Data Analysis', 'Research Methods', 'Scientific Writing'],
      salary: '$75,000 - $120,000',
      growth: '+8% annually',
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2'
    },
    {
      icon: Code,
      title: 'Software Engineer',
      description: 'Design and develop innovative software solutions',
      skills: ['Programming', 'Problem Solving', 'System Design', 'Team Collaboration'],
      salary: '$85,000 - $150,000',
      growth: '+13% annually',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2'
    },
    {
      icon: Heart,
      title: 'Healthcare Professional',
      description: 'Make a difference in people\'s lives through medical care',
      skills: ['Medical Knowledge', 'Patient Care', 'Communication', 'Critical Thinking'],
      salary: '$70,000 - $200,000',
      growth: '+7% annually',
      image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2'
    },
    {
      icon: Briefcase,
      title: 'Business Analyst',
      description: 'Bridge technology and business to drive organizational success',
      skills: ['Data Analysis', 'Business Strategy', 'Communication', 'Project Management'],
      salary: '$65,000 - $110,000',
      growth: '+11% annually',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2'
    }
  ];

  // NEW SECTION 3: Upcoming Events & Webinars
  const upcomingEvents = [
    {
      title: 'Virtual Science Fair 2024',
      date: 'March 15, 2024',
      time: '2:00 PM EST',
      type: 'Competition',
      description: 'Showcase your scientific projects and compete with students worldwide',
      attendees: 1200,
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2'
    },
    {
      title: 'AI in Education Webinar',
      date: 'March 22, 2024',
      time: '4:00 PM EST',
      type: 'Webinar',
      description: 'Learn how artificial intelligence is transforming modern education',
      attendees: 850,
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2'
    },
    {
      title: 'Chemistry Lab Workshop',
      date: 'March 28, 2024',
      time: '1:00 PM EST',
      type: 'Workshop',
      description: 'Hands-on virtual chemistry experiments with expert guidance',
      attendees: 450,
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2'
    }
  ];

  return (
    <div className="min-vh-100">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="position-relative overflow-hidden bg-gradient-light py-5">
        <div className="container-lg py-5">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="display-3 display-lg-2 fw-bold text-deep-red mb-4 lh-1">
                Transform Your
                <span className="text-primary-red d-block">Learning Journey</span>
              </h1>
              <p className="lead text-muted mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                Experience interactive STEM education with virtual labs, scientific tools, 
                and collaborative classrooms designed for modern learners.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <Button size="lg" className="justify-content-center">
                  Start Learning Today
                  <ArrowRight size={20} className="ms-2" />
                </Button>
                <Button variant="secondary" size="lg" className="justify-content-center">
                  <Play size={20} className="me-2" />
                  Watch Demo
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-5 bg-white">
        <div className="container-lg">
          <div className="row g-4">
            {stats.map((stat, index) => (
              <div key={stat.label} className="col-6 col-lg-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="display-4 fw-bold text-primary-red mb-2">{stat.number}</div>
                  <div className="text-muted">{stat.label}</div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tilt Card Section */}
      <section className="py-5 bg-light-bg">
        <div className="container-lg">
          <div className="d-flex justify-content-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="position-relative tilt-card-container"
            >
              <div className="card shadow-lg border-0 p-4 transform-rotate-3 hover-transform-rotate-0 transition-all">
                <div className="row g-3">
                  <div className="col-6">
                    <div className="bg-light-bg p-3 rounded-3 text-center">
                      <Beaker className="text-primary-red mb-2" size={32} />
                      <h6 className="fw-semibold text-deep-red mb-0">Virtual Labs</h6>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="bg-card-bg p-3 rounded-3 text-center">
                      <Calculator className="text-accent-red mb-2" size={32} />
                      <h6 className="fw-semibold text-deep-red mb-0">Sci Tools</h6>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="bg-success bg-opacity-10 p-3 rounded-3 text-center">
                      <Globe className="text-success mb-2" size={32} />
                      <h6 className="fw-semibold text-deep-red mb-0">Explore</h6>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="bg-warning bg-opacity-10 p-3 rounded-3 text-center">
                      <Users className="text-warning mb-2" size={32} />
                      <h6 className="fw-semibold text-deep-red mb-0">Collaborate</h6>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 1: Global Reach & Impact */}
      <section className="py-5 bg-white">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-5"
          >
            <span className="badge bg-primary-red bg-opacity-10 text-primary-red px-3 py-2 rounded-pill mb-3">
              Global Impact
            </span>
            <h2 className="display-4 fw-bold text-deep-red mb-4">
              Transforming Education Worldwide
            </h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
              Join millions of learners and thousands of institutions across the globe 
              who trust CoreVerse for their educational journey.
            </p>
          </motion.div>

          <div className="row g-4">
            {globalStats.map((stat, index) => (
              <div key={stat.label} className="col-md-6 col-lg-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <Card className="h-100 border-0 shadow-sm">
                    <div className="card-body p-4">
                      <div className="bg-primary-red bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                           style={{ width: '64px', height: '64px' }}>
                        <stat.icon className="text-primary-red" size={32} />
                      </div>
                      <div className="display-5 fw-bold text-primary-red mb-2">{stat.number}</div>
                      <h5 className="fw-semibold text-deep-red mb-2">{stat.label}</h5>
                      <p className="text-muted small mb-0">{stat.description}</p>
                    </div>
                  </Card>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Redesigned Subject-wise Section */}
      <section id="subjects" className="py-5 bg-light-bg position-relative overflow-hidden">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-5"
          >
            <span className="badge bg-primary-red bg-opacity-10 text-primary-red px-3 py-2 rounded-pill mb-3">
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
                            <Button variant="primary" size="sm" className="flex-fill">
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

      {/* NEW SECTION 2: Career Pathways */}
      <section className="py-5 bg-white">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-5"
          >
            <span className="badge bg-success bg-opacity-10 text-success px-3 py-2 rounded-pill mb-3">
              Career Development
            </span>
            <h2 className="display-4 fw-bold text-deep-red mb-4">
              Explore Career Pathways
            </h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
              Discover exciting career opportunities and the skills you need to succeed. 
              Our platform prepares you for the jobs of tomorrow.
            </p>
          </motion.div>

          <div className="row g-4">
            {careerPaths.map((career, index) => (
              <div key={career.title} className="col-md-6 col-lg-3">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="h-100"
                >
                  <Card hover className="h-100 border-0 shadow-sm">
                    <div className="position-relative">
                      <img
                        src={career.image}
                        alt={career.title}
                        className="card-img-top"
                        style={{ height: '200px', objectFit: 'cover' }}
                      />
                      <div className="position-absolute top-0 end-0 p-3">
                        <span className="badge bg-success text-white">{career.growth}</span>
                      </div>
                    </div>
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center mb-3">
                        <div className="bg-primary-red bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3"
                             style={{ width: '48px', height: '48px' }}>
                          <career.icon className="text-primary-red" size={24} />
                        </div>
                        <div>
                          <h5 className="fw-bold text-deep-red mb-0">{career.title}</h5>
                          <small className="text-success fw-medium">{career.salary}</small>
                        </div>
                      </div>
                      <p className="text-muted small mb-3">{career.description}</p>
                      <div className="mb-3">
                        <h6 className="fw-semibold text-deep-red mb-2">Key Skills:</h6>
                        <div className="d-flex flex-wrap gap-1">
                          {career.skills.slice(0, 2).map((skill, idx) => (
                            <span key={idx} className="badge bg-light-bg text-muted small">
                              {skill}
                            </span>
                          ))}
                          {career.skills.length > 2 && (
                            <span className="badge bg-light-bg text-muted small">
                              +{career.skills.length - 2} more
                            </span>
                          )}
                        </div>
                      </div>
                      <Button variant="secondary" size="sm" className="w-100">
                        Explore Path
                        <ChevronRight size={16} className="ms-1" />
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-5 bg-light-bg">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-5"
          >
            <span className="badge bg-success bg-opacity-10 text-success px-3 py-2 rounded-pill mb-3">
              Simple Process
            </span>
            <h2 className="display-4 fw-bold text-deep-red mb-4">
              How CoreVerse Works
            </h2>
            <p className="lead text-muted">
              Get started with interactive learning in just four simple steps
            </p>
          </motion.div>

          <div className="row g-4">
            {howItWorks.map((step, index) => (
              <div key={step.step} className="col-md-6 col-lg-3">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="position-relative mb-4">
                    <div className="bg-primary-red rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                         style={{ width: '80px', height: '80px' }}>
                      <step.icon className="text-white" size={32} />
                    </div>
                    <div className="position-absolute top-0 start-0 bg-white border border-primary-red rounded-circle d-flex align-items-center justify-content-center"
                         style={{ width: '32px', height: '32px', transform: 'translate(-8px, -8px)' }}>
                      <span className="fw-bold text-primary-red small">{step.step}</span>
                    </div>
                  </div>
                  <h4 className="fw-bold text-deep-red mb-3">{step.title}</h4>
                  <p className="text-muted">{step.description}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION 3: Upcoming Events & Webinars */}
      <section className="py-5 bg-white">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-5"
          >
            <span className="badge bg-warning bg-opacity-10 text-warning px-3 py-2 rounded-pill mb-3">
              Community Events
            </span>
            <h2 className="display-4 fw-bold text-deep-red mb-4">
              Upcoming Events & Webinars
            </h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
              Join our vibrant community of learners and educators. Participate in competitions, 
              workshops, and webinars to enhance your learning experience.
            </p>
          </motion.div>

          <div className="row g-4">
            {upcomingEvents.map((event, index) => (
              <div key={event.title} className="col-md-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="h-100"
                >
                  <Card hover className="h-100 border-0 shadow-sm">
                    <div className="position-relative">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="card-img-top"
                        style={{ height: '200px', objectFit: 'cover' }}
                      />
                      <div className="position-absolute top-0 start-0 p-3">
                        <span className="badge bg-primary-red text-white">{event.type}</span>
                      </div>
                    </div>
                    <div className="card-body p-4">
                      <h5 className="fw-bold text-deep-red mb-2">{event.title}</h5>
                      <p className="text-muted small mb-3">{event.description}</p>
                      
                      <div className="d-flex align-items-center mb-2">
                        <Calendar className="text-muted me-2" size={16} />
                        <span className="small text-muted">{event.date}</span>
                      </div>
                      
                      <div className="d-flex align-items-center mb-3">
                        <Clock className="text-muted me-2" size={16} />
                        <span className="small text-muted">{event.time}</span>
                      </div>
                      
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <div className="d-flex align-items-center">
                          <Users className="text-success me-2" size={16} />
                          <span className="small text-success fw-medium">{event.attendees} registered</span>
                        </div>
                      </div>
                      
                      <Button variant="primary" size="sm" className="w-100">
                        Register Now
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-5 bg-light-bg">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-5"
          >
            <span className="badge bg-warning bg-opacity-10 text-warning px-3 py-2 rounded-pill mb-3">
              Proven Impact
            </span>
            <h2 className="display-4 fw-bold text-deep-red mb-4">
              Success Stories
            </h2>
            <p className="lead text-muted">
              Real results from educators and students worldwide
            </p>
          </motion.div>

          <div className="row g-4">
            {successStories.map((story, index) => (
              <div key={story.metric} className="col-md-6 col-lg-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <Card className="h-100">
                    <div className="card-body p-4">
                      <div className="display-3 fw-bold text-primary-red mb-2">{story.metric}</div>
                      <h5 className="fw-semibold text-deep-red mb-2">{story.description}</h5>
                      <p className="text-muted small mb-0">{story.detail}</p>
                    </div>
                  </Card>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features Section */}
      <section className="py-5 bg-white">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-5"
          >
            <span className="badge bg-info bg-opacity-10 text-info px-3 py-2 rounded-pill mb-3">
              Multi-Platform
            </span>
            <h2 className="display-4 fw-bold text-deep-red mb-4">
              Learn Anywhere, Anytime
            </h2>
            <p className="lead text-muted">
              Access CoreVerse on all your devices with a seamless experience
            </p>
          </motion.div>

          <div className="row g-4 align-items-center">
            {platformFeatures.map((feature, index) => (
              <div key={feature.title} className="col-md-4">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="bg-white rounded-4 p-4 shadow-sm">
                    <div className="bg-primary-red bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                         style={{ width: '64px', height: '64px' }}>
                      <feature.icon className="text-primary-red" size={32} />
                    </div>
                    <h4 className="fw-bold text-deep-red mb-2">{feature.title}</h4>
                    <p className="text-muted mb-0">{feature.description}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-5 bg-light-bg">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-5"
          >
            <h2 className="display-4 fw-bold text-deep-red mb-4">
              Why Choose CoreVerse?
            </h2>
            <p className="lead text-muted">
              Experience the future of education with our innovative platform
            </p>
          </motion.div>

          <div className="row g-4">
            {benefits.map((benefit, index) => (
              <div key={benefit.title} className="col-md-6 col-lg-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-primary-red bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
                       style={{ width: '80px', height: '80px' }}>
                    <benefit.icon className="text-primary-red" size={40} />
                  </div>
                  <h4 className="fw-bold text-deep-red mb-3">{benefit.title}</h4>
                  <p className="text-muted">{benefit.description}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-5 bg-white">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-5"
          >
            <h2 className="display-4 fw-bold text-deep-red mb-4">
              Everything You Need to Excel
            </h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
              Comprehensive educational tools designed to enhance learning outcomes 
              for students and teaching effectiveness for educators.
            </p>
          </motion.div>

          <div className="row g-4">
            {features.map((feature, index) => (
              <div key={feature.title} className="col-md-6 col-lg-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="h-100"
                >
                  <Card hover className="h-100">
                    <div className="card-body p-4">
                      <div className={`${feature.color} rounded-4 d-inline-flex align-items-center justify-content-center mb-4`}
                           style={{ width: '64px', height: '64px' }}>
                        <feature.icon className="text-white" size={32} />
                      </div>
                      <h4 className="fw-bold text-deep-red mb-3">{feature.title}</h4>
                      <p className="text-muted lh-base">{feature.description}</p>
                    </div>
                  </Card>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-5 bg-light-bg">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-5"
          >
            <h2 className="display-4 fw-bold text-deep-red mb-4">
              Trusted by Educators Worldwide
            </h2>
            <p className="lead text-muted">
              See what teachers and students are saying about CoreVerse
            </p>
          </motion.div>

          <div className="row g-4">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.name} className="col-md-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="h-100"
                >
                  <Card className="h-100">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="text-warning" size={16} fill="currentColor" />
                        ))}
                      </div>
                      <p className="text-muted fst-italic lh-base mb-4">"{testimonial.content}"</p>
                      <div className="d-flex align-items-center">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="rounded-circle object-fit-cover me-3"
                          style={{ width: '48px', height: '48px' }}
                        />
                        <div>
                          <h6 className="fw-semibold text-deep-red mb-0">{testimonial.name}</h6>
                          <small className="text-muted">{testimonial.role}</small>
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

      {/* Pricing Section */}
      <section id="pricing" className="py-5 bg-white">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-5"
          >
            <h2 className="display-4 fw-bold text-deep-red mb-4">
              Choose Your Plan
            </h2>
            <p className="lead text-muted">
              Flexible pricing options for every learning need
            </p>
          </motion.div>

          <div className="row g-4 justify-content-center">
            {pricingPlans.map((plan, index) => (
              <div key={plan.name} className="col-md-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="h-100"
                >
                  <Card className={`h-100 position-relative ${plan.popular ? 'border-primary-red' : ''}`}>
                    {plan.popular && (
                      <div className="position-absolute top-0 start-50 translate-middle">
                        <span className="badge bg-primary-red text-white px-3 py-2">Most Popular</span>
                      </div>
                    )}
                    <div className="card-body p-4 text-center">
                      <h3 className="fw-bold text-deep-red mb-2">{plan.name}</h3>
                      <div className="mb-3">
                        <span className="display-4 fw-bold text-primary-red">{plan.price}</span>
                        {plan.price !== 'Free' && plan.price !== 'Custom' && (
                          <span className="text-muted">/month</span>
                        )}
                      </div>
                      <p className="text-muted mb-4">{plan.description}</p>
                      <ul className="list-unstyled text-start mb-4">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="d-flex align-items-center mb-2">
                            <CheckCircle className="text-success me-2" size={16} />
                            <span className="small">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button 
                        variant={plan.popular ? 'primary' : 'secondary'} 
                        className="w-100"
                      >
                        {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-gradient-primary text-white">
        <div className="container-lg text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="display-4 fw-bold mb-4">
              Ready to Transform Education?
            </h2>
            <p className="lead mb-5 opacity-75">
              Join thousands of educators and students already using CoreVerse 
              to enhance their learning experience.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <Button variant="secondary" size="lg" className="bg-white text-primary-red border-white">
                Start Free Trial
              </Button>
              <Button variant="outline-secondary" size="lg" className="border-white text-white">
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-deep-red text-white py-5">
        <div className="container-lg">
          <div className="row g-4">
            <div className="col-lg-3">
              <div className="d-flex align-items-center gap-2 mb-4">
                <div className="bg-primary-red rounded-3 d-flex align-items-center justify-content-center"
                     style={{ width: '32px', height: '32px' }}>
                  <BookOpen className="text-white" size={20} />
                </div>
                <span className="fw-bold h5 mb-0">CoreVerse</span>
              </div>
              <p className="text-white-50 mb-4">
                Transforming education through interactive technology and innovative learning experiences.
              </p>
              <div className="d-flex align-items-center gap-3">
                <Mail className="text-white-50" size={20} />
                <span className="text-white-50">contact@coreverse.edu</span>
              </div>
              <div className="d-flex align-items-center gap-3 mt-2">
                <Phone className="text-white-50" size={20} />
                <span className="text-white-50">+1 (555) 123-4567</span>
              </div>
            </div>
            
            <div className="col-lg-3">
              <h6 className="fw-semibold mb-3">Platform</h6>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">STEM Labs</a></li>
                <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Virtual Classrooms</a></li>
                <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Progress Tracking</a></li>
                <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Scientific Tools</a></li>
              </ul>
            </div>
            
            <div className="col-lg-3">
              <h6 className="fw-semibold mb-3">Support</h6>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Help Center</a></li>
                <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Documentation</a></li>
                <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Community</a></li>
                <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Contact Us</a></li>
              </ul>
            </div>
            
            <div className="col-lg-3">
              <h6 className="fw-semibold mb-3">Company</h6>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">About</a></li>
                <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Careers</a></li>
                <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Privacy</a></li>
                <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Terms</a></li>
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