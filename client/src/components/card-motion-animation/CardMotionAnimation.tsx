import { useState } from "react";
import { CardContainer, Card, BtnWrapper, Btn } from "./styles";
import { ITechService } from "../../constants";
import { animate, motion } from "framer-motion";
import { frontend1 } from "../../assets";

interface ICardProps extends ITechService {
  isExpandedEle: boolean;
  handleClick: () => void;
  index: number; // Recibir el indice de la card
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
  // Definir variantes de animación basadas en la posición de la card
  const direction = index % 3 === 0 ? "left" : "right"; // Para determinar la dirección basada en la posición
  const initialX = direction === "left" ? -100 : 100; // Definir el desplazamiento inicial

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
        whileInView="visible" // Animar cuando entre en vista
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="small-circle"></div>
        <motion.h5 layout="position">{title}</motion.h5>

        <motion.p layout="position">{description}</motion.p>

        {isExpandedEle && (
          <motion.div
            initial={{ opacity: 0, y: -100 }} // Aparece desde arriba
            animate={{ opacity: 1, y: 0 }} // Llega a la posición final
            exit={{ opacity: 0, y: -100 }} // Sale hacia arriba nuevamente
            transition={{
              type: "spring", // Tipo de animación de resorte
              stiffness: 100, // Define cuán fuerte es el resorte
              damping: 10, // Controla la cantidad de rebote (más bajo, más rebote)
              duration: 0.5, // Duración de la animación
              //exit: {
              //    type: "tween", // Transición suave sin rebote al cerrar
              //    ease: "easeInOut", // Facilitar la entrada y salida para una transición suave
              //    duration: 0.3, // Duración más corta para el cierre suave
              //  },
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
            {/*<motion.img
              {...animate}
              src={img}
              alt="card"
            />*/}

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
