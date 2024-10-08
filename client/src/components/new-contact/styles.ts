import styled from "styled-components";

export const Container = styled.div`
    width: 82.5rem;
    height: auto;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    border: 1px solid #232323;
    border-radius: 5px;
    margin-bottom: 15rem;
`;

export const UserContent = styled.div`
    padding: 2rem;
`;

export const Header = styled.div`
    
`;

export const ContentWrapper = styled.div`
    display: flex;
    margin-top: 2rem;
    gap: 5rem;
`;

export const Content = styled.div`
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    .icon-box {
        display: flex;
        gap: 1rem;
        padding: 1rem;
        background-color: #303030;
        border-radius: 5px;
        img {
            width: 5rem;
            height: 5rem;
        }
    }
`;

export const RightContent = styled.div`
   
`;

export const LeftContent = styled.div`
    
`;

export const FormWrapper = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding: 2rem;
    background-color: #161616;
    `;

export const RightSideForm = styled.div`
            
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: .6rem;
   
    div {
        display: flex;
        flex-direction: column;
    }
    input {
        padding: .2rem;
        background-color: #000000;
        color: white;
    }
    textarea {
        padding: 1rem;
        background-color: #000000;
        color: white;
    }

    button {
        padding: 1rem;
        background-color: #000000;
        color: white;
        border: none;
        cursor: pointer;
    }
`;

export const LeftSideForm = styled.div`
    width: 50%;
`;
