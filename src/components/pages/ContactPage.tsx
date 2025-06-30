import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  HelpCircle,
  Users,
  BookOpen,
  Headphones,
} from "lucide-react";
import { Button } from "../ui/Button";
import { ThemeToggle } from "../ui/ThemeToggle";
import { Navbar } from "../common/Navbar";
import { Banner } from "../common/Banner";
import { CTASection } from "../common/CTASection";
import { Footer } from "../common/Footer";
import { ContactMethods } from "../contact/ContactMethods";
import { ContactForm } from "../contact/ContactForm";
import { OfficeLocations } from "../contact/OfficeLocations";
import { FaqSection } from "../contact/FaqSection";

interface ContactPageProps {
  onNavigate: (view: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
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

  return (
    <div className="min-vh-100 bg-light-bg">
      {/* Navigation */}
      <Navbar onNavigate={onNavigate} />

      {/* Banner Section */}
      <Banner
        title="Get in Touch"
        subtitle="Have questions about CoreVerse? We're here to help! Reach out to our support team or explore our comprehensive FAQ section."
      />

      {/* Contact Methods */}
      <ContactMethods contactMethods={contactMethods} />

      {/* Contact Form & Office Info */}
      <section className="py-5 bg-light-bg">
        <div className="container-lg">
          <div className="row g-5">
            {/* Contact Form */}
            <div className="col-lg-8">
              <ContactForm />
            </div>

            {/* Office Information */}
            <div className="col-lg-4">
              <OfficeLocations offices={offices} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection faqs={faqs} />

      {/* CTA Section */}
      <CTASection
        className="bg-gradient-secondary"
        title="Still Have Questions?"
        subtitle="Our support team is here to help you succeed with CoreVerse. Don't hesitate to reach out!"
        primaryButtonText="Join Community Forum"
        primaryButtonLink="community"
        onNavigate={onNavigate}
      />

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}