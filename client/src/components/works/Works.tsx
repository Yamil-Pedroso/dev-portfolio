import { WorkContainer, ProjectHeader } from "./styles";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import TabCards from "./tabcards/TabCards";

interface WorksProps {
  setIsHovering: (hovering: boolean) => void;
}

const Works: React.FC<WorksProps> = ({ setIsHovering }) => {
  return (
    <WorkContainer>
      <ProjectHeader variants={textVariant(1)} id="projects">
        <p className="proj-title">My work</p>
        <h2 className="proj-sub">Projects.</h2>
        <motion.p variants={fadeIn("", "", 0.1, 1)} className="desc">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </ProjectHeader>

      <div className="text-white flex justify-center">
        <TabCards onHoverCard={setIsHovering} />
      </div>
    </WorkContainer>
  );
};

export default Works;
