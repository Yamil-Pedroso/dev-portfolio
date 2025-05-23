import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Typical from "react-typical";
import { styles } from "../../style";
import { cityCode } from "../../assets";
import { codes } from "../../assets";
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
  TitleDevWrapper,
  VideoWrapper,
  Button,
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
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPaused(false);
    } else {
      videoRef.current.pause();
      setIsPaused(true);
    }
  };

  return (
    <HeroContainer>
      <VideoBackground ref={videoRef} autoPlay muted loop>
        <source src={cityCode} type="video/mp4" />
      </VideoBackground>
      <Button onClick={toggleVideo}>{isPaused ? "Play" : "Pause"}</Button>

      <Section id="home">
        <HeroRightContent>
          <div className="hero-content-wrapper">
            <h1 className={`${styles.heroHeadText}`}>
              <span>{heroText.greetings}</span>
            </h1>
            <TitleDevWrapper>
              <TitleDev>
                <Typical
                  steps={["Full Stack", 100, "Software Dev", 6000]}
                  loop={Infinity}
                  wrapper="h2"
                />
              </TitleDev>
            </TitleDevWrapper>
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
