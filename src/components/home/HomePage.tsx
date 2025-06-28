import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Beaker, Calculator, Globe, MessageCircle, Award, ArrowRight, Play, CheckCircle, Star, TrendingUp, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { ThemeToggle } from '../ui/ThemeToggle';

interface HomePageProps {
  onNavigate: (view: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
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
      name: 'Physics',
      description: 'Explore the fundamental laws of nature through interactive simulations',
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      students: '45,000+',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      name: 'Chemistry',
      description: 'Discover molecular interactions and chemical reactions safely',
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      students: '38,000+',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      name: 'Biology',
      description: 'Study life sciences from cellular level to ecosystems',
      image: 'https://images.pexels.com/photos/2280568/pexels-photo-2280568.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      students: '52,000+',
      gradient: 'from-emerald-500 to-green-600'
    },
    {
      name: 'Mathematics',
      description: 'Master mathematical concepts with visual problem solving',
      image: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      students: '67,000+',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      name: 'Computer Science',
      description: 'Learn programming and computational thinking interactively',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      students: '73,000+',
      gradient: 'from-purple-500 to-indigo-600'
    },
    {
      name: 'Engineering',
      description: 'Design and build solutions to real-world problems',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      students: '41,000+',
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      name: 'Environmental Science',
      description: 'Understand our planet and environmental challenges',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      students: '29,000+',
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      name: 'Astronomy',
      description: 'Explore the cosmos and celestial phenomena',
      image: 'https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      students: '34,000+',
      gradient: 'from-violet-500 to-purple-600'
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

  const globalStats = [
    { number: '150+', label: 'Countries Served', icon: Globe },
    { number: '5,000+', label: 'Educational Institutions', icon: Users },
    { number: '2M+', label: 'Courses Completed', icon: BookOpen },
    { number: '98%', label: 'Completion Rate', icon: TrendingUp }
  ];

  const careerPaths = [
    {
      title: 'Research Scientist',
      description: 'Lead groundbreaking research in your field of expertise',
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      salary: '$85K - $150K',
      growth: '+15%',
      skills: ['Research Methods', 'Data Analysis', 'Scientific Writing', 'Lab Techniques']
    },
    {
      title: 'Software Engineer',
      description: 'Build innovative software solutions and applications',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      salary: '$95K - $180K',
      growth: '+22%',
      skills: ['Programming', 'Problem Solving', 'System Design', 'Collaboration']
    },
    {
      title: 'Healthcare Professional',
      description: 'Make a difference in people\'s lives through medical care',
      image: 'https://images.pexels.com/photos/2280568/pexels-photo-2280568.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      salary: '$75K - $200K',
      growth: '+7%',
      skills: ['Medical Knowledge', 'Patient Care', 'Communication', 'Critical Thinking']
    },
    {
      title: 'Business Analyst',
      description: 'Drive business decisions through data-driven insights',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      salary: '$70K - $130K',
      growth: '+11%',
      skills: ['Data Analysis', 'Business Strategy', 'Communication', 'Project Management']
    }
  ];

  const upcomingEvents = [
    {
      title: 'Global STEM Competition 2024',
      date: 'March 15, 2024',
      type: 'Competition',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
      participants: '2,500+',
      location: 'Virtual Event'
    },
    {
      title: 'AI in Education Webinar',
      date: 'March 22, 2024',
      type: 'Webinar',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
      participants: '1,200+',
      location: 'Online'
    },
    {
      title: 'Virtual Lab Workshop',
      date: 'April 5, 2024',
      type: 'Workshop',
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
      participants: '800+',
      location: 'Interactive Session'
    }
  ];

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
                <Button size="lg" className="justify-content-center" onClick={() => onNavigate('dashboard')}>
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

      {/* Master Every Subject Section */}
      <section className="py-5 bg-white">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-5"
          >
            <div className="badge bg-primary-red text-white px-3 py-2 rounded-pill mb-3">
              <Star className="me-1" size={16} />
              Master Every Subject
            </div>
            <h2 className="display-4 fw-bold text-deep-red mb-4">
              Explore Diverse Learning Paths
            </h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
              From fundamental sciences to cutting-edge technology, discover your passion 
              through our comprehensive subject offerings.
            </p>
          </motion.div>

          <div className="row g-4">
            {subjects.map((subject, index) => (
              <div key={subject.name} className="col-md-6 col-lg-3">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="h-100"
                >
                  <Card hover className="h-100 overflow-hidden subject-card-gradient">
                    <div className="position-relative">
                      <img
                        src={subject.image}
                        alt={subject.name}
                        className="card-img-top object-fit-cover"
                        style={{ height: '200px' }}
                      />
                      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-25"></div>
                      <div className="position-absolute top-0 end-0 m-3">
                        <span className="badge bg-primary-red text-white">
                          {subject.students} students
                        </span>
                      </div>
                    </div>
                    <div className="card-body p-4">
                      <h4 className="fw-bold text-deep-red mb-2">{subject.name}</h4>
                      <p className="text-muted small mb-3">{subject.description}</p>
                      <Button size="sm" className="w-100" onClick={() => onNavigate('dashboard')}>
                        Start Learning
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-5 bg-light-bg">
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

      {/* Global Reach & Impact Section */}
      <section className="py-5 bg-white">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-5"
          >
            <div className="badge bg-success text-white px-3 py-2 rounded-pill mb-3">
              <Globe className="me-1" size={16} />
              Global Impact
            </div>
            <h2 className="display-4 fw-bold text-deep-red mb-4">
              Transforming Education Worldwide
            </h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
              Our platform reaches learners across the globe, making quality education 
              accessible to everyone, everywhere.
            </p>
          </motion.div>

          <div className="row g-4">
            {globalStats.map((stat, index) => (
              <div key={stat.label} className="col-md-6 col-lg-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="text-center">
                    <div className="card-body p-4">
                      <div className="bg-primary-red bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                           style={{ width: '64px', height: '64px' }}>
                        <stat.icon className="text-primary-red" size={32} />
                      </div>
                      <div className="display-4 fw-bold text-primary-red mb-2">{stat.number}</div>
                      <div className="text-muted fw-medium">{stat.label}</div>
                    </div>
                  </Card>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Pathways Section */}
      <section className="py-5 bg-light-bg">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-5"
          >
            <div className="badge bg-warning text-dark px-3 py-2 rounded-pill mb-3">
              <TrendingUp className="me-1" size={16} />
              Career Pathways
            </div>
            <h2 className="display-4 fw-bold text-deep-red mb-4">
              Launch Your Dream Career
            </h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
              Explore high-demand career paths and understand the skills needed 
              to succeed in tomorrow's job market.
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
                  <Card hover className="h-100">
                    <img
                      src={career.image}
                      alt={career.title}
                      className="card-img-top object-fit-cover"
                      style={{ height: '200px' }}
                    />
                    <div className="card-body p-4">
                      <h4 className="fw-bold text-deep-red mb-2">{career.title}</h4>
                      <p className="text-muted small mb-3">{career.description}</p>
                      
                      <div className="d-flex justify-content-between mb-3">
                        <div>
                          <small className="text-muted d-block">Salary Range</small>
                          <span className="fw-semibold text-success">{career.salary}</span>
                        </div>
                        <div className="text-end">
                          <small className="text-muted d-block">Growth</small>
                          <span className="fw-semibold text-primary-red">{career.growth}</span>
                        </div>
                      </div>

                      <div className="mb-3">
                        <small className="text-muted d-block mb-2">Key Skills:</small>
                        <div className="d-flex flex-wrap gap-1">
                          {career.skills.slice(0, 2).map((skill, idx) => (
                            <span key={idx} className="badge bg-light-bg text-deep-red small">
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

                      <Button size="sm" className="w-100" onClick={() => onNavigate('careers')}>
                        Explore Path
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events & Webinars Section */}
      <section className="py-5 bg-white">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-5"
          >
            <div className="badge bg-info text-white px-3 py-2 rounded-pill mb-3">
              <Calendar className="me-1" size={16} />
              Upcoming Events
            </div>
            <h2 className="display-4 fw-bold text-deep-red mb-4">
              Join Our Learning Community
            </h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
              Participate in competitions, webinars, and workshops designed to 
              enhance your learning experience and connect with peers.
            </p>
          </motion.div>

          <div className="row g-4">
            {upcomingEvents.map((event, index) => (
              <div key={event.title} className="col-lg-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="h-100"
                >
                  <Card hover className="h-100">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="card-img-top object-fit-cover"
                      style={{ height: '200px' }}
                    />
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <span className="badge bg-primary-red text-white">{event.type}</span>
                        <small className="text-muted">{event.date}</small>
                      </div>
                      
                      <h4 className="fw-bold text-deep-red mb-3">{event.title}</h4>
                      
                      <div className="d-flex align-items-center mb-2">
                        <Users className="text-muted me-2" size={16} />
                        <small className="text-muted">{event.participants} registered</small>
                      </div>
                      
                      <div className="d-flex align-items-center mb-4">
                        <MapPin className="text-muted me-2" size={16} />
                        <small className="text-muted">{event.location}</small>
                      </div>

                      <Button size="sm" className="w-100">
                        <ExternalLink size={16} className="me-2" />
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
                      <div className="d-flex align-items-center mb-4">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="rounded-circle object-fit-cover me-3"
                          style={{ width: '48px', height: '48px' }}
                        />
                        <div className="flex-fill">
                          <h6 className="fw-semibold text-deep-red mb-0">{testimonial.name}</h6>
                          <small className="text-muted">{testimonial.role}</small>
                        </div>
                        <div className="d-flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="text-warning" size={16} fill="currentColor" />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted fst-italic lh-base">"{testimonial.content}"</p>
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
              <Button variant="secondary" size="lg" className="bg-white text-primary-red border-white" onClick={() => onNavigate('dashboard')}>
                Start Free Trial
              </Button>
              <Button variant="outline-secondary" size="lg" className="border-white text-white" onClick={() => onNavigate('contact')}>
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
              <h6 className="fw-semibold mb-3">Platform</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <button onClick={() => onNavigate('labs')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    STEM Labs
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('classes')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Virtual Classrooms
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('progress')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Progress Tracking
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('tools')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Scientific Tools
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