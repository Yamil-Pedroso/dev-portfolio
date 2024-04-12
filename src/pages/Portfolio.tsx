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
      <MyComponent.MyExperience />
      <MyComponent.Functionality />
      <MyComponent.Works />
      <MyComponent.ContactCard />
      <div className="relative z-0">
        <MyComponent.Contact />
      </div>
      <BackToTopBtn />
    </div>
  )
}

export default Portfolio
