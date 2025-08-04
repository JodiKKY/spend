import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import icon from '../assets/icon.png'; // Your logo

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      {/* Main 3-column Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Logo and Tagline */}
        <div className="text-center md:text-left">
          <img src={icon} alt="Logo" className="h-16 w-16 mx-auto md:mx-0 mb-2" />
          <h2 className="text-red-500 font-bold text-xl">YourBrand</h2>
          <p className="mt-2">Your Complete Financial Management Solution</p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Contact</h3>
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt /> Accra
          </p>
          <p className="flex items-center gap-2 mt-2">
            <FaPhone className="rotate-90" /> +233 205 287 071
          </p>
          <p className="flex items-center gap-2 mt-2">
            <FaEnvelope /> toniSedjoah@gmail.com
          </p>
        </div>

        {/* App Download & Socials */}
        <div>
          <h4 className="text-lg mb-4 font-semibold text-center md:text-left">Get the Spend App</h4>
          <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto md:mx-0 text-center md:text-left">
            Download our app and take control of your finances anytime, anywhere.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-6 max-w-md mx-auto md:mx-0">
            <a
              href="https://apps.apple.com/gh/app/spend-finance-invoicing/id6448402636"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download on the App Store"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="w-[140px] h-auto"
              />
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.tonysed.spend&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get it on Google Play"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="w-[140px] h-auto"
              />
            </a>
          </div>

          <div className="flex gap-5 justify-center md:justify-start max-w-md mx-auto md:mx-0">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <img
                src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
                alt="Facebook"
                className="w-7 h-7 transition-transform duration-200 hover:scale-110"
              />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                alt="Instagram"
                className="w-7 h-7 transition-transform duration-200 hover:scale-110"
              />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <img
                src="https://cdn-icons-png.flaticon.com/512/145/145812.png"
                alt="Twitter"
                className="w-7 h-7 transition-transform duration-200 hover:scale-110"
              />
            </a>
          </div>
        </div>
      </div>

      <p className="text-center text-sm text-gray-400 mt-8">&copy; {new Date().getFullYear()} Spend All rights reserved.</p>
    </footer>
  );
};

export default Footer;
