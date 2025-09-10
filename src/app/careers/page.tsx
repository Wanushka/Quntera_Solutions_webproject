"use client";

import { useState, useEffect } from 'react';

export default function CareersPage() {
  type Job = {
    id: number;
    title: string;
    department: string;
    location: string;
    type: string;
    experience: string;
    salary: string;
    skills: string[];
    description: string;
    requirements: string[];
  };

  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const jobOpenings = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Colombo, Sri Lanka",
      type: "Full-time",
      experience: "5+ years",
      salary: "LKR 150,000 - 200,000",
      skills: ["React", "Node.js", "TypeScript", "AWS", "MongoDB"],
      description: "We're looking for a talented Full Stack Developer to join our growing engineering team. You'll work on cutting-edge projects using modern technologies.",
      requirements: [
        "5+ years of experience in full-stack development",
        "Strong proficiency in React, Node.js, and TypeScript",
        "Experience with cloud platforms (AWS preferred)",
        "Knowledge of database systems (MongoDB, PostgreSQL)",
        "Experience with CI/CD pipelines"
      ]
    },
    {
      id: 2,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      salary: "LKR 120,000 - 180,000",
      skills: ["Docker", "Kubernetes", "AWS", "Terraform", "Jenkins"],
      description: "Join our DevOps team to build and maintain scalable infrastructure that powers our applications.",
      requirements: [
        "3+ years of DevOps experience",
        "Proficiency with containerization (Docker, Kubernetes)",
        "Infrastructure as Code experience (Terraform)",
        "CI/CD pipeline expertise",
        "Cloud platform experience (AWS, Azure)"
      ]
    },
    {
      id: 3,
      title: "UI/UX Designer",
      department: "Design",
      location: "Colombo, Sri Lanka",
      type: "Full-time",
      experience: "2+ years",
      salary: "LKR 80,000 - 120,000",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research", "Design Systems"],
      description: "Create beautiful, intuitive user experiences that delight our clients and their customers.",
      requirements: [
        "2+ years of UI/UX design experience",
        "Proficiency in design tools (Figma, Adobe Creative Suite)",
        "Strong portfolio showcasing web and mobile designs",
        "Understanding of user-centered design principles",
        "Experience with design systems"
      ]
    },
    {
      id: 4,
      title: "Data Scientist",
      department: "Analytics",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      salary: "LKR 140,000 - 190,000",
      skills: ["Python", "Machine Learning", "TensorFlow", "SQL", "Statistics"],
      description: "Leverage data to drive insights and build intelligent solutions for our clients.",
      requirements: [
        "4+ years of data science experience",
        "Strong programming skills in Python/R",
        "Experience with ML frameworks (TensorFlow, PyTorch)",
        "Statistical analysis and modeling expertise",
        "Experience with big data technologies"
      ]
    },
    {
      id: 5,
      title: "Project Manager",
      department: "Management",
      location: "Colombo, Sri Lanka",
      type: "Full-time",
      experience: "3+ years",
      salary: "LKR 100,000 - 150,000",
      skills: ["Agile", "Scrum", "JIRA", "Risk Management", "Stakeholder Management"],
      description: "Lead cross-functional teams to deliver exceptional projects on time and within budget.",
      requirements: [
        "3+ years of project management experience",
        "PMP or Agile certification preferred",
        "Experience managing software development projects",
        "Strong communication and leadership skills",
        "Proficiency with project management tools"
      ]
    },
    {
      id: 6,
      title: "Junior Software Developer",
      department: "Engineering",
      location: "Colombo, Sri Lanka",
      type: "Full-time",
      experience: "0-2 years",
      salary: "LKR 60,000 - 90,000",
      skills: ["JavaScript", "React", "Git", "SQL", "Problem Solving"],
      description: "Start your career with us! Perfect opportunity for recent graduates and junior developers.",
      requirements: [
        "Computer Science degree or equivalent",
        "Basic knowledge of web technologies",
        "Understanding of programming fundamentals",
        "Eagerness to learn and grow",
        "Good problem-solving skills"
      ]
    }
  ];

  const benefits = [
    {
      title: "Competitive Salary",
      description: "Market-leading compensation packages",
      icon: "💰"
    },
    {
      title: "Health Insurance",
      description: "Comprehensive medical coverage",
      icon: "🏥"
    },
    {
      title: "Flexible Hours",
      description: "Work-life balance with flexible scheduling",
      icon: "⏰"
    },
    {
      title: "Remote Work",
      description: "Hybrid and fully remote options available",
      icon: "🏠"
    },
    {
      title: "Learning Budget",
      description: "Annual budget for courses and conferences",
      icon: "📚"
    },
    {
      title: "Modern Equipment",
      description: "Latest laptops and development tools",
      icon: "💻"
    },
    {
      title: "Team Events",
      description: "Regular team building and social events",
      icon: "🎉"
    },
    {
      title: "Career Growth",
      description: "Clear advancement paths and mentorship",
      icon: "📈"
    }
  ];

  const departments = ['All', 'Engineering', 'Design', 'Analytics', 'Management'];

  const filteredJobs = activeFilter === 'All' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === activeFilter);

  const stats = [
    { number: "50+", label: "Team Members" },
    { number: "15+", label: "Open Positions" },
    { number: "95%", label: "Employee Satisfaction" },
    { number: "2.5x", label: "Average Salary Growth" }
  ];

  const culture = [
    {
      title: "Innovation Culture",
      description: "We encourage experimentation and creative problem-solving",
      image: "🚀"
    },
    {
      title: "Collaborative Environment",
      description: "Work with brilliant minds in a supportive team atmosphere",
      image: "🤝"
    },
    {
      title: "Continuous Learning",
      description: "Stay ahead with latest technologies and methodologies",
      image: "🎓"
    },
    {
      title: "Work-Life Balance",
      description: "Maintain healthy balance between professional and personal life",
      image: "⚖️"
    }
  ];

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 left-1/3 w-64 h-64 bg-purple-500/8 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Join Our Team
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                Build the future of technology with us. Were looking for passionate individuals 
                who want to make a real impact in the tech industry.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Job Openings Section */}
        <section className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Open <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Positions</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Discover exciting opportunities to grow your career with us
            </p>

            {/* Department Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setActiveFilter(dept)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === dept
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-white/20'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Job Listings */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-20">
            {filteredJobs.map((job) => (
              <div 
                key={job.id} 
                className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedJob(job)}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30">
                        {job.department}
                      </span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30">
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400 text-sm">{job.location}</p>
                    <p className="text-gray-400 text-sm">{job.experience}</p>
                  </div>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">{job.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {job.skills.slice(0, 4).map((skill, index) => (
                    <span key={index} className="px-2 py-1 bg-white/10 text-gray-300 rounded text-xs">
                      {skill}
                    </span>
                  ))}
                  {job.skills.length > 4 && (
                    <span className="px-2 py-1 bg-white/10 text-gray-300 rounded text-xs">
                      +{job.skills.length - 4} more
                    </span>
                  )}
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-cyan-400 font-semibold">{job.salary}</span>
                  <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 text-sm font-medium">
                    View Details
                  </button>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Job Detail Modal */}
        {selectedJob && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6 z-50">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">{selectedJob.title}</h2>
                  <div className="flex gap-2 mb-4">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                      {selectedJob.department}
                    </span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                      {selectedJob.type}
                    </span>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedJob(null)}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="mb-6">
                <p className="text-gray-300 leading-relaxed mb-4">{selectedJob.description}</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400">Location:</span>
                    <span className="text-white ml-2">{selectedJob.location}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Experience:</span>
                    <span className="text-white ml-2">{selectedJob.experience}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-gray-400">Salary:</span>
                    <span className="text-cyan-400 ml-2 font-semibold">{selectedJob.salary}</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Requirements</h3>
                <ul className="space-y-2">
                  {selectedJob.requirements.map((req, index) => (
                    <li key={index} className="text-gray-300 text-sm flex items-start">
                      <span className="text-cyan-400 mr-2">•</span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-3">Required Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedJob.skills.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm border border-white/20">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300">
                  Apply Now
                </button>
                <button className="px-6 py-3 border border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                  Save Job
                </button>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <section className="container mx-auto px-40 py-20">
          <div className="relative p-12 rounded-3xl bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Dont See Your <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Dream Role?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Were always looking for talented individuals. Send us your resume and lets explore opportunities together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 hover:scale-105">
                <span className="relative z-10">Submit Resume</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="group px-8 py-4 border border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300">
                <span className="group-hover:text-cyan-400 transition-colors duration-300">Contact HR</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}