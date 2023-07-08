import * as React from "react";
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
import { Link, useNavigate } from "react-router-dom";

import { Card } from "./components/Card";
import { Dock } from "./components/Dock";
import { DockCard } from "./components/DockCard";
import { DockDivider } from "./components/DockDivider";

import styles from "./styles.module.scss";

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

const GRADIENTS = [
  "./bag.png",
  "./linkedin.png",
  "./github.png",
  "./gitlab.png",
  "./functionality.png",
  "./figma.png",
];


const ValueAnimation = () => {
  const navigate = useNavigate();

  const myUrls = [
     "/portfolio",
    "https://www.linkedin.com/in/yamil-pedroso/",
    "https://github.com/Yamil-Pedroso",
  ];
  return (
    <div className={styles.body}>
      <div className={styles.dockWrapper}>
      <p>👋 Hi guys, feel free to visit my content.</p>
      <Link to="/portfolio">Portfolio</Link>
        <Dock>
          {GRADIENTS.map((src, index) =>
            src ? (
              <DockCard key={src}>
                <Card src={src} url={myUrls[index]} />
              </DockCard>
            ) : (
              <DockDivider key={index} />
            )
          )}
        </Dock>
      </div>
    </div>
  );
};

export default ValueAnimation;
