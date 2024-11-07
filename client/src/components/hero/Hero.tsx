import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Typical from "react-typical";
import { styles } from "../../style";
import { bgVideo } from "../../assets";
import HeroCreative from "./HeroCreative";
import HeroAnimation from "./hero-animation/HeroAnimation";
import {
  BlurStyle,
  CityName,
  HeroContainer,
  HeroRightContent,
  VideoBackground,
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
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      // Ralentizar el video configurando el playbackRate
      videoRef.current.playbackRate = 0.8; // Ajusta el valor según la velocidad deseada (1.0 es normal, menos de 1 es más lento)
    }
  }, []);

  return (
    <HeroContainer>
      <div className="up-band"></div>
      <div className="black-col"></div>
      {/*<BlurStyle />*/}
      <VideoBackground autoPlay muted loop>
        <source src={bgVideo} type="video/mp4" />
      </VideoBackground>
      {/*<div className="fade-overlay"></div>*/}
      <Section id="home">
        <HeroRightContent>
          <div className="hero-content-wrapper">
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
          </div>
        </HeroRightContent>
      </Section>
      {/*<div
       className="bottom-band"
      >

      </div>*/}
    </HeroContainer>
  );
};

export default Hero;
