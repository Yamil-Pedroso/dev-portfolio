import { Container, Title, InputWrapper, Input, SendEmailBtnWrapper, SendEmailBtn, ForgotPasswordUserWrapper, ForgotPasswordUserIcon } from "./styles"

const ForgotPassword = () => {
  return (
    <Container>
      <ForgotPasswordUserWrapper>
        <ForgotPasswordUserIcon />
      </ForgotPasswordUserWrapper>
      <Title><span>Forgot</span> Password</Title> 
      <form>
        <InputWrapper>
          <Input type="email" placeholder="Email" />
        </InputWrapper>
        <SendEmailBtnWrapper>
          <SendEmailBtn type="submit">Send Email</SendEmailBtn>
        </SendEmailBtnWrapper>
      </form>
    </Container>
  )
}

export default ForgotPassword