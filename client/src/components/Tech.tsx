import React, { useState, useEffect } from 'react'
import { inView, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { styles } from '../style'
import { fadeIn, textVariant } from '../utils/motion'
import {
  SiJavascript,
  SiPython,
  SiRuby,
  SiRubyonrails,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiDjango,
  SiDocker,
  SiPostgresql,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobelightroom,
} from 'react-icons/si'
import { FaReact, FaAngular } from 'react-icons/fa'
import { IoLogoNodejs } from 'react-icons/io'
import { TbSql } from 'react-icons/tb'
import './style.css'

const techBox = [
  {
    id: 1,
    title: 'Javascript',
    icon: <SiJavascript />,
    color: '#f7df1e',
  },
  {
    id: 2,
    title: 'Python',
    icon: <SiPython />,
    color: '#3776ab',
  },
  {
    id: 3,
    title: 'Ruby',
    icon: <SiRuby />,
  },
  {
    id: 4,
    title: 'React',
    icon: <FaReact />,
  },
  {
    id: 5,
    title: 'Django',
    icon: <IoLogoNodejs />,
  },
  {
    id: 6,
    title: 'Angular',
    icon: <FaAngular />,
  },
  {
    id: 7,
    title: 'Ruby on Rails',
    icon: <SiRubyonrails />,
  },
  {
    id: 8,
    title: 'Typescript',
    icon: <SiTypescript />,
  },
  {
    id: 9,
    title: 'HTML5',
    icon: <SiHtml5 />,
  },
  {
    id: 10,
    title: 'CSS3',
    icon: <SiCss3 />,
  },
  {
    id: 11,
    title: 'Django',
    icon: <SiDjango />,
  },
  {
    id: 12,
    title: 'Docker',
    icon: <SiDocker />,
  },
  {
    id: 13,
    title: 'SQL',
    icon: <TbSql />,
  },
  {
    id: 14,
    title: 'PostgreSQL',
    icon: <SiPostgresql />,
  },
  {
    id: 15,
    title: 'Figma',
    icon: <SiFigma />,
  },
  {
    id: 16,
    title: 'Photoshop',
    icon: <SiAdobephotoshop />,
  },
  {
    id: 17,
    title: 'Illustrator',
    icon: <SiAdobeillustrator />,
  },
  {
    id: 18,
    title: 'InDesign',
    icon: <SiAdobeindesign />,
  },
  {
    id: 19,
    title: 'Lightroom',
    icon: <SiAdobelightroom />,
  },
]

const Tech = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  })

  return (
    <div className="mt-[5rem] flex flex-col" id="tech">
      {/*<motion.div
        variants={textVariant(1)}
        id="projects"
        className="text-center"
      >
        <h2
          className={`${styles.sectionHeadText} bg-gradient-to-r from-[#0099ff] via-[#4a7bf8] to-[#6289ef] bg-clip-text text-transparent`}
        >
          Tech
        </h2>
  </motion.div>*/}

      <div
        className="flex flex-wrap w-[80vw] md:w-[60rem] mx-auto justify-center text-center text-[2rem]"
        id="tech"
      >
        {techBox.map((box) => (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            exit={{ opacity: 0, y: 20 }}
            className="flex justify-center items-center w-[10rem] h-[15vh] max-md:w-[8rem] max-md:h-[11rem] max-sm:w-[6rem] max-sm:h-[9rem] border-[1px] border-[#515151] m-2 cursor-pointer hover:border-[#0099ff] transition duration-500 ease-in-out"
          >
            <div
              className={`text-[2em] max-md:text-[1.8em] max-sm:text-[1.3em] text-[#515151] hover:text-[#0099ff] transition duration-500 ease-in-out`}
            >
              {box.icon}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Tech
