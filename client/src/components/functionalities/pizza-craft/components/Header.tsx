import { motion } from 'framer-motion';
import images from '../assets/images';
import { Link } from 'react-router-dom';

//const svgVariants = {
//  hidden: {
//    rotate: -180
//  },
//  visible: {
//    rotate: 0,
//    transition: {  duration: 1 }
//  }
//}

//const pathVariants = {
//  hidden: {
//    opacity: 0,
//    pathLength: 0
//  },
//  visible: {
//    opacity: 1,
//    pathLength: 1,
//    transition: {
//      duration: 2,
//      ease: 'easeInOut'
//    }
//  }
//}

const Header = () => {
  return (
    <header>
      <motion.div className="logo"
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.05}
      >
        <Link to="/">
          <img src={images.logoPizza} alt="pizza" style={{ width: 100 }}
          />
        </Link>

      </motion.div>
      <motion.div className="title"
        initial={{ y: -250 }}
        animate={{ y: -10}}
        transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
      >
        <h1>Pizza <span>Craft</span></h1>

      </motion.div>
    </header>
  )
}

export default Header;