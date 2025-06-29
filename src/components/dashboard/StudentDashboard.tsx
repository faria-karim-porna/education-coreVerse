import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Trophy, Target, Calendar, Play } from 'lucide-react';
import { StatCard } from '../ui/StatCard';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { mockClasses, mockAssignments, mockProgress } from '../../data/mockData';

export function StudentDashboard() {
  const upcomingAssignments = mockAssignments.slice(0, 3);
  const recentClasses = mockClasses.slice(0, 4);

  return (
    <div className="container-fluid">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-primary text-white p-4 p-md-5 rounded-4 mb-4 position-relative paper-layer"
        style={{ overflow: 'hidden' }}
      >
        {/* Paper cut out decorative elements */}
        <div className="star star-1 float-slow" style={{ top: '20%', left: '10%' }}></div>
        <div className="star star-2 float" style={{ top: '30%', right: '15%' }}></div>
        <div className="moon float-slow" style={{ top: '25%', right: '10%' }}></div>
        
        <div className="position-relative" style={{ zIndex: 5 }}>
          <h1 className="display-5 fw-bold mb-2">Welcome back, Alice!</h1>
          <p className="lead opacity-75">Ready to continue your learning journey?</p>
        </div>
        
        {/* Wavy divider at the bottom */}
        <div className="wavy-divider wavy-divider-bottom"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="row g-4 mb-4"
      >
        <div className="col-sm-6 col-lg-3">
          <StatCard
            title="Total Points"
            value={mockProgress.totalPoints}
            change={12}
            icon={Trophy}
            color="success"
          />
        </div>
        <div className="col-sm-6 col-lg-3">
          <StatCard
            title="Completed Assignments"
            value={mockProgress.completedAssignments}
            change={8}
            icon={Target}
            color="primary"
          />
        </div>
        <div className="col-sm-6 col-lg-3">
          <StatCard
            title="Active Classes"
            value={mockClasses.length}
            icon={BookOpen}
            color="secondary"
          />
        </div>
        <div className="col-sm-6 col-lg-3">
          <StatCard
            title="Study Hours"
            value="24h"
            change={15}
            icon={Clock}
            color="warning"
          />
        </div>
      </motion.div>

      <div className="row g-4 mb-4">
        <div className="col-lg-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card>
              <div className="card-body p-4">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <h3 className="h4 fw-bold text-deep-purple mb-0">Upcoming Assignments</h3>
                  <Calendar className="text-muted" size={20} />
                </div>
                <div className="d-flex flex-column gap-3">
                  {upcomingAssignments.map((assignment, index) => (
                    <motion.div
                      key={assignment.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="p-3 border rounded-3 bg-light-bg paper-cutout"
                    >
                      <h5 className="fw-medium text-deep-purple mb-1">{assignment.title}</h5>
                      <p className="text-muted small mb-2">{assignment.description}</p>
                      <div className="d-flex align-items-center justify-content-between">
                        <span className="text-muted small">
                          Due: {assignment.dueDate.toLocaleDateString()}
                        </span>
                        <span className="badge bg-warning text-dark">
                          {assignment.points} points
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        <div className="col-lg-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card>
              <div className="card-body p-4">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <h3 className="h4 fw-bold text-deep-purple mb-0">Recent Classes</h3>
                  <BookOpen className="text-muted" size={20} />
                </div>
                <div className="d-flex flex-column gap-3">
                  {recentClasses.map((classItem, index) => (
                    <motion.div
                      key={classItem.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="p-3 border rounded-3 bg-light-bg paper-cutout"
                    >
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <h5 className="fw-medium text-deep-purple mb-1">{classItem.name}</h5>
                          <p className="text-muted small mb-0">{classItem.subject}</p>
                        </div>
                        <Button size="sm" variant="secondary" className="d-flex align-items-center gap-1">
                          <Play size={12} />
                          <span>Continue</span>
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card>
          <div className="card-body p-4">
            <h3 className="h4 fw-bold text-deep-purple mb-4">Quick Actions</h3>
            <div className="row g-3">
              <div className="col-6 col-md-3">
                <Button variant="primary" className="w-100 justify-content-center">
                  Start Lab
                </Button>
              </div>
              <div className="col-6 col-md-3">
                <Button variant="secondary" className="w-100 justify-content-center">
                  Join Class
                </Button>
              </div>
              <div className="col-6 col-md-3">
                <Button variant="success" className="w-100 justify-content-center">
                  View Progress
                </Button>
              </div>
              <div className="col-6 col-md-3">
                <Button variant="warning" className="w-100 justify-content-center">
                  Practice
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}