import React, { useRef } from "react";
import Lottie from "lottie-react";
import boliRunAnimationData from "../../../data/animationData/boli-run.json";
import Marquee from "react-fast-marquee";
import {
  BoliAniContainer,
  HeaderParagraphWrapper,
  HeaderParagraph,
  ContentWrapper,
  Stack,
  ExtraContent,
  Header,
  RightText,
  SmallBoxHeader,
  Spheare,
  StackContentWrapper,
} from "./styles";

const BoliRun: React.FC = () => {
  const lottieRef = useRef(null) as any;

  const handleMouseEnter = () => {
    if (lottieRef.current) {
      lottieRef.current.goToAndStop(0, true); // Detiene la animación en el primer fotograma
    }
  };

  const handleMouseLeave = () => {
    if (lottieRef.current) {
      lottieRef.current.play(); // Reanuda la animación
    }
  };

  return (
    <BoliAniContainer id="tech">
      <ContentWrapper>
        <HeaderParagraphWrapper>
          <h2>Having fun!</h2>
          <HeaderParagraph
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            In my journey as a developer, I've had the opportunity to work with
            a diverse set of technologies, each contributing to my growth and
            understanding of software development. From front-end frameworks
            that make user experiences intuitive and engaging, to back-end
            technologies that ensure reliability and performance, I've embraced
            the tools that bring ideas to life. Below, you'll find the core
            technologies that I specialize in, each one reflecting my expertise
            and passion for creating efficient, scalable, and creative digital
            solutions.
          </HeaderParagraph>
        </HeaderParagraphWrapper>
        <Stack
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <StackContentWrapper>
            <Header>
              <p>Tech Stack</p>
              <ExtraContent>
                <SmallBoxHeader>
                  <span>🫡</span>
                </SmallBoxHeader>
                <Spheare>
                  <p>More</p>
                </Spheare>
              </ExtraContent>
            </Header>
            <RightText>
              <p>Loading...</p>
            </RightText>
          </StackContentWrapper>
        </Stack>
      </ContentWrapper>
    </BoliAniContainer>
  );
};

export default BoliRun;
