import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Globe,
  Users,
  BookOpen,
  Headphones,
} from "lucide-react";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { ThemeToggle } from "../ui/ThemeToggle";

interface ContactPageProps {
  onNavigate: (view: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  });
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help via email",
      contact: "support@coreverse.edu",
      availability: "24/7 Response",
      color: "bg-primary-red",
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak with our team",
      contact: "+1 (555) 123-4567",
      availability: "Mon-Fri, 9AM-6PM EST",
      color: "bg-accent-red",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Instant messaging support",
      contact: "Available on platform",
      availability: "Mon-Fri, 8AM-8PM EST",
      color: "bg-success",
    },
    {
      icon: Headphones,
      title: "Video Call",
      description: "Face-to-face assistance",
      contact: "Schedule appointment",
      availability: "By appointment only",
      color: "bg-info",
    },
  ];

  const offices = [
    {
      city: "San Francisco",
      address: "123 Innovation Drive, Suite 400",
      zipCode: "San Francisco, CA 94105",
      phone: "+1 (555) 123-4567",
      email: "sf@coreverse.edu",
    },
    {
      city: "New York",
      address: "456 Education Avenue, Floor 15",
      zipCode: "New York, NY 10001",
      phone: "+1 (555) 987-6543",
      email: "ny@coreverse.edu",
    },
    {
      city: "London",
      address: "789 Learning Street, Suite 200",
      zipCode: "London, UK EC1A 1BB",
      phone: "+44 20 7123 4567",
      email: "london@coreverse.edu",
    },
  ];

  const faqs = [
    {
      question: "How do I get started with CoreVerse?",
      answer:
        "Getting started is easy! Simply sign up for a free account, choose your role (student or educator), and begin exploring our platform. We offer a comprehensive onboarding process to help you get familiar with all features.",
    },
    {
      question: "What devices and browsers are supported?",
      answer:
        "CoreVerse works on all modern devices including desktops, laptops, tablets, and smartphones. We support Chrome, Firefox, Safari, and Edge browsers. For the best experience with 3D simulations, we recommend using a desktop or laptop.",
    },
    {
      question: "Is there a mobile app available?",
      answer:
        "Yes! Our mobile apps are available for both iOS and Android devices. You can download them from the App Store or Google Play Store. The mobile app includes most features with an optimized interface for smaller screens.",
    },
    {
      question: "How much does CoreVerse cost?",
      answer:
        "We offer flexible pricing plans including a free tier for individual students, affordable plans for educators, and enterprise solutions for institutions. Visit our pricing page for detailed information about each plan.",
    },
    {
      question: "Can I integrate CoreVerse with my existing LMS?",
      answer:
        "Absolutely! CoreVerse integrates seamlessly with popular Learning Management Systems like Canvas, Blackboard, Moodle, and others. We support SSO, grade passback, and roster synchronization.",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "We provide comprehensive support including 24/7 email support, live chat during business hours, video tutorials, documentation, and webinar training sessions. Enterprise customers also get dedicated account managers.",
    },
    {
      question: "Is my data secure on CoreVerse?",
      answer:
        "Yes, security is our top priority. We use enterprise-grade encryption, comply with FERPA and GDPR regulations, and undergo regular security audits. Your data is stored securely and never shared with third parties.",
    },
    {
      question: "Can I try CoreVerse before purchasing?",
      answer:
        "Definitely! We offer a 30-day free trial for all our paid plans. No credit card required. You can also schedule a personalized demo with our team to see how CoreVerse can benefit your specific needs.",
    },
  ];

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

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="min-vh-100 bg-light-bg">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm border-bottom">
        <div className="container-lg">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="navbar-brand d-flex align-items-center gap-2 btn btn-link text-decoration-none"
            onClick={() => onNavigate("home")}
          >
            <div
              className="bg-primary-red rounded-4 d-flex align-items-center justify-content-center"
              style={{ width: "40px", height: "40px" }}
            >
              <BookOpen className="text-white" size={24} />
            </div>
            <span className="fw-bold h3 text-deep-red mb-0">CoreVerse</span>
          </motion.button>

          <div className="d-none d-md-flex align-items-center gap-4">
            <button onClick={() => onNavigate("features")} className="nav-link btn btn-link text-deep-red text-decoration-none">
              Features
            </button>
            <button onClick={() => onNavigate("about")} className="nav-link btn btn-link text-deep-red text-decoration-none">
              About
            </button>
            <button onClick={() => onNavigate("contact")} className="nav-link btn btn-link text-primary-red text-decoration-none fw-medium">
              Contact
            </button>
            <ThemeToggle />
            <Button variant="secondary" className="me-2" onClick={() => onNavigate("dashboard")}>
              Sign In
            </Button>
            <Button onClick={() => onNavigate("dashboard")}>Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="position-relative overflow-hidden bg-gradient-primary text-white py-5">
        <div className="container-lg py-5">
          <div className="text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="display-3 fw-bold mb-4">Get in Touch</h1>
              <p className="lead mb-5 mx-auto" style={{ maxWidth: "600px" }}>
                Have questions about CoreVerse? We're here to help! Reach out to our support team or explore our comprehensive FAQ section.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
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

      {/* Contact Form & Office Info */}
      <section className="py-5 bg-light-bg">
        <div className="container-lg">
          <div className="row g-5">
            {/* Contact Form */}
            <div className="col-lg-8">
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
            </div>

            {/* Office Information */}
            <div className="col-lg-4">
              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="h-100">
                <Card className="h-100">
                  <div className="card-body p-4">
                    <h3 className="h4 fw-bold text-deep-red mb-4">Our Offices</h3>

                    {offices.map((office, index) => (
                      <div key={office.city} className={`${index !== offices.length - 1 ? "mb-4 pb-4 border-bottom" : ""}`}>
                        <h5 className="fw-semibold text-primary-red mb-3">{office.city}</h5>
                        <div className="d-flex align-items-start mb-2">
                          <MapPin className="text-muted me-2 mt-1 flex-shrink-0" size={16} />
                          <div>
                            <p className="mb-1 small">{office.address}</p>
                            <p className="mb-0 small text-muted">{office.zipCode}</p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center mb-2">
                          <Phone className="text-muted me-2" size={16} />
                          <small>{office.phone}</small>
                        </div>
                        <div className="d-flex align-items-center">
                          <Mail className="text-muted me-2" size={16} />
                          <small>{office.email}</small>
                        </div>
                      </div>
                    ))}

                    <div className="mt-4 pt-4 border-top">
                      <div className="d-flex align-items-center mb-3">
                        <Clock className="text-primary-red me-2" size={20} />
                        <h5 className="fw-semibold text-deep-red mb-0">Business Hours</h5>
                      </div>
                      <div className="small">
                        <div className="d-flex justify-content-between mb-1">
                          <span>Monday - Friday:</span>
                          <span>9:00 AM - 6:00 PM</span>
                        </div>
                        <div className="d-flex justify-content-between mb-1">
                          <span>Saturday:</span>
                          <span>10:00 AM - 4:00 PM</span>
                        </div>
                        <div className="d-flex justify-content-between">
                          <span>Sunday:</span>
                          <span>Closed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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

      {/* CTA Section */}
      <section className="py-5 bg-gradient-secondary text-white">
        <div className="container-lg text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h2 className="display-4 fw-bold mb-4">Still Have Questions?</h2>
            <p className="lead mb-5 opacity-75">
              Our support team is here to help you succeed with CoreVerse. Don't hesitate to reach out!
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-primary-red border-white"
                onClick={() => onNavigate("dashboard")}
              >
                <Users size={20} className="me-2" />
                Join Community Forum
              </Button>
              <Button variant="outline-secondary" size="lg" className="border-white text-white" onClick={() => onNavigate("features")}>
                <BookOpen size={20} className="me-2" />
                Browse Help Center
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-deep-red text-white py-5">
        <div className="container-lg">
          <div className="row g-4">
            <div className="col-lg-3">
              <button
                onClick={() => onNavigate("home")}
                className="d-flex align-items-center gap-2 mb-4 btn btn-link text-white text-decoration-none p-0"
              >
                <div
                  className="bg-primary-red rounded-3 d-flex align-items-center justify-content-center"
                  style={{ width: "32px", height: "32px" }}
                >
                  <BookOpen className="text-white" size={20} />
                </div>
                <span className="fw-bold h5 mb-0">CoreVerse</span>
              </button>
              <p className="text-white-50">Transforming education through interactive technology and innovative learning experiences.</p>
            </div>

            <div className="col-lg-3">
              <h6 className="fw-semibold mb-3">Platform</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <button onClick={() => onNavigate("features")} className="btn btn-link text-white-50 text-decoration-none p-0">
                    STEM Labs
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate("features")} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Virtual Classrooms
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate("features")} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Progress Tracking
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate("features")} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Scientific Tools
                  </button>
                </li>
              </ul>
            </div>

            <div className="col-lg-3">
              <h6 className="fw-semibold mb-3">Support</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <button onClick={() => onNavigate("contact")} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Help Center
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate("features")} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Documentation
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate("contact")} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Community
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate("contact")} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>

            <div className="col-lg-3">
              <h6 className="fw-semibold mb-3">Company</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <button onClick={() => onNavigate("about")} className="btn btn-link text-white-50 text-decoration-none p-0">
                    About
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate("contact")} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Careers
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate("contact")} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Privacy
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate("contact")} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Terms
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-top border-white border-opacity-25 mt-5 pt-4 text-center">
            <p className="text-white-50 mb-0">&copy; 2024 CoreVerse. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
