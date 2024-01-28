import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        isScrolled ? "bg-white shadow-lg py-2" : "py-6"
      } w-full px-6 md:px-32 lg:px-16 fixed z-50`}
    >
      <div className="h-16 px-6 flex justify-between items-center rounded-full relative bg-white">
        <div className="text-2xl font-medium whitespace-nowrap brand__logo">
          <Link to="/">NFG GG</Link>
        </div>
        <nav
          className={`${
            isOpen ? "" : "hidden"
          } flex flex-col items-center gap-8 py-6 text-2xl absolute top-20 left-0 right-0 
          max-lg:w-full max-lg:bg-white rounded-3xl lg:flex lg:flex-row lg:justify-between lg:gap-6 lg:static lg:text-[16px] lg:py-0 lg:px-4`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${
                isActive ? "navbar__linkActive" : ""
              } max-lg:underline navbar__link`
            }
          >
            Home
            <div className="navbar__linkUnderline max-lg:hidden"></div>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${
                isActive ? "navbar__linkActive" : ""
              }  max-lg:underline navbar__link`
            }
          >
            About
            <div className="navbar__linkUnderline max-lg:hidden"></div>
          </NavLink>
          <NavLink
            to="/aggregator"
            className={({ isActive }) =>
              `${
                isActive ? "navbar__linkActive" : ""
              }  max-lg:underline navbar__link`
            }
          >
            Aggregator
            <div className="navbar__linkUnderline max-lg:hidden"></div>
          </NavLink>
          <NavLink
            to="/features"
            className={({ isActive }) =>
              `${
                isActive ? "navbar__linkActive" : ""
              }  max-lg:underline navbar__link`
            }
          >
            Features
            <div className="navbar__linkUnderline max-lg:hidden"></div>
          </NavLink>
          <NavLink
            to="/roadmap"
            className={({ isActive }) =>
              `${
                isActive ? "navbar__linkActive" : ""
              }  max-lg:underline navbar__link`
            }
          >
            Roadmap
            <div className="navbar__linkUnderline max-lg:hidden"></div>
          </NavLink>
          <NavLink
            to="/contactus"
            className={({ isActive }) =>
              `${
                isActive ? "navbar__linkActive" : ""
              }  max-lg:underline navbar__link whitespace-nowrap`
            }
          >
            Contact Us
            <div className="navbar__linkUnderline max-lg:hidden"></div>
          </NavLink>

          <div className="w-full flex flex-col items-center justify-center gap-6 px-8 font-medium lg:hidden">
            <Link className="w-full flex items-center justify-center  rounded-lg gap-4 text-lg py-2 whitespace-nowrap style__button text-white ">
              <i class="fa-brands fa-discord fa-lg"></i>
              <span>Join Discord</span>
            </Link>
            <Link className="w-full flex items-center justify-center rounded-lg gap-4 text-lg py-2 whitespace-nowrap clipPath__use text-[#6c52ee] hover:bg-[#6c52ee] hover:text-white">
              <i className="fa-brands fa-x-twitter fa-lg hover:text-white transition duration-400 delay-100 ease-in"></i>
              <span>Follow Twitter</span>
            </Link>
          </div>
        </nav>

        <div className="flex justify-between gap-6">
          <div className="flex items-center gap-3 max-lg:hidden">
            <Link className="flex items-center">
              <i
                class="fa-brands fa-x-twitter fa-lg"
                style={{ color: "#6c52ee" }}
              ></i>
            </Link>
            <Link className="flex items-center">
              <i
                className="fa-brands fa-discord fa-lg"
                style={{ color: "#6c52ee" }}
              ></i>
            </Link>
          </div>

          {isScrolled && (
            <div className="w-full flex items-center justify-center gap-6 text-center max-lg:hidden">
              <Link className="h-full w-full flex flex-col justify-center items-center bg-purple-600 text-white rounded-lg text-[14px] font-medium px-3 py-1 style__button">
                <h6>"Combine" Software</h6>
              </Link>
              <Link className="h-full w-full flex flex-col justify-center items-center bg-purple-600 text-white rounded-lg text-[14px] font-medium px-3 py-1 style__button">
                <h6>Platform</h6>
              </Link>
            </div>
          )}
        </div>

        <div
          className="nav__menu cursor-pointer lg:hidden"
          onClick={handleMenu}
        >
          {isOpen ? (
            <i class="fa-solid fa-x fa-2x"></i>
          ) : (
            <i class="fa-solid fa-bars fa-2x"></i>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
