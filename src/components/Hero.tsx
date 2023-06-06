import React from 'react'
import { motion } from 'framer-motion'
import { avatar } from '../assets/index'
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
      <section className={`relative w-full h-screen mx-auto`} id="home">
        <div>
          <div className="flex flex-row justify-center items-center h-screen flex-wrap">
            <div
              className={`w-[25rem] h-[25rem] border-[#fafafa] border-[16px] overflow-hidden rounded-full shadow-[0_2px_60px_-15px_rgba(0,0,0,0.3)]`}
            >
              <img
                src={avatar}
                alt="avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="pl-[7.5rem] relative">
              <h1 className={`${styles.heroHeadText}`}>
                <span className="text-[#fafafa]">{heroText.greetings}</span>
              </h1>
              <div className="bg-gradient-to-r from-[#46ca9e] via-[#55b1bf] to-[#4e67a5] bg-clip-text text-transparent text-[4em] font-bold">
                <Typical
                  steps={['Full Stack', 100, 'Software Dev', 6000]}
                  loop={Infinity}
                  wrapper="h2"
                />
              </div>
              <h2 className="text-[#fafafa] text-[60px]">{heroText.city}</h2>
              <div className="flex items-center px-4 bg-[#1c1c1e] w-[27vw] h-[4vh] border-[#2b2a2a] border-[1px] rounded-[.5rem]">
                <p className="text-[#46ca9e]">{heroText.icon}</p>
                <p className="text-[#a4a3a3] ml-2">{heroText.prefix}</p>
                <p className="text-[#2c8064] text-[1.1em] tracking-wide ml-2">
                  {heroText.text}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
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
      </section>
    </>
  )
}

export default Hero
