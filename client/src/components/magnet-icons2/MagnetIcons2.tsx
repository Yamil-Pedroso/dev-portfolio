import { useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";
import { FaReact, FaHtml5, FaNodeJs, FaPython } from "react-icons/fa";
import { TbBrandTypescript, TbBrandCSharp, TbFileTypeSql  } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { SiDjango } from "react-icons/si";
import { GoRuby } from "react-icons/go";
import { FiFigma } from "react-icons/fi";
import { DiPhotoshop, DiIllustrator } from "react-icons/di";
import { IconType } from "react-icons";
import { Container, SimulateScreen, IconWrapper, LaptopIconWrapper } from "./styles";
import { motion } from "framer-motion";

interface IconObj {
  icon: IconType;
  id: number;
}

const arrObj: IconObj[] = [
  { icon: FaReact, id: 1 },
  { icon: TbBrandTypescript, id: 2 },
  { icon: IoLogoJavascript, id: 3 },
  { icon: FaHtml5, id: 4 },
  { icon: FaNodeJs, id: 5 },
  { icon: TbBrandCSharp , id: 6 },
  { icon: FaPython, id: 7 },
  { icon: SiDjango, id: 8 },
  { icon: GoRuby, id: 9 },
  { icon: FiFigma, id: 10 },
  { icon: DiPhotoshop, id: 11 },
  { icon: DiIllustrator, id: 12 },
  { icon: TbFileTypeSql, id: 13 },
];

const paragraphArray = ["Hola mundo!", "How are you?", "Let's program!", "npm install becreative@latest"];

const MagnetIcons2 = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIcons, setActiveIcons] = useState<{ [key: number]: boolean }>({});
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);

  const handleClickText = () => {
    setCurrentParagraphIndex(prevIdx =>
        prevIdx < paragraphArray.length - 1 ? prevIdx + 1 : 0
    );
  };

  useEffect(() => {
    const checkCollision = () => {
      if (!containerRef.current || !screenRef.current) return;

      const screenRect = screenRef.current.getBoundingClientRect();

      iconRefs.current.forEach((icon, index) => {
        if (!icon) return;
        const iconRect = icon.getBoundingClientRect();

        // Detecta cuando el ícono entra en la pantalla (se agranda)
        const isEntering = iconRect.left < screenRect.right && iconRect.right >= screenRect.left;

        // Detecta cuando el ícono sale completamente por la izquierda (debe volver a su tamaño normal)
        const isExiting = iconRect.right < screenRect.left;

        setActiveIcons((prev) => {
          const newState = { ...prev, [index]: isEntering };
          if (isExiting) newState[index] = false; // Asegura que se reduzca al salir
          return newState;
        });
      });

      requestAnimationFrame(checkCollision); // Llamar en cada frame para mayor precisión
    };

    requestAnimationFrame(checkCollision);

    return () => {}; // Cleanup no necesario con requestAnimationFrame
  }, []);

  return (
    <Container ref={containerRef} className="marquee-container">
        <div>
        <SimulateScreen ref={screenRef} className="simulate-screen">
        <span>{'>'}</span>
        {paragraphArray.map((paragraph, index) => (
          <motion.div
            className="text"
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: index === currentParagraphIndex ? 1 : 0,
              y: index === currentParagraphIndex ? 0 : 20,
            }}
            transition={{ duration: 0.5 }}
            style={{
              display: index === currentParagraphIndex ? "block" : "none",
            }}
          >
            <p
             style={{ color: index === currentParagraphIndex ? "#0099ff" : "#000" }}
            >{paragraph}</p>
          </motion.div>
        ))}
        </SimulateScreen>

      <Marquee
      style={{ width: "150rem", height: "100%" }}
      speed={50} pauseOnHover={true}>
        {arrObj.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <IconWrapper
              key={index}
              ref={(el) => {
                iconRefs.current[index] = el;
              }}
              className={`icon-wrapper ${activeIcons[index] ? "active" : ""}`}
            >
              <IconComponent className="icon" />
            </IconWrapper>
          );
        })}
      </Marquee>

        </div>

      <button className="btn"
          onClick={handleClickText}
        >
          Enter
        </button>
    </Container>
  );
};

export default MagnetIcons2;
