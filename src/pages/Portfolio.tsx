import React from 'react'
import * as MyComponent from '../components'
import BackToTopBtn from '../components/back-to-top-btn/BackToTopBtn'
import ValueAnimation from '../components/spring-comp/value-animation/ValueAnimation'

const Portfolio = () => {
  return (
    <>
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
    </>
  )
}

export default Portfolio