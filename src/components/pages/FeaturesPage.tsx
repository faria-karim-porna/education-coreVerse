import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Beaker,
  Calculator,
  Users,
  BarChart3,
  Globe,
  MessageCircle,
  Zap,
  Atom,
  Microscope,
  BookOpen,
  Video,
  Award,
  Shield,
  Smartphone,
  Cloud,
  Brain,
  Target,
  Play,
} from "lucide-react";
import { FeatureCard } from "../features/FeatureCard";
import { PlatformAdvantage } from "../features/PlatformAdvantage";
import { IntegrationSection } from "../features/IntegrationSection";
import { FeatureCategories } from "../features/FeatureCategories";
import { CTASection } from "../common/CTASection";
import { Footer } from "../common/Footer";
import { Navbar } from "../common/Navbar";
import { Banner } from "../common/Banner";

interface FeaturesPageProps {
  onNavigate: (view: string) => void;
}

export function FeaturesPage({ onNavigate }: FeaturesPageProps) {
  const [activeCategory, setActiveCategory] = useState("all");

  const featureCategories = [
    { id: "all", label: "All Features", icon: Target },
    { id: "labs", label: "Virtual Labs", icon: Beaker },
    { id: "classrooms", label: "Classrooms", icon: Users },
    { id: "tools", label: "Study Tools", icon: Calculator },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
  ];

  const features = [
    {
      id: "physics-sim",
      category: "labs",
      title: "Physics Simulations",
      description: "Interactive physics experiments covering mechanics, electromagnetism, thermodynamics, and quantum physics.",
      icon: Zap,
      image: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      features: ["Circuit Builder", "Motion Analysis", "Wave Mechanics", "Quantum Experiments"],
      color: "bg-primary-red",
    },
    {
      id: "chemistry-lab",
      category: "labs",
      title: "Chemistry Laboratory",
      description: "Safe virtual chemistry experiments with realistic molecular interactions and reaction simulations.",
      icon: Atom,
      image: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      features: ["Molecular Modeling", "Reaction Simulator", "Periodic Table", "Lab Equipment"],
      color: "bg-accent-red",
    },
    {
      id: "biology-explorer",
      category: "labs",
      title: "Biology Explorer",
      description: "Explore life sciences through interactive cell models, genetic simulations, and ecosystem studies.",
      icon: Microscope,
      image: "https://images.pexels.com/photos/2280568/pexels-photo-2280568.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      features: ["Cell Viewer", "DNA Sequencing", "Ecosystem Models", "Anatomy 3D"],
      color: "bg-success",
    },
    {
      id: "virtual-classroom",
      category: "classrooms",
      title: "Virtual Classrooms",
      description: "Immersive online learning spaces with real-time collaboration and interactive whiteboards.",
      icon: Users,
      image: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      features: ["Live Sessions", "Screen Sharing", "Breakout Rooms", "Recording"],
      color: "bg-info",
    },
    {
      id: "assignment-system",
      category: "classrooms",
      title: "Assignment Management",
      description: "Comprehensive assignment creation, distribution, and grading system with automated feedback.",
      icon: BookOpen,
      image: "https://images.pexels.com/photos/4144101/pexels-photo-4144101.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      features: ["Auto-Grading", "Rubrics", "Peer Review", "Plagiarism Check"],
      color: "bg-warning",
    },
    {
      id: "video-lectures",
      category: "classrooms",
      title: "Interactive Video Lectures",
      description: "Engaging video content with embedded quizzes, annotations, and adaptive playback.",
      icon: Video,
      image: "https://images.pexels.com/photos/4144962/pexels-photo-4144962.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      features: ["Interactive Quizzes", "Note Taking", "Speed Control", "Captions"],
      color: "bg-purple",
    },
    {
      id: "scientific-calculator",
      category: "tools",
      title: "Scientific Calculator Suite",
      description: "Advanced calculators for complex mathematical operations, graphing, and statistical analysis.",
      icon: Calculator,
      image: "https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      features: ["Graphing Calculator", "Matrix Operations", "Statistics", "Unit Converter"],
      color: "bg-primary-red",
    },
    {
      id: "knowledge-base",
      category: "tools",
      title: "Knowledge Explorer",
      description: "Interactive knowledge base with 3D models, timelines, and cross-referenced content.",
      icon: Globe,
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      features: ["3D Models", "Interactive Maps", "Timelines", "Search Engine"],
      color: "bg-success",
    },
    {
      id: "ai-tutor",
      category: "tools",
      title: "AI-Powered Tutor",
      description: "Personalized learning assistant that adapts to your learning style and provides instant help.",
      icon: Brain,
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      features: ["24/7 Support", "Personalized Help", "Learning Paths", "Progress Tracking"],
      color: "bg-info",
    },
    {
      id: "progress-analytics",
      category: "analytics",
      title: "Learning Analytics",
      description: "Comprehensive analytics dashboard tracking student progress, engagement, and performance.",
      icon: BarChart3,
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      features: ["Performance Metrics", "Engagement Tracking", "Predictive Analytics", "Custom Reports"],
      color: "bg-warning",
    },
    {
      id: "achievement-system",
      category: "analytics",
      title: "Achievement System",
      description: "Gamified learning experience with badges, leaderboards, and milestone tracking.",
      icon: Award,
      image: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      features: ["Digital Badges", "Leaderboards", "Certificates", "Portfolio"],
      color: "bg-accent-red",
    },
    {
      id: "communication",
      category: "tools",
      title: "Communication Hub",
      description: "Integrated messaging, forums, and collaboration tools for seamless student-teacher interaction.",
      icon: MessageCircle,
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      features: ["Instant Messaging", "Discussion Forums", "Video Calls", "File Sharing"],
      color: "bg-purple",
    },
  ];

  const platformFeatures = [
    {
      icon: Cloud,
      title: "Cloud-Based Platform",
      description: "Access your learning materials anywhere, anytime with our secure cloud infrastructure.",
    },
    {
      icon: Smartphone,
      title: "Mobile Responsive",
      description: "Seamless experience across all devices - desktop, tablet, and mobile.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with data encryption and privacy protection.",
    },
    {
      icon: Globe,
      title: "Multi-Language Support",
      description: "Available in 25+ languages to serve our global community.",
    },
  ];

  const filteredFeatures = activeCategory === "all" ? features : features.filter((feature) => feature.category === activeCategory);

  return (
    <div className="min-vh-100 bg-light-bg">
      {/* Navigation */}
      <Navbar onNavigate={onNavigate} />

      {/* Banner Section */}
      <Banner
        title="Platform Features"
        subtitle="Discover the comprehensive suite of tools and features that make CoreVerse the ultimate educational platform for STEM
              learning."
      />

      {/* Feature Categories */}
      <section className="py-5 bg-white">
        <div className="container-lg">
          <FeatureCategories categories={featureCategories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

          <div className="row g-4">
            {filteredFeatures.map((feature, index) => (
              <div key={feature.id} className="col-lg-6">
                <FeatureCard feature={feature} index={index} onNavigate={onNavigate} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-5 bg-light-bg">
        <div className="container-lg">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-5">
            <h2 className="display-4 fw-bold text-deep-red mb-4">Platform Advantages</h2>
            <p className="lead text-muted">Built with modern technology for reliability, security, and performance</p>
          </motion.div>

          <div className="row g-4">
            {platformFeatures.map((feature, index) => (
              <div key={feature.title} className="col-md-6 col-lg-3">
                <PlatformAdvantage feature={feature} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <IntegrationSection onNavigate={onNavigate} />

      {/* CTA Section */}
      <CTASection
        className="bg-gradient-secondary"
        title="Ready to Experience CoreVerse?"
        subtitle="Start your free trial today and discover how our features can transform your educational experience."
        primaryButtonText="Start Experience"
        primaryButtonLink="dashboard"
        onNavigate={onNavigate}
      />

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}