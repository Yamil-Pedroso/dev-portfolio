import styled from 'styled-components';
import { motion } from 'framer-motion';

interface FeedbackCardProps {
  expanded?: boolean;
}
  export const FeedbackContainer = styled.div`
    margin-top: 6rem;
    margin-bottom: 10rem;
  `;

export const FeedbackCardContainer = styled(motion.div)<FeedbackCardProps>`
  background-color: #161616;
  padding: 2rem;
  border-radius: 8px;
  width: 100%;
  height: auto;
  max-width: 30rem;
  display: flex;
  flex-direction: column;
  overflow: visible;

  //max-height: ${({ expanded }) => (expanded ? 'none' : '25rem')};
  //transition: max-height 0.7s ease-out;
`;

export const TestimonialText = styled.p<FeedbackCardProps>`
  color: #979797;
  letter-spacing: 0.05rem;
  font-size: 1rem;
  display: -webkit-box;
  //-webkit-line-clamp: ${({ expanded }) => (expanded ? 'none' : '6')}; 
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-grow: 1;
  //max-height: ${({ expanded }) => (expanded ? '100%' : '10rem')}; 
  //transition: max-height 0.7s ease-in-out, opacity 0.7s ease-in-out;
 //opacity: ${({ expanded }) => (expanded ? 1 : 0.7)};
  
`;

export const Name = styled.p`
  color: #747474;
  font-weight: 500;
  font-size: 16px;
`;

export const Designation = styled.p`
  margin-top: 0.5rem;
  color: #747474;
  font-size: 12px;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  filter: brightness(0.8);
`;

export const FeedbackFooter = styled.div`
  margin-top: 2rem; 
  display: flex;
    justify-content: space-between;
  align-items: center;
`;

export const FeedbackList = styled.div`
  margin-top: 5rem;
  padding-bottom: 5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  
`;


export const Header = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;
  text-align: center;
`;

export const ReadMoreButton = styled.button`
  background: none;
  border: none;
  color: #0099ff;
  cursor: pointer;
  font-size: 0.9rem;
  padding: 0;
  margin-top: 1rem;
  text-align: left;
  &:hover {
    text-decoration: underline;
  }
`;
