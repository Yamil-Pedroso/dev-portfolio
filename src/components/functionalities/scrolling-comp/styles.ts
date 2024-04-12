import styled from 'styled-components';

export const Container = styled.div`
     margin-top: 50px;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    border-radius: 10px;
`;

export const CardContent = styled.div`
   width: 26rem;
   margin-top: 20px;

   h3 {
        font-size: 3rem;
        font-family: 'Helvetica Neue', sans-serif;
        color: #a2a2a2;
   }

    p {
        font-size: 1rem;
        font-family: 'Helvetica Neue', sans-serif;
        color: #666;
    }
`;
