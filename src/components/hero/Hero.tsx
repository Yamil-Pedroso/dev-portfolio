import React from "react";
import { motion } from "framer-motion";
import Typical from "react-typical";
import { styles } from "../../style";
import HeroCreative from "./HeroCreative";
import {
  BlurStyle,
  CityName,
  HeroRightContent,
  Section,
  TerminalSim,
  TitleDev,
} from "./style";

interface HeroProps {
  text: string;
  greetings: string;
  proffesion: string[];
  city: string;
  icon: string;
  prefix: string;
}

const heroText: HeroProps = {
  text: "yamil@latest init welcome-to-my-world",
  greetings: "Hola, I'm Yamil",
  proffesion: ["FS Developer", "UX Designer", "UI Designer"],
  city: "based in Zurich.",
  prefix: "npx",
  icon: "%",
};

const Hero = () => {
  return (
    <>
      <BlurStyle />
      <Section id="home">
        
          <HeroCreative />
        
        
          <HeroRightContent>
            <h1 className={`${styles.heroHeadText}`}>
              <span>{heroText.greetings}</span>
            </h1>
            <TitleDev>
              <Typical
                steps={["Full Stack", 100, "Software Dev", 6000]}
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
          </HeroRightContent>
      </Section>
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
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-[#46ca9e] mb-1"
            />
          </div>
        </a>
      </div>
    </>
  );
};

export default Hero;
