import { useState } from 'react'
import * as MyComponent from '../components'
import BackToTopBtn from '../components/back-to-top-btn/BackToTopBtn'
import styles from './styles.module.scss'

const Portfolio = () => {
  const [isHovering, setIsHovering] = useState(false);
  
  return (
    <div className={styles.portfolioWrapper}>
      <MyComponent.CustomCursor isHovering={isHovering} />
      <MyComponent.Navbar />
      <MyComponent.Hero />
      <MyComponent.About />
      <MyComponent.BoliRun />
      <MyComponent.MagnetIcons />
      <MyComponent.Functionality />
      <MyComponent.Works setIsHovering={setIsHovering} />
      <MyComponent.Feedbacks />
      <MyComponent.NewContact />
      <BackToTopBtn />
    </div>
  )
}

export default Portfolio
