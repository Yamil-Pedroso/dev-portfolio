import React from 'react'
import { BoxWrapperOne, BoxWrapperTwo, HeroContainer } from './style'
import { codingBackend } from '../../assets'

interface HeroProps {
    image: string
}

const HeroCreative = () => {
  return (
    <HeroContainer>
        <BoxWrapperOne>
            <img src={codingBackend} alt="coding" width={232} />
        </BoxWrapperOne>
    </HeroContainer>
  )
}

export default HeroCreative