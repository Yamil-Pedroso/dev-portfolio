import React from 'react'
import * as MyComponent from '../components'
import BackToTopBtn from '../components/back-to-top-btn/BackToTopBtn'
import styles from './styles.module.scss'

const Portfolio = () => {
  return (
    <div className={styles.portfolioWrapper}>
      <MyComponent.Navbar />
      <MyComponent.LogoProfile />
      <MyComponent.Hero />
      <MyComponent.About />
      <MyComponent.BoliRun />
      <MyComponent.MagnetIcons />
      <MyComponent.Functionality />
      <MyComponent.MoreUiUx />
      <MyComponent.Works />
      <MyComponent.NewContact />
      <BackToTopBtn />
    </div>
  )
}

export default Portfolio
