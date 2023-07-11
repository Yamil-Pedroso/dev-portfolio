import React from 'react'
import * as MyComponent from '../components'
import BackToTopBtn from '../components/back-to-top-btn/BackToTopBtn'
import ValueAnimation from '../components/spring-comp/value-animation/ValueAnimation'
import { FaArrowAltCircleLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import  styles from './styles.module.scss'

const Portfolio = () => {
  return (
    <div className={styles.portfolioWrapper}>
        <Link className={styles.backContentArrow} to="/">
            <FaArrowAltCircleLeft className={styles.backArrow} />
        </Link>
        <MyComponent.Navbar />
        <MyComponent.Hero />
        <MyComponent.About />
        <MyComponent.Experience />
        <MyComponent.Tech />
        <MyComponent.Works />
        <div className="relative z-0">
          <MyComponent.Contact />
        </div>
        <BackToTopBtn />
    </div>
  )
}

export default Portfolio