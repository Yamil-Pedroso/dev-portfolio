import { useState, useEffect } from 'react'
import { Container } from './styles'
import { game } from '../../assets/index'

const Functionality = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [activeTextIndex, setActiveTextIndex] = useState(0)
  const headerText = ['FULLSTACK', 'BACKEND', 'FRONTEND']

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTextIndex((prevIndex) => (prevIndex + 1) % headerText.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  const handleMouseEnter = (index: any) => {
    setHoveredIndex(index)
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
  }

  return (
    <Container>
      <div className="header-wrapper">
        <h1>
          Teach Stack: <span>{headerText[activeTextIndex]}</span>
        </h1>
      </div>
      <div className="card-wrapper">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={handleMouseLeave}
            key={i}
            className="card"
          >
            <p className={`card-text ${hoveredIndex === i ? 'visible' : ''}`}>
              Lorem Ipsum
            </p>
            <img src={game} alt="game" />
            <div className="card-content"></div>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default Functionality
