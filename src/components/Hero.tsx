import React, { useState, useEffect } from 'react';
import { Download, Github, Linkedin, MessageCircle, MapPin, Mail, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = [
    'Linux Developer',
    'Data Mining & Analytics',
    'Data Science Expert',
    'SQL Specialist',
    'Power BI Developer',
    'Machine Learning Engineer'
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    let charIndex = 0;
    
    const typeText = () => {
      if (charIndex < currentTitle.length) {
        setDisplayText(currentTitle.slice(0, charIndex + 1));
        charIndex++;
        setTimeout(typeText, 100);
      } else {
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
          setDisplayText('');
        }, 2000);
      }
    };

    typeText();
  }, [currentIndex]);

  const handleDownloadResume = () => {
    // Create a temporary link to download the resume
    const link = document.createElement('a');
    link.href = '/KrishanKumarSharma_data_analyst_resume.pdf';
    link.download = 'KrishanKumarSharma_data_analyst_resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col lg:flex-row items-center justify-center space-y-12 lg:space-y-0 lg:space-x-16">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-400 to-purple-600 p-1 shadow-2xl">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-gray-900">
                  <img 
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="Krishan Kumar Sharma" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl blur-xl opacity-30 animate-pulse"></div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 max-w-2xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Hello, I'm </span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Krishan Kumar Sharma
              </span>
            </h1>

            <div className="text-xl lg:text-2xl text-gray-300 mb-8 h-16 flex items-center justify-center lg:justify-start">
              <span className="mr-2">🚀</span>
              <span className="text-blue-400 font-semibold min-w-0">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8 text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Masters in Computer Application from VGU Jaipur</span>
              </div>
            </div>

            <div className="mb-8">
              <p className="text-lg text-gray-400 mb-4">
                🎯 Goal: To work at top-tier tech companies like Oracle
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  <span>kksharma271104@gmail.com</span>
                </div>
                <div className="flex items-center gap-1">
                  <Phone className="w-4 h-4" />
                  <span>9653736099</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <button
                onClick={handleDownloadResume}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></span>
                <span className="relative flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download Resume
                </span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6">
              <a
                href="https://github.com/krishansharma91"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <Github className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://linkedin.com/in/krishansharma91"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://discord.com/users/krishansharma91"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <MessageCircle className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;