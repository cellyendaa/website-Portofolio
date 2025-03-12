import React from "react";

function Project({ gambar = "", namaProject = "", dekripsi = "" }) {
  return (
    <div className="flex flex-col justify-around justify-items-center border border-gray-200 rounded-lg shadow-sm bg-[#FFF0F0] m-3">
      {/* Gambar Proyek */}
      <div className="h-48 md:h-72 w-full">
        <img className="w-full h-full object-cover pt-2" src={gambar} alt={namaProject} />
      </div>

      {/* Konten Proyek */}
      <div className="p-5 w-full h-auto md:h-52">
        <a href="#">
          <h5 className="flex w-auto h-auto font-inter text-lg md:text-xl py-2 font-bold text-[#786262]">
            {namaProject}
          </h5>
        </a>
        <p className="mb-3 w-auto h-auto font-inter text-xs text-[#786262] dark:text-gray-400 pb-7">
          {dekripsi}
        </p>
      </div>

      {/* Tombol "Read more" */}
      <div className="flex justify-end pb-5 pr-5">
        <a
          href="https://drive.google.com/drive/folders/1hBx3Nh522vDfS-khlRS61ZYPusd5Kp2Q?usp=sharing"
          className="inline-flex items-center px-3 py-2 font-inter text-xs text-white bg-[#E1BFBF] rounded-lg hover:bg-pink-500 focus:ring-4 focus:outline-none focus:ring-pink-400 dark:bg-pink-300 dark:hover:bg-pink-200 dark:focus:ring-pink-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Project;