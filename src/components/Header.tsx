import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Mail, Phone } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#education', label: 'Education' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-white">Challluri Rohan</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/Rohanchalluri"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:rohanchalluri77@gmail.com"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              <Mail size={20} />
            </a>
            <a
              href="tel:+919949116742"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              <Phone size={20} />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-gray-800/95 backdrop-blur-lg rounded-lg mt-2 py-4">
            <nav className="flex flex-col space-y-4 px-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-left"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-700">
                <a
                  href="https://github.com/Rohanchalluri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <Github size={20} />
                </a>
                <a
                  href="mailto:rohanchalluri77@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <Mail size={20} />
                </a>
                <a
                  href="tel:+919949116742"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <Phone size={20} />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;