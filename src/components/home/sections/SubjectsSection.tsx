import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Card } from '../../ui/Card';
import { Button } from '../../ui/Button';

interface SubjectsSectionProps {
  onNavigate: (view: string) => void;
}

export function SubjectsSection({ onNavigate }: SubjectsSectionProps) {
  const subjects = [
    {
      name: 'Physics',
      description: 'Explore the fundamental laws of nature through interactive simulations',
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      students: '45,000+',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      name: 'Chemistry',
      description: 'Discover molecular interactions and chemical reactions safely',
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      students: '38,000+',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      name: 'Biology',
      description: 'Study life sciences from cellular level to ecosystems',
      image: 'https://images.pexels.com/photos/2280568/pexels-photo-2280568.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      students: '52,000+',
      gradient: 'from-emerald-500 to-green-600'
    },
    {
      name: 'Mathematics',
      description: 'Master mathematical concepts with visual problem solving',
      image: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      students: '67,000+',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      name: 'Computer Science',
      description: 'Learn programming and computational thinking interactively',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      students: '73,000+',
      gradient: 'from-purple-500 to-indigo-600'
    },
    {
      name: 'Engineering',
      description: 'Design and build solutions to real-world problems',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      students: '41,000+',
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      name: 'Environmental Science',
      description: 'Understand our planet and environmental challenges',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      students: '29,000+',
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      name: 'Astronomy',
      description: 'Explore the cosmos and celestial phenomena',
      image: 'https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      students: '34,000+',
      gradient: 'from-violet-500 to-purple-600'
    }
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-5"
        >
          <div className="badge bg-primary-red text-white px-3 py-2 rounded-pill mb-3">
            <Star className="me-1" size={16} />
            Master Every Subject
          </div>
          <h2 className="display-4 fw-bold text-deep-red mb-4">
            Master Every Subject
          </h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
            From fundamental sciences to cutting-edge technology, discover your passion 
            through our comprehensive subject offerings.
          </p>
        </motion.div>

        <div className="row g-4">
          {subjects.map((subject, index) => (
            <div key={subject.name} className="col-md-6 col-lg-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="h-100"
              >
                <Card hover className="h-100 overflow-hidden subject-card-gradient">
                  <div className="position-relative">
                    <img
                      src={subject.image}
                      alt={subject.name}
                      className="card-img-top object-fit-cover"
                      style={{ height: '200px' }}
                    />
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-25"></div>
                    <div className="position-absolute top-0 end-0 m-3">
                      <span className="badge bg-primary-red text-white">
                        {subject.students} students
                      </span>
                    </div>
                  </div>
                  <div className="card-body p-4">
                    <h4 className="fw-bold text-deep-red mb-2">{subject.name}</h4>
                    <p className="text-muted small mb-3">{subject.description}</p>
                    <Button size="sm" className="w-100" onClick={() => onNavigate('dashboard')}>
                      Start Learning
                    </Button>
                  </div>
                </Card>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}