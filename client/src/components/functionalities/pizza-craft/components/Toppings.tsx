import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import images from '../assets/images'
import { IoCheckmark } from 'react-icons/io5'

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      type: 'spring',
    },
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' },
  },
}

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: '0px 0px 8px rgb(255,255,255)',
    boxShadow: '0px 0px 8px rgb(255,255,255)',
    transition: {
      yoyo: Infinity,
      duration: 0.3,
    },
  },
}

interface ITopings {
  addTopping: (topping: string) => void
  pizza: {
    base: string
    toppings: string[]
  }
}

const Toppings = ({ addTopping, pizza }: ITopings) => {
  const toppings = [
    'mushrooms',
    'peppers',
    'onions',
    'olives',
    'extra cheese',
    'tomatoes',
  ]
  const toppingIcons = [
    images.mushrooms,
    images.chiliPeppers,
    images.onions,
    images.olives,
    images.extraCheese,
    images.tomatoes,
  ]

  return (
    <>
      <motion.div
        className="toppings"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <img
          src={images.pizzaChorrea}
          alt="pizza"
          className="pizza"
          style={{ width: 400 }}
        />
        <div style={{}}>
          <h3>Step 2: Choose Toppings</h3>
          <ul>
            {toppings.map((topping) => {
              const isActive = pizza.toppings.includes(topping)
              const spanClass = pizza.toppings.includes(topping) ? 'active' : ''

              return (
                <div className="topping-wrapper">
                  <motion.li
                    key={topping}
                    onClick={() => addTopping(topping)}
                    whileHover={{
                      scale: 1.1,
                      originX: 0,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                    }}
                  >
                    <span className={spanClass}>{topping}</span>
                  </motion.li>
                  <div key={topping}>
                    {isActive ? (
                      <div
                        style={{
                          position: 'relative',
                          display: 'inline-block',
                          width: 50,
                        }}
                      >
                        <img
                          src={toppingIcons[toppings.indexOf(topping)]}
                          alt={topping}
                          style={{ width: 50 }}
                        />
                        <IoCheckmark
                          style={{
                            position: 'absolute',
                            left: '3.5rem',
                            color: 'green',
                            fontSize: 30,
                          }}
                        />
                      </div>
                    ) : (
                      <img
                        src={toppingIcons[toppings.indexOf(topping)]}
                        alt={topping}
                        style={{ width: 50, filter: 'grayscale(100%)' }}
                      />
                    )}
                  </div>
                </div>
              )
            })}
          </ul>
          <Link to="/order">
            <motion.button variants={buttonVariants} whileHover="hover">
              Order
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </>
  )
}

export default Toppings
