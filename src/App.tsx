import React, { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { LoginForm } from './components/auth/LoginForm';
import { HomePage } from './components/home/HomePage';
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

  // Show homepage when not logged in
  if (!user && activeView === 'home') {
    return <HomePage />;
  }

  // Show login form when trying to access protected routes without authentication
  if (!user) {
    return <LoginForm />;
  }

  const renderContent = () => {
    switch (activeView) {
      case 'home':
        return <HomePage />;
      case 'dashboard':
        return user.role === 'teacher' ? <TeacherDashboard /> : <StudentDashboard />;
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
        return user.role === 'teacher' ? <TeacherDashboard /> : <StudentDashboard />;
    }
  };

  // Show homepage without sidebar/header
  if (activeView === 'home') {
    return <HomePage />;
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
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
}

export default App;