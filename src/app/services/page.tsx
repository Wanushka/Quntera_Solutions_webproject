"use client";

import { useState, useEffect } from 'react';

type Service = {
  id: number;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  icon: string;
  features: string[];
  technologies: string[];
  pricing: string;
  timeline: string;
  image: string;
};

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: 1,
      title: "Web Development",
      category: "Development",
      description: "Custom web applications built with modern technologies and responsive design principles.",
      fullDescription: "We create stunning, high-performance web applications using cutting-edge technologies like React, Next.js, Node.js, and modern frameworks. Our solutions are scalable, secure, and optimized for all devices.",
      icon: "🌐",
      features: [
        "Responsive Design",
        "Progressive Web Apps",
        "E-commerce Solutions",
        "CMS Development",
        "API Integration",
        "Performance Optimization"
      ],
      technologies: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS"],
      pricing: "Starting from $3,000",
      timeline: "2-8 weeks",
      image: "💻"
    },
    {
      id: 2,
      title: "Mobile App Development",
      category: "Development",
      description: "Native and cross-platform mobile applications for iOS and Android devices.",
      fullDescription: "Build powerful mobile experiences with our expert team. We develop both native and cross-platform applications that deliver exceptional user experiences and robust functionality.",
      icon: "📱",
      features: [
        "iOS & Android Apps",
        "Cross-platform Development",
        "UI/UX Design",
        "App Store Optimization",
        "Push Notifications",
        "Offline Functionality"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
      pricing: "Starting from $5,000",
      timeline: "3-12 weeks",
      image: "📲"
    },
    {
      id: 3,
      title: "Cloud Solutions",
      category: "Infrastructure",
      description: "Scalable cloud infrastructure and migration services for modern businesses.",
      fullDescription: "Transform your business with cloud-first solutions. We provide comprehensive cloud migration, deployment, and management services using industry-leading platforms.",
      icon: "☁️",
      features: [
        "Cloud Migration",
        "Infrastructure as Code",
        "Auto-scaling Solutions",
        "Cloud Security",
        "Cost Optimization",
        "Disaster Recovery"
      ],
      technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"],
      pricing: "Starting from $2,000",
      timeline: "1-6 weeks",
      image: "🚀"
    },
    {
      id: 4,
      title: "Cybersecurity",
      category: "Security",
      description: "Comprehensive security solutions to protect your digital assets and data.",
      fullDescription: "Secure your business with our advanced cybersecurity services. We provide threat assessment, vulnerability testing, and comprehensive security implementations.",
      icon: "🔒",
      features: [
        "Security Audits",
        "Penetration Testing",
        "Compliance Management",
        "Data Encryption",
        "Access Control",
        "Incident Response"
      ],
      technologies: ["SIEM Tools", "Firewall Solutions", "VPN", "SSL/TLS", "OAuth"],
      pricing: "Starting from $1,500",
      timeline: "1-4 weeks",
      image: "🛡️"
    },
    {
      id: 5,
      title: "AI & Machine Learning",
      category: "Innovation",
      description: "Intelligent solutions powered by artificial intelligence and machine learning.",
      fullDescription: "Harness the power of AI to transform your business processes. We develop custom AI solutions, chatbots, predictive analytics, and machine learning models.",
      icon: "🤖",
      features: [
        "Custom AI Models",
        "Chatbot Development",
        "Predictive Analytics",
        "Computer Vision",
        "Natural Language Processing",
        "Recommendation Systems"
      ],
      technologies: ["TensorFlow", "PyTorch", "Python", "OpenAI", "Scikit-learn"],
      pricing: "Starting from $4,000",
      timeline: "4-16 weeks",
      image: "🧠"
    },
    {
      id: 6,
      title: "DevOps & Automation",
      category: "Infrastructure",
      description: "Streamline your development process with automated CI/CD pipelines and DevOps practices.",
      fullDescription: "Accelerate your development lifecycle with our DevOps expertise. We implement automated testing, deployment pipelines, and infrastructure management.",
      icon: "⚙️",
      features: [
        "CI/CD Pipelines",
        "Infrastructure Automation",
        "Monitoring & Logging",
        "Container Orchestration",
        "Performance Optimization",
        "Release Management"
      ],
      technologies: ["Jenkins", "GitLab CI", "Terraform", "Ansible", "Prometheus"],
      pricing: "Starting from $2,500",
      timeline: "2-8 weeks",
      image: "🔧"
    },

  ];

  const categories = ['All', 'Development', 'Infrastructure', 'Security', 'Innovation', 'Strategy'];
  
  const filteredServices = activeCategory === 'All' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements and create a detailed project roadmap.",
      icon: "🔍"
    },
    {
      step: "02",
      title: "Design & Architecture",
      description: "Our experts design the optimal solution architecture for your needs.",
      icon: "🏗️"
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Agile development with continuous testing and quality assurance.",
      icon: "⚡"
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Seamless deployment with ongoing maintenance and support.",
      icon: "🚀"
    }
  ];

  const stats = [
    { number: "200+", label: "Projects Delivered", icon: "📦" },
    { number: "50+", label: "Happy Clients", icon: "😊" },
    { number: "15+", label: "Technologies Mastered", icon: "⚡" },
    { number: "99.9%", label: "Uptime Guarantee", icon: "🎯" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Ltd",
      text: "Their web development team delivered exactly what we needed. Professional, timely, and excellent quality.",
      service: "Web Development",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "StartupXYZ",
      text: "The mobile app they built for us exceeded expectations. Great user experience and robust functionality.",
      service: "Mobile Development",
      rating: 5
    },
    {
      name: "Emily Davis",
      company: "DataFlow Inc",
      text: "Their cloud migration service was seamless. We're now more scalable and cost-effective than ever.",
      service: "Cloud Solutions",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-blue-500/6 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 left-2/3 w-64 h-64 bg-purple-500/8 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Our Services
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Comprehensive IT solutions designed to accelerate your business growth and 
                digital transformation journey. We deliver excellence in every project.
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group hover:scale-105">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="container mx-auto px-6 py-10">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="container mx-auto px-20 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div 
                key={service.id} 
                className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <div className="mb-4">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30">
                    {service.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {service.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-white/10 text-gray-400 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                  {service.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-white/10 text-gray-400 rounded text-xs">
                      +{service.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-400">
                    <div className="font-semibold text-cyan-400">{service.pricing}</div>
                    <div>{service.timeline}</div>
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 text-sm font-medium">
                    Learn More
                  </button>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Service Detail Modal */}
        {selectedService && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6 z-50">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{selectedService.icon}</div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">{selectedService.title}</h2>
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                      {selectedService.category}
                    </span>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Overview</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {selectedService.fullDescription}
                  </p>

                  <h3 className="text-lg font-semibold text-white mb-4">Key Features</h3>
                  <ul className="space-y-2 mb-6">
                    {selectedService.features.map((feature, index) => (
                      <li key={index} className="text-gray-300 flex items-start">
                        <span className="text-cyan-400 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="text-center p-6 rounded-2xl bg-white/10 mb-6">
                    <div className="text-6xl mb-4">{selectedService.image}</div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-400">Starting Price:</span>
                        <div className="text-cyan-400 font-semibold">{selectedService.pricing}</div>
                      </div>
                      <div>
                        <span className="text-gray-400">Timeline:</span>
                        <div className="text-cyan-400 font-semibold">{selectedService.timeline}</div>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedService.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-2 bg-white/10 text-gray-300 rounded-full text-sm border border-white/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <button className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300">
                  Get Quote
                </button>
                <button className="px-6 py-3 border border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                  Schedule Call
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Process Section */}
        <section className="container mx-auto px-20 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery every time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-cyan-400/50 to-transparent"></div>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="container mx-auto px-20 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              What Our <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Clients Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed mb-4 italic">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="border-t border-white/10 pt-4">
                  <div className="font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-400 text-sm">{testimonial.company}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.service}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}