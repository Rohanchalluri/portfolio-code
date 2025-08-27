import React from 'react';
import { Github, Mail, Phone, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <button
            onClick={scrollToTop}
            className="text-2xl font-bold text-white hover:text-pink-400 transition-colors duration-200 mb-6"
          >
            Challluri Rohan
          </button>
          
          <p className="text-gray-400 mb-8">
            Data Science Student | MERN Developer | Cybersecurity Enthusiast
          </p>

          <div className="flex justify-center items-center space-x-6 mb-8">
            <a
              href="https://github.com/Rohanchalluri"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:rohanchalluri77@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
            <a
              href="tel:+919949116742"
              className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110"
            >
              <Phone size={24} />
            </a>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 flex items-center justify-center gap-2">
              © {currentYear} Challluri Rohan. 
              <Heart className="text-red-400" size={16} />
  
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;