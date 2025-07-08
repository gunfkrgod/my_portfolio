import React from 'react';
import { MapPin, Mail, Phone, GraduationCap, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-pink-900/10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Enthusiastic & Detail-Oriented Developer
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm an enthusiastic and detail-oriented engineering student pursuing my BTech at 
                Jaipur Engineering College, Jaipur, Rajasthan. With a strong foundation in computer 
                science, I specialize in Python, Machine Learning, SQL, data cleaning and Advanced Excel.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I have hands-on experience building real-world projects and interning at a leading 
                tech firm. I'm a quick learner and a problem-solver aiming to work in top 
                product-based companies like Oracle.
              </p>
            </div>

            {/* Quick Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <GraduationCap className="w-6 h-6 text-blue-400" />
                  <h4 className="text-lg font-semibold text-white">Education</h4>
                </div>
                <p className="text-gray-300 text-sm">
                  BTech Information Technology
                </p>
                <p className="text-gray-400 text-sm">
                  Jaipur Engineering College
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <Target className="w-6 h-6 text-purple-400" />
                  <h4 className="text-lg font-semibold text-white">Goal</h4>
                </div>
                <p className="text-gray-300 text-sm">
                  Work at top-tier tech companies
                </p>
                <p className="text-gray-400 text-sm">
                  Focus on Oracle and similar firms
                </p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a 
                      href="mailto:kksharma271104@gmail.com"
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      kksharma271104@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <a 
                      href="tel:9653736099"
                      className="text-white hover:text-purple-400 transition-colors"
                    >
                      9653736099
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">Jaipur, Rajasthan, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <div className="text-2xl font-bold text-blue-400 mb-2">5+</div>
                <div className="text-gray-300 text-sm">Programming Languages</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <div className="text-2xl font-bold text-purple-400 mb-2">10+</div>
                <div className="text-gray-300 text-sm">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;