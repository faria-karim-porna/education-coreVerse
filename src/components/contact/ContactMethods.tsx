import React from "react";
import { motion } from "framer-motion";
import { Card } from "../ui/Card";

interface ContactMethodsProps {
  contactMethods: {
    icon: React.ComponentType<{ size?: number; className?: string }>;
    title: string;
    description: string;
    contact: string;
    availability: string;
    color: string;
  }[];
}

export function ContactMethods({ contactMethods }: ContactMethodsProps) {
  return (
    <section className="py-5 bg-white">
      <div className="container-lg">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-5">
          <h2 className="display-4 fw-bold text-deep-red mb-4">How Can We Help?</h2>
          <p className="lead text-muted">Choose the contact method that works best for you</p>
        </motion.div>

        <div className="row g-4 mb-5">
          {contactMethods.map((method, index) => (
            <div key={method.title} className="col-md-6 col-lg-3">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                <Card hover className="text-center h-100">
                  <div className="card-body p-4">
                    <div
                      className={`${method.color} rounded-circle d-inline-flex align-items-center justify-content-center mb-4`}
                      style={{ width: "64px", height: "64px" }}
                    >
                      <method.icon className="text-white" size={32} />
                    </div>
                    <h4 className="fw-bold text-deep-red mb-2">{method.title}</h4>
                    <p className="text-muted mb-3">{method.description}</p>
                    <p className="fw-medium text-primary-red mb-2">{method.contact}</p>
                    <small className="text-muted">{method.availability}</small>
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