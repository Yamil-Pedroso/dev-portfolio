
import RegisterForm from '../components/register/RegisterForm'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8rem;
`

const RegisterPage = () => {
  return (
    <Container>
        <RegisterForm />
    </Container>
  )
}

export default RegisterPage