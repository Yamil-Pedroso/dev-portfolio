import { useState, useRef } from "react";
import { CardContainer, Card, Text } from "./styles";
import { motion, useInView } from "framer-motion";

interface CardLayoutProps {
  id?: number;
  title: string;
  image?: string;
  description?: string;
  link?: string;
  url?: string;
  icon?: React.ReactNode;
  isHovered?: boolean;
  setIsHovered?: (isHovered: boolean) => void;
}

const CardLayout = ({
  title,
  image,
  description,
  link,
  url,
  icon,
  id,
}: CardLayoutProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, {once: false});

  const springAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120, // Resorte fuerte
        damping: 10, // Amortiguación para que no sea exagerado
        delay: id ? id * 0.1 : 0, // ✅ Efecto escalonado basado en ID
      },
    },
  }

  const handleHover = () => {
    setIsHovered(true);
  }

  const handleOver = () => {
    setIsHovered(false);
  }

  return (
    <CardContainer ref={ref}>
      <Card
        as={motion.div}
        key={id}
        onMouseEnter={handleHover}
        onMouseLeave={handleOver}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={springAnimation}
        style={{
          background: isHovered ? "transparent" : "#373432",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <div
          style={{
            transform: isHovered ? "scale(1.8)" : "scale(1)",
            transition: "all 0.3s ease-in-out",
            pointerEvents: "none",
          }}
          className="icon"
        >{icon}</div>
        <Text>
          <h2
            style={{
              opacity: isHovered ? 0 : 1,
              transition: "all 0.3s ease-in-out",
            }}
          >{title}</h2>

          <a
            style={{
              transform: isHovered ? "scale(1.2)" : "scale(1)",
              transition: "all 0.3s ease-in-out",
            }}
            href={link} target="_blank" rel="noreferrer">
            {url}
          </a>
        </Text>
      </Card>
    </CardContainer>
  );
};

export default CardLayout;
