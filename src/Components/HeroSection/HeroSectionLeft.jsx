import React from "react";
import { Link } from "react-router-dom";

function HeroSectionLeft() {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center bg-white text-[var(--gray-color)] gap-4 p-8 max-lg:rounded-lg lg:w-1/2 lg:rounded-l-lg lg:px-20 lg:py-16 lg:gap-6">
        <div className="heroimg">
          <img
            className="h-20 object-cover"
            src="src/assets/heroimg.png"
            alt="heroSecImg"
          />
        </div>
        <div className="flex flex-col items-center text-3xl gap-1 font-medium lg:text-5xl lg:gap-2">
          <span className="text-black">NFD Platform</span>
          <span className="text-[var(--purple-color)]">"NFD.gg"</span>
        </div>
        <div className="text-lg">
          An Alpha community 2.0 with its own platform for participating,
          searching, and tracking any crypto related information.
        </div>

        <div className="w-full flex justify-center gap-2 my-6 text-sm text-left max-lg:hidden">
          <div className="w-max flex items-center gap-2 py-2 pl-3 pr-8 border border-black bg-white rounded-xl shadow-xl font-medium">
            <i
              class="fa-solid fa-landmark fa-lg"
              style={{ color: "#4f5662" }}
            ></i>
            <p>Info</p>
          </div>
          <div className="w-max flex items-center gap-2 py-2 pl-3 pr-8 border border-black  bg-white rounded-xl shadow-xl">
            <i class="fa-solid fa-key fa-lg" style={{ color: "#4f5662" }}></i>
            <p>Tools</p>
          </div>
          <div className="w-max flex items-center gap-2 py-2 pl-3 pr-8 border border-black  bg-white rounded-xl shadow-xl">
            <i class="fa-solid fa-gear fa-lg" style={{ color: "#4f5662" }}></i>
            <p className="w-full">Functionality</p>
          </div>
        </div>

        <div className="flex gap-2 mt-2">
          <Link className="px-8 py-3 text-white rounded-lg whitespace-nowrap max-lg:hidden style__button">
            Try Platform
          </Link>

          <Link className="px-8 py-3 text-white rounded-lg whitespace-nowrap lg:hidden style__button">
            Only Pc Version
          </Link>

          <Link className="px-8 py-3 text-[var(--purple-color)] rounded-lg whitespace-nowrap">
            How it works?
          </Link>
        </div>
      </div>
    </>
  );
}

export default HeroSectionLeft;
