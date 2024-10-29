import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FeedbackContainer,
  FeedbackList,
  Header,
} from "./styles";
import { SectionWrapper } from "../../hoc";
import { textVariant } from "../../utils/motion";
import { testimonials } from "../../constants";
import FeedBackCards from "./FeedBackCards";

const Feedbacks = () => {
  return (
    <FeedbackContainer id="testimonials">
      <motion.div variants={textVariant(1)}>
        <Header>Testimonials</Header>
      </motion.div>
      <FeedbackList>
        {testimonials.map((testimonial, index) => (
          <FeedBackCards key={testimonial.name} index={index} {...testimonial} />
        ))}
      </FeedbackList>
    </FeedbackContainer>
  );
};

export default Feedbacks;
