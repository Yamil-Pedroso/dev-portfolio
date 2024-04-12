import styled from 'styled-components';
import { MdPassword } from 'react-icons/md';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.25rem;
    background-color: #131314;
    border-radius: 5px;
    width: 18rem;
    height: 15.5rem;
    margin: 5rem auto;
    position: relative;
`;

export const PasswordIconWrapper = styled.div`
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background-color: #131314;
    border: 2px solid #131314;
    top: -2rem;
    position: absolute;
`;

export const PasswordIcon = styled(MdPassword)`
    width: 2.2rem;
    height: 2.2rem;
    color: #88419c;
    display: flex;
    margin: .8rem auto;
`;


export const HeaderTitle = styled.h1`
    color: #cdcdcd;
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
    margin-top: 1rem;
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

export const UpdatePasswordBtnWrapper = styled.div`
`;

export const UpdatePasswordBtn = styled.button`
   padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: #1a1a1a;
    color: #a6a6a6;
    font-size: 12px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        color: #88419c;
        transition: .3s ease-in-out;
    }
`;
