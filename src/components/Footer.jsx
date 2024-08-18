import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-700 to-green-800 text-white">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">About Us</h3>
            <p className="text-sm leading-loose">
              We are a passionate team dedicated to delivering innovative solutions. 
              Our mission is to create value and inspire growth in everything we do.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-indigo-200 transition-colors duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-indigo-200 transition-colors duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-indigo-200 transition-colors duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-indigo-200 transition-colors duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-indigo-200 transition-colors duration-300">Home</a></li>
              <li><a href="#" className="hover:text-indigo-200 transition-colors duration-300">Services</a></li>
              <li><a href="#" className="hover:text-indigo-200 transition-colors duration-300">Products</a></li>
              <li><a href="#" className="hover:text-indigo-200 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Contact Information Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Contact Us</h3>
            <p className="flex items-center space-x-2">
              <i className="fas fa-map-marker-alt"></i>
              <span>Kosam, Ta - Galteshwar,<br /> Dist - kheda,<br /> Gujarat - 388245, India</span>
            </p>
            <p className="flex items-center space-x-2">
              <i className="fas fa-phone"></i>
              <span>+191 9898989898</span>
            </p>
            <p className="flex items-center space-x-2">
              <i className="fas fa-envelope"></i>
              <span>email@example.com</span>
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Stay Updated</h3>
            <p className="text-sm">Subscribe to our newsletter for the latest updates and offers.</p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-2 bg-white text-black bg-opacity-20 rounded focus:outline-none focus:ring-2"
              />
              <button 
                type="submit" 
                className="px-4 py-2 bg-white font-semibold text-black rounded hover:bg-opacity-90 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 pt-8 border-t border-white border-opacity-20 text-center">
          <p>&copy; 2024 Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;