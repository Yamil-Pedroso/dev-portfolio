import React, { useState } from 'react'
import { useAuth } from '../../hook'

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

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [formErrors, setFormErrors] = useState({
    email: false,
    password: false,
  })
  const { login, logout } = useAuth() as any

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
      console.log('Login failed: Missing fields')
      return
    }

    const response = await login(formData)
    if (response.success) {
      console.log('User logged in')
    } else {
      console.log('Login failed: Invalid credentials')

      setFormErrors({ email: true, password: true })
    }
  }

  const handleLogout = async () => {
    logout()
    console.log('You are successfully logged out!')
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
          <RegisterBtn>
            <p>Register</p>
          </RegisterBtn>
        </LoginRegisterWrapper>
      </form>
      <ForgotPasswordText>
        <p>Forgot Password?</p>
      </ForgotPasswordText>
    </Container>
  )
}

export default LoginForm
