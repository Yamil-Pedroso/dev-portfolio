import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PlayfulAni from "./playful-animation/PlayfulAni";

import { styles } from "../style";
import { navLinks } from "../constants";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { m } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const myHamburgerIcon = () => {
    return (
      <>
        <div className="open-close-icon">
          {toggle ? <span className="open"></span> : <span></span>}
          {toggle ? <span className="open"></span> : <span></span>}
          {toggle ? <span className="open"></span> : <span></span>}
        </div>
      </>
    );
  };

  const handleClicked = () => {
    setToggle(!toggle);
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 bg-[#19191d] border-b-[1px] border-[#515151] z-50`}
    >
      <PlayfulAni />
      <div className="w-full flex justify-around items-center  max-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/*<img src={logo} alt="logo" className="w-12 h-12 object-contain" />*/}
        </Link>
        
        <ul className="list-none hidden sm:flex flex-row gap-10" id="nav">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-[#46ca9e]" : "text-[#fafafa]"
              } hover:text-[#46ca9e] text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <div onClick={handleClicked} className="mt-2">
           {myHamburgerIcon()}
          </div>

          <div
            className={`${
              toggle ? "opacity-100 transition-all duration-1000 slide-in-right" : "slide-out-right duration-1000"
            } absolute top-20 right-0 w-full p-8 bg-[#19191d] border-t-[1px] border-[#515151] z-50`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-[#46ca9e]" : "text-[#fafafa]"
                  } hover:text-[#46ca9e] text-[18px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex">
        <Link to="https://github.com/Yamil-Pedroso" target="_blank">
          <BsGithub className="text-[#cecece] text-[2rem] mx-6" />
        </Link>
        <Link to="https://www.linkedin.com/in/yamil-pedroso/" target="_blank">
          <FaLinkedinIn className="text-[#cecece] text-[2rem]" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
