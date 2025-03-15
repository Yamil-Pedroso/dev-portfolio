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

const renderImageOrIcon = (image: any) => {
  return typeof image === "string" ? (
    <img src={image} alt="project images" />
  ) : (
    React.createElement(image, { className: "icon" })
  );
};

const techIcons = [
  {
    id: 1,
    icon: figma,
  },
  {
    id: 2,
    icon: photoshop,
  },
  {
    id: 3,
    icon: illustrator,
  },
  {
    id: 4,
    icon: tailwind,
  },
  {
    id: 5,
    icon: css,
  },
  {
    id: 6,
    icon: xd,
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

const CardTitles = () => {
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const [isHovered2, setIsHovered2] = useState<number | null>(null);

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
            <h2>Projects UI/UX</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
                <img src={item.icon} alt="project images" />
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
                <img src={item.icon} alt="project images" />
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
