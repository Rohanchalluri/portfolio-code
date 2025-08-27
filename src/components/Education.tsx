import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-8 shadow-2xl border border-gray-600">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 p-4 bg-gradient-to-r from-pink-600 to-orange-600 rounded-xl">
                <GraduationCap className="text-white" size={32} />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Vaagdevi College of Engineering, Warangal
                </h3>
                <p className="text-xl text-pink-400 mb-4">
                  B.Tech in Computer Science & Engineering (Data Science)
                </p>
                
                <div className="flex flex-wrap items-center gap-6 mb-4">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Calendar size={18} />
                    <span>September 2023 – May 2026</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-300">CGPA:</span>
                    <span className="text-green-400 font-semibold">74%</span>
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed">
                  Pursuing a specialized degree in Computer Science with a focus on Data Science, 
                  gaining comprehensive knowledge in machine learning algorithms, statistical analysis, 
                  data visualization, and big data technologies while maintaining a strong foundation 
                  in software engineering principles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;