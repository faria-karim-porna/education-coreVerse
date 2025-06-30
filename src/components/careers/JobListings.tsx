import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building,
  MapPin,
  ArrowRight,
  Search
} from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

interface JobListingsProps {
  onNavigate: (view: string) => void;
}

export function JobListings({ onNavigate }: JobListingsProps) {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const departments = [
    { id: 'all', label: 'All Departments' },
    { id: 'engineering', label: 'Engineering' },
    { id: 'design', label: 'Design' },
    { id: 'education', label: 'Education' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'support', label: 'Support' },
    { id: 'security', label: 'Security' }
  ];

  const locations = [
    { id: 'all', label: 'All Locations' },
    { id: 'san-francisco', label: 'San Francisco, CA' },
    { id: 'new-york', label: 'New York, NY' },
    { id: 'london', label: 'London, UK' },
    { id: 'remote', label: 'Remote' }
  ];

  const jobOpenings = [
    {
      id: '1',
      title: 'Senior Frontend Engineer',
      department: 'engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$140K - $180K',
      description: 'Build beautiful, responsive user interfaces for our educational platform using React, TypeScript, and modern web technologies.',
      requirements: ['5+ years React experience', 'TypeScript proficiency', 'UI/UX design sense', 'Educational technology interest'],
      posted: '2 days ago'
    },
    {
      id: '2',
      title: 'Product Designer',
      department: 'design',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$120K - $150K',
      description: 'Design intuitive and engaging educational experiences that help students learn complex STEM concepts effectively.',
      requirements: ['4+ years product design', 'Figma expertise', 'User research skills', 'Educational design experience'],
      posted: '1 week ago'
    },
    {
      id: '3',
      title: 'Educational Content Specialist',
      department: 'education',
      location: 'Remote',
      type: 'Full-time',
      salary: '$80K - $110K',
      description: 'Create and curate high-quality educational content for our STEM simulation platform.',
      requirements: ['PhD in STEM field', 'Curriculum development', 'Online education experience', 'Content creation skills'],
      posted: '3 days ago'
    },
    {
      id: '4',
      title: 'DevOps Engineer',
      department: 'engineering',
      location: 'London, UK',
      type: 'Full-time',
      salary: '£70K - £95K',
      description: 'Build and maintain scalable infrastructure to support millions of students worldwide.',
      requirements: ['AWS/Azure experience', 'Kubernetes knowledge', 'CI/CD expertise', 'Monitoring tools'],
      posted: '5 days ago'
    },
    {
      id: '5',
      title: 'Customer Success Manager',
      department: 'support',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$90K - $120K',
      description: 'Help educational institutions successfully implement and scale CoreVerse across their programs.',
      requirements: ['3+ years customer success', 'Education sector experience', 'Project management', 'Communication skills'],
      posted: '1 week ago'
    },
    {
      id: '6',
      title: 'Marketing Manager',
      department: 'marketing',
      location: 'Remote',
      type: 'Full-time',
      salary: '$100K - $130K',
      description: 'Drive growth and brand awareness in the educational technology market.',
      requirements: ['5+ years marketing', 'EdTech experience', 'Digital marketing', 'Analytics skills'],
      posted: '4 days ago'
    }
  ];

  const filteredJobs = jobOpenings.filter(job => {
    const departmentMatch = selectedDepartment === 'all' || job.department === selectedDepartment;
    const locationMatch = selectedLocation === 'all' || 
      job.location.toLowerCase().includes(selectedLocation.replace('-', ' ')) ||
      (selectedLocation === 'remote' && job.location === 'Remote');
    return departmentMatch && locationMatch;
  });

  const handleApply = (jobId: string) => {
    // In a real application, this would navigate to a job application page
    window.open(`/careers/apply/${jobId}`, '_blank');
  };

  return (
    <section className="py-5 bg-white">
      <div className="container-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-5"
        >
          <h2 className="display-4 fw-bold text-deep-red mb-4">Open Positions</h2>
          <p className="lead text-muted">
            Find your next opportunity to make an impact in education
          </p>
        </motion.div>

        {/* Filters */}
        <div className="row g-3 mb-5">
          <div className="col-md-6">
            <label className="form-label fw-medium text-deep-red">Department</label>
            <select 
              className="form-select"
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
            >
              {departments.map(dept => (
                <option key={dept.id} value={dept.id}>{dept.label}</option>
              ))}
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label fw-medium text-deep-red">Location</label>
            <select 
              className="form-select"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              {locations.map(location => (
                <option key={location.id} value={location.id}>{location.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Job Listings */}
        <div className="row g-4">
          {filteredJobs.map((job, index) => (
            <div key={job.id} className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover className="h-100">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-start justify-content-between mb-3">
                      <div>
                        <h4 className="fw-bold text-deep-red mb-1">{job.title}</h4>
                        <div className="d-flex align-items-center gap-3 text-muted small">
                          <span className="d-flex align-items-center gap-1">
                            <Building size={14} />
                            {job.department.charAt(0).toUpperCase() + job.department.slice(1)}
                          </span>
                          <span className="d-flex align-items-center gap-1">
                            <MapPin size={14} />
                            {job.location}
                          </span>
                        </div>
                      </div>
                      <span className="badge bg-primary-red text-white">{job.type}</span>
                    </div>

                    <p className="text-muted mb-3">{job.description}</p>

                    <div className="mb-3">
                      <h6 className="fw-semibold text-deep-red mb-2">Requirements:</h6>
                      <ul className="list-unstyled">
                        {job.requirements.slice(0, 3).map((req, idx) => (
                          <li key={idx} className="text-muted small mb-1">
                            • {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <div className="fw-semibold text-success">{job.salary}</div>
                        <small className="text-muted">Posted {job.posted}</small>
                      </div>
                      <Button size="sm" onClick={() => handleApply(job.id)}>
                        Apply Now
                        <ArrowRight size={14} className="ms-1" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-5">
            <div className="text-muted">
              <Search size={48} className="mb-3" />
              <h5>No positions found</h5>
              <p>Try adjusting your filters or check back later for new opportunities.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}