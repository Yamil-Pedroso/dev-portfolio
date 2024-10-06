import React, { useEffect } from 'react';
import { ScrollAnimationWrapper, Header, Section, Outer, Inner, Bg, SectionHeading } from './scroll-animation.styles';

const ScrollAnimation: React.FC = () => {
    useEffect(() => {
        const sections = document.querySelectorAll('section');
        
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
              const heading = entry.target.querySelector('h2');
              if (heading) heading.classList.add('in-view');
            } else {
              entry.target.classList.remove('in-view');
              const heading = entry.target.querySelector('h2');
              if (heading) heading.classList.remove('in-view');
            }
          });
        }, {
          threshold: 0.5,
        });
      
        sections.forEach((section) => observer.observe(section));
      
        return () => {
          sections.forEach((section) => observer.unobserve(section));
        };
      }, []);
      
      

  return (
    <ScrollAnimationWrapper id="work">
      <Header>
        <div>Animated Sections</div>
      </Header>
      {['Scroll down', 'Animated with JavaScript', 'No GSAP', 'Animation platform', 'Keep scrolling'].map((text, index) => (
        <Section key={index} className={`section-${index + 1} ${index === 0 ? 'in-view' : ''}`}>
        <Outer>
          <Inner>
            <Bg className={`bg bg-${index + 1}`}>
              <SectionHeading>{text}</SectionHeading>
            </Bg>
          </Inner>
        </Outer>
      </Section>
      ))}
    </ScrollAnimationWrapper>
  );
};

export default ScrollAnimation;
