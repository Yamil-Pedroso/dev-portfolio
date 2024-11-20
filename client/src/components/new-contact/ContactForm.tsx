import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FormWrapper, Form } from "./styles";

interface IContactFormProps {
    animateSubmitBtn: boolean;
}

const ContactForm: React.FC<IContactFormProps> = ({ animateSubmitBtn }) => {
    const controls = useAnimation();

    useEffect(() => {
        const animateBounce = async () => {
          if (animateSubmitBtn) {
            await controls.start({
              x: 10, 
              transition: {
                type: "spring",
                stiffness: 500,
                damping: 15,
                duration: 0.2,
              },
            });
      
            await controls.start({
              x: 0, 
              transition: {
                type: "spring",
                stiffness: 500,
                damping: 15,
                duration: 0.2,
              },
            });
          }
        };
      
        animateBounce();
      }, [animateSubmitBtn, controls]);
      
      
  return (
    <FormWrapper
    initial={{ y: -300, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: 300, opacity: 0 }}
    transition={{
      type: "spring",
      stiffness: 150,
      damping: 10,
    }}
  >
      <Form
        initial={{ y: -300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 300, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 10,
        }}
      >
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message"></textarea>
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.9 }} 
          animate={controls} 
        >
          Submit
        </motion.button>
      </Form>
  </FormWrapper>
  )
}

export default ContactForm