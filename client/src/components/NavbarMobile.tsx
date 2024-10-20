import { useState } from "react";
import { motion } from "framer-motion";
import CloseAnimateIcon from "./close-animate-icon/CloseAnimateIcon";

interface INavMobileProps {
  active: string;
  setActive: (active: string) => void;
  setToggle: (toggle: boolean) => void;
  navLinks: { id: string; title: string }[];
}

const NavMobile = ({
  navLinks,
  active,
  setActive,
  setToggle,
}: INavMobileProps) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClicked = () => {
    setShowMenu(!showMenu);
  };

  const menuVariants = {
    hidden: {
      y: "-100%",
      opacity: 0,
      transition: {
        type: "tween",
        duration: 0.4,
        ease: "easeInOut",
      },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        mass: 0.5,
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="nav-mobile-container">
      <div className="mobile-bar-wrapper">
        <span className="logo">Logo</span>

        <CloseAnimateIcon onClick={handleClicked} isOpen={showMenu} />
      </div>
      <motion.div
        initial="hidden"
        animate={showMenu ? "visible" : "hidden"}
        variants={menuVariants}
        className="nav-mobile"
      >
        <ul className="list-none flex flex-col gap-4">
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
                setToggle(false);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default NavMobile;
