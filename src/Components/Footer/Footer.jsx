import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="w-full px-6 md:px-32 lg:px-16 bg-white">
        <div className="flex justify-between lg:items-center gap-4 py-12">
          <div className="flex flex-col gap-12 justify-between items-start lg:flex-row lg:items-center text-[var(--gray-color)]">
            <div className="text-2xl font-medium whitespace-nowrap text-[var(--purple-color)]">
              <Link to="/">NFG GG</Link>
            </div>
            <div className="whitespace-nowrap max-lg:hidden">
              <Link to="/">© 2023 NFD, INC. ALL RIGHTS RESERVED.</Link>
            </div>
            <div className="flex gap-8 underline whitespace-nowrap">
              <Link to="/">Privacy</Link>
              <Link to="/">Terms of use</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between items-center lg:flex-row lg:gap-8">
            <Link className="text-white px-10 py-3 rounded-lg text-[14px] font-medium lg:order-2 style__button">
              Platform
            </Link>
            <Link className="underline lg:order-1">contact@nfd.gg</Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
