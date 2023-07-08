import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HomeWrapper, BoxWrapper, BoxLink } from "./style";
import ValueAnimation from "../spring-comp/value-animation/ValueAnimation";
import {
  BsBriefcaseFill,
  BsLinkedin,
  BsGithub,
  BsFillBrushFill,
  BsDiscord,
  BsFacebook,
  BsYoutube,
  BsNvidia,
  BsTwitter,
} from "react-icons/bs";
import { AiFillGitlab } from "react-icons/ai";
import { SiAdobephotoshop, SiFigma } from "react-icons/si";

interface HomeProps {
  title?: string;
}

const myIcons = [
  <BsBriefcaseFill />,
  <BsLinkedin />,
  <BsGithub />,
  <BsFillBrushFill />,
  <AiFillGitlab />,
  <BsDiscord />,
  <BsFacebook />,
  <BsYoutube />,
  <BsNvidia />,
  <BsTwitter />,
  <SiAdobephotoshop />,
  <SiFigma />,
];


const Home = (props: HomeProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <>
      <ValueAnimation />
    </>
  );
};

export default Home;
