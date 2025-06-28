import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { Card } from '../../ui/Card';
import { Button } from '../../ui/Button';

interface PricingSectionProps {
  onNavigate: (view: string) => void;
}

export function PricingSection({ onNavigate }: PricingSectionProps) {
  const plans = [
    {
      name: 'Student',
      price: 'Free',
      period: 'forever',
      description: 'Perfect for individual learners',
      features: [
        'Access to basic simulations',
        'Progress tracking',
        'Community forums',
        'Mobile app access',
        'Email support'
      ],
      popular: false,
      buttonText: 'Get Started',
      buttonVariant: 'secondary' as const
    },
    {
      name: 'Educator',
      price: '$29',
      period: 'per month',
      description: 'Ideal for teachers and instructors',
      features: [
        'All Student features',
        'Classroom management',
        'Assignment creation',
        'Student analytics',
        'Priority support',
        'Custom content upload'
      ],
      popular: true,
      buttonText: 'Start Free Trial',
      buttonVariant: 'primary' as const
    },
    {
      name: 'Institution',
      price: 'Custom',
      period: 'pricing',
      description: 'For schools and universities',
      features: [
        'All Educator features',
        'Unlimited users',
        'Advanced analytics',
        'API access',
        'Dedicated support',
        'Custom integrations',
        'Training sessions'
      ],
      popular: false,
      buttonText: 'Contact Sales',
      buttonVariant: 'secondary' as const
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
          <h2 className="display-4 fw-bold text-deep-red mb-4">
            Choose Your Plan
          </h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Start with our free plan or upgrade for advanced features. 
            All plans include our core educational tools.
          </p>
        </motion.div>

        <div className="row g-4 justify-content-center">
          {plans.map((plan, index) => (
            <div key={plan.name} className="col-lg-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="h-100"
              >
                <Card className={`h-100 position-relative ${plan.popular ? 'border-primary-red' : ''}`}>
                  {plan.popular && (
                    <div className="position-absolute top-0 start-50 translate-middle">
                      <span className="badge bg-primary-red text-white px-3 py-2 rounded-pill">
                        <Star size={14} className="me-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="card-body p-4 text-center">
                    <h3 className="fw-bold text-deep-red mb-2">{plan.name}</h3>
                    <p className="text-muted mb-4">{plan.description}</p>
                    
                    <div className="mb-4">
                      <span className="display-4 fw-bold text-primary-red">{plan.price}</span>
                      {plan.period && (
                        <span className="text-muted">/{plan.period}</span>
                      )}
                    </div>

                    <ul className="list-unstyled mb-4">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="d-flex align-items-center mb-2">
                          <Check className="text-success me-2 flex-shrink-0" size={16} />
                          <span className="text-muted">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      variant={plan.buttonVariant} 
                      className="w-100"
                      onClick={() => onNavigate('dashboard')}
                    >
                      {plan.buttonText}
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