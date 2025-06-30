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
  X,
  HelpCircle,
  FileText,
  Atom,
  Zap,
  Leaf,
  Flag,
  ArrowLeftRight,
  Video,
  Pencil,
  HelpCircleIcon,
  BookOpenCheck,
  BookText
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';

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

  const simulationItems = [
    { id: 'chemistry-simulation', label: 'Chemistry Lab', icon: Beaker },
    { id: 'physics-simulation', label: 'Physics Lab', icon: Zap },
    { id: 'biology-simulation', label: 'Biology Lab', icon: Leaf },
  ];

  const studyToolsItems = [
    { id: 'periodic-table', label: 'Periodic Table', icon: Atom },
    { id: 'physics-formulas', label: 'Physics Formulas', icon: Zap },
    { id: 'biology-names', label: 'Scientific Names', icon: Leaf },
    { id: 'country-flags', label: 'Country Flags', icon: Flag },
    { id: 'interactive-globe', label: 'Interactive Globe', icon: Globe },
    { id: 'scientific-calculator', label: 'Scientific Calculator', icon: Calculator },
    { id: 'unit-converter', label: 'Unit Converter', icon: ArrowLeftRight },
    { id: 'discussion-forum', label: 'Discussion Forum', icon: MessageCircle },
    { id: 'live-classroom', label: 'Live Classroom', icon: Video },
    { id: 'drawing-tool', label: 'Drawing Tool', icon: Pencil },
    { id: 'question-maker', label: 'Question Maker', icon: HelpCircleIcon },
    { id: 'flashcard', label: 'Flashcards', icon: BookOpenCheck },
    { id: 'wordbook', label: 'Word Book', icon: BookText },
    { id: 'student-progress', label: 'Student Progress', icon: BarChart3 },
  ];

  const commonItems = [
    { id: 'knowledge', label: 'Knowledge Base', icon: Globe },
    { id: 'communication', label: 'Communication', icon: MessageCircle },
    { id: 'help-center', label: 'Help Center', icon: HelpCircle },
    { id: 'documentation', label: 'Documentation', icon: FileText },
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
            className="position-fixed position-lg-static top-0 start-0 bottom-0 bg-white border-end shadow-lg d-flex flex-column"
            style={{ width: '256px', zIndex: 1050 }}
          >
            <div className="p-4 border-bottom d-flex align-items-center justify-content-between justify-content-lg-center">
              <div className="d-flex align-items-center gap-2">
                <div className="bg-primary-red rounded-3 d-flex align-items-center justify-content-center"
                     style={{ width: '32px', height: '32px' }}>
                  <span className="text-white fw-bold small">CV</span>
                </div>
                <span className="fw-bold h4 text-deep-red mb-0">CoreVerse</span>
              </div>
              <button
                onClick={onClose}
                className="btn btn-link p-2 d-lg-none"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="p-4 flex-fill overflow-auto">
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
                    className={`btn text-start d-flex align-items-center gap-3 px-3 py-2 rounded-3 ${
                      activeView === item.id
                        ? 'bg-light-bg text-primary-red border border-card-bg'
                        : 'btn-link text-dark'
                    }`}
                  >
                    <item.icon size={20} />
                    <span className="fw-medium">{item.label}</span>
                  </motion.button>
                ))}
              </div>

              <div className="mt-4 pt-4 border-top">
                <h6 className="fw-semibold text-deep-red mb-3 px-3">Simulations</h6>
                <div className="d-flex flex-column gap-1">
                  {simulationItems.map((item) => (
                    <motion.button
                      key={item.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        onViewChange(item.id);
                        onClose();
                      }}
                      className={`btn text-start d-flex align-items-center gap-3 px-3 py-2 rounded-3 ${
                        activeView === item.id
                          ? 'bg-light-bg text-primary-red border border-card-bg'
                          : 'btn-link text-dark'
                      }`}
                    >
                      <item.icon size={20} />
                      <span className="fw-medium">{item.label}</span>
                    </motion.button>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-4 border-top">
                <h6 className="fw-semibold text-deep-red mb-3 px-3">Study Tools</h6>
                <div className="d-flex flex-column gap-1">
                  {studyToolsItems.map((item) => (
                    <motion.button
                      key={item.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        onViewChange(item.id);
                        onClose();
                      }}
                      className={`btn text-start d-flex align-items-center gap-3 px-3 py-2 rounded-3 ${
                        activeView === item.id
                          ? 'bg-light-bg text-primary-red border border-card-bg'
                          : 'btn-link text-dark'
                      }`}
                    >
                      <item.icon size={20} />
                      <span className="fw-medium">{item.label}</span>
                    </motion.button>
                  ))}
                </div>
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
                      className={`btn text-start d-flex align-items-center gap-3 px-3 py-2 rounded-3 ${
                        activeView === item.id
                          ? 'bg-light-bg text-primary-red border border-card-bg'
                          : 'btn-link text-dark'
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