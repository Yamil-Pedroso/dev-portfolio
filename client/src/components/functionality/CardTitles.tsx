import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaMobile } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import {
  figma,
  tailwind,
  photoshop,
  illustrator,
  css,
  xd,
  potion,
  pizza,
  book,
  miniChat,
} from "../../assets";
import { motion } from "framer-motion";
import {
  CardSlide,
  CardSlideContent,
  CardSlideWrapper,
  CardTitle,
  CardTitleContainer,
  HeaderWrapper,
  MiniProjects,
  MiniProjectsContent,
  MiniProjectsWrapper,
  ProjectLinks,
  ProjectLinksContent,
  ProjectUIUX,
  ProjectUIUXContent,
  ProjectUIUXContent2,
  ProjectUIUXHeader,
  ProjectUIUXWrapper,
  ProjectWrapper,
} from "./styles";
import { projectLinks } from "../../constants";
import { IconType } from "react-icons/lib";
import { PiSelectionBackgroundBold } from "react-icons/pi";
import { RiScrollToBottomLine } from "react-icons/ri";
import { AiFillBuild } from "react-icons/ai";
import { LuScaling } from "react-icons/lu";
import { SiScrollreveal } from "react-icons/si";
import { IoMenuSharp } from "react-icons/io5";

interface CardTitleProps {
  icon?: string | IconType;
}

const renderImageOrIcon = (image: any) => {
  return typeof image === "string" ? (
    <img src={image} alt="project images" />
  ) : (
    React.createElement(image, { className: "icon" })
  );
};

const CardTitles: React.FC<CardTitleProps> = ({ icon }) => {
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const [isHovered2, setIsHovered2] = useState<number | null>(null);

  const techIcons = [
    {
      id: 1,
      icon: PiSelectionBackgroundBold,
      link: "https://uiux-animationv1.netlify.app/bg-parallax",
    },
    {
      id: 2,
      icon: RiScrollToBottomLine,
      link: "https://uiux-animationv1.netlify.app/smooth-scroll",
    },
    {
      id: 3,
      icon: AiFillBuild,
      link: "https://uiux-animationv1.netlify.app/sticky-comps",
    },
    {
      id: 4,
      icon: LuScaling,
      link: "https://uiux-animationv1.netlify.app/scale-images",
    },
    {
      id: 5,
      icon: SiScrollreveal,
      link: "https://uiux-animationv1.netlify.app/scroll-parallax",
    },
    {
      id: 6,
      icon: IoMenuSharp,
      link: "https://uiux-animationv1.netlify.app/3d-menu-tech",
    },
  ];

  const miniProjs = [
    {
      id: 1,
      icon: potion,
    },
    {
      id: 2,
      icon: pizza,
    },
    {
      id: 3,
      icon: book,
    },
    {
      id: 4,
      icon: miniChat,
    },
  ];

  const handleHover = (index: number) => {
    setIsHovered(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };
  const handleHover2 = (index: number) => {
    setIsHovered2(index);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(null);
  };

  return (
    <CardTitleContainer>
      <CardSlideWrapper>
        <CardSlideContent>
          <Marquee gradient={false} speed={80} pauseOnHover={true}>
            {projectLinks.map((item, index) => (
              <Link to={item.link} target="_blank" key={index}>
                <CardSlide key={index}>
                  {renderImageOrIcon(item.image)}
                </CardSlide>
              </Link>
            ))}
          </Marquee>
        </CardSlideContent>
      </CardSlideWrapper>
      <ProjectWrapper>
        <MiniProjects>
          <HeaderWrapper>
            <h2>Mini Projects</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </HeaderWrapper>

          <MiniProjectsWrapper>
            {miniProjs.map((item, index) => (
              <MiniProjectsContent
                key={index}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.5 },
                }}
              >
                <img src={item.icon} alt="mini project icons" />
              </MiniProjectsContent>
            ))}
          </MiniProjectsWrapper>
        </MiniProjects>

        <ProjectUIUX>
          <ProjectUIUXHeader>
            <h2>UI/UX Animations</h2>
            <p style={{ maxWidth: "380px" }}>
              Explore how transitions, micro-interactions, and parallax effects
              enhance usability and create engaging user experiences.
            </p>
          </ProjectUIUXHeader>
          <ProjectUIUXWrapper>
            {techIcons.slice(0, 3).map((item, index) => (
              <ProjectUIUXContent
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={handleMouseLeave}
                key={index}
                whileHover={{
                  rotate: [0, -10, 10, -10, 10, 0],
                  transition: { duration: 0.5 },
                }}
                isHovered={isHovered}
                index={index}
              >
                {typeof item.icon === "string" ? (
                  <img src={item.icon} alt="project images" />
                ) : (
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <span style={{ fontSize: "2rem", color: "#cccccc" }}>
                      {React.createElement(item.icon, { className: "icon" })}
                    </span>
                  </a>
                )}
              </ProjectUIUXContent>
            ))}

            {techIcons.slice(3, 6).map((item, index) => (
              <ProjectUIUXContent2
                onMouseEnter={() => handleHover2(index)}
                onMouseLeave={handleMouseLeave2}
                key={index}
                whileHover={{
                  rotate: [0, -10, 10, -10, 10, 0],
                  transition: { duration: 0.5 },
                }}
                isHovered2={isHovered2}
                index={index}
              >
                {typeof item.icon === "string" ? (
                  <img src={item.icon} alt="project images" />
                ) : (
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <span style={{ fontSize: "2rem", color: "#cccccc" }}>
                      {React.createElement(item.icon, { className: "icon" })}
                    </span>
                  </a>
                )}
              </ProjectUIUXContent2>
            ))}
          </ProjectUIUXWrapper>
        </ProjectUIUX>
      </ProjectWrapper>
      <ProjectLinks>
        {projectLinks.map((item: any, index: any) => (
          <Link to={item.link} target="_blank" key={index}>
            <ProjectLinksContent>
              <CardTitle>
                <FaMobile className="mobile-icon" />
                <h3>{item.title}</h3>
              </CardTitle>
              <div className="project-link-img">
                {renderImageOrIcon(item.image)}
              </div>
            </ProjectLinksContent>
          </Link>
        ))}
      </ProjectLinks>
    </CardTitleContainer>
  );
};

export default CardTitles;
