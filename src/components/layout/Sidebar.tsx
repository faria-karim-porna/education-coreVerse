import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  Beaker, 
  Calculator, 
  Users, 
  BarChart3, 
  PenTool, 
  Globe, 
  MessageCircle,
  Home,
  Settings,
  X
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeView: string;
  onViewChange: (view: string) => void;
}

export function Sidebar({ isOpen, onClose, activeView, onViewChange }: SidebarProps) {
  const { user } = useAuth();

  const studentMenuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'classes', label: 'My Classes', icon: BookOpen },
    { id: 'labs', label: 'STEM Labs', icon: Beaker },
    { id: 'tools', label: 'Study Tools', icon: Calculator },
    { id: 'progress', label: 'Progress', icon: BarChart3 },
    { id: 'portfolio', label: 'Portfolio', icon: PenTool },
  ];

  const teacherMenuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'classes', label: 'My Classes', icon: BookOpen },
    { id: 'students', label: 'Students', icon: Users },
    { id: 'assignments', label: 'Assignments', icon: PenTool },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'tools', label: 'Teaching Tools', icon: Calculator },
  ];

  const commonItems = [
    { id: 'knowledge', label: 'Knowledge Base', icon: Globe },
    { id: 'communication', label: 'Communication', icon: MessageCircle },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const menuItems = user?.role === 'teacher' ? teacherMenuItems : studentMenuItems;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-lg-none"
            style={{ zIndex: 1040 }}
            onClick={onClose}
          />
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            className="position-fixed position-lg-static top-0 start-0 bottom-0 paper-sidebar d-flex flex-column"
            style={{ width: '256px', zIndex: 1050 }}
          >
            <div className="p-4 border-bottom d-flex align-items-center justify-content-between justify-content-lg-center">
              <div className="d-flex align-items-center gap-2">
                <div className="icon-paper-container bg-primary-red d-flex align-items-center justify-content-center"
                     style={{ width: '32px', height: '32px' }}>
                  <span className="text-white fw-bold small icon">CV</span>
                </div>
                <span className="fw-bold h4 text-deep-red mb-0">CoreVerse</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="btn btn-paper-secondary p-2 d-lg-none organic-shape-1"
              >
                <X size={20} />
              </motion.button>
            </div>

            <nav className="p-4 flex-fill">
              <div className="d-flex flex-column gap-1">
                {menuItems.map((item) => (
                  <motion.button
                    key={item.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      onViewChange(item.id);
                      onClose();
                    }}
                    className={`nav-paper-item btn text-start d-flex align-items-center gap-3 px-3 py-2 ${
                      activeView === item.id ? 'active' : ''
                    }`}
                  >
                    <item.icon size={20} />
                    <span className="fw-medium">{item.label}</span>
                  </motion.button>
                ))}
              </div>

              <div className="mt-4 pt-4 border-top">
                <div className="d-flex flex-column gap-1">
                  {commonItems.map((item) => (
                    <motion.button
                      key={item.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        onViewChange(item.id);
                        onClose();
                      }}
                      className={`nav-paper-item btn text-start d-flex align-items-center gap-3 px-3 py-2 ${
                        activeView === item.id ? 'active' : ''
                      }`}
                    >
                      <item.icon size={20} />
                      <span className="fw-medium">{item.label}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}