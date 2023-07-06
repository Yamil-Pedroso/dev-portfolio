import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HomeWrapper, BoxWrapper, BoxLink } from "./style";
import Rocket from "../rocket-comp/Rocket";
import JavaScript from "../rocket-comp/CompTwo";
import DB from "../rocket-comp/CompThree";
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

const myLinks = [
  "/portfolio",
  "https://www.linkedin.com/in/yamil-pedroso/",
  <Link to="#" />,
  <Link to="#" />,
  <Link to="#" />,
  <Link to="#" />,
  <Link to="#" />,
  <Link to="#" />,
  <Link to="#" />,
  <Link to="#" />,
  <Link to="#" />,
  <Link to="#" />,
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
      <JavaScript />
      <Rocket />
      <DB />
      <ValueAnimation />
    </>
  );
};

export default Home;
