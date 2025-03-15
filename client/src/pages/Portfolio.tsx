import { useState, useEffect } from 'react'
import * as MyComponent from '../components'
import BackToTopBtn from '../components/back-to-top-btn/BackToTopBtn'
import styles from './styles.module.scss'
import ModalNote from '../components/modal-note/ModalNote'

const Portfolio = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={styles.portfolioWrapper}>
      {isModalOpen && <ModalNote onClose={closeModal} />}
      <MyComponent.CustomCursor isHovering={isHovering} />
      <MyComponent.Navbar />
      <MyComponent.Hero />
      <MyComponent.About />
      <MyComponent.BoliRun />
      <MyComponent.MagnetIcons />
      {/*<MyComponent.MagnetIcons2 /> */}
      <MyComponent.Functionality />
      <MyComponent.SideProjects />
      <MyComponent.Works setIsHovering={setIsHovering} />
      <MyComponent.Feedbacks />
      <MyComponent.NewContact />
      <BackToTopBtn />
    </div>
  )
}

export default Portfolio
