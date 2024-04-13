import ForgotPassword from "../components/forgot-password/ForgotPassword"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8rem;
`

const ForgotPasswordPage = () => {
  return (
    <Container>
      <ForgotPassword />
    </Container>
  )
}

export default ForgotPasswordPage