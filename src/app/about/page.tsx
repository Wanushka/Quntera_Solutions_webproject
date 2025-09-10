"use client";

import { useState, useEffect } from 'react';

export default function AboutPage() {
  const [activeValue, setActiveValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveValue((prev) => (prev + 1) % values.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const values = [
    {
      title: "Innovation First",
      description: "We embrace cutting-edge technologies to create solutions that set new industry standards.",
      icon: "💡"
    },
    {
      title: "Client Success",
      description: "Your success is our mission. We build lasting partnerships through exceptional service.",
      icon: "🎯"
    },
    {
      title: "Excellence Driven",
      description: "We deliver nothing but the highest quality in every project we undertake.",
      icon: "⭐"
    },
    {
      title: "Future Ready",
      description: "We prepare your business for tomorrow's challenges with scalable solutions.",
      icon: "🚀"
    }
  ];

  const timeline = [
    {
      year: "2019",
      title: "Company Founded",
      description: "Started with a vision to transform businesses through technology",
      milestone: "Founded"
    },
    {
      year: "2020",
      title: "First 50 Clients",
      description: "Rapidly grew our client base with exceptional service delivery",
      milestone: "Growth"
    },
    {
      year: "2021",
      title: "Cloud Expertise",
      description: "Became certified AWS and Azure partners, expanding our capabilities",
      milestone: "Expansion"
    },
    {
      year: "2022",
      title: "AI Integration",
      description: "Pioneered AI-powered solutions for our clients' digital transformation",
      milestone: "Innovation"
    },
    {
      year: "2023",
      title: "International Reach",
      description: "Expanded operations globally, serving clients across 15+ countries",
      milestone: "Global"
    },
    {
      year: "2024",
      title: "Industry Leader",
      description: "Recognized as a top IT solutions provider with 500+ successful projects",
      milestone: "Leadership"
    }
  ];

  const team = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      bio: "Visionary leader with 15+ years in enterprise technology",
      image: "👨‍💼",
      skills: ["Strategic Leadership", "Enterprise Architecture", "Digital Transformation"]
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      bio: "Technical expert specializing in cloud solutions and AI",
      image: "👩‍💻",
      skills: ["Cloud Architecture", "AI/ML", "DevOps"]
    },
    {
      name: "Michael Rodriguez",
      role: "Lead Developer",
      bio: "Full-stack developer with expertise in modern frameworks",
      image: "👨‍🔧",
      skills: ["React/Next.js", "Node.js", "Python"]
    },
    {
      name: "Emily Davis",
      role: "Project Manager",
      bio: "Agile expert ensuring seamless project delivery",
      image: "👩‍💼",
      skills: ["Agile/Scrum", "Project Planning", "Client Relations"]
    }
  ];

  const achievements = [
    { number: "500+", label: "Projects Delivered", icon: "🏆" },
    { number: "98%", label: "Client Satisfaction", icon: "😊" },
    { number: "15+", label: "Countries Served", icon: "🌍" },
    { number: "24/7", label: "Support Available", icon: "🔧" }
  ];

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-cyan-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 right-1/3 w-48 h-48 bg-purple-500/8 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative">
        {/* Hero Section */}
        <section className="container mx-auto px-20 py-10">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  About Our Company
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Were not just an IT company – were your technology partners, dedicated to transforming 
                your business through innovative digital solutions that drive real results.
              </p>
            </div>

            {/* Main Story Card */}
            <div className="relative p-12 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Founded in 2019 with a simple yet powerful vision: to bridge the gap between 
                    business ambitions and technological possibilities. What started as a small team 
                    of passionate developers has evolved into a comprehensive IT solutions provider.
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Today, we serve clients globally, delivering everything from custom software 
                    development to enterprise cloud migrations. Our success is measured not just 
                    in projects completed, but in the lasting relationships we build.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30">
                      Innovation Focused
                    </span>
                    <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30">
                      Client Centric
                    </span>
                    <span className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm border border-purple-500/30">
                      Results Driven
                    </span>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                    <h3 className="text-2xl font-bold text-white mb-6 text-center">Our Mission</h3>
                    <p className="text-gray-300 text-center leading-relaxed mb-6">
                      To empower businesses with cutting-edge technology solutions that not only solve 
                      todays challenges but prepare them for tomorrows opportunities.
                    </p>
                    <div className="flex justify-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-2xl">
                        🚀
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="container mx-auto px-20 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Core Values</span>
            </h2>
          </div>

          <div className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className={`p-6 rounded-2xl border transition-all duration-500 cursor-pointer ${
                    activeValue === index 
                      ? 'bg-white/15 border-cyan-400/50 scale-105' 
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                  onClick={() => setActiveValue(index)}
                >
                  <div className="text-4xl mb-4 text-center">{value.icon}</div>
                  <h3 className={`text-lg font-semibold mb-3 text-center transition-colors duration-300 ${
                    activeValue === index ? 'text-cyan-400' : 'text-white'
                  }`}>
                    {value.title}
                  </h3>
                </div>
              ))}
            </div>
            
            {/* Active value description */}
            <div className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm">
              <p className="text-gray-300 text-lg leading-relaxed">
                {values[activeValue].description}
              </p>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="container mx-auto px-20 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Journey</span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-px bg-gradient-to-b from-cyan-400 via-blue-400 to-purple-400"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                      <div className="text-cyan-400 text-sm font-semibold mb-2">{item.milestone}</div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline node */}
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full border-4 border-black shadow-lg">
                    <span className="text-white font-bold text-sm">{item.year.slice(-2)}</span>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="container mx-auto px-20 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Meet Our <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Expert Team</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The brilliant minds behind our innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
                <div className="text-center">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {member.image}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-cyan-400 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{member.bio}</p>
                  
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-2 py-1 bg-white/10 text-gray-300 rounded text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section className="container mx-auto px-20 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Achievements</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group hover:scale-105">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {achievement.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-400 text-sm">{achievement.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-40 py-20">
          <div className="relative p-12 rounded-3xl bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Work <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Together?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Lets discuss how our expertise can help transform your business and achieve your goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 hover:scale-105">
                <span className="relative z-10">Start a Project</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="group px-8 py-4 border border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300">
                <span className="group-hover:text-cyan-400 transition-colors duration-300">Contact Our Team</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}