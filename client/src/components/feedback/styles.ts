import styled from "styled-components";
import { motion } from "framer-motion";

interface FeedbackCardProps {
  expanded?: boolean;
}
export const FeedbackContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 6rem;
  margin-bottom: 10rem;

  @media (max-width: 520px) {
    margin: 2.5rem auto;
    width: 90%;
  }
`;

export const FeedbackCardContainer = styled(motion.div)<FeedbackCardProps>`
  display: flex;
  flex-direction: column;
  background-color: #161616;
  padding: 2rem;
  border-radius: 8px;
  height: auto;
  max-width: 30rem;
  overflow: visible;
`;
export const FeedbackList = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;

  @media (max-width: 520px) {
    margin-top: 2rem;
  }
`;

export const TestimonialText = styled.p<FeedbackCardProps>`
  color: #979797;
  letter-spacing: 0.05rem;
  font-size: 1rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-grow: 1;
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

export const Header = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;
  text-align: center;

  background-image: linear-gradient(to right, #0099ff, #55b1bf, #4e67a5);
  background-size: 50%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
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
