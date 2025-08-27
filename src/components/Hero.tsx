import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Mail, Phone } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-purple-900 via-rose-900 to-orange-900">
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-600/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-600/10 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            <span className="block">Challluri</span>
            <span className="block bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
              Rohan
            </span>
          </h1>
          
          <div className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 h-12 flex items-center justify-center">
            <span className="font-medium">
              Data Science Student
            </span>
          </div>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Passionate about transforming data into insights and building innovative web solutions. 
            Currently pursuing B.Tech in Computer Science with a focus on Data Science.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="mailto:rohanchalluri77@gmail.com"
              className="flex items-center gap-2 bg-gradient-to-r from-pink-600 to-orange-600 hover:from-pink-700 hover:to-orange-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Mail size={20} />
              Get In Touch
            </a>
            <a
              href="https://github.com/Rohanchalluri"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-2 border-gray-600 hover:border-white text-gray-300 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <Github size={20} />
              View GitHub
            </a>
          </div>

          <div className="flex justify-center items-center gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <Phone size={18} />
              <span>+91-9949116742</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} />
              <span>rohanchalluri77@gmail.com</span>
            </div>
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white transition-colors duration-300 animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;