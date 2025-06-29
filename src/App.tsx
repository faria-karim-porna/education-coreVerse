import React, { useState } from 'react';
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
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { StudentDashboard } from './components/dashboard/StudentDashboard';
import { TeacherDashboard } from './components/dashboard/TeacherDashboard';
import { LabSimulators } from './components/labs/LabSimulators';
import { ProgressTracker } from './components/progress/ProgressTracker';

function MainApp() {
  const { user } = useAuth();
  const [activeView, setActiveView] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeView) {
      case 'home':
        return <HomePage onNavigate={setActiveView} />;
      case 'about':
        return <AboutPage onNavigate={setActiveView} />;
      case 'features':
        return <FeaturesPage onNavigate={setActiveView} />;
      case 'contact':
        return <ContactPage onNavigate={setActiveView} />;
      case 'careers':
        return <CareersPage onNavigate={setActiveView} />;
      case 'privacy':
        return <PrivacyPage onNavigate={setActiveView} />;
      case 'terms':
        return <TermsPage onNavigate={setActiveView} />;
      case 'help-center':
        return <HelpCenterPage onNavigate={setActiveView} />;
      case 'documentation':
        return <DocumentationPage onNavigate={setActiveView} />;
      case 'community':
        return <CommunityPage onNavigate={setActiveView} />;
      case 'progress-tracking':
        return <ProgressTrackingPage onNavigate={setActiveView} />;
      case 'periodic-table':
        return <PeriodicTablePage onNavigate={setActiveView} />;
      case 'physics-formulas':
        return <PhysicsFormulasPage onNavigate={setActiveView} />;
      case 'biology-names':
        return <BiologyNamesPage onNavigate={setActiveView} />;
      case 'country-flags':
        return <CountryFlagsPage onNavigate={setActiveView} />;
      case '404':
        return <NotFoundPage onNavigate={setActiveView} />;
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
            <p className="text-muted">Classes content coming soon...</p>
          </div>
        );
      case 'tools':
        return (
          <div className="p-4">
            <h1 className="display-5 fw-bold text-deep-red mb-4">Study Tools</h1>
            <div className="row g-4">
              <div className="col-md-6 col-lg-3">
                <div className="card h-100 card-hover" onClick={() => setActiveView('periodic-table')}>
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
                <div className="card h-100 card-hover" onClick={() => setActiveView('physics-formulas')}>
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
                <div className="card h-100 card-hover" onClick={() => setActiveView('biology-names')}>
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
                <div className="card h-100 card-hover" onClick={() => setActiveView('country-flags')}>
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
            </div>
          </div>
        );
      default:
        return user?.role === 'teacher' ? <TeacherDashboard /> : <StudentDashboard />;
    }
  };

  // Show static pages without sidebar/header for non-authenticated users
  if (!user && ['home', 'about', 'features', 'contact', 'careers', 'privacy', 'terms', 'help-center', 'documentation', 'community', 'progress-tracking', 'periodic-table', 'physics-formulas', 'biology-names', 'country-flags', '404'].includes(activeView)) {
    return renderContent();
  }

  // Show login form when trying to access protected routes without authentication
  if (!user) {
    return <LoginForm onNavigate={setActiveView} />;
  }

  // Show static pages without sidebar/header even for authenticated users
  if (['home', 'about', 'features', 'contact', 'careers', 'privacy', 'terms', 'help-center', 'documentation', 'community', 'progress-tracking', 'periodic-table', 'physics-formulas', 'biology-names', 'country-flags', '404'].includes(activeView)) {
    return renderContent();
  }

  return (
    <div className="min-vh-100 bg-light-bg d-flex">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        activeView={activeView}
        onViewChange={setActiveView}
      />
      
      <div className="flex-fill d-flex flex-column overflow-hidden">
        <Header
          onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)}
          isSidebarOpen={isSidebarOpen}
          onNavigate={setActiveView}
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
        <MainApp />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;