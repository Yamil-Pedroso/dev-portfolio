import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'

import 'react-vertical-timeline-component/style.min.css'

import { styles } from '../style'
import { experiences } from '../constants'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'

const ExperienceCard = ({ experience }: any) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#a1a1aa',
        color: '#fff',
        border: '8px solid #000',
        padding: '2rem',
      }}
      contentArrowStyle={{ display: 'none' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[75%] h-[75%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-black1 text-[22px] font-bold">
          {experience.title}
        </h3>
        <p
          className="text-black1 text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point: any, index: any) => (
          <li
            key={`experience-point-${index}`}
            className="text-black1 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <div id="work">
      <motion.div variants={textVariant(1)}>
        <p className={`${styles.sectionSubText} text-center lg:text-[3.75rem] max-md:text-[2.75rem] md:text-[2.75rem]  max-sm:text-[2rem]`}>
          My Journey So Far.
        </p>
        <h2
          className={`${styles.sectionHeadText} bg-gradient-to-r from-[#0099ff] to-[#6289ef] bg-clip-text text-transparent text-center lg:text-[3.5rem] max-md:text-[2.75rem] md:text-[2.75rem]  max-sm:text-[2rem]`}
        >
          Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default SectionWrapper(Experience, 'work')
