import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { IoIosNotifications, IoIosNotificationsOff } from "react-icons/io";
import { supabase } from "../services/supabaseClient";
import "./style.css";

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
  const [width, setWidth] = useState(window.innerWidth);
  const [notifications, setNotifications] = useState<any[]>([]);
  const [animateIcon, setAnimateIcon] = useState(false);
  const [openedBoxNotification, setOpenedBoxNotification] = useState(false);
  const [update, setUpdate] = useState(0);
  const [showCVMenu, setShowCVMenu] = useState(false);
  const CVMenuRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  return (
    <motion.div
     initial={{ x: 0 }}
     animate={{
        x: width < 1290 ? "8rem" : "0",
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    className="notis-wrapper" ref={notificationRef}>
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
                openedBoxNotification ? "notis-content" : "notis-content hidden"
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

      {/*<div className="cvs" ref={CVMenuRef}>
      {showCVMenu && (
        <div
          className="cv-backdrop"
          onClick={() => setShowCVMenu(false)}
        ></div>
      )}
      <HiDocumentText
        onMouseEnter={handleHoverCV}
        className="text-[#cecece] text-[2rem] mx-6"
      />
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: showCVMenu ? 0 : -10, opacity: showCVMenu ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{
          display: showCVMenu ? "block" : "none",
          pointerEvents: showCVMenu ? "auto" : "none",
        }}
        className={`cv-links`}
      >
        <CV />
      </motion.div>
    </div>*/}
    </motion.div>
  );
};

export default NavbarRightSide;
