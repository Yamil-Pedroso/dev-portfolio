import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { techServices } from "../../constants";
import { SectionWrapper } from "../../hoc";
import CardMotionAnimation from "../card-motion-animation/CardMotionAnimation";
import "./styles.css";

const About = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  // Usar el hook useInView para manejar el "in view" de los elementos
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.3 });

  // Definir las variantes de animación con efecto de resorte
  const springVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 10,
        duration: 0.8,
      },
    },
  };

  return (
    <div className="about-wrapper">
      <motion.h2
        ref={ref1} // Referencia para observar este elemento
        variants={springVariants}
        initial="hidden"
        animate={inView1 ? "visible" : "hidden"} // Animar cuando esté en vista
      >
        Introduction.
      </motion.h2>
      <motion.h2
        ref={ref2}
        variants={springVariants}
        initial="hidden"
        animate={inView2 ? "visible" : "hidden"}
      >
        Overview.
      </motion.h2>

      <motion.p
        ref={ref3}
        variants={springVariants}
        initial="hidden"
        animate={inView3 ? "visible" : "hidden"}
      >
        I am a Fullstack Developer with over 4 years of experience building
        scalable, responsive, and user-focused applications across the web. My
        technical expertise spans frontend frameworks like React and backend
        technologies such as Node.js and Express, with a strong foundation in
        modern architectures, REST APIs, and clean code practices. In parallel,
        I am also a passionate digital and traditional artist. My background in
        traditional and digital art brings a unique creative edge to my
        development work. Whether I'm coding an interactive component or
        illustrating a concept, I strive to merge functionality with aesthetic
        value.
      </motion.p>

      <div className="services-wrapper">
        {techServices.map((service, index) => (
          <CardMotionAnimation
            key={index}
            {...service}
            index={index}
            isExpandedEle={expandedCard === index}
            handleClick={() => handleCardClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
