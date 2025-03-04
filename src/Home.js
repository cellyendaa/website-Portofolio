import React from "react";
import Logo from "./assets/Logo.png";
import Navbar from "./components/navbar";
import Foto from "./assets/PutriFigma-removebg-preview.png";

function HomePage() {
  return (
    <div className="bg-[#FFFBFB] flex flex-col px-14 w-full h-screen overflow-hidden">
      <Navbar />
      <div  className=" flex flex-row -mt-10 ">
        <div id="1"className="flex flex-col text-justify justify-center ">
          <p1 className=" font-inter text-6xl font-bold text-[#8E7B68]">
            Hai, Saya Putri Cellyenda!
          </p1>
          <a className="py-5 font-inter text-lg  text-[#8E7B68] ">
            Saya sangat menikmati proses belajar dan eksplorasi
            <br />
            dalam pengembangan web, khususnya frontend, untuk
            <br />
            memberikan pengalaman pengguna terbaik.
          </a>
        </div>
        <div id="2" className="float-left px-3.5 resize-y">
          <img src={Foto} className=""></img>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
