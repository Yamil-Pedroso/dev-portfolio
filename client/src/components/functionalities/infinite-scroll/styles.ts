import styled, {keyframes} from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import { FaUserAstronaut } from 'react-icons/fa';
import { GrStatusGoodSmall } from 'react-icons/gr';
import { GiCharacter } from 'react-icons/gi';
import { PiGenderFemaleBold, PiGenderMaleBold } from 'react-icons/pi';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    flex-direction: column;
    
    h1 {
        color: #cccccc;
        text-align: center;
    }

    button {
        width: 8rem;
        height: 2rem;
        background-color: #4ac3a7;
        color: #1a1a1a;
        border: none;
        border-radius: 0.5rem;
        margin-top: 1rem;
        cursor: pointer;
        transition: all 0.5s ease-in-out;
    }
`;

export const CloseIcon = styled(AiOutlineClose)`
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 2rem;
    color: #cccccc;
    cursor: pointer;
`;

export const CharacterContent = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    margin-top: 1rem;
`;

export const CharacterWrapper = styled.div`
    transition: all 0.5s ease-in-out;

    img {
        width: 8rem;
    }
`;

export const CharacterCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 10rem;
    height: 100%;
    margin: 0.5rem;
   
    border-radius: 0.5rem;
    border: 2px solid #397191;
    background-color: #202126;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
    cursor: pointer;

    div {
        color: #cccccc;
    }

    img {
        width: 16rem;
        object-fit: cover;
    }

    &:hover {
        transform: scale(1.1) translateY(-1rem);
    }
`;

export const LoadBtnWrapper = styled.div`
    margin-bottom: 3rem;
    margin: 3rem auto;
`;

export const ArrowWrapper = styled.div`
`;

export const ModalAnimation = keyframes`
    from {
        opacity: 0;
        transform: translateY(-10rem);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const ModalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #202126;
    border-radius: 0.5rem;
    width: 30rem;
    height: 40rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ${ModalAnimation} 0.5s ease-in-out;
    z-index: 10;
`;

export const ModalContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    
    justify-content: center;

    div {
        img {
            width: 20vw;
            height: 30rem;
            object-fit: cover;
            background-position: center;
            background-size: cover;
            filter: brightness(90%);
        }
    }
    
    p {
        color: #cccccc;
    }
`;

export const ImageWrapper = styled.div`
    width: 100%;
    
`;

export const IconContentWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-left: 2rem;
    

    p {
        margin-left: 0.5rem;
        margin-top: .8rem;
        font-size: 1.5rem;
    }
`;

export const NameCharacter = styled(GiCharacter)`
    font-size: 2rem;
    color: #3a8044;
`;

export const StatusCharacter = styled(GrStatusGoodSmall)`
    font-size: 2rem;
    color: #3a8044;
`;

export const GenderCharacterMale = styled(PiGenderMaleBold)`
    font-size: 2rem;
    color: #3a8044;
`;

export const GenderCharacterFemale = styled(PiGenderFemaleBold)`
    font-size: 2rem;
    color: #3a8044;
`;

export const TypeIcon = styled(FaUserAstronaut)`
    font-size: 2rem;
    color: #3a8044;
`;

