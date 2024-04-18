import { useState } from 'react'
import { Container } from './styles'
import { MdClose } from 'react-icons/md'

const LandingPage = () => {
  const [hoveredSplitLeft, setHoveredSplitLeft] = useState(false)
  const [hoveredSplitRight, setHoveredSplitRight] = useState(false)

  const [paymentBoxActive, setPaymentBoxActive] = useState(false)

  const handleClickPaymentBox = () => {
    setPaymentBoxActive(!paymentBoxActive)
 }

    const handleMouseEnter = (side: string) => {
       const  splitLeft = document.querySelector('.split.left') as HTMLElement
         const  splitRight = document.querySelector('.split.right') as HTMLElement
    
          if (side === 'left') {
                setHoveredSplitLeft(true)
                splitLeft.style.width = '75%'
                splitRight.style.width = '25%'
            
          } else {
                setHoveredSplitRight(true)
                splitLeft.style.width = '25%'
                splitRight.style.width = '75%'
          }
    }

    const handleMouseLeave = (side: string) => {
       const  splitLeft = document.querySelector('.split.left') as HTMLElement
         const  splitRight = document.querySelector('.split.right') as HTMLElement
    
          if (side === 'left') {
                setHoveredSplitLeft(false)
                splitLeft.style.width = '50%'
                splitRight.style.width = '50%'
          } else {
                setHoveredSplitRight(false)
                splitLeft.style.width = '50%'
                splitRight.style.width = '50%'
          }
    }

  return (
    <>
    <Container>
      <div className="split left"
        onMouseEnter={() => handleMouseEnter('left')}
        onMouseLeave={() => handleMouseLeave('left')}
      >
        <h1 className="title">Playstation 5</h1>
        <div
        onClick={handleClickPaymentBox}
        className={`btn-buy`}
        >Buy Now</div>
      </div>
      <div className="split right"
        onMouseEnter={() => handleMouseEnter('right')}
        onMouseLeave={() => handleMouseLeave('right')}
      >
        <h1 className="title">XBox Series X</h1>
        <div
        onClick={handleClickPaymentBox}
         className="btn-buy">Buy Now</div>
      </div>
      <div className="payment-box" style={{display: paymentBoxActive ? 'block' : 'none'}}>
         <p>Strip method of payment</p>
         <MdClose className="close-icon" onClick={handleClickPaymentBox} />
      </div>
    </Container>
    </>
  )
}

export default LandingPage