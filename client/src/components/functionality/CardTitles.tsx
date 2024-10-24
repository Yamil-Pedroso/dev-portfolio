import { useState } from "react";

import { MdStars } from "react-icons/md";
import Marquee from "react-fast-marquee";
import { figma, tailwind, photoshop, illustrator, css, xd } from "../../assets";
import { motion } from "framer-motion";
import { MiniProjects, ProjectUIUX, ProjectWrapper } from "./styles";

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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
          marginBottom: "1rem",
        }}
      >
        <div
          style={{
            width: "85rem",
            maskImage:
              "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0))",
          }}
        >
          <Marquee gradient={false} speed={80} pauseOnHover={true}>
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  style={{
                    width: "25rem",
                    height: "25rem",
                    margin: "2rem .8rem",
                    borderRadius: "1rem",
                    cursor: "pointer",
                    background:
                      "linear-gradient(-60deg, rgba(25, 26, 29, 0.1), rgba(255, 255, 255, 0.1))",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    padding: "1rem",
                  }}
                >
                  Hola
                </div>
              ))}
          </Marquee>
        </div>
      </div>
      <ProjectWrapper>
        <MiniProjects
        >
          <h2
            style={{
              color: "#0099ff",
              fontSize: "1.5rem",
            }}
          >
            Mini Projects
          </h2>
          <p
            style={{
              color: "#767676",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </MiniProjects>

        <ProjectUIUX
          
        >
          <div>
            <h2
              style={{
                color: "#0099ff",
                fontSize: "1.5rem",
              }}
            >
              Projects UI/UX
            </h2>
            <p
              style={{
                color: "#767676",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div
            style={{
              width: "20rem",
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
              marginLeft: "0rem",
              //overflow: "hidden",
              position: "relative",
            }}
          >
            {techIcons.slice(0, 3).map((item, index) => (
              <motion.div
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={handleMouseLeave}
                key={index}
                whileHover={{
                  rotate: [0, -10, 10, -10, 10, 0],
                  transition: { duration: 0.5 },
                }}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "4.5rem",
                  height: "4.5rem",
                  borderRadius: "50%",
                  cursor: "pointer",
                  background: "rgba(8, 8, 8, 0.8)",
                  border:
                    isHovered === index
                      ? "1px solid #003a61"
                      : "1px solid rgba(255, 255, 255, 0.1)",
                  padding: "1rem",
                  position: "absolute",
                  top: "-5rem",
                  left: "0rem",
                  marginLeft: `${index * 5.5}rem`,
                }}
              >
                <img src={item.icon} alt="" width={33} />
              </motion.div>
            ))}

            {techIcons.slice(3, 6).map((item, index) => (
                <motion.div
                  onMouseEnter={() => handleHover2(index)}
                  onMouseLeave={handleMouseLeave2}
                  key={index}
                  whileHover={{
                    rotate: [0, -10, 10, -10, 10, 0],
                    transition: { duration: 0.5 },
                  }}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "4.5rem",
                    height: "4.5rem",
                    borderRadius: "50%",
                    cursor: "pointer",
                    background: "rgba(8, 8, 8, 0.8)",
                    border:
                      isHovered2 === index
                        ? "1px solid #003a61"
                        : "1px solid rgba(255, 255, 255, 0.1)",
                    padding: "1rem",
                    position: "absolute",
                    top: ".4rem",
                    left: "3rem",
                    marginLeft: `${index * 5.5}rem`,
                    zIndex: 1,
                  }}
                >
                  <img 
                  src={
                    item.icon
                  } alt="" width={33} />
                </motion.div>
              ))}
          </div>
        </ProjectUIUX>
      </ProjectWrapper>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
          width: "50rem",
        }}
      >
        {Array(7)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "1rem 1.25rem",
                marginTop: "1rem",
                borderRadius: ".8rem",
                cursor: "pointer",
                background: "rgba(25, 25, 29, 0.8)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <MdStars style={{ fontSize: "1.5rem", color: "#0099ff" }} />
              <h3
                style={{
                  marginLeft: ".4rem",
                  color: "#767676",
                }}
              >
                Lorem ipsum
              </h3>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CardTitles;
