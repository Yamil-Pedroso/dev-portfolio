import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../../style";
import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import CardAnimation from "../card-animation/CardAnimation";
import "./styles.css";

interface ServiceCardProps {
  index: number;
  title: string;
  icon: string;
  icons?: React.ElementType[];
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  index,
  title,
  icon,
  icons,
  description,
}: any) => {
  const backgroundColor = index % 2 === 0 ? "#61b272" : "#e9a13b";

  const cardStyle = {
    backgroundColor: backgroundColor,
  };

  return (
    <div className="card-service">
      <div
        style={cardStyle}
        className="first-content"
      >
        <img
          src={icon}
          alt="icon services"
          className="icon-services"
        />
        <h2 className="header-title">{title}</h2>
        <p className="services-description">
          {description}
        </p>
      </div>

      <div className="second-content">
        {icons &&
          icons.map((IconComponent: React.ElementType, iconIndex: number) => (
            <div className="iconsCard" key={iconIndex}>
              <IconComponent
                className={`icons ${
                  iconIndex % 2 === 0 ? "iconsEven" : "iconsOdd"
                }`}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="mt-[10rem] max-xs:mt-[3rem]" id="about">
      <motion.div variants={textVariant(0.01)}>
        <h2 className="text-[#fafafa] lg:text-[3.75rem] max-md:text-[2.75rem] md:text-[2.75rem]  max-sm:text-[2rem]">
          Introduction.
        </h2>
        <h2 className="bg-gradient-to-r from-[#46ca9e] via-[#4a7bf8] to-[#6289ef] bg-clip-text text-transparent lg:text-[3.5rem] max-md:text-[2.75rem] md:text-[2.75rem]  max-sm:text-[2rem] font-bold">
          Overview.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-[#a1a1aa] text-[1rem] max-sm:text-[.8rem] max-w-3xl leading-[1.8rem]"
      >
        I'm a full stack software developer with experience in TypeScript and
        JavaScript, and in frameworks like React, Node.js, Django, Three.js and
        now improving my Angular'skills. I'm a quick learner and collaborate
        closely with clients to create efficient, scalable, and user-friendly
        solutions that solve real-world problems. Let's work together to bring
        your ideas to life!
      </motion.p>

      <div className="services-wrapper">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
