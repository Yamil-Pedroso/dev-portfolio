import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { IPizza } from '../types/types'

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

const nextVariants = {
  hidden: {
    x: '100vw',
  },
  visible: {
    x: 0,
    transition: { type: 'spring', stiffness: 120 },
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

const Base = ({ addBase, pizza }: IPizza) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust']

  return (
    <div>
      <motion.div
        className="base container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {/*<div className="desc-base">
          <h2>{descBase}</h2>
          <div>
            <p>{classicBase}</p>
            <p>{thinCrispy}</p>
            <p>{thickCrust}</p>
          </div>
        </div>*/}
        <div>
          <h3>Step 1: Choose Your Base</h3>
          <ul>
            {bases.map((base) => {
              const spanClass = pizza.base === base ? 'active' : ''

              return (
                <motion.li
                  key={base}
                  onClick={() => addBase(base)}
                  whileHover={{
                    scale: 1.1,
                    originX: 0,
                    color: '#f8e112',
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                  }}
                >
                  <span className={spanClass}>{base}</span>
                </motion.li>
              )
            })}
          </ul>

          {pizza.base && (
            <motion.div className="next" variants={nextVariants}>
              <Link to="/toppings">
                <motion.button variants={buttonVariants} whileHover="hover">
                  Next
                </motion.button>
              </Link>
            </motion.div>
          )}
        </div>
        <div>
          <img
            style={{ width: 250, borderRadius: 5 }}
            src="https://plus.unsplash.com/premium_photo-1673439299792-d5b80707851b?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="pizza"
          />
        </div>
      </motion.div>
    </div>
  )
}

export default Base
