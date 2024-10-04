import React from 'react'
import Lottie from 'lottie-react'
import animationData from '../../data/animationData/ojitos.json'
import { motion } from 'framer-motion'

const MyAnimation = () => {
  return (
    <div>
      <Lottie
        animationData={animationData}
        loop={true} // Puede ser true o false
        autoplay={true} // Si quieres que la animación empiece automáticamente
        style={{ width: 300, height: 300 }}
      />
    </div>
  )
}

const LottieWithMotion: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
      whileHover={{ scale: 1.1, rotate: 10 }}
    >
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: 200, height: 200 }}
      />
    </motion.div>
  )
}

export default LottieWithMotion
