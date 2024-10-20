import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FeedbackCardContainer,
  FeedbackContainer,
  FeedbackList,
  Header,
  TestimonialText,
  Name,
  Designation,
  Avatar,
  ReadMoreButton,
  FeedbackFooter,
} from "./styles";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import { testimonials } from "../../constants";
import { FaStar } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const starVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }, 
};

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

const FeedbackCard = ({
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

    // Usar el hook useInView para detectar cuándo el componente es visible
    const { ref, inView } = useInView({
      triggerOnce: true, // La animación se dispara solo una vez
      threshold: 0.2, // El porcentaje de visibilidad antes de que se dispare (20% visible)
    });

  //useEffect(() => {
  //  const textElement = textRef.current;
  //  if (textElement) {
  //    setIsOverflowing(textElement.scrollHeight > textElement.clientHeight);
  //  }
  //}, [testimonial]);

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
              style={{ display: "flex" }}
            >
              <FaStar color="#0099ff" />

            </motion.div>
          ))}
        </motion.div>
      }
      <TestimonialText>{testimonial}</TestimonialText>

      {/*{isOverflowing && !expanded && (
        <ReadMoreButton onClick={() => setExpanded(true)}>Read more</ReadMoreButton>
      )}
      {expanded && (
        <ReadMoreButton onClick={() => setExpanded(false)}>Read less</ReadMoreButton>
      )}*/}

     
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

const Feedbacks = () => {
  return (
    <FeedbackContainer id="testimonials">
      <motion.div variants={textVariant(1)}>
        <Header>Testimonials</Header>
      </motion.div>
      <FeedbackList>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </FeedbackList>
    </FeedbackContainer>
  );
};

export default SectionWrapper(Feedbacks, "");
