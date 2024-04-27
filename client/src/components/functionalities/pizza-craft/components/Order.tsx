import { useEffect } from "react";
import { motion } from "framer-motion";
import images from "../assets/images";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

interface IPizza {
  pizza: {
    base: string;
    toppings: string[];
  };
  setShowModal: (show: boolean) => void;
}

const Order = ({ pizza, setShowModal }: IPizza) => {
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 5000);
  }, [setShowModal]);

  const toppingIcons: { [key: string]: string } = {
    mushrooms: images.mushrooms,
    peppers: images.chiliPeppers,
    onions: images.onions,
    olives: images.olives,
   "extra cheese": images.extraCheese,
    tomatoes: images.tomatoes,
  };


  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Thank you for your order :)</h2>

      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div className="order-toppings" variants={childVariants}>
        {pizza.toppings.map((topping) => (
          <span key={topping}>
            {topping}
            <motion.img
              src={toppingIcons[topping]}
              alt={topping}
              whileHover={{ scale: 1.3 }}
              style={{ width: 50 }}
            />
          </span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
