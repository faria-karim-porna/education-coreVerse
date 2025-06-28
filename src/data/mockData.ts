import { Class, Assignment, LabSimulator, Progress } from '../types';

export const mockClasses: Class[] = [
  {
    id: '1',
    name: 'Advanced Physics',
    description: 'Quantum mechanics and electromagnetism',
    teacherId: '2',
    students: ['1'],
    subject: 'Physics',
    createdAt: new Date('2024-01-10'),
  },
  {
    id: '2',
    name: 'Organic Chemistry',
    description: 'Molecular structures and reactions',
    teacherId: '2',
    students: ['1'],
    subject: 'Chemistry',
    createdAt: new Date('2024-01-12'),
  },
  {
    id: '3',
    name: 'Cell Biology',
    description: 'Cellular processes and genetics',
    teacherId: '2',
    students: ['1'],
    subject: 'Biology',
    createdAt: new Date('2024-01-15'),
  },
];

export const mockAssignments: Assignment[] = [
  {
    id: '1',
    title: 'Circuit Analysis Lab',
    description: 'Build and analyze a parallel circuit using the physics simulator',
    classId: '1',
    dueDate: new Date('2024-02-15'),
    points: 100,
    submissions: [],
    createdAt: new Date('2024-01-20'),
  },
  {
    id: '2',
    title: 'Organic Reactions Study',
    description: 'Explore benzene reactions in the chemistry lab',
    classId: '2',
    dueDate: new Date('2024-02-18'),
    points: 85,
    submissions: [],
    createdAt: new Date('2024-01-22'),
  },
];

export const mockLabSimulators: LabSimulator[] = [
  {
    id: '1',
    name: 'Circuit Builder',
    type: 'physics',
    description: 'Build and test electrical circuits',
    icon: 'Zap',
    difficulty: 'intermediate',
  },
  {
    id: '2',
    name: 'Motion Simulator',
    type: 'physics',
    description: 'Explore projectile motion and forces',
    icon: 'Move',
    difficulty: 'beginner',
  },
  {
    id: '3',
    name: 'Reaction Explorer',
    type: 'chemistry',
    description: 'Visualize chemical reactions',
    icon: 'Atom',
    difficulty: 'intermediate',
  },
  {
    id: '4',
    name: 'Periodic Table',
    type: 'chemistry',
    description: 'Interactive periodic table with properties',
    icon: 'Grid3X3',
    difficulty: 'beginner',
  },
  {
    id: '5',
    name: 'Cell Viewer',
    type: 'biology',
    description: 'Explore cell structures and organelles',
    icon: 'Circle',
    difficulty: 'beginner',
  },
  {
    id: '6',
    name: 'DNA Sequencer',
    type: 'biology',
    description: 'Analyze genetic sequences',
    icon: 'Dna',
    difficulty: 'advanced',
  },
];

export const mockProgress: Progress = {
  userId: '1',
  totalPoints: 1250,
  completedAssignments: 12,
  badgesEarned: ['Quick Learner', 'Science Explorer', 'Team Player'],
  weeklyActivity: [
    { day: 'Mon', activities: 8 },
    { day: 'Tue', activities: 12 },
    { day: 'Wed', activities: 15 },
    { day: 'Thu', activities: 10 },
    { day: 'Fri', activities: 18 },
    { day: 'Sat', activities: 5 },
    { day: 'Sun', activities: 3 },
  ],
  subjectProgress: [
    { subject: 'Physics', progress: 78 },
    { subject: 'Chemistry', progress: 65 },
    { subject: 'Biology', progress: 82 },
    { subject: 'Mathematics', progress: 71 },
  ],
};