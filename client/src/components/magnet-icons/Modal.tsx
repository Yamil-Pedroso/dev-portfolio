import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./modal.module.scss";

interface ModalProps {
  isVisible: boolean;
  percentage: number;
}

const Modal: React.FC<ModalProps> = ({ isVisible, percentage }) => {
    const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const radius = 15.9155; // Radio del círculo
  const circumference = 2 * Math.PI * radius; // Circunferencia del círculo

   useEffect(() => {
    if (isVisible) {
      setAnimatedPercentage(0)

      const interval = setInterval(() => {
        setAnimatedPercentage((prev) => {
          if (prev < percentage) {
            return prev + 1;
          } else {
            clearInterval(interval);
            return percentage;
          }
        });
      }, 15); 

      return () => clearInterval(interval)
    }
  }, [isVisible, percentage]);

  return (
    isVisible && (
      <div className={styles.modalOverlay}>
        <motion.div
          className={styles.modalContent}
          initial={{ y: -50, scale: 0.5 }}
          animate={{ y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 20 }}
          exit={{ opacity: 0 }}
        >
          <svg className={styles.circularBar} viewBox="0 0 36 36">
            <path
              className={styles.circleBg}
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <motion.path
              className={styles.circle}
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
                 strokeDasharray={circumference}
                 strokeDashoffset={circumference}
                 animate={{ strokeDashoffset: circumference - (percentage / 100) * circumference }}
                 transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            <text x="18" y="20.35" className={styles.percentage}>
              {animatedPercentage}%
            </text>
          </svg>
        </motion.div>
      </div>
    )
  );
};

export default Modal;
