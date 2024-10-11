import { motion } from 'framer-motion'

import { styles } from '../../style'
//import Fade from 'react-reveal/Fade'
import { github } from '../../assets'
import { SectionWrapper } from '../../hoc'
import { projects } from '../../constants'
import { fadeIn, textVariant } from '../../utils/motion'
import TabCards from '../TabCards'
import { FaNetworkWired } from 'react-icons/fa'
import './styles.css'
import { useState } from 'react'

interface WorksProps {
  setIsHovering: (hovering: boolean) => void;
}

const Works: React.FC<WorksProps> = ({ setIsHovering }) => {
  return (
    <div style={{
       display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }}>
      <motion.div variants={textVariant(1)} id="projects">
        <p
          className={`${styles.sectionSubText} lg:text-[3.75rem] max-md:text-[2.75rem] md:text-[2.75rem]  max-sm:text-[2rem]`}
        >
          My work
        </p>
        <h2
          className="projects-title"
        >
          Projects.
        </h2>
      </motion.div>

      <div className="">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[1rem] max-sm:text-[.8rem] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="text-white flex justify-center">
        <TabCards onHoverCard={setIsHovering} />
      </div>
    </div>
  )
}

export default Works
