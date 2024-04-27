
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import images from '../assets/images'

const backdrop = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
}

const modal = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: 200,
    opacity: 1,
    transition: {
      delay: 0.3,
    },
  },
}

interface IModal {
  showModal: boolean
  setShowModal: (show: boolean) => void
}

const Modal = ({ showModal, setShowModal }: IModal) => {
  return (
    <AnimatePresence 
     mode="wait"
    >
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div className="modal" variants={modal}>
            <p>Want make another pizza?</p>
            <Link to="/">
              <motion.button
                onClick={() => setShowModal(false)}
                whileHover={{ scale: 1.1 }}
              >
                Start Again
              </motion.button>
            </Link>

            <div
              style={{
                margin: "1.5rem auto",
                marginTop: 20,
                borderRadius: "50%",
                width: 100,
                height: 100,
                overflow: "hidden",
                border: "3px solid #ff6b09",
              }}
            >
              <img src={images.pizzaDelivery} alt="pizza" 
                style={{ width: 100, borderRadius: "50%"}}
               />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal
