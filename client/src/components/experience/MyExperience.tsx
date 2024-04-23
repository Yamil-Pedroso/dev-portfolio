import { useState, useEffect } from "react";
import Modal from "../modal2/ModalTwo";
import { motion, useAnimation } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import Reveal from "../reveal-animation/Reveal";
import {
  Container,
  LeftSide,
  RightSide,
  ExperienceWrapper,
  ExperienceContainer,
  Experience,
} from "./styles";
import { styles } from "../../style";
import { pc } from "../../assets/index";
import { FaJournalWhills } from "react-icons/fa";
import MyCarousel from "../slider2/MyCarrusel";
import CardAnimation from "../card-animation/CardAnimation";

//interface ModalProps {
//  open: boolean;
//  bodyText: string;
//  bodyText2?: string;
//  buttonClick: () => void;
//  buttonName: string;
//  children?: React.ReactNode;
//}

interface ExperienceData {
  id: number;
  title: string;
  description1: string;
  description2?: string;
  date?: string;
  location?: string;
}

const experienceData: ExperienceData[] = [
  {
    id: 1,
    title: "Frontend Developer",
    description1:
      "Build the UI/UX of the website as well as the responsive design and functionality of the product in question.",
    description2: "Tech: Node-React-Typescript",
    date: "2022-2023",
    location: "Squib Startup, Zurich, Switzerland",
  },
  {
    id: 2,
    title: "Javascript Frotened Developer",
    description1:
      "Completed the Brainnest Frontend Development Industry Training",
    description2: "Tech: HTML-CSS-JS",
    date: "2023",
    location: "Brainnest, Berlin, Germany",
  },
  {
    id: 3,
    title: "FullStack Developer",
    description1: "BootCamp at Le Wagon",
    description2: "Tech: Ruby-Ruby on rails-JS-SQL",
    date: "2022",
    location: "Le Wagon, Zurich, Switzerland",
  },
  {
    id: 4,
    title: "FullStack Developer",
    description1:
      "Frontend: - Test the UI for a plugin and insert it into online store. Shopify online store registration form.",
    description2:
      "Backend: - Qiibee API integration with Shopify API key in Node JS and Shopify Partners. Registration form (email, password). Technologies used: React JS, Emotion JS, Redux, Node JS, Requests (GET, POST, PUT/ PATCH, DELETE (testing in Postman), Login + JWT, Ngrok (Secure tunnel server for testing URLs), Postman, APIs (Qiibee API key consumption)",
    date: "2021",
    location: "Qiibee AG, Zug, Switzerland",
  },
  {
    id: 5,
    title: "FullStack Developer",
    description1:
      "BootCamp at SIT academy(React-Node.js-JS) I strengthen the acquired knowledge by starting my own projects.",
    description2: "",
    date: "2020",
    location: "Constructor Academy, Zurich, Switzerland",
  },
  {
    id: 6,
    title: "Project Support Artist",
    description1: "Visual presentation of the different project stages.",
    description2:
      "Art paintings for the project exhibition and for the project documentation.",
    date: "2018",
    location: "Mundus Vita, Zurich, Switzerland",
  },
  {
    id: 7,
    title: "Artist (Traditional and digital painting)",
    description1: "Traditional and digital painting.",
    description2: "",
    date: "2010-2017",
    location: "Almost Famous Gallery, Habana, Cuba",
  },
  {
    id: 8,
    title: "Information Science and Technology",
    description1: "Network manager and telecommunications.",
    description2: "",
    date: "2010-2017",
    location: "Casa del Alba, Habana, Cuba",
  },
  {
    id: 9,
    title: "Information Science and Technology",
    description1: "Network manager and telecommunications.",
    description2: "",
    date: "2022-2023",
    location: "UNESCO, Habana, Cuba",
  },
];
const MyExperience = () => {
  const [openModalId, setOpenModalId] = useState<number | null>(null);

  const handleButtonClick = (id: number) => {
    setOpenModalId(id);
  };

  const handleCloseModal = () => {
    setOpenModalId(null);
  };

  return (
    <div className="mt-[6rem] max-xs:mt-[3rem]" id="work">
      <Reveal>
        <div className="mb-20">
          <motion.p
            variants={fadeIn("", "", 0.1, 2)}
            className={`${styles.sectionSubText} text-center lg:text-[3.75rem] max-md:text-[2.75rem] md:text-[2.75rem]  max-sm:text-[2rem]`}
          >
            My Journey So Far.
          </motion.p>
          <h2
            className={`${styles.sectionHeadText} bg-gradient-to-r from-[#46ca9e] to-[#6289ef] bg-clip-text text-transparent text-center lg:text-[3.5rem] max-md:text-[2.75rem] md:text-[2.75rem]  max-sm:text-[2rem]`}
          >
            Experience.
          </h2>
        </div>
      </Reveal>
      <Reveal>
        <Container>
          <LeftSide>
            <FaJournalWhills size={40} />
            <motion.div initial="hidden" animate="visible" className="mb-10">
              <h2># My Full Stack Journey.</h2>
            </motion.div>
            <motion.p variants={fadeIn("", "", 0.1, 2)}>
              As a passionate Full Stack Developer, my journey in the world of
              software development has been an exciting exploration of both
              front-end and back-end technologies. ## Frontend Wizardry ✨ In
              the realm of front-end development, I've crafted seamless user
              interfaces using cutting-edge technologies like React.js. From
              responsive design to intuitive user experiences, I thrive on
              transforming ideas into visually stunning and user-friendly
              applications🚀.
            </motion.p>
            <div className="card-animation-wrapper">
              <CardAnimation />
            </div>
          </LeftSide>
          <RightSide>
            <h2>Feel free to explore...🤓</h2>
            <p>
              ## Full Stack Fusion 🌐 Bringing it all together, my Full Stack
              journey is a fusion of creativity and functionality. I've embraced
              the challenges of bridging the gap between frontend and backend,
              ensuring seamless communication and delivering holistic solutions.
              Join me as I continue to evolve, learn, and contribute to the
              ever-evolving landscape of Full Stack Development!
            </p>

            <ExperienceContainer>
              {experienceData.map((experience) => (
                <ExperienceWrapper key={experience.id}>
                  <Experience onClick={() => handleButtonClick(experience.id)}>
                
                      <Modal
                        className="modal-experience"
                        open={openModalId === experience.id}
                        buttonClick={handleCloseModal}
                        date={experience.date}
                        location={experience.location}
                        bodyText={experience.description1}
                        bodyText2={experience.description2}
                        buttonName={experience.title}
                      />
                   
                  </Experience>
                </ExperienceWrapper>
              ))}
            </ExperienceContainer>
            <MyCarousel />
          </RightSide>
        </Container>
      </Reveal>
    </div>
  );
};

export default MyExperience;
