
import RegisterForm from '../components/register/RegisterForm'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8rem;
`

interface IRegisterFormProps {
  onLoginClick: () => void
}

const RegisterPage = ({ onLoginClick }: IRegisterFormProps) => {
  return (
    <Container>
        <RegisterForm
          onLoginClick={onLoginClick}
         />
    </Container>
  )
}

export default RegisterPage