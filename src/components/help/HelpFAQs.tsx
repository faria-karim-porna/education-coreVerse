import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card } from '../ui/Card';

interface HelpFAQsProps {
  selectedCategory: string;
}

export function HelpFAQs({ selectedCategory }: HelpFAQsProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How do I reset my password?',
      answer: 'Click on "Forgot Password" on the login page, enter your email address, and follow the instructions in the reset email. If you don\'t receive the email, check your spam folder or contact support.',
      category: 'account'
    },
    {
      question: 'Can I use CoreVerse on mobile devices?',
      answer: 'Yes! CoreVerse is fully responsive and works on tablets and smartphones. We also have dedicated mobile apps for iOS and Android with optimized interfaces for smaller screens.',
      category: 'getting-started'
    },
    {
      question: 'What browsers are supported?',
      answer: 'CoreVerse works best on modern browsers including Chrome, Firefox, Safari, and Edge. For the best experience with 3D simulations, we recommend using the latest version of Chrome or Firefox.',
      category: 'troubleshooting'
    },
    {
      question: 'How do I cancel my subscription?',
      answer: 'You can cancel your subscription anytime from your account settings. Go to Billing > Subscription and click "Cancel Subscription". Your access will continue until the end of your current billing period.',
      category: 'billing'
    },
    {
      question: 'Is there a student discount available?',
      answer: 'Yes! We offer significant discounts for students and educational institutions. Contact our sales team or check our pricing page for current educational pricing options.',
      category: 'billing'
    },
    {
      question: 'How do I invite students to my class?',
      answer: 'In your teacher dashboard, go to Classes > [Your Class] > Students > Invite Students. You can send invitations via email or share a class code that students can use to join.',
      category: 'features'
    }
  ];

  const filteredFaqs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <section className="py-5 bg-light-bg">
      <div className="container-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-5"
        >
          <h2 className="display-4 fw-bold text-deep-red mb-4">Frequently Asked Questions</h2>
          <p className="lead text-muted">
            Quick answers to common questions
          </p>
        </motion.div>

        <div className="row">
          <div className="col-lg-8 mx-auto">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="mb-3"
              >
                <Card>
                  <div className="card-body p-0">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="btn btn-link w-100 text-start p-4 text-decoration-none d-flex align-items-center justify-content-between"
                    >
                      <span className="fw-semibold text-deep-red">{faq.question}</span>
                      {expandedFaq === index ? (
                        <ChevronUp className="text-primary-red" size={20} />
                      ) : (
                        <ChevronDown className="text-primary-red" size={20} />
                      )}
                    </button>
                    {expandedFaq === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-4 pb-4"
                      >
                        <p className="text-muted mb-0">{faq.answer}</p>
                      </motion.div>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}