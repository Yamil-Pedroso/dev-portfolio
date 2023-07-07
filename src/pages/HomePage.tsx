import React from 'react'
import Home from '../components/home/Home'
import MySpringAni from '../components/spring-comp/MySpringAni'

const HomePage = () => {
  const welcome = 'Hi guys, feel free to visit my content.'
  
  return (
    <>
      <Home title={welcome} />
    </>
  )
}

export default HomePage