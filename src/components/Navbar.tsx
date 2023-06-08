import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { styles } from "../style";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-[#19191d] border-b-[1px] border-[#515151] z-50`}
    >
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
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
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
