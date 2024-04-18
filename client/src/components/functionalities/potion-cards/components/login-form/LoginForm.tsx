import { useState, useEffect } from 'react'
import { useAuth } from '../../hook'
import { Toaster, toast } from 'sonner'

// Styled Components
import {
  Container,
  Input,
  InputWrapper,
  LoginBtn,
  LoginRegisterWrapper,
  UserWrapper,
  UserIcon,
  RegisterBtn,
  Title,
  ForgotPasswordText,
} from './styles'

interface ILoginFormProps {
  onRegisterClick: () => void
}

const LoginForm = ({ onRegisterClick }: ILoginFormProps) => {

  const [formData, setFormData] = useState({ email: '', password: '' })
  const [formErrors, setFormErrors] = useState({
    email: false,
    password: false,
  })
  const { user, login, logout } = useAuth() as any

  const handleRegisterClick = () => {
    onRegisterClick()
  }
  const handleFormData = (e: any) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })

    if (setFormErrors) {
      setFormErrors({ ...formErrors, [name]: false })
    }
  }

  const handleFormSubmit = async (e: any) => {
    e.preventDefault()

    if (!formData.email || !formData.password) {
      setFormErrors({ email: !formData.email, password: !formData.password })
      toast.error('Please fill in all fields')
      console.log('Login failed: Missing fields')
      return
    }

    

    const response = await login(formData)
    if (response.success) {
      console.log('User logged in')
      toast.success('User logged in')
    } else {
      toast.error('Your email or password is incorrect')
      console.log('Login failed: Invalid credentials')

      setFormErrors({ email: true, password: true })
    }
    setFormData({ email: '', password: '' })
  }

  return (
    <Container>
      <UserWrapper>
        <UserIcon />
      </UserWrapper>
      <Title>
        <span>User</span> Login
      </Title>
      <form onSubmit={handleFormSubmit}>
        <InputWrapper>
          <Input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleFormData}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            type="password"
            name="password"
            value={formData.password}
            placeholder="Password"
            onChange={handleFormData}
          />
        </InputWrapper>
        <LoginRegisterWrapper>
          <LoginBtn type="submit">LOGIN</LoginBtn>
          <RegisterBtn
            onClick={handleRegisterClick}
          >
            <p>Register</p>
          </RegisterBtn>
        </LoginRegisterWrapper>
      </form>
      {/*<ForgotPasswordText>
        <p>Forgot Password?</p>
  </ForgotPasswordText>*/}
    <Toaster
      position="top-center"
     />
    </Container>
  )
}

export default LoginForm
