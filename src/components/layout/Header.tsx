import React from "react";
import { motion } from "framer-motion";
import { Bell, Menu, Search, User, LogOut, Home } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

interface HeaderProps {
  onMenuToggle: () => void;
  isSidebarOpen: boolean;
  onNavigate: (view: string) => void;
}

export function Header({ onMenuToggle, isSidebarOpen, onNavigate }: HeaderProps) {
  const { user, logout } = useAuth();

  return (
    <motion.header initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="bg-white border-bottom shadow-sm">
      <div className="container-fluid px-4 py-3">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-3">
            <button onClick={onMenuToggle} className="btn btn-link p-2">
              <Menu size={20} />
            </button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="d-none d-sm-flex align-items-center gap-2 btn btn-link text-decoration-none"
              onClick={() => onNavigate("home")}
            >
              <div
                className="bg-primary-red rounded-3 d-flex align-items-center justify-content-center"
                style={{ width: "32px", height: "32px" }}
              >
                <span className="text-white fw-bold small">CV</span>
              </div>
              <span className="fw-bold h4 text-deep-red mb-0">CoreVerse</span>
            </motion.button>
          </div>

          <div className="flex-fill mx-4" style={{ maxWidth: "400px" }}>
            <div className="position-relative">
              <Search
                className="position-absolute text-muted"
                style={{ left: "12px", top: "50%", transform: "translateY(-50%)", width: "16px", height: "16px" }}
              />
              <input
                type="text"
                placeholder="Search courses, assignments..."
                className="form-control ps-5 rounded-3"
                style={{ paddingLeft: "2.5rem" }}
              />
            </div>
          </div>

          <div className="d-flex align-items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate("home")}
              className="btn btn-link p-2"
              title="Go to homepage"
            >
              <Home size={20} />
            </motion.button>

            <div className="d-flex align-items-center gap-3 ps-3 border-start">
              <div className="d-none d-sm-block text-end">
                <p className="small fw-medium text-deep-red mb-0">{user?.name}</p>
                <p className="text-muted" style={{ fontSize: "0.75rem" }}>
                  {user?.role?.charAt(0).toUpperCase() + user?.role?.slice(1)}
                </p>
              </div>
              <img
                src={
                  user?.avatar ||
                  "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
                }
                alt={user?.name}
                className="rounded-circle object-fit-cover"
                style={{ width: "32px", height: "32px" }}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={logout}
                className="btn btn-link p-2"
                title="Logout"
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
