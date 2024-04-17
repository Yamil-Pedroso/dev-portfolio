import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Container,
  InputWrapper,
  Input,
  LoginBtn,
  RegisterBtn,
  LoginRegisterWrapper,
  RegisterWrapper,
  RegisterIcon,
  Title,
} from './styles'
import { useAuth } from '../../hook'
import { Toaster, toast } from 'sonner'

interface IRegisterFormProps {
  onLoginClick: () => void
}

const RegisterForm = ({ onLoginClick }: IRegisterFormProps) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    avatar: '',
  })
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    password: false,
    avatar: false,
  })
  const { register } = useAuth() as any

  const handleLoginClick = () => {
    onLoginClick()
  }

  const handleFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.type !== 'file') {
      const { name, value } = e.target

      setFormData({
        ...formData,
        [name]: value,
      })

      if (setFormErrors) {
        setFormErrors({ ...formErrors, [name]: false })
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.avatar
    ) {
      setFormErrors({
        name: !formData.name,
        email: !formData.email,
        password: !formData.password,
        avatar: !formData.avatar,
      })
      console.log('Register failed: Missing fields')

      navigate('/')
      return
    }

    const response = await register(formData)
    if (response.success) {
      console.log('User registered')
      toast.success('User registered')
      //setRedirect(true)
      //closeUserForm()
    } else {
      console.log(
        "Couldn't register user, this user may already exist or there was an error",
      )
    }

    setFormData({
      name: '',
      email: '',
      password: '',
      avatar: '',
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        avatar: e.target.files[0] as any,
      })
    }
  }

  return (
    <Container>
      <RegisterWrapper>
        <RegisterIcon />
      </RegisterWrapper>
      <Title>
        <span>User</span> Register
      </Title>
      <form onSubmit={handleSubmit}>
        <InputWrapper>
          <Input
            type="text"
            value={formData.name}
            name="name"
            placeholder="Name"
            onChange={handleFormData}
            className={formErrors.name ? 'error' : ''}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            type="email"
            value={formData.email}
            name="email"
            placeholder="Email"
            onChange={handleFormData}
            className={formErrors.email ? 'error' : ''}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            type="password"
            value={formData.password}
            name="password"
            placeholder="Password"
            onChange={handleFormData}
            className={formErrors.password ? 'error' : ''}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            type="file"
            name="avatar"
            accept="image/*"
            onChange={handleFileChange}
          />
        </InputWrapper>
        <LoginRegisterWrapper>
          <RegisterBtn type="submit">REGISTER</RegisterBtn>

          <LoginBtn
            onClick={ (e) => {
              e.preventDefault()
              handleLoginClick()
            }}
          >
            <p>Login</p>
          </LoginBtn>
        </LoginRegisterWrapper>
      </form>
      <Toaster 
        position="top-center"
      
      />
    </Container>
  )
}

export default RegisterForm
