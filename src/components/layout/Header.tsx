import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Menu, Search, User, LogOut } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface HeaderProps {
  onMenuToggle: () => void;
  isSidebarOpen: boolean;
}

export function Header({ onMenuToggle, isSidebarOpen }: HeaderProps) {
  const { user, logout } = useAuth();

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="paper-header"
    >
      <div className="container-fluid px-4 py-3">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onMenuToggle}
              className="btn btn-paper-secondary p-2 d-lg-none organic-shape-1"
            >
              <Menu size={20} />
            </motion.button>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="d-none d-sm-flex align-items-center gap-2"
            >
              <div className="icon-paper-container bg-primary-red d-flex align-items-center justify-content-center"
                   style={{ width: '32px', height: '32px' }}>
                <span className="text-white fw-bold small icon">CV</span>
              </div>
              <span className="fw-bold h4 text-deep-red mb-0">CoreVerse</span>
            </motion.div>
          </div>

          <div className="flex-fill mx-4" style={{ maxWidth: '400px' }}>
            <div className="position-relative">
              <Search className="position-absolute text-muted" 
                      style={{ left: '12px', top: '50%', transform: 'translateY(-50%)', width: '16px', height: '16px' }} />
              <input
                type="text"
                placeholder="Search courses, assignments..."
                className="form-paper-input form-control ps-5"
                style={{ paddingLeft: '2.5rem' }}
              />
            </div>
          </div>

          <div className="d-flex align-items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-paper-secondary p-2 position-relative organic-shape-2"
            >
              <Bell size={20} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    style={{ fontSize: '0.6rem' }}>
                3
              </span>
            </motion.button>

            <div className="d-flex align-items-center gap-3 ps-3 border-start">
              <div className="d-none d-sm-block text-end">
                <p className="small fw-medium text-deep-red mb-0">{user?.name}</p>
                <p className="text-muted" style={{ fontSize: '0.75rem' }}>
                  {user?.role?.charAt(0).toUpperCase() + user?.role?.slice(1)}
                </p>
              </div>
              <div className="icon-paper-container" style={{ width: '32px', height: '32px', padding: '2px' }}>
                <img
                  src={user?.avatar || 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'}
                  alt={user?.name}
                  className="w-100 h-100 object-fit-cover organic-shape-3"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={logout}
                className="btn btn-paper-secondary p-2 organic-shape-4"
              >
                <LogOut size={16} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}