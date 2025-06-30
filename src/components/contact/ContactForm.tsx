import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      category: "",
      message: "",
    });
  };

  return (
    <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
      <Card>
        <div className="card-body p-5">
          <h3 className="h2 fw-bold text-deep-red mb-4">Send us a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <label htmlFor="name" className="form-label fw-medium text-deep-red">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-control py-3 border-2 rounded-3"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label fw-medium text-deep-red">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-control py-3 border-2 rounded-3"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <label htmlFor="category" className="form-label fw-medium text-deep-red">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="form-select py-3 border-2 rounded-3"
                >
                  <option value="">Select a category</option>
                  <option value="technical">Technical Support</option>
                  <option value="billing">Billing & Pricing</option>
                  <option value="feature">Feature Request</option>
                  <option value="partnership">Partnership</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="subject" className="form-label fw-medium text-deep-red">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="form-control py-3 border-2 rounded-3"
                  placeholder="Brief subject line"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="form-label fw-medium text-deep-red">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                className="form-control border-2 rounded-3"
                placeholder="Tell us how we can help you..."
                required
              ></textarea>
            </div>

            <Button type="submit" size="lg" className="w-100 justify-content-center">
              <Send size={20} className="me-2" />
              Send Message
            </Button>
          </form>
        </div>
      </Card>
    </motion.div>
  );
}