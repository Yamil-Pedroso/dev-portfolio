import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
   margin-top: 4rem;
`;

export const UlList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    margin-right: 2rem;
`

export const LiList = styled.li`
    margin: 0 10px;

    a {
        text-decoration: none;
        color: #88419c;
        font-size: 1.2rem;
        font-weight: bold;
        font-family: 'Roboto', sans-serif; 

        &:hover {
            color: #bf3ce4;
            transition: .3s ease-in-out;
        }
    }

    button {
        border: none;
        background-color: #131314;
        padding: .8rem 1rem;
        color: #88419c;
        font-size: 1.2rem;
        font-weight: bold;
        font-family: 'Roboto', sans-serif;
        cursor: pointer;

        &:hover {
            color: #bf3ce4;
            transition: .3s ease-in-out;
        }
    }
`

export const UserProperWrapper = styled.div`
    color: #cdcdcd;
    font-family: 'Roboto', sans-serif;
    display: flex;
    align-items: center;

    div {
        margin: 0 10px;

        p {
            span {
                color: #88419c;
                font-weight: bold;
            }
        }
    }
`;

export const ImgProfileWrapper = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
    border: 3px solid #88419c;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;