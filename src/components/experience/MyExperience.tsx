import Modal from "../modal2/ModalTwo";
import {
  Container,
  LeftSide,
  RightSide,
  ExperienceWrapper,
  ExperienceContainer,
  Experience,
} from "./styles";

const MyExperience = () => {
  return (
    <Container>
      <LeftSide>
        <h2>Lorem ipsum, dolor sit amet consectetur.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          eum. Quam, voluptates. Quaerat, quia. Quibusdam, quia. Quaerat, quia.
          Quibusdam, quia. Quaerat, quia. Quibusdam, quia. Quaerat, quia.
        </p>
      </LeftSide>
      <RightSide>
        <h2>Lorem ipsum, dolor sit amet consectetur.</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>

        <ExperienceContainer>
          <ExperienceWrapper>
            <Experience>
              <h4>Frontend Developer</h4>
              <p></p>
            </Experience>
          </ExperienceWrapper>
          <ExperienceWrapper>
            <Experience>
            <h4>Javascript Frontend Developer</h4>
            <p></p>
            </Experience>
          </ExperienceWrapper>
          <ExperienceWrapper>
            <Experience>
            <h4>Full Stack Developer</h4>
            <p></p>
            </Experience>
          </ExperienceWrapper>
          <ExperienceWrapper>
            <Experience>
            <h4>Full Stack Developer</h4>
            <p></p>
            </Experience>
          </ExperienceWrapper>
          <ExperienceWrapper>
            <Experience>
            <h4>Full Stack Developer</h4>
            <p></p>
            </Experience>
          </ExperienceWrapper>
          <ExperienceWrapper>
            <Experience>
            <h4>Project Support Artist</h4>
            <p></p>
            </Experience>
          </ExperienceWrapper>
          <ExperienceWrapper>
            <Experience>
            <h4>Artist (Traditional and digital painting)</h4>
            <p></p>
            </Experience>   
          </ExperienceWrapper>
          <ExperienceWrapper>
            <Experience>
            <h4>Information Science and Technology</h4>
            <p></p>
            </Experience>
          </ExperienceWrapper>
          <ExperienceWrapper>
            <Experience>
            <h4>Information Science and Technology</h4>
            <p></p>
            </Experience>
          </ExperienceWrapper>
        </ExperienceContainer>
      </RightSide>
    </Container>
  );
};

export default MyExperience;
