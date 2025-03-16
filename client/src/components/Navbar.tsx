import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { yamiBlue2, yam, case1 } from "../assets";
import { styles } from "../style";
import "./style.css";
import { navLinks } from "../constants";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { IoIosNotifications, IoIosNotificationsOff } from "react-icons/io";
import NavbarMobile from "./NavbarMobile";
import { motion } from "framer-motion";
import { supabase } from "../services/supabaseClient";
import Logo from "../assets/logo.png";
import CV from "./CV/CV";
import LineNumbers from "./line-numbers/LineNumbers";
import NavbarRightSide from "./NavbarRightSide";

const Navbar = () => {
  const [openedBoxNotification, setOpenedBoxNotification] = useState(false);
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);
  const [animateIcon, setAnimateIcon] = useState(false);
  const [notifications, setNotifications] = useState<any[]>([]);
  const [update, setUpdate] = useState(0);
  const [animateLogo, setAnimateLogo] = useState(false);
  const [showCVMenu, setShowCVMenu] = useState(false);
  const CVMenuRef = useRef<HTMLDivElement>(null);

  const handleHoverCV = () => {
    setShowCVMenu(!showCVMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const flipAnimation = {
    rotateY: [0, 90, 180, 270, 360],
    transition: { duration: 1.8, ease: "easeInOut" },
  };

  const handleClickNotification = () => {
    setOpenedBoxNotification(!openedBoxNotification);
  };

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

  const generateTimestamp = () => {
    return new Date();
  };

  const swingAnimation = {
    rotate: [0, -15, 15, -15, 15, 0],
    transition: {
      duration: 1,
      ease: "easeInOut",
      repeat: 0,
    },
  };

  useEffect(() => {
    const initialTimeout = setTimeout(() => {
      setAnimateIcon(true);
    }, 8000);

    const interval = setInterval(() => {
      setAnimateIcon(true);
    }, 20000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <motion.div className="nav-container">
      <Link
        to="/"
        className="flex gap-2"
        onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}
      >
        {/* Logo Original que desaparece al hacer scroll */}
        <motion.div
          className="logo-wrapper"
          initial={{ rotateY: 0, y: 0 }}
          animate={{
            rotateY: flipAnimation.rotateY,
            y: isScrolled ? -10 : 0,
          }}
          transition={{ ...flipAnimation.transition, y: { duration: 0.5 } }}
          style={{ perspective: 1000 }}
        >
          {/*<img
            className="logo"
            style={{
              width: "70px",
              marginTop: "1rem",
            }}
            src={Logo}
            alt="logo"
          />*/}
          <p>yamnextgen</p>
        </motion.div>
      </Link>

      <nav className="glossy-nav">
        {/*<PlayfulAni />*/}
        <div className="menu">
          <ul className="list-none hidden sm:flex flex-row" id="nav">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={
                  active === link.title
                    ? "other-links-active home-zoom"
                    : "other-links"
                }
                onClick={() => {
                  setActive(link.title);
                  document
                    .getElementById(link.id)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                style={{ cursor: "pointer" }}
              >
                <a
                  href={`#${link.id}`}
                  className={
                    link.title === "Home" && active === "Home"
                      ? "home-link"
                      : ""
                  }
                  style={{ display: "block", width: "100%", height: "100%" }}
                >
                  {link.title}
                </a>
              </li>
            ))}
            <Link to="/cv-space" style={{ display: "flex", alignItems: "center", cursor: "pointer" }} target="_blank" rel="noreferrer">
              <img src={case1} alt="" width={38} />
            </Link>
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
                    className={
                      active === link.title
                        ? "other-links-active"
                        : "other-links"
                    }
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
      </nav>

      {/* Vista móvil */}
      <NavbarMobile
        navLinks={navLinks}
        active={active}
        setActive={setActive}
        setToggle={setToggle}
      />

      {/* Social network and notifications */}
      <NavbarRightSide
      />
    </motion.div>
  );
};

export default Navbar;
