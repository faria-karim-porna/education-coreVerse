export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'teacher';
  avatar?: string;
  createdAt: Date;
}

export interface Class {
  id: string;
  name: string;
  description: string;
  teacherId: string;
  students: string[];
  subject: string;
  createdAt: Date;
}

export interface Assignment {
  id: string;
  title: string;
  description: string;
  classId: string;
  dueDate: Date;
  points: number;
  submissions: Submission[];
  createdAt: Date;
}

export interface Submission {
  id: string;
  studentId: string;
  assignmentId: string;
  content: string;
  grade?: number;
  feedback?: string;
  submittedAt: Date;
}

export interface LabSimulator {
  id: string;
  name: string;
  type: 'physics' | 'chemistry' | 'biology';
  description: string;
  icon: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface Progress {
  userId: string;
  totalPoints: number;
  completedAssignments: number;
  badgesEarned: string[];
  weeklyActivity: { day: string; activities: number }[];
  subjectProgress: { subject: string; progress: number }[];
}