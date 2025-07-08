import React from 'react';
import { Code, Database, Brain, Wrench, Monitor, Server } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Programming Languages',
      skills: ['C', 'Java', 'Python', 'HTML', 'CSS', 'SQL'],
      color: 'blue'
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Machine Learning & AI',
      skills: ['Scikit-Learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Streamlit', 'Jupyter Notebook'],
      color: 'purple'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Database Management',
      skills: ['MySQL', 'Workbench', 'Data Preprocessing', 'Data Cleaning'],
      color: 'pink'
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: 'DevOps Tools',
      skills: ['Docker', 'Jenkins', 'Kubernetes', 'RedHat Linux'],
      color: 'teal'
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: 'Development Tools',
      skills: ['VS Code', 'PyCharm', 'Git & GitHub', 'Power BI'],
      color: 'orange'
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: 'Core Concepts',
      skills: ['OOP', 'DSA', 'DBMS', 'Operating Systems', 'Computer Networks'],
      color: 'green'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-400 to-blue-600',
      purple: 'from-purple-400 to-purple-600',
      pink: 'from-pink-400 to-pink-600',
      teal: 'from-teal-400 to-teal-600',
      orange: 'from-orange-400 to-orange-600',
      green: 'from-green-400 to-green-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/10 to-pink-900/10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for data science, machine learning, and software development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${getColorClasses(category.color)} mb-6 flex items-center justify-center text-white shadow-lg`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gray-100 transition-colors">
                {category.title}
              </h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getColorClasses(category.color)}`}></div>
                    <span className="text-gray-300 group-hover:text-gray-200 transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Highlight */}
        <div className="mt-16 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Specialized Expertise
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                ML
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Machine Learning</h4>
              <p className="text-gray-300 text-sm">
                Model Training, Evaluation, Deep Learning, NLP, Generative AI
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                DA
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Data Analytics</h4>
              <p className="text-gray-300 text-sm">
                Data Mining, Data Cleaning, Statistical Analysis, Visualization
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-orange-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                SD
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Software Development</h4>
              <p className="text-gray-300 text-sm">
                Full-stack Development, Database Design, System Architecture
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;