import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { styles } from "../../style";
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
    <div 
      className="about-wrapper"
      style={{ marginTop: "20rem" }}>
      <motion.h2
           ref={ref1} // Referencia para observar este elemento
           variants={springVariants}
           initial="hidden"
           animate={inView1 ? "visible" : "hidden"} // Animar cuando esté en vista
        className=""
      >Introduction.</motion.h2>
      <motion.h2 
         ref={ref2}
         variants={springVariants}
         initial="hidden"
         animate={inView2 ? "visible" : "hidden"}
      className="">Overview.</motion.h2>

      <motion.p
         ref={ref3}
         variants={springVariants}
         initial="hidden"
         animate={inView3 ? "visible" : "hidden"}
      >
        I'm a full stack software developer with experience in TypeScript and
        JavaScript, and in frameworks like React, Node.js, Django, Three.js and
        now improving my Angular'skills. I'm a quick learner and collaborate
        closely with clients to create efficient, scalable, and user-friendly
        solutions that solve real-world problems. Let's work together to bring
        your ideas to life!
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
