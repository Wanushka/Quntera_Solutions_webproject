"use client";

import { useState, useEffect } from 'react';

export default function HomePage() {
  const [currentService, setCurrentService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    { name: "Cloud Solutions", icon: "☁️" },
    { name: "Web Development", icon: "🌐" },
    { name: "Mobile Apps", icon: "📱" },
    { name: "DevOps", icon: "⚙️" },
    { name: "AI Integration", icon: "🤖" },
    { name: "Cybersecurity", icon: "🔒" }
  ];

  const features = [
    {
      title: "24/7 Support",
      description: "Round-the-clock technical assistance",
      icon: "🚀"
    },
    {
      title: "Scalable Solutions",
      description: "Growth-ready infrastructure",
      icon: "📈"
    },
    {
      title: "Expert Team",
      description: "Certified IT professionals",
      icon: "👥"
    },
    {
      title: "Modern Tech Stack",
      description: "Latest technologies & frameworks",
      icon: "⚡"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  const technologies = [
    "React", "Node.js", "Python","Flutter","Java","Angular","AWS", "Docker", "Kubernetes", 
    "MongoDB", "PostgreSQL", "Next.js", "TypeScript"
  ];

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-5 text-center relative">
          {/* Glassmorphic hero card */}
          <div className={`relative p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Hero content */}
            <div className="relative z-10">
              <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Transform Your Business
                </span>
                <br />
                <span className="text-white">with Cutting-Edge IT</span>
              </h1>
              
              <p className="mt-8 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                We deliver innovative technology solutions that drive growth, enhance efficiency, 
                and secure your digital future. Partner with us to unlock your business potential.
              </p>

              {/* Rotating services display */}
              <div className="mt-8 mb-12">
                <p className="text-gray-400 mb-4">Specializing in:</p>
                <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-white/10 border border-white/20">
                  <span className="text-2xl">{services[currentService].icon}</span>
                  <span className="text-cyan-400 font-semibold text-lg">
                    {services[currentService].name}
                  </span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 hover:scale-105">
                  <span className="relative z-10">Get Started Today</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <button className="group px-8 py-4 border border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300">
                  <span className="group-hover:text-cyan-400 transition-colors duration-300">View Our Work</span>
                </button>
              </div>
            </div>

            {/* Decorative glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent rounded-3xl"></div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto px-30 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-30 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Our Solutions</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We combine expertise, innovation, and dedication to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies Section */}
        <section className="container mx-auto px-40 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Technologies</span> We Master
            </h2>
          </div>

          <div className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10">
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="px-6 py-3 bg-white/10 border border-white/20 rounded-full text-gray-300 hover:text-cyan-400 hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-300 cursor-default hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-40 py-20">
          <div className="relative p-12 rounded-3xl bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Innovate?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Lets discuss how our IT solutions can transform your business and drive success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 hover:scale-105">
                <span className="relative z-10">Start Your Project</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="group px-8 py-4 border border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300">
                <span className="group-hover:text-cyan-400 transition-colors duration-300">Schedule Consultation</span>
              </button>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-16 h-16 bg-cyan-400/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 bg-blue-400/10 rounded-full blur-xl"></div>
          </div>
        </section>
      </div>
    </div>
  );
}