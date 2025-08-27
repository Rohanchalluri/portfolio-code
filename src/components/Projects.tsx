import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Spotify Clone (MERN Stack)",
      description: "Responsive web app for music streaming with authentication, playlists, and music streaming functionality.",
      tech: ["MongoDB", "Express.js", "React", "Node.js"],
      github: "#",
      demo: "#",
      gradient: "from-pink-500 to-orange-500"
    },
    {
      title: "Solar Power Output Prediction",
      description: "Data-driven model using Linear Regression to predict solar energy output based on weather conditions.",
      tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      github: "#",
      demo: "#",
      gradient: "from-orange-500 to-pink-500"
    },
    {
      title: "Wind Power Generation Forecasting",
      description: "Built an ML-based model to forecast wind power generation for renewable energy optimization.",
      tech: ["Machine Learning", "Python", "Forecasting", "Renewable Energy"],
      github: "#",
      demo: "#",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Sustainable Supply Chain Dashboard",
      description: "Designed an interactive Power BI dashboard to track KPIs for sustainable supply chain performance and decision-making.",
      tech: ["Power BI", "Data Visualization", "KPI Tracking", "Supply Chain"],
      github: "#",
      demo: "#",
      gradient: "from-pink-500 to-purple-500"
    },
    {
      title: "Advanced Task Management Web Application",
      description: "A full-stack task management application with intelligent calendar integration, progress tracking, and real-time notifications. Features interactive weekly calendar, mobile-first responsive design, and persistent user preferences.",
      tech: ["React 18", "TypeScript", "Tailwind CSS", "Supabase", "Shadcn/UI"],
      github: "#",
      demo: "#",
      gradient: "from-orange-500 to-purple-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 border border-slate-700 hover:border-pink-500/50"
            >
              <div className={`w-full h-40 bg-gradient-to-br ${project.gradient} rounded-lg mb-4 flex items-center justify-center`}>
                <div className="text-white text-6xl font-bold opacity-20">
                  {project.title.split(' ')[0]}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">
                {project.title}
              </h3>
              
              <p className="text-slate-300 mb-4 leading-relaxed text-sm">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-slate-700 text-pink-400 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="flex items-center gap-2 px-3 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors duration-200 text-sm"
                >
                  <Github size={16} />
                  Code
                </a>
                <a
                  href={project.demo}
                  className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white rounded-lg transition-all duration-200 text-sm"
                >
                  <ExternalLink size={16} />
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;