import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Trophy, Award, Target, TrendingUp } from 'lucide-react';
import { Card } from '../ui/Card';
import { StatCard } from '../ui/StatCard';
import { mockProgress } from '../../data/mockData';

export function ProgressTracker() {
  const COLORS = ['#ff7474', '#c64242', '#F97316', '#EF4444'];

  return (
    <div className="container-fluid">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-primary text-white p-4 p-md-5 rounded-4 mb-4"
        style={{ background: 'linear-gradient(135deg, #22c55e, #ff7474)' }}
      >
        <h1 className="display-5 fw-bold mb-2">Progress Tracker</h1>
        <p className="lead opacity-75">Monitor your learning journey and achievements</p>
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
            title="Assignments Done"
            value={mockProgress.completedAssignments}
            change={8}
            icon={Target}
            color="primary"
          />
        </div>
        <div className="col-sm-6 col-lg-3">
          <StatCard
            title="Badges Earned"
            value={mockProgress.badgesEarned.length}
            change={25}
            icon={Award}
            color="warning"
          />
        </div>
        <div className="col-sm-6 col-lg-3">
          <StatCard
            title="Weekly Growth"
            value="15%"
            change={15}
            icon={TrendingUp}
            color="secondary"
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
                <h3 className="h4 fw-bold text-deep-red mb-4">Weekly Activity</h3>
                <div style={{ width: '100%', height: '300px' }}>
                  <ResponsiveContainer>
                    <BarChart data={mockProgress.weeklyActivity}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="activities" fill="#ff7474" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
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
                <h3 className="h4 fw-bold text-deep-red mb-4">Subject Progress</h3>
                <div style={{ width: '100%', height: '300px' }}>
                  <ResponsiveContainer>
                    <PieChart>
                      <Pie
                        data={mockProgress.subjectProgress}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ subject, progress }) => `${subject}: ${progress}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="progress"
                      >
                        {mockProgress.subjectProgress.map((_, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
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
            <h3 className="h4 fw-bold text-deep-red mb-4">Achievements & Badges</h3>
            <div className="row g-4">
              {mockProgress.badgesEarned.map((badge, index) => (
                <div key={badge} className="col-md-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="text-center p-4 border rounded-3"
                  >
                    <div className="bg-warning bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                         style={{ width: '64px', height: '64px' }}>
                      <Award className="text-warning" size={32} />
                    </div>
                    <h5 className="fw-semibold text-deep-red mb-1">{badge}</h5>
                    <p className="text-muted small mb-0">Achievement unlocked!</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}