import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/20 backdrop-blur-sm border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-gray-300">Made with</span>
            <Heart className="w-4 h-4 text-red-400 fill-current" />
            <span className="text-gray-300">and</span>
            <Code className="w-4 h-4 text-blue-400" />
            <span className="text-gray-300">powered by</span>
            <Coffee className="w-4 h-4 text-yellow-400" />
          </div>
          
          <p className="text-gray-400 text-sm mb-4">
            © {currentYear} Krishan Kumar Sharma. All rights reserved.
          </p>
          
          <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
            <span>Data Science Enthusiast</span>
            <span>•</span>
            <span>Machine Learning Developer</span>
            <span>•</span>
            <span>Problem Solver</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;