import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export function ApiReference() {
  const apiEndpoints = [
    {
      method: 'GET',
      endpoint: '/api/v1/classes',
      description: 'Retrieve all classes for authenticated user',
      response: 'Array of class objects'
    },
    {
      method: 'POST',
      endpoint: '/api/v1/classes',
      description: 'Create a new virtual classroom',
      response: 'Created class object'
    },
    {
      method: 'GET',
      endpoint: '/api/v1/labs/{id}',
      description: 'Get specific lab simulation details',
      response: 'Lab simulation object'
    },
    {
      method: 'POST',
      endpoint: '/api/v1/assignments',
      description: 'Create new assignment for class',
      response: 'Created assignment object'
    }
  ];

  return (
    <div>
      <h3 className="h4 fw-bold text-deep-red mb-4">API Reference</h3>
      <div className="mb-4">
        <div className="bg-light-bg rounded-3 p-4">
          <h5 className="fw-bold text-deep-red mb-3">Base URL</h5>
          <code className="bg-white p-2 rounded border">https://api.coreverse.edu</code>
          <p className="text-muted mt-3 mb-0">
            All API requests must include authentication headers. See our authentication guide for details.
          </p>
        </div>
      </div>
      <div className="d-flex flex-column gap-3">
        {apiEndpoints.map((endpoint, index) => (
          <motion.div
            key={endpoint.endpoint}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <div className="card-body p-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="d-flex align-items-center gap-3">
                    <span className={`badge ${
                      endpoint.method === 'GET' ? 'bg-success' : 
                      endpoint.method === 'POST' ? 'bg-primary' : 'bg-warning'
                    } text-white`}>
                      {endpoint.method}
                    </span>
                    <code className="bg-light-bg px-2 py-1 rounded">{endpoint.endpoint}</code>
                  </div>
                  <Button size="sm" variant="secondary">
                    <ExternalLink size={14} className="me-1" />
                    Try it
                  </Button>
                </div>
                <p className="text-muted mb-2">{endpoint.description}</p>
                <small className="text-muted">
                  <strong>Response:</strong> {endpoint.response}
                </small>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}