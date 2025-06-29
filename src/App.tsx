import React, { useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { LoginForm } from './components/auth/LoginForm';
import { HomePage } from './components/home/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { FeaturesPage } from './components/pages/FeaturesPage';
import { ContactPage } from './components/pages/ContactPage';
import { NotFoundPage } from './components/pages/NotFoundPage';
import { CareersPage } from './components/pages/CareersPage';
import { PrivacyPage } from './components/pages/PrivacyPage';
import { TermsPage } from './components/pages/TermsPage';
import { HelpCenterPage } from './components/pages/HelpCenterPage';
import { DocumentationPage } from './components/pages/DocumentationPage';
import { CommunityPage } from './components/pages/CommunityPage';
import { ProgressTrackingPage } from './components/pages/ProgressTrackingPage';
import { PeriodicTablePage } from './components/pages/PeriodicTablePage';
import { PhysicsFormulasPage } from './components/pages/PhysicsFormulasPage';
import { BiologyNamesPage } from './components/pages/BiologyNamesPage';
import { CountryFlagsPage } from './components/pages/CountryFlagsPage';
import { InteractiveGlobePage } from './components/pages/InteractiveGlobePage';
import { ScientificCalculatorPage } from './components/pages/ScientificCalculatorPage';
import { UnitConverterPage } from './components/pages/UnitConverterPage';
import { DiscussionForumPage } from './components/pages/DiscussionForumPage';
import { LiveClassroomPage } from './components/pages/LiveClassroomPage';
import { DrawingToolPage } from './components/pages/DrawingToolPage';
import { QuestionMakerPage } from './components/pages/QuestionMakerPage';
import { FlashcardPage } from './components/pages/FlashcardPage';
import { WordbookPage } from './components/pages/WordbookPage';
import { StudentProgressPage } from './components/pages/StudentProgressPage';
import { ChemistrySimulationPage } from './components/pages/ChemistrySimulationPage';
import { PhysicsSimulationPage } from './components/pages/PhysicsSimulationPage';
import { BiologySimulationPage } from './components/pages/BiologySimulationPage';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { StudentDashboard } from './components/dashboard/StudentDashboard';
import { TeacherDashboard } from './components/dashboard/TeacherDashboard';
import { LabSimulators } from './components/labs/LabSimulators';
import { ProgressTracker } from './components/progress/ProgressTracker';

function MainApp() {
  const { user } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path: string) => {
    navigate(`/${path}`);
  };

  // Public pages that don't need authentication
  const publicPages = [
    'home', 'about', 'features', 'contact', 'careers', 'privacy', 'terms', 
    'help-center', 'documentation', 'community', 'progress-tracking', 
    'periodic-table', 'physics-formulas', 'biology-names', 'country-flags', 
    'interactive-globe', 'scientific-calculator', 'unit-converter', 
    'discussion-forum', 'live-classroom', 'drawing-tool', 'question-maker', 
    'flashcard', 'wordbook', 'student-progress', 'chemistry-simulation', 
    'physics-simulation', 'biology-simulation', '404'
  ];

  // Get current view from path
  const getViewFromPath = () => {
    const path = location.pathname.substring(1);
    return path || 'home';
  };

  const currentView = getViewFromPath();

  // Render content based on current view
  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'features':
        return <FeaturesPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      case 'careers':
        return <CareersPage onNavigate={handleNavigate} />;
      case 'privacy':
        return <PrivacyPage onNavigate={handleNavigate} />;
      case 'terms':
        return <TermsPage onNavigate={handleNavigate} />;
      case 'help-center':
        return <HelpCenterPage onNavigate={handleNavigate} />;
      case 'documentation':
        return <DocumentationPage onNavigate={handleNavigate} />;
      case 'community':
        return <CommunityPage onNavigate={handleNavigate} />;
      case 'progress-tracking':
        return <ProgressTrackingPage onNavigate={handleNavigate} />;
      case 'periodic-table':
        return <PeriodicTablePage onNavigate={handleNavigate} />;
      case 'physics-formulas':
        return <PhysicsFormulasPage onNavigate={handleNavigate} />;
      case 'biology-names':
        return <BiologyNamesPage onNavigate={handleNavigate} />;
      case 'country-flags':
        return <CountryFlagsPage onNavigate={handleNavigate} />;
      case 'interactive-globe':
        return <InteractiveGlobePage onNavigate={handleNavigate} />;
      case 'scientific-calculator':
        return <ScientificCalculatorPage onNavigate={handleNavigate} />;
      case 'unit-converter':
        return <UnitConverterPage onNavigate={handleNavigate} />;
      case 'discussion-forum':
        return <DiscussionForumPage onNavigate={handleNavigate} />;
      case 'live-classroom':
        return <LiveClassroomPage onNavigate={handleNavigate} />;
      case 'drawing-tool':
        return <DrawingToolPage onNavigate={handleNavigate} />;
      case 'question-maker':
        return <QuestionMakerPage onNavigate={handleNavigate} />;
      case 'flashcard':
        return <FlashcardPage onNavigate={handleNavigate} />;
      case 'wordbook':
        return <WordbookPage onNavigate={handleNavigate} />;
      case 'student-progress':
        return <StudentProgressPage onNavigate={handleNavigate} />;
      case 'chemistry-simulation':
        return <ChemistrySimulationPage onNavigate={handleNavigate} />;
      case 'physics-simulation':
        return <PhysicsSimulationPage onNavigate={handleNavigate} />;
      case 'biology-simulation':
        return <BiologySimulationPage onNavigate={handleNavigate} />;
      case 'dashboard':
        return user?.role === 'teacher' ? <TeacherDashboard /> : <StudentDashboard />;
      case 'labs':
        return <LabSimulators />;
      case 'progress':
        return <ProgressTracker />;
      case 'classes':
        return (
          <div className="p-4">
            <h1 className="display-5 fw-bold text-deep-red mb-4">My Classes</h1>
            <div className="row g-4">
              <div className="col-md-6 col-lg-4">
                <div className="card h-100 card-hover" onClick={() => handleNavigate('live-classroom')}>
                  <div className="card-body p-4 text-center">
                    <div className="bg-primary-red bg-opacity-10 rounded-3 d-inline-flex align-items-center justify-content-center mb-3"
                         style={{ width: '64px', height: '64px' }}>
                      <span className="text-primary-red fw-bold">LC</span>
                    </div>
                    <h5 className="fw-bold text-deep-red mb-2">Live Classroom</h5>
                    <p className="text-muted small">Join virtual classes</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="card h-100 card-hover" onClick={() => handleNavigate('drawing-tool')}>
                  <div className="card-body p-4 text-center">
                    <div className="bg-accent-red bg-opacity-10 rounded-3 d-inline-flex align-items-center justify-content-center mb-3"
                         style={{ width: '64px', height: '64px' }}>
                      <span className="text-accent-red fw-bold">DT</span>
                    </div>
                    <h5 className="fw-bold text-deep-red mb-2">Drawing Tool</h5>
                    <p className="text-muted small">Create diagrams and illustrations</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="card h-100 card-hover" onClick={() => handleNavigate('question-maker')}>
                  <div className="card-body p-4 text-center">
                    <div className="bg-success bg-opacity-10 rounded-3 d-inline-flex align-items-center justify-content-center mb-3"
                         style={{ width: '64px', height: '64px' }}>
                      <span className="text-success fw-bold">QM</span>
                    </div>
                    <h5 className="fw-bold text-deep-red mb-2">Question Maker</h5>
                    <p className="text-muted small">Create quizzes and assessments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'tools':
        return (
          <div className="p-4">
            <h1 className="display-5 fw-bold text-deep-red mb-4">Study Tools</h1>
            <div className="row g-4">
              <div className="col-md-6 col-lg-3">
                <div className="card h-100 card-hover" onClick={() => handleNavigate('periodic-table')}>
                  <div className="card-body p-4 text-center">
                    <div className="bg-primary-red bg-opacity-10 rounded-3 d-inline-flex align-items-center justify-content-center mb-3"
                         style={{ width: '64px', height: '64px' }}>
                      <span className="text-primary-red fw-bold">H</span>
                    </div>
                    <h5 className="fw-bold text-deep-red mb-2">Periodic Table</h5>
                    <p className="text-muted small">Interactive element explorer</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card h-100 card-hover" onClick={() => handleNavigate('physics-formulas')}>
                  <div className="card-body p-4 text-center">
                    <div className="bg-accent-red bg-opacity-10 rounded-3 d-inline-flex align-items-center justify-content-center mb-3"
                         style={{ width: '64px', height: '64px' }}>
                      <span className="text-accent-red fw-bold">F=ma</span>
                    </div>
                    <h5 className="fw-bold text-deep-red mb-2">Physics Formulas</h5>
                    <p className="text-muted small">Essential physics equations</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card h-100 card-hover" onClick={() => handleNavigate('biology-names')}>
                  <div className="card-body p-4 text-center">
                    <div className="bg-success bg-opacity-10 rounded-3 d-inline-flex align-items-center justify-content-center mb-3"
                         style={{ width: '64px', height: '64px' }}>
                      <span className="text-success fw-bold">🧬</span>
                    </div>
                    <h5 className="fw-bold text-deep-red mb-2">Scientific Names</h5>
                    <p className="text-muted small">Biology nomenclature</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card h-100 card-hover" onClick={() => handleNavigate('country-flags')}>
                  <div className="card-body p-4 text-center">
                    <div className="bg-info bg-opacity-10 rounded-3 d-inline-flex align-items-center justify-content-center mb-3"
                         style={{ width: '64px', height: '64px' }}>
                      <span className="text-info fw-bold">🌍</span>
                    </div>
                    <h5 className="fw-bold text-deep-red mb-2">Country Flags</h5>
                    <p className="text-muted small">World geography reference</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card h-100 card-hover" onClick={() => handleNavigate('interactive-globe')}>
                  <div className="card-body p-4 text-center">
                    <div className="bg-primary bg-opacity-10 rounded-3 d-inline-flex align-items-center justify-content-center mb-3"
                         style={{ width: '64px', height: '64px' }}>
                      <span className="text-primary fw-bold">🌐</span>
                    </div>
                    <h5 className="fw-bold text-deep-red mb-2">Interactive Globe</h5>
                    <p className="text-muted small">Explore world geography</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card h-100 card-hover" onClick={() => handleNavigate('scientific-calculator')}>
                  <div className="card-body p-4 text-center">
                    <div className="bg-warning bg-opacity-10 rounded-3 d-inline-flex align-items-center justify-content-center mb-3"
                         style={{ width: '64px', height: '64px' }}>
                      <span className="text-warning fw-bold">π</span>
                    </div>
                    <h5 className="fw-bold text-deep-red mb-2">Scientific Calculator</h5>
                    <p className="text-muted small">Advanced math functions</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card h-100 card-hover" onClick={() => handleNavigate('unit-converter')}>
                  <div className="card-body p-4 text-center">
                    <div className="bg-danger bg-opacity-10 rounded-3 d-inline-flex align-items-center justify-content-center mb-3"
                         style={{ width: '64px', height: '64px' }}>
                      <span className="text-danger fw-bold">↔️</span>
                    </div>
                    <h5 className="fw-bold text-deep-red mb-2">Unit Converter</h5>
                    <p className="text-muted small">Convert between units</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card h-100 card-hover" onClick={() => handleNavigate('discussion-forum')}>
                  <div className="card-body p-4 text-center">
                    <div className="bg-secondary bg-opacity-10 rounded-3 d-inline-flex align-items-center justify-content-center mb-3"
                         style={{ width: '64px', height: '64px' }}>
                      <span className="text-secondary fw-bold">💬</span>
                    </div>
                    <h5 className="fw-bold text-deep-red mb-2">Discussion Forum</h5>
                    <p className="text-muted small">Connect with peers</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card h-100 card-hover" onClick={() => handleNavigate('live-classroom')}>
                  <div className="card-body p-4 text-center">
                    <div className="bg-primary-red bg-opacity-10 rounded-3 d-inline-flex align-items-center justify-content-center mb-3"
                         style={{ width: '64px', height: '64px' }}>
                      <span className="text-primary-red fw-bold">LC</span>
                    </div>
                    <h5 className="fw-bold text-deep-red mb-2">Live Classroom</h5>
                    <p className="text-muted small">Join virtual classes</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card h-100 card-hover" onClick={() => handleNavigate('drawing-tool')}>
                  <div className="card-body p-4 text-center">
                    <div className="bg-accent-red bg-opacity-10 rounded-3 d-inline-flex align-items-center justify-content-center mb-3"
                         style={{ width: '64px', height: '64px' }}>
                      <span className="text-accent-red fw-bold">DT</span>
                    </div>
                    <h5 className="fw-bold text-deep-red mb-2">Drawing Tool</h5>
                    <p className="text-muted small">Create diagrams and illustrations</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card h-100 card-hover" onClick={() => handleNavigate('question-maker')}>
                  <div className="card-body p-4 text-center">
                    <div className="bg-success bg-opacity-10 rounded-3 d-inline-flex align-items-center justify-content-center mb-3"
                         style={{ width: '64px', height: '64px' }}>
                      <span className="text-success fw-bold">QM</span>
                    </div>
                    <h5 className="fw-bold text-deep-red mb-2">Question Maker</h5>
                    <p className="text-muted small">Create quizzes and assessments</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card h-100 card-hover" onClick={() => handleNavigate('flashcard')}>
                  <div className="card-body p-4 text-center">
                    <div className="bg-primary bg-opacity-10 rounded-3 d-inline-flex align-items-center justify-content-center mb-3"
                         style={{ width: '64px', height: '64px' }}>
                      <span className="text-primary fw-bold">FC</span>
                    </div>
                    <h5 className="fw-bold text-deep-red mb-2">Flashcards</h5>
                    <p className="text-muted small">Study with flashcards</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card h-100 card-hover" onClick={() => handleNavigate('wordbook')}>
                  <div className="card-body p-4 text-center">
                    <div className="bg-warning bg-opacity-10 rounded-3 d-inline-flex align-items-center justify-content-center mb-3"
                         style={{ width: '64px', height: '64px' }}>
                      <span className="text-warning fw-bold">WB</span>
                    </div>
                    <h5 className="fw-bold text-deep-red mb-2">Word Book</h5>
                    <p className="text-muted small">Build your vocabulary</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card h-100 card-hover" onClick={() => handleNavigate('student-progress')}>
                  <div className="card-body p-4 text-center">
                    <div className="bg-success bg-opacity-10 rounded-3 d-inline-flex align-items-center justify-content-center mb-3"
                         style={{ width: '64px', height: '64px' }}>
                      <span className="text-success fw-bold">SP</span>
                    </div>
                    <h5 className="fw-bold text-deep-red mb-2">Student Progress</h5>
                    <p className="text-muted small">Track student performance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return <NotFoundPage onNavigate={handleNavigate} />;
    }
  };

  // Show static pages without sidebar/header for non-authenticated users
  if (!user && publicPages.includes(currentView)) {
    return renderContent();
  }

  // Show login form when trying to access protected routes without authentication
  if (!user) {
    return <LoginForm onNavigate={handleNavigate} />;
  }

  // Show static pages without sidebar/header even for authenticated users
  if (publicPages.includes(currentView)) {
    return renderContent();
  }

  return (
    <div className="min-vh-100 bg-light-bg d-flex">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        activeView={currentView}
        onViewChange={handleNavigate}
      />
      
      <div className="flex-fill d-flex flex-column overflow-hidden">
        <Header
          onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)}
          isSidebarOpen={isSidebarOpen}
          onNavigate={handleNavigate}
        />
        
        <main className="flex-fill overflow-auto p-3">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Routes>
          <Route path="/*" element={<MainApp />} />
        </Routes>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;