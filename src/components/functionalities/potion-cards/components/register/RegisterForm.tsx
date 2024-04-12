import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, InputWrapper, Input, LoginBtn, RegisterBtn, LoginRegisterWrapper, RegisterWrapper, RegisterIcon, Title  } from './styles'
import { UseAuth } from '../../hook/AuthContext'

const RegisterForm = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { register } = UseAuth()

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        register(name, email, password)
        navigate('/')
        console.log("You are successfully registered!", name, email, password)
    }

  return (
    <Container>
        <RegisterWrapper>
            <RegisterIcon />
        </RegisterWrapper>
        <Title><span>User</span> Register</Title>
        <form onSubmit={handleSubmit}>
            <InputWrapper>
                <Input type="text" value={name} placeholder='Name' onChange={(e) => setName(e.target.value)} />
            </InputWrapper>
            <InputWrapper>
                <Input type="email" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
            </InputWrapper>
            <InputWrapper>
                <Input type="password" value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
            </InputWrapper>
            <LoginRegisterWrapper>
                <RegisterBtn type="submit">
                    REGISTER
                </RegisterBtn>

               <LoginBtn>
                  <p>Login</p>
               </LoginBtn>
             </LoginRegisterWrapper>
        </form>
    </Container>
  )
}

export default RegisterForm 