import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface RevealProps {
  children: JSX.Element;
  width?: "fit-content" | "100%";
}

const Reveal = ({ children }: RevealProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      style={{
        position: "relative",
      }}
      ref={ref}
    >
      <motion.div initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.5 }}>
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
