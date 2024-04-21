import styled from 'styled-components';

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    width: 25rem;
    height: 40vh;
    position: absolute;
    bottom: 0;
`;

export const Form = styled.form`
    width: 100%;
    display: flex;
    bottom: 0;
    padding: 20px 30px;
    position: absolute;
`;

export const Input = styled.input`
    width: 15rem;
    padding: 10px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    outline: none;
`;

export const Button = styled.button`
    height: 38px;
    border: 1px solid #ccc;
    background-color: #ccc;
    cursor: pointer;
    margin-left: 10px;
    padding: 0 20px;
    color: #000;
    border: none;
`;
