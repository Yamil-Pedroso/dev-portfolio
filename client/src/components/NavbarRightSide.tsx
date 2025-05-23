import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { IoIosNotifications, IoIosNotificationsOff } from "react-icons/io";
import { supabase } from "../services/supabaseClient";
import "./style.css";
import { case1 } from "../assets";
import clsx from "clsx";

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

const NavbarRightSide = () => {
  const notificationRef = useRef(null);
  const [isScrolled2, setIsScrolled2] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [notifications, setNotifications] = useState<any[]>([]);
  const [animateIcon, setAnimateIcon] = useState(false);
  const [openedBoxNotification, setOpenedBoxNotification] = useState(false);
  const [update, setUpdate] = useState(0);
  const [showCVMenu, setShowCVMenu] = useState(false);
  const CVMenuRef = useRef(null);
  const isMobile = width <= 470;

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled2(window.scrollY > 900);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleClickNotification = () => {
    setOpenedBoxNotification(!openedBoxNotification);
  };

  const swingAnimation = {
    rotate: [0, -15, 15, -15, 15, 0],
    transition: {
      duration: 1,
      ease: "easeInOut",
      repeat: 0,
    },
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

      if (CVMenuRef.current && !CVMenuRef.current.contains(e.target as Node)) {
        setShowCVMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const iconClass = clsx(
    "transition-colors duration-300",
    isScrolled2 ? "text-[#cecece]" : "text-[#ffffff]"
  );

  return (
    <motion.div
      initial={{ x: 0 }}
      animate={{
        x: width < 1290 ? "8rem" : "0",
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="notis-wrapper"
      ref={notificationRef}
    >
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
                className={`${iconClass} notis-icon`}
                onClick={handleClickNotification}
              />
            </motion.div>
            <div className="notis-active"></div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: openedBoxNotification ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className={`${
                openedBoxNotification ? "notis-content" : "notis-content hidden"
              }`}
            >
              <h2>Notifications</h2>
              <hr className="border-[1px] border-[#515151] w-full my-2" />
              {notifications.map((noti) => (
                <div key={noti.id} className="noti">
                  <div className="avatar-wrapper">
                    <div className="avatar">
                      <img src={noti.avatar} alt="avatar" />
                    </div>
                    <p>{noti.title}</p>
                  </div>

                  <p className="message">{noti.message}</p>
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
        <BsGithub
          className={`${iconClass} text-[2rem] mx-6 hover:text-[#262525]`}
        />
      </Link>
      <Link to="https://www.linkedin.com/in/yamil-pedroso/" target="_blank">
        <FaLinkedinIn className={`${iconClass} text-[2rem]`} />
      </Link>
      <a
        href="https://yampe-cv.netlify.app/"
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          marginLeft: "1rem",
        }}
        target="_blank"
        rel="noreferrer"
      >
        <motion.img
          style={{
            position: isMobile ? "absolute" : "relative",
            top: isMobile ? "2.5rem" : 0,
            width: isMobile ? "1.8rem" : "",
          }}
          src={case1}
          width={34}
        />
      </a>
    </motion.div>
  );
};

export default NavbarRightSide;
