import React from "react";
import { Link } from "react-router-dom";
import globalImg from "../../assets/twitter.png";

function HeroSectionRight() {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center bg-[rgb(2,2,3)] text-white gap-4 p-8 max-lg:rounded-lg lg:w-1/2 lg:rounded-r-lg lg:px-20 lg:py-16 lg:gap-6">
        <div className="heroImg">
          <img
            className="h-20 object-cover"
            src="src/assets/heroimg.png"
            alt="heroSecImg"
          />
        </div>
        <div className="flex flex-col items-center text-3xl gap-1 font-medium lg:text-5xl lg:gap-2">
          <span>NFD Software</span>
          <span className="text-[var(--purple-color)]">"Combine"</span>
        </div>
        <div className="text-lg">
          Handle your crypto-wallets, farm activities and retrodrops on a single
          app.
        </div>

        <div className="w-full flex gap-2 my-4 max-lg:hidden">
          <div className="w-1/2 flex gap-2 items-center justify-center py-3 text-lg  heroSec__button">
            <i
              className="fa-brands fa-apple fa-lg"
              style={{ color: "#6c52ee" }}
            ></i>
            <span>macOs</span>
          </div>
          <div className="w-1/2 flex gap-2 items-center justify-center py-3 text-lg  shadow-xl heroSec__button">
            <i
              className="fa-brands fa-windows fa-lg"
              style={{ color: "#6c52ee" }}
            ></i>
            <span>Windows</span>
          </div>
        </div>

        <div className="flex gap-2 mt-2">
          <Link className="px-8 py-3 text-white rounded-lg whitespace-nowrap max-lg:hidden style__button">
            Download
          </Link>

          <Link className="px-8 py-3 text-white rounded-lg whitespace-nowrap lg:hidden style__button">
            Only Pc Version
          </Link>

          <Link className="px-6 py-3 text-[var(--purple-color)] rounded-lg underline whitespace-nowrap">
            How it works?
          </Link>
        </div>
      </div>
    </>
  );
}

export default HeroSectionRight;
