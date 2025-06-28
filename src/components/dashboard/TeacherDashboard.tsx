import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, AlignCenter as Assignment, BarChart3, Plus, Calendar } from 'lucide-react';
import { StatCard } from '../ui/StatCard';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { mockClasses, mockAssignments } from '../../data/mockData';

export function TeacherDashboard() {
  const totalStudents = mockClasses.reduce((sum, cls) => sum + cls.students.length, 0);
  const recentAssignments = mockAssignments.slice(0, 3);

  return (
    <div className="container-fluid blob-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-secondary text-white p-4 p-md-5 rounded-4 mb-4 position-relative"
      >
        <h1 className="display-5 fw-bold mb-2">Welcome back, Dr. Chen!</h1>
        <p className="lead opacity-75">Manage your classes and track student progress</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="row g-4 mb-4"
      >
        <div className="col-sm-6 col-lg-3">
          <StatCard
            title="Total Students"
            value={totalStudents}
            change={5}
            icon={Users}
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
            title="Assignments"
            value={mockAssignments.length}
            change={-2}
            icon={Assignment}
            color="warning"
          />
        </div>
        <div className="col-sm-6 col-lg-3">
          <StatCard
            title="Avg. Performance"
            value="87%"
            change={3}
            icon={BarChart3}
            color="success"
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
            <div className="card-blob">
              <div className="card-body p-4">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <h3 className="h4 fw-bold text-deep-red mb-0">My Classes</h3>
                  <Button size="sm" icon={Plus}>
                    Add Class
                  </Button>
                </div>
                <div className="d-flex flex-column gap-3">
                  {mockClasses.map((classItem, index) => (
                    <motion.div
                      key={classItem.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="p-3 border rounded-3 bg-light-bg"
                    >
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <h5 className="fw-medium text-deep-red mb-1">{classItem.name}</h5>
                          <p className="text-muted small mb-1">{classItem.subject}</p>
                          <p className="text-muted" style={{ fontSize: '0.75rem' }}>
                            {classItem.students.length} students
                          </p>
                        </div>
                        <Button size="sm" variant="secondary">
                          Manage
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="col-lg-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="card-blob">
              <div className="card-body p-4">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <h3 className="h4 fw-bold text-deep-red mb-0">Recent Assignments</h3>
                  <Button size="sm" icon={Plus}>
                    Create Assignment
                  </Button>
                </div>
                <div className="d-flex flex-column gap-3">
                  {recentAssignments.map((assignment, index) => (
                    <motion.div
                      key={assignment.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="p-3 border rounded-3 bg-light-bg"
                    >
                      <h5 className="fw-medium text-deep-red mb-1">{assignment.title}</h5>
                      <p className="text-muted small mb-2">{assignment.description}</p>
                      <div className="d-flex align-items-center justify-content-between">
                        <span className="text-muted small">
                          Due: {assignment.dueDate.toLocaleDateString()}
                        </span>
                        <div className="d-flex align-items-center gap-2">
                          <span className="badge bg-warning text-dark">
                            {assignment.points} points
                          </span>
                          <Button size="sm" variant="secondary">
                            Grade
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="card-blob">
          <div className="card-body p-4">
            <h3 className="h4 fw-bold text-deep-red mb-4">Quick Actions</h3>
            <div className="row g-3">
              <div className="col-6 col-md-3">
                <Button variant="primary" className="w-100 justify-content-center" icon={Plus}>
                  New Class
                </Button>
              </div>
              <div className="col-6 col-md-3">
                <Button variant="secondary" className="w-100 justify-content-center" icon={Assignment}>
                  Assignment
                </Button>
              </div>
              <div className="col-6 col-md-3">
                <Button variant="success" className="w-100 justify-content-center" icon={BarChart3}>
                  Analytics
                </Button>
              </div>
              <div className="col-6 col-md-3">
                <Button variant="warning" className="w-100 justify-content-center" icon={Calendar}>
                  Schedule
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}