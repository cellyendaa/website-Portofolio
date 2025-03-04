import React from 'react';
import Logo from '../assets/Logo.png'

const Navbar = ({ onClick }) => {
  return (
    <nav className="flex flex-row items-center justify-between px-10">
      <div id="kiri" className="flex flex-row items-center">
        <img src={Logo} className=" size-20 -ml-5"></img>
        <p className="text-[#786262] text-3xl font-thin font-italiana pb-1 ml-10 uppercase">Putri Cellyenda</p>
      </div>
      <div id="kanan" className="flex flex-row items-center space-x-8 font-bold">
        <div onClick={onClick} name="Home" href="#" className="text-[#786262] text-sm cursor-pointer">
          Home
        </div>
        <div onClick={onClick} name="About" href="#" className="text-[#786262] text-sm cursor-pointer">
          About
        </div>
        <div onClick={onClick} name="Skill" href="#" className="text-[#786262] text-sm cursor-pointer">
          Skill
        </div>
        <div onClick={onClick} name="Project" href="#" className="text-[#786262] text-sm cursor-pointer">
          Project
        </div>
        <div onClick={onClick} name="View Resume" href="#" className="text-[#786262] text-sm cursor-pointer">
          View Resume
        </div>
      </div>
    </nav>
  );
};

export default Navbar;