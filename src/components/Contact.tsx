import React, { useState } from 'react';
import { Mail, Phone, Github, MapPin, Send, Heart } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for your message! I\'ll get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const interests = [
    "Photography & Editing",
    "Video Editing", 
    "Reading",
    "Exploring New Technology"
  ];

  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Let's Connect</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I'm always interested in discussing new opportunities, innovative projects, 
              or just having a chat about technology and data science. Feel free to reach out!
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-r from-pink-600 to-orange-600 rounded-lg">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-gray-400">Phone</p>
                  <a href="tel:+919949116742" className="text-white hover:text-blue-400 transition-colors duration-200">
                    +91-9949116742
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-r from-pink-600 to-orange-600 rounded-lg">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-gray-400">Email</p>
                  <a href="mailto:rohanchalluri77@gmail.com" className="text-white hover:text-blue-400 transition-colors duration-200">
                    rohanchalluri77@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-r from-pink-600 to-orange-600 rounded-lg">
                  <Github className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-gray-400">GitHub</p>
                  <a 
                    href="https://github.com/Rohanchalluri" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 transition-colors duration-200"
                  >
                    https://github.com/Rohanchalluri
                  </a>
                </div>
              </div>
            </div>

            {/* Interests Section */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Heart className="text-red-400" size={20} />
                Interests
              </h4>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-gray-600 transition-colors duration-200"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-gray-700/50 rounded-2xl p-8 shadow-xl">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-pink-600 to-orange-600 hover:from-pink-700 hover:to-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;