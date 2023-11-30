import React, { useState } from 'react';
import Marquee, { MarqueeProps } from 'react-marquee-slider';
import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaNodeJs, FaDatabase, FaGitAlt, FaGithub, FaNpm, FaSass, FaBootstrap, FaYarn, FaPython} from 'react-icons/fa';

const MyCarrousel = () => {
    const icons = [
        <FaReact />,
        <FaJsSquare />,
        <FaHtml5 />,
        <FaCss3Alt />,
        <FaNodeJs />,
        <FaDatabase />,
        <FaGitAlt />,
        <FaGithub />,
        <FaNpm />,
        <FaSass />,
        <FaBootstrap />,
        <FaYarn />,
        <FaPython />,
    ];

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const marqueeProps: MarqueeProps = {
        velocity: isHovered ? 0 : 25,
        direction: 'ltr' as const, 
        scatterRandomly: false,
        resetAfterTries: 100,
        onInit: () => {
            console.log('Marquee initialized');
        },
        onFinish: () => {
            console.log('Marquee finished');
        },
    };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ 
                height: '500px', 
                overflow: 'hidden',
                marginTop: '4.5rem',
             }}
        >
            <Marquee {...marqueeProps}>
                {icons.map((icon, index) => (
                    <div key={index} style={{ marginRight: '20px', fontSize: "3rem", color: "#2a2a2a" }}>
                        {icon}
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default MyCarrousel;
