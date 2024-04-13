import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container } from './styles';
import './styles.css'
import {
    FaJournalWhills,
    FaLock,
    FaLockOpen,
    FaReact,
    FaJsSquare,
    FaHtml5,
    FaCss3Alt,
    FaNodeJs,
    FaDatabase,
    FaGitAlt,
    FaGithub,
    FaNpm,
    FaSass,
    FaBootstrap,
    FaYarn,
    FaPython,
} from 'react-icons/fa';

const InfiniteSliders = styled(Slider)`
  .slick-list {
    overflow: hidden;
    
  }

  .slick-slide {
    padding-right: 1rem;
    box-sizing: content-box;
  }
`;

const IconContainer = styled.div`
  margin-right: 1rem; 
`;

const InfiniteSlider: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 8000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    arrows: false,
    pauseOnHover: false,

  };

  const images = [
    {
        id: 1,
        icon: <FaReact />,
    },
    {
        id: 2,
        icon: <FaJsSquare />,
    },
    {
        id: 3,
        icon: <FaHtml5 />,
    },
    {
        id: 4,
        icon: <FaCss3Alt />,
    },
    {
        id: 5,
        icon: <FaNodeJs />,
    },
    {
        id: 6,
        icon: <FaDatabase />,
    },
    {
        id: 7,
        icon: <FaGitAlt />,
    },
    {
        id: 8,
        icon: <FaGithub />,
    },
    {
        id: 9,
        icon: <FaNpm />,
    },
    {
        id: 10,
        icon: <FaSass />,
    },
    {
        id: 11,
        icon: <FaBootstrap />,
    },
    {
        id: 12,
        icon: <FaYarn />,
    },
    {
        id: 13,
        icon: <FaPython />,
    },
    {
        id: 14,
        icon: <FaJournalWhills />,
    },
    {
        id: 15,
        icon: <FaLock />,
    },
    {
        id: 16,
        icon: <FaLockOpen />,
    },
  ];

  return (
    <InfiniteSliders {...settings} className='slide'>
      {images.map((image, index) => (
        <Container key={index} >
            <IconContainer>
            <div className="flex justify-center items-center h-[5rem] w-[5rem] bg-[#080808] rounded-full">
                {image.icon}
            </div>
            </IconContainer>
        </Container>
      ))}
    </InfiniteSliders>
  );
};

export default InfiniteSlider;

