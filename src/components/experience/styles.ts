import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;

    div {
        margin: .7rem;
    }
`;

export const LeftSide = styled.div`
  width: 25rem;
  height: 45rem;
  background:#101010;
  box-shadow: 0px 0px 80px 1rem rgba(24, 35, 29, 0.1);
  border-radius: 1.2rem;
  border: 1px solid #201f1f;
  padding: 1rem;

    h2 {
        color: #fff;
        font-size: 1.3rem;
        margin: 1rem;
        letter-spacing: -.01rem;
        font-weight: bold;
    }

    p {
        color: #6C6C6C;
        font-size: .8rem;
        margin: 1rem;
        letter-spacing: -.01rem;

    }
`;

export const RightSide = styled.div`
    width: 55rem;
    height: 45rem;
    background-color: #101010;
    border-radius: 1.2rem;
    box-shadow: 0px 0px 80px 1rem rgba(24, 35, 29, 0.1);
    border: 1px solid #101010;
    padding: 1rem;

    h2 {
        color: #fff;
        font-size: 1.3rem;
        margin: 1rem;
        letter-spacing: -.01rem;
        font-weight: bold;
    }

    p {
        color: #6C6C6C;
        font-size: .8rem;
        margin: 1rem;
        letter-spacing: -.01rem;

    }
`;

export const ExperienceContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    div {
        margin: .7rem;
    }
`;

export const ExperienceWrapper = styled.div`
    width: 15rem;
    display: flex;
    flex-direction: column;
    background: #070707;
    border-radius: .6rem;
    border : 1px solid #1f3328;
    box-shadow: 0px 0px 80px 1rem rgba(12, 17, 15, 0.1);
    cursor: pointer;
    transition: all .2s ease-in-out;

    &:hover {
        transform: translateY(-.5rem);
    }
`;

export const Experience = styled.div`
  color: #C6C6C6;

   h4 {
        font-size: .7rem;
        margin: 1rem;
        letter-spacing: -.01rem;
    }

    p {
        font-size: .8rem;
        margin: 1rem;
        letter-spacing: -.01rem;

    }

`;
