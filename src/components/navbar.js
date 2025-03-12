import React from 'react';
import Logo from '../assets/Logo.png'

import { useState } from 'react';

const Navbar = ({ onClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-4 bg-[#FFFBFB]">
      {/* Bagian Kiri */}
      <div id="kiri" className="flex flex-row items-center w-full md:w-auto justify-between">
        <img src={Logo} className="size-16 md:size-20 -ml-5" alt="Logo" />
        <p className="text-[#786262] text-xl md:text-3xl font-thin font-italiana pb-1 ml-5 md:ml-10 uppercase">
          Putri Cellyenda
        </p>
        {/* Tombol Hamburger untuk Layar Kecil */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-[#786262] focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Bagian Kanan (Menu Navigasi) */}
      <div
        id="kanan"
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 font-bold mt-4 md:mt-0`}
      >
        <div
          onClick={onClick}
          name="Home"
          className="text-[#786262] hover:text-xs transition-all duration-1000 cursor-pointer text-sm px-5 py-2.5"
        >
          Home
        </div>
        <div
          onClick={onClick}
          name="About"
          className="text-[#786262] hover:text-xs transition-all duration-1000 cursor-pointer text-sm px-5 py-2.5"
        >
          About
        </div>
        <div
          onClick={onClick}
          name="Skill"
          className="text-[#786262] hover:text-xs transition-all duration-1000 cursor-pointer text-sm px-5 py-2.5"
        >
          Skill
        </div>
        <div
          onClick={onClick}
          name="Project"
          className="text-[#786262] hover:text-xs transition-all duration-1000 cursor-pointer text-sm px-5 py-2.5"
        >
          Project
        </div>
        <div
          onClick={onClick}
          name="View Resume"
          className="text-[#786262] hover:text-xs transition-all duration-1000 cursor-pointer text-sm px-5 py-2.5"
        >
          View Resume
        </div>
      </div>
    </nav>
  );
};

export default Navbar;