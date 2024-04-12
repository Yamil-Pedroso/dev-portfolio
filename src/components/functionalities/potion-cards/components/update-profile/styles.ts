import styled from 'styled-components';
import { RxUpdate } from 'react-icons/rx';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.25rem 1.25rem 2.8rem 1.25rem;
    background-color: #131314;
    border-radius: 5px;
    width: 18rem;
    height: 25rem;
    margin: 5rem auto;
    position: relative;
`;

export const HeaderTitle = styled.h1`
    color: #cdcdcd;
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
    margin-top: 3.5rem;
    margin-bottom: 2rem;

    span {
        color: #88419c;
    }
`;

export const FigureWrapper = styled.div`
    margin: 0 auto;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background-color: #131314;
    border: 2px solid #131314;
    margin-bottom: .7rem;
    overflow: hidden;
`;

export const UpdateProfileWrapper = styled.div`
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background-color: #131314;
    border: 2px solid #131314;
    top: -2rem;
    position: absolute;
`;

export const UpdateProfileIcon = styled(RxUpdate)`
    width: 2.2rem;
    height: 2.2rem;
    color: #88419c;
    display: flex;
    margin: .8rem auto;
`;

export const Figure = styled.img`
    width: 4rem;
    height: 3.8rem;
    border-radius: 50%;
    display: flex;
    margin: 0 auto;
    object-fit: cover;
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

export const UpdateBtnWrapper = styled.div`
`;

export const UpdateBtn = styled.button`
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: #1a1a1a;
    color: #a6a6a6;
    font-size: 12px;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;

    &:hover {
        color: #88419c;
        transition: 0.3s ease-in-out;
    }
`;

export const CustomFileInput = styled.input`
    
`;