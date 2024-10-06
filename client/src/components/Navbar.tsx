import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PlayfulAni from "./playful-animation/PlayfulAni";
import { yamiBlue2, yam } from "../assets";
import { styles } from "../style";
import "./style.css";
import { navLinks } from "../constants";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const myHamburgerIcon = () => (
    <div className="open-close-icon">
      {toggle ? <span className="open"></span> : <span></span>}
      {toggle ? <span className="open"></span> : <span></span>}
      {toggle ? <span className="open"></span> : <span></span>}
    </div>
  );

  const handleClicked = () => {
    setToggle(!toggle);
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 border-b-[1px] border-[#515151] z-50 glossy-nav`}
    >
      <PlayfulAni />
      <div className="w-full flex justify-around items-center max-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/* Logo Original que desaparece al hacer scroll */}
          <motion.div
            className="logo-wrapper"
            initial={{ opacity: 1 }}
            animate={{ opacity: isScrolled ? 0 : 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-8 h-8 overflow-hidden border-[1px] border-[#0099ff]">
              <img src={yamiBlue2} alt="logo" className="w-8 h-8" />
            </div>
            <h1>
              [ <span className="text-[#0099ff]">YP-NEXTGEN</span> ]{" "}
              <span className="text-[#0099ff]">.</span>
            </h1>
          </motion.div>

          {/* Nueva Imagen que aparece cuando se hace scroll */}
          <motion.div
            className="new-logo"
            initial={{ opacity: 0, top: '5rem', left: '5rem' }}
            animate={{ 
              opacity: isScrolled ? 1 : 0, 
              top: isScrolled ? '5rem' : '5rem',
              left: isScrolled ? '3rem' : '5rem' 
            }}
            transition={{ duration: 0.5 }}
            style={{
              position: 'fixed',
              top: '5rem',
              left: '5rem',
              width: '3rem',
              zIndex: 100
            }}
          >
            <img src={yam} alt="yam-logo" style={{ width: '6rem' }} className='opacity-15' />
          </motion.div>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10" id="nav">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-[#0099ff]" : "text-[#fafafa]"
              } hover:text-[#0099ff] text-[18px] font-medium cursor-pointer`}
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
              toggle
                ? "opacity-100 transition-all duration-1000 slide-in-right"
                : "slide-out-right duration-1000"
            } absolute top-20 right-0 w-full p-8 bg-[#19191d] border-t-[1px] border-[#515151] z-50`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-[#46ca9e]" : "text-[#fafafa]"
                  } hover:text-[#46ca9e] lg:text-[18px] font-medium cursor-pointer`}
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
        <Link to="./docs/cv-yamil-2024.pdf" target="_blank">
          <HiDocumentText className="text-[#cecece] text-[2rem] mx-6" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
