import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 6rem;
`;

export const WidgetBasketWrapper = styled.div`
    display: flex;
    justify-content: center;

    div {
        margin: 0 3rem;
    }
`;

export const WidgetWrapper = styled.div`
    div {
        margin: 0.5rem;
    }
`;

export const Widget = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 16rem;
    height: 3rem;
    background-color: #1a1b1b;
    border: 2px solid #2d434d;
    border-radius: 0.2rem;
    cursor: pointer;

    img {
        margin-left: .5rem;
    }

    &:hover {
        transform: scale(1) translateY(-.3rem);
        transition: transform 0.3s ease-in-out;
    }
`;

export const DropZone = styled.div`
    width: 20rem;
    height: 22rem;
    border: 2px solid #2d434d;
    overflow: hidden;

    h2 {
        text-align: center;
        margin-top: .5rem;
        color: #354e73;
    }

    div {
        margin: 0.5rem;
    }
`;

export const DragItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 16rem;
    height: 3rem;
    background-color: #1a1b1b;
    border: 2px solid #2d434d;
    border-radius: 0.2rem;
    cursor: pointer;

    img {
        margin-left: .5rem;
    }
`;

export const PercentBar = styled.div`
    width: 30rem;
    height: 2rem;
    border: 1px solid #fff;
    border-radius: 0.2rem;
    display: flex;
    align-items: center;
    margin: 3rem auto;
    overflow: hidden;
`;

export const Percent = styled.div<{ fillPercent: number }>`
    width: ${({ fillPercent }) => `${fillPercent}%`};
    height: auto;
    background-color: #50a5d7;
    border-radius: 0.2rem;
    display: flex;
    transition: width 0.5s ease-in-out;
    
    span {
        color: #fff;
        font-weight: bold;
        justify-content: center;
        text-indent: .5rem;
        margin: 0 auto;
    }
`;

export const DropZoneWrapper = styled.div`
`;

export const BtnWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    button {
        margin-top: 1rem;
        
    }
`;
