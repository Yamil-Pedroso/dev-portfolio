import styled from 'styled-components';
import { BiSolidUser } from 'react-icons/bi';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #131314;
    border-radius: 5px;
    width: 18rem;
    height: 20rem;
    padding-bottom: 2.2rem;
    margin: 5rem auto;
    position: relative;
`;

export const UserWrapper = styled.div`
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background-color: #131314;
    border: 2px solid #131314;
    top: -2rem;
    position: absolute;
`;

export const UserIcon = styled(BiSolidUser)`
    width: 2.2rem;
    height: 2.2rem;
    color: #88419c;
    display: flex;
    margin: .8rem auto;
`;

export const Title = styled.h1`
    color: #a6a6a6;
    font-size: 1.2rem;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    margin-top: 3rem;
    margin-bottom: 1rem;

    span {
        color: #88419c;
    }
`;

export const InputWrapper = styled.div`
    
`;

export const Input = styled.input`
    margin-bottom: 1.25rem;
    padding: 6px;
    width: 15rem;
    border-radius: 5px;
    border: none;
    background-color: #1f1f1f;
    color: #bdbdbd;
    font-size: 16px;

    &::placeholder {
        margin: 0;
        padding: 0;
    }
`;

export const LoginRegisterWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const LoginBtn = styled.button`
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: #1a1a1a;
    color: #a6a6a6;
    font-size: 12px;
    cursor: pointer;
`;

export const RegisterBtn = styled.a`
    border-radius: 5px;
    border: none;
    color: #e2e2e2;
    font-size: 16px;
    cursor: pointer;

    p {
        text-decoration: none;
        color: #88419c;
        font-size: 12px;
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        text-transform: uppercase;
    }
`;

export const ForgotPasswordText = styled.div`
    margin-top: .5rem;
    margin-right: 6.5rem;
   p {
    text-decoration: none;
    color: #88419c;
    font-size: .7rem;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
    }
`;