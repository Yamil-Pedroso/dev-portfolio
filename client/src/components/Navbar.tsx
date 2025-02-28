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
import { supabase } from "../services/supabaseClient";
import Logo from "../assets/logo.png";
import CV from "./CV/CV";
import LineNumbers from "./line-numbers/LineNumbers";

const timeAgo = (timestamp: Date) => {
  if (isNaN(timestamp.getTime())) {
    return "Invalid date";
  }

  const now = new Date();
  // Ajusta el tiempo transcurrido restando 2 horas (7200 segundos)
  const adjustedSecondsPast =
    Math.floor((now.getTime() - timestamp.getTime()) / 1000) - 7200;

  if (adjustedSecondsPast < 60) {
    return `Just now`; // Mostrar segundos si es menos de un minuto
  }
  if (adjustedSecondsPast < 3600) {
    const minutes = Math.floor(adjustedSecondsPast / 60);
    return `${minutes}m ago`; // Mostrar minutos si es menos de una hora
  }
  if (adjustedSecondsPast < 86400) {
    const hours = Math.floor(adjustedSecondsPast / 3600);
    const minutes = Math.floor((adjustedSecondsPast % 3600) / 60);
    return minutes === 0 ? `${hours}h ago` : `${hours}h ${minutes}m ago`;
  }

  const days = Math.floor(adjustedSecondsPast / 86400);
  const hours = Math.floor((adjustedSecondsPast % 86400) / 3600);
  return hours === 0 ? `${days}d ago` : `${days}d ${hours}h ago`;
};

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

  const fetchNotifications = async () => {
    const { data, error } = await supabase
      .from("messages")
      .select("name, message, avatar_url, created_at")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching notifications:", error);
    } else {
      const formattedData = data.map((item: any) => ({
        id: item.id,
        avatar: item.avatar_url,
        title: `New message from ${item.name}`,
        message: item.message,
        time: timeAgo(new Date(item.created_at) as Date),
      }));
      setNotifications(formattedData);
    }
  };

  useEffect(() => {
    fetchNotifications();

    const interval = setInterval(() => {
      fetchNotifications();
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setUpdate((prev) => prev + 1);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(e.target as Node)
      ) {
        setOpenedBoxNotification(false);
      } 
      
      if (
        CVMenuRef.current &&
        !CVMenuRef.current.contains(e.target as Node)
      ) {
        setShowCVMenu(false);
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
          <p>
            yamnextgen
          </p>
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
        <motion.div>
          {notifications.length > 0 ? (
            <div className="is-active">
              <motion.div
                style={{ transformOrigin: "top center" }}
                animate={
                  animateIcon && !openedBoxNotification ? swingAnimation : {}
                }
                onAnimationComplete={() => setAnimateIcon(false)}
              >
                <IoIosNotifications
                  className="notis-icon"
                  onClick={handleClickNotification}
                />
              </motion.div>
              <div className="notis-active"></div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: openedBoxNotification ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className={`${
                  openedBoxNotification
                    ? "notis-content"
                    : "notis-content hidden"
                }`}
              >
                <h2>Notifications</h2>
                <hr className="border-[1px] border-[#515151] w-full my-2" />
                {notifications.map((noti) => (
                  <div key={noti.id} className="noti">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                      }}
                    >
                      <div
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                          src={noti.avatar}
                          alt="avatar"
                        />
                      </div>
                      <p
                        style={{
                          fontSize: ".8rem",
                        }}
                      >
                        {noti.title}
                      </p>
                    </div>

                    <p
                      style={{
                        color: "#0099ff",
                      }}
                    >
                      {noti.message}
                    </p>
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

        <div className="cvs" ref={CVMenuRef}>
          <HiDocumentText
            onMouseEnter={handleHoverCV}
            className="text-[#cecece] text-[2rem] mx-6"
          />
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: showCVMenu ? 0 : -10, opacity: showCVMenu ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}

            className={`cv-links ${showCVMenu ? "show" : "hidden"}`}
          >

           <CV />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
