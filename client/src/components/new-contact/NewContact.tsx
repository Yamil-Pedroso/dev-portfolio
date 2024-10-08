import {
  Container,
  UserContent,
  Header,
  ContentWrapper,
  Content,
  RightContent,
  LeftContent,
  FormWrapper,
  LeftSideForm,
  RightSideForm,
  Form,
} from "./styles";
import { contact } from "../../constants";
import { IconType } from "react-icons";

const NewContact = () => {
  return (
    <Container id="contact">
      <UserContent>
        <Header>
          <h2>Header</h2>
          <p>Subtitle</p>
        </Header>
        <ContentWrapper>
          <RightContent>
            {contact.slice(0, 3).map((item, index) => (
              <Content key={index}>
                <div className="icon-box">
                  {typeof item.icon === "string" ? (
                    <img src={item.icon} />
                  ) : (
                    <item.icon />
                  )}
                </div>
                <div className="cont-wrapper">
                  <p>{item.content}</p>
                </div>
              </Content>
            ))}
          </RightContent>
          <LeftContent>
            {contact.slice(3, contact.length).map((item, index) => (
              <Content key={index}>
                <div className="icon-box">
                  {typeof item.icon === "string" ? (
                    <img src={item.icon} />
                  ) : (
                    <item.icon />
                  )}
                </div>
                <div>
                  <p>{item.content}</p>
                </div>
              </Content>
            ))}
          </LeftContent>
        </ContentWrapper>
      </UserContent>

      <FormWrapper>
        <LeftSideForm>
            <h2>Lorem Ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              efficitur, libero ut vehicula dictum, metus lacus fermentum
              lectus, quis tincidunt nunc mauris ac purus. Nullam nec nisl
                ultricies, tincidunt sapien vel, lacinia nunc. Nulla facilisi.
            </p>
        </LeftSideForm>
          <RightSideForm>
            <Form>
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
              <button>Submit</button>
            </Form>
          </RightSideForm>
      </FormWrapper>
    </Container>
  );
};

export default NewContact;
