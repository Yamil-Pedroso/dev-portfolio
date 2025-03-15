import { useRef } from "react";
import {
  TemplatesContainer,
  TemplatesWrapper,
  ContentWrapper,
  ImageWrapper,
  CardWrapper,
} from "./styles";
import CardLayout from "../common/cards/CardLayout";
import { ui2 } from "../../assets";
import { cards } from "../../types/types";
import { motion, useInView } from "framer-motion";

const SideProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
        delay: i * 0.2,
      },
    }),
  };

  return (
    <TemplatesContainer id="templates">
      <TemplatesWrapper>
        <h1 className="header-title">Framer Templates Gallery</h1>
        <p className="header-desc">
          We could develop a custom version from scratch using our own code in
          various and modern technologies like React, Next.js, TypeScript,
          Angular..., or any stack that best fits your app project.
        </p>

        <ContentWrapper>
          <ImageWrapper>
            <motion.img
              ref={ref}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 1 }}
            src={ui2} alt="templates" className="templates-img" />
          </ImageWrapper>

          <CardWrapper>
            {cards.map((card, idx) => (
              <motion.div
                key={card.id}
                initial="hidden"
                whileInView="visible" // ✅ Se activa cuando entra al viewport
                viewport={{ once: false, amount: 0.3 }} // ✅ Detecta el 30% del elemento en viewport
                variants={cardVariants}
                custom={idx} // ✅ Pasamos el índice para el delay escalonado
              >
                <CardLayout
                  title={card.title}
                  icon={
                    typeof card.icon === "function" ? (
                      <card.icon className="icon" />
                    ) : null
                  }
                  link={card.link}
                  url="View"
                />
              </motion.div>
            ))}
          </CardWrapper>
        </ContentWrapper>

        {/*<ul>
          {cards.map((link) => (
            <li key={link.id}>
              <a
                href={link.url}
                target="_blank"
                rel="noreferrer"
                style={{ color: "#e76f51" }}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul> */}
      </TemplatesWrapper>
    </TemplatesContainer>
  );
};

export default SideProjects;
