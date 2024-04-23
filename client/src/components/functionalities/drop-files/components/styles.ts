import styled from 'styled-components';

export const root = {
    '--input-bg': '#2a2b2b',
    '--border-color': '#8f8f8f',
    '--txt-second-color': '#777',
    '--box-bg': '#fff',
    '--box-shadow': '0 0 10px rgba(0, 0, 0, 0.1)',
    '--blue-color': '#4d85ff',
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
`;

const DropFileInputs = styled.div` 
    margin-top: 1rem auto;
    width: 25rem;
    height: 12.5rem;
    border: 2px dashed ${root['--border-color']};
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    //background-color: ${root['--input-bg']};
    &:hover,
    &.dragover {
        opacity: 0.6;
    }
`;

const StyledInput = styled.input`
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
`;

const Label = styled.div`
    text-align: center;
    color: ${root['--txt-second-color']};
    font-weight: 600;
    padding: 10px;
    p {
        margin-top: 10px;
        span {
            color: ${root['--txt-second-color']};
            font-weight: 400;
            text-decoration: underline;
            color: ${root['--blue-color']};
            cursor: pointer;
        }
    }
    img {
        width: 100px;
    }
`;

const DropFilePreview = styled.div`
    margin-top: 30px;
    p {
        font-weight: 500;
    }
`;

const PreviewTitle = styled.p`
    margin-bottom: 20px;
    color: ${root['--txt-second-color']};
`;

const PreviewItem = styled.div`
    position: relative;
    display: flex;
    margin-bottom: 10px;
    background-color: ${root['--input-bg']};
    padding: 1rem 5rem 1rem 1rem;
    border-radius: .5rem;
    &:hover .DeleteButton {
        opacity: 1;
    }
`;

const ItemImage = styled.img`
    width: 50px;
    margin-right: 20px;
`;

const ItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const DeleteButton = styled.div`
   
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    box-shadow: ${root['--box-shadow']};
    cursor: pointer;
    opacity: 1;
    transition: opacity 0.3s ease;
`;

export {
    Container,
    DropFileInputs,
    StyledInput,
    Label,
    DropFilePreview,
    PreviewTitle,
    PreviewItem,
    ItemImage,
    ItemInfo,
    DeleteButton
};