import * as React from 'react'
import { BsBriefcaseFill, BsLinkedin, BsGithub, BsFillBrushFill, BsDiscord, BsFacebook, BsYoutube, BsNvidia, BsTwitter } from 'react-icons/bs';
import { AiFillGitlab } from 'react-icons/ai';
import { SiAdobephotoshop, SiFigma } from 'react-icons/si';
import { Link, useNavigate } from 'react-router-dom'

import { Card } from './components/Card'
import { Dock } from './components/Dock'
import { DockCard } from './components/DockCard'
import { DockDivider } from './components/DockDivider'

import styles from './styles.module.scss'

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
  <SiFigma />
];

const GRADIENTS = [
  './bag.png',
  './python.png',
  './reactjs.png',
  './typescript.png',
  './nodejs.png',
  './figma.png',
]



const ValueAnimation = () => {

  return (
    <div className={styles.body}>
      <Dock>
        {GRADIENTS.map((src, index) =>
          src ? (
            <DockCard key={src}>
              <Card src={src} />
            </DockCard>
          ) : (
            <DockDivider key={index} />
          )
        )}
      </Dock>
    </div>
  )
}

export default ValueAnimation