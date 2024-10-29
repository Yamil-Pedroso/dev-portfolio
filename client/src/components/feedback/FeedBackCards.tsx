import { useState, useRef } from 'react'
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import {
    FeedbackCardContainer,
    TestimonialText,
    Name,
    Designation,
    Avatar,
    FeedbackFooter,
} from './styles'
import { FaStar } from 'react-icons/fa'

const containerVariants = {
    hidden: {
      transition: {
        staggerChildren: 0.2, // Delay each star by 0.2s
      },
    },
    visible: {
      transition: {
        staggerChildren: 0.3, // Delay each star by 0.2s
      },
    },
  };
  

  const starVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

const FeedBackCards = ({
    index,
    testimonial,
    name,
    designation,
    company,
    image,
  }: any) => {
    const [expanded, setExpanded] = useState(false);
    const [isOverflowing, setIsOverflowing] = useState(false);
    const textRef = useRef<HTMLParagraphElement>(null);
  
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.2,
    });
  
    return (
      <FeedbackCardContainer
        ref={ref}
        variants={fadeIn("", "spring", index * 0.5, 0.75)}
        expanded={expanded}
      >
        {
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            style={{
              display: "flex",
              marginBottom: "1rem",
              gap: "0.5rem",
            }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                variants={starVariants}
              >
                <FaStar color="#0099ff" />
              </motion.div>
            ))}
          </motion.div>
        }
        <TestimonialText>{testimonial}</TestimonialText>
  
        <FeedbackFooter>
          <div>
            <Name>{name}</Name>
            <Designation>{designation}</Designation>
          </div>
          <Avatar src={image} alt={`feedback_by-${name}`} />
        </FeedbackFooter>
      </FeedbackCardContainer>
    );
  };

export default FeedBackCards
  