import React, { useState } from 'react'
import { BoxWrapperOne, BoxWrapperTwo, HeroContainer } from './style'
import { codingBackend } from '../../assets'

interface HeroProps {
    image: string
}

const title = "Hola"

const HeroCreative = () => {
  const [girar, setGirar] = useState(true)

  const handleClick = () => {
    setGirar(!girar)
  }

  return (
    <HeroContainer>

        <BoxWrapperOne>
              <img src={codingBackend} alt="coding" width={232} />
        </BoxWrapperOne>
    </HeroContainer>
  )
}

export default HeroCreative