import React from 'react';
import { Briefcase, Calendar, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Development (MERN)",
      company: "Personal Project",
      period: "Dec 2024 – Jan 2025",
      description: "Built a fully functional Spotify Clone with authentication, playlists, and music streaming functionality using the MERN stack.",
      skills: ["React", "Node.js", "MongoDB", "Express", "Authentication", "Music Streaming"]
    },
    {
      title: "Data Analytics Simulation",
      company: "Accenture",
      period: "Jan 2025",
      description: "Cleaned & modeled datasets, identified content trends, and prepared comprehensive insights presentations for stakeholders.",
      skills: ["Data Cleaning", "Data Modeling", "Trend Analysis", "Presentations"]
    },
    {
      title: "Cybersecurity Analyst Simulation",
      company: "Tata",
      period: "Jan 2025",
      description: "Worked on IAM principles and delivered comprehensive documentation for secure access management systems.",
      skills: ["IAM", "Security Documentation", "Access Management", "Cybersecurity"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Internships & Simulations</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-8 shadow-2xl border border-gray-600 hover:border-gray-500 transition-all duration-300 transform hover:scale-[1.02]"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 p-4 bg-gradient-to-r from-pink-600 to-orange-600 rounded-xl">
                  <Briefcase className="text-white" size={24} />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      <p className="text-xl text-pink-400">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300 mt-2 lg:mt-0">
                      <Calendar size={18} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-gray-600 text-gray-300 rounded-full text-sm hover:bg-gray-500 transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;