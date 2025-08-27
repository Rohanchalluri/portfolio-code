import React from 'react';
import { Brain, Code, Shield } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Brain className="text-pink-400" size={32} />,
      title: "Data Science",
      description: "Machine learning, data visualization, and predictive analytics"
    },
    {
      icon: <Code className="text-orange-400" size={32} />,
      title: "Full Stack Development",
      description: "MERN stack development with modern frameworks"
    },
    {
      icon: <Shield className="text-purple-400" size={32} />,
      title: "Cybersecurity",
      description: "IAM principles and secure access management"
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              I am a passionate Data Science student skilled in machine learning, data visualization, 
              and predictive analytics. With a strong foundation in Python, R, SQL, and data-driven 
              problem solving, I aim to leverage my technical expertise to deliver impactful solutions 
              while continuously learning and growing.
            </p>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              My journey combines the analytical power of data science with the creativity of full-stack 
              development and the critical thinking required for cybersecurity. I'm constantly exploring 
              new technologies and methodologies to stay at the forefront of these rapidly evolving fields.
            </p>

            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-gray-700 text-gray-300 rounded-full text-sm">Problem Solver</span>
              <span className="px-4 py-2 bg-gray-700 text-gray-300 rounded-full text-sm">Team Player</span>
              <span className="px-4 py-2 bg-gray-700 text-gray-300 rounded-full text-sm">Quick Learner</span>
              <span className="px-4 py-2 bg-gray-700 text-gray-300 rounded-full text-sm">Tech Enthusiast</span>
            </div>
          </div>

          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-gray-700/50 rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;