import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, BookOpen, ArrowLeft } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

interface LoginFormProps {
  onNavigate: (view: string) => void;
}

export function LoginForm({ onNavigate }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { login, isLoading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      await login(email, password);
    } catch (err) {
      setError('Invalid credentials. Try alice@student.com or sarah@teacher.com with password "password"');
    }
  };

  const quickLogin = (userEmail: string) => {
    setEmail(userEmail);
    setPassword('password');
  };

  return (
    <div className="min-vh-100 bg-gradient-light d-flex align-items-center justify-content-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-100"
        style={{ maxWidth: '400px' }}
      >
        <div className="card shadow-lg border-0 rounded-4">
          <div className="card-body p-5">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <button
                onClick={() => onNavigate('home')}
                className="btn btn-link p-2 text-muted"
                title="Back to home"
              >
                <ArrowLeft size={20} />
              </button>
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="d-inline-flex align-items-center justify-content-center bg-primary-red rounded-4 mb-3"
                  style={{ width: '64px', height: '64px' }}
                >
                  <BookOpen className="text-white" size={32} />
                </motion.div>
                <h1 className="h2 fw-bold text-deep-red">CoreVerse</h1>
                <p className="text-muted mt-2">Sign in to your educational platform</p>
              </div>
              <div style={{ width: '44px' }}></div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="form-label fw-medium text-deep-red">
                  Email Address
                </label>
                <div className="position-relative">
                  <Mail className="position-absolute text-muted" 
                        style={{ left: '12px', top: '50%', transform: 'translateY(-50%)', width: '20px', height: '20px' }} />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control ps-5 py-3 border-2 rounded-3"
                    placeholder="Enter your email"
                    required
                    style={{ paddingLeft: '3rem' }}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="form-label fw-medium text-deep-red">
                  Password
                </label>
                <div className="position-relative">
                  <Lock className="position-absolute text-muted" 
                        style={{ left: '12px', top: '50%', transform: 'translateY(-50%)', width: '20px', height: '20px' }} />
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control ps-5 pe-5 py-3 border-2 rounded-3"
                    placeholder="Enter your password"
                    required
                    style={{ paddingLeft: '3rem', paddingRight: '3rem' }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="btn btn-link position-absolute text-muted p-0"
                    style={{ right: '12px', top: '50%', transform: 'translateY(-50%)' }}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="alert alert-danger rounded-3 py-3"
                >
                  {error}
                </motion.div>
              )}

              <Button
                type="submit"
                disabled={isLoading}
                className="w-100 justify-content-center py-3 mb-4"
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>

            <div className="border-top pt-4">
              <p className="text-center text-muted small mb-3">Quick Login (Demo)</p>
              <div className="d-grid gap-2">
                <Button
                  variant="secondary"
                  className="w-100 justify-content-center"
                  onClick={() => quickLogin('alice@student.com')}
                >
                  Login as Student
                </Button>
                <Button
                  variant="secondary"
                  className="w-100 justify-content-center"
                  onClick={() => quickLogin('sarah@teacher.com')}
                >
                  Login as Teacher
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}