import { useState } from "react";
import { CardContainer, Card, BtnWrapper, Btn } from "./styles";
import { ITechService } from "../../constants";
import { animate, motion } from "framer-motion";
import {
  frontIcon,
  backIcon,
  nativeIcon,
  uiuxIcon,
  digitalArtIcon,
  hostingIcon,
} from "../../assets";

interface ICardProps extends ITechService {
  isExpandedEle: boolean;
  handleClick: () => void;
  index: number;
}

const CardMotionAnimation: React.FC<ICardProps> = ({
  title,
  description,
  description2,
  img,
  buttonText,
  isExpandedEle,
  handleClick,
  index,
}) => {
  const direction = index % 3 === 0 ? "left" : "right";
  const initialX = direction === "left" ? -100 : 100;

  const cardVariants = {
    hidden: { opacity: 0, x: initialX },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15,
        duration: 1.2,
      },
    },
  };

  const animate = {
    layout: "position",
    animate: { opacity: 1 },
    transition: { duration: 0.3 },
    initial: { opacity: 0 },
  } as any;

  const serviceIcons = [
    { src: frontIcon, alt: "Front-end" },
    { src: backIcon, alt: "Back-end" },
    { src: nativeIcon, alt: "Native" },
    { src: uiuxIcon, alt: "UI/UX" },
    { src: digitalArtIcon, alt: "Digital Art" },
    { src: hostingIcon, alt: "Hosting" },
  ];

  return (
    <CardContainer>
      <Card
        layout
        onClick={handleClick}
        as={motion.div}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="service-icons"></div>
        <motion.h5 layout="position">{title}</motion.h5>

        <motion.p layout="position">{description}</motion.p>

        {serviceIcons.map((icon, idx) => (
          <div key={idx} className="service-icons__wrapper">
            {idx === index && <img src={icon.src} alt={icon.alt} />}
          </div>
        ))}
      </Card>
    </CardContainer>
  );
};

export default CardMotionAnimation;
