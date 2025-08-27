import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Data Analytics",
      issuer: "CISCO",
      category: "Data Science"
    },
    {
      title: "Data Analysis using Python",
      issuer: "Cognitive",
      category: "Programming"
    },
    {
      title: "Cybersecurity",
      issuer: "IBM Skill Build & CISCO",
      category: "Security"
    },
    {
      title: "Cloud Computing",
      issuer: "Shaw Academy",
      category: "Cloud Technology"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Data Science': 'from-pink-600 to-purple-600',
      'Programming': 'from-orange-600 to-pink-600',
      'Security': 'from-red-600 to-orange-600',
      'Cloud Technology': 'from-purple-600 to-pink-600'
    };
    return colors[category as keyof typeof colors] || 'from-gray-600 to-gray-700';
  };

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-6 shadow-xl border border-gray-600 hover:border-gray-500 transition-all duration-300 transform hover:scale-105"
            >
              <div className={`p-4 bg-gradient-to-r ${getCategoryColor(cert.category)} rounded-xl mb-4 inline-block`}>
                <Award className="text-white" size={32} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
              <p className="text-gray-400 mb-3">{cert.issuer}</p>
              <span className="inline-block px-3 py-1 bg-gray-600 text-gray-300 rounded-full text-sm">
                {cert.category}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400">
            Continuously pursuing new certifications to stay updated with industry trends and technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;