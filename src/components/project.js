import React from "react";

function Project({ gambar = "", namaProject = "", dekripsi = "" }) {
  return (
    <div class=" justify-items-center border border-gray-200 rounded-lg shadow-sm bg-[#FFF0F0] m-3 ">
      <div className="size-fit ">
        <img className="rounded-t-l" src={gambar} alt="" />
      </div>
      <div class="p-5">
        <a href="#">
          <h5 class="flex w-auto h-auto font-inter text-xl py-2 font-bold text-[#786262] ">{namaProject}</h5>
        </a>
        <p class="mb-3 w-auto h-auto font-inter text-xs text-[#786262] dark:text-gray-400 pb-7">{dekripsi}</p>
        <a
          href="#"
          className="content-end inline-flex inset-y-14 justify-end px-3 py-2 font-inter text-xs text-white bg-[#E1BFBF] rounded-lg hover:bg-pink-500 focus:ring-4 focus:outline-none focus:ring-pink-400 dark:bg-pink-300 dark:hover:bg-pink-200 dark:focus:ring-pink-100"
        >
          Read more
          <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Project;
