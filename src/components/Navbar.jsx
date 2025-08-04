import React from 'react';
import icon from '../assets/icon.png';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-3 px-6 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src={icon}
          alt="Logo"
          className="object-contain"
          style={{
            width: '6.5rem',   // Custom width (104px)
            height: '4.5rem',  // Custom height (72px)
            marginLeft: '10px' // Shift right slightly
          }}
        />
      </div>

      {/* Download Button */}
      <a
        href="/path/to/your/file.pdf"
        download
        className="bg-blue-500 text-white font-semibold text-sm px-[37px] py-[9px] rounded-full inline-block float-right hover:bg-blue-700 transition duration-200"
      >
        Download
      </a>
    </nav>
  );
};

export default Navbar;
