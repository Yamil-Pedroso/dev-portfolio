import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { yamiBlue2, yam } from "../assets";
import { styles } from "../style";
import "./style.css";
import { navLinks } from "../constants";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { IoIosNotifications, IoIosNotificationsOff } from "react-icons/io";
import NavbarMobile from "./NavbarMobile";
import { motion } from "framer-motion";

const timeAgo = (timestamp: any) => {
  const now = new Date();
  const secondsPast = Math.floor((now.getTime() - timestamp.getTime()) / 1000);

  if (secondsPast < 60) {
    return `${secondsPast}s ago`;
  }
  if (secondsPast < 3600) {
    const minutes = Math.floor(secondsPast / 60);
    return `${minutes}m ago`;
  }
  if (secondsPast < 86400) {
    const hours = Math.floor(secondsPast / 3600);
    return `${hours}h ago`;
  }
  const days = Math.floor(secondsPast / 86400);
  return `${days}d ago`;
};

const Navbar = () => {
  const [hasNotification, setHasNotification] = useState(false);
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);
  const [animateIcon, setAnimateIcon] = useState(false);

  const handleClickNotification = () => {
    setHasNotification(!hasNotification);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(e.target as Node)
      ) {
        setHasNotification(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
    return new Date(); // Almacena la fecha actual
  };

  //const generateTimestamp = () => {
  //  const now = new Date();
  //  return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  //};

  const notifications = [
    {
      id: 1,
      title: "New message from Yamil Pedroso",
      message: "New project in process on GitHub",
      time: "1h ago",
    },
    {
      id: 2,
      title: "New message from Yamil Pedroso",
      message: "Event in LinkedIn",
      time: "2h ago",
    },
    {
      id: 3,
      title: "New message from Yamil Pedroso",
      message: "A new message from a client",
      time: "1h ago",
    },
    {
      id: 4,
      title: "New message from Yamil Pedroso",
      message: "Hi, adding features to the website",
      time: "4h ago",
    },
  ];

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
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 1, y: isScrolled ? -10 : 0 }}
          transition={{ duration: 0.5 }}
        >
            LOGO
        </motion.div>

        {/* Nueva Imagen que aparece cuando se hace scroll */}
        {/*<motion.div
          className="new-logo"
          initial={{ opacity: 0, top: "5rem", left: "5rem" }}
          animate={{
            opacity: isScrolled ? 1 : 0,
            top: isScrolled ? "5rem" : "5rem",
            left: isScrolled ? "3rem" : "5rem",
          }}
          transition={{ duration: 0.5 }}
          style={{
            position: "fixed",
            top: "5rem",
            left: "5rem",
            width: "3rem",
            zIndex: 100,
          }}
        >
          <img
            src={yam}
            alt="yam-logo"
            style={{ width: "6rem" }}
            className=""
          />
        </motion.div>*/}
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
                      setActive(link.title); // Actualiza el estado activo
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
      <div className="notis-wrapper" ref={notificationRef}>
        <motion.div
          style={{ transformOrigin: "top center" }}
          animate={animateIcon ? swingAnimation : {}}
          onAnimationComplete={() => setAnimateIcon(false)}
        >
          {notifications.length > 0 ? (
            <div className="is-active">
              <div>
                <IoIosNotifications
                  className="notis-icon"
                  onClick={handleClickNotification}
                />
              </div>
              <div className="notis-active"></div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hasNotification ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className={`${
                  hasNotification ? "notis-content" : "notis-content hidden"
                }`}
              >
                <h2>Notifications</h2>
                {notifications.map((noti) => (
                  <div key={noti.id} className="noti">
                    <h3>{noti.title}</h3>
                    <p>{noti.message}</p>
                    <small>{noti.time}</small>
                    <hr className="border-[1px] border-[#515151] w-full my-2" />
                  </div>
                ))}
              </motion.div>
            </div>
          ) : (
            <IoIosNotificationsOff className="text-[#cecece] text-[2rem] mx-6 cursor-pointer opacity-30" />
          )}
        </motion.div>
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
    </motion.div>
  );
};

export default Navbar;
