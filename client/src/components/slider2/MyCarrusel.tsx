import { useState, useEffect } from "react";
import useTypewriter from "react-typewriter-hook";
import Marquee from "react-marquee-slider";
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaSass,
  FaBootstrap,
  FaYarn,
  FaPython,
} from "react-icons/fa";
import { IconTech, ToolTip, ToolTipTextWrapper } from "./styles";
import "./styles.css";

const MyCarrousel = () => {
  const icons = [
    {
      icon: <FaReact className="icon" />,
      desc: "React is a free and open-source front-end JavaScript library for building user interfaces based on components.",
    },
    {
      icon: <FaJsSquare className="icon" />,
      desc: "JavaScript is a programming language that is one of the core technologies of the World Wide Web.",
    },
    {
      icon: <FaHtml5 className="icon" />,
      desc: "HTML is a markup language used for structuring and presenting content on the World Wide Web.",
    },
    {
      icon: <FaCss3Alt className="icon" />,
      desc: "CSS is a style sheet language used for describing the presentation of a document written in a markup language.",
    },
    {
      icon: <FaNodeJs className="icon" />,
      desc: "Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more.",
    },
    {
      icon: <FaDatabase className="icon" />,
      desc: "A Database is an organized collection of data or a type of data store based on the use of a database management system.",
    },
    {
      icon: <FaGitAlt className="icon" />,
      desc: "Git is a distributed version control system that tracks changes in any set of computer files.",
    },
    {
      icon: <FaGithub className="icon" />,
      desc: "GitHub is a platform and cloud-based service for software development and version control, allowing developers to store and manage their code.",
    },
    {
      icon: <FaNpm className="icon" />,
      desc: "NPM is a package manager for the JavaScript programming language maintained by npm, Inc.",
    },
    {
      icon: <FaSass className="icon" />,
      desc: "Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets.",
    },
    {
      icon: <FaBootstrap className="icon" />,
      desc: "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.",
    },
    {
      icon: <FaYarn className="icon" />,
      desc: "Yarn is one of the main JavaScript package managers, developed in 2016 by Sebastian McKenzie of Meta for the Node.js JavaScript runtime environment.",
    },
    {
      icon: <FaPython className="icon" />,
      desc: "Python is a high-level, general-purpose programming language.",
    },
  ];

  const [isHovered, setIsHovered] = useState(false);
  const [isCarouselPlaying, setIsCarouselPlaying] = useState(true);

  const handleMouseEnter = (index: any) => {
    setIsHovered(true);
    setIsCarouselPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsCarouselPlaying(true);
  };

  const marqueeProps = {
    velocity: isHovered ? 0 : 25,
    direction: "ltr" as const,
    scatterRandomly: false,
    resetAfterTries: 100,
    onInit: () => {
      console.log("Marquee initialized");
    },
    onFinish: () => {
      console.log("Marquee finished");
    },
  };

  return (
    <div
      className="carrousel-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        height: "500px",
        overflow: "hidden",
        marginTop: "4.5rem",
      }}
    >
      <Marquee {...marqueeProps}>
        {icons.map((tech, index) => (
          <div
            key={index}
            style={{
              marginRight: "20px",
              fontSize: "3rem",
              color: "#e9a13b",
            }}
          >
            <IconTech>
              <ToolTip>
                <ToolTipTextWrapper>{tech.desc}</ToolTipTextWrapper>
              </ToolTip>
              {tech.icon}
            </IconTech>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MyCarrousel;
