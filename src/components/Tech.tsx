import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { fadeIn, textVariant } from '../utils/motion'
import { techBox } from '../constants'

const Tech = () => {
  return (
    <div
      className="flex justify-center text-gray text-center text-[2rem]"
      id="tech"
    >
      <motion.div variants={textVariant(1)} id="projects">
        <h2
          className={`${styles.sectionHeadText} bg-gradient-to-r from-[#46ca9e] via-[#4a7bf8] to-[#6289ef] bg-clip-text text-transparent`}
        >
          Tech
        </h2>
      </motion.div>
      {techBox.map((box) => (
        <div
          key={box.id}
          className="w-[10rem] h-[15vh] border-[1px] border-[#46ca9e] m-2"
        >
          <p className="text-[.5em]">{box.title}</p>
        </div>
      ))}
    </div>
  )
}

export default Tech
