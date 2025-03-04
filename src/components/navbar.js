import React from 'react';
import Logo from '../assets/Logo.png'

function Navbar() {
  return (
    <nav className="flex flex-row items-center justify-between">
      <div id='kiri' className='flex flex-row items-center'>
        <img src={Logo} className=" size-20 -ml-5"></img>
        <p className="text-[#786262] text-3xl font-thin font-italiana pb-1 ml-10 uppercase">Putri Cellyenda</p>
      </div>
      <div id='kanan' className='flex flex-row items-center space-x-8 font-bold'>
          <a href="#" className="text-[#786262] text-sm hover:underline">Home</a>
          <a href="#" className="text-[#786262] text-sm hover:underline">About</a>
          <a href="#" className="text-[#786262] text-sm hover:underline">Portofolio</a>
          <a href="#" className="text-[#786262] text-sm hover:underline">Project</a>
          <a href="#" className="text-[#786262] text-sm hover:underline">View Resume</a>
      </div>
    </nav>
  );
}

export default Navbar;