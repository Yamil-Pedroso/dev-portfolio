import LoginForm from "../components/login-form/LoginForm"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8rem;
`

interface ILoginFormProps {
  onRegisterClick: () => void
}

const LoginPage = (
  { onRegisterClick }: ILoginFormProps
) => {
  return (
    <Container>
        <LoginForm 
          onRegisterClick={() => onRegisterClick()}
         />
    </Container>
  )
}

export default LoginPage