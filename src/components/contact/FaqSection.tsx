import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card } from "../ui/Card";

interface FaqSectionProps {
  faqs: {
    question: string;
    answer: string;
  }[];
}

export function FaqSection({ faqs }: FaqSectionProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <section className="py-5 bg-white">
      <div className="container-lg">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-5">
          <h2 className="display-4 fw-bold text-deep-red mb-4">Frequently Asked Questions</h2>
          <p className="lead text-muted">Find quick answers to common questions about CoreVerse</p>
        </motion.div>

        <div className="row">
          <div className="col-lg-8 mx-auto">
            {faqs.map((faq, index) => (
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
                        animate={{ opacity: 1, height: "auto" }}
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