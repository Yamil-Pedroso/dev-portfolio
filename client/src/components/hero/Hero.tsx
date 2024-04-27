import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Typical from 'react-typical'
import { styles } from '../../style'
import HeroCreative from './HeroCreative'
import HeroAnimation from './hero-animation/HeroAnimation'
import {
  BlurStyle,
  CityName,
  HeroRightContent,
  Section,
  TerminalSim,
  TitleDev,
} from './style'

interface HeroProps {
  text: string
  greetings: string
  proffesion: string[]
  city: string
  icon: string
  prefix: string
}

const heroText: HeroProps = {
  text: 'yamil@latest init welcome-to-my-world',
  greetings: "Hola, I'm Yamil",
  proffesion: ['FS Developer', 'UX Designer', 'UI Designer'],
  city: 'based in Zurich.',
  prefix: 'npx',
  icon: '%',
}

const Hero = () => {
  return (
    <div className="">
      <BlurStyle />
      <Section id="home">
        <HeroAnimation />

        <HeroRightContent>
          <div className="hero-content-wrapper">
            <h1 className={`${styles.heroHeadText}`}>
              <span>{heroText.greetings}</span>
            </h1>
            <TitleDev>
              <Typical
                steps={['Full Stack', 100, 'Software Dev', 6000]}
                loop={Infinity}
                wrapper="h2"
              />
            </TitleDev>
            <CityName>{heroText.city}</CityName>
            <TerminalSim>
              <p className="">{heroText.icon}</p>
              <p className="">{heroText.prefix}</p>
              <p className="">{heroText.text}</p>
            </TerminalSim>
          </div>
        </HeroRightContent>
      </Section>
      <div className="mt-[2rem] w-full flex justify-center items-center max-xs:mt-0">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-black1 flex justify-center items-start p-2 max-xs:w-[22px] max-xs:h-[50px] max-xs:rounded-2xl max-xs:border-2 max-xs:border-black1">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-[#46ca9e] mb-1 max-xs:w-3 max-xs:h-3"
            />
          </div>
        </a>
      </div>
    </div>
  )
}

export default Hero
