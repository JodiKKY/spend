import React, { useEffect, useState, useRef } from 'react';
import icon from '../assets/icon.png';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !toggleRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [menuOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const navBg = scrolled || menuOpen
    ? 'bg-white shadow-md'
    : 'bg-transparent';

  // ALWAYS BLUE LINKS
  const linkColor = 'text-blue-500 hover:text-blue-700';

  const hamburgerColor = scrolled || menuOpen
    ? '#3b82f6'
    : '#ffffff';

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navBg}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="px-6 py-3 flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <a
          href="/"
          aria-label="Go to homepage"
          className="flex items-center"
        >
          <img
            src={icon}
            alt="Logo"
            className="object-contain"
            style={{ width: '6.5rem', height: '4.5rem' }}
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={`text-sm font-medium tracking-wide transition-colors duration-200 ${linkColor}`}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Hamburger Button */}
        <button
          ref={toggleRef}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-colors duration-200"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span
            className="block transition-all duration-300 origin-center"
            style={{
              width: '22px',
              height: '2px',
              backgroundColor: hamburgerColor,
              marginBottom: '5px',
              transform: menuOpen
                ? 'translateY(7px) rotate(45deg)'
                : 'none',
            }}
          />
          <span
            className="block transition-all duration-300"
            style={{
              width: '22px',
              height: '2px',
              backgroundColor: hamburgerColor,
              opacity: menuOpen ? 0 : 1,
              marginBottom: '5px',
            }}
          />
          <span
            className="block transition-all duration-300 origin-center"
            style={{
              width: '22px',
              height: '2px',
              backgroundColor: hamburgerColor,
              transform: menuOpen
                ? 'translateY(-7px) rotate(-45deg)'
                : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: menuOpen ? '300px' : '0px',
          opacity: menuOpen ? 1 : 0,
        }}
        aria-hidden={!menuOpen}
      >
        <div className="bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-1">
          {NAV_LINKS.map(({ label, href }, i) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 font-medium text-sm py-3 px-3 rounded-lg transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              tabIndex={menuOpen ? 0 : -1}
              style={{
                transitionDelay: menuOpen
                  ? `${i * 40}ms`
                  : '0ms',
              }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;