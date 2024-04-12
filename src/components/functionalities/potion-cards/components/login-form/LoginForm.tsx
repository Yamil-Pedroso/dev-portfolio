import React, { useState} from 'react';
import { UseAuth } from '../../hook/AuthContext';

// Styled Components
import { Container, Input, InputWrapper, LoginBtn, LoginRegisterWrapper, UserWrapper, UserIcon, RegisterBtn, Title, ForgotPasswordText } from './styles';

const LoginForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = UseAuth();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => { 
    event.preventDefault();
     login(name, email, password);
     console.log("You are successfully logged in!", name, email, password);
  };
  

  return (
    <Container>
      <UserWrapper>
        <UserIcon />
      </UserWrapper>
        <Title><span>User</span> Login</Title>
      <form onSubmit={handleSubmit}>
        <InputWrapper>
          <Input
             type="text" 
             value={name} 
             placeholder='Name'
             onChange={(e) => setName(e.target.value)} 
            />
        </InputWrapper>
        <InputWrapper>
          <Input
            type="email" 
            value={email} 
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)} 
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            type="password" 
            value={password} 
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)} 
          />
        </InputWrapper>
        <LoginRegisterWrapper>
          <LoginBtn type="submit" >
            LOGIN
          </LoginBtn>
          <RegisterBtn
           
          >
            <p>Register</p>
          </RegisterBtn>
        </LoginRegisterWrapper>
      </form>
      <ForgotPasswordText>
        <p>Forgot Password?</p>
      </ForgotPasswordText>
    </Container>
  );
};

export default LoginForm;
