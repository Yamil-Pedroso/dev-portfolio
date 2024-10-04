import React, { useRef } from 'react';
import Lottie from 'lottie-react';
import boliRunAnimationData from '../../../data/animationData/boli-run.json';
import Marquee from 'react-fast-marquee';
import { motion } from 'framer-motion';

const BoliRun: React.FC = () => {
  const lottieRef = useRef(null) as any;

  const handleMouseEnter = () => {
    if (lottieRef.current) {
      lottieRef.current.goToAndStop(0, true); // Detiene la animación en el primer fotograma
    }
  };

  const handleMouseLeave = () => {
    if (lottieRef.current) {
      lottieRef.current.play() ; // Reanuda la animación
    }
  };

  return (
    <div>
       <div style={{marginTop: '8rem', width: "50rem", margin: "0 auto"}}>
        <motion.h2 className="">Tech</motion.h2>
        <motion.h2 initial="hidden" className="">
          Overview.
        </motion.h2>

        <motion.p>
          I'm a full stack software developer with experience in TypeScript and
          JavaScript, and in frameworks like React, Node.js, Django, Three.js
          and now improving my Angular'skills. I'm a quick learner and
          collaborate closely with clients to create efficient, scalable, and
          user-friendly solutions that solve real-world problems. Let's work
          together to bring your ideas to life!
        </motion.p>
       </div>
    <Marquee gradient={false} speed={80}>
    <div
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', opacity: 0.5 }}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={boliRunAnimationData}
        loop={true} // Mantén la animación en bucle, pero controlada con el mouse
        autoplay={true}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ width: 200, height: 200, cursor: 'pointer', filter: 'drop-shadow(0 0 1rem #0099ff) grayscale(100%)'}}
      />
    </div>
    </Marquee>
    </div>
  );
};

export default BoliRun;
