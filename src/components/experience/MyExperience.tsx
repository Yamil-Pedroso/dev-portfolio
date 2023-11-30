import { useState, useEffect } from 'react'
import Modal from '../modal2/ModalTwo'
import { motion, useAnimation } from 'framer-motion'
import { textVariant } from '../../utils/motion'
import {
  Container,
  LeftSide,
  RightSide,
  ExperienceWrapper,
  ExperienceContainer,
  Experience,
} from './styles'
import { styles } from '../../style'
import { FaJournalWhills } from 'react-icons/fa'

import { Button, ModalTwo } from '../modal2/ModalTwo'

interface ModalProps {
  open: boolean
  bodyText: string
  buttonClick: () => void
  buttonName: string
  children?: React.ReactNode
}

const MyExperience: React.FC<ModalProps> = ({
  open,
  bodyText,
  buttonClick,
  buttonName,
}) => {
  return (
    <div id="work">
      <motion.div className="mb-20">
        <p
          className={`${styles.sectionSubText} text-center lg:text-[3.75rem] max-md:text-[2.75rem] md:text-[2.75rem]  max-sm:text-[2rem]`}
        >
          My Journey So Far.
        </p>
        <h2
          className={`${styles.sectionHeadText} bg-gradient-to-r from-[#46ca9e] to-[#6289ef] bg-clip-text text-transparent text-center lg:text-[3.5rem] max-md:text-[2.75rem] md:text-[2.75rem]  max-sm:text-[2rem]`}
        >
          Experience.
        </h2>
      </motion.div>
      <Container>
        <LeftSide>
          <FaJournalWhills size={40} />
          <motion.div initial="hidden" animate="visible" className="mb-10">
            <h2>Lorem ipsum, dolor sit amet consectetur.</h2>
          </motion.div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            eum. Quam, voluptates. Quaerat, quia. Quibusdam, quia. Quaerat,
            quia. Quibusdam, quia. Quaerat, quia. Quibusdam, quia. Quaerat,
            quia.
          </p>
        </LeftSide>
        <RightSide>
          <h2>Lorem ipsum, dolor sit amet consectetur.</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>

          <ExperienceContainer>
            <ExperienceWrapper>
              <Experience>
                <Modal
                  open={open}
                  buttonClick={buttonClick}
                  bodyText={'Hola mundillo'}
                  buttonName={'Frontend Developer'}
                ></Modal>
              </Experience>
            </ExperienceWrapper>
            <ExperienceWrapper>
              <Experience>
                <Modal
                  open={open}
                  buttonClick={buttonClick}
                  bodyText={'Hola mundillo'}
                  buttonName={'Javascript Frotened Developer'}
                />
              </Experience>
            </ExperienceWrapper>
            <ExperienceWrapper>
              <Experience>
                <Modal
                  open={open}
                  buttonClick={buttonClick}
                  bodyText={'Hola mundillo'}
                  buttonName={'FullStack Developer'}
                />
              </Experience>
            </ExperienceWrapper>
            <ExperienceWrapper>
              <Experience>
                <Modal
                  open={open}
                  buttonClick={buttonClick}
                  bodyText={'Hola mundillo'}
                  buttonName={'FullStack Developer'}
                />
              </Experience>
            </ExperienceWrapper>
            <ExperienceWrapper>
              <Experience>
                <Modal
                  open={open}
                  buttonClick={buttonClick}
                  bodyText={'Hola mundillo'}
                  buttonName={'FullStack Developer'}
                />
              </Experience>
            </ExperienceWrapper>
            <ExperienceWrapper>
              <Experience>
                <Modal
                  open={open}
                  buttonClick={buttonClick}
                  bodyText={'Hola mundillo'}
                  buttonName={'Project Support Artist'}
                />
              </Experience>
            </ExperienceWrapper>
            <ExperienceWrapper>
              <Experience>
                <Modal
                  open={open}
                  buttonClick={buttonClick}
                  bodyText={'Hola mundillo'}
                  buttonName={'Artist (Traditional and digital painting)'}
                />
              </Experience>
            </ExperienceWrapper>
            <ExperienceWrapper>
              <Experience>
                <Modal
                  open={open}
                  buttonClick={buttonClick}
                  bodyText={'Hola mundillo'}
                  buttonName={'Information Science and Technology'}
                />
              </Experience>
            </ExperienceWrapper>
            <ExperienceWrapper>
              <Experience>
                <Modal
                  open={open}
                  buttonClick={buttonClick}
                  bodyText={'Hola mundillo'}
                  buttonName={'Information Science and Technology'}
                />
              </Experience>
            </ExperienceWrapper>
          </ExperienceContainer>
        </RightSide>
      </Container>
    </div>
  )
}

export default MyExperience
