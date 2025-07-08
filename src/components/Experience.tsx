import React from 'react';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';

const Experience: React.FC = () => {
  const experienceData = {
    company: 'Linux World Pvt. Ltd.',
    role: 'Intern',
    duration: 'Summer 2024',
    location: 'Remote',
    domains: [
      'DevOps (Docker, Jenkins, Kubernetes)',
      'Machine Learning & Deep Learning',
      'Agentic AI'
    ],
    description: 'Worked on real-time projects, pipelines, and AI applications. Gained hands-on experience with development and deployment workflows.',
    achievements: [
      'Implemented CI/CD pipelines using Jenkins and Docker',
      'Developed machine learning models for real-world applications',
      'Worked with Kubernetes for container orchestration',
      'Gained expertise in Agentic AI systems and deployment'
    ]
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900/10 via-blue-900/10 to-purple-900/10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Professional experience in cutting-edge technologies and real-world applications
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-2xl">
            {/* Company Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-blue-600 rounded-xl flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{experienceData.company}</h3>
                  <p className="text-lg text-teal-400 font-semibold">{experienceData.role}</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 text-sm">
                <div className="flex items-center gap-2 text-gray-300">
                  <Calendar className="w-4 h-4" />
                  <span>{experienceData.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin className="w-4 h-4" />
                  <span>{experienceData.location}</span>
                </div>
              </div>
            </div>

            {/* Domains */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-teal-400" />
                Domains Covered
              </h4>
              <div className="grid md:grid-cols-3 gap-4">
                {experienceData.domains.map((domain, index) => (
                  <div key={index} className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <p className="text-gray-300 text-center font-medium">{domain}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-white mb-4">Description</h4>
              <p className="text-gray-300 leading-relaxed">{experienceData.description}</p>
            </div>

            {/* Key Achievements */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Key Achievements</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {experienceData.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline Visualization */}
          <div className="mt-12 relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-teal-400 to-blue-400"></div>
            
            <div className="relative flex flex-col items-center space-y-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 w-full max-w-md">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-600 rounded-full mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h5 className="text-lg font-semibold text-white text-center mb-2">Current Focus</h5>
                <p className="text-gray-300 text-center text-sm">
                  Seeking opportunities at top-tier tech companies like Oracle
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;