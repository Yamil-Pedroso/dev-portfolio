import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { styles } from '../style'
import { services } from '../constants'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import CardAnimation from './card-animation/CardAnimation'

const ServiceCard = ({ index, title, icon, description }: any) => {
  const [selectedCard, setSelectedCard] = useState(null)

  return (
    <div
      className={`flex flex-col items-center justify-evenly p-4 max-md:w-[18rem] max-md:h-[20rem] border-black border-[5px] w-[350px] h-[380px] shadow-card ${
        index % 2 === 0 ? 'bg-greenMid' : 'bg-ocreMid'
      }`}
    >
      <img
        src={icon}
        alt="icon services"
        className="w-[3.75rem] h-[3.75rem] max-md:w-[3rem]  max-md:h-[3rem]"
      />
      <h2 className="text-black">{title}</h2>
      <p className="text-black text-[1rem] max-w-[15rem] max-md:text-[.8rem] leading-[1.25rem] text-center">
        {description}
      </p>
    </div>
  )
}

const About = () => {
  return (
    <div className="mt-[10rem] max-xs:mt-[3rem]" id="about">
      <motion.div variants={textVariant(0.01)}>
        <h2 className="text-[#fafafa] lg:text-[3.75rem] max-md:text-[2.75rem] md:text-[2.75rem]  max-sm:text-[2rem]">
          Introduction.
        </h2>
        <h2 className="bg-gradient-to-r from-[#46ca9e] via-[#4a7bf8] to-[#6289ef] bg-clip-text text-transparent lg:text-[3.5rem] max-md:text-[2.75rem] md:text-[2.75rem]  max-sm:text-[2rem] font-bold">
          Overview.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-[#a1a1aa] text-[1rem] max-sm:text-[.8rem] max-w-3xl leading-[1.8rem]"
      >
        I'm a full stack software developer with experience in TypeScript and
        JavaScript, and in frameworks like React, Node.js, Django, Three.js and
        now improving my Angular'skills. I'm a quick learner and collaborate
        closely with clients to create efficient, scalable, and user-friendly
        solutions that solve real-world problems. Let's work together to bring
        your ideas to life!
      </motion.p>

      <div className="mt-20 flex justify-center gap-8 flex-wrap">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(About, 'about')
