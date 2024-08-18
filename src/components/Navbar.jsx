import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img className="h-10 w-auto" src="https://static.vecteezy.com/system/resources/thumbnails/014/569/372/small/ears-of-wheat-whole-grains-for-making-bread-png.png" alt="Logo" />
            <span className="text-green-600 font-bold text-xl ml-2">Agro-Demo</span>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-700 hover:text-green-600 transition duration-300">Home</Link>
            <Link to="/products" className="text-gray-700 hover:text-green-600 transition duration-300">Products</Link>
            <Link to="/about" className="text-gray-700 hover:text-green-600 transition duration-300">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-green-600 transition duration-300">Contact</Link>
          </div>
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={toggleMenu}
              className="bg-green-500 text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
            >
              <svg
                className={`h-6 w-6 transform transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <Link
              to="/"
              className="block text-gray-700 hover:bg-green-100 hover:text-green-600 transition duration-300 rounded-md px-3 py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/products"
              className="block text-gray-700 hover:bg-green-100 hover:text-green-600 transition duration-300 rounded-md px-3 py-2"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/about"
              className="block text-gray-700 hover:bg-green-100 hover:text-green-600 transition duration-300 rounded-md px-3 py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block text-gray-700 hover:bg-green-100 hover:text-green-600 transition duration-300 rounded-md px-3 py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
