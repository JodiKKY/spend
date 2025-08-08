import React, { useEffect, useState } from 'react';
import icon from '../assets/icon.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="py-3 px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={icon}
            alt="Logo"
            className="object-contain"
            style={{
              width: '6.5rem',
              height: '4.5rem',
              marginLeft: '10px',
            }}
          />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <a
            href="/"
            className={`font-normal transition duration-200 ${
              scrolled
                ? 'text-blue-500 hover:text-blue-700'
                : 'text-white hover:text-blue-500'
            }`}
          >
            Home
          </a>
          <a
            href="/faqs"
            className={`font-normal transition duration-200 ${
              scrolled
                ? 'text-blue-500 hover:text-blue-700'
                : 'text-white hover:text-blue-500'
            }`}
          >
            FAQs
          </a>
          <a
            href="/privacy-policy"
            className={`font-normal transition duration-200 ${
              scrolled
                ? 'text-blue-500 hover:text-blue-700'
                : 'text-white hover:text-blue-500'
            }`}
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
