import React from 'react'
import { motion } from 'framer-motion'
import { avatar } from '../assets'
import { fullstack } from '../assets'
import Typical from 'react-typical'
import { styles } from '../style'

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

const color = () => {
  return (
    <span className="text-red-500 text-[5em] font-bold">
      {heroText.greetings}
    </span>
  )
}

const Hero = () => {
  return (
    <>
      <div className="w-[20vw] h-[30vh] bg-[#2c8064] absolute z-0 top-[5rem] right-[-2rem] blur-[7rem]"></div>
      <section className="flex justify-center items-center" id="home">
        <div className="flex justify-center mt-40 lg:flex-row items-center md:flex-col sm:flex-col xs:flex-col">
          <div
          className={`flex justify-center transition-all lg:w-[35rem] lg:h-[40rem] bg-slate-800  md:w-[30rem] md:h-[35rem] sm:w-[25rem] sm:h-[30rem] xs:w-[20rem] xs:h-[25rem]`}>
          </div>
          <div className="flex flex-col md:justify-center md:items-center sm:justify-center sm:items-center xs:justify-center xs:items-center xs:p-10">
            <h1 className={`${styles.heroHeadText}`}>
              <span className="text-[#fafafa] lg:text-[5rem] md:text-[3rem] sm:text-[3rem] xs:text-[3rem] min-[450px]:text-center">
                {heroText.greetings}
              </span>
            </h1>
          <div className="bg-gradient-to-r text-center from-[#46ca9e] via-[#55b1bf] to-[#4e67a5] bg-clip-text text-transparent lg:text-[4em] font-bold md:text-[3rem] md:w-full sm:w-full sm:text-[3rem] xs:text-[3rem]">
              <Typical
                steps={['Full Stack', 100, 'Software Dev', 6000]}
                loop={Infinity}
                wrapper="h2"
              />
            </div>
            <h2 className="text-[#fafafa] lg:text-[5rem] md:text-[3rem] sm:text-[3rem] xs:text-[3rem]">{heroText.city}</h2>
            <div className="flex items-center px-4 bg-[#1c1c1e] lg:w-[24rem] lg:h-[2.5rem] border-[#2b2a2a] border-[1px] rounded-[.5rem] md:text-[.8rem] sm:text-[.8rem] xs:text-[.8rem] ">
              <p className="text-[#46ca9e]">{heroText.icon}</p>
              <p className="text-[#a4a3a3] ml-2">{heroText.prefix}</p>
              <p className="text-[#2c8064] text-[1.1em] tracking-wide ml-2">
                {heroText.text}
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="xs:bottom-10 mt-[3rem] w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-black1 flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-[#46ca9e] mb-1"
            />
          </div>
        </a>
      </div>
    </>
  )
}

export default Hero
