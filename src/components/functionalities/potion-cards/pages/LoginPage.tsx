import LoginForm from "../components/login-form/LoginForm"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8rem;
`
const LoginPage = () => {
  return (
    <Container>
        <LoginForm />
    </Container>
  )
}

export default LoginPage