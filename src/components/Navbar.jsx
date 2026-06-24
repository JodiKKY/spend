import React, { useEffect, useState, useRef } from 'react';

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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [menuOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <nav
      className="fixed top-4 sm:top-6 inset-x-0 z-50 flex flex-col items-center gap-2 px-4"
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Pill bar */}
      <div
        className={`w-full max-w-7xl flex items-center justify-between gap-2 rounded-full border border-white/60 bg-white/90 backdrop-blur-md pl-2 pr-2 py-4 transition-shadow duration-300 ${
          scrolled || menuOpen
            ? 'shadow-lg shadow-blue-950/15'
            : 'shadow-md shadow-blue-950/10'
        }`}
      >
        {/* Logo */}
        <a
          href="/"
          aria-label="Go to homepage"
          className="flex items-center shrink-0 pl-3 text-xl font-bold tracking-tight text-blue-600"
        >
          Spend
        </a>

        
        <div className="hidden md:flex items-center gap-1 ml-auto">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-bold tracking-wide text-blue-600 hover:text-white hover:bg-blue-500 rounded-full px-4 py-1.5 transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Hamburger, mobile only */}
        <button
          ref={toggleRef}
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 rounded-full bg-blue-50 hover:bg-blue-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-colors duration-200 shrink-0"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span
            className="block transition-all duration-300 origin-center"
            style={{
              width: '18px',
              height: '2px',
              backgroundColor: '#1e40af',
              marginBottom: '4px',
              transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none',
            }}
          />
          <span
            className="block transition-all duration-300"
            style={{
              width: '18px',
              height: '2px',
              backgroundColor: '#1e40af',
              opacity: menuOpen ? 0 : 1,
              marginBottom: '4px',
            }}
          />
          <span
            className="block transition-all duration-300 origin-center"
            style={{
              width: '18px',
              height: '2px',
              backgroundColor: '#1e40af',
              transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile menu, its own floating pill panel below the bar */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className="md:hidden w-full max-w-3xl overflow-hidden transition-all duration-300 ease-in-out rounded-3xl"
        style={{ maxHeight: menuOpen ? '320px' : '0px', opacity: menuOpen ? 1 : 0 }}
        aria-hidden={!menuOpen}
      >
        <div className="bg-white/95 backdrop-blur-md border border-white/60 shadow-lg shadow-blue-950/15 rounded-3xl px-3 py-3 flex flex-col gap-1">
          {NAV_LINKS.map(({ label, href }, i) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-blue-800 hover:text-white hover:bg-blue-700 font-medium text-sm py-3 px-4 rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              tabIndex={menuOpen ? 0 : -1}
              style={{ transitionDelay: menuOpen ? `${i * 40}ms` : '0ms' }}
            >
              {label}
            </a>
          ))}
          <a
            href="#download"
            onClick={() => setMenuOpen(false)}
            className="mt-1 text-center text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-full px-4 py-3 transition-colors duration-200"
            tabIndex={menuOpen ? 0 : -1}
          >
            Get the App
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;