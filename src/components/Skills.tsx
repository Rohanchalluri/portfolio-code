import React from 'react';
import { Code, Database, BarChart3, Monitor, Wrench, Shield } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="text-pink-400" size={24} />,
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "R", level: 85 },
        { name: "SQL", level: 80 },
        { name: "JavaScript", level: 75 }
      ]
    },
    {
      icon: <Database className="text-orange-400" size={24} />,
      title: "Data & Analytics",
      skills: [
        { name: "Data Cleaning", level: 90 },
        { name: "Data Analytics", level: 85 },
        { name: "Data Visualization", level: 88 },
        { name: "Machine Learning", level: 82 }
      ]
    },
    {
      icon: <BarChart3 className="text-purple-400" size={24} />,
      title: "Tools & Platforms",
      skills: [
        { name: "Tableau", level: 85 },
        { name: "Power BI", level: 70 },
        { name: "GitHub", level: 90 },
        { name: "MS Excel", level: 88 }
      ]
    },
    {
      icon: <Monitor className="text-pink-400" size={24} />,
      title: "Operating Systems",
      skills: [
        { name: "Windows", level: 95 },
        { name: "Linux", level: 80 }
      ]
    },
    {
      icon: <Wrench className="text-orange-400" size={24} />,
      title: "Design Tools",
      skills: [
        { name: "Figma", level: 75 },
        { name: "Adobe Photoshop", level: 70 }
      ]
    },
    {
      icon: <Shield className="text-purple-400" size={24} />,
      title: "Development",
      skills: [
        { name: "MERN Stack", level: 85 },
        { name: "React", level: 88 },
        { name: "Node.js", level: 80 },
        { name: "MongoDB", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-700/50 rounded-2xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-pink-500 to-orange-500 h-2 rounded-full transition-all duration-700 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;