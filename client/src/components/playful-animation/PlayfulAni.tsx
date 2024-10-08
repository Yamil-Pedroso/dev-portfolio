import { motion, useScroll } from "framer-motion";

const PlayfulAni = () => {
 const { scrollYProgress } = useScroll();
  return (
    <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />  
  );
};

export default PlayfulAni;
