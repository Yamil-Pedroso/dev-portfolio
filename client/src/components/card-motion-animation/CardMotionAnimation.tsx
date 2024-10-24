import { useState } from "react";
import { CardContainer, Card, BtnWrapper, Btn } from "./styles";
import { ITechService } from "../../constants";
import { animate, motion } from "framer-motion";
import { frontend1 } from "../../assets";

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
        <div className="small-circle"></div>
        <motion.h5 layout="position">{title}</motion.h5>

        <motion.p layout="position">{description}</motion.p>

        {isExpandedEle && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -100 }} 
            transition={{
              type: "spring", 
              stiffness: 100,
              damping: 10,
              duration: 0.5,
            }}
            className="expanded-content"
          >
            <video
              autoPlay
              muted
              loop
              src={img}
              style={{
                width: "100%",
                height: "12.5rem",
                borderRadius: "0.2rem",
                marginBottom: "1rem",
                objectFit: "cover",
              }}
            ></video>

            <motion.p {...animate}>{description2}</motion.p>

            <BtnWrapper {...animate} onClick={handleClick}>
              <Btn>{buttonText}</Btn>
            </BtnWrapper>
          </motion.div>
        )}
      </Card>
    </CardContainer>
  );
};

export default CardMotionAnimation;
