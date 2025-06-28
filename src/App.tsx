import React, { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { LoginForm } from './components/auth/LoginForm';
import { HomePage } from './components/home/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { FeaturesPage } from './components/pages/FeaturesPage';
import { ContactPage } from './components/pages/ContactPage';
import { NotFoundPage } from './components/pages/NotFoundPage';
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
            <p className="text-muted">Tools content coming soon...</p>
          </div>
        );
      default:
        return user?.role === 'teacher' ? <TeacherDashboard /> : <StudentDashboard />;
    }
  };

  // Show static pages without sidebar/header for non-authenticated users
  if (!user && ['home', 'about', 'features', 'contact', '404'].includes(activeView)) {
    return renderContent();
  }

  // Show login form when trying to access protected routes without authentication
  if (!user) {
    return <LoginForm onNavigate={setActiveView} />;
  }

  // Show static pages without sidebar/header even for authenticated users
  if (['home', 'about', 'features', 'contact', '404'].includes(activeView)) {
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