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
  "./linkedinGray.png",
  "./github.png",
  "./gitlabGray.png",
  "./settingsGray.png",
  "./figmaGray.png",
];


const ValueAnimation = () => {
  interface keyProps {
    key: React.Key | null | undefined;
  }
  const navigate = useNavigate();

  const myUrls = [
    "https://www.linkedin.com/in/yamil-pedroso/",
    "https://github.com/Yamil-Pedroso",
    "https://gitlab.com/Yamirovinci",
    "https://yp-dev-functionalities.netlify.app/",
    "https://yp-ui-design.netlify.app/",
  ];
  
  return (
    <div className={styles.body}>
      <div className={styles.dockWrapper}>
        <p>👋 Hi guys, feel free to visit my content.</p>
        <Link to="/portfolio"><div className="text-[#0099ff] text-center mt-[4rem]">Portfolio</div></Link>
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
